const express = require('express')
const app = express()
const ipgeoblock = require("ipgeoblock-fixed");

app.use(ipgeoblock({
	geolite2: "./GeoLite2-Country.mmdb",
	blockedCountries: [ "MU"]
}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
