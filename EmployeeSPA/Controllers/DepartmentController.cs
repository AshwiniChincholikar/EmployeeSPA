using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmployeeSPA.Controllers
{
    public class DepartmentController : Controller
    {
        // GET: Department
        public ActionResult Index()
        {
            return View();
        }

        

        //public ActionResult ShowAllDepartment()
        //{
        //    return PartialView("_ShowAllDepartment");
        //}
        //public ActionResult AddDepartment()
        //{
        //    return PartialView("_AddDepartment");
        //}

        //public ActionResult EditDepartment()
        //{
        //    return PartialView("_EditDepartment");
        //}
        //public ActionResult DeleteDepartment()
        //{
        //    return PartialView("_DeleteDepartment");
        //}
    }
}