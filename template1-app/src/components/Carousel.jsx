import React from 'react';
import {NavLink} from "react-router-dom";


const Carousel = ()=> {
    return <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-interval="4000">
                <img className="d-block w-65" src="/img/slider/1.jpg" alt="Первый слайд"/>
                <div className="hs-text position-relative">
                    <h1>The Look<br/>Gallery</h1>
                    <p>John Doe  Showcase<br/>23 января - 14 февраля</p>
                    <NavLink to="/blog" className="site-btn sb-big">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                </div>
            </div>
            <div className="carousel-item" data-interval="4000">
                <img className="d-block w-65" src="/img/slider/2.jpg" alt="Второй слайд"/>
                <div className="hs-text position-relative">
                    <h1>The Look<br/>Gallery</h1>
                    <p>John Doe  Showcase<br/>23 января - 14 февраля</p>
                    <NavLink to="/blog" className="site-btn sb-big">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                </div>
            </div>
            <div className="carousel-item" data-interval="4000">
                <img className="d-block w-65" src="/img/slider/3.jpg" alt="Третий слайд"/>
                <div className="hs-text position-relative">
                    <h1>The Look<br/>Gallery</h1>
                    <p>John Doe  Showcase<br/>23 января - 14 февраля</p>
                    <NavLink to="/blog" className="site-btn sb-big">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                </div>
            </div>
        </div>
    </div>
}

export default Carousel;