import React from "react";
import './style.css';
import { BiSolidPhoneCall, BiMenu } from 'react-icons/bi'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <p className="titleText">Aamir & Hameeda</p>
            </div>
            <input type="checkbox" id="check" />
            <label for="check" className="menuIcon">
                <i><BiMenu /></i>
            </label>
            <nav className="nav">
                <ul className="list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#awards">Awards</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="phoneContainer">
                <span className="phoneIcon"><BiSolidPhoneCall /></span>
                <p className="telephone">+91 40 6678 4993</p>
            </div>
        </div>
    )
}

export default NavBar