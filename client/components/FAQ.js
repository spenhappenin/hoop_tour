import React from 'react';
import Collapsible from 'react-collapsible';

class FAQ extends React.Component {

	componentDidMount() {
		$('.collapsible').collapsible();
	}

	componentDidUpdate() {
		$('.collapsible').collapsible();
	}

	render() {

		return(
			<div className='container'>

				<br />
				<br />
				<br />

				<div>
					<h2>FAQ'S</h2>
				</div>

				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header grey lighten-4">How do I play in a Hoop Tour USA event?</div>
			      <div className="collapsible-body">
					    <ul>
								<li>Step 1: Grab 2-3 friends who can ball</li>
								<li>Step 2: Register your team</li>
								<li>Step 3: Experience Hoop Tour USA in your area!</li>
							</ul>
			      </div>
			    </li>
			  </ul>

			  <ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header grey lighten-4">How do I register?</div>
			      <div className="collapsible-body">
							<ul>
								<li>Step 1: CLick on registration button underneath whichever hoop tour location you are interested in playing!</li>
								<li>Step 2: Create a Sport Ngin account (it only takes a minute or two)!</li>
								<li>Step 3: ETeam captain is in charge of team registration.  There is a one-time team payment.  Team captain will have the option of registering his/her whole team now, or waiting.  Make sure not to wait too long, secure your spot now and find a team later if you have to!</li>
								<li>Step 4: Ball out and enjoy Hoop Tour USA, a basketball event that unites communities together through the game of basketball!</li>
							</ul>
			      </div>
			    </li>
			  </ul>

			  <ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header grey lighten-4">What is included in my registration?</div>
			      <div className="collapsible-body">
			      	<span>Everyone receives an exclusive Hoop Tour USA T-Shirt and a Hoop Tour USA drawstring backpack.  Each team is guaranteed 4 games! Most importantly, you get to play the game you love while enjoying awesome music, delicious food, and soaking in a fun community event!  There are also awesome prizes for our winners!</span>
			      </div>
			    </li>
			  </ul>

			  <ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header grey lighten-4">How much is the team entry fee?</div>
			      <div className="collapsible-body">
			      	<span>Team registration fees are $99/team during regular registration.  Once regular registration ends, prices increase.  Make sure to stay tuned with our social media accounts for constant promo codes.  We want to make this an affordable event that is more than worth your registration fee!</span>
			      </div>
			    </li>
			  </ul>

			 	<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header grey lighten-4">How do I know which grade level my child should be registered in?</div>
			      <div className="collapsible-body">
			      	<span>Register your child in the grade they will be in during the fall. Example, if they just finished 4th grade, you would register them in the 5-6th grade division</span>
			      </div>
			    </li>
			  </ul>

			 	<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header grey lighten-4">Is there any way to combine boys/girls teams?</div>
			      <div className="collapsible-body">
			      	<span>Register your child in the grade they will be in during the fall. Example, if they just finished 4th grade, you would register them in the 5-6th grade division</span>
			      </div>
			    </li>
			  </ul>

			  <ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header grey lighten-4">Am I allowed to play up?</div>
			      <div className="collapsible-body">
			      	<span>You are allowed to play up in divisions, but never down.  Meaning, if you are in the 4th grade, but want to play with your friends who are 5th graders, that is allowed, however, your team will compete in the 5th grade division.</span>
			      </div>
			    </li>
			  </ul>

			  <br />
			  <br />
			  <br />

			</div>
		)
	}
}

export default FAQ;