import React from 'react';
import PresentedBy from './PresentedBy';

class About extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div className='contain'>

				<br />
				<br />
				<br />

				<div>
					<h1>About Hoop Tour USA</h1>
				</div>

				<div className='row'>
					<span></span>
				</div>

				{ /*<div className='row about-banner'></div> */ }

				<PresentedBy />				
				
			</div>
		)
	}
}

export default About;