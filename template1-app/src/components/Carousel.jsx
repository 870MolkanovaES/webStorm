import React from 'react';
import {NavLink} from "react-router-dom";

const Carousel = ()=>{
    return <div>
            <section className="hero-section">
                <div className="hero-slider owl-carousel">
                    <div className="hs-item">
                        <div className="hs-bg set-bg sm-overlay" data-setbg="img/slider/1.jpg"></div>
                        <div className="sp-container">
                            <div className="hs-text">
                                <h2>The Look<br/>Gallery</h2>
                                <p>John Doe  Showcase<br/>23 января - 14 февраля</p>
                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="hs-item">
                        <div className="hs-bg set-bg sm-overlay" data-setbg="img/slider/2.jpg"></div>
                        <div className="sp-container">
                            <div className="hs-text">
                                <h2>The Look<br/>Gallery</h2>
                                <p>John Doe  Showcase<br/>23 января - 14 февраля</p>
                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="hs-item">
                        <div className="hs-bg set-bg sm-overlay" data-setbg="img/slider/3.jpg"></div>
                        <div className="sp-container">
                            <div className="hs-text">
                                <h2>The Look<br/>Gallery</h2>
                                <p>John Doe  Showcase<br/>23 января - 14 февраля</p>
                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
}

export default Carousel;