var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/suggest", {
    templateUrl: "views/suggest.html"
  })
  .when("/about", {
    templateUrl: "views/about.html"
  })
  .when("/featured", {
    controller: "FeaturedController",
    templateUrl: "views/featured.html"
  })
  .when("/:status", {
    controller: "MainController",
    templateUrl: "views/all.html"
  })
  .when("/published/:medium", {
    controller: "MainController",
    templateUrl: "views/all.html"
  })
  .when("/published/:medium/:name", {
    controller: "MainController",
    templateUrl: "views/content.html"
  })
  .otherwise({
    redirectTo: "/featured"
  });
});
