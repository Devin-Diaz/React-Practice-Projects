import React from "react";
import email from '../Images/email.png'
import linkedin from '../Images/linkedin.png'


export default function Introduction() {
    return (
        <div className="intro-container">
            <h1 className="name">Devin Diaz</h1>
            <p className="title-pos">CS Student</p>
            <p className="ghub-link">https://github.com/Devin-Diaz</p>

            <div className="buttons-container">
                <a href="jasontodd7@gmail.com">
                    <button className="email-button">
                        <img className="email-pic" src={email} alt="email pic" />
                        <span>Email</span>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/diazdevin/">
                    <button className="linkedin-button">
                        <img className="linked-pic" src={linkedin} alt="linkedin img" />
                            <span>Linkedin</span>
                    </button>
                </a>
            </div>
        </div>
    )
}