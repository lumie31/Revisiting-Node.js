const express = require("express");
const hbs = require("hbs");

var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("home.hbs", {
    body: "Welcome to the home page",
    currentYear: new Date().getUTCFullYear(),
    pageTitle: "Welcome Home"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "Welcome to the About Page",
    currentYear: new Date().getUTCFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.json({
    errorMessage: "Unable to fulfil promise, sucker"
  });
});

app.listen(3000, () => {
  console.log("Server started successfully!");
});
