import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
	render() {
		return(
			<nav>
		    <div className="nav-wrapper nav-txt">
		      <Link to="/home" className="brand-logo">Hoop Tour</Link>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><Link to={ '/about' }>About</Link></li>
		        <li><Link to={ '/locations' }>Locations</Link></li>
		        <li><Link to={ '/sponsorship' }>Sponsorship Opportunities</Link></li>
		        <li><Link to={ '/contact' }>Contact</Link></li>
		        <li><Link to={ '/FAQ' }>FAQ's</Link></li>
		        <li><Link to={ '/rules' }>Rules</Link></li>
		      </ul>
		    </div>
		  </nav>   
		)
	}
}

export default Nav;