using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MissionTen.Data;

namespace MissionTen.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private BowlingLeagueContext _context;
        public BowlingController(BowlingLeagueContext temp) => _context = temp;

        [HttpGet("FilteredBowlers")]
        public IActionResult GetBowlers()
        {
            var bowlers = _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToList();

            return Ok(new { Bowlers = bowlers });
        }
    }
}