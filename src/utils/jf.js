import wepy from 'wepy'
import { jf } from '../config'

const config = jf

function request(options) {
  const { api, data, method } = options
  return wepy.request({
    url: `${config.server}/${api}`,
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data,
    method: method || 'POST'
  }).then(({data}) => {
    return data.code === 200 ? Promise.resolve(data.data) : Promise.reject(data.msg)
  })
}

module.exports = {
  request
}
