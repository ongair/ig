import READ_THREAD from '../actions/index';

function threads(state=[], action) {
  switch(action.type) {
    case READ_THREAD:
      // console.log('Increment likes');
      // const i = action.index;
      // return [
      //   ...state.slice(0,i), //before the one we're updating
      //   {...state[i], likes: state[i].likes + 1 },
      //   ...state.slice(i+1), //after our update
      // ]
      return state;
    default:
      return state;
  }
}

export default threads;
