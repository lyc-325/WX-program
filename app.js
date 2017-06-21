//app.js
const Promise = require('./utils/wx-pro');
const { isFunction } = require('./utils/util');
const config = require('./config').wx;
const NIM = require('./utils/nim');

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function () {
    const { userInfo, nim } = this.globalData;
    if (userInfo && nim) {
      return Promise.resolve({
        userInfo,
        nim
      });
    } else {
      return wx.pro
        .login()
        .then(({ code }) => {
          // 请求 openid，向网易云信注册
          return wx.pro.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appId}&secret=${config.appSecrete}&js_code=${code}&grant_type=authorization_code`
          })
        })
        .then(({ openid }) => {
          // 请求用户信息
          return Promise.all([openid, wx.pro.getUserInfo()]);
        })
        .then(([openid, res]) => {
          // 注入用户信息到全局
          const { userInfo } = res;
          this.globalData.userInfo = userInfo;
          // 向网易云信登录或者注册用户
          return Promise.all([
            userInfo,
            openid,
            NIM.loginOrCreate({
              accid: openid,
              name: userInfo.nickName,
              icon: userInfo.avatarUrl
            })]);
        })
        .then(([userInfo, openid, token]) => {
          // 拿到网易云信的用户 token，初始化用户的 NIM 实例
          return Promise.all([
            userInfo,
            NIM.getInstance(openid, token)
          ]);
        })
        .then(([userInfo, nim]) => {
          // 注入 NIM 实例到全局
          this.globalData.nim = nim;
          return {
            userInfo,
            nim
          };
        })
        .catch(error => console.error('error', error));
    }
  },
  globalData: {
    userInfo: null,
    nim: null
  }
});
