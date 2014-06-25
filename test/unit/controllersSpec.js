'use strict';

/* jasmine specs for controllers go here */
describe('Controllers', function() {
  beforeEach(module('myApp.controllers'));

  describe('Category controller', function(){

    var scope;
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller("CategoryCtrl", {
          $scope: scope,
          sngCategories: {list: "foo"}
      });
    }))

    it('scope category list', inject(function($controller, $rootScope) {
      //spec body
      console.log("scope", scope);
      expect(scope.categories).toBe("foo");
    }));

  });

  describe('Cart controller', function(){
    beforeEach(module('myApp.controllers'));

    it('should exist: cart', inject(function($controller) {
      //spec body
      var myCtrl2 = $controller('CartCtrl', { $scope: {} });
      expect(myCtrl2).toBeDefined();
    }));
  });

})
