using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Server.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<MilkContext>(option =>
    option.UseSqlServer("Server=tcp:milkshop.database.windows.net,1433;Initial Catalog=MilkShop;Persist Security Info=False;User ID=CloudSA5f9a7cdc;Password=MiS13774;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));
    

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(x => x
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin());
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
