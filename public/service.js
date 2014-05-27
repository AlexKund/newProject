'use strict';

scotchTodo.factory('eventlistService', ['$resource', '$q', '$timeout', '$http', function ($resource, $q, $timeout,$http) {	
	var resource = $resource('/api/todos/:id', {id: '@id'});

	return {
		getEvent: function (eventId) {
			var deferred = $q.defer();
            $timeout(function() {
                resource.get({id: eventId},
                    function (event) {
                        deferred.resolve(event);
                    },
                    function (response) {
                        deferred.reject(response);
                    });
            }, 5);
            return deferred.promise;
		},
		getAllEvents: function () {
			return resource.query();
		},
       getBooks: function() {
            var deferred = $q.defer();
            resource.query({}, function (response) {
              var someData = response;
               $timeout(function(){
                        return deferred.resolve(someData);
                        $rootScope.$apply();
                    }, 3000);
            });
        return deferred.promise;
    }
	};
}]);

//======================================================session storage
scotchTodo.factory('sessionStorage', ['$rootScope',function ($rootScope) {
    
 var service = {

        // model: {
        //     name: 'Alex',
        //     email: 'alex@alex.com'
        // },

        SaveState: function (data) {
            sessionStorage.userService = angular.toJson({number:data});
        },

        RestoreState: function (data) {
            return angular.fromJson(sessionStorage.userService).number || 0;
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}])