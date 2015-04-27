app.controller('ShowDepartmentsController', function ($scope, $location, MyService, ShareData) {

    getDepartments();

    function getDepartments() {        
        var promiseGet = MyService.getDepartments();            
       
        promiseGet.then(function (pl) { $scope.Departments = pl.data },
              function (errorPl) {
                  $scope.error = "Data fetch failed";
              });
    }
    

    //To Edit Department Information  
    $scope.editDepartment = function (Id) {
        ShareData.value = Id;
      //  alert("/editDepartment");
        $location.path("/editDepartment");
    }

    //To Delete a Department  
    $scope.deleteDepartment = function (Id) {
        ShareData.value = Id;
      //  alert("/deleteDepartment");
        $location.path("/deleteDepartment");
    }
});