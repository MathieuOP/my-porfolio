import React, { Fragment } from 'react';

// file scss
import './style/portfolio.scss';
import datas from '../data/portfolio.js';

// data portfolio

class Portfolio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: '',
            indexCurrentDesc: '',
        }
    }

    portfolioContent = React.createRef();

    componentDidMount() {
        window.addEventListener('resize', (e) => {
            if (this.portfolioContent.current !== null) {
                this.portfolioContent.current.style.display = 'none';
            }
        });
    }

    handleClick = (index) => (e) => {
        const allDiv = document.querySelectorAll('.portfolio'); // Récupération des éléments qui ont la class "portfolio_bloc"
        let bool = false;
        
        this.setState({
            indexCurrentDesc: index,
        });

        for (let i = 0; i < allDiv.length; i++) {
            // Vérification pour trouvé la premiere div avec une hauteur plus grande que la div cliqué
            // Lorsqu'elle est trouvé on sort de la boucle
            if (allDiv[index].offsetTop < allDiv[i].offsetTop) {
                
                this.setState({
                    index: Number(allDiv[i].id -1),
                })

                bool = true;
                break;
            }
        }

        // Si aucune div plus grande que celle cliqué est trouvé on récupère l'id de la derniere div
        if (!bool) {
            if (this.portfolioContent.current !== null) {
                this.portfolioContent.current.style.display = 'block';
            }
            this.setState({
                index: Number(allDiv[allDiv.length - 1].id),
            })
        }
    }

    render() {
        const {indexCurrentDesc} = this.state;
        return (
            <section className="section_realisation">
                <div className="container">
                    <div className="row">
                        <div className="wrapper_portfolio" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            
                        {
                            datas.map((data, index) => (
                                <Fragment key={data.id}>
                                    <div onClick={this.handleClick(index)} id={index} className="portfolio">
                                        <img src={`images/${data.image}`} alt={data.image} />
                                    </div>   

                                    {
                                        this.state.index === index && (
                                            <div key={datas[indexCurrentDesc].id} ref={this.portfolioContent} className="portfolio-content">
                                                <img src={`images/${datas[indexCurrentDesc].image}`} alt="" />
                                                
                                                <div className="portfolio-description">
                                                    <ul>
                                                        {
                                                            datas[indexCurrentDesc].techno.map(data => (
                                                                <li>{data}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                    <p>{datas[indexCurrentDesc].description}</p>

                                                    <a href="#">VOIR LE SITE</a>
                                                </div>
                                            </div>
                                        )
                                    }
                                </Fragment>                           
                            ))
                        }
    
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;