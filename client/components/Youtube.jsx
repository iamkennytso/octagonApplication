import React from 'react';
import {List, ListItem} from 'material-ui/List';

const youtubeSec = (props) => {
  return (
    <div id="youtubeContainer">
      <div id="youtubePlayer">
        <iframe  type="text/html" width="95%" height="95%" allowFullScreen ="allowfullscreen"
          src="http://www.youtube.com/embed/j90HdKkqpGY"
          frameBorder="0">
        </iframe>
      </div>
      <div id="youtubeList1">
        <List>
          <ListItem>
          <p style={{'color':'#FFFFFF'}}> Doublelift - He's really not worth any gold now..." </p><br/>
          <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" height="100%" alt="" />
          </ListItem>
          <ListItem>
          <p style={{'color':'#FFFFFF'}}>Doublelift - He's really not worth any gold now..." </p> <br/>
          <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" height="100%" alt="" />
          </ListItem>
        </List>
      </div>
      <div id="youtubeList2">
        <List>
          <ListItem>
          <p style={{'color':'#FFFFFF'}}> Doublelift - He's really not worth any gold now..." </p><br/>
          <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" height="100%" alt="" />
          </ListItem>
          <ListItem>
          <p style={{'color':'#FFFFFF'}}>Doublelift - He's really not worth any gold now..." </p> <br/>
          <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" height="100%" alt="" />
          </ListItem>
        </List>
      </div>
      <img id="youtubeBG" src="./imgs/youtubeBG.jpg" alt="Visit Doublelift's Youtube!"  width="100%"/>
      <p id="youtubeText"> Phasellus elementum, massa ac tristique aliquam, ex tellus commodo neque, sit amet rutrum tellus risus vitae arcu. Aliquam erat volutpat. Aenean sed justo vitae augue vulputate consectetur. Aenean condimentum blandit quam sit amet auctor. Aenean euismod, lacus et commodo viverra, massa felis ullamcorper justo, id consectetur libero risus id nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi varius mi ac urna consequat rhoncus. Pellentesque condimentum mauris et ante vestibulum, ac scelerisque lectus tempor. Sed vehicula aliquam metus. </p>
    </div>
  )
}

export default youtubeSec;