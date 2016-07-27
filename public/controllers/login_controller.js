(function() {
  "use strict";

  angular
    .module('meowTooApp')
    .controller("LoginController", LoginController);

    LoginController.$inject = ['$state', 'authService', 'adminDataService'];

    function LoginController($state, authService, adminDataService) {
      var vm = this;

      vm.login = login;
      vm.isLoggedIn = authService.isLoggedIn;
      vm.currentUser = adminDataService.user;

      function login() {
        authService.login(vm.email, vm.password)
          .then(function() {
            $state.go('product_form');
          });
      };


    }

})();
