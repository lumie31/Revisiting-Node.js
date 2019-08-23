const request = require("request");

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

  var options = {
    method: "GET",
    url: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedAddress}`,
    headers: {
      "x-rapidapi-key": "80ceaece30mshc5ee85e97368cddp1f8afejsneef04b5aecfa"
    },
    json: true
  };

  request(options, function(error, response, body) {
    // if (error) throw new Error(error);
    if (error) {
      callback("Unable to connect to map server");
    } else if (body.cod === "404") {
      callback("Invalid Input");
    } else {
      callback(undefined, {
        location: `${body.name}, ${body.sys.country}`,
        longitude: `${body.coord.lon}`,
        latitude: `${body.coord.lat}`
      });
    }
  });
};

module.exports = {
  geocodeAddress
};
// module.exports.geocodeAddress = geocodeAddress;
