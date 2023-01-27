using Microsoft.EntityFrameworkCore;
using Server.Models;
namespace Server.Data;
public class MilkContext : DbContext
{
  public MilkContext(DbContextOptions<MilkContext> options) : base(options)
        { }
  public DbSet<Milk> Milks { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=tcp:milkshop.database.windows.net,1433;Initial Catalog=MilkShop;Persist Security Info=False;User ID=CloudSA5f9a7cdc;Password=MiS13774;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
    }
}