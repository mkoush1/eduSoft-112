const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mock user data for testing - using plaintext passwords that will be compared directly
// This is a temporary solution for the demo - in production, always use hashed passwords
const users = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password', // Plain password for testing
    name: 'Test User',
    role: 'user'
  },
  {
    id: '2',
    email: 'supervisor@example.com',
    password: 'password', // Plain password for testing
    name: 'Test Supervisor',
    role: 'supervisor'
  }
];

// User login
router.post('/user/login', async (req, res) => {
  try {
    console.log('User login attempt with request body:', req.body);
    console.log('Request headers:', req.headers);
    
    // Check if request body exists
    if (!req.body) {
      console.log('Request body is missing');
      return res.status(400).json({ message: 'Request body is missing' });
    }
    
    const { email, password } = req.body;
    console.log('Extracted credentials:', { email, password: password ? '****' : undefined });
    
    if (!email || !password) {
      console.log('Missing credentials:', { email: !!email, password: !!password });
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const user = users.find(u => u.email === email && u.role === 'user');
    
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Simple password comparison for demo
    const isMatch = (password === user.password);
    console.log('Password match result:', isMatch);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    console.log('Login successful for user:', user.email);
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Supervisor login
router.post('/supervisor/login', async (req, res) => {
  try {
    console.log('Supervisor login attempt with request body:', req.body);
    console.log('Request headers:', req.headers);
    
    // Check if request body exists
    if (!req.body) {
      console.log('Request body is missing');
      return res.status(400).json({ message: 'Request body is missing' });
    }
    
    const { email, password } = req.body;
    console.log('Extracted credentials:', { email, password: password ? '****' : undefined });
    
    if (!email || !password) {
      console.log('Missing credentials:', { email: !!email, password: !!password });
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const supervisor = users.find(u => u.email === email && u.role === 'supervisor');
    
    if (!supervisor) {
      console.log('Supervisor not found for email:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Simple password comparison for demo
    const isMatch = (password === supervisor.password);
    console.log('Password match result:', isMatch);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: supervisor.id, role: supervisor.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    console.log('Login successful for supervisor:', supervisor.email);
    res.json({
      token,
      user: {
        id: supervisor.id,
        name: supervisor.name,
        email: supervisor.email,
        role: supervisor.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Simple login endpoint that works with both user types
router.post('/login', async (req, res) => {
  try {
    console.log('Login attempt with request body:', req.body);
    console.log('Request headers:', req.headers);
    
    // Check if request body exists
    if (!req.body) {
      console.log('Request body is missing');
      return res.status(400).json({ message: 'Request body is missing' });
    }
    
    const { email, password } = req.body;
    console.log('Extracted credentials:', { email, password: password ? '****' : undefined });
    
    if (!email || !password) {
      console.log('Missing credentials:', { email: !!email, password: !!password });
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const user = users.find(u => u.email === email);
    
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Simple password comparison for demo
    const isMatch = (password === user.password);
    console.log('Password match result:', isMatch);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    console.log('Login successful for:', user.email);
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Refresh token
router.post('/refresh-token', (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token is required' });
    }
    
    // Verify refresh token (in a real app, you would validate against stored tokens)
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET || 'your-secret-key');
    
    // Generate new access token
    const token = jwt.sign(
      { id: decoded.id, role: decoded.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

module.exports = router; 