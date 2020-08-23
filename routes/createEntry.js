const express = require('express');
const router = express.Router();

router.get('/createEntry', (req, res) => {
	res.send("hi");
});

module.exports = router;