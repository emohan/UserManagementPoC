angular.module('PoCApp')
.controller('loginController', ['$rootScope', '$scope', '$http', 'accountService', function ($rootScope, $scope, $http, AccountService) {
    $scope.init = function () {
        $scope.user = {};
        $scope.wrongPass = false;

        $scope.logIn = function () {
            AccountService.LogIn($scope.user)
                .success(function () {
                    $rootScope.loggedIn = true;
                    window.location = "#/";
                })
            .error(function () {
                $scope.wrongPass = true;
            })
        }
    }
}])
.run(function ($location, $rootScope, $route) {
    $rootScope.$on('$locationChangeStart', function (evt, next, current) {
        var nextPath = $location.path(),
          nextRoute = $route.routes[nextPath];
        if (nextRoute && nextRoute.auth && !$rootScope.loggedIn) {
            $location.path("/login");
        }
    });
});