import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';



import ReactDOM from 'react-dom';


import Header from './header';
import Footer from './footer';


class Index   extends Component {
    render(){
    return (
          <div>
              <Header/>

            
              <Footer/>
        
        </div>
       
    );
    }
}

export default Index;

if (document.getElementById('example')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('example'));
  
}
