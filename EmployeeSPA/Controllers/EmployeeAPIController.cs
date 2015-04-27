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
    public class EmployeeAPIController : ApiController
    {
        private EmployeeContext db = new EmployeeContext();

        // GET: api/EmployeeAPI
        [Route("api/EmployeeAPI")]
        public IEnumerable<Employee> GetEmployee()
        {
            List<Employee> list = db.Employee.ToList();
            IEnumerable<Employee> Employees = list.AsEnumerable();
            return Employees;
        }

        // GET: api/EmployeeAPI/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult GetEmployee(int id)
        {
            Employee employee = db.Employee.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        // PUT: api/EmployeeAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee(int id, Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee.Id)
            {
                return BadRequest();
            }

            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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

        // POST: api/EmployeeAPI
        [ResponseType(typeof(Employee))]
        [Route("api/EmployeeAPI")]
        public IHttpActionResult PostEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Employee.Add(employee);
            db.SaveChanges();

           // return CreatedAtRoute("DefaultApi", new { id = employee.Id }, employee);
            return CreatedAtRoute("DefaultApi", new { controller = "employees", id = employee.Id }, employee);
 
        }

        // DELETE: api/EmployeeAPI/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult DeleteEmployee(int id)
        {
            Employee employee = db.Employee.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            db.Employee.Remove(employee);
            db.SaveChanges();

            return Ok(employee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeExists(int id)
        {
            return db.Employee.Count(e => e.Id == id) > 0;
        }
    }
}