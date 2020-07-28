import React from 'react';
import logo from '../assets/images/algorithm.png';

export function Header() {
    return (
        <div className="child header">
        <img className="logo" src={logo} alt=""></img>
        <h1>Web Design by Shani</h1>
      </div>
    )
}