FROM node:22-slim

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install ALL dependencies (need tsx from devDeps)
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

# Bind to 0.0.0.0 for container networking
ENV HOST=0.0.0.0

COPY start.sh ./
RUN chmod +x start.sh

# Verify tsx is available
RUN node_modules/.bin/tsx --version

CMD ["./start.sh"]
