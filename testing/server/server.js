const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Aloha!");
});

app.get("/users", (req, res) => {
  res
    .status(200)
    .send([
      { Name: "Olumide", Age: 25 },
      { Name: "Mary", Age: 20 },
      { Name: "Janet", Age: 45 }
    ]);
});

app.listen(3000);

module.exports.app = app;
