'use strict';

scotchTodo.factory('eventlistService', ['$resource', '$q', '$timeout',function ($resource, $q, $timeout) {	
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
		}
	};
}]);