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
                    createdBy: item.author,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJzZXRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibmF2cyIsImN1cnJlbnROYXYiLCJjYXRlZ29yaWVzIiwic2VhcmNoVmFsdWUiLCJtZXRob2RzIiwiY2hhbmdlTmF2IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJib2FyZExpc3QiLCJpZCIsInRoZW4iLCJyZXMiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsIm5hbWUiLCJjcmVhdGVkQXQiLCJkYXRlbGluZSIsImNvdmVyIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwicmVhZCIsImNsaWNrX251bSIsIiRhcHBseSIsInNlYXJjaEtleUlucHV0Iiwic2V0RGF0YSIsImRldGFpbCIsInZhbHVlIiwic2VhcmNoVGFwIiwic2VhcmNoTGlzdCIsImhhbmRsZVB1Ymxpc2hUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlSXRlbVRhcCIsIm9wdGlvbiIsImNhdGVnb3J5TGlzdCIsInJlc3VsdHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBQ0E7Ozs7OztJQVFxQkMsTSxXQUxwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBO0FBREMsQ0FBUixFQUVFO0FBQ0RHO0FBREMsQ0FGRixDOzs7Ozs7Ozs7Ozs7Ozs0TUFNQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGtCQUFZLENBSFA7QUFJTEMsa0JBQVksRUFKUDtBQUtMQyxtQkFBYTtBQUxSLEssUUFPUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLENBREgsRUFDTTtBQUFBOztBQUNsQjtBQUNBLGFBQUtMLFVBQUwsR0FBa0JLLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUExQztBQUNBLGFBQUtOLFdBQUwsR0FBbUIsRUFBbkI7QUFDQWIsWUFBSW9CLFNBQUosQ0FBYyxLQUFLUixVQUFMLENBQWdCLEtBQUtELFVBQXJCLEVBQWlDVSxFQUEvQyxFQUFtREMsSUFBbkQsQ0FBd0QsZUFBTztBQUM3RCxpQkFBS2IsSUFBTCxHQUFZYyxJQUFJQyxHQUFKLENBQVE7QUFBQSxtQkFBUztBQUMzQkgsa0JBQUlJLEtBQUtKLEVBRGtCO0FBRTNCSyxxQkFBT0QsS0FBS0MsS0FGZTtBQUczQkMsdUJBQVNGLEtBQUtHLElBSGE7QUFJM0JDLHlCQUFXSixLQUFLSyxNQUFMLENBQVlDLElBSkk7QUFLM0JDLHlCQUFXUCxLQUFLUSxRQUxXO0FBTTNCQyxxQkFBT1QsS0FBS1UsUUFBTCxDQUFjLENBQWQsU0FBc0IsV0FBR0MsVUFBekIsR0FBc0NYLEtBQUtVLFFBQUwsQ0FBYyxDQUFkLENBQXRDLEdBQTJELEVBTnZDO0FBTzNCRSxvQkFBTVosS0FBS2E7QUFQZ0IsYUFBVDtBQUFBLFdBQVIsQ0FBWjtBQVNBLGlCQUFLQyxNQUFMO0FBQ0QsU0FYRDtBQVlDLE9BakJXO0FBa0JaQyxvQkFsQlksMEJBa0JHeEIsQ0FsQkgsRUFrQk07QUFDaEIsYUFBS3lCLE9BQUwsa0RBQ21CekIsRUFBRTBCLE1BQUYsQ0FBU0MsS0FENUI7QUFHQSxhQUFLOUIsV0FBTCxHQUFtQkcsRUFBRTBCLE1BQUYsQ0FBU0MsS0FBNUI7QUFDQSxhQUFLSixNQUFMO0FBQ0QsT0F4Qlc7QUF5QlpLLGVBekJZLHFCQXlCRjVCLENBekJFLEVBeUJDO0FBQUE7O0FBQ1hoQixZQUFJNkMsVUFBSixDQUFlLEtBQUtqQyxVQUFMLENBQWdCLEtBQUtELFVBQXJCLEVBQWlDVSxFQUFoRCxFQUFvRCxLQUFLUixXQUF6RCxFQUFzRVMsSUFBdEUsQ0FBMkUsZUFBTztBQUNoRixpQkFBS2IsSUFBTCxHQUFZYyxJQUFJQyxHQUFKLENBQVE7QUFBQSxtQkFBUztBQUMzQkgsa0JBQUlJLEtBQUtKLEVBRGtCO0FBRTNCSyxxQkFBT0QsS0FBS0MsS0FGZTtBQUczQkMsdUJBQVNGLEtBQUtHLElBSGE7QUFJM0JDLHlCQUFXSixLQUFLSyxNQUFMLENBQVlDLElBSkk7QUFLM0JDLHlCQUFXUCxLQUFLUSxRQUxXO0FBTTNCQyxxQkFBT1QsS0FBS1UsUUFBTCxDQUFjLENBQWQsU0FBc0IsV0FBR0MsVUFBekIsR0FBc0NYLEtBQUtVLFFBQUwsQ0FBYyxDQUFkLENBQXRDLEdBQTJELEVBTnZDO0FBTzNCRSxvQkFBTVosS0FBS2E7QUFQZ0IsYUFBVDtBQUFBLFdBQVIsQ0FBWjtBQVNBLGlCQUFLQyxNQUFMO0FBQ0QsU0FYRDtBQVlELE9BdENXO0FBdUNaTyxzQkF2Q1ksNEJBdUNLOUIsQ0F2Q0wsRUF1Q1E7QUFDbEIsdUJBQUsrQixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BM0NXO0FBNENaQyxtQkE1Q1kseUJBNENFakMsQ0E1Q0YsRUE0Q0s7QUFDakI7QUFDQSxZQUFNSyxLQUFLLEtBQUtaLElBQUwsQ0FBVU8sRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWxDLEVBQXlDRSxFQUFwRDtBQUNBO0FBQ0E7QUFDQSx1QkFBSzBCLFVBQUwsQ0FBZ0I7QUFDZEMsNkJBQWlCM0I7QUFESCxTQUFoQjtBQUdDO0FBcERXLEs7Ozs7OztBQXNEWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzRHQUNhNkIsTTs7Ozs7Ozt1QkFJYWxELElBQUltRCxZQUFKLEU7OztBQUFoQkMsdUI7O0FBQ047QUFDQSxxQkFBSzFDLElBQUwsR0FBWTBDLFFBQVE1QixHQUFSLENBQVk7QUFBQSxzQkFBRU8sSUFBRixTQUFFQSxJQUFGO0FBQUEseUJBQVlBLElBQVo7QUFBQSxpQkFBWixDQUFaO0FBQ0EscUJBQUtuQixVQUFMLEdBQWtCd0MsT0FBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7dUJBQ2tCcEQsSUFBSW9CLFNBQUosQ0FBY2dDLFFBQVEsS0FBS3pDLFVBQWIsRUFBeUJVLEVBQXZDLEM7OztBQUFaRSxtQjs7QUFDTixxQkFBS2QsSUFBTCxHQUFZYyxJQUFJQyxHQUFKLENBQVE7QUFBQSx5QkFBUztBQUMzQkgsd0JBQUlJLEtBQUtKLEVBRGtCO0FBRTNCSywyQkFBT0QsS0FBS0MsS0FGZTtBQUczQkMsNkJBQVNGLEtBQUtHLElBSGE7QUFJM0JDLCtCQUFXSixLQUFLSyxNQUpXO0FBSzNCRSwrQkFBV1AsS0FBS1EsUUFMVztBQU0zQkMsMkJBQU9ULEtBQUtVLFFBQUwsQ0FBYyxDQUFkLFNBQXNCLFdBQUdDLFVBQXpCLEdBQXNDWCxLQUFLVSxRQUFMLENBQWMsQ0FBZCxDQUF0QyxHQUEyRCxFQU52QztBQU8zQkUsMEJBQU1aLEtBQUthO0FBUGdCLG1CQUFUO0FBQUEsaUJBQVIsQ0FBWjtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQUtDLE1BQUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0pnQyxlQUFLYyxJO2tCQUFwQnBELE0iLCJmaWxlIjoiYm9hcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcclxuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7XHJcbiAgc2V0VXNlclxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xyXG5AY29ubmVjdCh7XHJcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXJcclxufSwge1xyXG4gIHNldFVzZXJcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5Y+L5ZyIJ1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogW10sXHJcbiAgICBuYXZzOiBbXSxcclxuICAgIGN1cnJlbnROYXY6IDAsXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgIHNlYXJjaFZhbHVlOiAnJ1xyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2hhbmdlTmF2IChlKSB7XHJcbi8vICAgICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxudGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxudGhpcy5zZWFyY2hWYWx1ZSA9ICcnXHJcbmFwaS5ib2FyZExpc3QodGhpcy5jYXRlZ29yaWVzW3RoaXMuY3VycmVudE5hdl0uaWQpLnRoZW4ocmVzID0+IHtcclxuICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcclxuICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICBjb250ZW50OiBpdGVtLnRleHQsXHJcbiAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXHJcbiAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcclxuICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgfSkpXHJcbiAgdGhpcy4kYXBwbHkoKVxyXG59KVxyXG59LFxyXG5zZWFyY2hLZXlJbnB1dChlKSB7XHJcbiAgdGhpcy5zZXREYXRhKHtcclxuICAgIFtgc2VhcmNoVmFsdWVgXTogZS5kZXRhaWwudmFsdWVcclxuICB9KVxyXG4gIHRoaXMuc2VhcmNoVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gIHRoaXMuJGFwcGx5KClcclxufSxcclxuc2VhcmNoVGFwKGUpIHtcclxuICBhcGkuc2VhcmNoTGlzdCh0aGlzLmNhdGVnb3JpZXNbdGhpcy5jdXJyZW50TmF2XS5pZCwgdGhpcy5zZWFyY2hWYWx1ZSkudGhlbihyZXMgPT4ge1xyXG4gICAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XHJcbiAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgY29udGVudDogaXRlbS50ZXh0LFxyXG4gICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXHJcbiAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcclxuICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXHJcbiAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICB9KSlcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9KVxyXG59LFxyXG5oYW5kbGVQdWJsaXNoVGFwKGUpIHtcclxuICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgdXJsOiAncHVibGlzaCdcclxuICB9KVxyXG59LFxyXG5oYW5kbGVJdGVtVGFwKGUpIHtcclxuLy8gICAgICBjb25zb2xlLmxvZygnaXRlbScsIHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0pXHJcbmNvbnN0IGlkID0gdGhpcy5saXN0W2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5pZFxyXG4vLyAgICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkKVxyXG4vLyAgICAgIGNvbnNvbGUubG9nKGBib2FyZD9pZD0ke2lkfWApXHJcbndlcHkubmF2aWdhdGVUbyh7XHJcbiAgdXJsOiBgYm9hcmQ/aWQ9JHtpZH1gXHJcbn0pXHJcbn1cclxufVxyXG4vLyAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuLy8gICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcclxuLy9cclxuLy8gICAgd2VweS5zaG93TG9hZGluZygpXHJcbi8vICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbi8vICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuLy8gICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcclxuLy8gICAgfSlcclxuLy8gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcclxuLy8gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbi8vICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXHJcbi8vXHJcbi8vICAgIGNvbnN0IHVzZXIgPSB7XHJcbi8vICAgICAgLi4udXNlckluZm8sXHJcbi8vICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXHJcbi8vICAgIH1cclxuLy8gICAgc2V0VXNlcih1c2VyKVxyXG4vLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg5YiZ5YWI5rOo5YaMXHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpQS5nZXRUb2tlblVzZXJJZChvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXHJcbi8vICAgICAgdGhpcy5qZlVzZXJpZCA9IHVzZXJJZC5pZFxyXG4vLyAgICAgIGNvbnN0IFRva2VuID0gdXNlcklkLlRva2VuXHJcbi8vICAgICAgaWYgKCFUb2tlbikge1xyXG4vLyAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXHJcbi8vICAgICAgfVxyXG4vL1xyXG4vLyAgICAgIHNldFVzZXIoe1xyXG4vLyAgICAgICAgLi4udGhpcy51c2VyLFxyXG4vLyAgICAgICAgamZUb2tlbjogVG9rZW4sXHJcbi8vICAgICAgICB1c2VyRGF0YTogdXNlcklkXHJcbi8vICAgICAgfSlcclxuLy8gICAgICB0aGlzLiRhcHBseSgpXHJcbi8vICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbi8vICAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgICBsb2cuZXJyb3Ioe1xyXG4vLyAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXHJcbi8vICAgICAgICBvcHI6ICdpbml0JyxcclxuLy8gICAgICAgIGluZm86IGVcclxuLy8gICAgICB9KVxyXG4vLyAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4vLyAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbi8vICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbi8vICAgICAgfSlcclxuLy8gICAgfVxyXG4vLyAgfVxyXG5hc3luYyBvblNob3cob3B0aW9uKSB7XHJcbi8vICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICAvLyBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKClcclxuICAgIC8vIGNvbnNvbGUubG9nKGFwaSlcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuY2F0ZWdvcnlMaXN0KClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXN1bHRzJywgcmVzdWx0cylcclxuICAgIHRoaXMubmF2cyA9IHJlc3VsdHMubWFwKCh7bmFtZX0pID0+IG5hbWUpXHJcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHRzXHJcbiAgICAvLyBpZiAob3B0aW9uLmNhdGVnb3J5SWQpIHtcclxuICAgIC8vICAgcmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChpdGVtLmlkID09PSBvcHRpb24uY2F0ZWdvcnlJZCkge1xyXG4gICAgLy8gICAgICAgdGhpcy5jdXJyZW50TmF2ID0gaW5kZXhcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHJlc3VsdHNbdGhpcy5jdXJyZW50TmF2XS5pZClcclxuICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvcixcclxuICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxyXG4gICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcclxuICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cclxuICAgIH0pKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2JvYXJkJywgcmVzKVxyXG4gICAgLy8gYXdhaXQgcmVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAvLyAgIGlmIChpdGVtLnBpY191cmxzWzBdKSB7XHJcbiAgICAvLyAgICAgYXBpLmRvd25sb2FkSW1hZ2UoaXRlbS5waWNfdXJsc1swXSkudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgICAgc2VsZi5saXN0LnB1c2goe1xyXG4gICAgLy8gICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgIC8vICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgIC8vICAgICAgICAgY3JlYXRlZEJ5OiBpdGVtLmNyZWF0b3IsXHJcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcclxuICAgIC8vICAgICAgICAgY292ZXI6IHJlcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAvLyAgICAgICAgIHJlYWQ6IDIwMFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgLy8gY29uc3QgYm9hcmRzID0gcmVzLmRhdGE7XHJcbiAgICAvLyBjb25zdCByZXNlcyA9IGF3YWl0IGFwaS5kb3dubG9hZEltYWdlcyhib2FyZHMubWFwKCh7IGNvdmVyX2ltZyB9KSA9PiBjb3Zlcl9pbWcpKVxyXG4gICAgLy8gY29uc3QgdGVtcEZpbGVzID0gcmVzZXMubWFwKCh7dGVtcEZpbGVQYXRofSkgPT4gdGVtcEZpbGVQYXRoKVxyXG4gICAgLy8gdGhpcy5saXN0ID0gYm9hcmRzLm1hcChib2FyZCA9PiAoe3RpdGxlLCB0ZXh0LCBjcmVhdG9yLCBhdXRob3IsIGNvdmVyX2ltZ30pID0+ICh7IHRpdGxlLCBjb250ZW50OiB0ZXh0LCBjcmVhdGVkQnk6IGNyZWF0b3IsIGF1dGhvcjogcmVhZCwgY292ZXI6IGNvdmVyX2ltZyB9KSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==