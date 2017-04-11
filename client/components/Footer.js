import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	render() {
		return(
			<footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 l6">
              <Link to="/home" className='footer-logo'><img src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1491865993/hoop_tour_logo_tc6szb.png' /></Link>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © COPYRIGHT Hoop Tour USA LLC. 2016. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
		)
	}
}

export default Footer;