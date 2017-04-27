import React from 'react';
import Form from './Form';
import PresentedBy from './PresentedBy';

class Contact extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div className='contain center'>

				<br />
				<br />
				<br />

				<div>
					<h1>Contact Us</h1>
				</div>

				<Form />

				<PresentedBy />

			</div>
		)
	}
}

export default Contact;