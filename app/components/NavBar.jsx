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
  // handleChange = (event, index, value) => this.setState({ value });
  render() {
    return (
      <Navbar brand="require('dev')" right>
        <NavLink to="/login">
          <NavItem>Login</NavItem>
        </NavLink>
        <NavLink to="/signup">
          <NavItem>Sign up </NavItem>
        </NavLink>
        <Dropdown
          trigger={<Button>Choose a Category</Button>}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.props.categories.map(category => {
            return (
              <NavLink to={`/developers?category=${category.name}`}>
                <NavItem value={category.id} key={category.id}>
                  {category.name}
                </NavItem>
              </NavLink>
            )
          })}
        </Dropdown>
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
