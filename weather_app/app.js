require("dotenv").config();
const request = require("request");
request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
      process.env.WEATHER_KEY
    }&location=1301%20lombard%20street%20philadelphia`,
    json: true
  },
  function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    const lat = body.results[0].locations[0].latLng.lat;
    const lng = body.results[0].locations[0].latLng.lng;
    console.log("lat", lat, "lag", lng);
  }
);
