export const READ_THREAD = 'READ_THREAD';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_FETCH_SUCCEEDED = 'POSTS_FETCH_SUCCEEDED';

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
  console.log("Requesting", username)
  return {
    type: REQUEST_POSTS,
    username
  }
}
