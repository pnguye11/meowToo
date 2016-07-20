(function() {
  "use strict";

  angular
    .module('meowTooApp')
    .controller("AdminController", AdminController);

    AdminController.$inject = ['$state', 'adminDataService', 'authService'];

    function AdminController($state, authService, adminDataService) {
      var vm = this;

      vm.currentUser = adminDataService.user;

    };

})();
