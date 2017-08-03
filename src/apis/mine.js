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

