import React from 'react';
import { Link } from 'react-router';
import UpcomingLocations from './UpcomingLocations';

class Home extends React.Component {
	render() {
		return(
			<div>

				<div className='main-header center'>

					<br />
					<br />

					<div className=''>
						<img className='header-logo' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1491865993/hoop_tour_logo_tc6szb.png' />
						<h1 className='app-title'>Hoop Tour USA</h1>
					</div>

					<br />

					<div>
						<h3>THE NATION'S PREMIER 3 ON 3 BASKETBALL EVENT PRESENTED BY Lifetime Products</h3>
					</div>

					<br />

					<div className=''>
						<Link className='btn red'>Register!</Link>
					</div>

					<br />
					<br />
					<br />
					<br />

					<div>
						<img src='https://www.lifetime.com/content/images/lifetimelogo-w-tag_black.png' />
					</div>

				</div>

				<br />
				<br />
				<br />

				<div className='flex-row h-around v-center'>

					<div className=''>
						<div className='locations-box flex-col'>
							<div className='locations-header flex-col v-center pink accent-3 white-text'>
								<h2>Upcoming Locations</h2>
								<Link to={ '/locations' } className='white-text'>View All Cities</Link>
							</div>
							<div className='locations-body'>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>Jun 20</span>
									<span className='locations-item'>Salt Lake City, UT</span>
								</Link>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around blue lighten-4'>
									<span className='locations-item'>Jul 13</span>
									<span className='locations-item'>Logan, UT</span>
								</Link>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>Jul 26</span>
									<span className='locations-item'>Idaho Falls, ID</span>
								</Link>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around blue lighten-4'>
									<span className='locations-item'>Aug 15</span>
									<span className='locations-item'>Denver, CO</span>
								</Link>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>Sep 15</span>
									<span className='locations-item'>St. George, UT</span>
								</Link>
								
							</div>
						</div>
					</div>

					<div className=''>
						<div className='home-image1-max'></div>
					</div>
				</div>

				
					<div className='home-image1-min'></div>


				<br />
				<br />
				<br />

			</div>
		)
	}
}

export default Home;