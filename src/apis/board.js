import jf from '../utils/jf'
import wepy from 'wepy'

export const boardPublish = function(infos) {
  return jf.request({
    api: 'article/create/',
    data: {
      ...infos
    },
    method: 'POST'
  })
}


export const addReadNum = function(id, token) {
  return jf.request({
    api: 'article/add_read_num/',
    data: {
      id: id,
      token: token.data
    },
    method: 'POST'
  })
}
export const categoryList = function() {
  return jf.request({
    api: 'article/category/list/',
    method: 'GET'
  })
}
export const boardList = function(category, token) {
  if (token) {
    return jf.request({
      api: `article/screen_article/${category}/${token}/`,
      method: 'GET'
    })
  } else {
    token = category
    return jf.request({
      api: `article/list/${token}/`,
      method: 'GET'
    })
  }
}

export const boardDetail = function(pk, token) {
  return jf.request({
    api: `article/detail/${token}/${pk}/`,
    method: 'GET'
  })
}

export const uploadImages = function (imgs, token) {
  return Promise.all(imgs.map(img => jf.upload({
    api: 'resources/up_f/',
    name: 'boardImg',
    filePath: img,
    formData: { token: token }
  })))
}

export const downloadImage = function (imgUrl) {
  return wepy.downloadFile({'url': imgUrl})
}

export const downloadImages = function (imgUrls) {
  return Promise.all(imgUrls.map(imgUrl => wepy.downloadFile(imgUrl)))
}
