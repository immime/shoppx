'use strict';

/***********
 Controllers
 */

angular.module('myApp.controllers', [])

  /*
    Categories
  ***********/
  .controller('CategoriesCtrl', ['$scope','sngCategories', 'sngNavigationState',
    function($scope, sngCategories, sngNavigationState) {
    sngNavigationState.goProducts();

    $scope.categories = sngCategories.list;
  }])

  /*
    Category
  **********/
  .controller('CategoryCtrl', ['$scope', '$routeParams','sngCategories', 'sngProducts', 'sngImageSizes', 'sngNavigationState', 
    function($scope, $routeParams, sngCategories, sngProducts, sngImageSizes, sngNavigationState) {

    sngNavigationState.goProducts();
    $scope.categories = sngCategories.list;

    $scope.category = null;

    $scope.imgWidth = sngImageSizes.small.width;
    $scope.imgHeight = sngImageSizes.small.height;

    $scope.categories.forEach(function(cat) {
      console.log("cat.id", cat.id)
      if (cat.id == $routeParams.categoryId) {
        $scope.category = cat;
      };
    })

    $scope.categorySlug = $scope.category.title.toLowerCase();

    $scope.products = [];
    sngProducts.list.forEach(function(product) {
      if (product.categoryId == $scope.category.id) {
        $scope.products.push(product)
      };
    })
  }])


  /*
    Product
  *********/
  .controller('ProductCtrl', ['$rootScope', '$scope', '$routeParams', 'sngCategories', 'sngProducts', 'sngImageSizes', 'sngNavigationState', 
    function($rootScope, $scope, $routeParams, sngCategories, sngProducts, sngImageSizes, sngNavigationState) {
      //Main navigation is outside the ngView, so nav state variables go on root scope.
      sngNavigationState.goProducts();

      $scope.categories = sngCategories.list;

      $scope.product = null;
      sngProducts.list.forEach(function(product) {
        if (product.id == $routeParams.productId) {
          $scope.product = product;
        };
      })
      $scope.category = sngCategories.list[$scope.product.categoryId-1];
      $scope.categorySlug = $scope.category.title.toLowerCase();

      $scope.imgWidth = sngImageSizes.medium.width;
      $scope.imgHeight = sngImageSizes.medium.height;

      $scope.addToCart = function(product) {
        if (!$rootScope.cart) {
          $rootScope.cart =  {};
        };
        if (!$rootScope.cart[product.id]) {
          $rootScope.cart[product.id] = [];
        };
        if (!$rootScope.totalInCart) {
          $rootScope.totalInCart = 0;
        }

        $rootScope.cart[product.id].push(product)
        $rootScope.totalInCart++;

      }

      $scope.removeFromCart = function(product) {
        $rootScope.cart[product.id].pop();
        $rootScope.totalInCart--;
      }
    }
  ])

  .controller('CartCtrl', ['$scope', 'sngNavigationState', function($scope, sngNavigationState) {
    sngNavigationState.goCart();
  }]);
