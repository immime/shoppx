'use strict';

/* Directives */


angular.module('shoppx.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('sngCategoryNavigation', function() {
    return {
      restrict: "A",//Declare on a <ul> or <ol> element
      template: '<li ng-repeat="cat in categories">\
        <a ng-class="{\'selected\': (category.id == cat.id)}" href="#/category/{{cat.id}}/">{{cat.title}}</a>\
      </li>',
      link: function(scope, elem, attrs) {
        elem.addClass('menu-list category-menu');
      }
    }
  });
