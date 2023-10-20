// src/components/RoundedRectangle.js

import React from 'react';
import { Link } from 'react-router-dom';


function RoundedRectangle({ imgSrc, title, paragraphText, buttonText, buttonLink }) {
    return (
        <div className="rounded-rectangle">
            <img src={imgSrc} alt="Rounded Rect" className="rounded-rectangle-image" />
            <h2 className="rectangle-title">{title}</h2>
            <p className="rectangle-paragraph">{paragraphText}</p>
            <Link to={buttonLink}>
                <button className="rectangle-button" >{buttonText}</button>
            </Link>
        </div>
    );
}

export default RoundedRectangle;
