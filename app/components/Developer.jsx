import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fetchDeveloper } from '../reducers'
import { connect } from 'react-redux'

class Developer extends React.Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchDeveloper(1) // hardcoding dev id
  }

  render() {
    return (
      <div className="links">
        <form>
          <h1>Hi, I'm {this.props.developers.name} </h1>
          <h3>My rate is {this.props.developers.rate} </h3>
          <h3>I'm reachable at {this.props.developers.email} </h3>
          <input type="submit" value="Add To Cart" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    developers: state.developers,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchDeveloper: () => {
      dispatch(fetchDeveloper(1)) // hardcoding
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Developer)
