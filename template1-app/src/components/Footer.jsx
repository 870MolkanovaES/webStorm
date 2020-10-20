import React from 'react';
import {NavLink} from "react-router-dom";

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state={value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    sendMail(event){
        let formData=new FormData();
        formData.append("text", this.state.value);
        fetch("http://i9154906.beget.tech/sendMail",{
            method:"POST",
            body:formData
        });
        event.preventDefault();
    }


    render() {
        return <div>
            <footer className="footer-section spad">
                <div className="sp-container">
                    <div className="row m-0">
                        <div className="col-lg-4 footer-text">
                            <h2>Обратная связь</h2>
                            <p>Мы не занимаемся рассылкой рекламных сообщений, а так же не передаем контактные данные
                                третьим лицам. </p>
                        </div>
                        <div className="col-lg-8">
                            <form className="contact-form" onSubmit={this.sendMail}>
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
                                        <textarea placeholder="Сообщение" value={this.state.value} onChange={this.handleChange}></textarea>
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
                                                                aria-hidden="true"></i> <NavLink
                        to="https://colorlib.com" target="_blank">Colorlib</NavLink>
                    </div>
                </div>
            </footer>
        </div>
    }
}

export default Footer;