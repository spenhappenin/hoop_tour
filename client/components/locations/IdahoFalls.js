import React from 'react';
import { Link } from 'react-router';
import PresentedBy from '../PresentedBy';

class IdahoFalls extends React.Component {

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
					<h2>IDAHO FALLS, ID</h2>
					<h2>JULY 8 | SNAKE RIVER LANDING</h2>
					<a href='https://hooptourusa.sportngin.com/register/form/657804307' target='_blank' className='btn color-red'>REGISTER NOW!</a>
				</div>

				<br />
				<br />

			  <div className="">
		      <ul className="tabs">
		        <li className="tab"><a className='color-red-txt' href="#info"><h4>EVENT INFO</h4></a></li>
		        <li className="tab"><a className='color-red-txt' href="#photos"><h4>EVENT PHOTOS</h4></a></li>
		      </ul>
			  </div>

				<br />

					<div id='info' className=''>

						<div>
							<h2>EVENT INFO</h2>
						</div>

						<div className=''>
							<div className='flex-row event-item'>
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
										<li>Snake River Landing</li>
										<li>901 Pier View Dr #104</li>
										<li>Idaho Falls, ID 83402</li>
									</ul>
									<a href='https://www.google.com/maps/place/Snake+River+Landing/@43.4837707,-112.0535597,17z/data=!3m1!4b1!4m5!3m4!1s0x5354596af2082d67:0xe792e3eff4e1cd74!8m2!3d43.4837707!4d-112.0513657' target='_blank'><img className='gmap-icon' src='http://www.iconarchive.com/download/i99368/dtafalonso/android-lollipop/Maps.ico' /></a>
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
									<div className='row'>
										<div className='s12'>
											<img className='charity-img' src='http://www.unitedwayif.org/sites/unitedwayr11.oneeach.org/files/live-united-footer.png' />
										</div>
										<div className='s12'>
											<span>United Way is a nonprofit organization devoted to strengthening Bonneville, Clark, Fremont, Jefferson, Lemhi, Madison and TetonCounties. With over 60 years of service history, our specialties are understanding the myriad of struggles facing the community and improving the lives of individuals and families. </span>
											<br />
											<br />
											<span>We are excited to partner with United Way and give back to those in need in the community. Sign up now and a portion of your entrance cost will be donated directly, or visit (united way website) to make a separate donation.</span>
										</div>
									</div>
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
							<a href='https://hooptourusa.sportngin.com/register/form/657804307' target='_blank'><h2>REGISTER NOW!</h2></a>
						</div>
					</div>

					<PresentedBy />

				</div>

		)
	}
}

export default IdahoFalls;