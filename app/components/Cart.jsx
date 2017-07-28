import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserCart } from '../reducers'

class Cart extends Component {
  componentDidMount() {
    this.props.fetchUserCart()
  }
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h1 className="text-center">Cart</h1>
        <hr />
        <div className="row list-group">
          {
            this.props.cart.map(cartItem => (
              <div>
                <h3>{cartItem.developer_id}</h3>
              </div>
            )
            )
          }
        </div>
        <hr />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart
})
const mapDispatchToProps = (dispatch) => ({
  fetchUserCart: () => {
    dispatch(fetchUserCart())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
