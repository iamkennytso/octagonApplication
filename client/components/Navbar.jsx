import React from 'react';
import { Link } from 'react-scroll'
import FlatButton from 'material-ui/FlatButton';

const navbar = (props) => {
  return (
    <nav>
      <div id="navbarContainer">
        <img id="navPic" src='./imgs/bannerPic.png' alt="Doublelift" />
        <div id="navLinks">
          <Link activeClass="active" to="sec1" spy={true} smooth={true} duration={500} > <FlatButton label="Top" /></Link>
          <Link activeClass="active" to="sec2" spy={true} smooth={true} duration={500} > <FlatButton label="Youtube" /></Link>
          <Link activeClass="active" to="sec3" spy={true} smooth={true} duration={500} > <FlatButton label="Sec 3" /></Link>
          <Link activeClass="active" to="sec4" spy={true} smooth={true} duration={500} > <FlatButton label="Sec 4" /></Link>
          <Link activeClass="active" to="sec5" spy={true} smooth={true} duration={500} > <FlatButton label="Sec 5" /></Link>
        </div>
      </div>
    </nav>
  )
}

export default navbar;