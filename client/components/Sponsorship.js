import React from 'react';
import Form from './Form';

class Sponsorship extends React.Component {

	componentDidMount() {
		$('select').material_select();
	}

	componentWillUpdate() {
		$('select').material_select();
	}

	render() {
		return(
			<div className='contain center'>

				<br />
				<br />
				<br />

				<div className='sponsor-banner'></div>

				<div>
					<h1>Hoop Tour USA Is Coming To Your City!</h1>
				</div>

				<div>
					<span>We anticipate hundreds of players and spectators for each location and event. We will have teams of all ages starting with Elementary school and goes up to our Adult Competitive division(18+). We will have music, tons of basketball, prizes, and food vendors. This is a great opportunity for you to reach the community and market your brand and business! Sponsorship proceeds will be used to market our event, and of course, make it a spectacular 3V3 basketball event!</span>
				</div>

				<div>
					<h4>Contact Us To Sponsor!</h4>
				</div>

				<Form />

			</div>
		)
	}
}

export default Sponsorship;