(function() {
  "use strict";

  angular
    .module('meowTooApp')
    .controller("NavbarController", NavbarController);

    NavbarController.$inject = ['$state', 'authService', 'userDataService'];

    function NavbarController($state, authService, userDataService) {
      var vm = this;

      // vm.login = login;
      vm.isLoggedIn = authService.isLoggedIn;
      vm.currentUser = userDataService.user;
    }

})();
