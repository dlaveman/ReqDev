import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrderItems } from '../reducers'
import { Button } from 'react-materialize'
import { NavLink } from 'react-router-dom'

class OrderItem extends Component {
  componentDidMount() {
    this.props.fetchOrderItems(this.props.match.params.id)
  }
  render() {
    console.log('weird', this.props)
    let price=0
    return (
      <div className="container">
        <h1 className="text-center">Here's What You Ordered:</h1>
         <hr />
        <div className="row list-group">
          {
            this.props.orderItems.map((orderItem, i) => (
              orderItem.developer &&
              <div key={i}>
                <img src={orderItem.developer.photo} height='200px'/>
                  <h3>Developer Name:
                    <NavLink to={`/developers/${orderItem.developer_id}`}>
                      {orderItem.developer.name}
                    </NavLink>
                  </h3>
                  <h5>Developer Cost:
                    ${orderItem.rate}/hr x {orderItem.hours}
                    hours = <b>${orderItem.rate * orderItem.hours}</b>
                  </h5>
                  <div className="hiddentotal">{price+=orderItem.rate * orderItem.hours}</div>
              </div>
            ))
          }
          <hr/>
          <h3>Total order price: ${price}</h3>
        </div>
        <hr />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  orderItems: state.order_item
})
const mapDispatchToProps = {fetchOrderItems}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem)
