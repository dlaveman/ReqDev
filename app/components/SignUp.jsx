import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// name, email, photo, password
const style = {
  height: 200,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
export const SignUp = ({ login }) => {
  return (
    <MuiThemeProvider>
      <Paper style={style} zDepth={1} />
    </MuiThemeProvider>
  );
};

import { login } from 'APP/app/reducers/auth';
import { connect } from 'react-redux';

export default connect(state => ({}), { login })(SignUp);
