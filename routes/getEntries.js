const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/getEntry', (req, res) => {
	Post.find({})
		.then((post) => res.status(200).json(post))
		.catch((err) => console.log(err));
});

module.exports = router;