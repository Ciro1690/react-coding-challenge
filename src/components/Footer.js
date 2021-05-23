import React from 'react';
import fb from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import insta from '../assets/social/instagram-white.svg'
import app from '../assets/store/app-store.svg'
import play from '../assets/store/play-store.svg'
import windows from '../assets/store/windows-store.svg'
import '../styles/Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-options col">
                <h4>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</h4>
                <h4>Copyright 2016 DEMO Streaming, All Rights Reserved.</h4> 
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="row">
                <div className="social">
                    <img src={fb} alt="fb"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={insta} alt="insta"/>
                </div>
            </div>
            <div className="row">
                <div className="store col">
                    <img src={app} alt="app"/>
                    <img src={play} alt="play"/>
                    <img src={windows} alt="windows"/>
                </div>
            </div>
        </div>
    )
}

export default Footer