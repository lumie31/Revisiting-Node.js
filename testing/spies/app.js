var db = require("./db");

module.exports.handleSignup = (email, password) => {
  //Check if email already exists

  //Save user to db
  db.saveUser({ email, password });
  //Send the welcome email
};
