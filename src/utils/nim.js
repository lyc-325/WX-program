import R from '../libs/ramda'
import NIM from '../libs/NIM_Web_NIM_v3.8.0'
import promisify from './promisify'
import { nim } from '../config'
import sha1 from 'sha1'
import wepy from 'wepy'

const config = nim
/**
 * 创建请求头
 */
function createHeader() {
  const nonce = Math.ceil(Math.random() * 10000).toString()
  const curTime = (Math.floor(Date.now() / 1000)).toString()
  const checkSum = sha1(`${config.appSecret}${nonce}${curTime}`)
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    AppKey: config.appKey,
    CurTime: curTime,
    Nonce: nonce,
    CheckSum: checkSum
  }
}

/**
 * 执行 NIM 相关请求
 */
function request(options) {
  const {api, data, method} = options
  const header = {
    ...createHeader(),
    ...(options.header || {})
  }
  return wepy.request({
    url: `${config.server}/${api}`,
    header,
    data,
    method: method || 'POST'
  }).then(({ data }) => {
    return data.code === 200 ? Promise.resolve(data) : Promise.reject(data)
  })
}

/**
 * 创建用户
 * @param accid String
 * @param name String
 * @param icon String
 * @param props Object
 */
function create(accid, name, icon, props) {
  return request({
    api: 'user/create.action',
    data: {
      accid,
      name,
      icon,
      props
    }
  }).then(R.prop('info'))
}

/**
 * 登录用户，获得token
 * @param accid String
 */
function login(accid) {
  return request({
    api: 'user/refreshToken.action',
    data: {
      accid
    }
  }).then(R.compose(R.prop('token'), R.prop('info')))
}

/**
 * 获得 NIM 实例
 * @param options.account String 账户名
 * @param options.token String token
 * @param options.onSessions Function
 */
function getInstance(options) {
  const nim = NIM.getInstance({
    db: true,
    appKey: config.appKey,
    onerror(error) {
      console.error('[NIM] error', error)
    },
    ondisconnect() {
      console.log('[NIM] disconnect')
    },
    onwillreconnect(obj) {
      console.log('[NIM] will reconnect')
    },
    onsyncdone() {
      console.log('[NIM] sync done')
    },
    onfriends(friends) {
      console.log('[NIM] on friends', friends)
    },
    ...options
  })
  const nimPromised = {}
  // Promisify nim functions
  R.forEach((key) => {
    nimPromised[key] = promisify(nim[key].bind(nim))
  }, promisedFunctions)
  // bind other functions
  R.forEach((key) => {
    nimPromised[key] = nim[key].bind(nim)
  }, needFunctions)
  return nimPromised
}

/**
 * 获得用户名片
 * @param  accid String
 */
function getUserInfo(accid) {
  return request({
    api: 'user/getUinfos.action',
    data: {
      accids: JSON.stringify([accid])
    }
  }).then(R.compose(R.head, R.prop('uinfos')))
}

const _addFriend = R.curry(function (type, accid, faccid, msg) {
  return request({
    api: 'friend/add.action',
    data: {
      accid,
      faccid,
      type,
      msg: msg || ''
    }
  })
})

// 发送好友申请
const sendApply = _addFriend(1)
// 接受好友申请
const acceptFriendApply = _addFriend(3)
// 拒绝好友申请
const rejectFriendApply = _addFriend(4)

const needFunctions = [
  'mergeSessions',
  'mergeMsgs'
]

/**
 * 需要被 Promise 化的函数
 */
const promisedFunctions = [
  // 好友关系相关 API
  'addFriend',
  'applyFriend',
  'passFriendApply',
  'rejectFriendApply',
  'deleteFriend',
  'updateFriend',

  // 消息相关
  'sendText',
  'previewFile',
  'sendFile',
  'resendMsg',
  'markMsgRead',
  'getHistoryMsgs', // 云端保存的历史记录

  // 聊天室
  'getChatroomAddress'
]

module.exports = {
  login,
  create,
  getInstance,
  getUserInfo,
  sendApply,
  acceptFriendApply,
  rejectFriendApply
}
