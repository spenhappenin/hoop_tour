import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	render() {
		return(
			<footer className="page-footer color-black">
        <div className="row">
          <div className="col s12 m6 l6">
            <Link to="/home" className='footer-logo'><img className='footer-logo' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1491865993/hoop_tour_logo_tc6szb.png' /></Link>
          </div>
        </div>
        <div className="footer-copyright">
          © COPYRIGHT Hoop Tour USA LLC. 2016. ALL RIGHTS RESERVED.
        </div>
      </footer>
		)
	}
}

export default Footer;