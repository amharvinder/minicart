'use strict';

/**
 * @ngdoc overview
 * @name minicartApp
 * @description
 * # minicartApp
 *
 * Main module of the application.
 */

/*
 Minicart app with dependencies. Currently not all are in use but 
 could be nicely used here.
*/ 
var minicartApp = angular.module('minicartApp', [ 	'ngMessages',
													'ngResource',
													'ngRoute',
													'ngSanitize',
													'ngTouch'
												  ]);

/*
 Minicart controller with some features.
*/												  
minicartApp.controller("cartController", function($scope) {

	/* Static Product data. Later we can dynamically fill this up. */
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

	
	/*
	 Calculate the total number of available products for checkout
	*/
	$scope.calculateTotalProducts = function(){
		var totalProducts = 0;
		angular.forEach($scope.products, function(product){
		  if (product.productAvailable) {
			totalProducts = totalProducts + product.quantity;
		  }
		});
		return totalProducts;
	};

	/*
		Calculate Final amount of all available products for the checkout.
	*/
	$scope.calculateTotalAmount = function(){
		var totalAmount = 0;
		angular.forEach($scope.products, function(product){
		  if (product.productAvailable) {
			totalAmount = totalAmount + (product.price * product.quantity);
		  }
		});
		return totalAmount;
	};
	
	/*
		Invoke this to remove any element from the cart.
	*/
    $scope.removeProduct = function (index) {
        $scope.products.splice(index, 1);
    };

});												  

/*
   Routes for all the Menu links.
*/												  
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
  .when('/brands', {
	templateUrl: 'views/brands.html',
	controller: 'BrandsCtrl',
	controllerAs: 'brands'
  })
  .when('/campaign', {
	templateUrl: 'views/campaign.html',
	controller: 'CampaignCtrl',
	controllerAs: 'campaign'
  })
  .otherwise({
	redirectTo: '/'
  });
});
