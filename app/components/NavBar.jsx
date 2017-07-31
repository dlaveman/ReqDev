import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Row, Col, Navbar, NavItem, Dropdown, Button } from 'react-materialize'
import { fetchCategories } from '../reducers'
import { connect } from 'react-redux'
import 'APP/public/navbar.css'

class NavBar extends React.Component {
  componentDidMount() {
    console.log('navbar component')
    this.props.fetchCategories()
  }

  render() {
    return (
      <Navbar brand="require('dev')" right>
        <div className="col s8">
          {this.props.user
            ? <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            : <li>
                <NavLink to="/login">Login</NavLink>
              </li>}
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
          <Dropdown
            trigger={
              <li>
                <NavLink to="#!">
                  Browse<i className="material-icons right">arrow_drop_down</i>
                </NavLink>
              </li>
            }
          >
            {this.props.categories.map(category => {
              return (
                <li key={category.id}>
                  <NavLink to={`/developers?category=${category.name}`}>
                    {category.name}
                  </NavLink>
                </li>
              )
            })}
          </Dropdown>
        </div>
      </Navbar>
    )
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories,
    user: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
