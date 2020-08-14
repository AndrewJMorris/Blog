const express = require("express");                        // this is #include-> weird
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Default route
app.get("/", (req,res) => {
	res.send("hi")
});

const port = 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});