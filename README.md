# Pestmark - Professional Pest Control Services

A modern web application for pest control services with SQL database backend and cookie consent functionality.

## 🚀 Features

### Frontend
- **React.js** with Material-UI components
- **Responsive design** for all devices
- **Smooth animations** using Framer Motion
- **Cookie consent banner** with customizable preferences
- **PDF company profile** download section
- **Professional UI/UX** with modern design

### Backend
- **SQL Database** (MySQL) with Sequelize ORM
- **Cookie consent management** with session tracking
- **JWT authentication** for secure user management
- **Role-based access control** (Admin, Employee, Customer)
- **RESTful API** with comprehensive endpoints
- **Session management** with secure cookies

### Database Features
- **User management** with roles and permissions
- **Service catalog** with detailed information
- **Task management** for pest control operations
- **Cookie consent tracking** with preferences
- **Audit trails** for compliance

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd Pestmark
```

### 2. Install dependencies
```bash
npm install
```

### 3. Database Setup

#### Create MySQL Database
```sql
CREATE DATABASE pestmark_db;
CREATE USER 'pestmark_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON pestmark_db.* TO 'pestmark_user'@'localhost';
FLUSH PRIVILEGES;
```

#### Configure Environment Variables
Create a `.env` file in the root directory:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=pestmark_db
DB_USER=pestmark_user
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key

# Session Configuration
SESSION_SECRET=your-session-secret-key

# Server Configuration
PORT=5000
NODE_ENV=development

# Client Configuration
CLIENT_URL=http://localhost:5174
```

### 4. Start the application

#### Development Mode
```bash
npm run dev
```

This will start both the backend server (port 5000) and frontend development server (port 5174).

#### Production Mode
```bash
npm run build
npm start
```

## 🍪 Cookie Consent System

The application includes a comprehensive cookie consent system that:

- **Shows consent banner** to new visitors
- **Tracks user preferences** (Necessary, Analytics, Marketing)
- **Stores consent data** in SQL database
- **Allows users to customize** their cookie preferences
- **Provides withdrawal option** for consent
- **Complies with GDPR** and privacy regulations

### Cookie Types
- **Necessary**: Session management and security (required)
- **Analytics**: Website usage tracking (optional)
- **Marketing**: Personalized advertisements (optional)

## 📊 Database Schema

### Tables
- **users**: User accounts with roles and permissions
- **services**: Pest control service catalog
- **tasks**: Pest control job management
- **cookie_consents**: Cookie consent tracking

### Default Data
The application automatically creates:
- Default admin user (admin@pestmark.com / admin123)
- Sample pest control services
- Database tables and relationships

## 🔐 Authentication & Authorization

### User Roles
- **Admin**: Full access to all features
- **Employee**: Access to assigned tasks and services
- **Customer**: Access to services and contact forms

### Security Features
- **JWT tokens** for authentication
- **Password hashing** with bcrypt
- **Session management** with secure cookies
- **Role-based access control**
- **Input validation** and sanitization

## 🚀 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PATCH /api/auth/profile` - Update user profile
- `POST /api/auth/change-password` - Change password

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create service (admin only)
- `PATCH /api/services/:id` - Update service (admin only)
- `DELETE /api/services/:id` - Delete service (admin only)

### Tasks
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create task (admin only)
- `PATCH /api/tasks/:id` - Update task (admin only)
- `DELETE /api/tasks/:id` - Delete task (admin only)

### Cookie Consent
- `GET /api/cookies/status` - Get consent status
- `POST /api/cookies/consent` - Submit consent
- `POST /api/cookies/session` - Generate session ID
- `PATCH /api/cookies/preferences` - Update preferences
- `POST /api/cookies/withdraw` - Withdraw consent

## 🎨 Frontend Features

### Components
- **CookieConsent**: Cookie consent banner and settings
- **Navbar**: Navigation with responsive design
- **Footer**: Site footer with links
- **OptimizedImage**: Image optimization component

### Pages
- **Home**: Landing page with services and PDF section
- **Services**: Service catalog with details
- **About**: Company information
- **Contact**: Contact form and information
- **ServiceDetail**: Individual service details

## 🔧 Development

### Project Structure
```
Pestmark/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── server/             # Backend server
│   │   ├── config/         # Database configuration
│   │   ├── models/         # SQL models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── assets/             # Static assets
├── public/                 # Public files
└── package.json           # Dependencies and scripts
```

### Available Scripts
- `npm run dev` - Start development servers
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure MySQL is running
   - Check database credentials in `.env`
   - Verify database exists

2. **Port Already in Use**
   - Change ports in `.env` file
   - Kill existing processes on ports 5000/5174

3. **Cookie Consent Not Working**
   - Check browser console for errors
   - Verify API endpoints are accessible
   - Ensure CORS is properly configured

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.

---

**Pestmark** - Professional Pest Control Services with modern web technology and comprehensive cookie consent management. 
