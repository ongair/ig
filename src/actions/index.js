export const READ_THREAD = 'READ_THREAD';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_FETCH_SUCCEEDED = 'POSTS_FETCH_SUCCEEDED';
export const COMMENTS_FETCH_SUCCEEDED = 'COMMENTS_FETCH_SUCCEEDED';
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const REMOVE_COMMENT_SUCCEEDED = 'REMOVE_COMMENT_SUCCEEDED';
export const FILTER_COMMENTS = 'FILTER_COMMENTS'

export function readThread(threadId) {
  return {
    type: READ_THREAD,
    threadId
  }
}

export function selectAccount(account) {
  return {
    type: SELECT_ACCOUNT,
    account
  }
}

export function requestPosts(username) {
  return {
    type: REQUEST_POSTS,
    username
  }
}

export function requestComments(postId) {
  return {
    type: REQUEST_COMMENTS,
    postId
  }
}

export function removeComment(commentId, comment) {
  return {
    type: REMOVE_COMMENT,
    comment
  }
}

export function filterComments(filterType) {
  return {
    type: FILTER_COMMENTS,
    filterType
  }
}
