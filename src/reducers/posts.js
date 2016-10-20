import { POSTS_FETCH_SUCCEEDED } from '../actions/index';

function posts(state=[], action) {
  switch(action.type) {
    case POSTS_FETCH_SUCCEEDED:

      return Object.keys(action.posts).map(key => action.posts[key])
      
    default:
      return state;
  }
}

export default posts;
