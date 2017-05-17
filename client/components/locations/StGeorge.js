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
					<h2>SEP 16 | COMMING SOON! <a target='_blank'><i className="medium material-icons black-text">room</i></a></h2>
					{ /* <h4 className='color-blue-txt'>TICKETS NOW AVAILABLE</h4> */ }
					<h4 className='color-blue-txt'>REGISTRATION COMING SOON!</h4>
					{ /*<Link to={ '/home' } className='btn color-blue'>REGISTER NOW!</Link>*/ }
				</div>

				<br />
				<br />

			  <div className="flex-row h-center event-tabs">
		      <ul className="tabs">
		        <li className="tab col s12 m4 l4"><a className='red-text' href="#info"><h4>EVENT INFO</h4></a></li>
		        <li className="tab col s12 m4 l4"><a className='red-text' href="#photos"><h4>EVENT PHOTOS</h4></a></li>
		      </ul>
			  </div>

				<br />

					<div id='info' className=''>

						<div>
							<h2>EVENT INFO</h2>
						</div>

						<div>
							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1493407164/credit_hshol3.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-blue-txt'>Pricing</h2>
									<h2>$120/per team</h2>
									<h4>YOUR TICKET INCLUDES:</h4>
									<ul>
										<li>- 3 games guaranteed/team</li>
										<li>- Includes free drawstring backpack!</li>
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
									<h2 className='color-blue-txt'>TEAMS</h2>
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
									<h2 className='color-blue-txt'>DIVISIONS</h2>
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
									<h2 className='color-blue-txt'>EVENT ADDRESS</h2>
									<span>Coming Soon</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454109/check_tuxiar.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-blue-txt'>CHECK-IN</h2>
									<span>Coming Soon</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492454131/clock_rhfpbw.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-blue-txt'>STARTING TIME</h2>
									<span>Coming Soon</span>
								</div>
							</div>

							<br />
							<br />

							<div className='flex-row'>
								<div>
									<img className='event-item-icon' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492453106/heart_bumgny.svg' />
								</div>
								<div className='flex-col event-item-name'>
									<h2 className='color-blue-txt'>CHARITY HIGHLIGHT</h2>
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
									<h2 className='color-blue-txt'>GRUB</h2>
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
						<div className='register-now col s12 m12 l12 center color-blue'>
							<Link><h2>REGISTER NOW!</h2></Link>
						</div>
					</div>

					<PresentedBy />

				</div>

		)
	}
}

export default StGeorge;