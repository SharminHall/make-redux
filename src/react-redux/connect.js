import React, { Component } from 'react'
import Proptypes from 'prop-types'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: Proptypes.object
    }

    constructor () {
      super()
      this.state = {
        stateProps: {},
        dispatchProps: {}
      }
    }

    componentWillMount () {
      this._updateProps()
      this.context.store.subscribe(() => {
        this._updateProps()
      })
    }

    render () {
      const allProps = {
        ...this.state.stateProps,
        ...this.state.dispatchProps,
        ...this.props
      }
      return <WrappedComponent {...allProps} />
    }

    _updateProps = () => {
      const { store } = this.context
      let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {}
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
      this.setState({ stateProps, dispatchProps })
    }
  }

  return Connect
}
