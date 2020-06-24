import React, { Component } from 'react';
import food from '../image/burger.jpg';
import Icofont from 'react-icofont';

class Meal extends Component {
    state = {  }

    
    render() {
        return ( 
            <section className="container">
                <div className="card__deck">
                    <div className="card">
                        <img src={food} className="card--img-top" alt="..." />
                        <div className="card__body">
                            <h5 className="card--title">Hamburger</h5>
                            <p className="card--text">Market Square</p>
                            <div className="card__footer">
                                <div className="card__stars">
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                </div>
                                <p className="card--price">N900</p>
                            </div>
                            <button className="btn btn-success">Add to Cart</button>
                        </div>
                    </div>

                    <div className="card">
                            <img src={food} className="card--img-top" alt="..." />
                        <div className="card__body">
                            <h5 className="card--title">Fried Rice and Chicken</h5>
                            <p className="card--text">Kilimanjaro</p>
                            <div className="card__footer">
                                <div className="card__stars">
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                </div>
                                <p className="card--price">N1200</p>
                            </div>
                            <button className="btn btn-success">Add to Cart</button>
                        </div>
                    </div>

                    <div className="card">
                        <img src={food} className="card--img-top" alt="..." />
                        <div className="card__body">
                            <h5 className="card--title">Amala and Ewedu Soup</h5>
                            <p className="card--text">Mummy Ola Cateen</p>
                            <div className="card__footer">
                                <div className="card__stars">
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                </div>
                                <p className="card--price">N600</p>
                            </div>
                            <button className="btn btn-success">Add to Cart</button>
                        </div>
                    </div>

                    <div className="card">
                        <img src={food} className="card--img-top" alt="..." />
                        <div className="card__body">
                            <h5 className="card--title">Amala and Ewedu Soup</h5>
                            <p className="card--text">Mummy Ola Cateen</p>
                            <div className="card__footer">
                                <div className="card__stars">
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                    <span><i className="icofont-star"></i></span>
                                </div>
                                <p className="card--price">N600</p>
                            </div>
                            <button className="btn btn-success">Add to Cart</button>
                        </div>
                    </div>
                        
                </div>
            </section>
         );
    }
}
 
export default Meal;