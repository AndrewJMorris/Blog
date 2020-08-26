const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Post = require("./models/Post");
const db = require("./keys");

const app = express();

// Routes
const createEntry = require('./routes/createEntry');
const getEntry = require('./routes/getEntries');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(createEntry);
app.use(getEntry);

app.get("/", (req, res) => {
	const p = Post.find({})
		.then((post) => {return(post);})
		.catch((err) => console.log(err)); 

	console.log(p);

	res.render("index", {});
});

app.get("/About", (req, res) => {
	res.render("about", {});
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