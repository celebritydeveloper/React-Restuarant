import React, { Component } from 'react';
import '../css/styles.css';
import Meal from './Meal';


class App extends Component {
    state = { 
        cart: [
            {id: 1, value: 0},
            {id: 1, value: 0},
            {id: 1, value: 0},
            {id: 1, value: 0}
        ]
     };
    render() { 
        console.log(this.state.cart.map(val => val.value));
        return ( 
            <div>
                <Meal value={this.state.cart.value}/>
            </div>
         );
    }
}
 
export default App;