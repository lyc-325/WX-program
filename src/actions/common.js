export const INIT_USER = 'COMMON_INIT_USER'
export const INIT_NIM = 'COMMON_INIT_NIM'
import { createAction } from 'redux-actions'

export const initUser = createAction(INIT_USER, user => user)
export const initNim = createAction(INIT_NIM, nim => nim)
