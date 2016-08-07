'use strict';

/**
 * @ngdoc overview
 * @name minicartApp
 * @description
 * # minicartApp
 *
 * Main module of the application.
 */
 
var minicartApp = angular.module('minicartApp', [ 	'ngCookies',
													'ngMessages',
													'ngResource',
													'ngRoute',
													'ngSanitize',
													'ngTouch'
												  ]);

minicartApp.controller("cartController", function($scope) {
    $scope.products = [
						  {
							"productNumber": 411,
							"productName": "Apple, Ingrid Marie, healthy, chewy and not much more",
							"productImageName": "apple.png",
							"price": 1,
							"quantity": 1,
							"productAvailable": true
						  },
						  {
							"productNumber": 132,
							"productName": "Baseball, round used for baseball, quite boring",
							"productImageName": "ball.png",
							"price": 3,
							"quantity": 1,
							"productAvailable": false
						  },
						  {
							"productNumber": 567,
							"productName": "Golden key, where it leads is a mystery but at the same time an adventure",
							"productImageName": "key.png",
							"price": 999,
							"quantity": 1,
							"productAvailable": true
						  },
						  {
							"productNumber": 578,
							"productName": "Leather shoes, slightly worn with a hole in right sole",
							"productImageName": "shoes.png",
							"price": 49,
							"quantity": 1,
							"productAvailable": true
						  },
						  {
							"productNumber": 243,
							"productName": "Umbrella, Blue wooden handle sturdy lightweight construction. Storm approved up to 1000 storm units",
							"productImageName": "umbrella.png",
							"price": 17,
							"quantity": 1,
							"productAvailable": true
						  }
						];

	$scope.anyAvailableProduct = function(){
		angular.forEach($scope.products, function(product){
		  if (!product.productAvailable) {
			return false;
		  }
		});
		return true;
	};
						
	$scope.calculateTotalProducts = function(){
		var totalProducts = 0;
		angular.forEach($scope.products, function(product){
		  if (product.productAvailable) {
			totalProducts = totalProducts + product.quantity;
		  }
		});
		return totalProducts;
	};

	$scope.calculateTotalAmount = function(){
		var totalAmount = 0;
		angular.forEach($scope.products, function(product){
		  if (product.productAvailable) {
			totalAmount = totalAmount + (product.price * product.quantity);
		  }
		});
		return totalAmount;
	};
	
	$scope.anyProductAdded = function(){
		return $scope.calculateTotalAmount() > 0;
	};

    $scope.removeProduct = function (index) {
        $scope.products.splice(index, 1);
    };

});												  
												  
minicartApp.config(function ($routeProvider) {
$routeProvider
  .when('/', {
	templateUrl: 'views/main.html',
	controller: 'MainCtrl',
	controllerAs: 'main'
  })
  .when('/about', {
	templateUrl: 'views/about.html',
	controller: 'AboutCtrl',
	controllerAs: 'about'
  })
  .otherwise({
	redirectTo: '/'
  });
});
