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
        <NavItem href={<NavLink to="/login" />}>Login</NavItem>
        <NavItem href={<NavLink to="/signup" />}>Sign up </NavItem>
        <Dropdown
          trigger={<Button>Choose a Category</Button>}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <NavItem value={0}> category 1 </NavItem>
          <NavItem value={1}> category 2 </NavItem>
        </Dropdown>
      </Navbar>
    )
  }
}
