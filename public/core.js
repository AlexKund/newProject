var scotchTodo = angular.module('scotchTodo', ['ngRoute','ngResource']);

scotchTodo.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main.html',
		controller: 'mainController'
	}).when('/eventlist', {
		templateUrl: 'eventlist.html',
		controller: 'EventlistCtrl'
	}).when('/event/:eventId', {
		templateUrl: 'event.html',
		controller: 'EventCtrl',
		resolve: {
            event: function($q, $route, eventlistService) {
                var deferred = $q.defer();
                eventlistService.getEvent($route.current.pathParams.eventId)
                    .then(function(event) { deferred.resolve(event); });
                return deferred.promise;
            }
        }
	});	
}]);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}