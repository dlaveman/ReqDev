import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Navbar, NavItem, Dropdown, Button } from 'react-materialize'
import { fetchCategories } from '../reducers'
import { connect } from 'react-redux'
import 'APP/public/navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCategories()
  }
  render() {
    return (
      <Navbar brand="require('dev')" right>
        <div className="col s8">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
          <li>
            <Dropdown
              trigger={
                <li>
                  <NavLink to="#!">
                    Browse<i className="material-icons right">
                      arrow_drop_down
                    </i>
                  </NavLink>
                </li>
              }
            >
              {this.props.categories.map(category => (
                  <li key={category.id}>
                    <NavLink to={`/api/developer?category=${category.name}`}>
                      {category.name}
                    </NavLink>
                  </li>
                ))}
            </Dropdown>
          </li>
        </div>
      </Navbar>
    )
  }
}
const mapStateToProps = state => ({
  categories: state.categories,
})
const mapDispatchToProps = dispatch => ({
  fetchCategories: () => {
    dispatch(fetchCategories())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
