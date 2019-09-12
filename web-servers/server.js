const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append to server.log file");
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
// });

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getUTCFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});
app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("home.hbs", {
    body: "Welcome to the home page",
    pageTitle: "Welcome Home"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "Welcome to the About Page"
  });
});

app.get("/bad", (req, res) => {
  res.json({
    errorMessage: "Unable to fulfil promise, sucker"
  });
});

app.listen(port, () => {
  console.log("Server started successfully!");
});
