const express = require('express');
const router = express.Router();
const dropdownController = require('../controllers/dropdownController');

router.get('/getStatus', dropdownController.getStatus);
router.get('/getPriority', dropdownController.getPriority);

module.exports = router;