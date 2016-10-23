import React from 'react';
import { render } from 'react-dom';

import Main from './components/App';
import Inbox from './components/Inbox';
import Contact from './components/Contact';
import Login from './components/Login';
import PostThread from './components/PostThread';
import Reports from './components/Reports';
import './index.css';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={Main}>
        {/*<IndexRoute component={Login}></IndexRoute>*/}
        <IndexRoute component={Login}></IndexRoute>
        <Route path="/inbox" component={Inbox}></Route>
        <Route path="/contacts/:contactId" component={Contact} />
        <Route path="/posts/:postId" component={PostThread} />
        <Route path="/reports" component={Reports} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById("root"));
