import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavItem, Dropdown, Button } from 'react-materialize'
export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }
  // handleChange = (event, index, value) => this.setState({ value });
  render() {
    return (
      <Navbar brand="require('dev')" right>
        <NavLink to="/signup">
          <NavItem>Sign up</NavItem>
        </NavLink>
        <NavLink to="/login">
          <NavItem>Log In</NavItem>
        </NavLink>
      </Navbar>
    )
  }
}
