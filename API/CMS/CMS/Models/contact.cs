using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.Models
{
    public class contact
    {
       
        public int id { get; set; }
        public string Name { get; set; }
        public string email { get; set; }
        public string subject { get; set; }
        public int Phone { get; set; }
        [StringLength(100)]
        public string msg { get; set; }

    }
}
