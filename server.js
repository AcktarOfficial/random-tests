const express = require('express')
const app = express()
const ipgeoblock = require("ipgeoblock-fixed");

app.use(ipgeoblock({
	geolite2: "./GeoLite2-Country.mmdb",
	blockedCountries: [ "MU"]
}, function (req, res) {
	res.statusCode = 500;
	res.end("Your country is blocked. Please use a vpn to access the website");
}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
