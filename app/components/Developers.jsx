import React, { component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-materialize'
import { fetchDevelopers, fetchCategories } from '../reducers'

class Developers extends React.Component {
  componentDidMount() {
    this.parseQueryString()
  }

  componentDidUpdate(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.parseQueryString()
    }
  }

  parseQueryString() {
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const category = params.get('category')
    this.props.fetchDevelopers(category)
  }

  render() {
    return (
      <div>
        <Row>
          {this.props.developers && this.props.developers.map(developer => {
            return (
              <Col s={12} m={6} l={3} key={developer.id}>
                <div>
                  <NavLink to={`/developers/${developer.id}`}>
                    <img src={developer.photo} />
                  </NavLink>
                  <div className='developerName'>
                    <h5> {developer.name} </h5>
                  </div>
                  <div>
                    <h5>Skillset: {developer.skills} </h5>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    developers: state.developers
  }
}

const mapDispatchToProps = { fetchDevelopers }

export default connect(mapStateToProps, mapDispatchToProps)(Developers)
