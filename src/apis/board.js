import jf from '../utils/jf'
import wepy from 'wepy'

export const boardPublish = function(infos) {
  return jf.request({
    api: 'article/create',
    data: {
      ...infos
    },
    method: 'POST'
  })
}

export const boardList = function(token) {
  return jf.request({
    api: `article/list/${token}`,
    method: 'GET'
  })
}

export const boardDetail = function(pk, token) {
  return jf.request({
    api: `article/list/${token}/${pk}`,
    method: 'GET'
  })
}

export const uploadImages = function (imgs) {
  return Promise.all(imgs.map(img => jf.upload({
    api: '/api/resources/upload_file/',
    filePath: img.imgPath,
    method: 'POST'
  })))
}

export const downloadImage = function (imgUrl) {
  return wepy.downloadFile({'url': imgUrl})
}

export const downloadImages = function (imgUrls) {
  return Promise.all(imgUrls.map(imgUrl => wepy.downloadFile(imgUrl)))
}
