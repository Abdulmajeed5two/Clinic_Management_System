using CMS.Context;
using CMS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CMS.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class medicineController : Controller
    {

        private readonly AppDbContext _context;
        public medicineController(AppDbContext context) 
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllMedicines()
        {
            var medicines = await _context.medicines.ToListAsync();
            return Ok(medicines);
        }


        [HttpPost]
        public async Task<IActionResult> AddMedicines([FromBody ]medicine medicineRequest)
        {

           await _context.medicines.AddAsync(medicineRequest);
           await _context.SaveChangesAsync();

            return Ok(medicineRequest);
        }

    }
}
