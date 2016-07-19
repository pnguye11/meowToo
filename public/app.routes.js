(function() {
  "use strict";

  angular
    .module("SkunkLapsApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    stateProvider
      .state("homePage", {
        url: "/template/home.html"
        controller: "homeController",
        controllerAs: "vm"
      })
      .state("aboutPage", {
        url: "/about",
        templateUrl: "/templates/about.html"
      })



    $urlRouterProvider.otherwise("/");
  }

})();
