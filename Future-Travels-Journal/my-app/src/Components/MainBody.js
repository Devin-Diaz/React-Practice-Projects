import React from "react";
import Location from "./Location";
import '../Styles/MainBody.css'
import data from '../Components/data.js'


export default function MainBody() {
    
    const cards = data.map(item => {
        return (
            <Location
                key = {item.key}
                item = {item}
            />
        )
    })


    return (
        <div className="main--body--container">
            {cards}
        </div>
    )
}