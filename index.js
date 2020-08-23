const express = require("express");                        // this is #include-> weird
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./keys");

const app = express();

// Routes
const createEntry = require('./routes/createEntry')

app.use(bodyParser.urlencoded({extended: true}));
app.use(createEntry)


const port = 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});