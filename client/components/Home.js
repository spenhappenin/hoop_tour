import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
	render() {
		return(
			<div>
				<div className='main-header center'>
					<div className=''>
						<h1 className='home-title'>Hoop Tour USA</h1>
					</div>
					<div className=''>
						<h5>THE NATION'S PREMIER 3 ON 3 BASKETBALL EVENT PRESENTED BY
​Lifetime Products</h5>
					</div>
					<div className=''>
						<Link className='btn blue'>Register Now!</Link>
					</div>
					<div>
						<img src='https://www.lifetime.com/content/images/lifetimelogo-w-tag_black.png' />
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		)
	}
}

export default Home;