// controllers/stringController.js

// 1. Reverse a string
const reverseString = (req, res) => {
    const inputString = req.query.str;
    const reversed = inputString.split('').reverse().join('');
    res.json({ result: reversed });
  };
  
  // 2. Convert a string to uppercase
  const toUpperCase = (req, res) => {
    const inputString = req.query.str;
    const uppercased = inputString.toUpperCase();
    res.json({ result: uppercased });
  };
  
  // 3. Check if a string is a palindrome
  const isPalindrome = (req, res) => {
    const inputString = req.query.str;
    const reversed = inputString.split('').reverse().join('');
    const isPalin = inputString === reversed;
    res.json({ result: isPalin });
  };
  
  module.exports = {
    reverseString,
    toUpperCase,
    isPalindrome,
  };
  