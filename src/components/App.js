import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';
import Main from './Main';

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    posts: state.posts,
    comments: state.comments,
    account: state.account,
    filter: state.filter,
    location: ownProps.location
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
