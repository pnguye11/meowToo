(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .controller("SellingControllers", SellingController);

  SellingController.$inject = ["$state", "adminDataService", "$http"];

  function SellingController($state, adminDataService, $http) {
    var vm = this;

    vm.admin = adminDataService.admin;

    vm.products = [];

    vm.newProduct = {
      image: "",
      name: "",
      size: "",
      color: "" ,
      description: ""
    };

    vm.editProduct = {
      image: "",
      name: "",
      size: "",
      color: "" ,
      description: ""
    }

    vm.getProducts   = getProducts;
    vm.deleteProduct = deleteProduct;
    vm.updateProuct  = updateProuct;
    vm.postProduct   = postProduct;
    vm.resetEditForm = resetEditForm;

    vm.getProducts();

      function getProducts() {
      $http.get('/api/products').then(function(response) {
        vm.products = response.data;
      }, function(errRes) {
        console.error('Error posting item!', errRes);
      });
    }

    function deleteproduct(id) {
      $http.delete('/api/products/' + id).then(function(response) {
        console.log(response);
      }, function(errRes) {
        console.error('Error deleting item!', errRes);
      }).then(getProducts);
    }

    function postProduct() {
      $http.post('/api/products', vm.newProduct)
        .then(getProducts)
        .then(function(response) {
          vm.newProduct = {
            image: "",
            name: "",
            size: "",
            color: "" ,
            description: ""
          };
        });
    }

    function updateProduct(id) {
      $http.put('/api/products/' + id, vm.editProduct).then(function(response) {
        vm.editProduct = {
          image: "",
          name: "",
          size: "",
          color: "" ,
          description: ""
        };
      }, function(errRes) {
        console.log('Error fixing item!', errRes);
      }).then(getProducts);
    }

    function resetEditForm() {
      vm.productImage       = '';
      vm.productSize        = '';
      vm.productColor       = '';
      vm.productDescription = '';
      vm.product = '';
      vm.productName = '';
      vm.editProduct = {
        image: "",
        name: "",
        size: "",
        color: "" ,
        description: ""
      };
    }

  }

})();


