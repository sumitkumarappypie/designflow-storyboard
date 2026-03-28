#!/bin/sh
# Update flows.ts with container paths before starting
sed -i 's|divkitDir:.*|divkitDir: "/app/divkit_jsons",|' /app/wireframes/flows.ts
sed -i 's|divkitClientPath:.*|divkitClientPath: "/app/divkit_client",|' /app/wireframes/flows.ts

# Fix empty screens syntax if present
sed -i 's/screens: {$/screens: {},/' /app/wireframes/flows.ts
sed -i '/^,$/d' /app/wireframes/flows.ts

echo "Starting DesignFlow on port ${PORT:-4800}..."
exec npx tsx bin/cli.ts dev --port ${PORT:-4800}
