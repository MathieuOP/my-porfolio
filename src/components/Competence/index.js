import React from 'react';
import Flash from 'react-reveal/Flash';
import styles from './Competence.module.scss';
import competences from 'data/competences';
import outils from 'data/outils';
import TitleComponent from 'components/TitleComponent';

const Competence = () => (
	<>
		<TitleComponent title="Compétences" />

		<section style={{height: window.innerHeight}} className={styles.competences}>
			<div className="container">
				<div className='row'>
					<Flash>
						<div className={`${styles.techno} col-10 col-md-9 col-lg-3`}>
							<h1 className={`text-center ${styles.techno__title}`}>Technologie</h1>
							<ul className={`text-center ${styles.techno__list}`}>
								{
									console.log(window.innerHeight)
								}
								{
									competences.map((data, index) => (
										<li key={index} className={styles.techno__element}>{data}</li>
									))
								}
							</ul>
						</div>

						<div className={`${styles.outil} col-10 col-md-9 col-lg-3`}>
							<h1 className={`text-center ${styles.outil__title}`}>Outils</h1>
							<ul className={`text-center ${styles.outil__list}`}>
								{
									outils.map((data, index) => (
										<li key={index} className={styles.techno__element}>{data}</li>
									))
								}
							</ul>
						</div>
					</Flash>
				</div>
			</div>
		</section>
	</>
)

export default Competence;