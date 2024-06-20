import React from "react";
import earth from "../Images/earth.png"
import "../Styles/Header.css"


export default function Header() {
    return (
        <header className="header--container">
            <img className="header-logo" src={earth} alt="earth logo"/>
            <h1 className="header-title">future travel journal.</h1>
        </header>
    );
}