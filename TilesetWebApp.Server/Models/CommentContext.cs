using Microsoft.EntityFrameworkCore;

namespace TilesetWebApp.Server.Models
{
    public class CommentContext : DbContext
    {
        public CommentContext(DbContextOptions<CommentContext> options) : base(options) 
        { 
        }

        public DbSet<Comment> Comments { get; set; } = null!;
    }
}
