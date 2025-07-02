@echo off
echo 🛑 Stopping OpenGov Dashboard Server...
echo.

REM Kill any existing node processes
powershell -Command "Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue"

echo ✅ Server stopped successfully!
echo.
pause 