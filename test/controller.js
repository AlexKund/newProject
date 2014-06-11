'use strict';

describe('EventlistCtrl', function(){
	var scope, $controllerConstructor;

	beforeEach(module("scotchTodo"));

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		$controllerConstructor = $controller;
	}));

	it('trqbva da pokaje servisite za tozi kontroler', function(){
		var mockEvents = {};
		var ctrl = $controllerConstructor('EventlistCtrl',
			{$scope:scope,$location:{},$delayedData:{}});
		expect(scope.events).toBe(mockEvents);
	});
});