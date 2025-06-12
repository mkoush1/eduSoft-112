const express = require('express');
const router = express.Router();

// Middleware for authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  try {
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Mock user data
const users = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'Test User',
    role: 'user',
    profile: {
      language: 'English',
      level: 'Intermediate',
      interests: ['Reading', 'Writing']
    }
  },
  {
    id: '2',
    email: 'supervisor@example.com',
    name: 'Test Supervisor',
    role: 'supervisor',
    profile: {
      department: 'Education',
      specialization: 'Language Learning'
    }
  }
];

// Get user profile
router.get('/profile', authenticateToken, (req, res) => {
  try {
    const user = users.find(u => u.id === req.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile: user.profile
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user profile
router.put('/profile', authenticateToken, (req, res) => {
  try {
    const { name, profile } = req.body;
    const userIndex = users.findIndex(u => u.id === req.userId);
    
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Update user data
    if (name) {
      users[userIndex].name = name;
    }
    
    if (profile) {
      users[userIndex].profile = {
        ...users[userIndex].profile,
        ...profile
      };
    }
    
    res.json({
      id: users[userIndex].id,
      name: users[userIndex].name,
      email: users[userIndex].email,
      role: users[userIndex].role,
      profile: users[userIndex].profile
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router; 