using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;

namespace ext_sage101.Controllers
{
    public class mvcController : Controller
    {
        // GET: mvc
        // the Page Cashing Mechanism 
        [OutputCache(Duration = 60)]
        public ActionResult Index()
        {
            ViewBag.Time = DateTime.Now;
            return View();
        }

        //Donut hole cashing : 
        [ChildActionOnly]
        [OutputCache(Duration = 60)]
        public ActionResult DnutHole()
        {
            ViewBag.Time = DateTime.Now;
            return View();

        }

    }
}