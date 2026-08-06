#!/usr/bin/env bash
# Nightly 2GIS leads -> acedia second_brain.db.
# Add to crontab (Almaty time):  30 3 * * *  bash /root/Documents/Development/acedia-landing/scripts/run-2gis-leads.sh >> /var/log/2gis-leads.log 2>&1
set -euo pipefail
cd "$(dirname "$0")/.."
export SECOND_BRAIN_DB="${SECOND_BRAIN_DB:-/root/.hermes/data/second_brain.db}"
export SMARTPROXY_USER="${SMARTPROXY_USER:-}"
export SMARTPROXY_PASS="${SMARTPROXY_PASS:-}"
RUNNER="node"
# 2GIS blocks headless: this harvester launches headed chromium; on a headless
# server wrap with xvfb automatically.
if [ -z "${DISPLAY:-}" ] && command -v xvfb-run >/dev/null 2>&1; then RUNNER="xvfb-run -a node"; fi
$RUNNER scripts/scrape-2gis-to-jsonl.cjs "${CITY:-almaty}" "${CATEGORY:-restaurant}" "${MAXF:-40}" data/kz-leads.jsonl
node scripts/bridge-2gis-to-secondbrain.cjs data/kz-leads.jsonl
echo "[run-2gis-leads] done: $(date)"
