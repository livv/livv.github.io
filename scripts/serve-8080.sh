#!/usr/bin/env bash
# 本地静态站：python http.server 8080；若端口被占用则先结束监听进程再启动。
set -euo pipefail

PORT="${PORT:-8080}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

pids_on_port() {
  # 仅 LISTEN，避免误杀仅连到该端口的客户端
  lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null || true
}

if command -v lsof >/dev/null 2>&1; then
  pids="$(pids_on_port | tr '\n' ' ')"
  if [[ -n "${pids// }" ]]; then
    echo "端口 ${PORT} 已被占用 (PID: ${pids})，正在结束…"
    for pid in $pids; do
      [[ -n "$pid" ]] || continue
      kill "$pid" 2>/dev/null || true
    done
    sleep 0.3
    pids2="$(pids_on_port | tr '\n' ' ')"
    if [[ -n "${pids2// }" ]]; then
      echo "仍在监听，强制结束: ${pids2}"
      for pid in $pids2; do
        [[ -n "$pid" ]] || continue
        kill -9 "$pid" 2>/dev/null || true
      done
    fi
  fi
else
  echo "未找到 lsof，跳过端口检测。" >&2
fi

echo "在 ${ROOT} 启动 python3 -m http.server ${PORT}"
exec python3 -m http.server "$PORT"
