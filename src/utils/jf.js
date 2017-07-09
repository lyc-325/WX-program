import wepy from 'wepy'
import { jf } from '../config'

const config = jf

function request(options) {
  const { api, data, method } = options
  console.log('url', `${config.server}/${api}`)
  return wepy.request({
    url: `${config.server}/${api}`,
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data,
    method: method || 'POST'
  }).then(({data}) => {
    console.log('data', data)
    if (!data.code) {
      console.log(data)
      return Promise.resolve(data.results)
    }
    return data.code === 200 ? Promise.resolve(data.data) : Promise.reject(data.msg)
  })
}

function upload(options) {
  const { api, formData, filePath, name, method } = options
  // console.log(formData)
  return wepy.uploadFile({
    url: `${config.server}/${api}`,
    filePath: filePath,
    name: name,
    method: method || 'POST',
    formData: formData
  }).then(({ data }) => {
    console.log(data)
    data = JSON.parse(data)
    console.log(data)
    return data.code === 200 ? Promise.resolve(data.data) : Promise.reject(data.msg)
  })
}

module.exports = {
  request,
  upload
}
