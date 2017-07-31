import React from 'react'
import { Button, Row, Col, Card, Input, Icon } from 'react-materialize'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
// import from 'materialize-social'
export const Login = ({ login, history }) => {
  return (
    <Row>
      <Col offset="m2 l4" s={12} m={8} l={4} className="grid-example blue-text">
        <Card className="blue-text" textClassName="blue-text" title="Log In">
          <form
            onSubmit={evt => {
              evt.preventDefault()
              login(
                evt.target.username.value,
                evt.target.password.value,
                history
              )
            }}
          >
            <Row>
              <Input
                name="username"
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
                  Log In<Icon left className="white-text">
                    done
                  </Icon>
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col offset="s2 m1 l3" s={12} m={8} l={10} className="blue-text">
                <Button waves="light" className="blue white-text">
                  Log In<Icon left className="white-text">
                    done
                  </Icon>
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col offset="s2 m1 l3" s={12} m={8} l={10} className="blue-text">
                <Button waves="light" className="blue white-text">
                  Log In<Icon left className="white-text">
                    done
                  </Icon>
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col offset="s2 m1 l3" s={12} m={8} l={10} className="blue-text">
                <Button waves="light" className="blue white-text">
                  Log In<Icon left className="white-text">
                    done
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

export default connect(null, { login })(Login)
