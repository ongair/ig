import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';


import rootReducer from './reducers/index';
import postSaga from './sagas/postSaga';

import user from './data/users';
import contacts from './data/contacts';
import threads from './data/threads';

const defaultState = {
  title: "Ongair",
  user: user,
  account: user.accounts[0],
  // account: null,
  contacts: contacts,
  posts: [],
  threads: threads
}

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(sagaMiddleware, logger)))
export const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(postSaga)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
