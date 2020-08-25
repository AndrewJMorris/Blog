const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const db = require("./keys");

const app = express();
app.set('view engine', 'ejs');

// Routes
const createEntry = require('./routes/createEntry');
const getEntry = require('./routes/getEntries');

app.use(bodyParser.urlencoded({extended: true}));
app.use(createEntry);
app.use(getEntry);

app.get("/", (req, res) => { 
	res.sendFile(__dirname + "/index.html");
});

app.get('/cock',(req, res) => {
	res.write("According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.");
	res.send();
});

mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));

const port = 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});