export const READ_THREAD = 'READ_THREAD';

export function readThread(threadId) {
  return {
    type: READ_THREAD,
    threadId
  }
}
