//app.js
const Promise = require('./utils/wx-pro');
const config = require('./config').wx;

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
  },
  getUserInfo: function () {
    const {userInfo} = this.globalData;
    if (userInfo) {
      return Promise.resolve({
        userInfo
      });
    } else {
      return wx.pro
        .login()
        .then(({code}) => {
          // 请求openId
          return wx.pro.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appId}&secret=${config.appSecrete}&js_code=${code}&grant_type=authorization_code`
          });
        })
        .then(({ openid}) => {
          return Promise.all([openid, wx.pro.getUserInfo()]);
        })
        .then(([openid, res]) => {
          return Object.assign({}, res.userInfo, {openid});
        })
        .catch(error => console.error('app error', error));
    }
  },
  globalData: {
    userInfo: null
  }
});
