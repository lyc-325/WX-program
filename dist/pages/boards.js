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
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(option) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJzZXRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibmF2cyIsImN1cnJlbnROYXYiLCJjYXRlZ29yaWVzIiwic2VhcmNoVmFsdWUiLCJtZXRob2RzIiwiY2hhbmdlTmF2IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJib2FyZExpc3QiLCJpZCIsInRoZW4iLCJyZXMiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsIm5hbWUiLCJjcmVhdGVkQXQiLCJkYXRlbGluZSIsImNvdmVyIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwicmVhZCIsImNsaWNrX251bSIsIiRhcHBseSIsInNlYXJjaEtleUlucHV0Iiwic2V0RGF0YSIsImRldGFpbCIsInZhbHVlIiwic2VhcmNoVGFwIiwic2VhcmNoTGlzdCIsImhhbmRsZVB1Ymxpc2hUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlSXRlbVRhcCIsIm9wdGlvbiIsImNhdGVnb3J5TGlzdCIsInJlc3VsdHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBRUE7Ozs7OztJQVVxQkMsTSxXQU5wQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBO0FBREMsQ0FBUixFQUVFO0FBQ0RHO0FBREMsQ0FGRixDOzs7Ozs7Ozs7Ozs7Ozs0TUFPQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGtCQUFZ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ICd3ZXB5J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXHJcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IHtcclxuICBzZXRVc2VyXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXHJcblxyXG5AY29ubmVjdCh7XHJcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXJcclxufSwge1xyXG4gIHNldFVzZXJcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBsaXN0OiBbXSxcclxuICAgIG5hdnM6IFtdLFxyXG4gICAgY3VycmVudE5hdjogMCxcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgc2VhcmNoVmFsdWU6ICcnXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2hhbmdlTmF2IChlKSB7XHJcbi8vICAgICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnXHJcbiAgICAgIGFwaS5ib2FyZExpc3QodGhpcy5jYXRlZ29yaWVzW3RoaXMuY3VycmVudE5hdl0uaWQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAgICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcclxuICAgICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEtleUlucHV0KGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbYHNlYXJjaFZhbHVlYF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoVGFwKGUpIHtcclxuICAgICAgYXBpLnNlYXJjaExpc3QodGhpcy5jYXRlZ29yaWVzW3RoaXMuY3VycmVudE5hdl0uaWQsIHRoaXMuc2VhcmNoVmFsdWUpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAgICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcclxuICAgICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGhhbmRsZVB1Ymxpc2hUYXAoZSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ3B1Ymxpc2gnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlSXRlbVRhcChlKSB7XHJcbi8vICAgICAgY29uc29sZS5sb2coJ2l0ZW0nLCB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdKVxyXG4gICAgICBjb25zdCBpZCA9IHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uaWRcclxuLy8gICAgICBjb25zb2xlLmxvZygnaWQnLCBpZClcclxuLy8gICAgICBjb25zb2xlLmxvZyhgYm9hcmQ/aWQ9JHtpZH1gKVxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYGJvYXJkP2lkPSR7aWR9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4vLyAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xyXG4vL1xyXG4vLyAgICB3ZXB5LnNob3dMb2FkaW5nKClcclxuLy8gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuLy8gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4vLyAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxyXG4vLyAgICB9KVxyXG4vLyAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxyXG4vLyAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuLy8gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcclxuLy9cclxuLy8gICAgY29uc3QgdXNlciA9IHtcclxuLy8gICAgICAuLi51c2VySW5mbyxcclxuLy8gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcclxuLy8gICAgfVxyXG4vLyAgICBzZXRVc2VyKHVzZXIpXHJcbi8vIOWmguaenOeUqOaIt+WwmuacquWcqCDliJnlhYjms6jlhoxcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBhcGlBLmdldFRva2VuVXNlcklkKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcclxuLy8gICAgICB0aGlzLmpmVXNlcmlkID0gdXNlcklkLmlkXHJcbi8vICAgICAgY29uc3QgVG9rZW4gPSB1c2VySWQuVG9rZW5cclxuLy8gICAgICBpZiAoIVRva2VuKSB7XHJcbi8vICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcclxuLy8gICAgICB9XHJcbi8vXHJcbi8vICAgICAgc2V0VXNlcih7XHJcbi8vICAgICAgICAuLi50aGlzLnVzZXIsXHJcbi8vICAgICAgICBqZlRva2VuOiBUb2tlbixcclxuLy8gICAgICAgIHVzZXJEYXRhOiB1c2VySWRcclxuLy8gICAgICB9KVxyXG4vLyAgICAgIHRoaXMuJGFwcGx5KClcclxuLy8gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuLy8gICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgIGxvZy5lcnJvcih7XHJcbi8vICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcclxuLy8gICAgICAgIG9wcjogJ2luaXQnLFxyXG4vLyAgICAgICAgaW5mbzogZVxyXG4vLyAgICAgIH0pXHJcbi8vICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbi8vICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuLy8gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuLy8gICAgICB9KVxyXG4vLyAgICB9XHJcbi8vICB9XHJcblxyXG4gIGFzeW5jIG9uU2hvdyhvcHRpb24pIHtcclxuLy8gICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuICAgIC8vIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKVxyXG4gICAgLy8gY29uc29sZS5sb2coYXBpKVxyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGFwaS5jYXRlZ29yeUxpc3QoKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3Jlc3VsdHMnLCByZXN1bHRzKVxyXG4gICAgdGhpcy5uYXZzID0gcmVzdWx0cy5tYXAoKHtuYW1lfSkgPT4gbmFtZSlcclxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3VsdHNcclxuICAgIC8vIGlmIChvcHRpb24uY2F0ZWdvcnlJZCkge1xyXG4gICAgLy8gICByZXN1bHRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGl0ZW0uaWQgPT09IG9wdGlvbi5jYXRlZ29yeUlkKSB7XHJcbiAgICAvLyAgICAgICB0aGlzLmN1cnJlbnROYXYgPSBpbmRleFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5ib2FyZExpc3QocmVzdWx0c1t0aGlzLmN1cnJlbnROYXZdLmlkKVxyXG4gICAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XHJcbiAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgY29udGVudDogaXRlbS50ZXh0LFxyXG4gICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXHJcbiAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcclxuICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXHJcbiAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICB9KSlcclxuICAgIC8vIGNvbnNvbGUubG9nKCdib2FyZCcsIHJlcylcclxuICAgIC8vIGF3YWl0IHJlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgLy8gICBpZiAoaXRlbS5waWNfdXJsc1swXSkge1xyXG4gICAgLy8gICAgIGFwaS5kb3dubG9hZEltYWdlKGl0ZW0ucGljX3VybHNbMF0pLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAgIHNlbGYubGlzdC5wdXNoKHtcclxuICAgIC8vICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXHJcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRCeTogaXRlbS5jcmVhdG9yLFxyXG4gICAgLy8gICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAvLyAgICAgICAgIGNvdmVyOiByZXMudGVtcEZpbGVQYXRoLFxyXG4gICAgLy8gICAgICAgICByZWFkOiAyMDBcclxuICAgIC8vICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICAgIC8vIGNvbnN0IGJvYXJkcyA9IHJlcy5kYXRhO1xyXG4gICAgLy8gY29uc3QgcmVzZXMgPSBhd2FpdCBhcGkuZG93bmxvYWRJbWFnZXMoYm9hcmRzLm1hcCgoeyBjb3Zlcl9pbWcgfSkgPT4gY292ZXJfaW1nKSlcclxuICAgIC8vIGNvbnN0IHRlbXBGaWxlcyA9IHJlc2VzLm1hcCgoe3RlbXBGaWxlUGF0aH0pID0+IHRlbXBGaWxlUGF0aClcclxuICAgIC8vIHRoaXMubGlzdCA9IGJvYXJkcy5tYXAoYm9hcmQgPT4gKHt0aXRsZSwgdGV4dCwgY3JlYXRvciwgYXV0aG9yLCBjb3Zlcl9pbWd9KSA9PiAoeyB0aXRsZSwgY29udGVudDogdGV4dCwgY3JlYXRlZEJ5OiBjcmVhdG9yLCBhdXRob3I6IHJlYWQsIGNvdmVyOiBjb3Zlcl9pbWcgfSkpXHJcbiAgfVxyXG59XHJcbiJdfQ==