#!/bin/bash

npx next telemetry disable >/dev/null

if [ "$NODE_ENV" == "production" ]; then
	npm run build
	npm run start
else
	npm run dev
fi
