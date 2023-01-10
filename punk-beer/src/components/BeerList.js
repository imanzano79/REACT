import {Row} from 'reactstrap'; 
import {beers} from "../shared/beer.catalog"; 
import Beer from "./Beer";
import { Component } from 'react';
import BeerSearch from './BeerSearch';



export default class BeerList extends Component {



    constructor(){
        super();
        this.state = {
          filter : ""
        }
        console.log("on constructor()..") ;
      }
 
      onfilterBeer = (e) =>{
            this.setState({
                filter : e.target.value.toUpperCase()

            });
      }


      render(){
            //Mount
            //Update

            console.log("on render...");

     
            
    const beerList = beers.map(
    beer => <Beer key = {beer.key} img = {beer.img} title={beer.title} 
    descripcion = {beer.descripcion}  price = {beer.price}/>
);


return (

    <div>
        <BeerSearch filter={this.state.filter} onfilterBeer={this.onfilterBeer}/>
        <Row className='mt-4'>
            {beerList}
        </Row>

    </div>
    
    )

   }





componentDidMount(){
    console.log("on commponentDidMount....");
}

componentDidUpdate(){
    console.log("on commponentDidUpdate....");
}

componentWillUnmount(){
    console.log("on componentWillUnmount....");
}

}
