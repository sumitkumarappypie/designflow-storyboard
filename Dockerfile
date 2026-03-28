FROM node:22-slim

RUN apt-get update && apt-get install -y sed && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY src/ src/
COPY bin/ bin/
COPY templates/ templates/
COPY tsconfig.json tsup.config.ts ./

# Copy DivKit JSON samples
COPY divkit_jsons/ /app/divkit_jsons/

# Copy DivKit web client build
COPY divkit_client/ /app/divkit_client/

# Copy wireframes
COPY wireframes/ wireframes/

# Bind to 0.0.0.0 so Railway can reach the server
ENV HOST=0.0.0.0

COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]
