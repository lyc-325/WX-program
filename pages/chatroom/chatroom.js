const NIM = require('../../utils/nim');

const app = getApp();

Page({
  data: {
    // 是否正在初始化用户
    initiating: true,
    list: [{
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '一起哈皮的聊天室',
      members: 50
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '一起哈皮的聊天室3',
      members: 50
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '一起哈皮的聊天室4',
      members: 50
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '一起哈皮的聊天室5',
      members: 50
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '一起哈皮的聊天室6',
      members: 50
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '一起哈皮的聊天室7',
      members: 50
    }]
  },
  onLoad() {
    wx.showLoading();
    // 启动时判断用户是否已经合法注册到网易云
    app.getUser()
      .then(user => {
        if (!user.nim) {
          wx.hideLoading();
        } else {
          wx.navigateTo({
            url: '/pages/register/register',
          });
        }
      })
  }
})