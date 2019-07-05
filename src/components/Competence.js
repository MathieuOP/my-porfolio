import React from 'react';

// file scss
import './assets/style/competence.scss';

const Competence = () => {

	return (
		<section className="section_competence">
			<div className="container">
				<div className='row'>
					<div className="competences_btn offset-1 col-10 offset-1 offset-lg-1 col-lg-3 offset-lg-2" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
						<h2 className="text-center">Technologie</h2>
						<ul className="text-center">
							<li>HTML</li>
							<li>CSS</li>
							<li>JAVASCRIPT</li>
							<li>PHP</li>
							<li>MYSQL</li>
							<li>BOOTSTRAP</li>
							<li>SASS</li>
							<li>JQUERY</li>
							<li>AJAX</li>
							<li>JSON</li>
						</ul>
					</div>

					<div className="competences_btn offset-1 col-10 offset-1 offset-lg-2 col-lg-3 offset-lg-1" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
						<h2 className="text-center">Outils</h2>
						<ul className="text-center">
							<li>COMPOSER</li>
							<li>PHPMYADMIN</li>
							<li>GIT</li>
							<li>GITHUB</li>
							<li>TRELLO</li>
						</ul>
					</div>
				</div>
			</div>
			<span id="ancre_realisations"></span>
		</section>
	)
}

export default Competence;