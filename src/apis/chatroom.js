import jf from '../utils/jf'

export const getList = function() {
  return jf.request({
    api: 'chat_room/list/',
    data: {},
    method: 'GET'
  })
}

export const getOneById = function(id) {
  return jf.request({
    api: `chat_room/${id}/detail/`,
    data: {},
    method: 'GET'
  })
}
