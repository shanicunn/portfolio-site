import React from 'react';
import image from '../assets/images/markus-spiske--dbOrdtrR1A-unsplash.jpg';

export function AboutMe() {
    return (
        <div className="child about-me">
            <div className="headshot">
                <img className="image" src={image} alt="Gem from unsplash"></img>
            </div>
            <div className="blurb">
                <p>My name is Shani. I'm a software engineer from Boston currently residing in the Greater Atlanta Area.
                I graduated from a Per Scholas software engineer course in 2020 and have an interest in web applications,
                mobile applications, and personal branding!</p>
            </div>
      </div>
    )
}