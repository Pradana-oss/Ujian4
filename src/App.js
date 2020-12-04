import './App.css';
import React, { Component } from 'react';
import Home from './component/home'
import MenuLeft from './component/menuleft';
import FillMenu from './component/fillmenu';
import Footer from './component/footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class  App extends Component {

  constructor(props){
    super(props);
      
    this.nourut = 0;

      this.state={
        product:[],
        

        
      };

  }

  componentDidMount(){
    this.getData();

  }

  getData(){
    fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=>{
              
             

              this.setState({
                product:json
              });
            

            })
  }


  render(){
  return (
        <Router>
          
            
            <div class="relative clearfix full-width">
            <Home/>
            {this.state.product.map((element,index) => {
              return <MenuLeft eventClick={this.categ} urut={index} key={element.id} model={element.category} id={element.id} images={element.images}/>
            })}
            
            <FillMenu/>
            <Footer/>
            </div>
          
        </Router>
      );
  }

  categ(model,index){
    this.setState({nourut:this.state.nourut})

    model['urut']=this.state.nourut;
    this.carts.push(model);
    this.setState({cart:this.carts});
    console.log(this.state.cart);
  }
}

export default App;
