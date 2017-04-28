import React from 'react';
import { Link } from 'react-router';
import UpcomingLocations from './UpcomingLocations';
import PresentedBy from './PresentedBy';

class Home extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div>

				<div className='color-red main-header center'>

					<br />
					<br />

					<div className=''>
						<img className='header-logo' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1491865993/hoop_tour_logo_tc6szb.png' />
						<br />
						<img className='responsive-img' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492487790/hoop_tour_white_text_zgdrwx.png' />
					</div>

					<br />

					<div>
						<h2 className='foo'>#UniteTheCity</h2>
					</div>

					<br />

					<div className=''>
						<Link to={'/locations'} className='btn color-blue'>Register!</Link>
					</div>

					<br />
					<br />
					<br />

					<div>
						<img className='lifetime-header' src='https://www.lifetime.com/content/images/lifetimelogo-w-tag_black.png' />
					</div>

				</div>

				<br />
				<br />
				<br />

				<div className='flex-row h-around v-center'>

					<div className=''>
						<div className='locations-box flex-col'>
							<div className='locations-header flex-col v-center color-blue white-text'>
								<h2>Upcoming Locations</h2>
								<Link to={ '/locations' } className='white-text'>View All Cities</Link>
							</div>
							<div className='locations-body'>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>Jun 20</span>
									<span className='locations-item'>Salt Lake City, UT</span>
								</Link>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around row-color'>
									<span className='locations-item'>Jul 13</span>
									<span className='locations-item'>Logan, UT</span>
								</Link>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>Jul 26</span>
									<span className='locations-item'>Idaho Falls, ID</span>
								</Link>

								<Link to={ '/salt-lake' } className='locations-row flex-row h-center h-around row-color'>
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
				</div>

				<PresentedBy />

			</div>
		)
	}
}

export default Home;