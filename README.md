# EduSoft - Educational Management System

EduSoft is a comprehensive educational management system that provides a platform for supervisors and users to manage educational content and track progress.

## Features

- User Authentication (Login/Signup)
- Role-based Access Control (Supervisor/User)
- Dashboard for both roles
- Password Reset functionality
- Modern and responsive UI
- Environment variable configuration for backend URL
- Cloudflare Pages deployment support

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

### Deployment
- Cloudflare Pages
- Cloudflare Workers

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
│       ├── _headers    # Cloudflare Pages headers configuration
│       └── _redirects  # Cloudflare Pages redirects configuration
│
├── backend/            # Node.js backend application
│   ├── src/
│   │   ├── models/     # Database models
│   │   ├── routes/     # API routes
│   │   ├── services/   # Business logic
│   │   └── utils/      # Utility functions
│   └── config/         # Configuration files
│
├── src/                # Cloudflare Worker scripts
│   └── index.js        # Main worker entry point
│
├── .cloudflare/        # Cloudflare configuration
│   └── pages.json      # Pages configuration
│
└── wrangler.toml       # Wrangler configuration for Cloudflare Workers
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn
- Cloudflare account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mkoush1/eduSoft-112.git
cd eduSoft-112
```

2. Install all dependencies:
```bash
npm run setup
```

3. Create a .env file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Create a .env file in the frontend directory with the following variables:
```
VITE_REACT_APP_BACKEND_BASEURL=http://localhost:5000
```

### Running the Application Locally

1. Start the development servers:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: ${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}

## Deployment to Cloudflare

### Prerequisites

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

### Deployment Steps

1. Build the frontend:
```bash
npm run build
```

2. Deploy to Cloudflare Workers:
```bash
npm run deploy
```

3. Alternatively, deploy to Cloudflare Pages:
```bash
npm run deploy:pages
```

For more detailed deployment instructions, see [README-cloudflare.md](./README-cloudflare.md).

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

Osama - [GitHub](https://github.com/mkoush1)
