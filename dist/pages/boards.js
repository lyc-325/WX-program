'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _config = require('./../config.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { connect } from 'wepy-redux'
var Boards = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
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

        var jfToken = this.user.jfToken;

        this.currentNav = e.currentTarget.dataset.index;
        api.boardList(this.categories[this.currentNav].id, jfToken).then(function (res) {
          _this2.list = res.map(function (item) {
            return {
              id: item.id,
              title: item.title,
              content: item.text,
              createdBy: item.creator,
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
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(option) {
        var jfToken, results, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jfToken = this.user.jfToken;
                // const token = await getToken()
                // console.log(api)

                _context.next = 3;
                return api.categoryList();

              case 3:
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
                _context.next = 8;
                return api.boardList(results[this.currentNav].id, jfToken);

              case 8:
                res = _context.sent;

                this.list = res.map(function (item) {
                  return {
                    id: item.id,
                    title: item.title,
                    content: item.text,
                    createdBy: item.creator,
                    createdAt: item.dateline,
                    cover: item.pic_urls[0] ? '' + _config.jf.baseServer + item.pic_urls[0] : '',
                    read: 200
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

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJuYXZzIiwiY3VycmVudE5hdiIsImNhdGVnb3JpZXMiLCJtZXRob2RzIiwiY2hhbmdlTmF2IiwiZSIsImpmVG9rZW4iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiYm9hcmRMaXN0IiwiaWQiLCJ0aGVuIiwicmVzIiwibWFwIiwiaXRlbSIsInRpdGxlIiwiY29udGVudCIsInRleHQiLCJjcmVhdGVkQnkiLCJjcmVhdG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCJjbGlja19udW0iLCIkYXBwbHkiLCJoYW5kbGVQdWJsaXNoVGFwIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwiY2F0ZWdvcnlMaXN0IiwicmVzdWx0cyIsIm5hbWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7Ozs7O0FBRUE7SUFPcUJDLE0sV0FOcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozs0TUFPQ0csTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGtCQUFZLENBSFA7QUFJTEMsa0JBQVk7QUFKUCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxDQURILEVBQ007QUFBQTs7QUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbkBjb25uZWN0KHtcbiAgdXNlcihzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW10sXG4gICAgbmF2czogW10sXG4gICAgY3VycmVudE5hdjogMCxcbiAgICBjYXRlZ29yaWVzOiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VOYXYgKGUpIHtcbiAgICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXG4gICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgYXBpLmJvYXJkTGlzdCh0aGlzLmNhdGVnb3JpZXNbdGhpcy5jdXJyZW50TmF2XS5pZCwgamZUb2tlbikudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICAgICAgY3JlYXRlZEJ5OiBpdGVtLmNyZWF0b3IsXG4gICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgICAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxuICAgICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXG4gICAgICAgIH0pKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlUHVibGlzaFRhcChlKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdwdWJsaXNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZUl0ZW1UYXAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2l0ZW0nLCB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdKVxuICAgICAgY29uc3QgaWQgPSB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmlkXG4vLyAgICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkKVxuLy8gICAgICBjb25zb2xlLmxvZyhgYm9hcmQ/aWQ9JHtpZH1gKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgYm9hcmQ/aWQ9JHtpZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb24pIHtcbiAgICBjb25zdCB7IGpmVG9rZW4gfSA9IHRoaXMudXNlclxuICAgIC8vIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKVxuICAgIC8vIGNvbnNvbGUubG9nKGFwaSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXBpLmNhdGVnb3J5TGlzdCgpXG4gICAgLy8gY29uc29sZS5sb2coJ3Jlc3VsdHMnLCByZXN1bHRzKVxuICAgIHRoaXMubmF2cyA9IHJlc3VsdHMubWFwKCh7bmFtZX0pID0+IG5hbWUpXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0c1xuICAgIC8vIGlmIChvcHRpb24uY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgcmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gb3B0aW9uLmNhdGVnb3J5SWQpIHtcbiAgICAvLyAgICAgICB0aGlzLmN1cnJlbnROYXYgPSBpbmRleFxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHJlc3VsdHNbdGhpcy5jdXJyZW50TmF2XS5pZCwgamZUb2tlbilcbiAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICBjcmVhdGVkQnk6IGl0ZW0uY3JlYXRvcixcbiAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxuICAgICAgcmVhZDogMjAwXG4gICAgfSkpXG4gICAgLy8gY29uc29sZS5sb2coJ2JvYXJkJywgcmVzKVxuICAgIC8vIGF3YWl0IHJlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vICAgaWYgKGl0ZW0ucGljX3VybHNbMF0pIHtcbiAgICAvLyAgICAgYXBpLmRvd25sb2FkSW1hZ2UoaXRlbS5waWNfdXJsc1swXSkudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICAgIHNlbGYubGlzdC5wdXNoKHtcbiAgICAvLyAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgIC8vICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgLy8gICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgLy8gICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uY3JlYXRvcixcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAvLyAgICAgICAgIGNvdmVyOiByZXMudGVtcEZpbGVQYXRoLFxuICAgIC8vICAgICAgICAgcmVhZDogMjAwXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgICAvLyBjb25zdCBib2FyZHMgPSByZXMuZGF0YTtcbiAgICAvLyBjb25zdCByZXNlcyA9IGF3YWl0IGFwaS5kb3dubG9hZEltYWdlcyhib2FyZHMubWFwKCh7IGNvdmVyX2ltZyB9KSA9PiBjb3Zlcl9pbWcpKVxuICAgIC8vIGNvbnN0IHRlbXBGaWxlcyA9IHJlc2VzLm1hcCgoe3RlbXBGaWxlUGF0aH0pID0+IHRlbXBGaWxlUGF0aClcbiAgICAvLyB0aGlzLmxpc3QgPSBib2FyZHMubWFwKGJvYXJkID0+ICh7dGl0bGUsIHRleHQsIGNyZWF0b3IsIGF1dGhvciwgY292ZXJfaW1nfSkgPT4gKHsgdGl0bGUsIGNvbnRlbnQ6IHRleHQsIGNyZWF0ZWRCeTogY3JlYXRvciwgYXV0aG9yOiByZWFkLCBjb3ZlcjogY292ZXJfaW1nIH0pKVxuICB9XG59XG4iXX0=