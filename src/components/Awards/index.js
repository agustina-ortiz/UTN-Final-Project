import React from "react";
import './style.css';
import { GoTrophy } from 'react-icons/go'

const Awards = () => {
    return (
        <div id="awards" className="awardsSection">
            <title className="awardTitle">Awards</title>
            <span className="awardLine">―――</span>
            <div className="awardsCards">
                <div className="awardCard">
                    <div className="trophyTitle">
                        <span className="trophy"><GoTrophy /></span>
                        <p className="awardYear">2016</p>
                    </div>
                    <h3 className="awardCardTitle">Trends Excellence</h3>
                    <p className="awardCardText">For Interior Design And Retail Interiors</p>
                    <span className="cardLine">――</span>
                </div>
                <div className="awardCard">
                    <div className="trophyTitle">
                        <span className="trophy"><GoTrophy /></span>
                        <p className="awardYear">2008</p>
                    </div>
                    <h3 className="awardCardTitle">IIID National</h3>
                    <p className="awardCardText">Thai House</p>
                    <span className="cardLine">――</span>
                </div>
                <div className="awardCard">
                    <div className="trophyTitle">
                        <span className="trophy"><GoTrophy /></span>
                        <p className="awardYear">2010</p>
                    </div>
                    <h3 className="awardCardTitle">Society Interior</h3>
                    <p className="awardCardText">Best Firm (South)</p>
                    <span className="cardLine">――</span>
                </div>
            </div>
            <div className="awardsBtnSection">
                <button className="awardBtn"><a href="#portfolio">PREV</a></button>
                <span className="line2">―――</span>
                <button className="awardBtn"><a href="#contact">NEXT</a></button>
            </div>
        </div>
    )
}

export default Awards