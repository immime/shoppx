'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('CategoryCtrl', ['$scope', 'sngCategories', function($scope, sngCategories) {
    $scope.categories = sngCategories.list;
  }])
  .controller('CartCtrl', ['$scope', function($scope) {

  }]);
