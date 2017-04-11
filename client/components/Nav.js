import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
	render() {
		return(
			<div className='navbar-fixed'>
				<nav>
			    <div className="nav-wrapper nav-txt">
			      <Link to="/home" className='nav-logo'><img src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1491865993/hoop_tour_logo_tc6szb.png' /></Link>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><Link className='nav-item' to={ '/home' }>HOME</Link></li>
			        <li><Link className='nav-item' to={ '/about' }>ABOUT</Link></li>
			        <li><Link className='nav-item' to={ '/locations' }>LOCATIONS</Link></li>
			        <li><Link className='nav-item' to={ '/sponsorship' }>SPONSORSHIP OPPORTUNITIES</Link></li>
			        <li><Link className='nav-item' to={ '/contact' }>CONTACT</Link></li>
			        <li><Link className='nav-item' to={ '/FAQ' }>FAQ'S</Link></li>
			        <li><Link className='nav-item' to={ '/rules' }>RULES</Link></li>
			      </ul>
			    </div>
			  </nav> 
		  </div>  
		)
	}
}

export default Nav;