// routes/stringRoutes.js

const express = require('express');
const router = express.Router();
const {
  reverseString,
  toUpperCase,
  isPalindrome,
} = require('../controllers/stringController');

// Route to reverse a string
router.get('/reverse', reverseString);

// Route to convert a string to uppercase
router.get('/uppercase', toUpperCase);

// Route to check if a string is a palindrome
router.get('/palindrome', isPalindrome);

module.exports = router;

