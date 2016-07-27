(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("homePage", {
        url: '/',
        templateUrl: "/templates/home.html",
        controller: "LoginController",
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
      .state("product", {
        url: "/products",
        templateUrl: "/templates/products.html",
        controller: "ProductController",
        controllerAs: "vm"
      });



    $urlRouterProvider.otherwise("/home");
  }

})();
