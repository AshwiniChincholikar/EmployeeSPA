var app = angular.module("app", ["ngRoute"]);

app.factory("ShareData", function () {
    return { value: 0 }
});

//Showing Routing  
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/showdepartments',
                        {
                            templateUrl: 'Template/_ShowAllDepartment.html',
                            controller: 'ShowDepartmentsController'
                        });
    $routeProvider.when('/adddepartment',
                        {
                            templateUrl: 'Template/_AddDepartment.html',
                            controller: 'AddDepartmentController'
                        });
    $routeProvider.when("/editDepartment",
                        {
                            templateUrl: 'Template/_EditDepartment.html',
                            controller: 'EditDepartmentController'
                        });
    $routeProvider.when('/deleteDepartment',
                        {
                            templateUrl: 'Template/_DeleteDepartment.html',
                            controller: 'DeleteDepartmentController'
                        });
    $routeProvider.when('/showemployees',
                        {
                            templateUrl: 'Template/_ShowEmployee.html',
                            controller: 'ShowEmployeeController'
                        });
    $routeProvider.when('/addemployee',
                        {
                            templateUrl: 'Template/_AddEmployee.html',
                            controller: 'AddEmployeeController'
                        });
    $routeProvider.when('/deleteEmployee',
                       {
                           templateUrl: 'Template/_DeleteEmployee.html',
                           controller: 'DeleteEmployeeController'
                       });
    $routeProvider.when("/editEmployee",
                       {
                           templateUrl: 'Template/_EditEmployee.html',
                           controller: 'EditEmployeeController'
                       });
    $routeProvider.otherwise(
                        {
                            redirectTo: '/'
                        });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);

