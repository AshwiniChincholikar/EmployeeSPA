app.controller('AddEmployeeController', function ($scope, MyService, $location) {

    getDepartments();

    function getDepartments() {
        var promiseGet = MyService.getDepartments();

        promiseGet.then(function (pl) { $scope.Departments = pl.data },
              function (errorPl) {
                  $scope.error = "Data fetch failed";
              });
    }

    $scope.save = function () {
        var Employee = {
            Firstname: $scope.Firstname,
            Lastname: $scope.Lastname,
            Salary: $scope.Salary,
            DepartmentId: $scope.DepartmentId
        };

        var promisePost = MyService.AddEmployee(Employee);

        promisePost.then(function (pl) {
            alert("Employee Saved Successfully.");
            //  $scope.SuccessMessage = "Department has been added Successfully."
            $location.path("/showemployees");


        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });

    };

});