@echo off
echo 🚀 Starting OpenGov Procurement Dashboard...
echo.

REM Change to the project directory
cd /d "%~dp0"

REM Kill any existing node processes
powershell -Command "Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue"

REM Wait a moment
timeout /t 2 /nobreak >nul

echo 📦 Starting server...
start "OpenGov Server" cmd /k "npm start"

REM Wait for server to start
echo ⏳ Waiting for server to start...
timeout /t 5 /nobreak >nul

echo 🌐 Opening dashboard in browser...
start "" "http://localhost:3000"

echo.
echo ✅ Dashboard should now be open in your browser!
echo ✅ Server is running in the separate window
echo.
echo 🔑 Your API Key: d459f6b45836b972a4fa3b454d23854b4a295d23ca188d1b94d8f147eae30ace
echo.
echo To stop the server, close the server window or press Ctrl+C in it.
pause 