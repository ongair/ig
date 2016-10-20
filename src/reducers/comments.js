import { COMMENTS_FETCH_SUCCEEDED } from '../actions/index';

function comments(state=[], action) {
  switch(action.type) {
    case COMMENTS_FETCH_SUCCEEDED:
      // convert to array
      const results = Object.keys(action.comments).map(key => action.comments[key])

      // sort,reverse and return
      return results.sort(function(comA, comB) { return comA.time - comB.time }).reverse()

    default:
      return state;
  }
}

export default comments;
