angular.module('PoCApp')
.service('accountService', function ($http) {
    this.GetUserRecord = function (id) {
        return $http.get('/api/AccountApi/' + id)
    };

    this.RegisterUser = function (user) {
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Access-Control-Allow-Headers': 'x-requested-with, content-type, accept',
        };
        $http.defaults.useXDomain = true;
        return $http({
            method: 'POST',
            url: 'http://localhost:43131/api/Register/',
            data: user,
            headers: headers
        })

        //return $http.post('https://derpeddit.herokuapp.com/api/v1/core/auth/signup', user)
    };
    this.LogOut = function () {
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Access-Control-Allow-Headers': 'x-requested-with, content-type, accept',
        };
        $http.defaults.useXDomain = true;
        return $http({
            method: 'PUT',
            url: 'http://localhost:43131/api/Account/',
            headers: headers
        })
    };
    this.LogIn = function (user) {
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Access-Control-Allow-Headers': 'x-requested-with, content-type, accept',
            //'Content-Type': 'application/json;  charset=utf-8',
            //'Accept': 'application/json'
        };
        $http.defaults.useXDomain = true;
        return $http({
            method: 'POST',
            url: 'http://localhost:43131/api/Account/',
            data: user,
            headers: headers
        })                
    }
})