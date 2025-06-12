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

// Middleware to check if user is a supervisor
const isSupervisor = (req, res, next) => {
  if (req.userRole !== 'supervisor') {
    return res.status(403).json({ message: 'Access denied. Supervisor role required.' });
  }
  next();
};

// Mock supervisors data
const supervisors = [
  {
    id: '2',
    email: 'supervisor@example.com',
    name: 'Test Supervisor',
    department: 'Education',
    specialization: 'Language Learning',
    students: ['1', '3', '4']
  }
];

// Mock students data
const students = [
  {
    id: '1',
    name: 'Student One',
    email: 'student1@example.com',
    progress: 75
  },
  {
    id: '3',
    name: 'Student Two',
    email: 'student2@example.com',
    progress: 45
  },
  {
    id: '4',
    name: 'Student Three',
    email: 'student3@example.com',
    progress: 90
  }
];

// Get supervisor dashboard data
router.get('/dashboard', authenticateToken, isSupervisor, (req, res) => {
  try {
    const supervisor = supervisors.find(s => s.id === req.userId);
    
    if (!supervisor) {
      return res.status(404).json({ message: 'Supervisor not found' });
    }
    
    // Get students assigned to this supervisor
    const assignedStudents = students.filter(student => 
      supervisor.students.includes(student.id)
    );
    
    // Calculate average progress
    const averageProgress = assignedStudents.length > 0 
      ? assignedStudents.reduce((sum, student) => sum + student.progress, 0) / assignedStudents.length
      : 0;
    
    res.json({
      supervisor: {
        name: supervisor.name,
        email: supervisor.email,
        department: supervisor.department,
        specialization: supervisor.specialization
      },
      students: assignedStudents,
      stats: {
        totalStudents: assignedStudents.length,
        averageProgress: Math.round(averageProgress)
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get students assigned to supervisor
router.get('/students', authenticateToken, isSupervisor, (req, res) => {
  try {
    const supervisor = supervisors.find(s => s.id === req.userId);
    
    if (!supervisor) {
      return res.status(404).json({ message: 'Supervisor not found' });
    }
    
    // Get students assigned to this supervisor
    const assignedStudents = students.filter(student => 
      supervisor.students.includes(student.id)
    );
    
    res.json(assignedStudents);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router; 