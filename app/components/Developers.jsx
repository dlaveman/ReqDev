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
              <Col s={2}>
                <div key={developer.id}>
                  <NavLink to={`/developer/${developer.id}`}>
                    <img src={developer.photo} />
                  </NavLink>
                  <div className='developerName'>
                    {developer.name}
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

const mapStateToProps = function(state) {
  return {
    developers: state.developers
  }
}

const mapDispatchToProps = { fetchDevelopers }

export default connect(mapStateToProps, mapDispatchToProps)(Developers)
