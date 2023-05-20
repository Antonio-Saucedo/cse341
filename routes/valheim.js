const express = require('express');
const router = express.Router();

const dataController = require('../controllers/data');

// GET all data
router.get('/', dataController.getAllData);

// localhost:8080/data/
module.exports = router;
