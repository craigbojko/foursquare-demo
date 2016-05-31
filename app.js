var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var config = require('./config/config')
var app = express()
var Foursquare = require('node-foursquare')

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.set('port', config.port)

var foursquare = Foursquare({
  'secrets' : {
    'clientId' : config.fsqClientId,
    'clientSecret' : config.fsqClientSecret,
    'redirectUrl' : 'http://localhost:' + config.port + '/fsqRedirect'
  }
})

app.get('/login', function(req, res) {
  res.writeHead(303, { 'location': foursquare.getAuthClientRedirectUrl() })
  res.end()
})

app.get('/fsqRedirect', function (req, res) {
  foursquare.getAccessToken({
    code: req.query.code
  }, function (error, accessToken) {
    if (error) {
      res.send('An error was thrown: ' + error.message)
    } else {
      console.log(accessToken)
    }
  })
})

app.listen(config.port)
console.log('API Magic happens on port ' + config.port)
