import React from "react";
import './style.css';
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoIosMail } from 'react-icons/io'

const Contact = () => {
    return (
        <div id="contact" className="contactSection">
            <section>
                <div className="contactSub">
                    <title className="contactTitle">Be In Touch</title>
                    <div className="contactPhoneSection">
                        <span className="contactPhoneIcon"><BiSolidPhoneCall /></span>
                        <p className="contactPhone">+91 40 66784993</p>
                    </div>
                    <div className="contactMailSection">
                        <span className="contactMailIcon"><IoIosMail /></span>
                        <p className="contactMail">design_ah@yahoo.co.in</p>
                    </div>
                </div>
                <span className="contactLine">―――</span>
                <form className="contactForm">
                    <label>
                        <input type="text" placeholder="Name" name="name" className="inputForm" required minLength={3} />
                    </label>
                    <label>
                        <input type="text" placeholder="Email Or Phone" name="email or phone" className="inputForm" required minLength={8} />
                    </label>
                    <label>
                        <input type="text" placeholder="Subject" name="subject" className="inputForm inputBlock" required minLength={4} />
                    </label>
                    <label>
                        <input type="text" placeholder="Message" name="message" className="inputForm inputBlock inputMessage" required minLength={10} />
                    </label>
                    
                    <div className="contactFooter">
                        <label className="contactCheck">
                            I'm not a robot
                            <input required type="checkbox" value="checkbox" name="robot" />
                        </label>
                        <button className="contactButton" type="submit">Send</button>
                    </div>
                </form>
            </section>
            <section className="contactMap">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016890944797!2d-58.386441317634244!3d-34.60373438774618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1693799962291!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    )
}

export default Contact