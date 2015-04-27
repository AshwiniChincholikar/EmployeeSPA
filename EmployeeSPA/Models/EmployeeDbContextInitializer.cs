using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using EmployeeSPA.Models;

namespace EmployeeSPA.Models
{
    public class EmployeeDbContextInitializer: DropCreateDatabaseIfModelChanges<EmployeeContext>
    {
        protected override void Seed(EmployeeContext context)
        {
            //var list = new List<Department>
            //{
            //    new Department { DepartmentName = "Accounts" },
            //    new Department { DepartmentName = "Sales" },
            //    new Department { DepartmentName = "Marketing" },
            //    new Department { DepartmentName = "Human Resource" }
            //};
 
            //list.ForEach(m =>
            //    {
            //        context.Department.Add(m);
            //    });
 
            //context.SaveChanges();
 
            //base.Seed(context);
        }
    }
}