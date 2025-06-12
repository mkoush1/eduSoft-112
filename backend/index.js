// Main entry point for Vercel deployment
import express from 'express';
import cors from 'cors';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Setup to allow both ES modules and CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const app = express();

// Enable CORS for all routes with specific configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Handle preflight OPTIONS requests explicitly
app.options('*', (req, res) => {
  res.status(204).end();
});

// Add CORS headers to all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  
  next();
});

// Forward all other requests to the main application
app.all('*', async (req, res) => {
  try {
    // Import the main app dynamically
    const mainAppModule = await import('./src/index.js');
    const mainApp = mainAppModule.default;
    
    // Pass the request to the main app
    mainApp._router.handle(req, res);
  } catch (error) {
    console.error('Error forwarding request:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// Start the server if not being imported
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export for Vercel serverless functions
export default app; 