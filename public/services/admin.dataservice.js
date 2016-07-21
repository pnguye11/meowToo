(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .factory("adminDataService", adminDataService);


  adminDataService.$inject = ["$http"];

  function adminDataService($http) {
    var adminFactory = {
      admin: {}
    };

    adminFactory.get = function(id) {
      return $http.get('/api/admins' + id);
    }

    return adminFactory;
  }



})();
