import React from 'react';

class Form extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div className='form-container center'>
				<form>
					<div className='container row'>
					  <div className='col s12 m6 l6'>
					  	<label>First Name</label>
							<input className=''/>
						</div>
						<div className='col s12 m6 l6'>
					  	<label>Last Name</label>
							<input className=''/>
						</div>
					</div>
					<div className='container row'>
						<div className='col s12 m12 l12'>
							<label>Email</label>
							<input />
						</div>
					</div>
				  <div className="container row">
		        <div className=" col s12">
		          <label>Comment</label>
		          <textarea className=""></textarea>
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