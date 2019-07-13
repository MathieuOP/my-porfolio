import React from 'react';

// Library
import RubberBand from 'react-reveal/RubberBand';

// file scss
import './style/profile.scss';

// component
import TitleComponent from './TitleComponent';

const Profile = () => (

	<React.Fragment>
		<TitleComponent title="Présentation" />

		<section className="profile">
			<div className="container">
				<div className="row">
					<RubberBand>
						<div className="profile__wrapper col-lg-8 col-md-10 col-11">
							<h1 className="profile__title text-center">Qui suis-je ?</h1>
							<p className="profile__presentation">
								Je m'appelle Mathieu, j'ai 27 ans, j'habite en région parisienne.
							</p>
								
							<p className="profile__presentation">
								J'ai suivi une formation de développeur web chez O'Clock. Pendant les trois premiers mois de formation j'ai pu apprendre les langages HTML, CSS, JavaScript, PHP et SQL. J'ai aussi pu apprendre Jquery, Bootstrap, le model MVC et la POO. 
								Ensuite, pendant un mois de formation j'ai pu apprendre React, Redux, Axios et Yarn. Puis, pendant un mois j'ai réalisé un projet en groupe avec trois autres développeurs. 
								Enfin, j'ai passé le titre professionnel de Développeur Web et Web Mobile niveau III (bac+2). 
							</p>
							<p className="profile__presentation">
								Aujourd'jui, je suis à la recherche d'un stage de développeur Front-End React afin de consolider mes compétences et de continuer mon apprentissage au sein d'une équipe expérimenté.
							</p>
						</div>
					</RubberBand>
				</div>
			</div>
		</section>
	</React.Fragment>
)

export default Profile;