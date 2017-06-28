import { handleActions } from 'redux-actions'

const {
  SET_USER,
  SET_NIM
} = require('../actions/common')

export default handleActions({
  [SET_USER](state, action) {
    return {
      ...state,
      user: {
        ...action.payload
      }
    }
  },
  [SET_NIM](state, action) {
    return {
      ...state,
      nim: {
        ...action.payload
      }
    }
  }
}, {
  user: null,
  nim: null
})
