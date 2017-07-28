import React, { component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { fetchDevelopers, fetchCategories } from '../reducers'

class Category extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const query = this.props.location.search.slice(10)
    const categoryName = query.replace(/(%20)/g, ' ')
    this.props.fetchDevelopers(categoryName)
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        {this.props.developers && this.props.developers.map(developer => {
          return (
            <li key={developer.id}>
                {developer.name}
            </li>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    developers: state.developers
  }
}

const mapDispatchToProps = { fetchDevelopers }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))
