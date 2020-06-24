import React, { Component } from 'react';
import food from '../image/burger.jpg';
import Icofont from 'react-icofont';

class Meal extends Component {
    state = { 
        meal: this.props.meal
     }

    handleIncrement = (id, vendor, price) => {
        console.log("It works", id, vendor, price );
    }
    render() {        
        return ( 
            <div className="card">
                <img src={food} className="card--img-top" alt="..." />
                    <div className="card__body">
                        <h5 className="card--title">{this.props.meal.food}</h5>
                        <p className="card--text">{this.props.meal.vendor}</p>
                        <div className="card__footer">
                            <div className="card__stars">
                                <span><i className="icofont-star"></i></span>
                                <span><i className="icofont-star"></i></span>
                                <span><i className="icofont-star"></i></span>
                                <span><i className="icofont-star"></i></span>
                                <span><i className="icofont-star"></i></span>
                            </div>
                            <p className="card--price">{`N${this.props.meal.price}`}</p>
                        </div>
                            <button className="btn btn-success" onClick={() => this.handleIncrement(this.props.meal.food,this.props.meal.vendor,this.props.meal.price)}>Add to Cart</button>
                    </div>
                </div>
         );
    }
}
 
export default Meal;