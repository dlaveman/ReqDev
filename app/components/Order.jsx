import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchOrders} from '../reducers'
import { Button } from 'react-materialize'
import { NavLink } from 'react-router-dom'

class Order extends Component {
  componentDidMount() {
    this.props.fetchOrders()
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Order History</h1>
        <hr />
        <div className="row list-group">
          {
            this.props.order.map(order => (
              <div key={order.id}>
                <h3>Order Id: <NavLink to={`/orders/${order.id}`}>{order.id}</NavLink></h3>
                <h5>Ordered At: {new Date(order.submit_time).toString()}</h5>
              </div>
            ))
          }
        </div>
        <hr />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  order: state.order
})
const mapDispatchToProps = { fetchOrders }

export default connect(mapStateToProps, mapDispatchToProps)(Order)
