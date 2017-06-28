import wepy from 'wepy'
import { jf } from '../config'

const config = jf

function request(options) {
  const { api, data, method } = options
  return wepy.request({
    url: `${config.server}/${api}`,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data,
    method: method || 'POST'
  }).then(res => {
    return res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res.errorText)
  })
}

module.exports = {
  request
}
