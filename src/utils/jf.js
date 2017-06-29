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

function upload(options) {
  const { api, filePath, name, method } = options
  return wepy.uploadFile({
    url: `${config.server}/${api}`,
    filePath: filePath,
    name: name,
    method: method || 'POST'
  }).then(res => {
    return res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res.errorText)
  })
}

module.exports = {
  request,
  upload
}
