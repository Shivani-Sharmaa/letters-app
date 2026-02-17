const express = require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Auth Service is running 🚀');
});

module.exports = app;
