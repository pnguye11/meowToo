(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .factory("userDataService", userDataService);


  userDataService.$inject = ["$http"];

  function userDataService($http) {
    var userFactory = {
      user: {}
    };

    userFactory.get = function(id) {
      return $http.get('/api/users/' + id);
    }

    return userFactory;
  }



})();
