import { POSTS_FETCH_SUCCEEDED } from '../actions/index';

function posts(state=[], action) {
  switch(action.type) {
    case POSTS_FETCH_SUCCEEDED:

      const results = Object.keys(action.posts).map(key => action.posts[key])
      // only return images
      return results.filter(function(p) { return p.type === "image" })
    default:
      return state;
  }
}

export default posts;
