angular.module('PoCApp')
.controller('registerController', ['$scope', '$http', 'accountService', function ($scope, $http, AccountService) {
    $scope.init = function () {
        $scope.user = {};
        $scope.error = false;

        $scope.registerUser = function () {
            if ($scope.user.password && $scope.user.password == $scope.passwordConfirmation) {
                $scope.error = false;
                AccountService.RegisterUser($scope.user)
                .success(function () {
                    alert("Succesfully registered");
                    window.location = "#/";
                })
            }
            else {
                $scope.error = true;
            }
        }
    }
}])