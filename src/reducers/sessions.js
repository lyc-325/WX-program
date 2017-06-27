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
  sessions: [{
    cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
    title: '一起哈皮的聊天室5',
    members: 50
  }, {
    cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
    title: '一起哈皮的聊天室6',
    members: 50
  }, {
    cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
    title: '一起哈皮的聊天室7',
    members: 50
  }]
})
