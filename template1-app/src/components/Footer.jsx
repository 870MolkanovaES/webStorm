import React from 'react';
import {NavLink} from "react-router-dom";

const Footer=()=>{
    return <div>
                <footer className="footer-section spad">
                    <div className="sp-container">
                        <div className="row m-0">
                            <div className="col-lg-4 footer-text">
                                <h2>Обратная связь</h2>
                                <p>Мы не занимаемся рассылкой рекламных сообщений, а так же не передаем контактные данные третьим лицам. </p>
                            </div>
                            <div className="col-lg-8">
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <input type="text" placeholder="Ваше имя"/>
                                        </div>
                                        <div className="col-lg-4">
                                            <input type="text" placeholder="Ваш Email"/>
                                        </div>
                                        <div className="col-lg-4">
                                            <input type="text" placeholder="Тема"/>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Сообщение"></textarea>
                                            <button className="site-btn sb-light" type="submit">отправить сообщение <img
                                                src="img/icons/arrow-right-white.png" alt=""/></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="copyright">
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            Все права защищены | Шаблон сделан с <i className="fa fa-heart-o"
                                                                                aria-hidden="true"></i>  <NavLink
                            to="https://colorlib.com" target="_blank">Colorlib</NavLink>
                        </div>
                    </div>
                </footer>
    </div>
}

export default Footer;