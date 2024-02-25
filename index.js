require('dotenv').config(); // imports content of .env file

const express = require('express');
const mongoose = require('mongoose'); 
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

app.listen(3000, () => {
  console.log(`Server started at ${3000}`)
})