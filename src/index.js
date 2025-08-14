require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/database');

const app = require('./app');

app.use(express.json());

// (async () => {
//     await connectDB();

    const PORT = process.env.PORT || 3200;

//     app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     });
// }) ();

connectDB().then(db => {
  app.locals.db = db;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});