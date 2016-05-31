
module.exports = function($scope, $rootScope, $http) {  
  var url = './app'
  if (window.location.origin.indexOf('localhost') > -1) {
    url = 'http://localhost:1337/app'
  }

  $scope.text = ''
	$scope.submit = function () {
		if ($scope.text) {
			$http.get(url + '/' + $scope.text).success(function (data) {
				$rootScope.$emit('dataLoadedEvent', data)
		  })
		  $scope.text = ''
		}
	}
}
