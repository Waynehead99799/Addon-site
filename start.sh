#!/usr/bin/env bash
# One-shot launcher for macOS / Linux. Installs deps if needed, then starts dev server.
set -e
cd "$(dirname "$0")"
node scripts/start.mjs
