function newTitle(state, path) {
  return path;
}

function title(state=[], action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return { ...state, title: newTitle(action.payload.pathname) };
    default:
      return state;
  }
}

export default title;
