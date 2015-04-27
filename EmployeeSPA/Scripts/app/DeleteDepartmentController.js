app.controller("DeleteDepartmentController", function ($scope, $location, MyService, ShareData) {
   
    

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

        $scope.delete = function () {
            var promiseDeleteDepartment = MyService.delete(ShareData.value);

            promiseDeleteDepartment.then(function (pl) {
                $location.path("/showdepartments");
            },
                  function (errorPl) {
                      $scope.error = 'failure loading Department', errorPl;
                  });
        };

    });