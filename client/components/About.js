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
					<span>Hoop Tour USA was founded to #UnitetheCity through the game of basketball. We pride ourselves in bringing cities together through an exciting community event where people of all ages can participate in the #UltimateBasketballExperience! Our events consist of lots of basketball, food, entertainment, togetherness, and giving back.  We are on a mission to #UnitetheCity through the #UltimateBasketballExperience!</span>
				</div>

				{ /*<div className='row about-banner'></div> */ }

				<PresentedBy />				
				
			</div>
		)
	}
}

export default About;