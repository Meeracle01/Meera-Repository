const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// Define routes for calculator operations
router.get('/Add', calculatorController.add);
router.get('/Subtract', calculatorController.subtract);
router.get('/Multiply', calculatorController.multiply);
router.get('/Divide', calculatorController.divide);

module.exports = router;

