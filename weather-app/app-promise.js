const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .options({
    address: {
      demandOption: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true,
      default: "lagos"
    }
  })
  .help()
  .alias("help", "h").argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedAddress}`;

axios({
  method: "get",
  url: geocodeUrl,
  headers: {
    "x-rapidapi-key": "80ceaece30mshc5ee85e97368cddp1f8afejsneef04b5aecfa"
  }
})
  .then(response => {
    // console.log(response);
    var lng = response.data.coord.lon;
    var lat = response.data.coord.lat;
    var weatherUrl = `https://api.darksky.net/forecast/d06c3b1d77b7a410f7bfdee06e9dcbbc/${lat},${lng}`;
    console.log(response.data.name, response.data.sys.country);
    return axios.get(weatherUrl);
  })
  .then(response => {
    var temp = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`The temp is ${temp}, but it feels like ${apparentTemp}`);
  })
  .catch(error => {
    if (error.code === "ENOTFOUND") {
      console.log("There's probably an issue with your internet connection");
    } else if (error.response.status !== "200") {
      console.log("Alaye! Park well");
    }
  });
