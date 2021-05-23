import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <>
            <ul className="top-nav">
                <li className="demo">DEMO Streaming</li>
                <button>Start your free trial</button>
                <li>Log in</li>
            </ul>
            <ul className="bottom-nav">
                <li className="popular-titles">Popular Titles</li>
            </ul>
        </>
    )
}

export default Nav