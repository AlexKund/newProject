scotchTodo.controller('EventlistCtrl', ['$scope', 'eventlistService', function ($scope, eventlistService) {
	$scope.events = eventlistService.getAllEvents();
}]);

scotchTodo.controller('EventCtrl', ['$scope', 'eventlistService', '$route', function ($scope, eventlistService, $route) {
	$scope.sortorder = 'name';
	console.log($route.current.locals.event)
    $scope.event = $route.current.locals.event;
}]);