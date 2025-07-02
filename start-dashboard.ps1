# OpenGov Procurement Dashboard Startup Script
Write-Host "🚀 Starting OpenGov Procurement Dashboard..." -ForegroundColor Green
Write-Host ""

# Change to script directory
Set-Location $PSScriptRoot

# Kill any existing node processes
Write-Host "🔄 Stopping any existing servers..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Wait a moment
Start-Sleep -Seconds 2

# Start the server in a new window
Write-Host "📦 Starting server..." -ForegroundColor Blue
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm start" -WindowStyle Normal

# Wait for server to start
Write-Host "⏳ Waiting for server to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Open browser
Write-Host "🌐 Opening dashboard in browser..." -ForegroundColor Cyan
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "✅ Dashboard should now be open in your browser!" -ForegroundColor Green
Write-Host "✅ Server is running in the separate PowerShell window" -ForegroundColor Green
Write-Host ""
Write-Host "🔑 Your API Key: d459f6b45836b972a4fa3b454d23854b4a295d23ca188d1b94d8f147eae30ace" -ForegroundColor Magenta
Write-Host ""
Write-Host "To stop the server, close the server window or press Ctrl+C in it." -ForegroundColor White

Read-Host "Press Enter to close this window" 