'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  .value('sngCategories', {list: [
    {id:1,title:"Abstract"},
    {id:2,title:"Animals"},
    {id:3,title:"Business"},
    {id:4,title:"Cats"},
    {id:5,title:"City"}
    // {id:6,title:"Food"},
    // {id:7,title:"Nightlife"},
    // {id:8,title:"Fashion"},
    // {id:9,title:"Nature"},
    // {id:10,title:"People"},
    // {id:11,title:"Sports"},
    // {id:12,title:"Technics"},
    // {id:13,title:"Transport"}
    ]
  })
  .value('sngProducts', {list: [
    {id:1, categoryId:2,title:"Animal 1", price: 1.23},
    {id:2, categoryId:3,title:"Business 1", price: 3.14},
    {id:3, categoryId:3,title:"Business 2", price: 3.14},
    {id:4, categoryId:4,title:"Cat 3", price: 7.00},
    {id:5, categoryId:4,title:"Cat 4", price: 12.50},
    {id:6, categoryId:4,title:"Cat 5", price: 7.00},
    {id:7, categoryId:5,title:"City 1", price: 12.50},
    {id:8, categoryId:1,title:"Abstract 1", price: 12.50}
    ]
  })
  .value('sngImageSizes', {
    "small":  {height:120,width:160},
    "medium": {height:240,width:320},
    "large":  {height:480,width:640}
  })
  .factory('sngNavigationState', ['$rootScope', function($rootScope) {
    $rootScope.inProducts = true;
    return {
      goProducts: function() {$rootScope.inProducts = true;$rootScope.inCart = false},
      goCart: function() {$rootScope.inProducts = false;$rootScope.inCart = true}
    };
  }]);
