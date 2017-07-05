import { handleActions } from 'redux-actions'
const {
  REFRESH_MSGS,
  REFRESH_MSGS_BY_TO
} = require('../actions/chat')

export default handleActions({
  [REFRESH_MSGS](state, action) {
    return {
      ...state,
      msgs: {
        ...state.msgs,
        [action.payload.sessionId]: [...action.payload.msgs]
      }
    }
  },
  [REFRESH_MSGS_BY_TO](state, action) {
    return {
      ...state,
      msgs: {
        ...state.msgs,
        [action.payload.to]: [...action.payload.msgs]
      }
    }
  }
}, {
  msgs: {}
})
