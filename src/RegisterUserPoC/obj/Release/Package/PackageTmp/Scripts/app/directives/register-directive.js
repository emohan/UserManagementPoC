angular.module('PoCApp')
.directive('registerUser', ['accountService', function (AccountService) {
    return {
        restrict: 'E',
        templateUrl: "Templates/Register.html"
    }
}])