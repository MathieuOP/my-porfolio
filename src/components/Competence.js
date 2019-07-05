import React from 'react';

// file scss
import './assets/style/competence.scss';

const Competence = () => {

	return (
		<section className="section_competence">
			<div className="container">
				<div className='row'>
					<div className="competences competences--techno col-7 col-lg-4" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
						<h2 className="text-center">Technologie</h2>
						<ul className="text-center">
							<li>HTML</li>
							<li>CSS</li>
							<li>JAVASCRIPT</li>
							<li>REACT</li>
							<li>PHP</li>
							<li>SQL</li>
							<li>BOOTSTRAP</li>
							<li>SASS</li>
							<li>JQUERY</li>
							<li>AXIOS</li>
							<li>JSON</li>
						</ul>
					</div>

					<div className="competences competences--outils col-7 col-lg-4" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
						<h2 className="text-center">Outils</h2>
						<ul className="text-center">
							<li>YARN</li>
							<li>NPM</li>
							<li>COMPOSER</li>
							<li>PHPMYADMIN</li>
							<li>GIT</li>
							<li>GITHUB</li>
							<li>TRELLO</li>
							<li>SLACK</li>
						</ul>
					</div>
				</div>
			</div>
			<span id="ancre_realisations"></span>
		</section>
	)
}

export default Competence;