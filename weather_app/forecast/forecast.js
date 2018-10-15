const request = require("request");

const getForecast = (lat, lang, callback) => {
  request(
    {
      url: `https://api.forecast.io/forecast/${
        process.env.FORECAST_KEY
      }/${lat},${lang}?units=si`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: `${body.currently.temperature} C `,
          apparentTemperature: `${body.currently.apparentTemperature} C `
        });
      } else {
        callback("Unable to fetch weather");
      }
    }
  );
};

module.exports.getForecast = getForecast;
