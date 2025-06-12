// Main entry point for Vercel deployment (CommonJS version)
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

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

// Simple route to check if the server is running
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Import routes directly
const authRoutes = require('./routes/auth.route.cjs');
const userRoutes = require('./routes/user.route.cjs');
const supervisorRoutes = require('./routes/supervisor.route.cjs');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/supervisors', supervisorRoutes);

// Catch-all route for other API endpoints
app.use('/api/*', (req, res) => {
  res.status(501).json({ 
    error: 'Not Implemented', 
    message: 'This endpoint is not yet implemented in the CommonJS version',
    path: req.originalUrl
  });
});

// Serve static files from the frontend build folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all route to return the frontend app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error', 
    message: err.message || 'Something went wrong'
  });
});

// Start the server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless functions
module.exports = app; 