import React from 'react';
import {NavLink} from "react-router-dom";

const Blog = ()=>{
    return <div>
                <section className="blog-page page-warp">
                    <div className="sp-container">
                        <div className="page-title">
                            <h2>Новости</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis. Sed
                                sagittis.</p>
                        </div>
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="gallery-left-col">

                                    <div className="blog-post-item">
                                        <img src="img/blog/1.jpg" alt="" className="blog-thumb"/>
                                            <div className="post-content">
                                                <div className="post-cata">фото</div>
                                                <h4 className="post-title">Как сделать отличный кадр</h4>
                                                <div className="post-date">23 января 2019</div>
                                                <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit
                                                    nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit
                                                    pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img
                                                    src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                            </div>
                                    </div>

                                    <div className="blog-post-item">
                                        <img src="img/blog/2.jpg" alt="" className="blog-thumb"/>
                                            <div className="post-content">
                                                <div className="post-cata">фото</div>
                                                <h4 className="post-title">Как сделать отличный кадр</h4>
                                                <div className="post-date">23 января 2019</div>
                                                <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit
                                                    nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit
                                                    pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img
                                                    src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                            </div>
                                    </div>

                                    <div className="blog-post-item">
                                        <img src="img/blog/3.jpg" alt="" className="blog-thumb"/>
                                            <div className="post-content">
                                                <div className="post-cata">фото</div>
                                                <h4 className="post-title">Как сделать отличный кадр</h4>
                                                <div className="post-date">23 января 2019</div>
                                                <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit
                                                    nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit
                                                    pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img
                                                    src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="gallery-right-col">

                                    <div className="blog-post-item">
                                        <img src="img/blog/4.jpg" alt="" className="blog-thumb"/>
                                            <div className="post-content">
                                                <div className="post-cata">фото</div>
                                                <h4 className="post-title">Как сделать отличный кадр</h4>
                                                <div className="post-date">23 января 2019</div>
                                                <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit
                                                    nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit
                                                    pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img
                                                    src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                            </div>
                                    </div>

                                    <div className="blog-post-item">
                                        <img src="img/blog/5.jpg" alt="" className="blog-thumb"/>
                                            <div className="post-content">
                                                <div className="post-cata">фото</div>
                                                <h4 className="post-title">Как сделать отличный кадр</h4>
                                                <div className="post-date">23 января 2019</div>
                                                <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit
                                                    nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit
                                                    pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. </p>
                                                <NavLink to="#" className="site-btn sb-big">Читать дальше <img
                                                    src="img/icons/arrow-right-black.png" alt=""/></NavLink>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
}

export default Blog;