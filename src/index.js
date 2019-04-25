// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function dispatch (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}

function createStore (state, stateChanger) {
  // 订阅-监听
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)

  const getState = () => state
  // 每次更改state时，就会触发所有listener
  const dispatch = (action) => {
    state = stateChanger(state, action)
    listeners.forEach(listener => {
      listener()
    })
  }
  return {getState, dispatch, subscribe}
}

function renderApp (state, oldState = {}) {
  if (state === oldState) return
  console.log('render app ------------------------------')
  renderTitle(state.title, oldState.title)
  renderContent(state.content, oldState.content)
  console.log('end ------------------------------')
}

function renderTitle (title, oldTitle = {}) {
  if (title === oldTitle) return
  console.log('render title')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content, oldContent = {}) {
  if (content === oldContent) return
  console.log('render content')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

const store = createStore(appState, dispatch)
let oldState = store.getState()
// 订阅
store.subscribe(() => {
  let newState = store.getState()
  renderApp(newState, oldState)
  // 更新state后保存为旧状态，待下次更新
  oldState = store.getState()
})
renderApp(store.getState())
setTimeout(() => {
  store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'demo title'})
  store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'black'})
}, 3000)
