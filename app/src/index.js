import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css'
import App from './App'
import { quoteReducer } from './state/reducers'

const mainReducer = combineReducers({
  quotes: quoteReducer,
})

const store = createStore(
  mainReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
