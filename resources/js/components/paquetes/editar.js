import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Axios from 'axios';



class Editar  extends Component {
    constructor(props){
        super(props);
        this.state={
           
            nombre:'',
            descripcion:'',
            precio:''
            
        }
    }
    onSubmit(e){
        e.preventDefault();
        const paquetes=this.state/*{
            nombre:this.state.nombre,
            descripcion:this.state.descripcion,
            precio:this.state.precio
        }*/
        console.log(paquetes)
        axios.put('/api/paquetes/editar/'+this.props.match.params.id,paquetes).then(response=>{
            console.log(response);
        })
    }
    onChange(e){
       // console.log(e.target.name)
       this.setState({
        [e.target.name]: e.target.value
       })
    }
    componentDidMount(){
        axios.get('/api/paquetes/editar/'+this.props.match.params.id).then(response=>{
               this.setState({ nombre:response.data.nombre,
                               descripcion:response.data.descripcion,
                            precio: response.data.precio})
               console.log(this.state)
        });
    }
    render(){


    return (
          <div className="container">
             
             <form   onSubmit={this.onSubmit.bind(this)}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">nombre</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""
    name="nombre"
    onChange={this.onChange.bind(this)}
    value={this.state.nombre}
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">descripcion</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""
    name="descripcion"
    onChange={this.onChange.bind(this)}
    value={this.state.descripcion}
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">precio</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""
    name="precio"
    onChange={this.onChange.bind(this)}
    value={this.state.precio}
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
       
    );
    }
}

export default Editar;
