import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const nomnombar = (props) => {
  return (
    <Snackbar
      open={props.open}
      message="There's something wrong! Check your inputs."
      autoHideDuration={4000}
      onRequestClose={props.close}
    />
  )
}

export default nomnombar;