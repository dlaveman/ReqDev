import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Row, Col, Navbar, NavItem, Dropdown, Button } from 'react-materialize'
import { fetchCategories } from '../reducers'
import { connect } from 'react-redux'
import 'APP/public/navbar.css'
import { logout } from 'APP/app/reducers/auth'

class NavBar extends React.Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  renderLoginSignup() {
    return [
      <li key={1}>
        <NavLink to="/login">Login</NavLink>
      </li>,
      <li key={2}>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
    ]
  }

  renderLogout() {
    return [
      <li key={1}>
        Hello, {this.props.user.name} !
      </li>,
      <NavItem key={2} onClick={this.props.logout}>
        Logout
      </NavItem>
    ]
  }

  render() {
    return (
      <Navbar brand="require('dev')" right>
        <div className="col s8">
          {this.props.user ? this.renderLogout() : this.renderLoginSignup()}
          <Dropdown
            trigger={
              <li>
                <NavLink to="#!">
                  Browse<i className="material-icons right">arrow_drop_down</i>
                </NavLink>
              </li>
            }
          >
            {this.props.categories.map(category => (
                <li key={category.id}>
                  <NavLink to={`/developers?category=${category.name}`}>
                    {category.name}
                  </NavLink>
                </li>
              ))}
          </Dropdown>
        </div>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
    categories: state.categories,
    user: state.auth
  })
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => {
      dispatch(fetchCategories())
    },
    logout: () => {
      dispatch(logout())
    }
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
