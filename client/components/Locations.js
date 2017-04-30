import React from 'react';
import { Link } from 'react-router';
import PresentedBy from './PresentedBy';

class Locations extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}

	render() {
		return(
			<div className='contain'>

				<br />
				<br />
				<br />

				<div className='center'>
					<h1>Upcoming Event Locations</h1>
				</div>

				<div className='row'>
					<div className='col s12 m4 l4 flex-col location-month'>
						<div className='month-header color-blue-txt'>
							<h2>JUNE</h2>
						</div>
						<div className='month-body'>
							<Link to={ '/salt-lake' }>
								<span className='locations-item month-spacing'>JUN 20</span>
								<span className='locations-item'>SALT LAKE CITY, UT</span>
							</Link>
						</div>
					</div>
					<div className='col s12 m4 l4 flex-col location-month'>
						<div className='month-header color-blue-txt'>
							<h2>JULY</h2>
						</div>
						<div className='month-body'>
							<div>
								<Link to={ '/salt-lake' }>
									<span className='locations-item month-spacing'>JUL 13</span>
									<span className='locations-item'>LOGAN, UT</span>
								</Link>
							</div>
							<div>
								<Link to={ '/idaho-falls' }>
									<span className='locations-item month-spacing'>JUL 26</span>
									<span className='locations-item'>IDAHO FALLS, ID</span>
								</Link>
							</div>
						</div>
					</div>
					<div className='col s12 m4 l4 flex-col location-month'>
						<div className='month-header color-blue-txt'>
							<h2>AUGUST</h2>
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
						<div className='month-header color-blue-txt'>
							<h2>SEPTEMBER</h2>
						</div>
						<div className='month-body'>
							<Link to={ '/salt-lake' }>
								<span className='locations-item month-spacing'>SEP 15</span>
								<span className='locations-item'>ST GEORGE, UT</span>
							</Link>
						</div>
					</div>	
				</div>

				<br />
				<br />
				<br />

				<PresentedBy />

			</div>
		)
	}
}

export default Locations;