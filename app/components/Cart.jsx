import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserCart, fetchDeveloperById, deleteCartInstance, putCart } from '../reducers'
import { Button } from 'react-materialize'
import { NavLink } from 'react-router-dom'

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
                <img src={cartItem.developer.photo} />
                <h3>Developer Name: <NavLink to={`/developers/${cartItem.developer_id}`}>{cartItem.developer.name}      </NavLink>
                  <Button floating small className="red" type="submit" value={cartItem.id} onClick={this.props.handleClick}>x</Button>
                </h3>
                <h5>Developer Cost: ${cartItem.developer.rate}/hr x {cartItem.hours} hours = <b>${cartItem.developer.rate * cartItem.hours}</b>     <Button floating small className="blue" icon='add' type="submit" value={cartItem.id} onClick={this.props.handleEdit}/><Button floating small className="blue" icon='remove' type="submit" value={cartItem.id} onClick={this.props.handleEdit}/></h5>

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
  },
  handleClick(evt) {
    evt.preventDefault()
    dispatch(deleteCartInstance(+evt.target.value))
  },
  handleEdit(evt) {
    evt.preventDefault()
    dispatch(putCart())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
