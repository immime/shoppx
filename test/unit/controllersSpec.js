'use strict';

/* jasmine specs for controllers go here */
describe('Controllers', function() {
  beforeEach(module('myApp.controllers'));

  describe('Categories controller', function(){

    var scope;
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller("CategoriesCtrl", {
          $scope: scope,
          sngCategories: {list: "foo"}
      });
    }))

    it('scope category list', inject(function($controller, $rootScope) {
      //spec body
      expect(scope.categories).toBe("foo");
    }));

  });

  describe('Category Controller', function() {
    var scope;
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller("CategoryCtrl", {
          $scope: scope,
          routeParams: {categoryId: 1},
          sngCategories: {list: [{id:1,title:"First"}]},
          sngCategory: {list: [{id:1, category:1,title:"Product 1", price: 1.23}]}
      });
    }));

    it('finds category', inject(function($controller, $rootScope) {
      expect(scope.category).toBeDefined();
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
