import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

// file scss
import './style/myNavBar.scss';

// import icons
import { MdDesktopWindows, MdHome, MdBuild } from 'react-icons/md';
import { FaRegUser, FaEnvelope } from 'react-icons/fa';

const MyNavBar = () => (
	
	<Fragment>
		<nav className="menu">
			<ul className="menu__list">
				<li className="menu__element">
					<Link className="menu__link" to="/"><MdHome color="#fff" size="2.3em" /></Link>
				</li>

				<li className="menu__element">
					<Link className="menu__link" to="/profile"><FaRegUser size="2em" /></Link>
				</li>

				<li className="menu__element">
					<Link className="menu__link" to="/competences"><MdBuild color="#fff" size="2em" /></Link>
				</li>

				<li className="menu__element">
					<Link className="menu__link" to="/portfolio"><MdDesktopWindows size="2em" /></Link>					
				</li>

				<li className="menu__element">
					<Link className="menu__link"to="/contact"><FaEnvelope color="#fff" size="2em" /></Link>
				</li>
			</ul>
		</nav>
	</Fragment>
)

export default MyNavBar;