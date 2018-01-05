import React from 'react';

const footer = (props) => {
  return (
    <div id="footerDiv">
      {/* <img id="footerPic" src='./imgs/footer.jpg' alt="footer"/>
      <a href="https://twitter.com/TLdoublelift" id="twitterLink"/>
      <a href="https://www.youtube.com/Doublelift" id="youtubeLink"/>
      <a href="https://www.instagram.com/yiliangpeng/" id="instaLink"/>
      <a href="https://www.facebook.com/DoubleliftOfficial/" id="fbLink"/>
      <div id="footerOtherBack" /> */}
      <div id="footerLeft">
        <p>
          <br/>
          <a href="#" >Contact Us</a> | 
          <a href="#" > Legal Notice</a> | 
          <a href="#" > Terms of Use</a> 
          <br/> 
          All media belongs to their respective owners.<br/> This site is made for educational purposes. <br/> All rights reserved.&nbsp;&nbsp;
        </p>
      </div>
      <div id="footerRight">
        <p>
          <img src="./imgs/twitter.png" /> | <a href="https://twitter.com/TLdoublelift">TLDoublelift</a> <br/>
          <img src="./imgs/youtube.png" /> | <a href="https://www.youtube.com/Doublelift">Doublelift</a> <br/>
          <img src="./imgs/insta.png" /> | <a href="https://www.instagram.com/yiliangpeng/">YiLiangPeng</a> <br/>
          <img src="./imgs/facebook.png" /> | <a href="https://www.facebook.com/DoubleliftOfficial/">DoubleliftOfficial</a> <br/>
        </p>
      </div>
    </div>
  )
}

export default footer;