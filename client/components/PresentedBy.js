import React from 'react';

class PresentedBy extends React.Component {
	render() {
		return(
			<div className='row center'>

				<br />
				<br />

				<div>
					<h4>PRESENTED BY</h4>
					<hr />
					<img src='https://www.lifetime.com/content/images/lifetimelogo-w-tag_black.png' />
				</div>

				<br />
				<br />

				{/*<div>
					<h4>SPONSORED BY</h4>
					<hr />
					<div className='row flex-row v-center h-center'>
						<div className='col s12 m4'>
							<img className='responsive-img' src='data:image/jpeg;base64,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' />
						</div>
						<div className='col s12 m4'>
							<img className='responsive-img' src='data:image/png;base64,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' />
						</div>
						<div className='col s12 m4'>
							<img className='responsive-img nike' src='data:image/png;base64,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' />
						</div>
					</div>
				</div>

				<br />
				<br />*/}

			</div>
		);
	}
}

export default PresentedBy;
