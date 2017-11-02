import jf from '../utils/jf'
import wepy from 'wepy'

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

export const getUserList = function(roomid, token,enterTime) {
  return jf.request({
    api: `chat_room/member_list/`,
    data: {
      roomid: roomid,
      limit: 100,
      token: token,
      endtime: enterTime,
    },
    method: 'POST'
  })
}

export const BanSomeone = function(roomid, operator,target,token) {
  return jf.request({
    api: `chat_room/ban_someone/`,
    data: {
      roomid: roomid,
      operator: operator,
      target: target,
      token: token
    },
    method: 'POST'
  })
}
export const changeRole = function(roomid, operator,target,opt) {
  return jf.request({
    api: `chat_room/change_role/`,
    data: {
      roomid: roomid,
      operator: operator,
      target: target,
      opt: opt,
    },
    method: 'POST'
  })
}

