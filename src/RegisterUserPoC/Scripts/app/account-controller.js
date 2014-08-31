angular.module('PoCApp', ['ngResource', 'ngRoute'])
.controller('accountController', ['$scope', '$http', 'accountService', function ($scope, $http, AccountService) {
    $scope.loggedIn = false;
    
    $scope.init = function () {
        AccountService.GetUserRecord(1)
        .success(function (data) {
            $scope.username = data.firstName;
        })
        $scope.signOut = function () {
            AccountService.LogOut()
                .success(function (data) {
                $scope.loggedIn = false;
                window.location = "#/login/";
            })
           

        }
    }

}])