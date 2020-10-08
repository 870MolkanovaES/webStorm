import React from 'react';

const Contact = ()=>{
    return <div>
                <section className="contact-page page-warp">
                    <div className="sp-container">
                        <div className="page-title">
                            <h2>Контакты</h2>
                            <p>Галерея открыта для посещения по предварительной записи.</p>
                        </div>
                    </div>
                    <div className="contact-warp">
                        <div className="sp-container">
                            <div className="contact-text">
                                <h4>The Look Gallery</h4>
                                <div className="contact-info">
                                    <div className="ci-icon">
                                        <img src="img/icons/map-marker.png" alt=""/>
                                    </div>
                                    <p>712 Mayo Street, Lexington, Kentucky 40507, AR</p>
                                </div>
                                <div className="contact-info">
                                    <div className="ci-icon">
                                        <img src="img/icons/phone.png" alt=""/>
                                    </div>
                                    <p>+7(915)492-15-75</p>
                                </div>
                                <div className="contact-info">
                                    <div className="ci-icon">
                                        <img src="img/icons/envelope.png" alt=""/>
                                    </div>
                                    <p>870molkanovaes@gmail.com</p>
                                </div>
                                <div className="contact-info">
                                    <div className="ci-icon">
                                        <img src="img/icons/clock.png" alt=""/>
                                    </div>
                                    <p>M - F: 09:00 AM - 17:00 PM</p>
                                </div>
                            </div>
                            <div className="contact-text">
                                <h4>The Look Gallery</h4>
                                <div className="contact-info">
                                    <div className="ci-icon">
                                        <img src="img/icons/phone.png" alt=""/>
                                    </div>
                                    <p>678-434-6837</p>
                                </div>
                                <div className="contact-info">
                                    <div className="ci-icon">
                                        <img src="img/icons/envelope.png" alt=""/>
                                    </div>
                                    <p>john@yourwebsite.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
                                style="border:0" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
    </div>
}

export default Contact;