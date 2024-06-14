import React from "react";
import insta from '../Images/insta.png';
import ghub from '../Images/ghub-img.png';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';



export default function Footer() {
    return (
        <div className="img-section">

            <a href="https://x.com/?lang=en">
                <button className="footer-but">
                    <img className="footer-img" src={twitter} alt="tweeter pic"/>
                </button>
            </a>


            <a href="https://www.facebook.com/">
                <button className="footer-but">
                    <img className="footer-img" src={facebook} alt="facebuk pic"/>
                </button>
            </a>


            <a href="https://www.instagram.com/">
                <button className="footer-but">
                    <img className="footer-img" src={insta} alt="insta pic"/>
                </button>
            </a>

            <a href="https://github.com/Devin-Diaz">
                <button className="footer-but">
                    <img className="footer-img" src={ghub} alt="ghub pic"/>
                </button>
            </a>

        </div>
    );
}

