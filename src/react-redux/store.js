export const createStore = (reducer) => {
  let state = null
  let listeners = []
  let subscribe = (listener) => listeners.push(listener)
  let getState = () => state
  let dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({})
  return {getState, dispatch, subscribe}
}
