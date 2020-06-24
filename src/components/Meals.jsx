import React, { Component } from 'react';
import '../css/styles.css';
import Meal from './Meal';


class Meals extends Component {
    state = { 
        meals: [
            {id: 1, food: 'Hamburger', vendor: 'Eni Stores', price: 600 },
            {id: 2, food: 'Fried Rice and Chicken', vendor: 'Kilimanjaro', price: 1200},
            {id: 3, food: 'Sharwama', vendor: 'Tasty Bite', price: 500},
            {id: 4, food: 'Amala with Ewedu Soup', vendor: 'Mummy Ola', price: 800}
        ]
     };

    render() { 
        console.log(this.state.meals.length);
        
        
        return (

            <section className="container">
                <div className="card__deck">
                    {this.state.meals.map(meal => <Meal key={meal.id} meal={meal} /> )}
                </div>
            </section>

         );
    }
}
 
export default Meals;