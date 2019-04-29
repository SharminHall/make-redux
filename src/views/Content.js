import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from '../react-redux/connect'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  componentWillMount () {

  }

  render () {
    return (
      <div>
        <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Content)
