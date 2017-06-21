Page({
  data: {
    align: 'flex-end'
  },
  onLoad(option) {
    console.log('option', option);
  },
  onReady() {
    wx.getSystemInfo({
      success(obj) {
        console.log(obj);
      }
    })
  },
  chooseImage() {
    wx.chooseImage({
      success: function(res) {
        console.log(res);
      },
    })
  }
})