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

				<div>
					<span>Have a question or want to leave us some feedback? Shoot us a quick email and we will get back to you as soon as we can!</span>
				</div>

				<br />
				<br />

				<Form />

				<PresentedBy />

			</div>
		)
	}
}

export default Contact;