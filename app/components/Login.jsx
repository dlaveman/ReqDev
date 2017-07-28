import React from 'react'
import { Row, Col, CardPanel, Input, Icon } from 'react-materialize'

export const Login = ({ login }) =>
  <Row>
    <Col s={12} m={6} className="grid-example">
      <CardPanel title="Log In">
        <form
          onSubmit={evt => {
            evt.preventDefault()
            login(evt.target.username.value, evt.target.password.value)
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
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(state => ({}), { login })(Login)
