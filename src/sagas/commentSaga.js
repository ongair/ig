import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import { Api } from '../data/api';
import { COMMENTS_FETCH_SUCCEEDED, REMOVE_COMMENT_SUCCEEDED, REMOVE_COMMENT } from '../actions/index';

function* fetchComments(action) {
  try {
    const comments = yield call(Api.fetchComments, action.postId)
    yield put({ type: COMMENTS_FETCH_SUCCEEDED, comments: comments })
  } catch (e) {
    yield put({ type: "COMMENTS_FETCH_FAILED", message: e.message })
  }
}

function* removeComment(action) {
  try {
    const success = yield call(Api.removeComment, action.comment)
    yield put({ type: REMOVE_COMMENT_SUCCEEDED, success: success })
  } catch (e) {
    yield put({ type: REMOVE_COMMENT_SUCCEEDED, success: false })
  }
}


export default function* commentSaga() {
  yield takeEvery('REQUEST_COMMENTS', fetchComments)
  yield takeEvery(REMOVE_COMMENT, removeComment)
}
