import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BacgroundImage1 from '../../../../estilos/img/page-title.jpg';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import NumericInput from 'react-numeric-input';


class Listar   extends Component {
    constructor(){
        super();
        this.state={
            paquetes:[
                {
                nombre:'',
                descripcion:'',
                precio:'',
                id:''
                }
            ],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:5,
           
            
        }
    }
    componentDidMount(){
        axios.get('/api/paquetes').then(response=>{
               this.setState({ paquetes:response.data.data,               
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
              activePage:response.data.current_page})
        });
    }
    onDelete(id){
         axios.delete('/api/paquetes/delete/'+id).then(response=>{
             var paquetes=this.state.paquetes;
                 for(var i=0;i<this.state.paquetes.length;i++){
                     if(paquetes[i].id==id){
                        paquetes.splice(i,1);
                         this.setState({paquetes:paquetes})
                     }
                 }
         })
     
    }
   onclick(e){
       console.log(e)
       console.log(this.state.paquetes[e].id)
      
       this.setState(estate=>{
                const list=estate.paquetes.map((item,j)=>{
                    if(j===e){
                       return item.id++;
                    }else{
                        return item
                    }
                })
                return {
                    list,
                }
       })
        
   }
   onclickDown(e){
    console.log(e)
    console.log(this.state.paquetes[e].id)
   if(this.state.paquetes[e].id==1) return;
    this.setState(estate=>{
             const list=estate.paquetes.map((item,j)=>{
                 if(j===e){
                     item.id--;
                     item.nombre="hola soy otro";
                    return item;
                 }else{
                     return item
                 }
             })
             return {
                 list,
             }
    })
     
}
    nombre(e){
      
        return this.onclick(e)
        //console.log(e.target.value+"segund"+this.state.paquetes.map)

    }
   
