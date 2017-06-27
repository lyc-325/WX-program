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
  const header = createHeader()
  return wepy.request({
    url: `${config.server}/${api}`,
    header,
    data,
    method: method || 'POST'
  }).then(data => {
    return data.statusCode === 200 ? Promise.resolve(data.data) : Promise.reject(data.errMsg)
  })
}

/**
 * 创建用户
 * @param options Object
 * @param options.accid String
 * @param options.name String
 * @param options.icon String
 * @param optiosn.props Object
 */
function create({accid, name, icon, props}) {
  return request({
    api: 'user/create.action',
    data: {
      accid,
      name,
      icon
    }
  })
}

/**
 * 创建用户
 * @param options Object
 * @param options.accid String
 * @param options.name String
 * @param options.icon String
 * @param optiosn.props Object
 */
function login(accid) {
  return request({
    api: 'user/refreshToken.action',
    data: {
      accid
    }
  }).then(({info}) => {
    return info.token
  })
}

/**
 * 获得 NIM 实例
 * @param options.account String 账户名
 * @param options.token String token
 * @param options.onSessions Function
 */
function getInstance(options) {
  const nim = NIM.getInstance({
    appKey: config.appKey,
    account: options.account,
    token: options.token,
    onerror(error) {
      console.error('[NIM] error', error)
    },
    onconnect(obj) {
      console.log('[NIM] connectd')
    },
    onsessions: options.onsessions,
    onupdatesession: options.opupdatesession
  })

  // Promisify nim functions
  R.forEach((key) => {
    nim[key] = promisify(nim[key].bind(nim))
  }, promisedFunctions)

  return nim
}

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
  getInstance
}