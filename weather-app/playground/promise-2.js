const request = require("request");

const geocodeAddress = address => {
  const encodedAddress = encodeURIComponent(address);
  var options = {
    method: "GET",
    url: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedAddress}`,
    headers: {
      "x-rapidapi-key": "80ceaece30mshc5ee85e97368cddp1f8afejsneef04b5aecfa"
    },
    json: true
  };

  return new Promise((resolve, reject) => {
    request(options, function(error, response, body) {
      // if (error) throw new Error(error);
      if (error) {
        reject("Unable to connect to map server");
      } else if (body.cod === "404") {
        reject("Invalid Input");
      } else {
        resolve({
          location: `${body.name}, ${body.sys.country}`,
          longitude: `${body.coord.lon}`,
          latitude: `${body.coord.lat}`
        });
      }
    });
  });
};

geocodeAddress("lagos").then(
  location => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  error => {
    console.log(error);
  }
);
// module.exports.geocodeAddress = geocodeAddress;
