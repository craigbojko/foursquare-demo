module.exports = function($scope, $http) {  
  var url = './app'
  if (window.location.origin.indexOf('localhost') > -1) {
    url = 'http://localhost:1337/app'
  }

  $http.get(url).success(function(data) {
    $scope.results = data.venues
  })
}
