import { POSTS_FETCH_SUCCEEDED } from '../actions/index';

function posts(state=[], action) {
  switch(action.type) {
    case POSTS_FETCH_SUCCEEDED:

      // convert to array
      const results = Object.keys(action.posts).map(key => action.posts[key])

      // only return images
      var filtered = results.filter(function(p) { return p.type === "image" })

      // sort,reverse and return first 20
      return filtered.sort(function(postA, postB) { return postA.time - postB.time }).reverse()
    default:
      return state;
  }
}

export default posts;
