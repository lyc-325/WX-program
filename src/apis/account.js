import jf from '../utils/jf'

export const getToken = function (username, password) {
  return jf.request({
    api: 'account/login_views',
    data: {
      username,
      password
    },
    method: 'POST'
  })
}
