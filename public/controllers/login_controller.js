(function() {
  "use strict";

  angular
    .module('meowTooApp')
    .controller("LoginController", LoginController);

    LoginController.$inject = ['$state', 'authService', 'userDataService'];

    function LoginController($state, authService, userDataService) {
      var vm = this;

      vm.login = login;
      vm.isLoggedIn = authService.isLoggedIn;
      vm.currentUser = userDataService.user;

      function login() {
        authService.login(vm.email, vm.password)
          .then(function() {
            $state.go('homePage');
          });
      };


    }

})();
