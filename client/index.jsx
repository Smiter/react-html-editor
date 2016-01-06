
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure from './store'

const store = configure()
const history = createHistory()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
