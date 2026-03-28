FROM node:22-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY src/ src/
COPY bin/ bin/
COPY templates/ templates/
COPY tsconfig.json tsup.config.ts ./

COPY divkit_jsons/ /app/divkit_jsons/
COPY divkit_client/ /app/divkit_client/

COPY wireframes/ wireframes/
COPY wireframes/flows.docker.ts wireframes/flows.ts

ENV HOST=0.0.0.0
ENV PORT=4800

CMD ["sh", "-c", "echo '=== Starting ===' && echo \"PORT=$PORT HOST=$HOST\" && echo '=== Node version ===' && node -v && echo '=== Testing tsx ===' && node_modules/.bin/tsx --version && echo '=== Launching server ===' && exec node_modules/.bin/tsx bin/cli.ts dev --port $PORT 2>&1"]
