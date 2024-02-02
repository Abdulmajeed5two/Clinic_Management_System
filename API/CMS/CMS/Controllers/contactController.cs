using CMS.Context;
using CMS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CMS.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class contactController : Controller
    {
        private readonly AppDbContext _context;
        public contactController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetUserContact()
        {
            var contacts = await _context.contacts.ToListAsync();
            return Ok(contacts);
            
        }

        [HttpPost]
        public async Task<IActionResult> AddAllContact([FromBody] contact contactRequest)
        {
            await _context.contacts.AddAsync(contactRequest);
            await _context.SaveChangesAsync();
            return Ok(contactRequest);
        }
    }
}
