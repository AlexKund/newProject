scotchTodo.controller('EventlistCtrl', ['$scope', 'eventlistService', function ($scope, eventlistService) {
	$scope.events = eventlistService.getAllEvents();
}]);

scotchTodo.controller('EventCtrl', ['$scope', 'eventlistService', '$route', function ($scope, eventlistService, $route) {
	$scope.sortorder = 'name';
    $scope.event = $route.current.locals.event;
}]);