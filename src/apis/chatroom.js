fimport jf from '../utils/jf'

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

export const addToRoom = function(id, creator, num) {
  return jf.request({
    api: `chat_room/add_member/`,
    data: {
      roomid: id,
      operator: creator,
      target: num
    },
    method: 'POST'
  })
}

export const getUserList = function(roomid, token) {
  return jf.request({
    api: `chat_room/member_list/`,
    data: {
      roomid: roomid,
      limit: 50,
      token: token
    },
    method: 'POST'
  })
}
