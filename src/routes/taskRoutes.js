const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

router.get('/getTaskList', taskController.getTaskList);

module.exports = router;