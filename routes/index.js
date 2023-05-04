const express = require('express');
const router = express.Router();

// GET /feed/posts
router.use('/contacts', require('./contacts'));

// localhost:8080/contacts/
module.exports = router;
