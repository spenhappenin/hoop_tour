import React from 'react';
import { Link } from 'react-router';

class Locations extends React.Component {
	render() {
		return(
			<div>

				<br />
				<br />
				<br />

				<div className='center'>
					<h2>Upcoming Event Locations</h2>
				</div>

				<div className='container'>
					<div className='row'>
						<div className='col s12 m4 l4 flex-col location-month'>
							<div className='month-header'>
								<h5>JUNE</h5>
							</div>
							<div className='month-body'>
								<Link to={ '/salt-lake' }>
									<span className='locations-item month-spacing'>JUN 20</span>
									<span className='locations-item'>SALT LAKE CITY, UT</span>
								</Link>
							</div>
						</div>
						<div className='col s12 m4 l4 flex-col location-month'>
							<div className='month-header'>
								<h5>JULY</h5>
							</div>
							<div className='month-body'>
								<div>
									<Link to={ '/salt-lake' }>
										<span className='locations-item month-spacing'>JUL 13</span>
										<span className='locations-item'>LOGAN, UT</span>
									</Link>
								</div>
								<div>
									<Link to={ '/salt-lake' }>
										<span className='locations-item month-spacing'>JUL 26</span>
										<span className='locations-item'>IDAHO FALLS, ID</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col s12 m4 l4 flex-col location-month'>
							<div className='month-header'>
								<h5>AUGUST</h5>
							</div>
							<div className='month-body'>
								<Link to={ '/salt-lake' }>
									<span className='locations-item month-spacing'>AUG 15</span>
									<span className='locations-item'>DENVER, CO</span>
								</Link>
							</div>
						</div>	
					</div>
					<div className='row'>
						<div className='col s12 m4 l4 flex-col location-month'>
							<div className='month-header'>
								<h5>SEPTEMBER</h5>
							</div>
							<div className='month-body'>
								<Link to={ '/salt-lake' }>
									<span className='locations-item month-spacing'>SEP 15</span>
									<span className='locations-item'>ST GEORGE, UT</span>
								</Link>
							</div>
						</div>	
					</div>
				</div>

				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

			</div>
		)
	}
}

export default Locations;