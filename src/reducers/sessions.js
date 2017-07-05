import { handleActions } from 'redux-actions'
const {
  REFRESH_SESSIONS
} = require('../actions/sessions')

export default handleActions({
  [REFRESH_SESSIONS](state, action) {
    return {
      ...state,
      sessions: action.payload
    }
  }
}, {
  sessions: []
})
