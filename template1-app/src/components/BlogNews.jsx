import React from 'react';
import {NavLink} from "react-router-dom";

const BlogNews = ()=>{
    return <div>
                <section className="blog-section">
                    <div className="sp-container">
                        <div className="blog-title-col">
                            <h2>Последние новости блога</h2>
                        </div>
                        <div className="blog-content-col">
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <img src="img/blog/1_thumb.jpg" alt=""/>
                                </div>
                                <div className="blog-content">
                                    <span className="blog-cata">фото</span>
                                    <h4>Как сделать отличный снимок</h4>
                                    <span>23 января 2019</span>
                                    <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus sus-cipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                    <NavLink to="/blog" className="site-btn">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <img src="img/blog/2_thumb.jpg" alt=""/>
                                </div>
                                <div className="blog-content">
                                    <span className="blog-cata">фото</span>
                                    <h4>10 советов начинающему фотографу</h4>
                                    <span>23 января 2019</span>
                                    <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus sus-cipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                    <NavLink to="/blog" className="site-btn">Читать дальше <img src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
}

export default BlogNews;