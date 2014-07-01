'use strict';


// Declare app level module which depends on filters, and services
angular.module('shoppx', [
  'ngRoute',
  'shoppx.filters',
  'shoppx.services',
  'shoppx.directives',
  'shoppx.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categories', {templateUrl: 'partials/categories.html', controller: 'CategoriesCtrl'});
  $routeProvider.when('/category/:categoryId/', {templateUrl: 'partials/category.html', controller: 'CategoryCtrl'});
  $routeProvider.when('/category/:categoryId/products/:productId/', {templateUrl: 'partials/product.html', controller: 'ProductCtrl'});
  $routeProvider.when('/cart', {templateUrl: 'partials/cart.html', controller: 'CartCtrl'});
  $routeProvider.otherwise({redirectTo: '/categories'});
}]);
