import React from 'react';
import { Link } from 'react-router';
import PresentedBy from '../PresentedBy';

class StGeorge extends React.Component {

	componentDidMount() {
	  $(document).ready(function(){
	    $('ul.tabs').tabs();
	  });

	  document.getElementById('top').scrollIntoView();
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
					<h2>ST. GEORGE, UT</h2>
					<h2>SEPTEMBER 16 | LIFE TIME STORE</h2>
					{ /* <h4 className='color-blue-txt'>TICKETS NOW AVAILABLE</h4> */ }
					<h4 className='color-blue-txt'>REGISTRATION COMING SOON!</h4>
					{ /*<Link to={ '/home' } className='btn color-blue'>REGISTER NOW!</Link>*/ }
				</div>

				<br />
				<br />

			  <div className="flex-row h-center event-tabs">
		      <ul className="tabs">
		        <li className="tab"><a className='color-red-txt' href="#info"><h4>EVENT INFO</h4></a></li>
		        <li className="tab"><a className='color-red-txt' href="#photos"><h4>EVENT PHOTOS</h4></a></li>
		      </ul>
			  </div>

				<br />

					<div id='info' className='flex-col v-center'>

						<div>
							<h2>EVENT INFO</h2>
						</div>

						<div>
							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1493407164/credit_hshol3.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-red-txt'>Pricing</h2>
									<h2>$120/per team</h2>
									<h4>YOUR TICKET INCLUDES:</h4>
									<ul>
										<li>- 3 games guaranteed/team</li>
									</ul>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454198/man_cij9eu.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-red-txt'>TEAMS</h2>
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
									<h2 className='color-red-txt'>DIVISIONS</h2>
									<span>Boys/Girls:</span>
									<ul>
										<li>- Elementary</li>
										<li>- Junior High</li>
										<li>- H.S. JV</li>
										<li>- H.S. Varsity</li>
										<li>- Adult 18+</li>
									</ul>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454023/location-pin_q1eye1.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-red-txt'>EVENT ADDRESS</h2>
									<ul>
										<li>Life Time Store</li>
										<li>530 East St. George Blvd</li>
										<li>St. George, UT 84770</li>
									</ul>
									<a href='https://www.google.com/maps/place/Lifetime+Store+-+St.+George/@37.109447,-113.574031,638m/data=!3m2!1e3!4b1!4m5!3m4!1s0x80ca5b2d45e72a4d:0xf0287d4240202f72!8m2!3d37.1094427!4d-113.5718423' target='_blank'><img className='gmap-icon' src='http://www.iconarchive.com/download/i99368/dtafalonso/android-lollipop/Maps.ico' /></a>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454109/check_tuxiar.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-red-txt'>CHECK-IN</h2>
									<span>7:00 a.m. - 7:30 a.m.</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454131/clock_rhfpbw.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-red-txt'>STARTING TIME</h2>
									<span>8:00 a.m.</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492453106/heart_bumgny.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-red-txt'>CHARITY HIGHLIGHT</h2>
									<span>Coming Soon</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492453101/bowl_gd2r9r.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-red-txt'>GRUB</h2>
									<span>Coming Soon</span>
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
						<div className='register-now col s12 m12 l12 center color-red'>
							<Link><h2>REGISTER NOW!</h2></Link>
						</div>
					</div>

					<PresentedBy />

				</div>

		)
	}
}

export default StGeorge;