const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/createEntry', (req, res) => {
	const title = req.body.title;
	const content = req.body.content;

	const p = new Post ({
		title: title,
		content: content
	});

	p.save();

	res.status(200).redirect("/");
});

module.exports = router;