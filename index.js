require('dotenv').config(); // imports content of .env file

const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes/routes.js');
const mongoString = process.env.DATABASE_URL // stores the string into a variable

mongoose.connect(mongoString); // connects tha DB to my server
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database connected');
})

const app = express();

app.use(express.json());
/* This app takes two things: one is the base endpoint,
the other is the contents of the routes. Now all my endpoints will start from /api*/
app.use('/api', routes);

app.listen(3000, () => {
  console.log(`Server started at ${3000}`)
})