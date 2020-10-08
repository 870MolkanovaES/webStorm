import React from 'react';
import {NavLink} from "react-router-dom";

const AboutGallery = ()=>{
    return <div>
                <section className="gallery-page page-warp">
                    <div className="sp-container">
                        <div className="row m-0">
                            <div className="col-lg-6 p-0">
                                <div className="gallery-left-col">
                                    <h2 className="big-title">О Галерее</h2>
                                    <div className="gallery-item">
                                        <img src="img/gallery/7.jpg" alt="#"/>
                                            <h4>Сейчас @ The Look</h4>
                                            <p>Художник: John Doe</p>
                                            <NavLink to="#" className="site-btn">посмотреть галерею <img src="img/icons/arrow-right-black.png"
                                                                                               alt=""/></NavLink>
                                    </div>
                                    <div className="info-numbers">
                                        <h2 className="gallery-title">Цифры</h2>
                                        <div className="in-item">
                                            <h2>130<span>+</span></h2>
                                            <h4>Фотовыставок</h4>
                                        </div>
                                        <div className="in-item">
                                            <h2>150 000<span>+</span></h2>
                                            <h4>Посетителей</h4>
                                        </div>
                                        <div className="in-item">
                                            <h2>1395</h2>
                                            <h4>Дней</h4>
                                        </div>
                                        <div className="in-item">
                                            <h2>86<span>+</span></h2>
                                            <h4>Художников</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 p-0">
                                <div className="gallery-right-col">
                                    <div className="gallery-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis.
                                            Sed sagittis, turpis a imperdiet eleifend, est ligula convallis augue, sit amet porta
                                            urna justo vel neque. Pellentesque a interdum nunc. Nunc congue eget nisl et laoreet.
                                            Vivamus suscipit vulputate enim a pellentesque. Vivamus id mattis orci. Donec ut
                                            dignissim dolor. Maecenas tortor ex, fauci-bus ac mauris a, pellentesque tincidunt
                                            turpis. </p>
                                        <p>Phasellus eget nibh nec nibh porta semper a nec turpis. Interdum et malesua-da fames ac
                                            ante ipsum primis in faucibus. Maecenas rhoncus metus eu enim posuere, tincidunt porta
                                            ex interdum. Nam id lectus dui. Cras feugiat purus condimentum, condimentum urna
                                            imperdiet, vehicula nisi.</p>
                                        <h2>Наши взгляды</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis.
                                            Sed sagittis, turpis a imperdiet eleifend, est ligula convallis augue, sit amet porta
                                            urna justo vel neque. Pellentesque a interdum nunc.</p>
                                        <div className="gallery-quite">
                                            <h2>“It is good to love many things, for therein lies the true strength, and who-soever
                                                loves much performs much, and can accomplish much, and what is done in love is well
                                                done.”</h2>
                                            <h3>Винсент Ваг Гог</h3>
                                        </div>
                                    </div>
                                    <h2 className="gallery-title">Скоро @ The Look</h2>
                                    <div className="gallery-item">
                                        <img src="img/gallery/1.jpg" alt="#"/>
                                            <h4>Страсть 2017k</h4>
                                            <p>Художник: John Doe<br/>3 февраля 2019–28 июля 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
}

export default AboutGallery;