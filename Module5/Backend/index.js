const {app, server2, server3} = require ("./app")

const port = 3000;
const port2 = 3001;
const port3 = 3002;


server2.get("/", (req, res) => res.send("Welcome to another server"));
server2.get("/contact", (req, res) => res.send("Please contact 110-110-110"));
server2.get("/About", (req, res) => res.send("This is a backend application about my second server"));


server3.get("/", (req, res) => res.send("Welcome to another server"));
server3.get("/contact", (req, res) => res.send("Please contact 100-100-100"));
server3.get("/About", (req, res) => res.send("This is a backend application about my third server"));


app.listen(port, () => console.log("Server is started and listening on port " + port));
server2.listen(port2, () => console.log("Second server is listening on port " + port2));
server3.listen(port3, () => console.log("Third server is listening on port " + port3));
