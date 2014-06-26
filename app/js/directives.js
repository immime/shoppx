'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('sngCategoryNavigation', function() {
    console.log('categories directive');
    return {
      restrict: "A",//Declare on a <ul> or <ol> element
      template: '<li ng-repeat="category in categories">\
        <a href="#/category/{{category.id}}/">{{category.title}}</a>\
      </li>',
      link: function(scope, elem, attrs) {
        elem.addClass('menu-list');
      }
    }
  });
