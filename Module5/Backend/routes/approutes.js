const express = require("express")
const appRouter = express.Router()


appRouter.get("/", (req, res) => res.send("Welcome to my backend application"));

appRouter.get("/contact", (req, res) => res.send("Please contact 111-111-111"));

appRouter.get("/About", (req, res) => res.send("This is a backend application created to demonstrate my skills"));

appRouter.get("/test2", (req, res) => res.send("Testing is under construction"));

appRouter.get("/headers", (req, res) => res.send(req.headers));

module.exports = appRouter