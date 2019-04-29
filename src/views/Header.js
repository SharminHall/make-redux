import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from '../react-redux/connect'

class Header extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  componentWillMount () {

  }

  render () {
    return (
      <h1 style={{color: this.props.themeColor}}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Header)
