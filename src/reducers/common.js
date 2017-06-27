import { handleActions } from 'redux-actions'

const {
  INIT_USER,
  INIT_NIM
} = require('../actions/common')

export default handleActions({
  [INIT_USER](state, action) {
    return {
      ...state,
      user: action.payload
    }
  },
  [INIT_NIM](state, action) {
    return {
      ...state,
      nim: action.payload
    }
  }
}, {
  user: null,
  nim: null
})
