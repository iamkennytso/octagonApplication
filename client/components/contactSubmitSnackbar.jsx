import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const nomnombar = (props) => {
  return (
    <Snackbar
      open={props.open}
      message="Your form has been sent! Thanks for your interest"
      autoHideDuration={4000}
      onRequestClose={props.close}
    />
  )
}

export default nomnombar;