const mongoose = require("mongoose");
const { model } = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema ({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
},
{
	collection: 'blogPosts',
	versionKey: false
}
);

module.exports = post = mongoose.model('post', 	Post);