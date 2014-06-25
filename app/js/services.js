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
  });
