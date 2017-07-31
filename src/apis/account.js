import jf from '../utils/jf'

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
  }).then(({ Token }) => Token)
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
