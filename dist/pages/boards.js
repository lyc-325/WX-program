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
      categories: []
    }, _this.methods = {
      changeNav: function changeNav(e) {
        var _this2 = this;

        //      const { jfToken } = this.user
        this.currentNav = e.currentTarget.dataset.index;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJhcGlBIiwibG9nIiwiQm9hcmRzIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsIm5hdnMiLCJjdXJyZW50TmF2IiwiY2F0ZWdvcmllcyIsIm1ldGhvZHMiLCJjaGFuZ2VOYXYiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImJvYXJkTGlzdCIsImlkIiwidGhlbiIsInJlcyIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJ0ZXh0IiwiY3JlYXRlZEJ5IiwiYXV0aG9yIiwibmFtZSIsImNyZWF0ZWRBdCIsImRhdGVsaW5lIiwiY292ZXIiLCJwaWNfdXJscyIsImJhc2VTZXJ2ZXIiLCJyZWFkIiwiY2xpY2tfbnVtIiwiJGFwcGx5IiwiaGFuZGxlUHVibGlzaFRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVJdGVtVGFwIiwiY29uc29sZSIsIm9wdGlvbnMiLCJzaG93TG9hZGluZyIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJnZXRUb2tlblVzZXJJZCIsInVzZXJJZCIsImpmVXNlcmlkIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJ1c2VyRGF0YSIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsIm9wdGlvbiIsImNhdGVnb3J5TGlzdCIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7SUFBWUMsSTs7QUFDWjs7OztBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBS0MsTUFBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4SWdDLGVBQUs2QixJO2tCQUFwQmxFLE0iLCJmaWxlIjoiYm9hcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcbmltcG9ydCAqIGFzIGFwaUEgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCB7IGpmLCB3eCBhcyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuXG5pbXBvcnQge1xuICBzZXRVc2VyXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyXG59LCB7XG4gIHNldFVzZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5Y+L5ZyIJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBuYXZzOiBbXSxcbiAgICBjdXJyZW50TmF2OiAwLFxuICAgIGNhdGVnb3JpZXM6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGNoYW5nZU5hdiAoZSkge1xuLy8gICAgICBjb25zdCB7IGpmVG9rZW4gfSA9IHRoaXMudXNlclxuICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGFwaS5ib2FyZExpc3QodGhpcy5jYXRlZ29yaWVzW3RoaXMuY3VycmVudE5hdl0uaWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgY29udGVudDogaXRlbS50ZXh0LFxuICAgICAgICAgIGNyZWF0ZWRCeTogaXRlbS5hdXRob3IubmFtZSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXG4gICAgICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXG4gICAgICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cbiAgICAgICAgfSkpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVQdWJsaXNoVGFwKGUpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3B1Ymxpc2gnXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlSXRlbVRhcChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnaXRlbScsIHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0pXG4gICAgICBjb25zdCBpZCA9IHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uaWRcbi8vICAgICAgY29uc29sZS5sb2coJ2lkJywgaWQpXG4vLyAgICAgIGNvbnNvbGUubG9nKGBib2FyZD9pZD0ke2lkfWApXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGBib2FyZD9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xuICAgIC8vIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgd2VweS5zaG93TG9hZGluZygpXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcbiAgICB9KVxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAuLi51c2VySW5mbyxcbiAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgICBzZXRVc2VyKHVzZXIpXG4gICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOWImeWFiOazqOWGjFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBhcGlBLmdldFRva2VuVXNlcklkKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgIHRoaXMuamZVc2VyaWQgPSB1c2VySWQuaWRcbiAgICAgIGNvbnN0IFRva2VuID0gdXNlcklkLlRva2VuXG4gICAgICBpZiAoIVRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxuICAgICAgfVxuXG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICBqZlRva2VuOiBUb2tlbixcbiAgICAgICAgdXNlckRhdGE6IHVzZXJJZFxuICAgICAgfSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuICAgICAgICBvcHI6ICdpbml0JyxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSlcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuLy8gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuLy8gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3Rlcidcbi8vICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3cob3B0aW9uKSB7XG4vLyAgICBjb25zdCB7IGpmVG9rZW4gfSA9IHRoaXMudXNlclxuICAgIC8vIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKVxuICAgIC8vIGNvbnNvbGUubG9nKGFwaSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXBpLmNhdGVnb3J5TGlzdCgpXG4gICAgLy8gY29uc29sZS5sb2coJ3Jlc3VsdHMnLCByZXN1bHRzKVxuICAgIHRoaXMubmF2cyA9IHJlc3VsdHMubWFwKCh7bmFtZX0pID0+IG5hbWUpXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0c1xuICAgIC8vIGlmIChvcHRpb24uY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgcmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gb3B0aW9uLmNhdGVnb3J5SWQpIHtcbiAgICAvLyAgICAgICB0aGlzLmN1cnJlbnROYXYgPSBpbmRleFxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHJlc3VsdHNbdGhpcy5jdXJyZW50TmF2XS5pZClcbiAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXG4gICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcbiAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXG4gICAgfSkpXG4gICAgLy8gY29uc29sZS5sb2coJ2JvYXJkJywgcmVzKVxuICAgIC8vIGF3YWl0IHJlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vICAgaWYgKGl0ZW0ucGljX3VybHNbMF0pIHtcbiAgICAvLyAgICAgYXBpLmRvd25sb2FkSW1hZ2UoaXRlbS5waWNfdXJsc1swXSkudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICAgIHNlbGYubGlzdC5wdXNoKHtcbiAgICAvLyAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgIC8vICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgLy8gICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgLy8gICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uY3JlYXRvcixcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAvLyAgICAgICAgIGNvdmVyOiByZXMudGVtcEZpbGVQYXRoLFxuICAgIC8vICAgICAgICAgcmVhZDogMjAwXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgICAvLyBjb25zdCBib2FyZHMgPSByZXMuZGF0YTtcbiAgICAvLyBjb25zdCByZXNlcyA9IGF3YWl0IGFwaS5kb3dubG9hZEltYWdlcyhib2FyZHMubWFwKCh7IGNvdmVyX2ltZyB9KSA9PiBjb3Zlcl9pbWcpKVxuICAgIC8vIGNvbnN0IHRlbXBGaWxlcyA9IHJlc2VzLm1hcCgoe3RlbXBGaWxlUGF0aH0pID0+IHRlbXBGaWxlUGF0aClcbiAgICAvLyB0aGlzLmxpc3QgPSBib2FyZHMubWFwKGJvYXJkID0+ICh7dGl0bGUsIHRleHQsIGNyZWF0b3IsIGF1dGhvciwgY292ZXJfaW1nfSkgPT4gKHsgdGl0bGUsIGNvbnRlbnQ6IHRleHQsIGNyZWF0ZWRCeTogY3JlYXRvciwgYXV0aG9yOiByZWFkLCBjb3ZlcjogY292ZXJfaW1nIH0pKVxuICB9XG59XG4iXX0=