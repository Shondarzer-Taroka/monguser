// // server.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const cors=require('cors')
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors(
    // {
    //     origin: 'http://localhost:5173', // Allow requests from this origin
    //     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    // }
))
// Routes
app.use('/api', userRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

// Fallback route for handling invalid URLs
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
