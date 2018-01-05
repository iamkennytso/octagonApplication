import React from 'react';
import { Link } from 'react-scroll'
import FlatButton from 'material-ui/FlatButton';

const navbar = (props) => {
  return (
    <nav>
      <div id="navbarDiv">
        <img id="navPic" src='./imgs/bannerPic.png' alt="Doublelift" />
        <div id="navLinks">
          <Link activeClass="active" to="sec1" spy={true} smooth={true} duration={500} > <FlatButton label="Top" /></Link>
          <Link activeClass="active" to="sec2" spy={true} smooth={true} duration={500} > <FlatButton label="Test2" /></Link>
          <Link activeClass="active" to="sec3" spy={true} smooth={true} duration={500} > <FlatButton label="Test3" /></Link>
          <Link activeClass="active" to="sec4" spy={true} smooth={true} duration={500} > <FlatButton label="Test4" /></Link>
          <Link activeClass="active" to="sec5" spy={true} smooth={true} duration={500} > <FlatButton label="Test5" /></Link>
        </div>
      </div>
    </nav>
  )
}

export default navbar;