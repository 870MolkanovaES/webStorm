import React from 'react';

const ArtistsItem = (props)=>{
    return <div className="col-lg-4 col-sm-6 artists-col">
                <div className="artists-item">
                    <img src={props.img} alt=""/>
                    <h4>{props.name}</h4>
                    <span>{props.category}</span>
                    <p>{props.description}<br/>{props.material}</p>
                </div>
    </div>
}

const AboutArtists = (props)=>{
    let articlesArtists = props.getArticlesArtists();
    let articlesArtistsCount = Object.keys(articlesArtists).length;
    let artistsItems = [];
    for (let i=0; i<articlesArtistsCount; i++){
        artistsItems.push(<ArtistsItem
            key={i}
            img={articlesArtists[i].img}
            name={articlesArtists[i].name}
            category={articlesArtists[i].category}
            description={articlesArtists[i].description}
            material={articlesArtists[i].material}
        />)
    }
    return <section className="artists-page page-warp">
                    <div className="sp-container">
                        <div className="page-title">
                            <h2>Художники</h2>
                            <p>На этой странице представлены все художники, чья живопись выставлена  в нашей галерее.</p>
                        </div>
                        <div className="row artists-row">
                            {artistsItems}
                            <div className="col-lg-4 col-sm-12 artists-col">
                                <a className="artists-more-btn" href="#">
                                    <img src="img/icons/arrow-big.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
}

export default AboutArtists;