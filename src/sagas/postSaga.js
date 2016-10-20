import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import { Api } from '../data/api';
import { POSTS_FETCH_SUCCEEDED } from '../actions/index';

function* fetchPosts(action) {
  try {
    console.log("In fetch posts", action)
    const posts = yield call(Api.fetchPosts, action.username)
    yield put({ type: POSTS_FETCH_SUCCEEDED, posts: posts })
  } catch (e) {
    yield put({ type: "POSTS_FETCH_FAILED", message: e.message })
  }
}


function* postSaga() {
  yield* takeEvery("REQUEST_POSTS", fetchPosts)
}

export default postSaga;
