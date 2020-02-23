import React from 'react';
import Zoom from 'react-reveal/Zoom';
import styles from './Home.module.scss';
import TitleComponent from 'components/TitleComponent';

const Home = () => (
	<>
		<TitleComponent title="Accueil" />

		<section style={{height: window.innerHeight}} className={styles.home}>
			<div className="container">
				<div className="row">
					<Zoom>
						<div className={`${styles.home__background}`}>
							<h1 className={styles.home__title}><span className="">MATHIEU </span>PEREIRA</h1>
							<p className={styles.home__job}> DÉVELOPPEUR FRONT-END REACT</p>
							<a className={styles.home__link} href="pdf/cv.pdf" download="cv">Télécharger mon CV</a>
						</div>
					</Zoom>
				</div>
			</div>
		</section>
	</>
)


export default Home;