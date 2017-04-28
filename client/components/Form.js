import React from 'react';

class Form extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div className='form-container center'>
				<form action='https://formspree.io/hooptourusa@gmail.com' method='POST'>
					<div className='container row'>
					  <div className='col s12 m6 l6'>
					  	<label>First Name</label>
							<input name='first-name' className=''/>
						</div>
						<div className='col s12 m6 l6'>
					  	<label>Last Name</label>
							<input name='last-name' className=''/>
						</div>
					</div>
					<div className='container row'>
						<div className='col s12 m12 l12'>
							<label>Email</label>
							<input name='email' />
						</div>
					</div>
				  <div className="container row">
		        <div className=" col s12">
		          <label>Comment</label>
		          <textarea name='comment' className=""></textarea>
		        </div>
				  </div>
					<div className='row'>
						<input type='submit' value='Submit' className='btn black' />
					</div>
				</form>
			</div>
		);
	}
}

export default Form;