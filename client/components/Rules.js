import React from 'react';
import PresentedBy from './PresentedBy';

class Rules extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div className='contain'>

				<br />
				<br />

				<div>
					<h1>Hoop Tour USA Rules</h1>
				</div>

				<br />

				<div className='rules'>
					<h2>Ball Rules</h2>
						<ul>
							<li>Teams must check the ball in before every possession after a dead ball. The ball must be taken back after each change of possession. This includes steals, blocks, and air balls. The ball is to be taken back behind the three point line. The player must have both feet behind the three point line for it to be counted as *taken back*.</li>
						</ul>
					<h2>Court Monitoring</h2>
						<ul>
							<li>During tournament play, each team will have at least 1 court monitor who will referee games and be in charge of calling all fouls</li>
							<li>There will be a court monitor at every court. They will be in charge of:</li>
								<ul className='sub-rules'>
									<li className='flex-row'>
									  <div className='sub-letter'>a.</div>
										<div>the time</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>b.</div>
										<div>the score</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>c.</div>
										<div>shot clock - 30 seconds</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>d.</div>
										<div>technical/ flagrant fouls</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>e.</div>
										<div>Ensuring that the ball is checked in, and taken back after each possession</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>f.</div>
										<div>cheap fouls</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>g.</div>
										<div>calling fouls for grades 3-6, and everyone else during tournament</div>
									</li>
								</ul>
							<li>Court monitors have the power to make decisions on any points not specifically covered in the Rules, and shall also have the complete authorization to interpret the intent and purpose of these Rules</li>
						</ul>

					<h2>Fouls</h2>
						<ul>
							<li>During round robin play, court monitors will only call fouls for grades 3 - 8, and all the other teams will call their own fouls.</li>
								<ul className='sub-rules'>
									<li className='flex-row'>
										<div className='sub-letter'>a.</div> 
										<div>Fouls will be called by the player getting fouled usually, but be honest. If you foul someone own up to it. We encourage the spirit of good sportsmanship</div>
									</li>
								</ul>
							<li>There are to be no cheap fouls called. If the court monitor feels that one is trying to gain advantage through calling cheap ticky tack fouls, they will issue a warning to the offending team. If it continues they have the right to intervene and give the ball to the other team. If it continues after that, there will be a technical foul assessed.</li>
							<li>Technical/Flagrant fouls may be given under the discretion of the court monitor for the following reasons:</li>
								<ul className='sub-rules'>
									<li className='flex-row'>
									  <div className='sub-letter'>a.</div>
										<div>any sign of fighting</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>b.</div>
										<div>vulgar language</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>c.</div>
										<div>continuously calling cheap fouls</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>d.</div>
										<div>any fouls to the head, or undercutting a player in the air, etc.</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>e.</div>
										<div>technical/Flagrant fouls result in a free throw for the other team, and possession</div>
									</li>
								</ul>
							<li>Free Throws are awarded when someone is fouled in the act of shooting.</li>
								<ul className='sub-rules'>
									<li className='flex-row'>
									  <div className='sub-letter'>a.</div>
										<div>a free throw is worth 1 point when the foul occurs within the three point line, and 2 points when the foul occurs behind the three point line</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>b.</div>
										<div>The ball must hit the rim before entering the paint to rebound on a foul shot</div>
									</li>									
								</ul>
							<li>Any fighting automatically warrants a 1 game suspension, or a $20 fine to waive the suspension. If you only have 3 players and a teammate is suspended, it will force your team to forfeit the game, unless the fine is paid. Just don’t fight, and there will be no problems! We encourage great sportsmanship.</li>
							<li>Teams will call travel, double dribble, out of bounds, etc. Any questions will be resolved by the court monitor</li>
						</ul>

					<h2>Games</h2>
						<ul>
							<li>Each team will be guaranteed 3 games.</li>
								<ul className='sub-rules'>
									<li className='flex-row'>
									  <div className='sub-letter'>a.</div>
										<div>Every team will get round robin games, and then move on to tournament play. Round robin games are used to seed tournament games</div>
									</li>
								</ul>
							<li>Game times will be given to each team</li>
						</ul>

					<h2>Jump Ball</h2>
						<ul>
							<li>In jump ball situations, the ball will first go to the team which didn’t start with the ball</li>
						</ul>

					<h2>Overtime</h2>
						<ul>
							<li>Overtime games will be 2 minutes long, straight up</li>
							<li>There will be a do or die shot to determine who gets the ball first in regular play as well as overtime play. A coin will be flipped to determine who shoots the do or die shot</li>
						</ul>

					<h2>Refunds</h2>
						<ul>
							<li>There will be no refunds granted for any reason.</li>
						</ul>

					<h2>Scoring</h2>
						<ul>
							<li>Games are 20 minutes long, or first to 21 points straight up. (There is no win by two)</li>
							<li>Games are scored by 1’s and 2’s</li>
								<ul className='sub-rules'>
									<li className='flex-row'>
									  <div className='sub-letter'>a.</div>
										<div>1 point is awarded if a basket is made within the 3 point line</div>
									</li>
									<li className='flex-row'>
									  <div className='sub-letter'>b.</div>
										<div>2 points are awarded if a basket is made behind the 3 point line</div>
									</li>
								</ul>
						</ul>
					<h2>Substitutions</h2>
						<ul>
							<li>Substitutions will only be allowed during a time-out or a “dead ball” situation</li>
						</ul>
					<h2>Team</h2>
						<ul>
							<li>Once the tournament starts, you must use the players on your team, and cant use “fill in players”</li>
						</ul>
					<h2>Time Outs</h2>
						<ul>
							<li>One thirty second timeout will be granted to each team during play</li>
						</ul>
					<h2>Waiver</h2>
						<ul>
							<li>Everyone who is participating in the tournament must sign a waiver; there will be no exceptions to this rule. If a waiver is not signed, that contestant cannot play until it is signed. The waiver must be signed by a parent/guardian if contestant is not over the age of 18.</li>
						</ul>
					<h2>Weather</h2>
						<ul>
							<li>In case of inclement weather, we will be moving to an indoor facility. This will be determined by Hoop Tour USA. There will be no refunds granted</li>
						</ul>
				</div>

				<PresentedBy />

			</div>
		)
	}
}

export default Rules;