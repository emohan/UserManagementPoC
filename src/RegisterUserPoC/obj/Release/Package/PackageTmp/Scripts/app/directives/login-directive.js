angular.module('PoCApp')
.directive('logIn', ['accountService', function (AccountService) {
    return {
        restrict: 'E',
        templateUrl: "Templates/LogIn.html"
    }
}])