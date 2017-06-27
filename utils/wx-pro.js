const Promise = require('../libs/es6-promise').Promise

function promisify() {
  wx.pro = {} // wx.pro 下面挂载着返回 promise 的 wx.API

  // 普通的要转换的函数
  const functionNames = [
    'login',
    'getUserInfo',
    'navigateTo',
    'checkSession',
    'getStorageInfo',
    'removeStorage',
    'clearStorage',
    'getNetworkType',
    'getSystemInfo',
    'showActionSheet',
    'chooseImage'
  ]

  functionNames.forEach(fnName => {
    wx.pro[fnName] = (obj = {}) => {
      return new Promise((resolve, reject) => {
        obj.success = function (res) {
          console.log(`wx.${fnName} success`, res)
          resolve(res)
        }
        obj.fail = function (err) {
          console.error(`wx.${fnName} fail`, err)
          reject(err)
        }
        wx[fnName](obj)
      })
    }
  })

  // 特殊改造的函数

  wx.pro.getStorage = key => {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: key,
        success: res => {
          resolve(res.data) // unwrap data
        },
        fail: err => {
          resolve() // not reject, resolve undefined
        }
      })
    })
  }

  wx.pro.setStorage = (key, value) => {
    return new Promise((resolve, reject) => {
      wx.setStorage({
        key: key,
        data: value,
        success: res => {
          resolve(value) // 将数据返回
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }
  wx.pro.request = options => {
    if (options.toast) {
      wx.showToast({
        title: options.toast.title || '加载中',
        icon: 'loading'
      })
    }

    return new Promise((resolve, reject) => {
      wx.request({
        url: options.url,
        method: options.method || 'GET',
        header: options.header || {},
        data: options.data,
        success: res => {
          if (res.statusCode >= 400) {
            console.error('wx.request fail [business]', options, res.statusCode, res.data)
            reject(res)
          }
          else {
            console.log('wx.request success', options, res.data)
            resolve(res.data) // unwrap data
          }
        },
        fail: err => {
          console.error('wx.request fail [network]', options, err)
          reject(err)
        }
      })
    })

  }

  wx.pro.uploadFile = options => {
    if (options.toast) {
      wx.showToast({
        title: options.toast.title || '加载中',
        icon: 'loading'      
        })
    }
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: options.url,
        header: options.header || {},
        filePath: options.filePath,
        formData: options.formData,
        name: options.name,
        success: res => {
          if (res.statusCode >= 400) {
            console.error('wx.upload fail [business]', options, res.statusCode, res.data)
            reject(res)
          }
          else {
            console.log('wx.upload success', options, res.data)
            resolve(res.data) // unwrap data
          }
        },
        fail: err => {
          console.error('wx.upload fail [network]', options, err)
          reject(err)
        }
      })
    })
  }

  wx.pro.downloadFile = options => {
    if (options.toast) {
      wx.showToast({
        title: options.toast.title || '加载中',
        icon: 'loading'
      })
    }
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: options.url,
        header: options.header || {},
        success: res => {
          if (res.statusCode >= 400) {
            console.error('wx.dowload fail [business]', options, res.statusCode, res.data)
            reject(res)
          }
          else {
            console.log('wx.download success', options, res.data)
            resolve(res.data) // unwrap data
          }
        },
        fail: err => {
          console.error('wx.download fail [network]', options, err)
          reject(err)
        }
      })
    })
  }
}

promisify()

module.exports = Promise