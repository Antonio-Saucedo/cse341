const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Antonio Saucedo");
});

module.exports = routes;
