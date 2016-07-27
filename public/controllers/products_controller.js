(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .controller("ProductController", ProductController);

  ProductController.$inject = ["$state", "adminDataService", "$http"];

  function ProductController($state, adminDataService, $http) {
    var vm = this;

    vm.admin = adminDataService.admin;

    vm.products = [];

    vm.newProduct = {
      image: "",
      title: "",
      stock: Number,
      price: Number,
      description: ""
    };

    vm.editProduct = {
      image: "",
      title: "",
      stock: Number,
      price: Number,
      description: ""
    }

    vm.getProducts   = getProducts;
    vm.deleteProduct = deleteProduct;
    vm.updateProduct  = updateProduct;
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

    function deleteProduct(id) {
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
            title: "",
            stock: Number,
            price: Number,
            description: ""
          };
        });
    }

    function updateProduct(id) {
      $http.put('/api/products/' + id, vm.editProduct).then(function(response) {
        vm.editProduct = {
          image: "",
          title: "",
          stock: Number,
          price: Number,
          description: ""
        };
      }, function(errRes) {
        console.log('Error fixing item!', errRes);
      }).then(getProducts);
    }

    function resetEditForm() {
      vm.productImage       = '';
      vm.productPrice       = Number;
      vm.productStock       = Number;
      vm.productDescription = '';
      vm.product = '';
      vm.productTitle = '';
      vm.editProduct = {
        image: "",
        title: "",
        stock: Number,
        price: Number,
        description: ""
      };
    }

  }

})();


