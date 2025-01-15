const add = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 + num2;
    res.json({ res: result });
  };
  
  const subtract = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 - num2;
    res.json({ res: result });
  };
  
  const multiply = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 * num2;
    res.json({ res: result });
  };
  
  const divide = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (num2 === 0) {
      return res.status(400).json({ res: 'Division by zero is not allowed' });
    }
    const result = num1 / num2;
    res.json({ res: result });
  };
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
  };