import { COMMENTS_FETCH_SUCCEEDED, REMOVE_COMMENT } from '../actions/index';

function comments(state=[], action) {
  switch(action.type) {
    case COMMENTS_FETCH_SUCCEEDED:
      // convert to array
      const results = Object.keys(action.comments).map(key => Object.assign(action.comments[key], { key: key}))

      // sort,reverse and return
      return results.sort(function(comA, comB) { return comA.time - comB.time }).reverse()

    case REMOVE_COMMENT:
      // const ids = state.find()
      const index = state.findIndex(function(c) { return c.id === action.comment.id })
      return [
        ...state.slice(0, index),
        ...state.slice(index+1)
      ];
    default:
      return state;
  }
}

export default comments;
