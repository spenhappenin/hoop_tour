import React from 'react';
import { Link } from 'react-router';
 
class UpcomingLocations extends React.Component {
	render() {
		return(
			<div className='contain'>
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
		)
	}
}

export default UpcomingLocations;