   handlePageChange(pageNumber){
       console.log(`activate page is ${pageNumber}`);
       axios.get('/api/paquetes?page='+pageNumber).then(response=>{
        this.setState({ paquetes:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
          activePage:response.data.current_page})
        
   });
      
   }
    render(){
        const style1={
            backgroundImage: `url(${BacgroundImage1})`
        }
    return (
          <div>

   <div className="container">
  
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th colSpan="2" scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
 {   
     this.state.paquetes.map((e,index)=> {
   
        
     return(
    <tr   key={index}> 
      <th scope="row" >{index}</th>
      <td>{e.nombre}</td>
      <td>{e.descripcion}</td>
      <td>{e.precio}</td>
      <td > <button className="btn btn-danger"
      onClick={this.onDelete.bind(this,e.id)}
      >Eliminar</button>
      <Link to= {`/paquetes/editar/${e.id}`} className="btn btn-success" 
    //  onClick={this.onUpdate.bind(this,e.id)}
      >Actualizar</Link>
      </td>
      <td><button className=" btn btn-primary"
      onClick={this.onclickDown.bind(this,index)}
      >
         
           disminuir</button> <input type="text"   value={this.state.paquetes[index].id}
      onChange={this.nombre.bind(this)}
    
      // onClick={this.nombre.bind(this,index)}
      /><button className=" btn btn-primary"
      onClick={this.onclick.bind(this,index)}
      >
         
           aumentar</button></td>
     </tr>  )
     
     
})
 }
  </tbody>
</table>
<div className="d-flex justify-content-center">
    <Pagination    
     activePage={this.state.activePage}
     itemsCountPerPage={this.state.itemsCountPerPage}
     totalItemsCount={this.state.totalItemsCount}
     pageRangeDisplayed={this.pageRangeDisplayed}
     onChange={this.handlePageChange.bind(this)}
     itemClass="page-item"
     linkClass="page-link"

    />

  
</div>
</div>
               <div className="page-title sp" style={style1} >
    <div className="container text-center">
        <h2>About Us</h2>
        <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
    </div>
</div>   
             <div className="pricing-area sp ">
    <div className="container">
        <div className="section-title">
            <h2>See our Pricings</h2>55
            <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
        </div>
        <div className="row">
            <div className="col-md-6 col-lg-4 single-pricing">
                <div className="inner">
                   <div className="title">
                        <h2>Free</h2>
                        <div className="price">
                            <span>$29</span>
                            <span>2 month</span>
                        </div>
                   </div>
                   <ul>
                       <li>5GB Storage</li>
                        <li>1GB RAM</li>
                        <li>400GB Bandwidth</li>
                        <li>10 Email Address</li>
                        <li>Forum Support</li>
                   </ul>
                   <a href="#" className="button">Sign Up</a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 single-pricing active">
                <div className="inner">
                   <div className="title">
                        <h2>Free</h2>
                        <div className="price">
                            <span>$29</span>
                            <span>2 month</span>
                        </div>
                   </div>
                   <ul>
                       <li>5GB Storage</li>
                        <li>1GB RAM</li>
                        <li>400GB Bandwidth</li>
                        <li>10 Email Address</li>
                        <li>Forum Support</li>
                   </ul>
                   <a href="#" className="button">Sign Up</a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 single-pricing">
                <div className="inner">
                   <div className="title">
                        <h2>Free</h2>
                        <div className="price">
                            <span>$29</span>
                            <span>2 month</span>
                        </div>
                   </div>
                   <ul>
                       <li>5GB Storage</li>
                        <li>1GB RAM</li>
                        <li>400GB Bandwidth</li>
                        <li>10 Email Address</li>
                        <li>Forum Support</li>
                   </ul>
                   <a href="#" className="button">Sign Up</a>
                </div>
            </div>
        </div>
    </div>
</div>




<div className="pricing-area sp bg2">
    <div className="container">
        <div className="section-title">
            <h2>See our Pricings</h2>
            <p>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
        </div>
        <div className="row">
            <div className="col-md-6 col-lg-3 single-pricing-2">
                <div className="inner">
                   <div className="title">
                        <h2>Free</h2>
                        <div className="price">
                            <span>$29</span>
                            <span>2 month</span>
                        </div>
                   </div>
                   <ul>
                       <li>5GB Storage</li>
                        <li>1GB RAM</li>
                        <li>400GB Bandwidth</li>
                        <li>10 Email Address</li>
                        <li>Forum Support</li>
                   </ul>
                   <a href="#" className="button">Sign Up</a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 single-pricing-2 active">
                <div className="inner">
                   <div className="title">
                        <h2>Free</h2>
                        <div className="price">
                            <span>$29</span>
                            <span>2 month</span>
                        </div>
                   </div>
                   <ul>
                       <li>5GB Storage</li>
                        <li>1GB RAM</li>
                        <li>400GB Bandwidth</li>
                        <li>10 Email Address</li>
                        <li>Forum Support</li>
                   </ul>
                   <a href="#" className="button">Sign Up</a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 single-pricing-2">
                <div className="inner">
                   <div className="title">
                        <h2>Free</h2>
                        <div className="price">
                            <span>$29</span>
                            <span>2 month</span>
                        </div>
                   </div>
                   <ul>
                       <li>5GB Storage</li>
                        <li>1GB RAM</li>
                        <li>400GB Bandwidth</li>
                        <li>10 Email Address</li>
                        <li>Forum Support</li>
                   </ul>
                   <a href="#" className="button">Sign Up</a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 single-pricing-2">
                <div className="inner">
                   <div className="title">
                        <h2>Free</h2>
                        <div className="price">
                            <span>$29</span>
                            <span>2 month</span>
                        </div>
                   </div>
                   <ul>
                       <li>5GB Storage</li>
                        <li>1GB RAM</li>
                        <li>400GB Bandwidth</li>
                        <li>10 Email Address</li>
                        <li>Forum Support</li>
                   </ul>
                   <a href="#" className="button">Sign Up</a>
                </div>
            </div>
        </div>
    </div>
</div>  
        
        </div>
       
    );
    }
}

export default Listar;