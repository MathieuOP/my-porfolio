import React from 'react';

// library
import Jello from 'react-reveal/Jello';

// file scss
import './style/portfolio.scss';

// data
import portfolioData from '../data/portfolio.js';

// component
import TitleComponent from './TitleComponent';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            datas: portfolioData,
            currentIndex: 0,
        }
    }

    handleClick = (id) => (e) => {
        this.setState({
            currentIndex: id,
        })

        const allProjectImg = e.target.parentNode.childNodes;
        
        allProjectImg.forEach(data => {
           data.classList.remove('portfolio__button--active');
        })

        e.currentTarget.classList.add('portfolio__button--active')
    }

    render() {
        const {currentIndex, datas} = this.state;
        return (
            <React.Fragment>
                <TitleComponent title="Portfolio" />

                <section className="portfolio">
                    <div className="container">
                        <div className="row">
                            <Jello>
                                <h1 class="portfolio__title">Mes réalisations</h1>
                                <div className="portfolio__wrapper col-11">
                                    <div className="portfolio__content">
                                        <div className="portfolio__techno">
                                            <img className="portfolio__image" src={`images/${datas[currentIndex].image}`} alt="" />
                                        </div>
                                        <div className="portfolio__description">
                                            <p className="portfolio__p">{datas[currentIndex].description}</p>
                                            <ul className="portfolio__list">
                                                {
                                                    datas[currentIndex].techno.map(data => (
                                                        <li className="portfolio__element" key={data.id}> {data}</li>
                                                    ))
                                                }
                                            </ul>
                                            <a className="portfolio__link" href={datas[currentIndex].link}>Accès au site</a>
                                        </div>
                                    </div> 

                                    <div className="portfolio__nav">
                                        {
                                            datas.map((data, index)=> (
                                                <img key={data.id} onClick={this.handleClick(index)} className={index === 0 ? "portfolio__button portfolio__button--active" : "portfolio__button"} src={`images/${data.image}`} alt=""/>
                                            ))
                                        }
                                    </div>   
                                </div>
                            </Jello>
                        </div>
                    </div>
                </section>
            </React.Fragment> 
        )
    }
}

export default Portfolio;