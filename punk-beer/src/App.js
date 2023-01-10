
import './App.css';
import { Component } from 'react';
import FavBeer from './components/FavBeer';
import BeerList from './components/BeerList';
import NavigationBar  from './components/NavigationBar';


export default class App extends Component {


  constructor(){
    super();

    this.state = {
      cartItems : 0
    }; 
  }


  onAddToCart = (e) =>{
    this.setState((state) =>({
      cartItems : state.cartItems + 1
    }));
  }


  render(){

  return (
   <div className="App">
    <NavigationBar cartItems = {this.state.cartItems}/>
    <FavBeer onAddToCart={this.onAddToCart} />
    <BeerList/>    
    </div>
 
      
    );
  }
}