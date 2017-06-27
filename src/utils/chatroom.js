import Chatroom from '../libs/NIM_Web_Chatroom_v3.8.0'
import promisify from './promisify'
import config from '../config'
import R from '../libs/ramda'

/**
 * getInstance
 * @param account String
 * @param token String
 * @param id String
 * @param addresses Array
 */
function getInstance(account, token, id, addresses) {
  return new Promise((resolve, reject) => {
    const chatroom = Chatroom.getInstance({
      appKey: config.appKey,
      account,
      token,
      chatroomId: id,
      chatroomAddresses: addresses,
      onerror(error) {
        reject(error)
      },
      onconnect(obj) {
        // Promisify chatrrom functions
        R.forEach((key) => {
          chatroom[key] = promisify(chatroom[key].bind(chatroom))
        }, promisedFunctions)
        resolve(chatroom)
      }
    })
  })
}

const promisedFunctions = [
  'getChatroom',
  'updateChatroom',
  'updateMyChatroomMemberInfo',

  'sendText',
  'sendFile',
  'getHistoryMsgs',

  'getChatroomMembers',
  'markChatroomManager'
]

module.exports = {
  getInstance
}
