import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import tankiApp from './reducers'
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

let store = createStore(tankiApp)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()




