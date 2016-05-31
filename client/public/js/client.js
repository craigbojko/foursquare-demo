require('bootstrap/dist/css/bootstrap.css')

var angular = require('angular')
var mainController = require('./controllers/main')
var submitController = require('./controllers/submit')
require('angular-route')

angular
  .module('FsqDemoApp', ['ngRoute'])
  .factory('Scopes', function ($rootScope) {
    return $rootScope
  })
  .controller('MainCtrl', mainController)
  .controller('SubmitController', submitController)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:location', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
