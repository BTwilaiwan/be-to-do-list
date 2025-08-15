const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');
const dropdownRoutes = require('./routes/dropdownRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use('/api/task', taskRoutes);
app.use('/api/dropdown', dropdownRoutes);

app.use(errorHandler);

module.exports = app;