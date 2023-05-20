const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/', require('./valheim'));

module.exports = router;
