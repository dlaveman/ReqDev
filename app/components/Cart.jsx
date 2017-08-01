import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserCart, fetchDeveloperById, deleteCartInstance, putCart } from '../reducers'
import { Button } from 'react-materialize'
import { NavLink } from 'react-router-dom'

class Cart extends Component {
  componentDidMount() {
    this.props.fetchUserCart()
  }
  handlePlusButton=(evt) => {
    this.props.handlePlus(evt)
  }
  handleMinusButton=(evt) => {
    this.props.handleMinus(evt)
  }
  handleSubmitOrder=(evt) => {
    evt.preventDefault()
    console.log('Submitting Order')
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Cart</h1>
        <hr />
        <div className="row list-group">
          {
            this.props.cart.map((cartItem, i) => (
              cartItem.developer &&
              <div key={i}>
                <img src={cartItem.developer.photo} height='100px' />
                  <h3>Developer Name:
                    <NavLink to={`/developers/${cartItem.developer_id}`}>
                      {cartItem.developer.name}
                    </NavLink>
                    <Button floating className="red" type="submit"
                      value={cartItem.id} onClick={this.props.handleClick}>x
                    </Button>
                  </h3>
                  <h5>Developer Cost:
                    ${cartItem.developer.rate}/hr x {cartItem.hours}
                    hours = <b>${cartItem.developer.rate * cartItem.hours}</b>
                    <Button floating className="blue" type="submit"
                      value={[cartItem.id, cartItem.hours]} onClick={this.handlePlusButton}>+
                    </Button>
                    <Button floating className="blue" type="submit"
                      value={[cartItem.id, cartItem.hours]} onClick={this.handleMinusButton} disabled={cartItem.hours < 1}>-
                    </Button>
                  </h5>
              </div>
            ))
          }
        </div>
        <hr />
        <Button className="blue" type="submit"
            value='dummy' onClick={this.handleSubmitOrder} disabled={!this.props.cart.length}>Submit Order
        </Button>
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
  },
  fetchDeveloperById: () => {
    dispatch(fetchDeveloperById())
  },
  handleClick(evt) {
    evt.preventDefault()
    dispatch(deleteCartInstance(+evt.target.value))
  },
  handlePlus(evt) {
    evt.preventDefault()
    dispatch(putCart(+evt.target.value[0], {hours: +evt.target.value[2]+1}))
  },
  handleMinus(evt) {
    evt.preventDefault()
    dispatch(putCart(+evt.target.value[0], {hours: +evt.target.value[2]-1}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
