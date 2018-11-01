const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world!");
});

const server = app.listen(PORT);

console.log(`Server started at ${PORT} port`);

module.exports = {
  app,
  server
};
