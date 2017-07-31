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
        <h1>Hi, I'm {this.props.developers.name} </h1>
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
