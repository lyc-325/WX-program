
import { handleActions } from 'redux-actions'
const {
  REFRESH_MSGS
} = require('../actions/chatroom')
export default handleActions({
  [REFRESH_MSGS](state, action) {
    return {
      ...state,
      msgs: {
        ...state.msgs,
        [action.payload.roomId]: [...action.payload.msgs]
      }
    }
  }
}, {
  msgs: {}
})