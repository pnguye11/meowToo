(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .controller("ProductsController", ProductsController);

  ProductsController.$inject = ["$state", "userDataService", "$log", "$http", "authService"];

  function ProductsController($state, userDataService, $log, $http, authService) {
    var vm = this;
    vm.user = userDataService.user;
    vm.isLoggedIn = authService.isLoggedIn;
    vm.currentUser = userDataService.user;
    vm.products = [];
    vm.categories = [ 'Shoes', 'Misc', 'Apparels' ];



    vm.newProduct = {
      image: "",
      title: "",
      price: Number,
      description: ""
    };

    vm.editProduct = {
      image: "",
      title: "",
      price: Number,
      description: ""
    }

    vm.getProducts   = getProducts;
    vm.deleteProduct = deleteProduct;
    vm.updateProduct = updateProduct;
    vm.postProduct   = postProduct;
    vm.resetEditForm = resetEditForm;

    function getUnique(arr, field) {
      var obj = {};
      arr.forEach(function(e){
        obj[e[field]] = true;
      });
      return Object.keys(obj).sort();
    };


    vm.getProducts();

      function getProducts() {
      $http.get('/api/products').then(function(response) {
        vm.products = response.data;
        vm.uniqueCats = getUnique(vm.products, 'category')
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
      // console.log("hi");
      $http.post('/api/products', vm.newProduct)
        .then(getProducts)
        .then(function(response) {
          vm.newProduct = {
            image: "",
            title: "",
            price: Number,
            description: "",
            // category: ""
          };
        });
    }

    function updateProduct(id) {
      $http.put('/api/products/' + id, vm.editProduct).then(function(response) {
        vm.editProduct = {
          image: "",
          title: "",
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
      vm.productDescription = '';
      vm.productTitle = '';
      vm.editProduct = {
        image: "",
        title: "",
        price: Number,
        description: ""
      };
    }

// vm.getCategory = function([cat]){
//     var p = allprod;
//     var prodcat = [];

//     for (var i=0; i< p.length; i++){
//       for (var j=0; j< p[i].categories.length; j++){
//         if (p[i].categories[j] == cat){
//           console.log(cat);
//           prodcat.push(p[i]);

//         }
//         else if(cat == ''){
//           prodcat = allprod;
//         }
//       }
//     }


//       vm.products = prodcat;
//   }


  }

})();


