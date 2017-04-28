import React from 'react';
import { Link } from 'react-router';
 
class UpcomingLocations extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div className='contain'>
				<div className='locations-box flex-col'>
					<div className='locations-header flex-col v-center white-text'>
						<h2>Upcoming Locations</h2>
						<Link to={ '/locations' } className='white-text'>View All Cities</Link>
					</div>
					<div className='locations-body'>


						
					</div>
				</div>
			</div>
		)
	}
}

export default UpcomingLocations;