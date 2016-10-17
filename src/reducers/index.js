import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import threads from './threads';
import contacts from './contacts';
import user from './user';

const rootReducer = combineReducers({ user, threads, contacts, routing: routerReducer });

export default rootReducer;
