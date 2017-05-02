import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	render() {
		return(
			<footer className="flex-col page-footer color-black">
        <div className="flex-row v-center">
          <div className="">
            <Link to="/home" className='footer-logo'><img className='footer-logo' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1491865993/hoop_tour_logo_tc6szb.png' /></Link>
          </div>
          <div className=''>
            <span className='footer-menu'>
              <a href='#'>FAQ</a> | 
              <a href='#'> Charity</a> | 
              <a href='#'> Contact</a> | 
              <a href='#'> Press</a> | 
              <a href='#'> Private Policy</a> | 
              <a href='#'> Terms & Conditions</a>
            </span>
          </div>
        </div>

        <div className=''>
          <div className='social-icons flex-row h-end'>
            <a href="https://www.facebook.com/HoopTourUSA/" target='_blank'><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/hooptourusa" target='_blank'><i className="fa fa-twitter"></i></a>
            <a href="https://www.instagram.com/hooptourusa/" target='_blank'><i className="fa fa-instagram"></i></a>
            <a href='mailto:hooptourusa@gmail.com' ><i className="fa fa-envelope"></i></a>
          </div>
          
          <div className="footer-copyright flex-row h-end">
            © COPYRIGHT Hoop Tour USA LLC. 2016. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
		)
	}
}

export default Footer;