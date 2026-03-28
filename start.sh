#!/bin/sh
set -e

# Update flows.ts with container paths
sed -i 's|divkitDir:.*|divkitDir: "/app/divkit_jsons",|' /app/wireframes/flows.ts
sed -i 's|divkitClientPath:.*|divkitClientPath: "/app/divkit_client",|' /app/wireframes/flows.ts

echo "=== flows.ts paths updated ==="
head -7 /app/wireframes/flows.ts
echo "=== Starting on port ${PORT:-4800} ==="

exec node_modules/.bin/tsx bin/cli.ts dev --port ${PORT:-4800}
