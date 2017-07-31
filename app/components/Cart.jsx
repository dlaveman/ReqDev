import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserCart, fetchDeveloperById } from '../reducers'

class Cart extends Component {
  componentDidMount() {
    this.props.fetchUserCart()
    this.props.fetchDeveloperById(1)
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
                <h3>{(+cartItem.developer_id)}</h3>
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
  cart: state.cart,
  developers: state.developers
})
const mapDispatchToProps = (dispatch) => ({
  fetchUserCart: () => {
    dispatch(fetchUserCart())
  },
  fetchDeveloperById: () => {
    dispatch(fetchDeveloperById())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
