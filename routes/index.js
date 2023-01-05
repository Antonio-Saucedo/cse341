const routes = require("express").Router();

app.get("/", (req, res) => {
  res.send("Antonio Saucedo");
});

module.exports = routes;
