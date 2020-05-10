const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/dev');

// Routes
const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');

// Middleware
const { provideErrorHandler } = require('./middlewares');

const { onlyAuthUser } = require('./controllers/users');

const app = express();
const PORT = process.env.PORT | 8080;

// Models ==> Not using then why imported ?
// before mongoose connection import models to avoid errors
const Rental = require('./models/rental');
const User = require('./models/user');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connected to db');
  }
});

// Middlewares
app.use(bodyParser.json());
app.use(provideErrorHandler);

app.get('/api/v1/secret', onlyAuthUser, (req,res) => {
  return res.json({ message: `secret message for ${res.locals.user.username}`});
});

// API routes
app.use('/api/v1/rentals',rentalRoutes);
app.use('/api/v1/users', userRoutes)


app.listen(PORT, (req, res) => {
  console.log(`server is running on ${PORT}`);
});