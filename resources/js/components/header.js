import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Link,Redirect ,Switch} from 'react-router-dom';
import Home from './home';
import Paquetes from './paquetes/index';
import Error404 from './error404';
import About from './about';

export default class Header  extends Component {
    render(){
    return (

        
          <div>
          <header>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-3 logo-column">
                        <Link to="/" className="logo">
                            <img src={ require('../../../estilos/img/logo.jpg')} alt="logo"/>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-9 nav-column clearfix">
                        <div className="right-nav">
                            <span className="search-icon fa fa-search"></span>
                            <form action="#" className="search-form">
                                <input type="search" placeholder="Buscar ahora"/>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                            <div className="header-social">
                                <Link to="#" ><i className="fa fa-facebook"></i></Link>
                                <Link to="#" ><i className="fa fa-twitter"></i></Link>
                                <Link to="#" ><i className="fa fa-github"></i></Link>
                            </div>
                        </div>
                        <nav id="menu" className="d-none d-lg-block">
                            <ul>
                                <li className="current-menu-item has-child">
                                    <Link to="/">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Home - 01</Link></li>
                                     
                                        <li><Link to="index-2.html">Home - 02</Link></li>
                                        <li><Link to="index-3.html">Home - 03</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/paquetes">Portfolio</Link></li>
                                <li className="has-child">
                                    <Link to="#">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/">404</Link></li>
                                        <li><Link to="/">About</Link></li>
                                        <li><Link to="/">Career</Link></li>
                                        <li><Link to="/">Coming Soon</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                        <li><Link to="/">Faq</Link></li>
                                        <li><Link to="/">Portfolio</Link></li>
                                        <li><Link to="/">Pricing</Link></li>
                                        <li><Link to="/">Service</Link></li>
                                        <li><Link to="/">Team</Link></li>
                                        <li><Link to="/">Testimonial</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="contact.html">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>  
       
       
       <Switch>
        <Route exact path="/home/principal" component={Home} />
        <Route exact  path="/about" component={About} />
        <Route exact  path="/paquetes" component={Paquetes} />
        <Route exact path ="/paquetes/add" component={Paquetes} />
        <Route exact path ="/paquetes/editar/:id" component={Paquetes} />
        <Route exact path ="/*" component={Error404} />
        </Switch>
        </div>
       
       
    );
    }
}




