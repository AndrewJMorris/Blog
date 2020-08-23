const express = require('express');
const router = express.Router();
const post = require('../models/Post');

router.get('/getEntry', (req, res) => {
    res.json('i');
});

module.exports = router;