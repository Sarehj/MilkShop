using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers;
 
[Route("[controller]")]
[ApiController]
public class MilkController : ControllerBase
{
	private readonly MilkContext _context;

	public MilkController(MilkContext context)
	{
		_context = context;
	}

	// GET: api/Milk
	[HttpGet]
	public async Task<ActionResult<IEnumerable<Milk>>> GetAllMilks()
	{
		if (_context.Milks == null) return NotFound();
		return await _context.Milks.ToListAsync();
	}

	// GET: api/Milks/5
	[HttpGet("{id}")]
	public async Task<ActionResult<Milk>> GetMilk(string id)
	{
		var milk = await _context.Milks.FindAsync(id);

		if (milk == null) 
        {
            return NotFound();
        }

		return milk;
	}

	// PUT: api/Milk/5
	// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
	[HttpPut("{id}")]
	public async Task<IActionResult> PutMilk(string id, Milk milk)
	{
		if (id != milk.id) 
        {
            return BadRequest();
        }

		_context.Entry(milk).State = EntityState.Modified;

		try
		{
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateConcurrencyException)
		{
			if (!MilkExists(id))
				return NotFound();
			throw;
		}

		return NoContent();
	}

	// POST: api/Milks
	// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
	[HttpPost]
	public async Task<ActionResult<Milk>> PostMilk(Milk milk)
	{

		_context.Milks.Add(milk);
		await _context.SaveChangesAsync();

		return CreatedAtAction("GetMilk", new { id = milk.id }, milk);
	}

	// DELETE: api/Milks/5
	[HttpDelete("{id}")]
	public async Task<IActionResult> DeleteMilk(string id)
	{
		var milk = await _context.Milks.FindAsync(id);
		if (milk == null)
        {
            return NotFound();
        } 

		_context.Milks.Remove(milk);
		await _context.SaveChangesAsync();

		return NoContent();
	}

	private bool MilkExists(string id)
	{
		return (_context.Milks?.Any(e => e.id == id)).GetValueOrDefault();
	}
}
