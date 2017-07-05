import { createAction } from 'redux-actions'
export const REFRESH_FRIENDS = 'FRIENDS_REFRESH_FRIENDS'
export const refreshFriends = createAction(REFRESH_FRIENDS, friends => friends)
