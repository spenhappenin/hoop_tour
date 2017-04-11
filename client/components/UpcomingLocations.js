import React from 'react';
import { Link } from 'react-router';
 
class UpcomingLocations extends React.Component {
	render() {
		return(
			<div className='container'>
				<div className='locations-box flex-col'>
					<div className='locations-header flex-col v-center pink accent-3 white-text'>
						<h2>Upcoming Locations</h2>
						<Link to={ 'locations-body' } className='white-text'>View All Cities</Link>
					</div>
					<div className='locations-body'>

						<div className='locations-row flex-row h-center h-around'>
							<span className='locations-item'>Jun 20</span>
							<span className='locations-item'>Salt Lake City, UT</span>
						</div>

						<div className='locations-row flex-row h-center h-around blue lighten-4'>
							<span className='locations-item'>Jul 13</span>
							<span className='locations-item'>Logan, UT</span>
						</div>

						<div className='locations-row flex-row h-center h-around'>
							<span className='locations-item'>Jul 26</span>
							<span className='locations-item'>Idaho Falls, ID</span>
						</div>

						<div className='locations-row flex-row h-center h-around blue lighten-4'>
							<span className='locations-item'>Aug 15</span>
							<span className='locations-item'>Denver, CO</span>
						</div>

						<div className='locations-row flex-row h-center h-around'>
							<span className='locations-item'>Sep 15</span>
							<span className='locations-item'>St. George, UT</span>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default UpcomingLocations;