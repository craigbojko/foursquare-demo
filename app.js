var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
var config = require('./config/config')
var Foursquare = require('node-foursquare')
var ac = ''

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

app.get('/', function (req, res) {
  res.redirect(301, 'http://localhost:' + config.port + '/login')
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
      ac = accessToken
      res.redirect(301, 'http://localhost:' + config.port + '/client/')
    }
  })
})

app.get('/app/:location', function (req, res) {
  var params = req.params
  var location = params && params.location
  if (!location) { // hack to cover no provided location
    res.send({})
  }

  foursquare.Venues.search(null, null, location, {}, ac, function (err, results) {
    console.log('SEARCH: ', location)
    if (err) {
      console.error(err)
      res.send({})
    } else{
      res.send(results)
    }
  })
})

app.use('/client', express.static(path.join(__dirname, './client')))

app.listen(config.port)
console.log('API Magic happens on port ' + config.port)
