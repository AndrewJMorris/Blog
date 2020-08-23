const express = require("express");                        // this is #include-> weird
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./keys");

const app = express();

// Routes
const createEntry = require('./routes/createEntry');
const getEntry = require('./routes/getEntries')

app.use(bodyParser.urlencoded({extended: true}));
app.use(createEntry);
app.use(getEntry);

app.use("/", (req, res) => {
	res.send("andrew is a WeirdChamp");
});

mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));

const port = 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});