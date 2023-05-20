const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/data', require('./valheim'));

module.exports = router;
