import React, { Component } from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom'
import Developer from './Developer'
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Home = props => {
  return (
    <div className="links">
      <h1>
        <Link to="/categories">Categories</Link>
      </h1>
      <h1>
        <Link to="/developer">Developer</Link>
      </h1>
    </div>
  )
}
export default Home
