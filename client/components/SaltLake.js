import React from 'react';
import { Link } from 'react-router';

class SaltLake extends React.Component {

	componentDidMount() {
	  $(document).ready(function(){
	    $('ul.tabs').tabs();
	  });
	}

	componentWillUpdate() {
	  $(document).ready(function(){
	    $('ul.tabs').tabs();
	  });
	}

	render() {
		return(
			<div className='contain'>

				<br />
				<br />
				<br />

				<div className='row center'>
					<h2>SALT LAKE, UT</h2>
					<h2>JUNE 20 | MAVERICK CENTER <a href='https://www.google.com/maps/place/Maverik+Center/@40.7027085,-111.9527664,17z/data=!3m1!4b1!4m5!3m4!1s0x87528b606dfa20f9:0x76c3f1acf29b1abf!8m2!3d40.7027085!4d-111.9505724' target='_blank'><i className="medium material-icons red-text">room</i></a></h2>
					<h4 className='blue-text'>TICKETS NOW AVAILABLE</h4>
					<Link to={ '/home' } className='btn blue lighten-2'>REGISTER NOW!</Link>
				</div>

				<br />
				<br />

			  <div className="row">
			    <div className="col s12">
			      <ul className="tabs">
			        <li className="tab col s12 m4 l4"><a className='red-text' href="#price"><h4>EVENT PRICING</h4></a></li>
			        <li className="tab col s12 m4 l4"><a className='red-text' href="#info"><h4>EVENT INFO</h4></a></li>
			        <li className="tab col s12 m4 l4"><a className='red-text' href="#photos"><h4>EVENT PHOTOS</h4></a></li>
			      </ul>
			    </div>
			  </div>

				<br />

				<div id='price' className='row'>
					<div className=''>
						<h2>PRICING</h2>
						<h2>$100/per team</h2>
						<h4>YOUR TICKET INCLUDES:</h4>
						<ul>
							<li>3 games guaranteed/team</li>
							<li>Includes free drawstring backpack!</li>
						</ul>
					</div>
				</div>

					

					<div id='info' className=''>

						<div>
							<h2>EVENT INFO</h2>
						</div>

						<div>
							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454198/man_cij9eu.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='blue-text'>TEAMS</h2>
									<span>Min 3 players/team, Max 4 players/team</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454286/list_itdypq.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='blue-text'>DIVISIONS</h2>
									<span>(Boys/Girls): Elementary, Junior High, H.S. JV, H.S. Varsity, Competitive Adult 18+</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454023/location-pin_q1eye1.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='blue-text'>EVENT ADDRESS</h2>
									<ul>
										<li>Maverick Center (parking lot)</li>
										<li>3200 S Decker Laker Dr</li>
										<li>West Valley City, 84119</li>
									</ul>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454109/check_tuxiar.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='blue-text'>CHECK-IN</h2>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454131/clock_rhfpbw.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='blue-text'>STARTING TIME</h2>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492453106/heart_bumgny.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='blue-text'>CHARITY HIGHLIGHT</h2>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492453101/bowl_gd2r9r.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='blue-text'>GRUB</h2>
								</div>
							</div>

							<br />
							<br />

						</div>
					</div>

					<div id='photos' className='center'>
						<h1>COMING SOON!</h1>
						<br />
						<br />
					</div>

						<div className='row'>
							<div className='col s12 m12 l12 center blue lighten-2 white-text'>
								<h2>REGISTER NOW!</h2>
							</div>
						</div>

				</div>

		)
	}
}

export default SaltLake;