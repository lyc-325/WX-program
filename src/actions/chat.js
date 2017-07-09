import { createAction } from 'redux-actions'
export const REFRESH_MSGS = 'CHAT_REFRESH_MSGS'
export const REFRESH_MSGS_BY_TO = 'CHAT_REFRESH_MSGS_BY_TO'

export const refreshMsgs = createAction(REFRESH_MSGS, (sessionId, msgs) => ({
  sessionId,
  msgs
}))

export const refreshMsgsByTo = createAction(REFRESH_MSGS_BY_TO, (to, msgs) => ({
  to,
  msgs
}))
