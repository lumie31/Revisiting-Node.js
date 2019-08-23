// // const request = require("request");
// const yargs = require("yargs");

// const geocode = require("./geocode/geocode");

// const argv = yargs
//   .options({
//     address: {
//       demandOption: true,
//       alias: "a",
//       describe: "Address to fetch weather for",
//       string: true
//     }
//   })
//   .help()
//   .alias("help", "h").argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// //d06c3b1d77b7a410f7bfdee06e9dcbbc

const request = require("request");
var options = {
  method: "GET",
  url: `https://api.darksky.net/forecast/d06c3b1d77b7a410f7bfdee06e9dcbbc/39.95,-75.16`,
  json: true
};
// const url =
//   "https://api.darksky.net/forecast/d06c3b1d77b7a410f7bfdee06e9dcbbc/39.95,-75.16";
request(options, (error, response, body) => {
  if (error) {
    console.log("Something went wrong!");
  } else {
    console.log(`Temperature: ${body.currently.temperature}`);
  }
});
