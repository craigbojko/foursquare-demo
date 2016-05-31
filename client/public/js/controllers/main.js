module.exports = function($scope, $rootScope, $http) {  
  $scope.dataLoaded = false

  $rootScope.$on('dataLoadedEvent', function(event, data) {
  	$scope.results = data.venues
    $scope.dataLoaded = true
  })
}
