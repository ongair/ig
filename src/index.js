import React from 'react';
import { render } from 'react-dom';

import Main from './components/App';
import Inbox from './components/Inbox';
import './index.css';

// import javascript_time_ago from 'javascript-time-ago'
// javascript_time_ago.locale(require('javascript-time-ago/locales/en'))
// require('javascript-time-ago/intl-messageformat-global')
// require('intl-messageformat/dist/locale-data/en')

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={Main}>
        <IndexRoute component={Inbox}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById("root"));
