import { createAction } from 'redux-actions'
export const REFRESH_SESSIONS = 'SESSIONS_REFRESH_SESSION'
export const refreshSessions = createAction(REFRESH_SESSIONS, sessions => sessions)
