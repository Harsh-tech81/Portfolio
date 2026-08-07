const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables (.env file)
dotenv.config();

const app = express();

// Define allowed client URL
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

// CORS Middleware
app.use(cors({
  origin: clientUrl,
  credentials: true
}));

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rate Limiting on contact route
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes.'
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running properly.' });
});

// API Routes
app.use('/api/contact', contactLimiter, contactRoutes);

// Global Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
