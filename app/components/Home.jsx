import React, { Component } from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom'
import { MediaBox, Row, Col } from 'react-materialize'
import Developer from './Developer'

// import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <Row><Col offset="l2">
        <MediaBox src="/images/reqdev.png" alt="reqdev" width="1050"/>
      </Col></Row>
    </div>
  )
}
export default Home
