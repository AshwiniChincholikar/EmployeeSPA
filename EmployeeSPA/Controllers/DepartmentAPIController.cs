using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EmployeeSPA.Models;

namespace EmployeeSPA.Controllers
{
    public class DepartmentAPIController : ApiController
    {
        private EmployeeContext db = new EmployeeContext();

        // GET: api/DepartmentAPI
        [Route("api/DepartmentAPI")]
        public IEnumerable<Department> GetDepartment()
        {
            List<Department> list = db.Department.ToList();
            IEnumerable<Department> Departments = list.AsEnumerable();

            return Departments;
        }

        // GET: api/DepartmentAPI/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult GetDepartment(int id)
        {
            Department department = db.Department.Find(id);
            Department dep = new Department();
            if (department == null)
            {
                return NotFound();
            }
            dep = department;
            return Ok(dep);
        }

        // PUT: api/DepartmentAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDepartment(int id, Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != department.Id)
            {
                return BadRequest();
            }

            db.Entry(department).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/DepartmentAPI
        [ResponseType(typeof(Department))]
        [Route("api/DepartmentAPI")]
        public IHttpActionResult PostDepartment(Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Department.Add(department);
            db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { controller = "departments", id = department.Id }, department);
        }

        // DELETE: api/DepartmentAPI/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult DeleteDepartment(int id)
        {
            Department department = db.Department.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            db.Department.Remove(department);
            db.SaveChanges();

            return Ok(department);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DepartmentExists(int id)
        {
            return db.Department.Count(e => e.Id == id) > 0;
        }
    }
}