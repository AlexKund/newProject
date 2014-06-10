'use strict';

scotchTodo.directive('greetings', ['$log', function($log){
	// Runs during compile
	return {
		// name: 'ctrl',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function ($scope, $element, $attrs, $transclude) {

			var greetingsContent = ['greetings'];

			$scope.greetingFn = function () {
					alert(greetingsContent.join());
				}

			this.addMoreGreetings = function(greetings){
					greetingsContent.push(greetings)
			};
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<button ng-click="greetingFn()" class="btn btn-primary">greetings</button>',
		// templateUrl: '',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}])
	.directive('amGreetings', ['$log', function($log){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			require: 'greetings', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				controller.addMoreGreetings('am am')
			}
		};
	}])
	.directive('bgGreetings', ['$log', function($log){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			require: 'greetings', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				controller.addMoreGreetings('zdravei')
			}
		};
	}]);


// function GreetingCtrl ($scope, $element, $attrs, $transclude) {
// 	$scope.greetingFn = function () {
// 		var greetingsContent = ['greetings'];
// 		alert(greetingsContent.join());
// 		$scope.addMoreGreetings = function(greetings){
// 			this.greetingsContent.push(greetings)
// 		};
// 	}
// }