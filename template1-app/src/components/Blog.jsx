import React from 'react';
import {NavLink} from "react-router-dom";

const BlogItem=(props)=>{
    return <div className="blog-post-item">
        <img src={props.img} alt="" className="blog-thumb"/>
        <div className="post-content">
            <div className="post-cata">{props.category}</div>
            <h4 className="post-title">{props.title}</h4>
            <div className="post-date">{props.date}</div>
            <p>{props.description}</p>
            <NavLink to="#" className="site-btn sb-big">Читать дальше <img
                src="img/icons/arrow-right-black.png" alt=""/></NavLink>
        </div>
    </div>
}

const Blog = (props)=>{
    let articles=props.getArticles();
    let articlesCount=Object.keys(articles).length;
    let blogItems=[];
    for (let i=0;i<articlesCount;i++){
        blogItems.push(<BlogItem
            key={i}
            title={articles[i].category}
            title1={articles[i].title}
            date={articles[i].date}
            description={articles[i].description}
            img={articles[i].img}
        />)
    }
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
                                    {blogItems}
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="gallery-right-col">
                                    {blogItems}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
}

export default Blog;