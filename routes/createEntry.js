const express = require('express');
const router = express.Router();
const post = require('./models/Post');

router.get('/createEntry', (req, res) => {
	const title = req.body.title;
	const content = req.body.content;

	const p = new post ({
		title: title,
		content: content
	});

	p.save();

	res.status(200).json(p);
});

module.exports = router;