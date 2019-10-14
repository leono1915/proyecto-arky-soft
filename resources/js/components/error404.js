import React, {Component} from 'react';
import {  Link } from 'react-router-dom'
import Background1 from '../../../estilos/img/404-bg.png';

export default class Error404  extends Component {
    render(){
        const style={
            backgroundImage: `url(${Background1})`
        }
    return (
          <div>
            
            <div className="error-area" style={style}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-8">
                <h1>Ups! la página solicitada no existe</h1>
                <Link to="/" className="button">Regresar</Link>
            </div>
        </div>
    </div>
</div> 
        
        </div>
       
    );
    }
}
