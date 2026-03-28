#!/bin/sh
# Update flows.ts with container paths before starting
sed -i "s|divkitDir:.*|divkitDir: \"/app/divkit_jsons\",|" /app/wireframes/flows.ts
sed -i "s|divkitClientPath:.*|divkitClientPath: \"/app/divkit_client\",|" /app/wireframes/flows.ts

exec npx tsx bin/cli.ts dev --port ${PORT:-4800}
