angular.module("ContactManagerApp", ["ngRoute"]).config(function($routeProvider) {
  $routeProvider.when("/", {
      templateUrl: "list.html",
      controller: "ListCtrl"
    })
    .when("/contact/:name", {
      templateUrl: "edit.html",
      controller: "EditCtrl"
    })
    .when("/analytics", {
      templateUrl: "analytics.html",
      controller: "AnalyticsCtrl"
    });
  console.log("App initialized and configured");
});
