'use strict';

scotchTodo.controller('Lesson5Ctrl', ['$scope', function ($scope) {
		
}]);

scotchTodo.controller('InnerCtrl', ['$scope', function ($scope) {
	
}])

scotchTodo.directive('hello', ['$log', function($log){
	// Runs during compile
	return {
		// name: '',
		priority: -1,
		// terminal: true,
		scope: {
			title: '@'
		}, // {} = isolate, true = child, false/undefined = no change
		controller: HelloCtrl,
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<button ng-click="invokeAlertFn()" class="btn btn-primary">Heeellooo<div ng-transclude hello-sek hello-third></div><h2 ng-show="visible">Ng-Transclude + {{title}}</h2></button>',
		// templateUrl: '',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

		}
	};
}]).directive('helloSek', ['$log', function($log){
	// Runs during compile
	return {
		// name: '',
		priority: -1,
		terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: '^hello', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			controller.addMoreItems('msg');
		}
	};
}]).directive('helloThird', ['$log', function($log){
	// Runs during compile
	return {
		// name: '',
		priority: -2,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: '^hello', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			controller.addMoreItems('what');
		}
	};
}]);

function HelloCtrl ($scope, $element, $attrs, $transclude) {
 	var helloContainer = ['hello'];
 	$scope.visible = true;
 	$scope.invokeAlertFn = function () {
 		alert(helloContainer.join());
 		$scope.visible = !$scope.visible
 	}

 	this.addMoreItems = function (item) {
 		helloContainer.push(item);
 	}
 };

//===============================================compile
	scotchTodo.directive('helloMyFriend', ['$log',function($log){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			compile: function(iElm, iAttrs, controller) {

				// for (var i = 0; i < Number(iAttrs.helloMyFriend)-1; i++) {
				// 	iElm.after(iElm.clone().attr('hellomy-friend',0));
				// };
				return function (scope, elem, attrs, ctrl) {
					attrs.$observe('text', function(newValue){
						if(newValue == 'Hello World') {
							elem.css('color','red');
						}
					});
				}
			}
		};
	}]);

//==============================================================jquery in directive
scotchTodo.directive('datePicker', ['$log', function($log){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			iElm.datepicker();
		}
	};
}]);
//==============================================================focus diective

scotchTodo.directive('focusAndKeypress', ['$log', function($log){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			iAttrs.$set('autofocus', true);
			iElm.focus();

			
		}
	};
}]);