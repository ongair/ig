import React from 'react';
import { render } from 'react-dom';

import Main from './components/App';
import Inbox from './components/Inbox';
import Contact from './components/Contact';
import './index.css';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={Main}>
        <IndexRoute component={Inbox}></IndexRoute>
        <Route path="/contacts/:contactId" component={Contact} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById("root"));
