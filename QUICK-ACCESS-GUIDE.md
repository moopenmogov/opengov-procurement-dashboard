# 🚀 Quick Access Guide - OpenGov Procurement Dashboard

## 🎯 **Fastest Ways to Run the Application**

### Method 1: Double-Click to Start (Easiest!)
1. **Double-click `start-dashboard.bat`** in your project folder
   - Automatically kills old servers
   - Starts new server
   - Opens browser to dashboard
   - Shows your API key

### Method 2: PowerShell Version
1. **Right-click `start-dashboard.ps1`** → "Run with PowerShell"
   - Same functionality as batch file
   - Better for PowerShell users

### Method 3: Manual Commands
```powershell
cd C:\Users\msokrin\opengov-mcp-prototype
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
npm start
```
Then open: http://localhost:3000

## 💻 **Easy Code Access Methods**

### For Visual Studio Code:
1. **Right-click project folder** → "Open with Code"
2. **Or double-click `opengov-mcp-prototype.code-workspace`**

### For Any Editor:
1. **Navigate to:** `C:\Users\msokrin\opengov-mcp-prototype`
2. **Key files to edit:**
   - `server.js` - Backend API and server logic
   - `index.html` - Frontend dashboard and UI
   - `package.json` - Dependencies

### For Cursor (if you want to use it):
1. **Open Cursor**
2. **File → Open Folder** → Select `C:\Users\msokrin\opengov-mcp-prototype`
3. **Or drag the folder** into Cursor window

## 🔖 **Browser Bookmark Setup**

**Create bookmark for:** `http://localhost:3000`
**Name it:** "OpenGov Dashboard"

## 📁 **Desktop Shortcuts (Recommended!)**

### Create Application Shortcut:
1. **Right-click desktop** → New → Shortcut
2. **Location:** `C:\Users\msokrin\opengov-mcp-prototype\start-dashboard.bat`
3. **Name:** "OpenGov Dashboard"
4. **Right-click shortcut** → Properties → Change Icon (optional)

### Create Folder Shortcut:
1. **Right-click desktop** → New → Shortcut  
2. **Location:** `C:\Users\msokrin\opengov-mcp-prototype`
3. **Name:** "OpenGov Code"

## 🔑 **Quick Reference**

### Your API Key:
```
d459f6b45836b972a4fa3b454d23854b4a295d23ca188d1b94d8f147eae30ace
```

### Dashboard URL:
```
http://localhost:3000
```

### Project Location:
```
C:\Users\msokrin\opengov-mcp-prototype
```

## 🛟 **If Something Goes Wrong**

1. **Check `RECOVERY-GUIDE.md`** for troubleshooting
2. **Use backup files:**
   - `server-WORKING-BACKUP.js` - Copy to `server.js` if needed
   - `WORKING-STATE-BACKUP.md` - Complete setup instructions

## 📱 **Mobile Access**

If your computer and phone are on the same network:
1. **Find your computer's IP address:** `ipconfig` in command prompt
2. **Use:** `http://[YOUR-IP]:3000` on mobile browser

## ⚡ **Pro Tips**

- **Pin shortcuts to taskbar** for even faster access
- **Add browser bookmark** to favorites bar
- **Create batch file on desktop** for instant startup
- **Use Windows + R** then type the full path to batch file

---

**🎉 With these methods, you'll never need to remember complex commands or navigate through multiple folders again!** 