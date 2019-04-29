import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  componentWillMount () {

  }

  render () {
    return (
      <div>
        <button onClick={() => {this.onChangeThemeColor('red')}} >Red</button>
        <button onClick={() => {this.onChangeThemeColor('blue')}} >Blue</button>
      </div>
    )
  }

  onChangeThemeColor (color) {
    const { store } = this.context
    store.dispatch({ type: 'CHANGE_COLOR', themeColor: color })
  }
}

export default ThemeSwitch