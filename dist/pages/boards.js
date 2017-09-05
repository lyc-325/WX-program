'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('./../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('./../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('./../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('./../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _board = require('./../apis/board.js');

var api = _interopRequireWildcard(_board);

var _config = require('./../config.js');

var _common = require('./../actions/common.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Boards = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}, {
  setUser: _common.setUser
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Boards, _wepy$page);

  function Boards() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Boards);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Boards.__proto__ || (0, _getPrototypeOf2.default)(Boards)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商友圈'
    }, _this.data = {
      list: [],
      navs: [],
      currentNav: 0,
      categories: [],
      searchValue: ''
    }, _this.methods = {
      changeNav: function changeNav(e) {
        var _this2 = this;

        //      const { jfToken } = this.user
        this.currentNav = e.currentTarget.dataset.index;
        this.searchValue = '';
        api.boardList(this.categories[this.currentNav].id).then(function (res) {
          _this2.list = res.map(function (item) {
            return {
              id: item.id,
              title: item.title,
              content: item.text,
              createdBy: item.author.name,
              createdAt: item.dateline,
              cover: item.pic_urls[0] ? '' + _config.jf.baseServer + item.pic_urls[0] : '',
              read: item.click_num
            };
          });
          _this2.$apply();
        });
      },
      searchKeyInput: function searchKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'searchValue', e.detail.value));
        this.searchValue = e.detail.value;
        this.$apply();
      },
      searchTap: function searchTap(e) {
        var _this3 = this;

        api.searchList(this.categories[this.currentNav].id, this.searchValue).then(function (res) {
          _this3.list = res.map(function (item) {
            return {
              id: item.id,
              title: item.title,
              content: item.text,
              createdBy: item.author.name,
              createdAt: item.dateline,
              cover: item.pic_urls[0] ? '' + _config.jf.baseServer + item.pic_urls[0] : '',
              read: item.click_num
            };
          });
          _this3.$apply();
        });
      },
      handlePublishTap: function handlePublishTap(e) {
        _wepy2.default.navigateTo({
          url: 'publish'
        });
      },
      handleItemTap: function handleItemTap(e) {
        //      console.log('item', this.list[e.currentTarget.dataset.index])
        var id = this.list[e.currentTarget.dataset.index].id;
        //      console.log('id', id)
        //      console.log(`board?id=${id}`)
        _wepy2.default.navigateTo({
          url: 'board?id=' + id
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Boards, [{
    key: 'onShow',


    //  async onLoad(options) {
    //    const { setUser } = this.methods
    //
    //    wepy.showLoading()
    //    const { code } = await wepy.login()
    //    const { data } = await wepy.request({
    //      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appId}&secret=${config.appSecrete}&js_code=${code}&grant_type=authorization_code`
    //    })
    //    const { openid } = data
    //    const { userInfo } = await wepy.getUserInfo()
    //    const password = R.takeLast(5)(openid)
    //
    //    const user = {
    //      ...userInfo,
    //      accid: openid.toLowerCase()
    //    }
    //    setUser(user)
    // 如果用户尚未在 则先注册
    //    try {
    //      const userId = await apiA.getTokenUserId(openid, password.toLowerCase())
    //      this.jfUserid = userId.id
    //      const Token = userId.Token
    //      if (!Token) {
    //        throw new Error('user not exist')
    //      }
    //
    //      setUser({
    //        ...this.user,
    //        jfToken: Token,
    //        userData: userId
    //      })
    //      this.$apply()
    //      wepy.hideLoading()
    //    } catch (e) {
    //      log.error({
    //        page: 'chatrooms',
    //        opr: 'init',
    //        info: e
    //      })
    //      wepy.hideLoading()
    //      wepy.navigateTo({
    //        url: '/pages/register'
    //      })
    //    }
    //  }

    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(option) {
        var results, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.categoryList();

              case 2:
                results = _context.sent;

                // console.log('results', results)
                this.navs = results.map(function (_ref3) {
                  var name = _ref3.name;
                  return name;
                });
                this.categories = results;
                // if (option.categoryId) {
                //   results.forEach((item, index) => {
                //     if (item.id === option.categoryId) {
                //       this.currentNav = index
                //     }
                //   })
                // }
                _context.next = 7;
                return api.boardList(results[this.currentNav].id);

              case 7:
                res = _context.sent;

                this.list = res.map(function (item) {
                  return {
                    id: item.id,
                    title: item.title,
                    content: item.text,
                    createdBy: item.author.name,
                    createdAt: item.dateline,
                    cover: item.pic_urls[0] ? '' + _config.jf.baseServer + item.pic_urls[0] : '',
                    read: item.click_num
                  };
                });
                // console.log('board', res)
                // await res.forEach(item => {
                //   if (item.pic_urls[0]) {
                //     api.downloadImage(item.pic_urls[0]).then(res => {
                //       self.list.push({
                //         id: item.id,
                //         title: item.title,
                //         content: item.text,
                //         createdBy: item.creator,
                //         createdAt: item.dateline,
                //         cover: res.tempFilePath,
                //         read: 200
                //       })
                //     })
                //   }
                // })
                this.$apply();
                // const boards = res.data;
                // const reses = await api.downloadImages(boards.map(({ cover_img }) => cover_img))
                // const tempFiles = reses.map(({tempFilePath}) => tempFilePath)
                // this.list = boards.map(board => ({title, text, creator, author, cover_img}) => ({ title, content: text, createdBy: creator, author: read, cover: cover_img }))

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow(_x) {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Boards;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Boards , 'pages/boards'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJzZXRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibmF2cyIsImN1cnJlbnROYXYiLCJjYXRlZ29yaWVzIiwic2VhcmNoVmFsdWUiLCJtZXRob2RzIiwiY2hhbmdlTmF2IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJib2FyZExpc3QiLCJpZCIsInRoZW4iLCJyZXMiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsIm5hbWUiLCJjcmVhdGVkQXQiLCJkYXRlbGluZSIsImNvdmVyIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwicmVhZCIsImNsaWNrX251bSIsIiRhcHBseSIsInNlYXJjaEtleUlucHV0Iiwic2V0RGF0YSIsImRldGFpbCIsInZhbHVlIiwic2VhcmNoVGFwIiwic2VhcmNoTGlzdCIsImhhbmRsZVB1Ymxpc2hUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlSXRlbVRhcCIsIm9wdGlvbiIsImNhdGVnb3J5TGlzdCIsInJlc3VsdHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBRUE7Ozs7OztJQVVxQkMsTSxXQU5wQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBO0FBREMsQ0FBUixFQUVFO0FBQ0RHO0FBREMsQ0FGRixDOzs7Ozs7Ozs7Ozs7Ozs0TUFPQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGtCQUFZ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d2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IHtcbiAgc2V0VXNlclxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlclxufSwge1xuICBzZXRVc2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW10sXG4gICAgbmF2czogW10sXG4gICAgY3VycmVudE5hdjogMCxcbiAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICBzZWFyY2hWYWx1ZTogJydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlTmF2IChlKSB7XG4vLyAgICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXG4gICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnXG4gICAgICBhcGkuYm9hcmRMaXN0KHRoaXMuY2F0ZWdvcmllc1t0aGlzLmN1cnJlbnROYXZdLmlkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXG4gICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgICAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxuICAgICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXG4gICAgICAgIH0pKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2VhcmNoS2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2BzZWFyY2hWYWx1ZWBdOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgc2VhcmNoVGFwKGUpIHtcbiAgICAgIGFwaS5zZWFyY2hMaXN0KHRoaXMuY2F0ZWdvcmllc1t0aGlzLmN1cnJlbnROYXZdLmlkLCB0aGlzLnNlYXJjaFZhbHVlKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXG4gICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgICAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxuICAgICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXG4gICAgICAgIH0pKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlUHVibGlzaFRhcChlKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdwdWJsaXNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZUl0ZW1UYXAoZSkge1xuLy8gICAgICBjb25zb2xlLmxvZygnaXRlbScsIHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0pXG4gICAgICBjb25zdCBpZCA9IHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uaWRcbi8vICAgICAgY29uc29sZS5sb2coJ2lkJywgaWQpXG4vLyAgICAgIGNvbnNvbGUubG9nKGBib2FyZD9pZD0ke2lkfWApXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGBib2FyZD9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbi8vICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuLy8gICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbi8vXG4vLyAgICB3ZXB5LnNob3dMb2FkaW5nKClcbi8vICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4vLyAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4vLyAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuLy8gICAgfSlcbi8vICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXG4vLyAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcbi8vICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG4vL1xuLy8gICAgY29uc3QgdXNlciA9IHtcbi8vICAgICAgLi4udXNlckluZm8sXG4vLyAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuLy8gICAgfVxuLy8gICAgc2V0VXNlcih1c2VyKVxuLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOWImeWFiOazqOWGjFxuLy8gICAgdHJ5IHtcbi8vICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpQS5nZXRUb2tlblVzZXJJZChvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXG4vLyAgICAgIHRoaXMuamZVc2VyaWQgPSB1c2VySWQuaWRcbi8vICAgICAgY29uc3QgVG9rZW4gPSB1c2VySWQuVG9rZW5cbi8vICAgICAgaWYgKCFUb2tlbikge1xuLy8gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxuLy8gICAgICB9XG4vL1xuLy8gICAgICBzZXRVc2VyKHtcbi8vICAgICAgICAuLi50aGlzLnVzZXIsXG4vLyAgICAgICAgamZUb2tlbjogVG9rZW4sXG4vLyAgICAgICAgdXNlckRhdGE6IHVzZXJJZFxuLy8gICAgICB9KVxuLy8gICAgICB0aGlzLiRhcHBseSgpXG4vLyAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuLy8gICAgfSBjYXRjaCAoZSkge1xuLy8gICAgICBsb2cuZXJyb3Ioe1xuLy8gICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuLy8gICAgICAgIG9wcjogJ2luaXQnLFxuLy8gICAgICAgIGluZm86IGVcbi8vICAgICAgfSlcbi8vICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4vLyAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4vLyAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuLy8gICAgICB9KVxuLy8gICAgfVxuLy8gIH1cblxuICBhc3luYyBvblNob3cob3B0aW9uKSB7XG4vLyAgICBjb25zdCB7IGpmVG9rZW4gfSA9IHRoaXMudXNlclxuICAgIC8vIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKVxuICAgIC8vIGNvbnNvbGUubG9nKGFwaSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXBpLmNhdGVnb3J5TGlzdCgpXG4gICAgLy8gY29uc29sZS5sb2coJ3Jlc3VsdHMnLCByZXN1bHRzKVxuICAgIHRoaXMubmF2cyA9IHJlc3VsdHMubWFwKCh7bmFtZX0pID0+IG5hbWUpXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0c1xuICAgIC8vIGlmIChvcHRpb24uY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgcmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gb3B0aW9uLmNhdGVnb3J5SWQpIHtcbiAgICAvLyAgICAgICB0aGlzLmN1cnJlbnROYXYgPSBpbmRleFxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHJlc3VsdHNbdGhpcy5jdXJyZW50TmF2XS5pZClcbiAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXG4gICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcbiAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXG4gICAgfSkpXG4gICAgLy8gY29uc29sZS5sb2coJ2JvYXJkJywgcmVzKVxuICAgIC8vIGF3YWl0IHJlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vICAgaWYgKGl0ZW0ucGljX3VybHNbMF0pIHtcbiAgICAvLyAgICAgYXBpLmRvd25sb2FkSW1hZ2UoaXRlbS5waWNfdXJsc1swXSkudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICAgIHNlbGYubGlzdC5wdXNoKHtcbiAgICAvLyAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgIC8vICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgLy8gICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgLy8gICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uY3JlYXRvcixcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAvLyAgICAgICAgIGNvdmVyOiByZXMudGVtcEZpbGVQYXRoLFxuICAgIC8vICAgICAgICAgcmVhZDogMjAwXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgICAvLyBjb25zdCBib2FyZHMgPSByZXMuZGF0YTtcbiAgICAvLyBjb25zdCByZXNlcyA9IGF3YWl0IGFwaS5kb3dubG9hZEltYWdlcyhib2FyZHMubWFwKCh7IGNvdmVyX2ltZyB9KSA9PiBjb3Zlcl9pbWcpKVxuICAgIC8vIGNvbnN0IHRlbXBGaWxlcyA9IHJlc2VzLm1hcCgoe3RlbXBGaWxlUGF0aH0pID0+IHRlbXBGaWxlUGF0aClcbiAgICAvLyB0aGlzLmxpc3QgPSBib2FyZHMubWFwKGJvYXJkID0+ICh7dGl0bGUsIHRleHQsIGNyZWF0b3IsIGF1dGhvciwgY292ZXJfaW1nfSkgPT4gKHsgdGl0bGUsIGNvbnRlbnQ6IHRleHQsIGNyZWF0ZWRCeTogY3JlYXRvciwgYXV0aG9yOiByZWFkLCBjb3ZlcjogY292ZXJfaW1nIH0pKVxuICB9XG59XG4iXX0=