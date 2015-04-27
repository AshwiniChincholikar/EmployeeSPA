app.controller("EditEmployeeController", function ($scope, $location, ShareData, MyService) {

    getDepartments();

    function getDepartments() {
        var promiseGet = MyService.getDepartments();

        promiseGet.then(function (pl) { $scope.Employee.Departments = pl.data },
              function (errorPl) {
                  $scope.error = "Data fetch failed";
              });
    }
    getEmployee();

    function getEmployee() {
        var promiseGet = MyService.getEmployee(ShareData.value);

        promiseGet.then(function (pl) {
            $scope.Employee = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    }

    $scope.save = function () {
        var Employee = {
            Id: $scope.Employee.Id,
            Firstname: $scope.Employee.Firstname,
            Lastname: $scope.Employee.Lastname,
            Salary: $scope.Employee.Salary,
            DepartmentId: $scope.Employee.DepartmentId
        };

        var promisePut = MyService.putEmployee($scope.Employee.Id, Employee);
        promisePut.then(function (pl) {
            alert("Edited Successfully");
            $location.path("/showemployees");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    };

});