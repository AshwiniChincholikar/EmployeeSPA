var app = angular.module("MyApp", ["ngRoute"]);


app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    .when('/hi', {
        templateUrl: 'Template/Hi.html',
        controller: 'HiController'
    })
    .when('/about', {
        templateUrl: 'Template/About.html',
        controller: 'AboutController'
    })
    .otherwise(
        {
            redirectTo: '/home'
        });

    // $locationProvider.html5Mode(false).hashPrifix('!');
})
.controller('HiController', function ($scope) {
    $scope.Message = "This is Home Page";
})
.controller('AboutController', function ($scope) {
    $scope.Message = "This is About Page";
});