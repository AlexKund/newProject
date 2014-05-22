var scotchTodo = angular.module('scotchTodo', ['ngRoute','ngResource']);

scotchTodo.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main.html',
		controller: 'mainController'
	}).when('/eventlist', {
		templateUrl: 'eventlist.html',
		controller: 'EventlistCtrl',
		resolve: {
            delayedData: function($q, $timeout,eventlistService) {
                 
                // Set up a promise to return
                var deferred = $q.defer();
                    
                // Simulate an external request, this could be an $http.get() in a real app
                $timeout(function() {
                     
                    var myData = eventlistService.getAllEvents();
                     
                    deferred.resolve(myData);
                }, 5000);
                        
                return deferred.promise;
            }
        }
	}).when('/event/:eventId', {
		templateUrl: 'event.html',
		controller: 'EventCtrl',
		resolve: {
            event: function($q, $route, eventlistService) {
                var deferred = $q.defer();
                eventlistService.getEvent($route.current.pathParams.eventId)
                    .then(function(event) { 
                    	deferred.resolve(event); 
                    });
                return deferred.promise;
            }
        }
	})
	.otherwise({ redirectTo: '/' });	
	// $locationProvider.html5Mode(true);
}]);

function mainController($scope, $http, $q, $timeout,$route) {
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

	//promise ================================
	$scope.loadData = function () {
		loadUser()
			.then(userStaff)
			.then(function(result){
				alert(result);
			});
	}

	function loadUser () {
		var deferred = $q.defer();
		$timeout(function(){
			deferred.resolve('Blah!');
		}, 5000);
		return deferred.promise;
	}

	function userStaff (user) {
		var deferred = $q.defer();
		$timeout(function(){
			deferred.resolve('Blah2!');
		}, 5000);
		return deferred.promise;
	}

	//promise all together================================
		//???

	//params==============================================
	$scope.reload = function () {
		console.log($route.current.params);
		$route.reload(); //reload page to it default state
	}

}