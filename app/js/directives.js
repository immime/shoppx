'use strict';

/* Directives */


angular.module('shoppx.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('sngCategoryNavigation', ['$routeParams', 'sngCategories', function($routeParams, sngCategories) {
    return {
      restrict: "A",//Declare on a <ul> or <ol> element
      template: '<li ng-repeat="cat in categories">\
        <a ng-class="{\'selected\': (category.id == cat.id)}" href="#/category/{{cat.id}}/">{{cat.title}}</a>\
      </li>',
      link: function(scope, elem, attrs) {
        scope.category = null;
        scope.categories = sngCategories.list;

        var catID = $routeParams.categoryId;
        scope.categories.forEach(function(cat) {
          if (cat.id == catID) {
            scope.category = cat;
          };
        })

        elem.addClass('menu-list category-menu');
      }
    }
  }]);
