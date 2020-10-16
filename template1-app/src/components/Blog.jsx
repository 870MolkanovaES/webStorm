import React from 'react';
import {NavLink} from "react-router-dom";

const BlogItem=(props)=>{
    return <div className="blog-post-item">
        <img src={"img/"+props.img} alt="" className="blog-thumb"/>
        <div className="post-content">
            <div className="post-cata">{props.category}</div>
            <h4 className="post-title">{props.title}</h4>
            <div className="post-date">{props.date}</div>
            <p>{props.description}</p>
            <NavLink to={"blog/"+props.category.replaceAll(" ","_")} className="site-btn sb-big">Читать дальше <img
                src="img/icons/arrow-right-black.png" alt=""/></NavLink>
        </div>
    </div>
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blogItems: []};
    }
    componentDidMount() {
        this.props.getArticles().then(
            articles=>{
                let articlesCount = articles.length;
                let blogItems = [];
                for (let i = 0; i < articlesCount; i++) {
                    blogItems.push(
                        <BlogItem
                            key={i}
                            category={articles[i].category}
                            title={articles[i].title}
                            date={articles[i].date}
                            description={articles[i].description}
                            img={articles[i].img}
                        />)
                }
                this.setState({blogItems: blogItems})
            }
        )

    }

    render() {

            return <div>
                <section className="blog-page page-warp">
                    <div className="sp-container">
                        <div className="page-title">
                            <h2>Новости</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis.
                                Sed
                                sagittis.</p>
                        </div>
                        <div className="row m-0">
                            <div className="col-lg-4 col-sm-6 p-0 artists-col">
                                {this.state.blogItems}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    }
}
export default Blog;