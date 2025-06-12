# EduSoft - Educational Management System

EduSoft is a comprehensive educational management system that provides a platform for supervisors and users to manage educational content and track progress.

## Features

- User Authentication (Login/Signup)
- Role-based Access Control (Supervisor/User)
- Dashboard for both roles
- Password Reset functionality
- Modern and responsive UI

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Project Structure

```
EduSoft/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── services/   # API services
│   │   └── utils/      # Utility functions
│   └── public/         # Static assets
│
└── backend/            # Node.js backend application
    ├── src/
    │   ├── models/     # Database models
    │   ├── routes/     # API routes
    │   ├── services/   # Business logic
    │   └── utils/      # Utility functions
    └── config/         # Configuration files
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Os4203/eduSoft.git
cd EduSoft
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create a .env file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Create a .env file in the frontend directory with the following variables:
```
VITE_REACT_APP_BACKEND_BASEURL=http://localhost:5000
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000 (or the value of VITE_REACT_APP_BACKEND_BASEURL)

## API Documentation

### Authentication Endpoints
- POST /api/auth/login - User login
- POST /api/auth/signup - User registration
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/reset-password - Reset password

### User Endpoints
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update user profile

### Supervisor Endpoints
- GET /api/supervisors/dashboard - Get supervisor dashboard data
- POST /api/supervisors/create-course - Create new course

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Osama - [GitHub](https://github.com/Os4203) 