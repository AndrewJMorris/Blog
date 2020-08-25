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

app.get("/EJS", (req, res) => {
	let people = ['geddy', 'neil', 'alex'];
	let html = ejs.render('<%= people.join(", "); %>', {people: people});

	res.send(html);
})

app.get("/", (req, res) => { 
	res.sendFile(__dirname + "/index.html");
});

app.get("/Nidiyan*", (req, res) => { 
	res.send("Nidiyan is a WeirdChamp");
});

app.get("/Andrew*", (req, res) => { 
	res.send("Andrew is a WeirdChamp");
});

mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));

const port = 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});