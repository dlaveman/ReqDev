'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import store from './store'
import Jokes from './components/Jokes'
import LoginContainer from './components/LoginContainer'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'
import Categories from './components/Categories'
import Home from './components/Home'
import SignUpContainer from './components/SignUpContainer'
import Cart from './components/Cart'
import Developer from './components/Developer'
import Developers from './components/Developers'
import Order from './components/Order'
import OrderItem from './components/OrderItems'

const ExampleApp = connect(({ auth }) => ({
  user: auth
}))(({ user, children }) =>
  <Router >
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/developers" component={Developers} />
          <Route path="/developers/:id" component={Developer} />
          <Route exact path="/orders" component={Order}/>
          <Route path="/orders/:id" component={OrderItem}/>
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
)
render(
  <Provider store={store}>
    <ExampleApp />
  </Provider>,
  document.getElementById('main')
)
