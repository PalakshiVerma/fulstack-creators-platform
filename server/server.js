import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import postRoutes from './routes/postRoutes.js';
import errorHandler from './middleware/errorHandler.js';


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow both localhost ports for development
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    // If no origin (e.g., same-origin requests), allow it
    if (!origin) return callback(null, true);
    
    // Check if origin is in the allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(Object.assign(new Error('Not allowed by CORS'), {
      statusCode: 403
    }));
  },
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); // Add this line
// Health check endpoint (keep this for testing)
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Server is running!',
    timestamp: new Date(),
    database: 'Connected'
  });
});
app.use('/api/posts', postRoutes);

app.use((req, res, next) => {
  next({
    statusCode: 404,
    message: 'Route not found'
  });
});

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});