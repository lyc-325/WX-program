import { handleActions } from 'redux-actions'
const {
  REFRESH_FRIENDS
} = require('../actions/friends')

export default handleActions({
  [REFRESH_FRIENDS](state, action) {
    return {
      ...state,
      friends: action.payload
    }
  }
}, {
  friends: []
})
