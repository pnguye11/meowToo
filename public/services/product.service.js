(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .factory("productDataService", productDataService);

  productDataService.$inject = ['$http'];

  function productDataService($http) {
    var productFactory = {
      product: {}
    };

    // get a single item
    productFactory.get = function(id) {
      return $http.get('/api/products/' + id);
    };

    // get all products
    productFactory.all = function() {
      return $http.get('/api/products/');
    };

    // create a item
    productFactory.create = function(productData) {
      return $http.post('/api/products/', productData);
    };

    // update a item
    productFactory.update = function(id, productData) {
      return $http.put('/api/products/' + id, productData);
    };

    // delete a item
    productFactory.delete = function(id) {
      return $http.delete('/api/products/' + id);
    };



    // return our entire itemFactory object
    return productFactory;
  }

})();
