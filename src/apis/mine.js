/**
 * Created by Administrator on 2017/7/28 0028.
 */
import jf from '../utils/jf'

export const getUserData = function (token, id) {
  return jf.request({
    api: `accounts/detail/${token}/${id}`,
    data: {},
    method: 'GET'
  })
}

export const getLevel = function (score) {
    return parseInt(score/10)
}

export const modifyUserInfo = function(id, token) {
  return jf.request({
    api: `accounts/modify/${id}/`,
    data: token,
    method: 'POST'
  })
}

export const getMsgList = function(id) {
  return jf.request({
    api: `article/get_article_by_user_id/`,
    data: {
      id: id
    },
    method: 'POST'
  })
}
export const delItem = function(id) {
  var postArr =[]
  postArr.push(id)
  return jf.request({
    api: `article/category/del_l/`,
    data: {
      pk_list: postArr
    },
    method: 'POST'
  })
}
