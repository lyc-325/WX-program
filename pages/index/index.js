//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../messagelist/messagelist'
    })
  },
  onLoad() {
    // 页面加载时
    // 1. 获得用户信息
    app
      .getUserInfo()
      .then(({userInfo, nim}) => {
        this.setData({
          userInfo
        })
      });
  }
})
