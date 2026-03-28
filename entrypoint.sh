#!/bin/sh
echo "Railway PORT=$PORT"
exec node_modules/.bin/tsx bin/cli.ts dev --port "$PORT"
