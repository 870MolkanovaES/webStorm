import React from 'react';

const GallerySlider = ()=>{
    return <div>
                <section className="gallery-slider-section">
                    <div className="sp-container">
                        <h2 className="gallery-title">Выставки</h2>
                    </div>
                    <div className="gallery-slider owl-carousel">
                        <div className="gallery-item">
                            <img src="img/gallery/8.jpg" alt=""/>
                                <h4>Зима</h4>
                                <p>Artist: John Doe<br/>3 февраля 2019–28 июля 2019</p>
                        </div>
                        <div className="gallery-item">
                            <img src="img/gallery/9.jpg" alt=""/>
                                <h4>Портреты</h4>
                                <p>Художник: John Doe<br/>12 июля 2018–3 сентября 2018</p>
                        </div>
                        <div className="gallery-item">
                            <img src="img/gallery/10.jpg" alt=""/>
                                <h4>Глубокий синий</h4>
                                <p>Художник: John Doe<br/>3 июня 2018–16 сентября 2018</p>
                        </div>

                    </div>
                </section>
    </div>
}

export default GallerySlider;