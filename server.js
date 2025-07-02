const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// OpenGov API proxy with enhanced debugging for your API key
app.get('/api/contracts', async (req, res) => {
  const apiKey = req.headers['x-api-key'] || 'demo-key';
  console.log('\n🔑 API Key received:', apiKey.substring(0, 15) + '...');
  console.log('📊 Query params:', req.query);

  // Let's test your specific API key with different approaches
  const authMethods = [
    { name: 'Bearer Token', headers: { 'Authorization': `Bearer ${apiKey}` } },
    { name: 'API Key Header', headers: { 'X-API-Key': apiKey } },
    { name: 'Authorization API Key', headers: { 'Authorization': `API-Key ${apiKey}` } },
    { name: 'Direct API Key', headers: { 'API-Key': apiKey } },
    { name: 'Custom Auth Header', headers: { 'Authorization': apiKey } },
    { name: 'Token Header', headers: { 'Token': apiKey } }
  ];

  for (const method of authMethods) {
    try {
      console.log(`\n🔄 Trying ${method.name}...`);
      console.log('📋 Headers:', method.headers);
      
      const response = await axios.get('https://api.procurement.opengov.com/gateway/datasets/v1/contracts', {
        headers: {
          ...method.headers,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'OpenGov-MCP-Prototype/1.0'
        },
        params: req.query,
        timeout: 15000
      });
      
      console.log('✅ SUCCESS with', method.name);
      console.log('📈 Response data length:', response.data?.length || 'unknown');
      console.log('📄 Response type:', typeof response.data);
      console.log('📝 First 100 chars:', response.data?.substring?.(0, 100) || 'N/A');
      
      // Check if response is CSV format - if so, return as text
      if (typeof response.data === 'string' && (response.data.includes('vendor_name,') || response.data.includes(',vendor_email,'))) {
        console.log('🔄 Detected CSV format, returning as text');
        return res.set('Content-Type', 'text/plain').send(response.data);
      } else {
        console.log('🔄 Detected JSON format, returning as JSON');
        return res.json(response.data);
      }
      
    } catch (error) {
      console.log(`❌ ${method.name} failed:`, error.response?.status, error.response?.statusText);
      if (error.response?.data && typeof error.response.data === 'string' && error.response.data.includes('Cloudflare')) {
        console.log('🛡️  Cloudflare blocking detected');
      } else if (error.response?.data) {
        console.log('📝 Error details:', JSON.stringify(error.response.data, null, 2));
      }
    }
  }

  // Try with query parameter approach
  try {
    console.log('\n🔄 Trying API key as query parameter...');
    const response = await axios.get('https://api.procurement.opengov.com/gateway/datasets/v1/contracts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'OpenGov-MCP-Prototype/1.0'
      },
      params: {
        ...req.query,
        api_key: apiKey,
        apikey: apiKey,
        key: apiKey
      },
      timeout: 15000
    });
    
    console.log('✅ SUCCESS with query parameter');
    console.log('📄 Response type:', typeof response.data);
    console.log('📝 First 100 chars:', response.data?.substring?.(0, 100) || 'N/A');
    
    // Check if response is CSV format - if so, return as text
    if (typeof response.data === 'string' && (response.data.includes('vendor_name,') || response.data.includes(',vendor_email,'))) {
      console.log('🔄 Detected CSV format, returning as text');
      return res.set('Content-Type', 'text/plain').send(response.data);
    } else {
      console.log('🔄 Detected JSON format, returning as JSON');
      return res.json(response.data);
    }
    
  } catch (error) {
    console.log('❌ Query parameter method failed:', error.response?.status);
  }

  // All methods failed - provide enhanced debugging info
  console.log('\n🚨 All authentication methods failed with your API key.');
  console.log('🔍 Your API key analysis:');
  console.log('   Length:', apiKey.length, 'characters');
  console.log('   Format:', apiKey.match(/^[a-f0-9]+$/) ? 'Hex format' : 'Mixed format');
  console.log('   First 10 chars:', apiKey.substring(0, 10));
  console.log('   Last 10 chars:', apiKey.substring(apiKey.length - 10));

  const mockContracts = [
    { 
      id: 1, 
      vendor: 'Acme Corp', 
      value: 150000, 
      status: 'active', 
      description: 'IT Services Contract',
      note: 'MOCK DATA - Your API key authentication failed'
    },
    { 
      id: 2, 
      vendor: 'Tech Solutions', 
      value: 75000, 
      status: 'pending', 
      description: 'Software Licensing',
      note: 'MOCK DATA - Your API key authentication failed'
    },
    { 
      id: 3, 
      vendor: 'Construction Co', 
      value: 500000, 
      status: 'completed', 
      description: 'Building Renovation',
      note: 'MOCK DATA - Your API key authentication failed'
    }
  ];

  res.json(mockContracts);
});

// Test endpoint to verify API key format
app.get('/api/test-key', (req, res) => {
  const apiKey = req.headers['x-api-key'];
  res.json({
    received: !!apiKey,
    length: apiKey?.length || 0,
    first10: apiKey?.substring(0, 10) || 'none',
    format: apiKey ? 'looks valid' : 'missing'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n OpenGov MCP Dashboard running on http://localhost:${PORT}`);
  console.log(' Dashboard ready for testing');
  console.log(' Enhanced debugging enabled for API authentication');
  console.log(' Test endpoint: http://localhost:${PORT}/api/test-key\n');
});