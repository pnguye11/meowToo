(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("homePage", {
        url: '/home',
        templateUrl: "/templates/home.html",
        controller: "MainController",
        controllerAs: "vm"
      })
      .state("aboutPage", {
        url: '/about',
        templateUrl: "/about",
        templateUrl: "/templates/about.html"
      })
      .state("admin", {
        url: '/admin',
        templateUrl: "/templates/admin.html",
        controller: "AdminController",
        controllerAs: "vm"
      })
      .state("login", {
        url: '/login',
        templateUrl: "/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      })



    $urlRouterProvider.otherwise("/home");
  }

})();
