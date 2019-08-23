const request = require("request");

var options = {
  method: "GET",
  url:
    "https://community-open-weather-map.p.rapidapi.com/weather?q=lagos,nigeria",
  headers: {
    "x-rapidapi-key": "80ceaece30mshc5ee85e97368cddp1f8afejsneef04b5aecfa"
  },
  json: true
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(`Location: ${body.name}, ${body.sys.country}`);
  console.log(`Longitude: ${body.coord.lon}`);
  console.log(`Latitude: ${body.coord.lat}`);
});
