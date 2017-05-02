import React from 'react';
import Form from './Form';
import PresentedBy from './PresentedBy';

class Sponsorship extends React.Component {

	componentDidMount() {
		$('select').material_select();

		document.getElementById('top').scrollIntoView();
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

				<div>
					<h1>Hoop Tour USA Is Coming To Your City!</h1>
				</div>

				<div>
					<span>Hoop Tour USA is on a mission to #UniteTheCity everywhere we go.  In order for this to happen, we provide Sponsorship and Exhibitor opportunities for local and national businesses to be a part of the #UltimateBasketballExperience.</span>
				</div>

				<div>
					<h4>Contact Us To Sponsor!</h4>
				</div>

				<Form />

				<PresentedBy />

			</div>
		)
	}
}

export default Sponsorship;