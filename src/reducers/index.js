import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import threads from './threads';
import contacts from './contacts';
import user from './user';
import title from './title';
import account from './account';
import posts from './posts';

const rootReducer = combineReducers({ user, threads, contacts, title, account, posts, routing: routerReducer });

export default rootReducer;
