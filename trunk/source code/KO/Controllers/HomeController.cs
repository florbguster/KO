using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KO.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult ObservableArray()
        {
            return View("~/Views/ObservableArray.cshtml");
        }

        public ActionResult Observables()
        {
            return View("~/Views/Observables.cshtml");
        }
    }
}