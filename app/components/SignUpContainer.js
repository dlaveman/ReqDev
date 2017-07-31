import React, { Component } from 'react'
import 'APP/public/signup.css'

// name, email, photo, password
import { connect } from 'react-redux'
import SignUp from './SignUp'

export class SignUpContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleInput = evt => {
    console.log(evt.target)
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  validateInput = () => {
    return (
      this.state.name.length > 0 &&
      this.state.password.length > 0 &&
      this.state.email.length > 0
    )
  }

  render() {
    return (
      <SignUp
        handleInput={this.handleInput}
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        validateInput={this.validateInput()}
      />
    )
  }
}
export default connect(null, null)(SignUpContainer)
