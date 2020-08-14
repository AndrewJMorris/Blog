const express = require("express");                        // this is #include-> weird
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res) => {res.send("hi")});               // "/" is route
app.listen(port);


