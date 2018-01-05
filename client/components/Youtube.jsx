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
      <List id="youtubeList1" style={{'height':'100%'}}>
        <ListItem className="youtubePrevTop" >
          <div style={{'color':'#FFFFFF'}}> Doublelift - He's really not worth any gold now..." </div>
          <div style={{'height':'auto'}}> 
            <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" style={{'width':'100%'}} alt="" />
          </div>
        </ListItem>
        <ListItem className="youtubePrevBot">
          <span style={{'color':'#FFFFFF'}}> Doublelift - He's really not worth any gold now..." </span>
          <div style={{'height':'auto'}}> 
            <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" style={{'width':'100%'}} alt="" />
          </div>
        </ListItem>
      </List>

      <List id="youtubeList2">
        <ListItem className="youtubePrevTop" onClick={()=>console.log('hello')}>
          <span style={{'color':'#FFFFFF'}}> Doublelift - He's really not worth any gold now..." </span>
          <div style={{'height':'auto'}}> 
            <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" style={{'width':'100%'}} alt="" />
          </div>
        </ListItem>
        <ListItem className="youtubePrevBot">
          <span style={{'color':'#FFFFFF'}}> Doublelift - He's really not worth any gold now..." </span>
          <div style={{'height':'auto'}}> 
            <img src="https://i.ytimg.com/vi/_a8VKtrFnAc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1i6c3pl0yqHdWMU_bFR45UIThPQ" style={{'width':'100%'}} alt="" />
          </div>
        </ListItem>
      </List>
      
      <img id="youtubeBG" src="./imgs/youtubeBG.jpg" alt="Visit Doublelift's Youtube!"  width="100%"/>
      <p id="youtubeText"> Phasellus elementum, massa ac tristique aliquam, ex tellus commodo neque, sit amet rutrum tellus risus vitae arcu. Aliquam erat volutpat. Aenean sed justo vitae augue vulputate consectetur. Aenean condimentum blandit quam sit amet auctor. Aenean euismod, lacus et commodo viverra, massa felis ullamcorper justo, id consectetur libero risus id nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi varius mi ac urna consequat rhoncus. Pellentesque condimentum mauris et ante vestibulum, ac scelerisque lectus tempor. Sed vehicula aliquam metus. </p>
    </div>
  )
}

export default youtubeSec;