import React, { Component } from 'react'

// name, email, photo, password
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import { Row, Col, Card, Input, Icon } from 'react-materialize'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
  }

  render() {
    return (
      <Row>
        <Col s={12} m={6} className="grid-example">
          <Card className="#313B50" textClassName="white-text" title="Sign Up">
            <Row>
              <Input s={6} label="Name" validate>
                <Icon>account_circle</Icon>
              </Input>
            </Row>
            <Row>
              <Input s={6} label="Email" validate type="email">
                <Icon>email</Icon>
              </Input>
            </Row>
            <Row>
              <Input type="password" label="password" s={6} />
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }

  onSignupSubmit(event) {
    event.preventDefault()
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
  }
}
// const mapState = () => ({ message: 'Sign up' })
// const mapDispatch = { signup: {} }

// export default connect(mapState, mapDispatch)(Signup)
