namespace EmployeeSPA.Migrations
{
    using EmployeeSPA.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<EmployeeSPA.Models.EmployeeContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(EmployeeSPA.Models.EmployeeContext context)
        {
            context.Department.AddOrUpdate(
                p => p.Id,
                new Department { DepartmentName = "Accounts" },
                new Department { DepartmentName = "Sales" },
                new Department { DepartmentName = "Marketing" },
                new Department { DepartmentName = "Human Resource" }
                );

            context.Employee.AddOrUpdate(
                p => p.Id,
                new Employee { Firstname = "Rohit", Lastname = "Abc", Salary = 200000, DepartmentId = 1 },
                new Employee { Firstname = "Rohan", Lastname = "Bcd", Salary = 250000, DepartmentId = 1 },
                new Employee { Firstname = "Sallie", Lastname = "Cde", Salary = 220000, DepartmentId = 2 },
                new Employee { Firstname = "Bob", Lastname = "Def", Salary = 250000, DepartmentId = 3 },
                new Employee { Firstname = "Scott", Lastname = "Efg", Salary = 250000, DepartmentId = 4 }
                );
            context.SaveChanges();
        }
    }
}
