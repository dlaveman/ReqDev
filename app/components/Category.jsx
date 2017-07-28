import React, { component } from 'react'
import { connect } from 'react-redux'
import { fetchCategory } from '../reducers'

class Category extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCategory()
  }

  render() {
    return (
      <h1>Category</h1>
    )
  }
}
