angular.module('PoCApp')
.service('accountService', function ($http) {
    this.GetUserRecord = function (id) {
        return $http.get('/api/AccountApi/' + id)
    };

    this.RegisterUser = function (user) {
        return $http.post('https://derpeddit.heroku.com/api/v1/core/auth/signup', user)
    };

    this.LogIn = function (user) {
        return $http.post('https://derpeddit.heroku.com/api/v1/core/auth/login', user)
    }
})