import React, { Component } from 'react'
import 'APP/public/signup.css'

// name, email, photo, password
import { connect } from 'react-redux'
import { Button, Row, Col, Card, Input, Icon } from 'react-materialize'
import { signup } from 'APP/app/reducers/auth'

export const SignUp = ({ signup, history }) => {
  return (
    <Row>
      <Col offset="m2 l4" s={12} m={8} l={4} className="grid-example blue-text">
        <Card className="blue-text" textClassName="blue-text" title="Sign Up">
          <form
            onSubmit={evt => {
              evt.preventDefault()
              const credentials = {
                email: evt.target.email.value,
                password: evt.target.password.value,
                name: evt.target.name.value
              }
              signup(credentials, history)
            }}
          >
            <Row>
              <Input
                name="name"
                offset="m1"
                className="blue-text"
                s={12}
                m={10}
                label="Name"
                validate
              >
                <Icon className="blue-text">account_circle</Icon>
              </Input>
            </Row>
            <Row>
              <Input
                name="email"
                offset="m1"
                s={12}
                m={10}
                className="blue-text"
                label="Email"
                data-error="wrong"
                data-success="right"
                validate
                type="email"
              >
                <Icon className="blue-text">email</Icon>
              </Input>
            </Row>
            <Row>
              <Input
                name="password"
                offset="m1"
                className="blue-text"
                type="password"
                label="password"
                s={12}
                m={10}
              >
                <Icon className="blue-text">vpn_key</Icon>
              </Input>
            </Row>
            <Row>
              <Col offset="s2 m1 l3" s={12} m={8} l={10} className="blue-text">
                <Button waves="light" className="blue white-text">
                  Sign Up<Icon left className="white-text">
                    create
                  </Icon>
                </Button>
              </Col>
            </Row>
          </form>
        </Card>
      </Col>
    </Row>
  )
}
export default connect(null, { signup })(SignUp)
