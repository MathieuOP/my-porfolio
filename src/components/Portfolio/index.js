import React, { useState } from 'react';
import Jello from 'react-reveal/Jello';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Portfolio.module.scss';
import portfolioData from 'data/portfolio.js';
import TitleComponent from 'components/TitleComponent';

const Portfolio = () => {
    const portfolioDatas = portfolioData.slice(0, 3).map(data => data);

    const [startSlice, setStarSlice] = useState(0);
    const [endSlice, setEndSlice] = useState(3);
    const [datas, setDatas] = useState(portfolioDatas);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [datasLength] = useState(portfolioData.length);

    const handleClick = (id) => (e) => {
        setCurrentIndex(id);
        const allProjectImg = e.target.parentNode.childNodes;
        
        allProjectImg.forEach(data => {
           data.classList.remove(styles['portfolio__button--active']);
        });

        e.currentTarget.classList.add(styles['portfolio__button--active']);
    };

    const handleClicNextButton = () => {
        if (endSlice < portfolioData.length) {
            const start = startSlice + 3;
            const end = endSlice + 3;

            setStarSlice(start);
            setEndSlice(end);
            setDatas(portfolioData.slice(start, end).map(data => data));
            setCurrentIndex(0);
        };
    };

    const handleClicPrevButton = () => {
        if (startSlice > 0) {
            const start = startSlice - 3;
            const end = endSlice - 3;

            setStarSlice(start);
            setEndSlice(end);
            setDatas(portfolioData.slice(start, end).map(data => data));
            setCurrentIndex(0);
        }
    }

    return (
        <>
            <TitleComponent title="Portfolio" />

            <section style={{height: window.innerHeight}} className={styles.portfolio}>
                <div className="container">
                    <div className="row">
                        <Jello>
                            <h1 className={styles.portfolio__title}>Mes réalisations</h1>
                            <div className={`${styles.portfolio__wrapper} col-10`}>
                                <div className={styles.portfolio__content}>
                                    <div className={styles.portfolio__techno}>
                                        <img className={styles.portfolio__image} src={`images/${datas[currentIndex].image}`} alt="" />
                                    </div>
                                    <div className={styles.portfolio__description}>
                                        <p className={styles.portfolio__p}>{datas[currentIndex].description}</p>
                                        <ul className={styles.portfolio__list}>
                                            {
                                                datas[currentIndex].techno.map((data, index) => (
                                                    <li className={styles.portfolio__element} key={index}> {data} </li>
                                                ))
                                            }
                                        </ul>
                                        
                                        {
                                            datas[currentIndex].link !== '' && (
                                                <a className={styles.portfolio__link} href={datas[currentIndex].link}>Accès au site</a>
                                            )
                                        }

                                        {
                                            datas[currentIndex].github && (
                                                <div>
                                                    {
                                                        datas[currentIndex].reposFront && datas[currentIndex].reposBack ? (
                                                            <>
                                                                <a className={styles.portfolio__link} rel="noopener noreferrer" target="_blank" href={datas[currentIndex].reposFront}>
                                                                    Accès au dépôt Front
                                                                </a> -
                                                                <a className={styles.portfolio__link} rel="noopener noreferrer" target="_blank" href={datas[currentIndex].reposBack}>
                                                                    Accès au dépôt Back
                                                                </a>
                                                            </>
                                                        ) : (
                                                            <a className={styles.portfolio__link} rel="noopener noreferrer" target="_blank" href={datas[currentIndex].reposFront}>
                                                                Accès au dépôt
                                                            </a> 
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                </div> 

                                <div className={styles.portfolio__nav}>
                                    {
                                        datas.map((data, index)=> (
                                            <img key={data.id} onClick={handleClick(index)} className={index === 0 ? `${styles.portfolio__button} ${styles["portfolio__button--active"]}` : styles.portfolio__button} src={`images/${data.image}`} alt=""/>
                                        ))
                                    }
                                    
                                    <div className={styles.portfolio__buttons}>
                                        {
                                            (startSlice > 0) && (
                                                <FaArrowAltCircleLeft onClick={handleClicPrevButton} className={styles.portfolio__prevButton} size="3em" />
                                            )
                                        }

                                        {
                                            endSlice < datasLength && (
                                                <FaArrowAltCircleRight onClick={handleClicNextButton} className={styles.portfolio__nextButton} size="3em" />
                                            )
                                        }
                                    </div>
                                </div>   
                            </div>
                        </Jello>
                    </div>
                </div>
            </section>
        </> 
    );
};

export default Portfolio;