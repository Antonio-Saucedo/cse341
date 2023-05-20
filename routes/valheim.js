const express = require('express');
const router = express.Router();

const dataController = require('../controllers/valheim');

// GET all data
router.get('/', dataController.getAllData);

// localhost:8080/valheim/
module.exports = router;
