import React from 'react';
import {NavLink} from "react-router-dom";

const AboutGallery = ()=>{
    return <div>
                <section className="gallery-page page-warp">
                    <div className="sp-container">
                        <div className="row m-0">
                            <div className="col-lg-6 p-0">
                                <div className="gallery-left-col">
                                    <h2 className="big-title">Галерея The Look</h2>
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
                                        <p>Галерея The Look создана для того, чтобы представить на суд зрителя наиболее интересные картины, относящиеся к разным направлениям живописи и, таким образом, помочь нашим клиентам в оформлении картинами интерьеров квартир и загородных домов, ресторанов, офисов и гостиниц. В нашем интернет магазине вы сможете купить картины которые каждый день будут приносить вам радость и украсят любой интерьер. </p>
                                        <p>На страницах нашей галереи вы найдёте живопись различных жанров и стилей. У нас Вы сможете заказать портрет, роспись стен и потолков, копию картин великих мастеров прошлого. Мы поможем Вам оформить в багет картины купленные у нас или в других галереях.</p>
                                        <h2>Наша концепция</h2>
                                        <p>The Look - проект, направленный на популяризацию современного искусства и культуры коллекционирования.</p>
                                        <p>The Look - площадка для новых проектов и коллабораций, отличный шанс положить начало вашей коллекции и познакомиться с новыми именами из мира современного искусства.</p>
                                        <div className="gallery-quite">
                                            <h2>“Нужно любить – любить как можно больше, ибо в любви и заключается подлинная сила, и кто много любит, тот делает много и способен на многое, и что делается с любовью, то делается хорошо. ”</h2>
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