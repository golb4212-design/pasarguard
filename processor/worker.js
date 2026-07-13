/* BLUEPANEL_PROCESSOR_WORKER
 * Dedicated BluePanel Processor bundle.
 * D1 binding: PROCESSOR_DB
 * Service bindings: CORE_WORKER, EDGE_WORKER
 * Version: 2.9.0
 */

const BLUEPANEL_PROCESSOR_APP = (() => {
/* BLUEPANEL_PROCESSOR_WORKER
 * BluePanel background processor / third Worker
 * Version: 2.9.0
 * Required D1 binding: PROCESSOR_DB
 */

const PROCESSOR_VERSION = "2.9.0";
const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
let schemaPromise = null;

function json(data, status = 200, headers = {}) { return new Response(JSON.stringify(data), { status, headers: { ...JSON_HEADERS, ...headers } }); }
function fail(error, status = 400, code = "PROCESSOR_ERROR") { return json({ success: false, ok: false, error: String(error || "خطا"), code }, status); }
function nowIso() { return new Date().toISOString(); }
function randomId(prefix = "job") { const bytes = crypto.getRandomValues(new Uint8Array(18)); return prefix + "_" + btoa(String.fromCharCode(...bytes)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,""); }
function isServiceBinding(binding) { return Boolean(binding && typeof binding.fetch === "function"); }
function hasCoreServiceBinding(env) { return isServiceBinding(env?.CORE_WORKER); }
function hasEdgeServiceBinding(env) { return isServiceBinding(env?.EDGE_WORKER); }
function isInternalHost(hostname) { return String(hostname || "").toLowerCase().endsWith(".internal"); }
function selectedHeaders(headers) { const skip = new Set(["host","content-length","connection","accept-encoding","cf-ray","cf-visitor","cf-ew-via","cdn-loop"]); const out = {}; for (const [k,v] of headers.entries()) if (!skip.has(k.toLowerCase())) out[k]=v; return out; }
function isQueuedWebhook(path, method) { return method === "POST" && (/^\/sales-bot\/[^/]+\/webhook$/.test(path) || /^\/sales-payments\/[^/]+\/blupal\/webhook$/.test(path)); }
function isCacheable(path, method) { return method === "GET" && (/^\/sales-app\/[^/]+$/.test(path) || /^\/sales-manifest\/[^/]+\.webmanifest$/.test(path) || /^\/reseller-control\/[^/]+$/.test(path) || path === "/assets/bluepanel-icon.svg"); }

async function ensureDb(env) {
  if (!env.PROCESSOR_DB) throw new Error("Binding دیتابیس PROCESSOR_DB متصل نیست");
  if (!schemaPromise) {
    schemaPromise = (async () => {
      const statements = [
        `CREATE TABLE IF NOT EXISTS processor_settings (key TEXT PRIMARY KEY,value TEXT NOT NULL,updated_at TEXT NOT NULL)`,
        `CREATE TABLE IF NOT EXISTS processor_jobs (id TEXT PRIMARY KEY,method TEXT NOT NULL,path_query TEXT NOT NULL,headers_json TEXT NOT NULL DEFAULT '{}',body_text TEXT NOT NULL DEFAULT '',status TEXT NOT NULL DEFAULT 'pending',attempts INTEGER NOT NULL DEFAULT 0,next_attempt_at TEXT NOT NULL,last_error TEXT,created_at TEXT NOT NULL,updated_at TEXT NOT NULL)`,
        `CREATE INDEX IF NOT EXISTS idx_processor_jobs_pending ON processor_jobs(status,next_attempt_at,created_at)`,
        `CREATE TABLE IF NOT EXISTS processor_metrics (id INTEGER PRIMARY KEY AUTOINCREMENT,kind TEXT NOT NULL,path TEXT,status INTEGER,duration_ms INTEGER NOT NULL DEFAULT 0,created_at TEXT NOT NULL)`,
        `CREATE INDEX IF NOT EXISTS idx_processor_metrics_created ON processor_metrics(created_at DESC)`
      ];
      for (let i=0;i<statements.length;i++) { try { await env.PROCESSOR_DB.prepare(statements[i]).run(); } catch (error) { throw new Error("PROCESSOR_DB schema step " + (i+1) + " failed: " + (error?.message || error)); } }
      await env.PROCESSOR_DB.prepare("SELECT key FROM processor_settings LIMIT 1").first();
      return true;
    })().catch(error => { schemaPromise = null; throw error; });
  }
  return schemaPromise;
}
async function getSettings(env) { await ensureDb(env); const rows = await env.PROCESSOR_DB.prepare("SELECT key,value FROM processor_settings").all(); const out = { public_origin:"", cache_seconds:"60", processed_jobs:"0", last_core_ok_at:"", last_edge_ok_at:"", last_error:"" }; for (const row of rows.results || []) out[row.key]=row.value; return out; }
async function setSettings(env, values) { await ensureDb(env); const ts=nowIso(); const stmts=Object.entries(values).map(([k,v])=>env.PROCESSOR_DB.prepare("INSERT INTO processor_settings(key,value,updated_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(k,String(v ?? ""),ts)); if (stmts.length) await env.PROCESSOR_DB.batch(stmts); }
async function recordMetric(env, kind, path, status, duration) { try { await env.PROCESSOR_DB.prepare("INSERT INTO processor_metrics(kind,path,status,duration_ms,created_at) VALUES(?,?,?,?,?)").bind(kind,String(path||"").slice(0,400),Number(status||0),Number(duration||0),nowIso()).run(); } catch (_) {} }

function processorRelatedBindingNames(env) { try { return Object.keys(env || {}).filter(name => /(?:WORKER|_DB$|BLUEPANEL_ROLE)/i.test(String(name))).sort(); } catch (_) { return []; } }
function processorBindingRuntimeInfo(env,name) { const exact=Object.prototype.hasOwnProperty.call(env||{},name),value=exact?env[name]:undefined,related=processorRelatedBindingNames(env),normalized=String(name).replace(/[^a-z0-9]/gi,'').toLowerCase(); return { name,exact_key_present:exact,value_present:value!==undefined&&value!==null,value_type:value===null?'null':typeof value,fetch_callable:Boolean(value&&typeof value.fetch==='function'),constructor_name:value?.constructor?.name||'',related_binding_names:related,similar_binding_names:related.filter(item=>String(item).replace(/[^a-z0-9]/gi,'').toLowerCase()===normalized&&item!==name) }; }
async function shallowServiceHealth(env,name,url,expectedRole) {
  const runtime=processorBindingRuntimeInfo(env,name),probeId=randomId('processorprobe'),base={name,expected_role:expectedRole,checked_at:nowIso(),probe_id:probeId,runtime,binding_detected:runtime.fetch_callable,reachable:false,healthy:false,latency_ms:null,http_status:null,response_role:'',response_version:'',error_stage:runtime.fetch_callable?'':(runtime.exact_key_present?'binding_not_fetchable':'binding_missing'),error:runtime.fetch_callable?'':`Binding ${name} در Runtime فعال نیست`};
  if(!runtime.fetch_callable)return {...base,ok:false}; const started=Date.now();
  try { const response=await Promise.race([env[name].fetch(new Request(url,{headers:{'x-bluepanel-service-hop':'processor-control','x-bluepanel-probe-id':probeId,'x-bluepanel-source-version':PROCESSOR_VERSION,'accept':'application/json'}})),new Promise((_,reject)=>setTimeout(()=>reject(new Error('مهلت پاسخ Service Binding تمام شد')),6000))]); const raw=await response.text(); let data=null; try{data=raw?JSON.parse(raw):{}}catch(_){}; const out={...base,reachable:true,latency_ms:Date.now()-started,http_status:response.status,content_type:response.headers.get('content-type')||'',response_role:String(data?.role||response.headers.get('x-bluepanel-role')||''),response_version:String(data?.version||response.headers.get('x-bluepanel-version')||''),response_preview:raw.slice(0,320),data:data||undefined}; if(!data){out.error_stage='non_json_response';out.error='پاسخ JSON نیست';}else if(out.response_role!==expectedRole){out.error_stage='role_mismatch';out.error=`نقش مقصد ${out.response_role||'نامشخص'} است؛ ${expectedRole} انتظار می‌رود`;}else if(data.database_query_ok===false||data.ok===false){out.error_stage=data.database_query_ok===false?'target_database_error':'target_unhealthy';out.error=String(data.error||'پاسخ سرویس معتبر نیست').slice(0,800);}else if(!response.ok){out.error_stage='http_error';out.error=String(data.error||`HTTP ${response.status}`).slice(0,800);}else{out.healthy=true;out.error_stage='';out.error='';} return {...(data||{}),...out,ok:out.healthy,binding_detected:true,probe:out}; } catch(error){const out={...base,latency_ms:Date.now()-started,error_stage:String(error?.message||'').includes('مهلت')?'timeout':'fetch_failed',error:String(error?.message||error).slice(0,800)};return {...out,ok:false,probe:out};}
}
async function localStatus(env) {
  const bindingDetected = Boolean(env.PROCESSOR_DB); let databaseQueryOk=false,pendingJobs=0,processedJobs=0;
  if (bindingDetected) {
    try { await ensureDb(env); await env.PROCESSOR_DB.prepare("SELECT 1 AS ok").first(); databaseQueryOk=true; const pending=await env.PROCESSOR_DB.prepare("SELECT COUNT(*) AS count FROM processor_jobs WHERE status='pending'").first(); pendingJobs=Number(pending?.count||0); const settings=await getSettings(env); processedJobs=Number(settings.processed_jobs||0); } catch (_) {}
  }
  return { success:true, ok:bindingDetected&&databaseQueryOk, role:"bluepanel-processor", service:"bluepanel-processor", version:PROCESSOR_VERSION, split_runtime:true, role_bundle:"processor", binding_detected:bindingDetected, database_query_ok:databaseQueryOk, core_binding_detected:hasCoreServiceBinding(env), edge_binding_detected:hasEdgeServiceBinding(env), pending_jobs:pendingJobs, processed_jobs:processedJobs, checked_at:nowIso(), runtime_bindings:{ CORE_WORKER:processorBindingRuntimeInfo(env,"CORE_WORKER"), EDGE_WORKER:processorBindingRuntimeInfo(env,"EDGE_WORKER") } };
}
async function fullStatus(env) {
  const local = await localStatus(env);
  const [core,edge] = await Promise.all([
    shallowServiceHealth(env,"CORE_WORKER","https://bluepanel-core.internal/__bluepanel/service/core-health","bluepanel-core"),
    shallowServiceHealth(env,"EDGE_WORKER","https://bluepanel-edge.internal/__bluepanel/service/edge-health","bluepanel-edge")
  ]);
  const connected = local.ok && core.ok && edge.ok;
  try { await setSettings(env,{ last_core_ok_at:core.ok?nowIso():"", last_edge_ok_at:edge.ok?nowIso():"", last_error:connected?"":String(core.error||edge.error||"").slice(0,800) }); } catch (_) {}
  return { ...local, connected, status:connected?"connected":"partial", core_ok:core.ok===true, edge_ok:edge.ok===true, core_version:core.version||core.response_version||"", edge_version:edge.version||edge.response_version||"", core_error:core.error||"", edge_error:edge.error||"", checked_at:nowIso(), runtime_bindings:{ CORE_WORKER:processorBindingRuntimeInfo(env,"CORE_WORKER"), EDGE_WORKER:processorBindingRuntimeInfo(env,"EDGE_WORKER") }, core_probe:core.probe||core, edge_probe:edge.probe||edge };
}

async function forwardToCore(request, env, ctx) {
  if (!hasCoreServiceBinding(env)) return fail("Binding با نام CORE_WORKER متصل نیست",503,"CORE_BINDING_MISSING");
  const start=Date.now(),incoming=new URL(request.url),headers=new Headers(request.headers);
  ["host","content-length","cf-ray","cf-visitor","cf-ew-via","cdn-loop"].forEach(h=>headers.delete(h));
  headers.set("x-bluepanel-service-hop","processor-to-core"); headers.set("x-bluepanel-edge-delivery","1");
  const init={method:request.method,headers,redirect:"manual"}; if (!["GET","HEAD"].includes(request.method)) init.body=request.body;
  const upstream=await env.CORE_WORKER.fetch(new Request(request.url,init));
  const responseHeaders=new Headers(upstream.headers); responseHeaders.set("x-bluepanel-processor",PROCESSOR_VERSION); responseHeaders.set("x-bluepanel-upstream","core-service-binding");
  ctx?.waitUntil(recordMetric(env,"proxy",incoming.pathname,upstream.status,Date.now()-start));
  return new Response(upstream.body,{status:upstream.status,statusText:upstream.statusText,headers:responseHeaders});
}
async function enqueueWebhook(request, env, ctx) {
  const url=new URL(request.url),body=await request.text(); if (body.length>2_000_000) return fail("بدنه Webhook بیش از حد بزرگ است",413,"PAYLOAD_TOO_LARGE");
  const id=randomId("processorjob"),ts=nowIso();
  await env.PROCESSOR_DB.prepare("INSERT INTO processor_jobs(id,method,path_query,headers_json,body_text,status,attempts,next_attempt_at,created_at,updated_at) VALUES(?,?,?,?,?,'pending',0,?,?,?)").bind(id,request.method,url.pathname+url.search,JSON.stringify(selectedHeaders(request.headers)),body,ts,ts,ts).run();
  ctx?.waitUntil(processPendingJobs(env,30));
  return json({success:true,ok:true,queued:true,processor:true,id},200,{"x-bluepanel-processor":PROCESSOR_VERSION});
}
async function deliverJob(env,id) {
  const job=await env.PROCESSOR_DB.prepare("SELECT * FROM processor_jobs WHERE id=? AND status='pending'").bind(id).first(); if (!job) return {skipped:true};
  const settings=await getSettings(env),start=Date.now();
  try {
    if (!hasCoreServiceBinding(env)) throw new Error("CORE_WORKER binding missing");
    const headers=new Headers(JSON.parse(job.headers_json||"{}")); headers.set("x-bluepanel-service-hop","processor-to-core"); headers.set("x-bluepanel-edge-delivery","1");
    const targetOrigin=headers.get("x-bluepanel-public-origin")||settings.public_origin||"https://bluepanel-core.internal";
    const response=await env.CORE_WORKER.fetch(new Request(targetOrigin+job.path_query,{method:job.method,headers,body:job.body_text,redirect:"manual"}));
    const raw=await response.text(); if (!response.ok) throw new Error("Core HTTP "+response.status+(raw?": "+raw.slice(0,240):""));
    await env.PROCESSOR_DB.prepare("DELETE FROM processor_jobs WHERE id=?").bind(id).run();
    const processed=Number(settings.processed_jobs||0)+1; await setSettings(env,{processed_jobs:String(processed),last_core_ok_at:nowIso(),last_error:""});
    await recordMetric(env,"webhook",job.path_query,response.status,Date.now()-start); return {delivered:true};
  } catch (error) {
    const attempts=Number(job.attempts||0)+1,delay=Math.min(900,Math.max(5,Math.pow(2,Math.min(8,attempts)))),next=new Date(Date.now()+delay*1000).toISOString();
    await env.PROCESSOR_DB.prepare("UPDATE processor_jobs SET attempts=?,next_attempt_at=?,last_error=?,updated_at=? WHERE id=?").bind(attempts,next,String(error?.message||error).slice(0,900),nowIso(),id).run();
    await setSettings(env,{last_error:String(error?.message||error).slice(0,800)}); await recordMetric(env,"webhook_error",job.path_query,0,Date.now()-start); return {delivered:false,error:error?.message||String(error)};
  }
}
async function processPendingJobs(env,limit=100) {
  await ensureDb(env); const rows=await env.PROCESSOR_DB.prepare("SELECT id FROM processor_jobs WHERE status='pending' AND next_attempt_at<=? ORDER BY created_at ASC LIMIT ?").bind(nowIso(),Math.max(1,Math.min(300,Number(limit||100)))).all();
  let delivered=0,failed=0; for (let i=0;i<(rows.results||[]).length;i+=8) { const results=await Promise.all((rows.results||[]).slice(i,i+8).map(x=>deliverJob(env,x.id))); for (const r of results) r?.delivered?delivered++:failed++; }
  return {checked:(rows.results||[]).length,delivered,failed};
}
async function proxyCached(request,env,ctx) {
  if (!hasCoreServiceBinding(env)) return fail("Binding با نام CORE_WORKER متصل نیست",503,"CORE_BINDING_MISSING");
  const url=new URL(request.url),cache=caches.default,key=new Request(url.toString(),{method:"GET"}),cached=await cache.match(key);
  if (cached) { const h=new Headers(cached.headers); h.set("x-bluepanel-processor-cache","HIT"); ctx?.waitUntil(recordMetric(env,"cache_hit",url.pathname,cached.status,0)); return new Response(cached.body,{status:cached.status,statusText:cached.statusText,headers:h}); }
  const response=await forwardToCore(request,env,ctx); if (response.ok && !response.headers.has("set-cookie")) { const copy=new Response(response.clone().body,{status:response.status,statusText:response.statusText,headers:response.headers}); copy.headers.set("cache-control","public,max-age=60"); copy.headers.set("x-bluepanel-processor-cache","MISS"); ctx?.waitUntil(cache.put(key,copy.clone())); return copy; } return response;
}
function page(status) { const ok=status.connected===true; return `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#07111f"><title>BluePanel Processor</title><style>*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(circle at 15% 0,rgba(89,74,255,.25),transparent 34%),#07111f;color:#f8fbff;font-family:Tahoma,Arial,sans-serif}.wrap{width:min(760px,100%);margin:auto;padding:30px 16px}.card{background:linear-gradient(145deg,#112944,#121d36);border:1px solid rgba(160,190,230,.16);border-radius:28px;padding:24px;box-shadow:0 24px 70px rgba(0,0,0,.3)}.logo{width:64px;height:64px;border-radius:21px;display:grid;place-items:center;background:linear-gradient(145deg,#7a5cff,#268eff);font-weight:900;font-size:20px}.status{margin-top:16px;background:#152b46;border:1px solid rgba(160,190,230,.16);border-radius:16px;padding:15px;line-height:2;font-size:12px}.ok{color:#35d59a}.bad{color:#ff667b}code{direction:ltr;display:inline-block;color:#9bc7ff}</style></head><body><div class="wrap"><div class="card"><div class="logo">P3</div><h1>Worker سوم BluePanel</h1><p>صف Webhook، پردازش پس‌زمینه و کش صفحات پرترافیک</p><div class="status"><b class="${ok?'ok':'bad'}">${ok?'اتصال کامل سه‌طرفه برقرار است':'اتصال کامل نیست'}</b><br>${status.database_query_ok?'✅ PROCESSOR_DB سالم است':'❌ PROCESSOR_DB خطا دارد'}<br>${status.core_ok?'✅ CORE_WORKER متصل است':'❌ CORE_WORKER متصل نیست'}${status.core_error?'<br><span class="bad">'+status.core_error+'</span>':''}<br>${status.edge_ok?'✅ EDGE_WORKER متصل است':'❌ EDGE_WORKER متصل نیست'}${status.edge_error?'<br><span class="bad">'+status.edge_error+'</span>':''}<br>صف معلق: ${Number(status.pending_jobs||0).toLocaleString('fa-IR')}<br>پردازش‌شده: ${Number(status.processed_jobs||0).toLocaleString('fa-IR')}<br>نسخه: ${PROCESSOR_VERSION}</div><p><code>PROCESSOR_DB</code> نقش این Worker را خودکار فعال می‌کند.</p></div></div></body></html>`; }

return {
  async fetch(request,env,ctx) {
    const url=new URL(request.url),path=url.pathname.replace(/\/+$/g,"")||"/";
    try {
      if (path==="/__bluepanel/service/processor-health" && isInternalHost(url.hostname)) { const status=await localStatus(env),probeId=request.headers.get("x-bluepanel-probe-id")||""; return json({...status,probe_id:probeId},status.ok?200:500,{"x-bluepanel-role":"bluepanel-processor","x-bluepanel-version":PROCESSOR_VERSION,"x-bluepanel-probe-id":probeId}); }
      if (["/__bluepanel/service/health","/__bluepanel/service/diagnostics"].includes(path) && isInternalHost(url.hostname)) { const status=await fullStatus(env),probeId=request.headers.get("x-bluepanel-probe-id")||""; return json({...status,probe_id:probeId},status.binding_detected&&status.database_query_ok!==false?200:503,{"x-bluepanel-role":"bluepanel-processor","x-bluepanel-version":PROCESSOR_VERSION,"x-bluepanel-probe-id":probeId}); }
      if (path==="/__bluepanel/service/process" && isInternalHost(url.hostname) && request.method==="POST") { const result=await processPendingJobs(env,150); return json({success:true,ok:true,result}); }
      if (path==="/" && request.method==="GET") { const status=await fullStatus(env); return new Response(page(status),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store","x-content-type-options":"nosniff"}}); }
      if (path==="/health" && request.method==="GET") { const status=await fullStatus(env); return json(status,status.connected?200:503); }
      const hop=String(request.headers.get("x-bluepanel-service-hop")||"").toLowerCase();
      if (hop==="edge-to-processor") {
        await ensureDb(env);
        const publicOrigin=String(request.headers.get("x-bluepanel-public-origin")||""); if (publicOrigin) { const s=await getSettings(env); if (s.public_origin!==publicOrigin) ctx?.waitUntil(setSettings(env,{public_origin:publicOrigin})); }
        if (isQueuedWebhook(url.pathname,request.method)) return enqueueWebhook(request,env,ctx);
        if (isCacheable(url.pathname,request.method)) return proxyCached(request,env,ctx);
        return forwardToCore(request,env,ctx);
      }
      return fail("این مسیر فقط از طریق Service Binding قابل استفاده است",404,"NOT_FOUND");
    } catch (error) { console.error("processor fetch error",error); return fail(error?.message||error,500,"INTERNAL_ERROR"); }
  },
  async scheduled(controller,env,ctx) { ctx.waitUntil((async()=>{ try { await processPendingJobs(env,200); await env.PROCESSOR_DB.prepare("DELETE FROM processor_metrics WHERE created_at<?").bind(new Date(Date.now()-7*86400000).toISOString()).run(); await env.PROCESSOR_DB.prepare("DELETE FROM processor_jobs WHERE attempts>25 AND updated_at<?").bind(new Date(Date.now()-3*86400000).toISOString()).run(); } catch (error) { console.error("processor scheduled error",error); } })()); }
};

})();


function bluePanelSplitIsCentralManagementPath(path) {
  return ["/control", "/admin", "/panel", "/dashboard", "/control-advanced", "/auth/control/magic"].includes(path) ||
    path === "/api/auth/control/status" ||
    path === "/api/auth/control/login" ||
    path === "/api/auth/web/logout" ||
    path.startsWith("/api/admin/control/");
}

async function bluePanelSplitForwardManagementToCore(request, env, role) {
  const apiLike = new URL(request.url).pathname.startsWith("/api/");
  if (!env?.CORE_WORKER || typeof env.CORE_WORKER.fetch !== "function") {
    const payload = { success: false, ok: false, version: "2.9.0", role, code: "CORE_BINDING_MISSING", error: "Service Binding با نام CORE_WORKER به Worker مرکزی متصل نیست" };
    return new Response(apiLike ? JSON.stringify(payload) : payload.error, { status: 503, headers: { "content-type": apiLike ? "application/json; charset=utf-8" : "text/plain; charset=utf-8", "cache-control": "no-store", "x-bluepanel-role": role } });
  }
  const sourceUrl = new URL(request.url);
  const targetUrl = "https://bluepanel-core.internal" + sourceUrl.pathname + sourceUrl.search;
  const first = new Request(targetUrl, request);
  const headers = new Headers(first.headers);
  headers.set("x-bluepanel-service-hop", role + "-management-to-core");
  headers.set("x-bluepanel-public-origin", sourceUrl.origin);
  headers.set("x-bluepanel-original-host", sourceUrl.host);
  const response = await env.CORE_WORKER.fetch(new Request(first, { headers, redirect: "manual" }));
  const outHeaders = new Headers(response.headers);
  outHeaders.set("x-bluepanel-management-proxy", role + "-to-core");
  outHeaders.set("cache-control", "no-store");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: outHeaders });
}

function bluePanelSplitRuntimeError(request, error, role) {
  const path = new URL(request.url).pathname;
  const apiLike = path.startsWith("/api/") || path.startsWith("/sales-api/") || path.startsWith("/reseller-control-api/");
  const payload = { success: false, ok: false, version: "2.9.0", role, code: "WORKER_RUNTIME_ERROR", error: String(error?.message || "خطای داخلی Worker").replace(/[\u0000-\u001F]/g, " ").slice(0, 900) };
  return new Response(apiLike ? JSON.stringify(payload) : payload.error, { status: 500, headers: { "content-type": apiLike ? "application/json; charset=utf-8" : "text/plain; charset=utf-8", "cache-control": "no-store", "x-bluepanel-role": role } });
}


export default {
  async fetch(request, env, ctx) {
    try {
      const path = new URL(request.url).pathname.replace(/\/+$/, "") || "/";
      if (bluePanelSplitIsCentralManagementPath(path)) return await bluePanelSplitForwardManagementToCore(request, env, "bluepanel-processor");
      return await BLUEPANEL_PROCESSOR_APP.fetch(request, env, ctx);
    } catch (error) {
      console.error("BluePanel processor fetch error", error);
      return bluePanelSplitRuntimeError(request, error, "bluepanel-processor");
    }
  },
  async scheduled(controller, env, ctx) {
    if (BLUEPANEL_PROCESSOR_APP.scheduled) return BLUEPANEL_PROCESSOR_APP.scheduled(controller, env, ctx);
  }
};
