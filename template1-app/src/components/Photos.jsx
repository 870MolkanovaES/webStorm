import React from 'react';
import {NavLink} from "react-router-dom";

const Photos = ()=>{
    return <div>
                <section className="gallery-section">
                    <div className="sp-container">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="gallery-left-col">
                                    <div className="gallery-text">
                                        <h2>“Камера заставляет забыть, где вы. Это не похоже на то, как если бы вы прятались, вы начинаете видеть многое.”</h2>
                                        <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                    </div>
                                    <div className="gallery-item">
                                        <img src="img/gallery/1.jpg" alt="#"/>
                                        <h4>Страсть 2017</h4>
                                        <p>Художник: John Doe</p>
                                        <NavLink to="/gallery" className="site-btn">псомотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                    </div>
                                    <div className="gallery-item">
                                        <img src="img/gallery/2.jpg" alt="#"/>
                                        <h4>Страсть 2017</h4>
                                        <p>Художник: John Doe</p>
                                        <NavLink to="/gallery" className="site-btn">посмотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                    </div>
                                    <div className="gallery-item">
                                        <img src="img/gallery/3.jpg" alt="#"/>
                                        <h4>Страсть 2017</h4>
                                        <p>Художник: John Doe</p>
                                        <NavLink to="/gallery" className="site-btn">посмотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="gallery-right-col">
                                    <div className="gallery-item">
                                        <img src="img/gallery/4.jpg" alt="#"/>
                                        <h4>Страсть 2017</h4>
                                        <p>Художник: John Doe</p>
                                        <NavLink to="/gallery" className="site-btn">посмотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                    </div>
                                    <div className="gallery-item">
                                        <img src="img/gallery/5.jpg" alt="#"/>
                                        <h4>Страсть 2017</h4>
                                        <p>Художник: John Doe</p>
                                        <NavLink to="/gallery" className="site-btn">посмотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                    </div>
                                    <div className="gallery-item">
                                        <img src="img/gallery/6.jpg" alt="#"/>
                                        <h4>Страсть 2017</h4>
                                        <p>Художник: John Doe</p>
                                        <NavLink to="/gallery" className="site-btn">посмотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                    </div>
                                    <div className="more-gallery text-left text-md-right">
                                        <NavLink to="/gallery" className="site-btn sb-big">посмотреть всю галерею <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
}

export default Photos;