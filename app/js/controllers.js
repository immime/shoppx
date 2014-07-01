'use strict';

/***********
 Controllers
 */

angular.module('shoppx.controllers', [])

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
    $scope.imgWidth = sngImageSizes.small.width;
    $scope.imgHeight = sngImageSizes.small.height;

    $scope.category = null;
    var catID = $routeParams.categoryId;

    if (catID) {
      $scope.categories.forEach(function(cat) {
        console.log("cat.id", cat.id)
        if (cat.id == catID) {
          $scope.category = cat;
        };
      })
    };

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
  .controller('ProductCtrl', ['$rootScope', '$scope', '$routeParams', 'sngCategories', 'sngProducts', 'sngImageSizes', 'sngNavigationState','sngCart', 
    function($rootScope, $scope, $routeParams, sngCategories, sngProducts, sngImageSizes, sngNavigationState, sngCart) {
      //Main navigation is outside the ngView, so nav state variables go on root scope.
      sngNavigationState.goProducts();

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

      $scope.cartProducts = sngCart.products;
      $scope.addToCart = function(product) {
        sngCart.addProduct(product);

      }

      $scope.removeFromCart = function(product) {
        sngCart.removeProduct(product);
      }
    }
  ])

  .controller('CartCtrl', ['$scope', 'sngCart', 'sngCategories', 'sngNavigationState', function($scope, sngCart, sngCategories, sngNavigationState) {
    sngNavigationState.goCart();

    $scope.cart = sngCart.products
  }]);
