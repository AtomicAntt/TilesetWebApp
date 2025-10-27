using Microsoft.EntityFrameworkCore;

namespace ReactApp.Server.Models
{
    public class CommentContext : DbContext
    {
        public CommentContext(DbContextOptions<CommentContext> options) : base(options) 
        { 
        }

        public DbSet<Comment> Comments { get; set; } = null!;
    }
}
