import React from "react";
import './style.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const images = require.context('../../../public/images', true)

const About = () => {
    return (
        <div id="about" className="about">
            <img src={images(`./living2.jpg`)} alt="living room" className="aboutImage aboutImg1" />
            <img src={images(`./living3.jpg`)} alt="living room" className="aboutImage aboutImg2" />
            <div className="aboutTitleSection">
                <h2 className="aboutTitle">About Us</h2>
                <span className="aboutTitleLine">―――</span>
            </div>
            <p className="aboutText">Aamir and Hameeda Interior Designers (AANDH) deliver chic, refined interiors with luxurious finishes and occasional bursts of daring colour or modern geometrics. AANDH is headed by the husband wife duo Aamir and Hameeda. Their extensive and versatile body of work ranges from interior design of residences, corporate offices, retail stores and hospitality spaces. They have in the past decade of practice won up to 20 National and Regional Awards for Excellence in Design including the Hafele Trends Excellence Award in Interior Design in 2016 and 2017 and have won many National and Regional Awards by IIID.
                <br></br>
                <br></br>
                Their minimalistic, urban chic designs make them stand apart in the residential and retail space design. They make use of a lot of salvaged recyclable material in their various projects and reinterpret them with a quirky and contemporary design sensibility.</p>

            <section className="aboutCards">
                <h2 className="cardSectionTitle">Aamir & Hameeda</h2>
                <span className="line3">―――</span>
                <div className="card">
                    <img src={images(`./aamir.png`)} alt="aamir" className="aamirHameedaImage" />
                    <div className="cardNameSection">
                        <title className="cardTitle">Aamir Sharma</title>
                        <span className="cardTitleLine">――</span>
                    </div>
                    <p className="cardText">Aamir is a dynamic yet thoughtful designer whose work is invariably modern 'with an eclectic twist'. He likes to describe his designs as 'creative and playful'. He's also a firm believer that good client relationships improve the creative process & executes a slick, modern look or traditional interiors with equal confidence.</p>
                    <div className="icons">
                        <a className="icon" href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
                        <a className="icon" href="https://www.instagram.com/" target="_blank"><BsInstagram /></a>
                        <a className="icon" href="https://www.twitter.com/" target="_blank"><BsTwitter /></a>
                        <span className="iconsLine">――</span>
                        <span className="iconsText">Let's Connect!</span>
                    </div>
                    <img></img>
                </div>
                <div className="card">
                    <img src={images(`./hameeda.png`)} alt="hameeda" className="aamirHameedaImage" />
                    <div className="cardNameSection">
                        <title className="cardTitle">Hameeda Sharma</title>
                        <span className="cardTitleLine">――</span>
                    </div>
                    <p className="cardText">Hameeda likes to deliver a project with a sense of the unexpected, but respecting her client's personalities. She masterminds smart yet subtly glamorous interiors. Their work is about producing contemporary classic design with transitional notes, creating serene, timeless and elegant interiors.</p>
                    <div className="icons">
                        <a className="icon" href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
                        <a className="icon" href="https://www.instagram.com/" target="_blank"><BsInstagram /></a>
                        <a className="icon" href="https://www.twitter.com/" target="_blank"><BsTwitter /></a>
                        <span className="iconsLine">――</span>
                        <span className="iconsText">Let's Connect!</span>
                    </div>
                    <img></img>
                </div>
            </section>

            <section className="factsSection">
                <h3 className="factsTitle">FUN FACTS</h3>
                <div className="funFacts">
                    <div>
                        <p className="factNumber">80k</p>
                        <p className="factText">FOLLOWERS</p>
                    </div>
                    <div>
                        <p className="factNumber">10+</p>
                        <p className="factText">CITIES</p>
                    </div>
                    <div>
                        <p className="factNumber">150+</p>
                        <p className="factText">PROJECTS</p>
                    </div>
                    <div>
                        <p className="factNumber">20+</p>
                        <p className="factText">AWARDS</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About