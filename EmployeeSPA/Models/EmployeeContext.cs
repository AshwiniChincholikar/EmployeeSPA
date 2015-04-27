using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace EmployeeSPA.Models
{
    public class EmployeeContext : DbContext
    {
        public DbSet<Department> Department { get; set; }
        public DbSet<Employee> Employee { get; set; }

    }
}