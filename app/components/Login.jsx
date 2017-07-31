import React from 'react'
import { Row, Col, CardPanel, Input, Icon } from 'react-materialize'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export const Login = ({ login, history }) =>
  <Row>
    <Col s={12} m={6} className="grid-example">
      <CardPanel title="Log In">
        <form
          onSubmit={evt => {
            evt.preventDefault()
            login(evt.target.username.value, evt.target.password.value, history)
          }}
        >
          <Input s={6} label="Email" validate type="email" name="username">
            <Icon>email</Icon>
          </Input>
          <Input type="password" label="Password" s={6} name="password" />
          <input type="submit" value="Login" />
        </form>
      </CardPanel>
    </Col>
  </Row>

export default connect(null, { login })(Login)
