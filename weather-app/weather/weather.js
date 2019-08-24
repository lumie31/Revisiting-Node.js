const request = require("request");

const getWeather = (lat, lng) => {
  var options = {
    method: "GET",
    url: `https://api.darksky.net/forecast/d06c3b1d77b7a410f7bfdee06e9dcbbc/${lat},${lng}`,
    json: true
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(
          `The temperature is ${
            body.currently.temperature
          }, but it feels like ${body.currently.apparentTemperature}`
        );
      } else {
        reject("Something went wrong!");
      }
    });
  });
};

module.exports.getWeather = getWeather;
