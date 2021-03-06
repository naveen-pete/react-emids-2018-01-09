import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Routing
import { BrowserRouter } from 'react-router-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './index.css';

import appReducer from './reducers';

const store = createStore(appReducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
