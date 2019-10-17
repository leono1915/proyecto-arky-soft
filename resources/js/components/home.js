import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import ReactDOM from 'react-dom';
import Background1 from '../../../estilos/img/slide1.png';
import Background2 from '../../../estilos/img/slide2.jpg';
import Background3 from '../../../estilos/img/slide3.jpg';
export default class Home  extends Component {
      
    constructor(){
        super();
      
       
    }
    render(){
        const style={
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ), url(${Background1})`,
          
        }
        const style2={
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ), url(${Background2})`
        }
        const style3={
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ), url(${Background3})`
        }
        

    return (
       <div>
             
           
          
         
         <div className="hero-slider">
            <div className="single-slide" style={style} >
                <div className="inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="slide-content">
                                    <h2  id="h2">A la vanguardia de Tu negocio.</h2>
                                    <p  id="p">Diseñamos tu pagina web.</p>
                                    <div className="slide-btn">
                                        <a href="#" className="button">Contacto</a>
                                        <a href="#" className="button-2">Leer Más</a>
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
                                    <h2 id="h2">La administración de tu negocio a tu alcance.</h2>
                                    <p id="p" >Haz más eficiente tus tiempos de administracion y ten todo en un solo lugar.</p>
                                    <div className="slide-btn">
                                        <a href="#" className="button">Contacto</a>
                                        <a href="#" className="button-2">Leer Más</a>
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
                                    <h2 id="h2">Las mejores estrategias de Marketing.</h2>
                                    <p id="p">Porque no solo basta con tu página .</p>
                                    <div className="slide-btn">
                                        <a href="#" className="button">Contacto</a>
                                        <a href="#" className="button-2 text-black">Leer Más</a>
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
                   
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                   
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                   
                </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
                <div className="inner">
                  
                </div>
            </div>
        </div>
    </div>
</div>
<div className="service-area bg2 sp">
    <div className="container">
        <div className="section-title">
            <h2>Nuestros Servicios</h2>
            <p>Consulte nuestros servicios seguro tenemos lo que necesita.</p>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-desktop"></i>
                        </div>
                        <h4>Paginas web</h4>
                    </div>
                    <div className="content">
                        <p>Dale presencia a tu negocio colocandolo en internet.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-mobile"></i>
                        </div>
                        <h4>Apps Móviles</h4>
                    </div>
                    <div className="content">
                        <p>Desarrollo de aplicaciones móviles para android y ios.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-keyboard-o"></i>
                        </div>
                        <h4>Desarrollo de software</h4>
                    </div>
                    <div className="content">
                        <p>Necesitas algo específico podemos desarrollarlo.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-bullhorn"></i>
                        </div>
                        <h4>Marketing Digital</h4>
                    </div>
                    <div className="content">
                        <p>Las mejores técnicas para que tu negocio tenga presencia online.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-magic"></i>
                        </div>
                        <h4>E-commerce </h4>
                    </div>
                    <div className="content">
                        <p>Vende tus productos en linea de manera local y nacional.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 single-service">
                <div className="inner">
                    <div className="title">
                        <div className="icon">
                            <i className="fa fa-bar-chart"></i>
                        </div>
                        <h4>Software para administración</h4>
                    </div>
                    <div className="content">
                        <p>Enfocado a los pequeños negocios.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="portfolio-area sp">
    <div className="container">
        <div className="section-title">
            <h2>Nuestros Últimos Trabajos</h2>
            <p>Clientes satisfechos.</p>
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
                <a href="#" className="button">Contacto</a>
            </div>
        </div>
    </div>
</div><div className="testimonial-area sp bg1">
    <div className="container">
        <div className="section-title white">
            <h2>Opiniones de nuestros clientes</h2>
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
            <h2>Preguntas Frecuentes</h2>
            <p>Aun no se convence envíenos un whatsapp o márquenos!.</p>
            <div className="header-social">
                                
                                <Link to="#" ><i className="fa fa-whatsapp fa-3x"></i></Link>
                            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="faq">
                    <div className="single-item">
                        <h4>Hay costos ocultos?</h4>
                        <div className="content">
                          no! nuestros precios son reales no hay trucos engaños o cobros escondidos
                        </div>
                    </div>
                    <div className="single-item">
                        <h4>Mi dominio tiene prefijo de su empresa?</h4>
                        <div className="content">
                            Para nada! el dominio usted lo escoge, y llevara el nombre que usted elija siempre y cuando esté disponible.
                        </div>
                    </div>
                    <div className="single-item">
                        <h4>Puedo escalar mi paquete?</h4>
                        <div className="content">
                           Claro que sí! usted puede cambiar su paquete o en su defecto podemos codificarlo si alguno de nuestros paquetes no cubre
                           sus expectativas.
                        </div>
                    </div>
                    <div className="single-item">
                        <h4>El precio incluye marketing?</h4>
                        <div className="content">
                            No! los precios solo incluyen dominio y hosting ademas de la creación del sitio pero las campañas de marketing son un costo a parte.
                        </div>
                    </div>
                    <div className="single-item">
                        <h4>Por qué rentar en lugar de comprar?</h4>
                        <div className="content">
                           Debido a los costos de dominio desarrollo y diseño la mayoría de las pequeñas empresas o negocios locales que a penas inician no pueden
                           hacer una inversion inicial fuerte, así que, por qué no rentarlo? sin invertir nada como si de una casa se tratase.
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

