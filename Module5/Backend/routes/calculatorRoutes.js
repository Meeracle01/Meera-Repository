const express = require("express")
const cors = require("cors")
const calculatorRouter = express.Router()
const calculatorController = require("../Controllers/calculatorController")


calculatorRouter.get("/Add", (req, res)=>{

    calculatorController.addNumbers(req, res)
})

calculatorRouter.get("/Multiply", (req, res)=>{

    calculatorController.multiplyNumbers(req, res)
})

calculatorRouter.get("/Subtract", (req, res) => {
 
    calculatorController.subtractNumbers(req, res)
})

calculatorRouter.get("/Divide", (req, res) => {
 
    calculatorController.divideNumbers(req, res)
});
module.exports = calculatorRouter