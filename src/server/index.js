const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const { testConnection } = require('./config/database');
const { initDatabase } = require('./config/initDatabase');

// Import routes
const authRoutes = require('./routes/auth');
const servicesRoutes = require('./routes/services');
const tasksRoutes = require('./routes/tasks');
const cookieRoutes = require('./routes/cookies');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'pestmark-session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5174',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-session-id']
}));

// Generate session ID for new visitors
app.use((req, res, next) => {
  if (!req.cookies.sessionId) {
    const sessionId = uuidv4();
    res.cookie('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 365 * 24 * 60 * 60 * 1000 // 1 year
    });
    req.cookies.sessionId = sessionId;
  }
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/tasks', tasksRoutes);
app.use('/api/cookies', cookieRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve static files from public directory
app.use(express.static('public'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server function
const startServer = async () => {
  try {
    // Test database connection
    const dbConnected = await testConnection();
    
    if (dbConnected) {
      // Initialize database if connection is successful
      try {
        await initDatabase();
        console.log('✅ Database initialized successfully.');
      } catch (dbError) {
        console.error('⚠️ Database initialization failed, but server will continue:', dbError.message);
      }
    } else {
      console.log('⚠️ Database connection failed, but server will continue without database features.');
    }

    // Start the server regardless of database status
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📱 Frontend should be accessible at: ${process.env.CLIENT_URL || 'http://localhost:5174'}`);
      console.log(`🔧 API endpoints available at: http://localhost:${PORT}/api`);
      
      if (!dbConnected) {
        console.log('⚠️ Note: Some features may be limited due to database connection issues.');
        console.log('💡 To enable full functionality, please configure MySQL or check your database settings.');
      }
    });

  } catch (error) {
    console.error('❌ Server startup error:', error);
    console.log('💡 Server will attempt to start without database features...');
    
    // Start server even if database fails
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} (limited functionality)`);
      console.log(`📱 Frontend should be accessible at: ${process.env.CLIENT_URL || 'http://localhost:5174'}`);
    });
  }
};

startServer(); 