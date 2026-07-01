const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const logger = require('./middleware/logger');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Test DB connection
db.query('SELECT 1')
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Database connection failed:', err));

// Middleware
app.use(logger);

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/users', userRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});