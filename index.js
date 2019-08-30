const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to DB
mongoose.connect('mongodb connect link', { useNewUrlParser: true }, () =>
	console.log('connected to db')
);

// Import Routes
const authRoute = require('./routes/auth');

// Route Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server is up and running...'));
