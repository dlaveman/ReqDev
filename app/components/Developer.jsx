import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fetchDeveloper, postCart } from '../reducers'
import { connect } from 'react-redux'
import { Col, Row, Input } from 'react-materialize'

class Developer extends React.Component {

  componentDidMount() {
    const devId = /.*\/(.*)/.exec(this.props.location.pathname)
    this.props.fetchDeveloper(devId[1]) // parens are 1st el of match arr
  }

  handleAddToCart = (evt) => {
    evt.preventDefault()
    const cart = {
      user_id: this.props.user.id,
      developer_id: this.props.developers.id,
      hours: evt.target.hours.value
    }
    this.props.postCart(cart, this.props.history)
  }

  render() {
    return (
      <div className='links'>
        <form onSubmit={this.handleAddToCart}>
          <h1>Hi, I'm {this.props.developers.name} </h1>
          <h3>My rate is ${this.props.developers.rate} </h3>
          <h3>I'm reachable at {this.props.developers.email} </h3>
          <Row>
           <Input s={2} label="Enter number of hours" type='number' min='1' name='hours'/>
          </Row>
          {this.props.user && <input type='submit' value='Add To Cart' />}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    developers: state.developers,
    user: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchDeveloper: (developerId) => {
      dispatch(fetchDeveloper(developerId)) // hardcoding
    },
    postCart: (cart, history) => {
      dispatch(postCart(cart, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Developer)
