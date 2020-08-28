const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/post/:id', async (req, res) => {
	const id = req.params.id;

	const p  = await Post.findById(id)
		.then((post) => {return post;})
		.catch((err) => console.log(err));
	
	res.render("post", {
		 post: p
	 });
});

module.exports = router;