(function() {

  angular.module("meowTooApp")
         .controller('UsersController', UsersController);

  UsersController.$inject = ['$state', 'authService', 'authToken', 'userDataService', '$log'];

  function UsersController($state, authService, authToken, userDataService, $log ) {
    var vm = this;

    vm.currentUser = userDataService.user;
    // attaching functions to controller


    };

})();
