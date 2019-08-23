const request = require("request");

request(
  {
    url: "http://www.google.com",
    json: true
  },
  (error, response, body) => {
    console.log(body);
  }
);
