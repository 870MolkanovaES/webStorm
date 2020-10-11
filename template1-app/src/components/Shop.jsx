import React from 'react';
import {NavLink} from "react-router-dom";

const Shop = ()=>{
    return <div>
                <section className="elements-page page-warp">
                    <div className="sp-container">
                        <div className="page-title">
                            <h2>Магазин</h2>
                            <p>На нашем сайте вы можете приобрести предметы современного искусства. Если Вам понадобится помощь в подборе — пишите нам, мы c удовольствием поможем вам с пополнением вашей коллекции!</p>
                            <p>Воспользуйтесь формой обратной связи для отправки сообщений.</p>
                        </div>
                        <div className="element">
                            <h4 className="el-title">Buttons</h4>
                            <button className="site-btn mr-0">посмотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/>
                            </button>
                            <button className="site-btn sb-line">посмотреть галерею <img src="img/icons/arrow-right-black.png" alt=""/>
                            </button>
                            <button className="site-btn sb-solid sb-light">посмотреть галерею <img src="img/icons/arrow-right-white.png"
                                                                                             alt=""/></button>
                        </div>
                        <div className="element acc-tab-element">
                            <h4 className="el-title">Accordions & Tabs</h4>
                            <div className="row">
                                <div className="col-lg-6">

                                    <div id="accordion" className="accordion-area">
                                        <div className="panel">
                                            <div className="panel-header" id="headingOne">
                                                <button className="panel-link" data-toggle="collapse" data-target="#collapse1"
                                                        aria-expanded="false" aria-controls="collapse1"> Nullam dictum, tortor in
                                                    accumsan eleifend, ligula augue
                                                </button>
                                            </div>
                                            <div id="collapse1" className="collapse" aria-labelledby="headingOne"
                                                 data-parent="#accordion">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue
                                                        non mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis
                                                        augue, sit amet porta urna justo vel neque. Pellentesque a interdum nunc.
                                                        Nunc congue eget nisl et laoreet. Vivamus suscipit vulputate enim a
                                                        pellentesque. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel">
                                            <div className="panel-header" id="headingTwo">
                                                <button className="panel-link" data-toggle="collapse" data-target="#collapse2"
                                                        aria-expanded="false" aria-controls="collapse2">Duis accumsan nibh nisl, sit
                                                    amet sollicitudin urna tincidunt
                                                </button>
                                            </div>
                                            <div id="collapse2" className="collapse" aria-labelledby="headingTwo"
                                                 data-parent="#accordion">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue
                                                        non mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis
                                                        augue, sit amet porta urna justo vel neque. Pellentesque a interdum nunc.
                                                        Nunc congue eget nisl et laoreet. Vivamus suscipit vulputate enim a
                                                        pellentesque. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel">
                                            <div className="panel-header active" id="headingThree">
                                                <button className="panel-link" data-toggle="collapse" data-target="#collapse3"
                                                        aria-expanded="true" aria-controls="collapse3">Vestibulum in nibh
                                                    scelerisque, tincidunt sapien sit amet
                                                </button>
                                            </div>
                                            <div id="collapse3" className="collapse show" aria-labelledby="headingThree"
                                                 data-parent="#accordion">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue
                                                        non mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis
                                                        augue, sit amet porta urna justo vel neque. Pellentesque a interdum nunc.
                                                        Nunc congue eget nisl et laoreet. Vi-vamus suscipit vulputate enim a
                                                        pellentesque. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tab-element">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" id="1-tab" data-toggle="tab" to="#tab-1" role="tab"
                                                   aria-controls="tab-1" aria-selected="false">Nullam dictum</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" id="2-tab" data-toggle="tab" to="#tab-2" role="tab"
                                                   aria-controls="tab-2" aria-selected="false">Duis accumsan</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link active" id="3-tab" data-toggle="tab" to="#tab-3" role="tab"
                                                   aria-controls="tab-3" aria-selected="true">Vestibulum in nibh</NavLink>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">

                                            <div className="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non
                                                    mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis augue,
                                                    sit amet porta urna justo vel neque. Pellentesque a interdum nunc. Nunc congue
                                                    eget nisl et laoreet. Vi-vamus suscipit vulputate enim a pellentesque. </p>
                                            </div>
                                            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non
                                                    mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis augue,
                                                    sit amet porta urna justo vel neque. Pellentesque a interdum nunc. Nunc congue
                                                    eget nisl et laoreet. Vi-vamus suscipit vulputate enim a pellentesque. </p>
                                            </div>
                                            <div className="tab-pane fade show active" id="tab-3" role="tabpanel"
                                                 aria-labelledby="tab-3">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non
                                                    mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis augue,
                                                    sit amet porta urna justo vel neque. Pellentesque a interdum nunc. Nunc congue
                                                    eget nisl et laoreet. Vi-vamus suscipit vulputate enim a pellentesque. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="element">
                            <h4 className="el-title">Milestones</h4>
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="milestone">
                                        <h2>130<span>+</span></h2>
                                        <h4>Photography Exibitions</h4>
                                    </div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="milestone">
                                        <h2>150 000<span>+</span></h2>
                                        <h4>Visitors</h4>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="milestone">
                                        <h2>1395</h2>
                                        <h4>Days</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="element">
                            <h4 className="el-title">Loader</h4>
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 cp-item">
                                    <div className="circle-progress" data-cptitle="Pellentesque a interdum nunc." data-cpid="id-1"
                                         data-cpvalue="50" data-cpcolor="#c1c1c1"></div>
                                </div>
                                <div className="col-lg-3 col-sm-6 cp-item">
                                    <div className="circle-progress" data-cptitle="Fusce in elementum nibh" data-cpid="id-2"
                                         data-cpvalue="70" data-cpcolor="#c1c1c1"></div>
                                </div>
                                <div className="col-lg-3 col-sm-6 cp-item">
                                    <div className="circle-progress" data-cptitle="Pellentesque a interdum nunc." data-cpid="id-3"
                                         data-cpvalue="90" data-cpcolor="#c1c1c1"></div>
                                </div>
                                <div className="col-lg-3 col-sm-6 cp-item">
                                    <div className="circle-progress" data-cptitle="Fusce in elementum nibh" data-cpid="id-3"
                                         data-cpvalue="100" data-cpcolor="#c1c1c1"></div>
                                </div>
                            </div>
                        </div>

                        <div className="element">
                            <h4 className="el-title">Icon Boxes</h4>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="icon-box">
                                        <div className="ib-icon">
                                            <img src="img/icons/love.png" alt=""/>
                                        </div>
                                        <h4>Photography Lover</h4>
                                        <h5>Pure Love</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis.
                                            Sed sagittis, turpis a imper-diet eleifend, est ligula convallis augue, sit amet porta
                                            urna justo vel neque.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="icon-box">
                                        <div className="ib-icon">
                                            <img src="img/icons/camera.png" alt=""/>
                                        </div>
                                        <h4>Photography Lover</h4>
                                        <h5>Pure Love</h5>
                                        <p>Cras mattis et augue non mollis. Sed sagittis, turpis a imp-erdiet eleifend, est ligula
                                            convallis augue, sit amet porta urna justo vel neque. Pellentesque a interdum nunc. Nunc
                                            congue eget nisl et laoreet. </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="icon-box">
                                        <div className="ib-icon">
                                            <img src="img/icons/star.png" alt=""/>
                                        </div>
                                        <h4>Star Artists</h4>
                                        <h5>Pure Love</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis.
                                            Sed sagittis, turpis a imper-diet eleifend, est ligula convallis augue, sit amet porta
                                            urna justo vel neque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
}

export default Shop;