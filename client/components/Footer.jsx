import React from 'react';

const footer = (props) => {
  return (
    <div id="footerContainer">
      {/* See end of file for information about these comments
      <img id="footerPic" src='./imgs/footer.jpg' alt="footer"/>
      <a href="https://twitter.com/TLdoublelift" id="twitterLink"/>
      <a href="https://www.youtube.com/Doublelift" id="youtubeLink"/>
      <a href="https://www.instagram.com/yiliangpeng/" id="instaLink"/>
      <a href="https://www.facebook.com/DoubleliftOfficial/" id="fbLink"/>
      <div id="footerOtherBack" /> */}
      <div id="footerLeft">
        <p>
          <br/>
          <a href="#" onClick={props.show}>Contact Us</a>&nbsp;|&nbsp;
          <a href="#" >Legal Notice</a>&nbsp;|&nbsp;
          <a href="#" >Terms of Use</a> 
          <br/> 
          All media belongs to their respective owners.<br/> This site is made for educational purposes. <br/> All rights reserved.&nbsp;&nbsp;
        </p>
      </div>
      <div id="footerRight">
        <p>
          <img src="./imgs/facebook.png" /> | <a href="https://www.facebook.com/DoubleliftOfficial/">DoubleliftOfficial</a> <br/>
          <img src="./imgs/twitter.png" /> | <a href="https://twitter.com/TLdoublelift">TLDoublelift</a> <br/>
          <img src="./imgs/twitch.png" /> | <a href="https://www.twitch.tv/doublelift">Doublelift</a> <br/>
          <img src="./imgs/youtube.png" /> | <a href="https://www.youtube.com/Doublelift">Doublelift</a> <br/>
          <img src="./imgs/insta.png" /> | <a href="https://www.instagram.com/yiliangpeng/">YiLiangPeng</a> <br/>

        </p>
      </div>
    </div>
  )
}
//Originally I wanted to make the img in public/footer.jpg the footer, and make the links clickable, but it looked really bad in responsive
//without breaking up the individual buttons. It looked tacky as well since there was no feedback that the buttons were clickable. If I wanted
//to spend more time on this, I would have had to photoshop the buttons so on mouseover the colors would change.
export default footer;