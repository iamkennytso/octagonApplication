import React from 'react';
import axios from 'axios'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import USstates from './../../server/states.js'

class dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zip: '',
      firstNameV: false,
      lastNameV: false,
      emailV: false,
      zipV: false,
      chosenState: '',
      dropDownVal: 0,
      errorCount: 0,
      snackbar: false
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleZip = this.handleZip.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleFirstName(e,v){
    this.setState({firstName:v})
    if (/^[a-zA-Z]+$/.test(v)) {
      this.setState({firstNameV:true})
    } else this.setState({firstNameV:false})
  }
  handleLastName(e,v){
    this.setState({lastName:v})
    if (/^[a-zA-Z"'"-]+$/.test(v)) {
      this.setState({lastNameV:true})
    } else this.setState({lastNameV:false})
  }
  handleEmail(e,v){
    this.setState({email:v})
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)) {
      this.setState({emailV:true})
    } else this.setState({emailV:false})
  }
  handleState(e,i){
    this.setState({
      chosenState: USstates.states[i],
      dropDownVal: i
    })
  }
  handleZip(e,v){
    this.setState({zip:v})
    if (/^\d{5}$/.test(v)) {
      this.setState({zipV:true})
    } else this.setState({zipV:false})
  }
  handleSubmit(){
    if(this.state.firstNameV && this.state.lastNameV && this.state.emailV && this.state.zipV && this.state.dropDownVal !== 0){
      axios.post('contactForm', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        zip: this.state.zip,
        state: this.state.chosenState
      })
    } else {
      this.setState({
        errorCount: this.state.firstNameV + this.state.lastNameV + this.state.emailV + this.state.zipV + (this.state.dropDownVal === 0 ? 1 : 0)
      }, console.log(this.state.errorCount))
    }
  }
  render(){
    return (
      <Dialog
        title="Thank you for your interest!"
        modal={false}
        open={this.props.open} onRequestClose={this.props.close}
        autoScrollBodyContent={true}
        actions={<FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleSubmit}
        />}
      >
        <div id="dialogContainer">
          
          <div id="dialogText"> 
            We're super excited you're as big of a fanboy of Doublelift as Kenny is. He's been an avid follower of LoL esports since season 3,
            but more importantly, he's currently actively seeking employment! Why don't you enter your information below, and if you're able 
            to see server logs, you'll see them console log out!
          </div>
          <div id="dialogFName">
            <TextField
              hintText="First Name" onChange={this.handleFirstName}
              errorText={!this.state.firstNameV ? "" : "First name can only contain characters."}
            /><br />
          </div>
          <div id="dialogLName">
            <TextField
              hintText="Last Name" onChange={this.handleLastName}
              errorText={!this.state.lastNameV ? "" : "Last name can only contain characters, hyphens, and dashes"}
            /><br />
          </div>
          <div id="dialogEmail">
            <TextField
              hintText="E-Mail" onChange={this.handleEmail}
              errorText={!this.state.emailV ? "" : "Please enter a valid email address."}
              fullWidth={true}
            /><br />
          </div>
          <div id="dialogState">
            <DropDownMenu value={this.state.dropDownVal} onChange={this.handleState}>
              {USstates.states.map((state, val )=> <MenuItem key={val} value={val} primaryText={state} />)}
            </DropDownMenu>
          </div>
          <div id="dialogZip">
            <TextField
              hintText="Zip Code"
              errorText={!this.state.zipV ? "" : "Please enter a 5 digit zip code."}
              onChange={this.handleZip}
            /><br />
          </div>
        </div>
      </Dialog>
    )
  }
}

export default dialog;