import React from 'react';
import MyNavBar from './MyNavBar';

// file scss
import './assets/style/header.scss';

const Header = () => {

	return (
		<header>
			<MyNavBar />
			<div className="container">
				<div className="row">
					<div className="background">
						<h1 className=""><span className="">MATHIEU </span>PEREIRA</h1>
						<p>DÉVELOPPEUR FRONT-END REACT</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;