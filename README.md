# 🏛️ OpenGov Procurement Dashboard

A comprehensive procurement management dashboard that connects to the OpenGov API to analyze contract data, vendor relationships, and spending patterns.

![Dashboard Preview](https://img.shields.io/badge/Status-Fully%20Functional-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-Express-blue) ![API](https://img.shields.io/badge/API-OpenGov-orange)

## ✨ **Features**

- **📊 Real-time KPIs:** Total contracts, spending, averages, vendor counts
- **🏢 Vendor Analysis:** Top vendors by spending with visual charts  
- **📈 Status Distribution:** Contract lifecycle visualization
- **⚠️ Risk Alerts:** High-value contract and vendor concentration warnings
- **🔍 Advanced Filtering:** By status and value ranges
- **🔄 Live Data:** Real-time connection to OpenGov procurement API
- **📱 Responsive Design:** Works on desktop and mobile

## 🚀 **Quick Start**

### For First-Time Users:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/opengov-procurement-dashboard.git
   cd opengov-procurement-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your API key:**
   ```bash
   copy .env.example .env
   # Edit .env and add your OpenGov API key
   ```

4. **Start the application:**
   - **Windows:** Double-click `start-dashboard.bat`
   - **PowerShell:** Right-click `start-dashboard.ps1` → "Run with PowerShell"
   - **Manual:** `npm start` then open http://localhost:3000

### For Development:
- **Edit Code:** Open folder in VS Code, Cursor, or any editor
- **Workspace File:** `opengov-mcp-prototype.code-workspace`

## 🔑 **API Key Setup**

You'll need an OpenGov API key to use this dashboard:

1. **Get API Key:** Contact OpenGov or check your OpenGov dashboard
2. **Add to .env:** Copy `.env.example` to `.env` and add your key
3. **Alternative:** Enter API key directly in the dashboard interface

## 📊 **Dashboard Screenshots**

The dashboard includes:
- 6 comprehensive KPI cards
- Interactive vendor spending analysis
- Contract status distribution charts
- Risk assessment and compliance alerts
- Filterable contract tables

## 📁 **Project Structure**

```
├── start-dashboard.bat         # One-click Windows startup
├── start-dashboard.ps1         # PowerShell startup script
├── server.js                   # Backend API proxy and server
├── index.html                  # Frontend dashboard and analytics
├── package.json                # Dependencies and scripts
├── .env.example               # Environment variables template
├── QUICK-ACCESS-GUIDE.md      # Detailed usage instructions
├── RECOVERY-GUIDE.md          # Troubleshooting help
└── docs/                      # Additional documentation
```

## 🛠️ **Technology Stack**

- **Backend:** Node.js + Express.js
- **Frontend:** Vanilla JavaScript + HTML5 + CSS3
- **API Integration:** Axios for HTTP requests
- **Data Processing:** Custom CSV parser
- **Security:** CORS enabled, environment variables

## 🔧 **Configuration**

### Environment Variables:
```env
OPENGOV_API_KEY=your_api_key_here
PORT=3000
```

### Default Settings:
- **Port:** 3000
- **API Endpoint:** OpenGov Procurement Gateway
- **Data Format:** CSV with automatic JSON conversion
- **Authentication:** X-API-Key header method

## 📚 **Documentation**

- **[Quick Access Guide](QUICK-ACCESS-GUIDE.md)** - All methods to run and access the app
- **[Recovery Guide](RECOVERY-GUIDE.md)** - Troubleshooting and emergency recovery
- **[GitHub Setup](GITHUB-SETUP.md)** - Instructions for GitHub deployment
- **[Working State Backup](WORKING-STATE-BACKUP.md)** - Complete technical documentation

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 🆘 **Support**

- **Issues:** Create a GitHub issue for bugs or feature requests
- **Documentation:** Check the guides in the `docs/` folder
- **Recovery:** Use `RECOVERY-GUIDE.md` for troubleshooting

## 📝 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🎯 **Status**

✅ **Fully Functional** - Ready for production use  
✅ **API Integration** - Successfully connects to OpenGov  
✅ **Real Data** - Processes actual procurement data  
✅ **Professional UI** - Production-ready dashboard interface

---

**Built for procurement professionals to analyze contract data efficiently and identify spending patterns, vendor relationships, and risk factors.** 