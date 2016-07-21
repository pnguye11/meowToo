(function() {
  "use strict";

  angular
      .module("meowTooApp")
      .controller("MainController", MainController);

  MainController.$inject = ["$state", "adminDataService", "$log", "authService"];

  function MainController($state, adminDataService, $log, authService) {
    var vm = this;

    vm.adminService = adminDataService;
    vm.logout      = authService.logout;
    vm.isLoggedIn  = authService.isLoggedIn;

    vm.$state = $state;
  }

})();
