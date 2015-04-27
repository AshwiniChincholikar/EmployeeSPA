app.controller("EditDepartmentController", function ($scope, $location, ShareData, MyService) {
    getDepartment();

    function getDepartment() {
        var promiseGetDepartment = MyService.getDepartment(ShareData.value);

        promiseGetDepartment.then(function (pl) {
            $scope.Department = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Department', errorPl;
              });
    }

    $scope.save = function () {
        var Department = {
            Id: $scope.Department.Id,
            DepartmentName: $scope.Department.DepartmentName            
        };

        var promisePutDepartment = MyService.put($scope.Department.Id, Department);
        promisePutDepartment.then(function (pl) {
            $location.path("/showdepartments");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Department', errorPl;
              });
    };

});