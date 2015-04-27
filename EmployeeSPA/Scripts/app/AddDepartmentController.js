app.controller('AddDepartmentController', function ($scope, MyService, $location) {


    $scope.save = function () {
        var Department = {
            DepartmentName: $scope.DepartmentName
        };

        var promisePost = MyService.post(Department);
       
        promisePost.then(function (pl) {
            alert("Department Saved Successfully.");
          //  $scope.SuccessMessage = "Department has been added Successfully."
            $location.path("/showdepartments");

         
        },
              function (errorPl) {
                  $scope.error = 'failure loading Department', errorPl;
              });

    };

});