import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import threads from './threads';
import contacts from './contacts';
import user from './user';
import title from './title';

const rootReducer = combineReducers({ user, threads, contacts, title, routing: routerReducer });

export default rootReducer;
