import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import ReactDOM from 'react-dom';
import Background1 from '../../../estilos/img/slide1.jpg';
import Background2 from '../../../estilos/img/slide2.jpg';
import Background3 from '../../../estilos/img/slide3.jpg';
export default class Home  extends Component {
      
    constructor(){
        super();
      
       
    }
    render(){
        const style={
            backgroundImage: `url(${Background1})`
        }
        const style2={
            backgroundImage: `url(${Background2})`
        }
        const style3={
            backgroundImage: `url(${Background3})`
        }
        

    return (
       <div>
             
           
          
         
         <div className="hero-slider">
            <div className="single-slide" style={style} >
                <div className="inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slide-content">
                                    <h2>We Are Digital Product Design Agency.</h2>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                    <div className="slide-btn">
                                        <a href="#" className="button">Learn More</a>
                                        <a href="#" className="button-2">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slide" style={style2} >
                <div className="inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="slide-content">
                                    <h2>We Are Digital Product Design Agency.</h2>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                    <div className="slide-btn">
                                        <a href="#" className="button">Learn More</a>
                                        <a href="#" className="button-2">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slide" style={style3} >
                <div className="inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slide-content">
                                    <h2>We Are Digital Product Design Agency.</h2>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                    <div className="slide-btn">
                                        <a href="#" className="button">Learn More</a>
                                        <a href="#" className="button-2">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="inner embed-responsive embed-responsive-16by9" data-margin="25px 0 0">
    {  /*<iframe width="560" height="315" src="https://www.youtube.com/embed/GYtUAYYDPo0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="brand-area">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand1.png')}  alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand2.png')}  alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand3.png')}  alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                    <a href="#">
                        <img src={ require('../../../estilos/img/brand4.png')}  alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="service-area bg2 sp">
    <div className="container">
        <div className="section-title">
            <h2>Our Service</h2>
            <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-film"></i>
                        </div>
                        <h4>Video Making</h4>
                    </div>
                    <div className="content">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-camera"></i>
                        </div>
                        <h4>Photography</h4>
                    </div>
                    <div className="content">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-music"></i>
                        </div>
                        <h4>Music Composing</h4>
                    </div>
                    <div className="content">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-bullhorn"></i>
                        </div>
                        <h4>Product Marketing</h4>
                    </div>
                    <div className="content">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-magic"></i>
                        </div>
                        <h4>Video Editing</h4>
                    </div>
                    <div className="content">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-bar-chart"></i>
                        </div>
                        <h4>Presentation</h4>
                    </div>
                    <div className="content">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="portfolio-area sp">
    <div className="container">
        <div className="section-title">
            <h2>Latest Work</h2>
            <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
        </div>
        <div className="row">
            <div className="single-portfolio col-md-4">
                <div className="inner">
                    <div className="portfolio-img">
                        <img src={ require('../../../estilos/img/portfolio1.jpg')} alt="portfolio-image"/>
                        <div className="hover-content">
                            <div>
                                <a href="#" className="button">View Case Study</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <a href="#"><h3>The Back Chiropractor</h3></a>
                        <span>Ceramics, Design</span>
                    </div>
                </div>
            </div>
            <div className="single-portfolio col-md-4">
                <div className="inner">
                    <div className="portfolio-img">
                        <img src={ require('../../../estilos/img/portfolio2.jpg')} alt="portfolio-image"/>
                        <div className="hover-content">
                            <div>
                                <a href="#" className="button">View Case Study</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <a href="#"><h3>The Back Chiropractor</h3></a>
                        <span>Ceramics, Design</span>
                    </div>
                </div>
            </div>
            <div className="single-portfolio col-md-4">
                <div className="inner">
                    <div className="portfolio-img">
                        <img src={ require('../../../estilos/img/portfolio3.jpg')} alt="portfolio-image"/>
                        <div className="hover-content">
                            <div>
                                <a href="#" className="button">View Case Study</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <a href="#"><h3>The Back Chiropractor</h3></a>
                        <span>Ceramics, Design</span>
                    </div>
                </div>
            </div>
            <div className="single-portfolio col-md-4">
                <div className="inner">
                    <div className="portfolio-img">
                        <img src={ require('../../../estilos/img/portfolio4.jpg')} alt="portfolio-image"/>
                        <div className="hover-content">
                            <div>
                                <a href="#" className="button">View Case Study</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <a href="#"><h3>The Back Chiropractor</h3></a>
                        <span>Ceramics, Design</span>
                    </div>
                </div>
            </div>
            <div className="single-portfolio col-md-4">
                <div className="inner">
                    <div className="portfolio-img">
                        <img src={ require('../../../estilos/img/portfolio5.jpg')} alt="portfolio-image"/>
                        <div className="hover-content">
                            <div>
                                <a href="#" className="button">View Case Study</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <a href="#"><h3>The Back Chiropractor</h3></a>
                        <span>Ceramics, Design</span>
                    </div>
                </div>
            </div>
            <div className="single-portfolio col-md-4">
                <div className="inner">
                    <div className="portfolio-img">
                        <img src={ require('../../../estilos/img/portfolio6.jpg')} alt="portfolio-image"/>
                        <div className="hover-content">
                            <div>
                                <a href="#" className="button">View Case Study</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <a href="#"><h3>The Back Chiropractor</h3></a>
                        <span>Ceramics, Design</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center" data-margin="40px 0 0">
                <a href="#" className="button">More Works</a>
            </div>
        </div>
    </div>
</div><div className="testimonial-area sp bg1">
    <div className="container">
        <div className="section-title white">
            <h2>Clients Review</h2>
            <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
        </div>
        <div className="testimonial-slider">
            <div className="single-slide">
                <div className="inner">
                    <p>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official.</p>
                    <div className="client-info">
                        <div className="client-img">
                            <img src={ require('../../../estilos/img/client.jpg')} alt="client"/>
                        </div>
                        <div className="client-data">
                            <h4>Jhon Doe</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slide">
                <div className="inner">
                    <p>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official.</p>
                    <div className="client-info">
                        <div className="client-img">
                            <img src={ require('../../../estilos/img/client.jpg')} alt="client"/>
                        </div>
                        <div className="client-data">
                            <h4>Jhon Doe</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slide">
                <div className="inner">
                    <p>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official.</p>
                    <div className="client-info">
                        <div className="client-img">
                            <img src={ require('../../../estilos/img/client.jpg')} alt="client"/>
                        </div>
                        <div className="client-data">
                            <h4>Jhon Doe</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slide">
                <div className="inner">
                    <p>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video official.</p>
                    <div className="client-info">
                        <div className="client-img">
                            <img src={ require('../../../estilos/img/client.jpg')} alt="client"/>
                        </div>
                        <div className="client-data">
                            <h4>Jhon Doe</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div className="faq-area sp bg2">
    <div className="container">
        <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="faq">
                    <div className="single-item">
                        <h4>Low Cost Advertising Available or Not?</h4>
                        <div className="content">
                            Pellentesque habitant morbi tristique senectus et netus et malesu ada fames and reply to all.
                        </div>
                    </div>
                    <div className="single-item">
                        <h4>What Is The Big R For Marketing Your Business?</h4>
                        <div className="content">
                            Pellentesque habitant morbi tristique senectus et netus et malesu ada fames and reply to all.
                        </div>
                    </div>
                    <div className="single-item">
                        <h4>Does Using Banner Stands Increase Trade Show Traffic?</h4>
                        <div className="content">
                            Pellentesque habitant morbi tristique senectus et netus et malesu ada fames and reply to all.
                        </div>
                    </div>
                    <div className="single-item">
                        <h4>How To Write Better Advertising Copy?</h4>
                        <div className="content">
                            Pellentesque habitant morbi tristique senectus et netus et malesu ada fames and reply to all.
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="faq-img text-center">
                    <img src={ require('../../../estilos/img/fag-img.png')}  alt="faq"/>
                </div>
            </div>
        </div>
    </div>
</div>  

   </div>
    );

    }
}


//ReactDOM.render(<Home />, document.getElementById('home'));

