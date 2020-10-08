import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = ()=>{
    return <div>
        <header className="header-section">
            <div className="header-warp">
                <NavLink to="/index" className="site-logo">
                    <img src="img/logo.png" alt=""/>
                </NavLink>
                <ul className="main-menu">
                    <li><NavLink exact to="/index">Главная</NavLink></li>
                    <li><NavLink to="/gallery">Галерея</NavLink></li>
                    <li><NavLink to="/artists">Художники</NavLink></li>
                    <li><NavLink to="/elements">Заказ</NavLink></li>
                    <li><NavLink to="/blog">Блог</NavLink></li>
                    <li><NavLink to="/contact">Контакты</NavLink></li>
                </ul>
            </div>
        </header>
    </div>
}

export default Menu;