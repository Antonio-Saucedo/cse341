const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/valheim', require('./valheim'));

module.exports = router;
