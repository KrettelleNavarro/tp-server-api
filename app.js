const express = require('express');
const app = express();

//Routers
const userRouter = require('./routes/user');

//Configuration des routes
app.use('/api', userRouter);

module.exports = app;
