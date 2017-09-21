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
          _this2.setData({
            list: _this2.list.reverse()
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

                this.setData({
                  list: this.list.reverse()
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

              case 11:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJzZXRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibmF2cyIsImN1cnJlbnROYXYiLCJjYXRlZ29yaWVzIiwic2VhcmNoVmFsdWUiLCJtZXRob2RzIiwiY2hhbmdlTmF2IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJib2FyZExpc3QiLCJpZCIsInRoZW4iLCJyZXMiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsIm5hbWUiLCJjcmVhdGVkQXQiLCJkYXRlbGluZSIsImNvdmVyIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwicmVhZCIsImNsaWNrX251bSIsInNldERhdGEiLCJyZXZlcnNlIiwiJGFwcGx5Iiwic2VhcmNoS2V5SW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlYXJjaFRhcCIsInNlYXJjaExpc3QiLCJoYW5kbGVQdWJsaXNoVGFwIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJvcHRpb24iLCJjYXRlZ29yeUxpc3QiLCJyZXN1bHRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxHOztBQUNaOztBQUVBOzs7Ozs7SUFVcUJDLE0sV0FOcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQTtBQURDLENBQVIsRUFFRTtBQUNERztBQURDLENBRkYsQzs7Ozs7Ozs7Ozs7Ozs7NE1BT0NDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLFlBQU0sRUFGRDtB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QUNBO0FBQ0E7QUFDQSxxQkFBS0MsTUFBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0S2dDLGVBQUthLEk7a0JBQXBCckQsTSIsImZpbGUiOiJib2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xyXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCB7XHJcbiAgc2V0VXNlclxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xyXG5cclxuQGNvbm5lY3Qoe1xyXG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyXHJcbn0sIHtcclxuICBzZXRVc2VyXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblj4vlnIgnXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogW10sXHJcbiAgICBuYXZzOiBbXSxcclxuICAgIGN1cnJlbnROYXY6IDAsXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgIHNlYXJjaFZhbHVlOiAnJ1xyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGNoYW5nZU5hdiAoZSkge1xyXG4vLyAgICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbnRoaXMuY3VycmVudE5hdiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbnRoaXMuc2VhcmNoVmFsdWUgPSAnJ1xyXG5hcGkuYm9hcmRMaXN0KHRoaXMuY2F0ZWdvcmllc1t0aGlzLmN1cnJlbnROYXZdLmlkKS50aGVuKHJlcyA9PiB7XHJcbiAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XHJcbiAgICBpZDogaXRlbS5pZCxcclxuICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgY29udGVudDogaXRlbS50ZXh0LFxyXG4gICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvci5uYW1lLFxyXG4gICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxyXG4gICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXHJcbiAgICByZWFkOiBpdGVtLmNsaWNrX251bVxyXG4gIH0pKVxyXG4gIHRoaXMuc2V0RGF0YSh7XHJcbiAgICBsaXN0OnRoaXMubGlzdC5yZXZlcnNlKClcclxuICB9KVxyXG4gIHRoaXMuJGFwcGx5KClcclxufSlcclxufSxcclxuc2VhcmNoS2V5SW5wdXQoZSkge1xyXG4gIHRoaXMuc2V0RGF0YSh7XHJcbiAgICBbYHNlYXJjaFZhbHVlYF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgfSlcclxuICB0aGlzLnNlYXJjaFZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICB0aGlzLiRhcHBseSgpXHJcbn0sXHJcbnNlYXJjaFRhcChlKSB7XHJcbiAgYXBpLnNlYXJjaExpc3QodGhpcy5jYXRlZ29yaWVzW3RoaXMuY3VycmVudE5hdl0uaWQsIHRoaXMuc2VhcmNoVmFsdWUpLnRoZW4ocmVzID0+IHtcclxuICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvci5uYW1lLFxyXG4gICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxyXG4gICAgICByZWFkOiBpdGVtLmNsaWNrX251bVxyXG4gICAgfSkpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfSlcclxufSxcclxuaGFuZGxlUHVibGlzaFRhcChlKSB7XHJcbiAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgIHVybDogJ3B1Ymxpc2gnXHJcbiAgfSlcclxufSxcclxuaGFuZGxlSXRlbVRhcChlKSB7XHJcbi8vICAgICAgY29uc29sZS5sb2coJ2l0ZW0nLCB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdKVxyXG5jb25zdCBpZCA9IHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uaWRcclxuLy8gICAgICBjb25zb2xlLmxvZygnaWQnLCBpZClcclxuLy8gICAgICBjb25zb2xlLmxvZyhgYm9hcmQ/aWQ9JHtpZH1gKVxyXG53ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gIHVybDogYGJvYXJkP2lkPSR7aWR9YFxyXG59KVxyXG59XHJcbn1cclxuXHJcbi8vICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4vLyAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xyXG4vL1xyXG4vLyAgICB3ZXB5LnNob3dMb2FkaW5nKClcclxuLy8gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuLy8gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4vLyAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxyXG4vLyAgICB9KVxyXG4vLyAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxyXG4vLyAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuLy8gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcclxuLy9cclxuLy8gICAgY29uc3QgdXNlciA9IHtcclxuLy8gICAgICAuLi51c2VySW5mbyxcclxuLy8gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcclxuLy8gICAgfVxyXG4vLyAgICBzZXRVc2VyKHVzZXIpXHJcbi8vIOWmguaenOeUqOaIt+WwmuacquWcqCDliJnlhYjms6jlhoxcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBhcGlBLmdldFRva2VuVXNlcklkKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcclxuLy8gICAgICB0aGlzLmpmVXNlcmlkID0gdXNlcklkLmlkXHJcbi8vICAgICAgY29uc3QgVG9rZW4gPSB1c2VySWQuVG9rZW5cclxuLy8gICAgICBpZiAoIVRva2VuKSB7XHJcbi8vICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcclxuLy8gICAgICB9XHJcbi8vXHJcbi8vICAgICAgc2V0VXNlcih7XHJcbi8vICAgICAgICAuLi50aGlzLnVzZXIsXHJcbi8vICAgICAgICBqZlRva2VuOiBUb2tlbixcclxuLy8gICAgICAgIHVzZXJEYXRhOiB1c2VySWRcclxuLy8gICAgICB9KVxyXG4vLyAgICAgIHRoaXMuJGFwcGx5KClcclxuLy8gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuLy8gICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgIGxvZy5lcnJvcih7XHJcbi8vICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcclxuLy8gICAgICAgIG9wcjogJ2luaXQnLFxyXG4vLyAgICAgICAgaW5mbzogZVxyXG4vLyAgICAgIH0pXHJcbi8vICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbi8vICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuLy8gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuLy8gICAgICB9KVxyXG4vLyAgICB9XHJcbi8vICB9XHJcblxyXG5hc3luYyBvblNob3cob3B0aW9uKSB7XHJcbi8vICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICAvLyBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKClcclxuICAgIC8vIGNvbnNvbGUubG9nKGFwaSlcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuY2F0ZWdvcnlMaXN0KClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXN1bHRzJywgcmVzdWx0cylcclxuICAgIHRoaXMubmF2cyA9IHJlc3VsdHMubWFwKCh7bmFtZX0pID0+IG5hbWUpXHJcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHRzXHJcbiAgICAvLyBpZiAob3B0aW9uLmNhdGVnb3J5SWQpIHtcclxuICAgIC8vICAgcmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChpdGVtLmlkID09PSBvcHRpb24uY2F0ZWdvcnlJZCkge1xyXG4gICAgLy8gICAgICAgdGhpcy5jdXJyZW50TmF2ID0gaW5kZXhcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHJlc3VsdHNbdGhpcy5jdXJyZW50TmF2XS5pZClcclxuICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvci5uYW1lLFxyXG4gICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxyXG4gICAgICByZWFkOiBpdGVtLmNsaWNrX251bVxyXG4gICAgfSkpXHJcblxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbGlzdDp0aGlzLmxpc3QucmV2ZXJzZSgpXHJcbiAgICB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2JvYXJkJywgcmVzKVxyXG4gICAgLy8gYXdhaXQgcmVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAvLyAgIGlmIChpdGVtLnBpY191cmxzWzBdKSB7XHJcbiAgICAvLyAgICAgYXBpLmRvd25sb2FkSW1hZ2UoaXRlbS5waWNfdXJsc1swXSkudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgICAgc2VsZi5saXN0LnB1c2goe1xyXG4gICAgLy8gICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgIC8vICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgIC8vICAgICAgICAgY3JlYXRlZEJ5OiBpdGVtLmNyZWF0b3IsXHJcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcclxuICAgIC8vICAgICAgICAgY292ZXI6IHJlcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAvLyAgICAgICAgIHJlYWQ6IDIwMFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgLy8gY29uc3QgYm9hcmRzID0gcmVzLmRhdGE7XHJcbiAgICAvLyBjb25zdCByZXNlcyA9IGF3YWl0IGFwaS5kb3dubG9hZEltYWdlcyhib2FyZHMubWFwKCh7IGNvdmVyX2ltZyB9KSA9PiBjb3Zlcl9pbWcpKVxyXG4gICAgLy8gY29uc3QgdGVtcEZpbGVzID0gcmVzZXMubWFwKCh7dGVtcEZpbGVQYXRofSkgPT4gdGVtcEZpbGVQYXRoKVxyXG4gICAgLy8gdGhpcy5saXN0ID0gYm9hcmRzLm1hcChib2FyZCA9PiAoe3RpdGxlLCB0ZXh0LCBjcmVhdG9yLCBhdXRob3IsIGNvdmVyX2ltZ30pID0+ICh7IHRpdGxlLCBjb250ZW50OiB0ZXh0LCBjcmVhdGVkQnk6IGNyZWF0b3IsIGF1dGhvcjogcmVhZCwgY292ZXI6IGNvdmVyX2ltZyB9KSlcclxuICB9XHJcbn1cclxuIl19