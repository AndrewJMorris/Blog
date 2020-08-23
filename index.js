const express = require("express");                        // this is #include-> weird
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const db = require("./keys");

const app = express();
app.set('view engine', 'ejs');

// Routes
const createEntry = require('./routes/createEntry');
const getEntry = require('./routes/getEntries')

app.use(bodyParser.urlencoded({extended: true}));
app.use(createEntry);
app.use(getEntry);

mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));

const port = 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});