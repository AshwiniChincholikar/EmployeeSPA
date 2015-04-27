app.controller("DeleteEmployeeController", function ($scope, $location, MyService, ShareData) {



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

    $scope.delete = function () {
        var promiseDelete = MyService.deleteEmployee(ShareData.value);

        promiseDelete.then(function (pl) {
            $location.path("/showemployees");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    };

});