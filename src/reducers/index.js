import { combineReducers } from 'redux'
import common from './common'
import sessions from './sessions'
import friends from './friends'
import chat from './chat'
import chatroom from './chatroom'

module.exports = combineReducers({
    common,
    sessions,
    friends,
    chat,
    chatroom
})