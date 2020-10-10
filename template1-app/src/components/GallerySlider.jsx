import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Carousel() {

    return <section className="gallery-slider-section">
        <div className="sp-container">
            <h2 className="gallery-title">Наши последние выставки</h2>

        </div>
        <OwlCarousel
            className="owl-theme"
            items="3"
            autoplay
            loop
            dots
        >
            <div className="item">
                <div className="cake_feature_item">
                    <div className="cake_img">
                        <img src="img/gallery/8.jpg" alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>Зима</h4>
                        <p>Artist: John Doe<br/>3 февраля 2019–28 июля 2019</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="cake_feature_item">
                    <div className="cake_img">
                        <img src="img/gallery/9.jpg" alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>Зима</h4>
                        <p>Artist: John Doe<br/>3 февраля 2019–28 июля 2019</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="cake_feature_item">
                    <div className="cake_img">
                        <img src="img/gallery/10.jpg" alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>Зима</h4>
                        <p>Artist: John Doe<br/>3 февраля 2019–28 июля 2019</p>
                    </div>
                </div>
            </div>

        </OwlCarousel>
    </section>
}

export default Carousel;
