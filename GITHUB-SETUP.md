# 🐙 GitHub Setup Guide

## 🔒 **IMPORTANT SECURITY NOTE**
Your API key is currently hardcoded in files. For GitHub, you should use environment variables instead.

## 🚀 **Quick GitHub Setup**

### Step 1: Create .env File (Do This First!)
1. **Copy `.env.example` to `.env`**:
   ```powershell
   copy .env.example .env
   ```

2. **Edit `.env`** and add your API key:
   ```
   OPENGOV_API_KEY=d459f6b45836b972a4fa3b454d23854b4a295d23ca188d1b94d8f147eae30ace
   ```

### Step 2: Update Code (Optional - for better security)
The current code works as-is, but for production you could modify `server.js` to use:
```javascript
const apiKey = process.env.OPENGOV_API_KEY || req.headers['x-api-key'] || 'demo-key';
```

### Step 3: Create GitHub Repository
1. **Go to GitHub.com** and sign in
2. **Click "New Repository"**
3. **Name:** `opengov-procurement-dashboard`
4. **Description:** `Comprehensive procurement management dashboard with OpenGov API integration`
5. **Make it Public** (so others can see it)
6. **Don't** initialize with README (we already have files)

### Step 4: Push to GitHub
Open PowerShell in your project folder and run:

```powershell
# Initialize git repository
git init

# Add all files (except those in .gitignore)
git add .

# Make first commit
git commit -m "Initial commit: Working OpenGov procurement dashboard"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/opengov-procurement-dashboard.git

# Push to GitHub
git push -u origin main
```

### Step 5: Share Repository
Your repository will be available at:
```
https://github.com/YOUR_USERNAME/opengov-procurement-dashboard
```

## 📝 **What Gets Uploaded:**
✅ All working code  
✅ Documentation and guides  
✅ Easy startup scripts  
✅ Recovery guides  
❌ Your API key (protected by .gitignore)  
❌ node_modules (rebuilt on clone)

## 👥 **For Others to Use Your Project:**

1. **Clone:** `git clone https://github.com/YOUR_USERNAME/opengov-procurement-dashboard.git`
2. **Install:** `npm install`
3. **Configure:** Copy `.env.example` to `.env` and add their API key
4. **Run:** `npm start` or double-click `start-dashboard.bat`

## 🔧 **If You Don't Want to Use .env:**
The current version works as-is! Just be aware your API key will be visible in:
- `QUICK-ACCESS-GUIDE.md`
- `WORKING-STATE-BACKUP.md` 
- `start-dashboard.bat`
- `start-dashboard.ps1`

You can leave it for demo purposes, but mention in README that users should replace it with their own key.

## 🎯 **Recommended Repository Description:**
```
A professional procurement management dashboard that connects to OpenGov's API to analyze contract data, vendor relationships, and spending patterns. Features real-time KPIs, vendor analysis, risk alerts, and comprehensive filtering capabilities.
```

## 🏷️ **Suggested Tags:**
`procurement` `opengov` `dashboard` `analytics` `government` `contracts` `nodejs` `express` 