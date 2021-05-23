import React from 'react';
import { NavLink } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="button-container">
            <NavLink exact to="/Series">
                <div>
                    <div className="series-container">
                        <div className="reel-div">
                            <img className="reel" src={placeholder} alt="placeholder"/>
                        </div>
                        <h2 className="center">SERIES</h2>
                    </div>
                    <h4 className="text-below">Popular Series</h4>
                </div>
            </NavLink> 
            <NavLink exact to="/Movies">
                <div className="series-container">
                    <div className="reel-div">
                        <img className="reel" src={placeholder} alt="placeholder"/>
                    </div>
                    <h2 className="center">MOVIES</h2>
                </div>
                <h4 className="text-below">Popular Movies</h4>
            </NavLink>
        </div>
    )
}

export default Home;