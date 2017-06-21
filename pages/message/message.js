const R = require('../../libs/rambda');
const touch = require('../../utils/touch');

/**
 * 获得列表 index
 * @param evt Event
 */
const getIndex = R.compose(
  R.prop('index'),
  R.prop('dataset'),
  R.prop('currentTarget')
);

// 所有隐藏按钮的宽度
const BUTTONS_WIDTH = 200;
// 最后一个隐藏按钮的宽度
const LAST_WIDTH = 200;


Page({
  data: {
    list: [
      { "from": "老张", "avatar": "https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400", "msg": "干嘛呢？" },
      { "from": "老赵", "avatar": "https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400", "msg": "干嘛呢？" },
      { "from": "老于", "avatar": "https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400", "msg": "干嘛呢？" }
    ],
    navs: ['好友消息', '系统消息'],
    currentNav: 0
  },
  onLoad() {
  },
  toChat() {
    wx.navigateTo({
      url: '../chat/chat?id=1&nickname=wxj',
    })
  },
  bindTouchStart(evt) {
    // 触摸条目时，记录触摸点位置
    touch.isOnePointTouch(false)(evt) && this.setData({ startX: touch.getClientX(false)(evt) });
  },
  bindTouchMove(evt) {
    if (touch.isOnePointTouch(evt)) {
      const { startX, list } = this.data;
      const currX = touch.getClientX(false)(evt);
      const distX = startX - currX;
      // 获得手指触摸的条目，刷新样式
      const index = getIndex(evt);
      const width = R.cond([
        [distX => distX <= 0, R.always(0)],
        [R.T, distX => distX >= LAST_WIDTH ? - BUTTONS_WIDTH : -distX]
      ])(distX);
      list[index].style = `left:${width}rpx`;
      this.setData({
        list
      });
    }
  },
  bindTouchEnd(evt) {
    if (touch.isOnePointTouch(true)(evt)) {
      const { startX, list } = this.data;
      const currX = touch.getClientX(true)(evt);
      const distX = startX - currX;
      const index = getIndex(evt);
      const width = distX > LAST_WIDTH / 2 ? -BUTTONS_WIDTH : 0;
      list[index].style = `left:${width}rpx`;
      this.setData({
        list
      });
    }
  }
});