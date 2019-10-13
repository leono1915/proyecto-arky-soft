import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';
import Listar  from './listar';
import Agregar from './agregar';
import Editar from './editar';
class Paquetes  extends Component {
    render(){
    return (
          <div>
          
            <div>
                   <Link to ="/paquetes" className="btn btn-primary" > Listar </Link>
                   <Link to ="/paquetes/add" className="btn btn-warning" > Agregar </Link>
                   <Route exact path ="/paquetes" component={Listar} />
                   <Route exact path ="/paquetes/add" component={Agregar} />
                   <Route exact path ="/paquetes/editar/:id" component={Editar} />

            </div> 
               
            
        
        </div>
       
    );
    }
}

export default Paquetes;