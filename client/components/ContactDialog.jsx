import React from 'react';
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
      chosenState: '',
      dropDownVal: 0
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
  }
  handleLastName(e,v){
    this.setState({lastName:v})
  }
  handleEmail(e,v){
    this.setState({email:v})
  }
  handleZip(e,v){
    this.setState({zip:v})
  }
  handleState(e,i){
    this.setState({
      chosenState: USstates.states[i],
      dropDownVal: i
    })
  }
  handleSubmit(){
    console.log(this.state.firstName, this.state.lastName, this.state.email, this.state.zip, this.state.chosenState)
  }
  render(){
    return (
      <Dialog
        title="Thank you for your interest!"
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.close}
        autoScrollBodyContent={true}
        actions={<FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleSubmit}
        />}
      >
          <TextField
            hintText="First Name"
            errorText=""
            onChange={this.handleFirstName}
          /><br />
          <TextField
            hintText="Last Name"
            errorText=""
            onChange={this.handleLastName}
          /><br />
          <TextField
            hintText="E-Mail"
            errorText=""
            onChange={this.handleEmail}
          /><br />
          <TextField
            hintText="Zip Code"
            errorText=""
            onChange={this.handleZip}
          /><br />
          <DropDownMenu
            value={this.state.dropDownVal}
            onChange={this.handleState}
          >
            {USstates.states.map((state, val )=> <MenuItem key={val} value={val} primaryText={state} />)}
          </DropDownMenu>
      </Dialog>
    )
  }
}

export default dialog;