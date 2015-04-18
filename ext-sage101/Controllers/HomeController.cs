using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ext_sage101.Controllers
{
    public class HomeController : Controller
    {
        // Implementing Cashing mechanisim
        [OutputCache(Duration = 120)]
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View("Index");
        }

        public ActionResult MVC()
        {
            return View("~/Views/MVC/Chapter1.cshtml");
        }
    }
}
