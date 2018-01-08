import React from 'react';
import axios from 'axios'
import {List, ListItem} from 'material-ui/List';

class youtubeSec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [{title:'',thumb:''}, {title:'',thumb:''}, {title:'',thumb:''}, {title:'',thumb:''}, ],
      currentVideo: 'xdKT_gn9Szc',
    }
    this.getVideos = this.getVideos.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    this.getVideos()
  }
  
  getVideos() {
    axios.get('getYoutube')
      .then(res => this.setState({
        videos: res.data,
        currentVideo: res.data[0].URL
      }))
  }
  handleClick(num){
    this.setState({
      currentVideo: this.state.videos[num].URL
    })
  }

  render (){
    return (
      <div id="youtubeContainer">
        {/* the playable youtube video */}
        <div id="youtubePlayer">
          <iframe  type="text/html" width="95%" height="95%" allowFullScreen ="allowfullscreen"
            src={`https://www.youtube.com/embed/${this.state.currentVideo}`}
            frameBorder="0">
          </iframe>
        </div>
        {/* first half of the selection list */}
        <List id="youtubeList1" style={{'height':'100%'}}>
          <ListItem className="youtubePrevTop" onClick={()=> this.handleClick(0)}>
            <div style={{'color':'#FFFFFF'}}> {this.state.videos[0].title} </div>
            <div style={{'height':'auto'}}> 
              <img src={this.state.videos[0].thumb} style={{'width':'100%'}} alt="" />
            </div>
          </ListItem>
          <ListItem className="youtubePrevBot" onClick={()=> this.handleClick(1)}>
            <span style={{'color':'#FFFFFF'}}> {this.state.videos[1].title} </span>
            <div style={{'height':'auto'}}> 
              <img src={this.state.videos[1].thumb} style={{'width':'100%'}} alt="" />
            </div>
          </ListItem>
        </List>
        {/* second half of the selection list */}
        <List id="youtubeList2">
          <ListItem className="youtubePrevTop" onClick={()=> this.handleClick(2)}>
            <span style={{'color':'#FFFFFF'}}> {this.state.videos[2].title} </span>
            <div style={{'height':'auto'}}> 
              <img src={this.state.videos[2].thumb} style={{'width':'100%'}} alt="" />
            </div>
          </ListItem>
          <ListItem className="youtubePrevBot" onClick={()=> this.handleClick(3)}>
            <span style={{'color':'#FFFFFF'}}> {this.state.videos[3].title} </span>
            <div style={{'height':'auto'}}> 
              <img src={this.state.videos[3].thumb} style={{'width':'100%'}} alt="" />
            </div>
          </ListItem>
        </List>
        {/* background image */}
        <img id="youtubeBG" src="./imgs/youtubeBG.jpg" alt="Visit Doublelift's Youtube!"  width="100%"/>
        {/* some description text at the bottom? */}
        <p id="youtubeText"> Phasellus elementum, massa ac tristique aliquam, ex tellus commodo neque, sit amet rutrum tellus risus vitae arcu. Aliquam erat volutpat. Aenean sed justo vitae augue vulputate consectetur. Aenean condimentum blandit quam sit amet auctor. Aenean euismod, lacus et commodo viverra, massa felis ullamcorper justo, id consectetur libero risus id nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi varius mi ac urna consequat rhoncus. Pellentesque condimentum mauris et ante vestibulum, ac scelerisque lectus tempor. Sed vehicula aliquam metus. </p>
      </div>
    )
  }
}

export default youtubeSec;