import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link,Redirect ,NavLink,Switch} from 'react-router-dom';
import Home from './home';
import Paquetes from './paquetes/index';
import Error404 from './error404';
import About from './about';

export default class Header  extends Component {


    click(){
        { true?window.location="/home":""}

    }
    clickR(){
        { true?window.location="/register":""}

    }
    clickI(){
        { true?window.location="/":""}

    }
    render(){
    return (

        
          <div>
          <header>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-3 logo-column">
                        <Link to="" 
                        onClick={this.clickI.bind(this)}
                        className="logo">
                            <img src={ require('../../../estilos/img/logo.jpg')} alt="logo"/>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-9 nav-column clearfix">
                        <div className="right-nav">
                            
                            <div className="header-social">
                                <Link to="#" ><i className="fa fa-facebook"></i></Link>
                                <Link to="#" ><i className="fa fa-twitter"></i></Link>
                                <Link to="#" ><i className="fa fa-whatsapp"></i></Link>
                            </div>
                        </div>
                        <nav id="menu" className="d-none d-lg-block">
                            <ul>
                                <li className="current-menu-item has-child">
                                    <Link to="" onClick={this.clickI.bind(this)}>Inicio</Link>
                                    <ul className="sub-menu">                                     
                                        <li><Link to=""  
                                        onClick={this.click.bind(this)}
                                        >Mi Cuenta</Link></li>
                                       <li><Link to="" 
                                        onClick={this.clickR.bind(this)}
                                        >Registrarme</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">Nosotros</Link></li>
                                <li><Link to="/paquetes">Portafolio</Link></li>
                                <li className="has-child">
                                    <Link to="#">Productos</Link>
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
                                <li><Link to="contact.html">Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>  
       
       
       <Switch>
        
        <Route exact path="/" component={Home} />
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



