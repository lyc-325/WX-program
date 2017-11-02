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
      searchValue: '',
      page: 2
    }, _this.methods = {
      changeNav: function changeNav(e) {
        var _this2 = this;

        this.page = 2;
        this.currentNav = e.currentTarget.dataset.index;
        this.searchValue = '';
        api.boardList(this.categories[this.currentNav].id).then(function (res) {
          _this2.list = res.map(function (item) {
            return {
              id: item.id,
              title: item.title,
              content: item.text,
              createdBy: item.author,
              createdAt: item.dateline,
              cover: item.pic_urls[0] ? ('' + _config.jf.baseServer + item.pic_urls[0]).replace(/\.[^\.]+$/, '_thumbnail.jpg') : '',
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
              cover: item.pic_urls[0] ? ('' + _config.jf.baseServer + item.pic_urls[0]).replace(/\.[^\.]+$/, '_thumbnail.jpg') : '',
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
      getMoreList: function getMoreList() {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var results;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  results = _this4.categories;
                  _context.next = 3;
                  return api.boardList(results[_this4.currentNav].id, _this4.page).then(function (response) {
                    if (response != null) {
                      var res = response;
                      _this4.page++;
                      var newList = res.map(function (item) {
                        return {
                          id: item.id,
                          title: item.title,
                          content: item.text,
                          createdBy: item.author,
                          createdAt: item.dateline,
                          cover: item.pic_urls[0] ? ('' + _config.jf.baseServer + item.pic_urls[0]).replace(/\.[^\.]+$/, '_thumbnail.jpg') : '',
                          read: item.click_num
                        };
                      });
                      _this4.list = _this4.list.concat(newList);
                      _this4.$apply();
                    } else {
                      wx.showToast({
                        title: '没有更多文章了',
                        icon: 'success',
                        duration: 2000
                      });
                    }
                  });

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this4);
        }))();
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
    key: 'onLoad',

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
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(option) {
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
                _context2.next = 7;
                return api.boardList(results[this.currentNav].id);

              case 7:
                res = _context2.sent;

                this.list = res.map(function (item) {
                  return {
                    id: item.id,
                    title: item.title,
                    content: item.text,
                    createdBy: item.author,
                    createdAt: item.dateline,
                    cover: item.pic_urls[0] ? ('' + _config.jf.baseServer + item.pic_urls[0]).replace(/\.[^\.]+$/, '_thumbnail.jpg') : '',
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

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Boards;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Boards , 'pages/boards'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJzZXRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibmF2cyIsImN1cnJlbnROYXYiLCJjYXRlZ29yaWVzIiwic2VhcmNoVmFsdWUiLCJwYWdlIiwibWV0aG9kcyIsImNoYW5nZU5hdiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiYm9hcmRMaXN0IiwiaWQiLCJ0aGVuIiwicmVzIiwibWFwIiwiaXRlbSIsInRpdGxlIiwiY29udGVudCIsInRleHQiLCJjcmVhdGVkQnkiLCJhdXRob3IiLCJjcmVhdGVkQXQiLCJkYXRlbGluZSIsImNvdmVyIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwicmVwbGFjZSIsInJlYWQiLCJjbGlja19udW0iLCIkYXBwbHkiLCJzZWFyY2hLZXlJbnB1dCIsInNldERhdGEiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlYXJjaFRhcCIsInNlYXJjaExpc3QiLCJuYW1lIiwiaGFuZGxlUHVibGlzaFRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRNb3JlTGlzdCIsInJlc3VsdHMiLCJyZXNwb25zZSIsIm5ld0xpc3QiLCJjb25jYXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImhhbmRsZUl0ZW1UYXAiLCJvcHRpb24iLCJjYXRlZ29yeUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFDQTs7Ozs7O0lBUXFCQyxNLFdBTHBCLHdCQUFRO0FBQ1BDLFFBQU07QUFBQSxXQUFTQyxNQUFNQyxNQUFOLENBQWFGLElBQXRCO0FBQUE7QUFEQyxDQUFSLEVBRUU7QUFDREc7QUFEQyxDQUZGLEM7Ozs7Ozs7Ozs7Ozs7OzRN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QVBnQixtQkFBVDtBQUFBLGlCQUFSLENBQVo7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFLQyxNQUFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFMZ0MsZUFBSzFCLEk7a0JBQXBCYixNIiwiZmlsZSI6ImJvYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXHJcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge1xyXG4gIHNldFVzZXJcclxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcclxuQGNvbm5lY3Qoe1xyXG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyXHJcbn0sIHtcclxuICBzZXRVc2VyXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgbmF2czogW10sXHJcbiAgICBjdXJyZW50TmF2OiAwLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgICBzZWFyY2hWYWx1ZTogJycsXHJcbiAgICBwYWdlOjIsXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjaGFuZ2VOYXYgKGUpIHtcclxuXHJcbiAgICAgIHRoaXMucGFnZSA9IDJcclxuICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnXHJcbiAgICAgIGFwaS5ib2FyZExpc3QodGhpcy5jYXRlZ29yaWVzW3RoaXMuY3VycmVudE5hdl0uaWQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxyXG4gICAgICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gLnJlcGxhY2UoL1xcLlteXFwuXSskLywnX3RodW1ibmFpbC5qcGcnKSA6ICcnLFxyXG4gICAgICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cclxuICAgICAgICB9KSlcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoS2V5SW5wdXQoZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtgc2VhcmNoVmFsdWVgXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBzZWFyY2hUYXAoZSkge1xyXG4gICAgICBhcGkuc2VhcmNoTGlzdCh0aGlzLmNhdGVnb3JpZXNbdGhpcy5jdXJyZW50TmF2XS5pZCwgdGhpcy5zZWFyY2hWYWx1ZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgICAgIGNyZWF0ZWRCeTogaXRlbS5hdXRob3IubmFtZSxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcclxuICAgICAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YC5yZXBsYWNlKC9cXC5bXlxcLl0rJC8sJ190aHVtYm5haWwuanBnJykgOiAnJyxcclxuICAgICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGhhbmRsZVB1Ymxpc2hUYXAoZSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ3B1Ymxpc2gnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0TW9yZUxpc3QoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSAgdGhpcy5jYXRlZ29yaWVzXHJcbiAgICAgIGF3YWl0IGFwaS5ib2FyZExpc3QocmVzdWx0c1t0aGlzLmN1cnJlbnROYXZdLmlkLHRoaXMucGFnZSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IHJlc3BvbnNlXHJcbiAgICAgICAgICB0aGlzLnBhZ2UrK1xyXG4gICAgICAgICAgY29uc3QgbmV3TGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvcixcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxyXG4gICAgICAgICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAucmVwbGFjZSgvXFwuW15cXC5dKyQvLCdfdGh1bWJuYWlsLmpwZycpIDogJycsXHJcbiAgICAgICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5jb25jYXQobmV3TGlzdClcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5rKh5pyJ5pu05aSa5paH56ug5LqGJyxcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBoYW5kbGVJdGVtVGFwKGUpIHtcclxuLy8gICAgICBjb25zb2xlLmxvZygnaXRlbScsIHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0pXHJcbmNvbnN0IGlkID0gdGhpcy5saXN0W2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5pZFxyXG4vLyAgICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkKVxyXG4vLyAgICAgIGNvbnNvbGUubG9nKGBib2FyZD9pZD0ke2lkfWApXHJcbndlcHkubmF2aWdhdGVUbyh7XHJcbiAgdXJsOiBgYm9hcmQ/aWQ9JHtpZH1gXHJcbn0pXHJcbn1cclxufVxyXG4vLyAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuLy8gICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcclxuLy9cclxuLy8gICAgd2VweS5zaG93TG9hZGluZygpXHJcbi8vICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbi8vICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuLy8gICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcclxuLy8gICAgfSlcclxuLy8gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcclxuLy8gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbi8vICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXHJcbi8vXHJcbi8vICAgIGNvbnN0IHVzZXIgPSB7XHJcbi8vICAgICAgLi4udXNlckluZm8sXHJcbi8vICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXHJcbi8vICAgIH1cclxuLy8gICAgc2V0VXNlcih1c2VyKVxyXG4vLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg5YiZ5YWI5rOo5YaMXHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpQS5nZXRUb2tlblVzZXJJZChvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXHJcbi8vICAgICAgdGhpcy5qZlVzZXJpZCA9IHVzZXJJZC5pZFxyXG4vLyAgICAgIGNvbnN0IFRva2VuID0gdXNlcklkLlRva2VuXHJcbi8vICAgICAgaWYgKCFUb2tlbikge1xyXG4vLyAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXHJcbi8vICAgICAgfVxyXG4vL1xyXG4vLyAgICAgIHNldFVzZXIoe1xyXG4vLyAgICAgICAgLi4udGhpcy51c2VyLFxyXG4vLyAgICAgICAgamZUb2tlbjogVG9rZW4sXHJcbi8vICAgICAgICB1c2VyRGF0YTogdXNlcklkXHJcbi8vICAgICAgfSlcclxuLy8gICAgICB0aGlzLiRhcHBseSgpXHJcbi8vICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbi8vICAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgICBsb2cuZXJyb3Ioe1xyXG4vLyAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXHJcbi8vICAgICAgICBvcHI6ICdpbml0JyxcclxuLy8gICAgICAgIGluZm86IGVcclxuLy8gICAgICB9KVxyXG4vLyAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4vLyAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbi8vICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbi8vICAgICAgfSlcclxuLy8gICAgfVxyXG4vLyAgfVxyXG5hc3luYyBvbkxvYWQob3B0aW9uKSB7XHJcbi8vICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICAvLyBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKClcclxuICAgIC8vIGNvbnNvbGUubG9nKGFwaSlcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuY2F0ZWdvcnlMaXN0KClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXN1bHRzJywgcmVzdWx0cylcclxuICAgIHRoaXMubmF2cyA9IHJlc3VsdHMubWFwKCh7bmFtZX0pID0+IG5hbWUpXHJcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHRzXHJcbiAgICAvLyBpZiAob3B0aW9uLmNhdGVnb3J5SWQpIHtcclxuICAgIC8vICAgcmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChpdGVtLmlkID09PSBvcHRpb24uY2F0ZWdvcnlJZCkge1xyXG4gICAgLy8gICAgICAgdGhpcy5jdXJyZW50TmF2ID0gaW5kZXhcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHJlc3VsdHNbdGhpcy5jdXJyZW50TmF2XS5pZClcclxuICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvcixcclxuICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxyXG4gICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAucmVwbGFjZSgvXFwuW15cXC5dKyQvLCdfdGh1bWJuYWlsLmpwZycpIDogJycsXHJcbiAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICB9KSlcclxuICAgIC8vIGNvbnNvbGUubG9nKCdib2FyZCcsIHJlcylcclxuICAgIC8vIGF3YWl0IHJlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgLy8gICBpZiAoaXRlbS5waWNfdXJsc1swXSkge1xyXG4gICAgLy8gICAgIGFwaS5kb3dubG9hZEltYWdlKGl0ZW0ucGljX3VybHNbMF0pLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAgIHNlbGYubGlzdC5wdXNoKHtcclxuICAgIC8vICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXHJcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRCeTogaXRlbS5jcmVhdG9yLFxyXG4gICAgLy8gICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAvLyAgICAgICAgIGNvdmVyOiByZXMudGVtcEZpbGVQYXRoLFxyXG4gICAgLy8gICAgICAgICByZWFkOiAyMDBcclxuICAgIC8vICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICAgIC8vIGNvbnN0IGJvYXJkcyA9IHJlcy5kYXRhO1xyXG4gICAgLy8gY29uc3QgcmVzZXMgPSBhd2FpdCBhcGkuZG93bmxvYWRJbWFnZXMoYm9hcmRzLm1hcCgoeyBjb3Zlcl9pbWcgfSkgPT4gY292ZXJfaW1nKSlcclxuICAgIC8vIGNvbnN0IHRlbXBGaWxlcyA9IHJlc2VzLm1hcCgoe3RlbXBGaWxlUGF0aH0pID0+IHRlbXBGaWxlUGF0aClcclxuICAgIC8vIHRoaXMubGlzdCA9IGJvYXJkcy5tYXAoYm9hcmQgPT4gKHt0aXRsZSwgdGV4dCwgY3JlYXRvciwgYXV0aG9yLCBjb3Zlcl9pbWd9KSA9PiAoeyB0aXRsZSwgY29udGVudDogdGV4dCwgY3JlYXRlZEJ5OiBjcmVhdG9yLCBhdXRob3I6IHJlYWQsIGNvdmVyOiBjb3Zlcl9pbWcgfSkpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=