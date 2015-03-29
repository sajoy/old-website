var sajoy = angular.module('sajoy', ['ui.router']);

sajoy.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('about', {
    url: "/",
    templateUrl: "partials/about.html"
  });

  $stateProvider.state('skills', {
    url: "/skills",
    templateUrl: "partials/skills.html"
  });

  $stateProvider.state('portfolio', {
    url: "/portfolio",
    templateUrl: "partials/portfolio.html"
  });

  $stateProvider.state('links', {
    url: "/links",
    templateUrl: "partials/links.html"
  });

  $urlRouterProvider.otherwise("/");

});
