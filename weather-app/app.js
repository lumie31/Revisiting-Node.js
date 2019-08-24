// const request = require("request");
const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");
const geocode2 = require("./playground/promise-2");

let lat = 39.95;
let lng = -75.16;

const argv = yargs
  .options({
    address: {
      demandOption: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(results.location);
//     weather.getWeather(
//       results.latitude,
//       results.longitude,
//       (errorMessage, weatherResult) => {
//         if (errorMessage) {
//           console.log(errorMessage);
//         } else {
//           console.log(JSON.stringify(weatherResult, undefined, 2));
//         }
//       }
//     );
//   }
// });

geocode2
  .geocodeAddress(argv.address)
  .then(result => {
    weather.getWeather(result.latitude, result.longitude);
  })
  .then(weatherResult => {
    JSON.stringify(weatherResult, undefined, 2);
  })
  .catch(error => {
    console.log(error);
  });
