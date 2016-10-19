import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import threads from './threads';
import contacts from './contacts';
import user from './user';
import title from './title';
import account from './account';

const rootReducer = combineReducers({ user, threads, contacts, title, account, routing: routerReducer });

export default rootReducer;
