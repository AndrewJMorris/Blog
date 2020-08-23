const express = require("express");                        // this is #include-> weird
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./keys");

const app = express();

// Routes
const createEntry = require('./routes/createEntry');

app.use(bodyParser.urlencoded({extended: true}));
app.use(createEntry);

app.get("/", (req, res) => {
	res.send("hi");
});

mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));

const port = 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});