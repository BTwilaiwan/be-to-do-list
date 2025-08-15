const apiResponse = require('../models/response');
const dropdownService = require('../services/dropdownService');

exports.getStatus = async (req, res) => {
  try {
    const result = await dropdownService.getStatus();
    const response = new apiResponse("Success", result);
    res.status(200).json(response);
  } catch (error) {
    const response = new apiResponse("Error", error);
    res.status(500).json(response);
  }
};

exports.getPriority = async (req, res) => {
  try {
    const result = await dropdownService.getPriority();
    const response = new apiResponse("Success", result);
    res.status(200).json(response);
  } catch (error) {
    const response = new apiResponse("Error", error);
    res.status(500).json(response);
  }
};