export const READ_THREAD = 'READ_THREAD';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

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
