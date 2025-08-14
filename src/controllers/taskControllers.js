const apiResponse = require('../models/response');
const taskService = require('../services/taskService');

exports.getTaskList = async (req, res) => {
  try {
    const result = await taskService.getTaskList();
    const response = new apiResponse("Success", result);
    res.status(200).json(response);
  } catch (error) {
    const response = new apiResponse("Error", error);
    res.status(500).json(response);
  }
};