import { createAction } from 'redux-actions'
export const REFRESH_MSGS = 'CHATROOM_REFRESH_MSGS'

export const refreshMsgs = createAction(REFRESH_MSGS, (roomId, msgs) => ({
  roomId,
  msgs
}))
