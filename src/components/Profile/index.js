import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import styles from './Profile.module.scss';
import TitleComponent from 'components/TitleComponent';

const Profile = () => (
	<>
		<TitleComponent title="Présentation" />

		<section style={{height: window.innerHeight}} className={styles.profile}>
			<div className="container">
				<div className="row">
					<RubberBand>
						<div className={`${styles.profile__wrapper} col-lg-8 col-md-10 col-11`}>
							<h1 className={`${styles.profile__title} text-center`}>Qui suis-je ?</h1>
							<p className={styles.profile__presentation}>
								Je m'appelle Mathieu, j'ai 27 ans, j'habite en région parisienne.
							</p>
								
							<p className={styles.profile__presentation}>
								J'ai suivi une formation de développeur web chez O'Clock. Pendant les trois premiers mois de formation j'ai pu apprendre les technos suivantes: <strong>HTML, CSS, SCSS, Bootstrap, JavaScript, Jquery, PHP (MVC et POO) et SQL</strong>. J'ai aussi pu apprendre à utiliser <strong>le terminal, git et github</strong>. <br/>
								Ensuite, pendant un mois de formation j'ai pu apprendre <strong>React, Redux, Axios, les Middlewares, NPM/Yarn, etc...</strong> Puis, pendant un mois j'ai réalisé un projet 
								en groupe avec trois autres développeurs. <br/>
								Enfin, j'ai passé le <strong>titre professionnel de Développeur Web et Web Mobile niveau III (bac+2) que j'ai obtenu</strong>. 
							</p>
							<p className={styles.profile__presentation}>
								Aujourd'hui, je suis à la recherche d'un poste de développeur Front-End React. Je souhaite intégrer une équipe expérimentée qui puisse me permettre de monter en compétence.
							</p>
						</div>
					</RubberBand>
				</div>
			</div>
		</section>
	</>
)

export default Profile;