require("dotenv").config();
const yargs = require("yargs");
const geoCode = require("./geoCode/geoCode");
const forecast = require("./forecast/forecast");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geoCode.geoCodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(result.address);
    forecast.getForecast(
      result.latitude,
      result.longitude,
      (errorMessage, forecastResult) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(JSON.stringify(forecastResult, undefined, 2));
        }
      }
    );
  }
});
