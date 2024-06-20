import React from "react";
import "../Styles/Location.css";

export default function Location(props) {
    return (
        <div className="card--container">
            <div className="image--section--container">
                <img className="location-image" src={props.item.locationImage} alt="location visual" />
                <div className="info--container">
                    <div className="country--info--container">
                        <img className="pin-image" src={props.item.pinLogo} alt="pinpoint icon" />
                        <h3 className="country-title">{props.item.country}</h3>
                        <a href={props.item.mapLink} target="_blank" rel="noopener noreferrer" className="style-underline">
                            <p className="google-link-text">View on Google Maps</p>
                        </a>
                    </div>
                    <div className="main--data--container">
                        <h1 className="location-name">{props.item.location}</h1>
                        <h2 className="inspo-text">{props.item.inspo}</h2>
                        <p className="location-description">
                            {props.item.text}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="styled-hr"></hr>
        </div>
    );
}
