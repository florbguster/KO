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
            return View("~/Views/ContentViews/ObservableArray.cshtml");
        }

        public ActionResult Observables()
        {
            return View("~/Views/ContentViews/Observables.cshtml");
        }

        public ActionResult Utilities()
        {
            return View("~/Views/ContentViews/Utilities.cshtml");

        }

    }
}
