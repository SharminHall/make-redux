import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      themeColor: ''
    }
  }

  componentWillMount () {
    this._updateThemeColor()

    this.context.store.subscribe(() => this._updateThemeColor())
  }

  render () {
    return (
      <h1 style={{color: this.state.themeColor}}>React.js 小书</h1>
    )
  }

  _updateThemeColor = () => {
    const { store } = this.context
    this.setState({
      themeColor: store.getState().themeColor
    })
  }
}

export default Header