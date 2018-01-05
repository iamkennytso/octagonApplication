import React from 'react';
import { Link } from 'react-scroll'

const navbar = (props) => {
  return (
    <nav>
      <div id="navbarDiv">
        <img id="navPic" src='./imgs/bannerPic.png' alt="Doublelift" />
        <div id="navLinks">
          <Link activeClass="active" to="sec1" spy={true} smooth={true} duration={500} > <button type="button" className="btn btn-light">Top</button></Link>
          <Link activeClass="active" to="sec2" spy={true} smooth={true} duration={500} > <button type="button" className="btn btn-light">Test 2</button></Link>
          <Link activeClass="active" to="sec3" spy={true} smooth={true} duration={500} > <button type="button" className="btn btn-light">Test 3</button></Link>
          <Link activeClass="active" to="sec4" spy={true} smooth={true} duration={500} > <button type="button" className="btn btn-light">Test 4</button></Link>
          <Link activeClass="active" to="sec5" spy={true} smooth={true} duration={500} > <button type="button" className="btn btn-light">Test 5</button></Link>
        </div>
      </div>
    </nav>
  )
}

export default navbar;