import React from 'react';


// library
import Zoom from 'react-reveal/Zoom';

// file scss
import './style/home.scss';

// component
import TitleComponent from './TitleComponent';

const Home = () => (

	<React.Fragment>
		<TitleComponent title="Accueil" />

		<section className="home">
			<div className='container'>
				<div className="row">
					<Zoom>
						<div className="home__background col-10 col-md-8">
							<h1 className="home__title"><span className="">MATHIEU </span>PEREIRA</h1>
							<p className="home__job"> DÉVELOPPEUR FRONT-END REACT</p>
							<a className="home__link" href="pdf/cv.pdf" download="cv">Télécharger mon CV</a>
						</div>
					</Zoom>
				</div>
			</div>
		</section>
	</React.Fragment>
)


export default Home;