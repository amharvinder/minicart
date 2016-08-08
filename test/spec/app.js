'use strict';

describe('Controller: cartController', function () {

  // load the controller's module
  beforeEach(module('minicartApp'));

  var cartController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    cartController = $controller('cartController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of products to the scope', function () {
    expect(scope.products.length).toBe(5);
  });
});
