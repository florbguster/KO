using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;

namespace KO.Models
{
    public class CarModel : Controller
    {
        #region
        [Required(ErrorMessage= "Please enter the make.")]
        public string EditMakeName { get; set; }

        [Required(ErrorMessage= "Please enter the make.")]
        public string AddMakeName  { get; set; }
        #endregion
    }
}
