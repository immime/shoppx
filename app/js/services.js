'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  .value('sngCategories', {list: [
    {id:1,title:"First"},
    {id:2,title:"Second"},
    {id:3,title:"Third"}
    ]
  })
  .value('sngProducts', {list: [
    {id:1, categoryId:1,title:"Product 1", price: 1.23},
    {id:2, categoryId:1,title:"Product 2", price: 3.14},
    {id:3, categoryId:2,title:"Product 3", price: 7.00}
    ]
  });
