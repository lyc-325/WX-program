'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

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

var _account = require('./../apis/account.js');

var apiA = _interopRequireWildcard(_account);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _config = require('./../config.js');

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

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
        console.log('item', this.list[e.currentTarget.dataset.index]);
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
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(options) {
        var setUser, _ref3, code, _ref4, data, openid, _ref5, userInfo, password, user, userId, Token;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setUser = this.methods.setUser;
                // const pushMsg = this.methods.pushMsg.bind(this)

                _wepy2.default.showLoading();
                _context.next = 4;
                return _wepy2.default.login();

              case 4:
                _ref3 = _context.sent;
                code = _ref3.code;
                _context.next = 8;
                return _wepy2.default.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _config.wx.appId + '&secret=' + _config.wx.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
                });

              case 8:
                _ref4 = _context.sent;
                data = _ref4.data;
                openid = data.openid;
                _context.next = 13;
                return _wepy2.default.getUserInfo();

              case 13:
                _ref5 = _context.sent;
                userInfo = _ref5.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });

                setUser(user);
                // 如果用户尚未在 则先注册
                _context.prev = 18;
                _context.next = 21;
                return apiA.getTokenUserId(openid, password.toLowerCase());

              case 21:
                userId = _context.sent;

                this.jfUserid = userId.id;
                Token = userId.Token;

                if (Token) {
                  _context.next = 26;
                  break;
                }

                throw new Error('user not exist');

              case 26:

                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token,
                  userData: userId
                }));
                this.$apply();
                _wepy2.default.hideLoading();
                _context.next = 35;
                break;

              case 31:
                _context.prev = 31;
                _context.t0 = _context['catch'](18);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context.t0
                });
                _wepy2.default.hideLoading();
                //      wepy.navigateTo({
                //        url: '/pages/register'
                //      })

              case 35:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[18, 31]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(option) {
        var results, res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return api.categoryList();

              case 2:
                results = _context2.sent;

                // console.log('results', results)
                this.navs = results.map(function (_ref7) {
                  var name = _ref7.name;
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
                _context2.next = 7;
                return api.boardList(results[this.currentNav].id);

              case 7:
                res = _context2.sent;

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
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow(_x2) {
        return _ref6.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Boards;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Boards , 'pages/boards'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJhcGlBIiwibG9nIiwiQm9hcmRzIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsIm5hdnMiLCJjdXJyZW50TmF2IiwiY2F0ZWdvcmllcyIsInNlYXJjaFZhbHVlIiwibWV0aG9kcyIsImNoYW5nZU5hdiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiYm9hcmRMaXN0IiwiaWQiLCJ0aGVuIiwicmVzIiwibWFwIiwiaXRlbSIsInRpdGxlIiwiY29udGVudCIsInRleHQiLCJjcmVhdGVkQnkiLCJhdXRob3IiLCJuYW1lIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCJjbGlja19udW0iLCIkYXBwbHkiLCJzZWFyY2hLZXlJbnB1dCIsInNldERhdGEiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlYXJjaFRhcCIsInNlYXJjaExpc3QiLCJoYW5kbGVQdWJsaXNoVGFwIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJjb25zb2xlIiwib3B0aW9ucyIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwicmVxdWVzdCIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsImdldFRva2VuVXNlcklkIiwidXNlcklkIiwiamZVc2VyaWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsInVzZXJEYXRhIiwiaGlkZUxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwib3B0aW9uIiwiY2F0ZWdvcnlMaXN0IiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9KZ0MsZUFBS21DLEk7a0JBQXBCekUsTSIsImZpbGUiOiJib2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xuaW1wb3J0ICogYXMgYXBpQSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IHsgamYsIHd4IGFzIGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5cbmltcG9ydCB7XG4gIHNldFVzZXJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXJcbn0sIHtcbiAgc2V0VXNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblj4vlnIgnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIG5hdnM6IFtdLFxuICAgIGN1cnJlbnROYXY6IDAsXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgc2VhcmNoVmFsdWU6ICcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGNoYW5nZU5hdiAoZSkge1xuLy8gICAgICBjb25zdCB7IGpmVG9rZW4gfSA9IHRoaXMudXNlclxuICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJ1xuICAgICAgYXBpLmJvYXJkTGlzdCh0aGlzLmNhdGVnb3JpZXNbdGhpcy5jdXJyZW50TmF2XS5pZCkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvci5uYW1lLFxuICAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAgICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcbiAgICAgICAgICByZWFkOiBpdGVtLmNsaWNrX251bVxuICAgICAgICB9KSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlYXJjaEtleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgc2VhcmNoVmFsdWVgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIHNlYXJjaFRhcChlKSB7XG4gICAgICBhcGkuc2VhcmNoTGlzdCh0aGlzLmNhdGVnb3JpZXNbdGhpcy5jdXJyZW50TmF2XS5pZCwgdGhpcy5zZWFyY2hWYWx1ZSkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvci5uYW1lLFxuICAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAgICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcbiAgICAgICAgICByZWFkOiBpdGVtLmNsaWNrX251bVxuICAgICAgICB9KSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZVB1Ymxpc2hUYXAoZSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAncHVibGlzaCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVJdGVtVGFwKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpdGVtJywgdGhpcy5saXN0W2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XSlcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5saXN0W2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5pZFxuLy8gICAgICBjb25zb2xlLmxvZygnaWQnLCBpZClcbi8vICAgICAgY29uc29sZS5sb2coYGJvYXJkP2lkPSR7aWR9YClcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYGJvYXJkP2lkPSR7aWR9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXG4gICAgLy8gY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuICAgIH0pXG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcbiAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkob3BlbmlkKVxuXG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXG4gICAgfVxuICAgIHNldFVzZXIodXNlcilcbiAgICAvLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg5YiZ5YWI5rOo5YaMXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGFwaUEuZ2V0VG9rZW5Vc2VySWQob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxuICAgICAgdGhpcy5qZlVzZXJpZCA9IHVzZXJJZC5pZFxuICAgICAgY29uc3QgVG9rZW4gPSB1c2VySWQuVG9rZW5cbiAgICAgIGlmICghVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgIGpmVG9rZW46IFRva2VuLFxuICAgICAgICB1c2VyRGF0YTogdXNlcklkXG4gICAgICB9KVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXG4gICAgICAgIG9wcjogJ2luaXQnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4vLyAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4vLyAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuLy8gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdyhvcHRpb24pIHtcbi8vICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXG4gICAgLy8gY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbigpXG4gICAgLy8gY29uc29sZS5sb2coYXBpKVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuY2F0ZWdvcnlMaXN0KClcbiAgICAvLyBjb25zb2xlLmxvZygncmVzdWx0cycsIHJlc3VsdHMpXG4gICAgdGhpcy5uYXZzID0gcmVzdWx0cy5tYXAoKHtuYW1lfSkgPT4gbmFtZSlcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHRzXG4gICAgLy8gaWYgKG9wdGlvbi5jYXRlZ29yeUlkKSB7XG4gICAgLy8gICByZXN1bHRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgLy8gICAgIGlmIChpdGVtLmlkID09PSBvcHRpb24uY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgICAgIHRoaXMuY3VycmVudE5hdiA9IGluZGV4XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5ib2FyZExpc3QocmVzdWx0c1t0aGlzLmN1cnJlbnROYXZdLmlkKVxuICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAgIGNyZWF0ZWRCeTogaXRlbS5hdXRob3IubmFtZSxcbiAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxuICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cbiAgICB9KSlcbiAgICAvLyBjb25zb2xlLmxvZygnYm9hcmQnLCByZXMpXG4gICAgLy8gYXdhaXQgcmVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICBpZiAoaXRlbS5waWNfdXJsc1swXSkge1xuICAgIC8vICAgICBhcGkuZG93bmxvYWRJbWFnZShpdGVtLnBpY191cmxzWzBdKS50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgICAgc2VsZi5saXN0LnB1c2goe1xuICAgIC8vICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgLy8gICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRCeTogaXRlbS5jcmVhdG9yLFxuICAgIC8vICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgIC8vICAgICAgICAgY292ZXI6IHJlcy50ZW1wRmlsZVBhdGgsXG4gICAgLy8gICAgICAgICByZWFkOiAyMDBcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICAgIC8vIGNvbnN0IGJvYXJkcyA9IHJlcy5kYXRhO1xuICAgIC8vIGNvbnN0IHJlc2VzID0gYXdhaXQgYXBpLmRvd25sb2FkSW1hZ2VzKGJvYXJkcy5tYXAoKHsgY292ZXJfaW1nIH0pID0+IGNvdmVyX2ltZykpXG4gICAgLy8gY29uc3QgdGVtcEZpbGVzID0gcmVzZXMubWFwKCh7dGVtcEZpbGVQYXRofSkgPT4gdGVtcEZpbGVQYXRoKVxuICAgIC8vIHRoaXMubGlzdCA9IGJvYXJkcy5tYXAoYm9hcmQgPT4gKHt0aXRsZSwgdGV4dCwgY3JlYXRvciwgYXV0aG9yLCBjb3Zlcl9pbWd9KSA9PiAoeyB0aXRsZSwgY29udGVudDogdGV4dCwgY3JlYXRlZEJ5OiBjcmVhdG9yLCBhdXRob3I6IHJlYWQsIGNvdmVyOiBjb3Zlcl9pbWcgfSkpXG4gIH1cbn1cbiJdfQ==