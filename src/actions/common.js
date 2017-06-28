export const SET_USER = 'COMMON_SET_USER'
export const SET_NIM = 'COMMON_SET_NIM'
import { createAction } from 'redux-actions'

export const setUser = createAction(SET_USER, user => user)
export const setNim = createAction(SET_NIM, nim => nim)
