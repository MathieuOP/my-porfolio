import React from 'react';

// library
import Jello from 'react-reveal/Jello';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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
            startSlice: 0,
            endSlice: 3,
            datas: portfolioData.slice(0, 3).map(data => data),
            currentIndex: 0,
            lengthDatas: portfolioData.length,
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

    handleClicNextButton = () => {
        const { startSlice, endSlice } = this.state;

        if (endSlice < portfolioData.length) {

            const start = startSlice + 3;
            const end = endSlice + 3;

            this.setState({
                startSlice: start,
                endSlice: end,
                datas: portfolioData.slice(start, end).map(data => data),
                currentIndex: 0,
            })
        }
    }

    handleClicPrevButton = () => {

        const { startSlice, endSlice } = this.state;

        if (startSlice > 0) {
            const start = startSlice - 3;
            const end = endSlice - 3;

            this.setState({
                startSlice: start,
                endSlice: end,
                datas: portfolioData.slice(start, end).map(data => data),
                currentIndex: 0,
            })
        }
    }

    render() {
        const {currentIndex, datas, startSlice, endSlice, lengthDatas} = this.state;

        return (
            <>
                <TitleComponent title="Portfolio" />

                <section className="portfolio">
                    <div className="container">
                        <div className="row">
                            <Jello>
                                <h1 className="portfolio__title">Mes réalisations</h1>
                                <div className="portfolio__wrapper col-11">
                                    <div className="portfolio__content">
                                        <div className="portfolio__techno">
                                            <img className="portfolio__image" src={`images/${datas[currentIndex].image}`} alt="" />
                                        </div>
                                        <div className="portfolio__description">
                                            <p className="portfolio__p">{datas[currentIndex].description}</p>
                                            <ul className="portfolio__list">
                                                {
                                                    datas[currentIndex].techno.map((data, index) => (
                                                        <li className="portfolio__element" key={index}> {data} </li>
                                                    ))
                                                }
                                            </ul>
                                            
                                            {
                                                datas[currentIndex].link !== '' && (
                                                    <a className="portfolio__link" href={datas[currentIndex].link}>Accès au site</a>
                                                )
                                            }

                                            {
                                                datas[currentIndex].github && (
                                                    <div>
                                                        <a className="portfolio__link" rel="noopener noreferrer" target="_blank" href={datas[currentIndex].reposFront}>Accès au dépôt Front</a> - 
                                                        <a className="portfolio__link" rel="noopener noreferrer" target="_blank" href={datas[currentIndex].reposBack}>Accès au dépôt Back</a>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div> 

                                    <div className="portfolio__nav">
                                        {
                                            datas.map((data, index)=> (
                                                <img key={data.id} onClick={this.handleClick(index)} className={index === 0 ? "portfolio__button portfolio__button--active" : "portfolio__button"} src={`images/${data.image}`} alt=""/>
                                            ))
                                        }

                                        {
                                            (startSlice > 0) && (
                                                <FaArrowAltCircleLeft onClick={this.handleClicPrevButton} className="portfolio__prevButton" size="3em" />
                                            )
                                        }

                                        {
                                            endSlice < lengthDatas && (
                                                <FaArrowAltCircleRight onClick={this.handleClicNextButton} className="portfolio__nextButton" size="3em" />
                                            )
                                        }
                                    </div>   
                                </div>
                            </Jello>
                        </div>
                    </div>
                </section>
            </> 
        )
    }
}

export default Portfolio;