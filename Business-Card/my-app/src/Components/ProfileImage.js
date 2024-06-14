import React from "react";
import '../index.css';
import headshot from '../Images/headshot.jpg';


export default function ProfileImage() {
    return (
        <div className="image-section">
            <img className="profile-pic" src={headshot} alt="profile"/>
        </div>
    )
}