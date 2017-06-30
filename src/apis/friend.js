import jf from '../utils/jf'

export const search = function(nickname) {
  return jf.request({
    api: 'accounts/create/',
    data: {
      nickname
    },
    method: 'POST'
  })
}
