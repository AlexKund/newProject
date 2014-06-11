scotchTodo.controller('EventlistCtrl', ['$scope', 'eventlistService', '$routeParams', 'delayedData',function ($scope, eventlistService, $routeParams,delayedData) {
	$scope.events = delayedData;  //delayed data
	console.log(delayedData);
}]);
 
scotchTodo.controller('EventCtrl', ['$scope', 'eventlistService', '$route', '$routeParams',function ($scope, eventlistService, $route, $routeParams) {
	$scope.sortorder = 'name';
    $scope.event = $route.current.locals.event;
	console.log($routeParams.eventId) //get root params
	console.log($route.current.pathParams.eventId); //get root params strongly relate to rout query, not added from url
}]);