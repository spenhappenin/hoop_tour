import React from 'react';
import { Link } from 'react-router';
import UpcomingLocations from './UpcomingLocations';
import PresentedBy from './PresentedBy';

class Home extends React.Component {

	componentDidMount() {
		document.getElementById('top').scrollIntoView();
	}
	
	render() {
		return(
			<div>
				<div className='main-header center'>
					<div className='overlay'>
						<div className='flex-col v-center h-center'>
							<div className=''>
								<br />
								<img className='responsive-img' src='http://res.cloudinary.com/dtb6lx1s4/image/upload/v1492487790/hoop_tour_white_text_zgdrwx.png' />
							</div>

							<div>
								<h2 className='hash-tag'>#UniteTheCity</h2>
							</div>

							<br />

							<br />

							<div className=''>
								<Link to={'/locations'} className='btn color-red'>Register!</Link>
							</div>

							<br />
							<br />
							<br />

							<div>
								<img className='lifetime-header' src='https://www.lifetime.com/content/images/lifetimelogo-w-tag_black.png' />
							</div>
						</div>
					</div>
				</div>

				<br />
				<br />

				<div className='center catch-phrase'>
					<h2>This year we are back to bring you the #UltimateBasketballExperience!</h2>
				</div>

				<br />
				<br />

				<div className='flex-row h-around v-center'>

					<div className=''>
						<div className='locations-box flex-col'>
							<div className='locations-header flex-col v-center color-black white-text'>
								<h2>Upcoming Locations</h2>
								<Link to={ '/locations' } className='white-text'>View All Cities</Link>
							</div>
							<div className='locations-body'>

								<Link to={ '/idaho-falls' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>July 8</span>
									<span className='locations-item'>Idaho Falls, ID</span>
								</Link>

								<Link to={ '/lehi' } className='locations-row flex-row h-center h-around row-color'>
									<span className='locations-item'>Aug 12</span>
									<span className='locations-item'>Lehi, UT</span>
								</Link>

								<Link to={ '/st-george' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>Sep 16</span>
									<span className='locations-item'>St. George, UT</span>
								</Link>

								<Link to={ '/logan' } className='locations-row flex-row h-center h-around row-color'>
									<span className='locations-item'>Sep 30</span>
									<span className='locations-item'>Logan, UT</span>
								</Link>

								<Link to={ '/las-vegas' } className='locations-row flex-row h-center h-around'>
									<span className='locations-item'>Oct 14</span>
									<span className='locations-item'>Las Vegas, NV</span>
								</Link>
								
							</div>
						</div>
					</div>
				</div>

				<br />
				<br />
				<br />

				{ /*<div className='row color-black white-text image-content'>
					<div className='col s12 m12 l12'>
						<div className='center'>
							<p>Come dressed to impress because it’s not every day you can strut through town with your hot bod, cool dance moves and slick slides for this all day party. Did we mention 1000 feet?</p>
							<Link to={'/locations'} className='btn color-blue'>Register!</Link>
						</div>

						<br />
						<br />
						<br />

						<div>
							<img className='responsive-img' src='https://www.slidethecity.com/wp-content/uploads/2016/09/xIMG_6569.png.pagespeed.ic.sGjxeFWIu2.webp' />
						</div>
					</div>

					<br />
					<br />
					<br />

					<div className='col s12 m12 l12'>
						<div className='center'>
							<p>Come dressed to impress because it’s not every day you can strut through town with your hot bod, cool dance moves and slick slides for this all day party. Did we mention 1000 feet?</p>
							<Link to={'/locations'} className='btn color-blue'>Register!</Link>
						</div>

						<br />
						<br />
						<br />

			      <div className="video-container">
			        <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
			      </div>
					</div>

					<br />
					<br />
					<br />

				</div>*/ }

				<PresentedBy />

			</div>
		)
	}
}

export default Home;