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
					<span>Hoop Tour USA was founded to unite communities together through our 3V3 basketball events!  We enjoy bringing cities together through an exciting community event where people of all ages can participate in playing the wonderful game of basketball.  We pride ourselves in providing an event that is more than worth your registration fee.  We differentiate ourselves from other tournaments, as we guarantee each team 4 games, and give cool prizes to the winners of our tournaments and contests. Playing the game of basketball already sells itself, but who doesn't want something cool for winning.</span>
				</div>

				<div className='row about-banner'></div>

				<div className='row'>
					<span>​We love involving the community by bringing people together by playing ball, enjoying delicious food and helping a local charity. We feel it's our mission to give back and help those in need. </span>
				</div>	

				<PresentedBy />				
				
			</div>
		)
	}
}

export default About;