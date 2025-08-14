const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use('/api/task', taskRoutes);

app.use(errorHandler);

module.exports = app;