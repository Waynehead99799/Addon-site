@echo off
REM One-shot launcher for Windows. Installs deps if needed, then starts dev server.
cd /d "%~dp0"
node scripts\start.mjs
