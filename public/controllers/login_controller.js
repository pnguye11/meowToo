(function() {
  "use strict";

  angular
    .module('meowTooApp')
    .controller("LoginController", LoginController);

    LoginController.$inject = ['$state', 'authService', 'adminDataService'];

    function LoginController($state, authService, adminDataService) {
      var vm = this;

      vm.login = function() {
        authService.login(vm.email, vm.password)
          .then(function() {
            $state.go("admin");
          });
      }


    };

})();
