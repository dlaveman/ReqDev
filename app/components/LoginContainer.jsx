import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from 'APP/app/reducers/auth'
import Login from './Login'

export class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  validateInput = () => {
    return this.state.password.length > 0 && this.state.email.length > 0
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.login(
      evt.target.email.value,
      evt.target.password.value,
      this.props.history
    )
  }

  render() {
    return (
      <Login
        handleInput={this.handleInput}
        email={this.state.email}
        password={this.state.password}
        validateInput={this.validateInput()}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(null, { login })(LoginContainer)
