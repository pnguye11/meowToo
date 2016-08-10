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
        controller: "ProductsController",
        controllerAs: "vm"
      })
      .state("loginPage", {
        url: '/login',
        templateUrl: "/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("productsPage", {
        url: "/products",
        templateUrl: "/templates/products.html",
        controller: "ProductsController",
        controllerAs: "vm"
      });



    $urlRouterProvider.otherwise("/home");
  }

})();
