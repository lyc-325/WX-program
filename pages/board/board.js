Page({
  data: {
    list: [{
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '2017年8月江风通讯正式上线',
      content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
      createdBy: '李四',
      createdAt: '2014-05-06 13:33',
      read: 200
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '2017年8月江风通讯正式上线',
      content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
      createdBy: '李四',
      createdAt: '2014-05-06 13:33',
      read: 200
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '2017年8月江风通讯正式上线',
      content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
      createdBy: '李四',
      createdAt: '2014-05-06 13:33',
      read: 200
    }, {
      cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
      title: '2017年8月江风通讯正式上线',
      content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
      createdBy: '李四',
      createdAt: '2014-05-06 13:33',
      read: 200
    }],
    navs: ['金融', '哲学', '体育', '政治', '金融', '哲学', '体育', '政治', '金融', '哲学', '体育', '政治'],
    currentNav: 1
  },
  toBoardDetail() {
    wx.navigateTo({
      url: '../board_detail/board_detail',
    })
  }
})