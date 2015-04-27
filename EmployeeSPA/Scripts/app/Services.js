app.service("MyService", function ($http) {

    //Read all Departments  

    this.getDepartments = function () {
        return $http.get("/api/DepartmentAPI");
    };

    //Fundction to Read Department by Department ID  
    this.getDepartment = function (id) {
        return $http.get("/api/DepartmentAPI/" + id);
    };
    

    //Function to create new Department  
    this.post = function (Department) {
        var request = $http({
            method: "post",
            url: "/api/DepartmentAPI",
            data: Department
        });
        return request;
    };

    //Edit Department By ID   
    this.put = function (id, Department) {
        var request = $http({
            method: "put",
            url: "/api/DepartmentAPI/" + id,
            data: Department
        });
        return request;
    };

    //Delete Department By Department ID  
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/DepartmentAPI/" + id
        });
        return request;
    };

    //Read all Employees
    this.getEmployees = function () {
        return $http.get("/api/EmployeeAPI");
    };
    // Function to Add new Employee
    this.AddEmployee = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeeAPI",
            data: Employee
        });
        return request;
    };

    //Fundction to Read Employee by ID  
    this.getEmployee = function (id) {
        return $http.get("/api/EmployeeAPI/" + id);
    };

    //Delete Employee By ID  
    this.deleteEmployee = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeeAPI/" + id
        });
        return request;
    };

    //Edit Employee By ID   
    this.putEmployee = function (id, Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeeAPI/" + id,
            data: Employee
        });
        return request;
    };    
    
});