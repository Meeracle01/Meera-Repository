const express = require("express");
const cors = require("cors");
const approuter =  require("./routes/approutes");
const calculatorRouter = require("./routes/calculatorroutes");
const userRoutes = require("./routes/userRoutes");
const friendRoutes = require("./routes/friendRoutes");

const app = express();

const server2 = express();

const server3 = express();

app.use(express.json())

server2.use("/", express.static("public"));

app.use   (cors());
app.use("/",approuter);
app.use("/Calculate", calculatorRouter);
app.use('/users', userRoutes);
app.use("/friends", friendRoutes);

module.exports = app;