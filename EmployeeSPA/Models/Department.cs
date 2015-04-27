using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmployeeSPA.Models
{
    public class Department
    {       
        [Key]
        public int Id { get; set; }
        [Required]
        [DisplayName("Department Name")]
        public string DepartmentName { get; set; }
        public virtual ICollection<Employee> EmployeeList { get; set; }

    }
}