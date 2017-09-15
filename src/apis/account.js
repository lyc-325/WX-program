import jf from '../utils/jf'
import { wx } from '../config'

const config = wx
export const createUser = function(accid, password, infos) {
  return jf.request({
    api: 'accounts/create/',
    data: {
      accid,
      password,
      ...infos
    },
    method: 'POST'
  })
}

export const getToken = function (username, password) {
  return jf.request({
    api: 'accounts/login_views/',
    data: {
      username,
      password
    },
    method: 'POST'
  }).then((res) => res)
}

export const shareParsing = function (key, info) {
  return jf.request({
    api: 'accounts/decode/',
    data: {
      appId: `${config.appId}`,
      sessionKey: key.data,
      encryptedData: info.encryptedData,
      iv: info.iv
    },
    method: 'POST'
  }).then((res) => res)
}

export const saveOpenGid = function (token, parse, accid) {
  return jf.request({
    api: 'accounts/save_gid/',
    data: {
      token: `${token.data}`,
      openGId: `${parse.openGId}`,
      timestamp: `${parse.watermark.timestamp}`,
      accid: `${accid.data}`
    },
    method: 'POST'
  }).then((res) => res)
}

export const checkOpenGid = function (token, id) {
  return jf.request({
    api: 'accounts/check_gid/',
    data: {
      token: `${token}`,
      accid: `${id}`
    },
    method: 'POST'
  }).then((res) => res)
}

export const getTokenUserId = function (username, password) {
  return jf.request({
    api: 'accounts/login_views/',
    data: {
      username,
      password
    },
    method: 'POST'
  }).then((res) => res)
}

export const search = function (nickname) {
  return jf.request({
    api: 'accounts/search/',
    data: {
      s: nickname
    },
    method: 'POST'
  })
}

export const getCodeNum = function (name, mobile) {
  return jf.request({
    api: 'accounts/get_captcha/',
    data: {
      name: `${name}`,
      mobile: `${mobile}`
    },
    method: 'POST'
  }).then((res) => res)}
