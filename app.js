var sajoy = angular.module('sajoy', ['ui.router']);

sajoy.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('home.about', {
    url: "/about",
    templateUrl: "partials/home.about.html"
  });

  $stateProvider.state('home.skills', {
    url: "/skills",
    templateUrl: "partials/home.skills.html"
  });

  $stateProvider.state('home.portfolio', {
    url: "/portfolio",
    templateUrl: "partials/home.portfolio.html"
  });

  $stateProvider.state('home.links', {
    url: "/links",
    templateUrl: "partials/home.links.html"
  });


});
