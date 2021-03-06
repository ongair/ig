import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import title from './title';
import account from './account';
import posts from './posts';
import comments from './comments';
import filterComments from './filterComments'

const rootReducer = combineReducers({ user, title, account, posts, comments, filter: filterComments, routing: routerReducer });

export default rootReducer;
