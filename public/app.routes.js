(function() {
  "use strict";

  angular
    .module("meowTooApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
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
      }).state("productsEdit", {
        url: "/productedit",
        templateUrl: "/templates/cart.html",
        controller: "ProductsController",
        controllerAs: "vm"
      });



    $urlRouterProvider.otherwise("/home");
  }

})();
