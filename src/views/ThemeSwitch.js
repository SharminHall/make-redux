import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from '../react-redux/connect'

class ThemeSwitch extends Component {
  static propTypes = {
    onChangeThemeColor: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <button style={{color: this.props.themeColor}} onClick={() => {this.props.onChangeThemeColor('red')}} >Red</button>
        <button style={{color: this.props.themeColor}} onClick={() => {this.props.onChangeThemeColor('blue')}} >Blue</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeThemeColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)