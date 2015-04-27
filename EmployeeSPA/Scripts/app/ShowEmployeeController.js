app.controller('ShowEmployeeController', function ($scope, $location, MyService, ShareData) {

    getEmployees();

    function getEmployees() {
        var promiseGet = MyService.getEmployees();

        promiseGet.then(function (pl) { $scope.Employees = pl.data },
              function (errorPl) {
                  $scope.error = "Data fetch failed";
              });
    }


    //To Edit Employee Information  
    $scope.editEmployee = function (Id) {
        ShareData.value = Id;
        //  alert("/editDepartment");
        $location.path("/editEmployee");
    }

    //To Delete a Employee  
    $scope.deleteEmployee = function (Id) {
        ShareData.value = Id;
        //  alert("/deleteDepartment");
        $location.path("/deleteEmployee");
    }
});