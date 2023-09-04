import React from "react";
import './style.css';

const images = require.context('../../../public/images', true)

const Home = () => {
    return (
        <div id="home" className="home">
            <img src={images(`./home.png`)} alt="living room" className="homeImage" />
            <div className="subtitleContainer">
                <h3 className="homeSubtitle">INTERIOR DESIGN</h3>
                <span className="homeLine">―――</span>
            </div>
            <h1 className="homeTitle">Creating Meaning</h1>
            <p className="homeText">We are an interdisciplinary team that aspires to craft spaces that address rhe emerging future of work, leisure and living, and the manner in which we build.</p>
            <button className="portfolioBtn"><a href="#portfolio">View Portfolio <span className="arrow">🡥</span></a></button>
            <div className="btnSection">
                <button className="homeBtn">PREV</button>
                <span className="line2">―――</span>
                <button className="homeBtn"><a href="#about">NEXT</a></button>
            </div>
        </div>
    )
}

export default Home