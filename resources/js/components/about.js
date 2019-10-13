import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BacgroundImage1 from '../../../estilos/img/page-title.jpg';
export default class About  extends Component {
    render(){
        const style1={
            backgroundImage: `url(${BacgroundImage1})`
        }
    return (
          <div>
           <div className="page-title sp" style={style1} >
    <div className="container text-center">
        <h2>About Us</h2>
        <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
    </div>
</div>        
    <div className="about-area sp">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="about-content">
                    <h3>USA’s most trusted 3D and graphic designing studio, a very passionate team inside.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                    <p>Exa commodo consequat.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <a href="#" className="button">More about</a>
                </div>
            </div>
            <div className="col-md-6">
                <div className="about-img">
                    <img src={require('../../../estilos/img/about.png')} alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>    <div className="skill-area spb">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="skill-title">
                    <h2>Our skills</h2>
                    <p>Lorem ipsum dolor sit amet conse</p>
                    <a href="#" className="button">See our work</a>
                </div>
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-sm-6 single-skill">
                        <h4>HTML</h4>
                        <div className="barfiller">
                            <span className="tip"></span>
                            <span className="fill" data-percentage="50"></span>
                        </div>
                    </div>
                    <div className="col-sm-6 single-skill">
                        <h4>PHP</h4>
                        <div className="barfiller">
                            <span className="tip"></span>
                            <span className="fill" data-percentage="50"></span>
                        </div>
                    </div>
                    <div className="col-sm-6 single-skill">
                        <h4>JavaScript</h4>
                        <div className="barfiller">
                            <span className="tip"></span>
                            <span className="fill" data-percentage="50"></span>
                        </div>
                    </div>
                    <div className="col-sm-6 single-skill">
                        <h4>CSS</h4>
                        <div className="barfiller">
                            <span className="tip"></span>
                            <span className="fill" data-percentage="50"></span>
                        </div>
                    </div>
                    <div className="col-sm-6 single-skill">
                        <h4>AJAX</h4>
                        <div className="barfiller">
                            <span className="tip"></span>
                            <span className="fill" data-percentage="50"></span>
                        </div>
                    </div>
                    <div className="col-sm-6 single-skill">
                        <h4>Database</h4>
                        <div className="barfiller">
                            <span className="tip"></span>
                            <span className="fill" data-percentage="50"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
<div className="tabs-area spb">
    <div className="container">
        <ul className="nav tabs-nav" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#mission">
                    <i className="fa fa-puzzle-piece"></i>
                    <span>Our Missioin</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#vision">
                    <i className="fa fa-binoculars"></i>
                    <span>Our Vision</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#funds">
                    <i className="fa fa-pie-chart"></i>
                    <span>Investments & Fundings</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#history">
                    <i className="fa fa-qrcode"></i>
                    <span>Our History</span>
                </a>
            </li>

        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="mission" role="tabpanel">
                <div className="row">
                    <div className="col-md-6">
                        <img src="" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <p>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official game Paperboy disked.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. You would need to research online, for newspapers that are in your area.</p>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="vision" role="tabpanel">
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official game Paperboy disked.</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div className="col-md-6">
                            <p>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official game Paperboy disked.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. You would need to research online, for newspapers that are in your area.</p>
                        </div>
                    </div>
            </div>
            <div className="tab-pane fade" id="funds" role="tabpanel">
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official game Paperboy disked.</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="" alt=""/>
                        </div>
                    </div>
            </div>
            <div className="tab-pane fade" id="history" role="tabpanel">
                <div className="row">
                    <div className="col-md-6">
                        <img src="" alt="" />
                        <br/>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    </div>
                    <div className="col-md-6">
                        <p><strong>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official game Paperboy disked.</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. You would need to research online, for newspapers that are in your area.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>    <div className="spb">
        <div className="brand-area">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand1.png')} alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand2.png')} alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand3.png')} alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand4.png')} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>    </div>
        </div>
       
    );
    }
}


