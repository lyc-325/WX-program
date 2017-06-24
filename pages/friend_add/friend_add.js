// friend_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friends: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  search (e) {
    let friends = [
      {
        id: 1,
        nickname: 'www',
        wexin: '1fsdfdf',
        avatar: 'https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400'
      }
    ];
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    self = this;
    self.setData({
      friends: friends
    });
  },
  toValidate () {
    wx.navigateTo({
      url: '../friend_validate/friend_validate',
    });
  }
})