require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/database');

const app = express();

app.use(express.json());

(async () => {
    await connectDB();

    const PORT = process.env.PORT || 3200;

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
}) ();
