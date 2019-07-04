import React from 'react';

// file scss
import './assets/style/presentation.scss';

const Presentation = () => {

	return (
		<section className="section_presentation">
			<div className="container-fluid">
				<div className="row">
					<div className="presentation offset-lg-3 col-lg-6 offset-lg-3 offset-md-2 col-md-8 offset-md-2  offset-1 col-10 offset-1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
						<h2 className="text-center">Qui suis-je ?</h2>
						<p>
							Je m'appelle Mathieu, j'ai 27 ans, j'habite en région parisienne.
						</p>
							
						<p>
							J'ai suivi une formation de développeur web chez O'Clock. Pendant les trois premiers mois de formation j'ai pu apprendre les langages HTML, CSS, JavaScript, PHP et SQL. J'ai aussi pu apprendre Jquery, Bootstrap, le model MVC et la POO. 
							Ensuite, pendant un mois de formation j'ai pu apprendre React, Redux, Axios et Yarn. Puis, pendant un mois j'ai réalisé un projet en groupe avec trois autres développeurs. 
							Enfin, j'ai passé le titre professionnel de Développeur Web et Web Mobile niveau III (bac+2). 
						</p>
						<p>
							Aujourd'jui, je suis à la recherche d'un stage de développeur Front-End React afin de consolider mes compétences et de continuer mon apprentissage au sein d'une équipe expérimenté.
						</p>
					</div>
				</div>
			</div>
			</section>
	)
}

export default Presentation;