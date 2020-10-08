import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Photos from "./components/Photos";
import BlogNews from "./components/BlogNews";
import {BrowserRouter,Route} from "react-router-dom";
import AboutGallery from "./components/AboutGallery";
import GallerySlider from "./components/GallerySlider";
import AboutArtists from "./components/AboutArtists";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
              <div id="preloder">
                <div className="loader"></div>
              </div>
          <BrowserRouter>
              <Menu/>
              <Route exact path="/" render={()=>{
                  return <div>
                      <Carousel/>
                      <Photos/>
                      <BlogNews/>
                  </div>
              }}/>
              <Route exact path="/index" render={()=>{
                  return <div>
                      <Carousel/>
                      <Photos/>
                      <BlogNews/>
                  </div>
              }}/>
              <Route path="/gallery" render={()=>{
                  return <div>
                      <AboutGallery/>
                      <GallerySlider/>
                  </div>
              }}/>
              <Route path="/artists" render={()=>{
                  return <div>
                      <AboutArtists/>
                  </div>
              }}/>
              <Route path="/elements" render={()=>{
                  return <div>
                      <Shop/>
                  </div>
              }}/>
              <Route path="/blog" render={()=>{
                  return <div>
                      <Blog/>
                  </div>
              }}/>
              <Route path="/contact" render={()=>{
                  return <div>
                      <Contact/>
                  </div>
              }}/>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
