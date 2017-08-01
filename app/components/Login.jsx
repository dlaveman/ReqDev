import React from 'react'
import { Button, Row, Col, Card, Input, Icon } from 'react-materialize'
// import from 'materialize-social'
export default function Login({
  email,
  password,
  handleSubmit,
  validateInput,
  handleInput
}) {
  return (
    <Row>
      <Col offset="m2 l4" s={12} m={8} l={4} className="grid-example blue-text">
        <Card className="blue-text" textClassName="blue-text" title="Log In">
          <form onSubmit={handleSubmit}>
            <Row>
              <Input
                name="email"
                offset="m1"
                s={12}
                m={10}
                className="blue-text"
                label="Email"
                value={email}
                validate
                type="email"
                onChange={handleInput}
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
                value={password}
                s={12}
                m={10}
                onChange={handleInput}
              >
                <Icon className="blue-text">vpn_key</Icon>
              </Input>
            </Row>
            <Row>
              <Col offset="s2 m1 l3" s={12} m={8} l={10} className="blue-text">
                <Button
                  waves="light"
                  className="blue white-text"
                  disabled={!validateInput}
                >
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
