import React, { component } from 'react'
import { connect } from 'react-redux'
import { fetchCategory } from '../reducers'

export default class Category extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('props', this.props)
    this.props.fetchCategory()
  }

  render() {
    console.log('props', this.props)
    return (

      <h1>Category</h1>
    )
  }
}
