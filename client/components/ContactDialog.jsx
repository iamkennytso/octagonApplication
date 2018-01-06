import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import USstates from './../../server/states.js'

class dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zipCode: '',
      chosenState: '',
      dropDownVal: 0
    }
    this.handleStateChange = this.handleStateChange.bind(this)
  }
  componentDidMount(){
    console.log(USstates.states)
  }
  handleStateChange(e,i){
    this.setState({
      chosenState: USstates.states[i],
      dropDownVal: i
    }, console.log(this.state.chosenState))
  }
  handleSubmit(){
    console.log(this.state.chosenState)
  }
  render(){
    return (
      <Dialog
        title="Thank you for your interest!"
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.close}
        autoScrollBodyContent={true}
      >
        <div>
          <TextField
            hintText="First Name"
            errorText=""
          /><br />
          <TextField
            hintText="Last Name"
            errorText=""
          /><br />
          <TextField
            hintText="E-Mail"
            errorText=""
          /><br />
          <TextField
            hintText="Zip Code"
            errorText=""
          /><br />
          <DropDownMenu
            value={this.state.dropDownVal}
            onChange={this.handleStateChange}
          >
            {USstates.states.map((state, val )=> <MenuItem key={val} value={val} primaryText={state} />)}
          </DropDownMenu>
        </div>
      </Dialog>
    )
  }
}

export default dialog;