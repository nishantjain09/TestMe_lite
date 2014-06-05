var uitest = angular.module('uitest', ['ngRoute']);


uitest.controller('MainCtrl',['$scope','$routeParams','$location', function($scope, $routeParams,$location) {
	$scope.obj = {
		"abstract" : false,
		"publication" : false,
		"inventor" : false,
		"language" : false,
		"source": false,
		"priority": false
	};
	
	$scope.goToRoute = function(rt)
	{
		if($scope.obj.language == true)
		{
			if($scope.obj.abstract == false && $scope.obj.publication == false && $scope.obj.inventor == false && $scope.obj.source == false && $scope.obj.priority == false)
			{
				return false;	
			}
		}
		$location.path(rt).search($scope.obj);
	}
}]);

uitest.config(['$routeProvider',function($routeProvider) {
	
	$routeProvider

	.when('/results',
		{
			templateUrl: 'results.html',
			controller: 'resultController'
		})

	.when('/index',
		{
			templateUrl: 'index1.html',
			controller: 'MainCtrl'
		})

	.otherwise({
		redirectTo : '/index'
	});	

}])

