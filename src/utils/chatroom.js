import Chatroom from '../libs/NIM_Web_Chatroom_v3.8.0'
import promisify from './promisify'
import { nim as config } from '../config'
import R from '../libs/ramda'

/**
 * getInstance
 */
function getInstance(options) {
  const chatroom = Chatroom.getInstance({
    appKey: config.appKey,
    account: options.account,
    token: options.token,
    chatroomId: options.chatroomId,
    chatroomAddresses: options.chatroomAddresses,
    onconnect() {
      console.log('[NIM Chatroom connect]')
    },
    onerror(error) {
      console.error('[NIM Chatroom] error', error)
    },
    ondisconnect() {
      console.log('聊天室断开')
    },
    onwillreconnect(obj) {
      console.log('[NIM Chatroom] will reconnect')
    },
    onsyncdone() {
      console.log('[NIM Chatroom] sync done')
    },
    ...options
  })
  const chatroomPromised = {}
  // Promisify chatroom functions
  R.forEach((key) => {
    chatroomPromised[key] = promisify(chatroom[key].bind(chatroom))
  }, promisedFunctions)
  // bind other functions
  R.forEach((key) => {
    chatroomPromised[key] = chatroom[key].bind(chatroom)
  }, needFunctions)
  return [chatroom,chatroomPromised]
}

const needFunctions = [
  // 'mergeMsgs'
]

const promisedFunctions = [
  'sendText',
  'previewFile',
  'sendFile',
  'getHistoryMsgs'
]

module.exports = {
  getInstance
}
