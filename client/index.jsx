import React from 'react';
import ReactDom from 'react-dom';
import { Element } from 'react-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ContactDialog from './components/ContactDialog.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Youtube from './components/Youtube.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactDialog: false,
    }
    this.handleShowContactDialog = this.handleShowContactDialog.bind(this);
    this.handleCloseContactDialog = this.handleCloseContactDialog.bind(this);
  }
  handleShowContactDialog(e){
    e.preventDefault();
    this.setState({
      showContactDialog:true
    })
  }
  handleCloseContactDialog(e){
    this.setState({
      showContactDialog:false
    })
  }
  render() {
    return (
      <div>
        <ContactDialog open={this.state.showContactDialog} close={this.handleCloseContactDialog} />
        <Navbar />          
        <Element className="section" name='sec1'>
          <Hero />
        </Element>
        <Element className="section" name='sec2'>
          <Youtube />
        </Element>
        <Element className="section" name='sec3'>
          <div>
          Maecenas accumsan pellentesque arcu quis vulputate. Phasellus id imperdiet turpis. Suspendisse eget tellus quam. Morbi in tincidunt ligula. Vestibulum commodo, augue mollis dapibus lacinia, arcu neque mollis lectus, id vehicula quam quam sit amet mauris. Nulla vestibulum lobortis eros, quis placerat eros imperdiet at. Sed rhoncus mauris fringilla, hendrerit purus quis, mollis velit. Duis ut est mattis, suscipit tortor eu, efficitur elit. Donec massa libero, blandit sit amet turpis ac, malesuada placerat tortor. Mauris eu tincidunt nunc.
          </div>
        </Element>
        <Element className="section" name='sec4'>
          <div>
          Suspendisse cursus enim ut nunc lobortis, at luctus ipsum semper. Donec fermentum tortor ut libero sodales mattis. Nulla ornare ultricies sollicitudin. Quisque luctus felis quis laoreet tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum consequat dignissim ipsum, ac sagittis ex fermentum eget. Sed suscipit nulla eu feugiat condimentum. Ut hendrerit hendrerit risus, sit amet dignissim enim sodales sollicitudin. Praesent ut varius enim.
          </div>
        </Element>
        <Element className="section" name='sec5'>
          <div>
          Proin pharetra orci non eros eleifend varius. Aenean consequat quis neque sit amet sodales. Donec hendrerit diam ut ligula efficitur lacinia. Sed ultricies sem vitae quam pretium, et ornare turpis bibendum. Vestibulum iaculis tincidunt nunc ut convallis. Aenean tellus sapien, fermentum a lacus in, semper viverra est. Aenean id est vitae velit porta accumsan eget eget mauris. Sed lacinia risus sit amet vestibulum mattis. Etiam lacinia augue sit amet mollis ornare. Vivamus eu tellus consequat, eleifend justo sed, interdum felis. In porta consequat sapien non tempor. Nullam convallis finibus blandit. Nulla euismod nisl vel magna tempus, at euismod elit ultricies. Etiam hendrerit dapibus leo at convallis.
          </div>
        </Element>
        <Footer show={this.handleShowContactDialog} />
      </div>
    )
  }
}

ReactDom.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
);
