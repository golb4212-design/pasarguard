FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
RUN mkdir -p /data && addgroup -S bluepanel && adduser -S -G bluepanel bluepanel && chown -R bluepanel:bluepanel /app /data
USER bluepanel
ENV NODE_ENV=production
EXPOSE 8787
CMD ["node", "src/server.js"]
