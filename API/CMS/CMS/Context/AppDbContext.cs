using CMS.Models;
using Microsoft.EntityFrameworkCore;

namespace CMS.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<medicine> medicines { get; set; }
        public DbSet<contact> contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().ToTable("users");
        }
    }
}
