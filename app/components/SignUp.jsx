import React from 'react';

// name, email, photo, password

import { login } from 'APP/app/reducers/auth';
import { connect } from 'react-redux';

export default connect(state => ({}), { login })(SignUp);
