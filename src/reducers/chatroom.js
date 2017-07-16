import { handleActions } from 'redux-actions'
const {
  REFRESH_MSGS
} = require('../actions/chatroom')

export default handleActions({
  [REFRESH_MSGS](state, action) {
    console.log({
      ...state.msgs,
      [action.payload.roomId]: [...action.payload.msgs]
    })
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
