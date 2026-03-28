FROM node:22-slim

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

# Copy wireframes with container paths
COPY wireframes/ wireframes/

# Expose port (Render sets $PORT)
EXPOSE 4800

# Render sets PORT env var; bind to 0.0.0.0 so it's accessible
ENV HOST=0.0.0.0

COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]
