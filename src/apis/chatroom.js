import jf from '../utils/jf'

export const getList = function() {
  return jf.request({
    api: 'chat_room/list/',
    data: {},
    method: 'GET'
  })
}

export const getOneById = function(id, token) {
  return jf.request({
    api: `chat_room/${id}/detail/?token=${token}`,
    data: {},
    method: 'GET'
  })
}

export const getItemId = function(id) {
  return jf.request({
    api: `accounts/detail_by_accid/${id}/`,
    data: {},
    method: 'GET'
  })
}
