Page({
  data: {
    align: 'flex-end'
  },
  onLoad(option) {
    wx.setNavigationBarTitle({
      title: option.nickname,
    })
  },
  chooseImage() {
    wx.chooseImage({
      success: function(res) {
        console.log(res);
      },
    })
  },
  send() {

  }
})