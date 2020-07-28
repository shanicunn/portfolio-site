import React from 'react';
import linkedin from '../assets/my-icons-collection (1)/png/002-linkedin.png';
import github from '../assets/my-icons-collection (1)/png/003-github.png';
import dribbble from "../assets/my-icons-collection (1)/png/004-dribbble.png";
import behance from "../assets/my-icons-collection (1)/png/005-behance.png";
import instagram from "../assets/my-icons-collection (1)/png/001-instagram.png";

export function Footer() {
    return (
        <div className="child footer">
          <img src={linkedin} alt="linkedin"></img>
          <img src={github} alt="github"></img>
          {/* <img src="" alt="angel list"></img> */}
          <img src={dribbble} alt="dribbble"></img>
          <img src={behance} alt="behance"></img>
          <img src={instagram} alt="instagram"></img>
      </div>
    )
}