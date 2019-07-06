import React from 'react';

// file scss
import './style/myNavBar.scss';

// import icons
import { MdMenu } from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaAt } from 'react-icons/fa';

class MyNavBar extends React.Component {
	navRef = React.createRef();
	
	paraNavRef = React.createRef();
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	// navbar is transparent and my name and logo are hide
	// scroll less than 100px the navbar becomes black and less than 540px the logo and my name appears
	handleScroll = () => {
		const navRef = this.navRef.current;
		const paraNavRef = this.paraNavRef.current;

		if (window.scrollY > 100) {
			navRef.style.setProperty("background-color", "black", "important");
		}
		else {
			navRef.style.backgroundColor = 'transparent';
		}

		if (window.scrollY > 540) {
			paraNavRef.style.opacity = '1';
		} 
		else {
			paraNavRef.style.opacity = '0';
		}
	}; 
	
	render() {
		return (
			<nav ref={this.navRef} className="nav navbar navbar-expand-lg navbar-light col-lg-12">
				<p ref={this.paraNavRef} className="text-white"> 
					<span>MATHIEU PEREIRA</span>
					<a href="https://www.linkedin.com/in/mathieu-pereira/" target="_blank"><FaLinkedin className="icon" color="#fff"/></a>
					<a href="https://twitter.com/Mathieu_OP" target="_blank"><FaTwitter  className="icon" color="#fff" /></a> 
					<a href="mailto:mathieuoliveirapereira@gmail.com" data-toggle="tooltip" title="mathieuoliveirapereira@gmail.com"><FaAt className="icon" color="#fff"/></a>
				</p>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<MdMenu className="icon_hamburger" size="2.5em" color="#fff" />
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link text-white" href="cv/cv.html" target="_blank">CV</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#realisations" id="to_realisations">RÉALISATION</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#contact" id="to_contact">CONTACT</a>
						</li>
					</ul>
				</div>
			</nav>
		)	
	}
}

export default MyNavBar;