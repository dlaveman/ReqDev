import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavItem, Dropdown, Button } from 'react-materialize'
import { fetchCategories } from '../reducers'
import { connect } from 'react-redux'

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
                Browse<i className="material-icons right">arrow_drop_down</i>
              </li>
            }
          >
            {this.props.categories.map(category => {
              return (
                <li>
                  <NavLink to={`/categories/${category.id}`}>
                    {category.name}
                  </NavLink>
                </li>
              )
            })}
          </Dropdown>
        </li>
      </Navbar>
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
