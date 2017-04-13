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

				<UpcomingLocations />

				<br />
				<br />
				<br />

			</div>
		)
	}
}

export default Home;