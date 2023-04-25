const express = require("express");

const myController = require("../controllers/professional");

const router = express.Router();

// GET /feed/posts
router.get("/", myController.getData);

// localhost:8080/professional/
module.exports = router;
