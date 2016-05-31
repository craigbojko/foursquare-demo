var angular = require('angular')
var mainController = require('./controllers/main')
require('angular-route')

angular
  .module('FsqDemoApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('MainCtrl', mainController)
