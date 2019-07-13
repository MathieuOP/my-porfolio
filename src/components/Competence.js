import React from 'react';

// library
import Flash from 'react-reveal/Flash';

// file scss
import './style/competence.scss';

// Component
import TitleComponent from './TitleComponent';

const Competence = () => (

	<React.Fragment>
		<TitleComponent title="Compétences" />

		<section className="competences">
			<div className="container">
				<div className='row'>
					<Flash>
						<div className="techno col-10 col-md-9 col-lg-3">
							<h1 className="text-cente techno__title">Technologie</h1>
							<ul className="text-center techno__list">
								<li className="techno__element">HTML</li>
								<li className="techno__element">CSS</li>
								<li className="techno__element">JAVASCRIPT</li>
								<li className="techno__element">REACT</li>
								<li className="techno__element">PHP</li>
								<li className="techno__element">SQL</li>
								<li className="techno__element">BOOTSTRAP</li>
								<li className="techno__element">SASS</li>
								<li className="techno__element">JQUERY</li>
								<li className="techno__element">AXIOS</li>
								<li className="techno__element">JSON</li>
							</ul>
						</div>

						<div className="outil col-10 col-md-9 col-lg-3">
							<h1 className="text-center outil__title">Outils</h1>
							<ul className="text-center outil__list">
								<li className="outil__element">YARN</li>
								<li className="outil__element">NPM</li>
								<li className="outil__element">COMPOSER</li>
								<li className="outil__element">PHPMYADMIN</li>
								<li className="outil__element">GIT</li>
								<li className="outil__element">GITHUB</li>
								<li className="outil__element">TRELLO</li>
								<li className="outil__element">SLACK</li>
							</ul>
						</div>
					</Flash>
				</div>
			</div>
		</section>
	</React.Fragment>
)

export default Competence;