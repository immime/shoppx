'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('CategoriesCtrl', ['$scope', 'sngCategories', function($scope, sngCategories) {
    $scope.categories = sngCategories.list;
  }])
  .controller('CategoryCtrl', ['$scope', '$routeParams', 'sngCategories', 'sngProducts', function($scope, $routeParams, sngCategories, sngProducts) {
    $scope.categories = sngCategories.list;

    $scope.category = null;

    $scope.categories.forEach(function(cat) {
      console.log("cat.id", cat.id)
      if (cat.id == $routeParams.categoryId) {
        $scope.category = cat;
      };
    })

    console.log("category:", $scope.category);

    $scope.products = [];
    sngProducts.list.forEach(function(product) {
      if (product.categoryId == $scope.category.id) {
        $scope.products.push(product)
      };
    })
  }])

  .controller('ProductCtrl', ['$scope', '$routeParams', 'sngCategories', 'sngProducts', function($scope, $routeParams, sngCategories, sngProducts) {
    $scope.product = null;
    sngProducts.list.forEach(function(product) {
      if (product.id == $routeParams.productId) {
        $scope.product = product;
      };
    })
  }])

  .controller('CartCtrl', ['$scope', function($scope) {

  }]);
