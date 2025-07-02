# 🚨 EMERGENCY RECOVERY GUIDE

## 📁 Key Working Files (Saved July 2, 2025):

### Active Files:
- `server.js` - Current working server ✅
- `index.html` - Current working dashboard ✅  
- `package.json` - Dependencies ✅

### Backup Files:
- `WORKING-STATE-BACKUP.md` - Complete documentation
- `server-WORKING-BACKUP.js` - Server backup copy
- `PROJECT-NOTES.md` - Updated with current status
- `RECOVERY-GUIDE.md` - This file

## ⚡ Quick Recovery Steps:

### If Server Won't Start:
```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
npm start
```

### If API Fails:
- Use API key: `d459f6b45836b972a4fa3b454d23854b4a295d23ca188d1b94d8f147eae30ace`
- Authentication method: `X-API-Key` header
- Expected response: CSV format (10,646+ characters)

### If Files Corrupted:
1. Copy content from `server-WORKING-BACKUP.js` to `server.js`
2. Restart server: `npm start`
3. Verify at: http://localhost:3000

### Server Requirements:
- Port: 3000
- Dependencies: express, cors, axios
- Node.js version: Any recent version (tested on v22.16.0)

## 🔍 Health Check:

### Server Status:
```
✅ SUCCESS with API Key Header
📈 Response data length: 10646
🔄 Detected CSV format, returning as text
```

### Browser Test:
1. Open http://localhost:3000
2. Enter API key in password field
3. Click "Load Contracts"
4. Should see: "Loaded [X] contracts successfully!"

## 🎯 Critical Success Indicators:

- Server logs show "SUCCESS with API Key Header"
- Response data length > 10000 characters
- CSV format detected and returned as text/plain
- Frontend displays KPIs with real numbers
- Dashboard shows vendor analysis and status charts

## 📞 If Everything Fails:

Restore from backup files:
1. Use `server-WORKING-BACKUP.js` as your `server.js`
2. Check `WORKING-STATE-BACKUP.md` for complete configuration
3. Follow exact steps in that document

**Last Known Working State:** July 2, 2025 - All systems operational 