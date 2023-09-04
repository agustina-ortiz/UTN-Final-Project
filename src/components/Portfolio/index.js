import React from "react";
import './style.css';

const images = require.context('../../../public/images', true)

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolioSection">
            <div className="portfolioBox">
                <title className="portfolioTitle">Our Work</title>
                <ul className="list">
                    <li className="portfolioListBtn"><a>ALL</a></li>
                    <li className="portfolioListBtn"><a>INTERIORS</a></li>
                    <li className="portfolioListBtn"><a>HOUSES</a></li>
                    <li className="portfolioListBtn"><a>OFFICES</a></li>
                    <li className="portfolioListBtn"><a>LANDSCAPE</a></li>
                    <li className="portfolioListBtn"><a>RESIDENTIAL</a></li>
                </ul>
            </div>
            <span className="portfolioLine">――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――</span>

            <div className="row">
                <div className="column">
                    <img src={images(`./photo1.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo2.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo3.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo4.jpg`)} alt="architecture" className="portfolioImg"/>
                </div>
                <div className="column">
                    <img src={images(`./photo5.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo6.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo7.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo8.jpg`)} alt="architecture" className="portfolioImg"/>
                </div>
                <div className="column">
                    <img src={images(`./photo9.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo10.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo11.jpg`)} alt="architecture" className="portfolioImg"/>
                    <img src={images(`./photo12.jpg`)} alt="architecture" className="portfolioImg"/>
                </div>
            </div>


            <button className="loadBtn">Load More</button>
        </div>
    )
}

export default Portfolio