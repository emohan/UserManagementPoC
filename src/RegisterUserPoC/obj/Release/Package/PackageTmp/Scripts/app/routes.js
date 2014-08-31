angular.module('PoCApp')
.config(function ($routeProvider) {
    $routeProvider.when(
      "/", {
          templateUrl: "welcome",
          controller: "accountController",
          auth: true
      })
    .when(
    "/register/", {
        templateUrl: "register",
        controller: "registerController"
    })
    .when(
    "/login/", {
        templateUrl: "login",
        controller: "loginController"
    });
});