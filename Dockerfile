FROM node:22.22-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

ARG CACHEBUST=2
COPY src/ src/
COPY bin/ bin/
COPY tsconfig.json tsup.config.ts ./

COPY divkit_jsons/ /app/divkit_jsons/
COPY divkit_client/ /app/divkit_client/

COPY wireframes/ wireframes/
COPY wireframes/flows.docker.ts wireframes/flows.ts

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
