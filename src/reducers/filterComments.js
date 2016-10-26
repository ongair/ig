function filterComments(state=[], action) {
  switch(action.type) {
    case 'FILTER_COMMENTS':
      return action.filterType
    default:
      return state
  }
}

export default filterComments
