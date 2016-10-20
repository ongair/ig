import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import { Api } from '../data/api';
import { COMMENTS_FETCH_SUCCEEDED } from '../actions/index';

function* fetchComments(action) {
  try {
    console.log("In fetch comments", action)
    const comments = yield call(Api.fetchComments, action.postId)
    yield put({ type: COMMENTS_FETCH_SUCCEEDED, comments: comments })
  } catch (e) {
    yield put({ type: "COMMENTS_FETCH_FAILED", message: e.message })
  }
}


function* commentSaga() {
  yield* takeEvery("REQUEST_COMMENTS", fetchComments)
}

export default commentSaga;
