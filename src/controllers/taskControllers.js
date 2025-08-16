const apiResponse = require('../models/response');
const taskService = require('../services/taskService');

exports.getTaskList = async (req, res) => {
  try {
    const result = await taskService.getTaskList();
    const response = new apiResponse("Success", result);
    res.status(200).json(response);
  } catch (error) {
    const response = new apiResponse("Error", error.message);
    res.status(500).json(response);
  }
};


exports.createTask = async (req, res) => {
  try {
    const result = await taskService.createTask(req.body);
    if (result?.statusCode === 500) {
      const response = new apiResponse("Error", result?.message);
      res.status(500).json(response);
    } else {
      const response = new apiResponse("Success", result);
      res.status(200).json(response);
    }
    
  } catch (error) {
    const response = new apiResponse("Error", error.message);
    res.status(500).json(response);
  }
};


exports.deleteTaskById = async (req, res) => {
  try {
    const result = await taskService.deleteTaskById(req);
     if (result?.statusCode === 500) {
      const response = new apiResponse("Error", result?.message);
      res.status(500).json(response);
    } else {
      const response = new apiResponse("Success", "Task deleted successfully");
      res.status(200).json(response);
    }
    
  } catch (error) {
    const response = new apiResponse("Error", error.message);
    res.status(500).json(response);
  }
};