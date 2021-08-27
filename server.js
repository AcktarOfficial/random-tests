const express = require('express')
const app = express()
const ipgeoblock = require("node-ipgeoblock");

app.use(ipgeoblock({
	geolite2: "./GeoLite2-Country.mmdb",
	blockedCountries: [ "FR"]
}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
