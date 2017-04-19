import React from 'react';
import Form from './Form';

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

			</div>
		)
	}
}

export default Contact;