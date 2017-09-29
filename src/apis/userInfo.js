/**
 * Created by Administrator on 2017/8/10 0010.
 */
import jf from '../utils/jf'

export const getOtherUserInfo = function (id,token) {
  return jf.request({
    api: `accounts/detail/${id}/?token=${token}`,
    method: 'GET'
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

