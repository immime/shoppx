'use strict';

/***********
 Controllers
 */

angular.module('myApp.controllers', [])

  /*
    Categories
  ***********/
  .controller('CategoriesCtrl', ['$scope', 'sngCategories', function($scope, sngCategories) {
    $scope.categories = sngCategories.list;
  }])

  /*
    Category
  **********/
  .controller('CategoryCtrl', ['$scope', '$routeParams', 'sngCategories', 'sngProducts', 'sngImageSizes', 
    function($scope, $routeParams, sngCategories, sngProducts, sngImageSizes) {
      
    $scope.categories = sngCategories.list;

    $scope.category = null;

    var size = sngImageSizes.small;
    $scope.imgWidth = size.width;
    $scope.imgHeight = size.height;

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
  .controller('ProductCtrl', ['$scope', '$routeParams', 'sngCategories', 'sngProducts', 'sngImageSizes', 
    function($scope, $routeParams, sngCategories, sngProducts, sngImageSizes) {

    $scope.product = null;
    sngProducts.list.forEach(function(product) {
      if (product.id == $routeParams.productId) {
        $scope.product = product;
      };
    })
    $scope.category = sngCategories.list[$scope.product.categoryId-1];
    $scope.categorySlug = $scope.category.title.toLowerCase();

    var size = sngImageSizes.medium;
    $scope.imgWidth = size.width;
    $scope.imgHeight = size.height;
  }])

  .controller('CartCtrl', ['$scope', function($scope) {

  }]);
