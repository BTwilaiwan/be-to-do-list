const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

router.get('/getTaskList', taskController.getTaskList);
router.post('/createTask', taskController.createTask);

module.exports = router;