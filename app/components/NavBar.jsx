import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavItem, Dropdown, Button } from 'react-materialize'
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
      <div>
        <ul id="dropdown1" className="dropdown-content">
          {this.props.categories.map(category => {
            return (
              <li>
                <NavLink to={`/categories/${category.id}`}>
                  {category.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              require('dev')
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <a
                  className="dropdown-button"
                  href="#!"
                  data-activates="dropdown1"
                >
                  Browse<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories
//   }
// }
// const mapDispatchToProps = (dispatch)=>{
//   return{
//     fetchCategories:()=>{
//       dispatch(fetchCategories());
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
