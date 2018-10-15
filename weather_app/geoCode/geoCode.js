const request = require("request");
const geoCodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
        process.env.LOCATION_KEY
      }&location=${encodedAddress}`,
      json: true
    },
    function(error, response, body) {
      if (error) {
        callback("Unable to connect");
      } else if (!body || body.results[0].locations.length === 0) {
        callback("Unable to find the address");
      } else if (body && body.results[0].locations.length > 0) {
        let {
          street,
          adminArea5: city,
          adminArea3: state,
          adminArea1: country
        } = body.results[0].locations[0];
        callback(undefined, {
          address: `${street} , ${city}, ${state}, ${country}`,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    }
  );
};

module.exports.geoCodeAddress = geoCodeAddress;
