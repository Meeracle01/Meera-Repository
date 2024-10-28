let addNumbers = (req,res) => {
let number1 = parseInt(req.query.num1)
let number2 = parseInt(req.query.num2)

let result =number1 + number2
// res.send("Result : " + result)
res.status(200)
res.json({res: result})
}

let multiplyNumbers = (req, res) =>{
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)

    if (isNaN(number1) || isNaN(number2))
    {
        res.status(500).json({Error:`Invalid data`})
    }

    let result =number1 * number2
    res.status(200)
    res.json({res: result})
}

let subtractNumbers = (req,res) =>{
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);

let result = number1 - number2;
res.status(200).json({ res: result });
}

let divideNumbers = (req,res) =>{
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);

if (number2 === 0) {
    res.status(400).json({ res: "Cannot divide by zero" });
} else {
    let result = number1 / number2;
    res.status(200).json({ res: result });
}
}

module.exports = {addNumbers,multiplyNumbers,subtractNumbers,divideNumbers}