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
              read: 200
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
        console.log('id', id);
        console.log('board?id=' + id);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJuYXZzIiwiY3VycmVudE5hdiIsImNhdGVnb3JpZXMiLCJtZXRob2RzIiwiY2hhbmdlTmF2IiwiZSIsImpmVG9rZW4iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiYm9hcmRMaXN0IiwiaWQiLCJ0aGVuIiwicmVzIiwibWFwIiwiaXRlbSIsInRpdGxlIiwiY29udGVudCIsInRleHQiLCJjcmVhdGVkQnkiLCJjcmVhdG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCIkYXBwbHkiLCJoYW5kbGVQdWJsaXNoVGFwIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwiY2F0ZWdvcnlMaXN0IiwicmVzdWx0cyIsIm5hbWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7Ozs7O0FBRUE7SUFPcUJDLE0sV0FOcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozs0TUFPQ0csTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGtCQUFZLENBSFA7QUFJTEMsa0JBQVk7QUFKUCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxDQURILEVBQ007QUFBQTs7QUFBQSxZQUNKQyxPQURJ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Ozs7RUExRmdDLGVBQUtXLEk7a0JBQXBCOUMsTSIsImZpbGUiOiJib2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXG5cbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5Y+L5ZyIJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBuYXZzOiBbXSxcbiAgICBjdXJyZW50TmF2OiAwLFxuICAgIGNhdGVnb3JpZXM6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGNoYW5nZU5hdiAoZSkge1xuICAgICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcbiAgICAgIHRoaXMuY3VycmVudE5hdiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBhcGkuYm9hcmRMaXN0KHRoaXMuY2F0ZWdvcmllc1t0aGlzLmN1cnJlbnROYXZdLmlkLCBqZlRva2VuKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uY3JlYXRvcixcbiAgICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXG4gICAgICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXG4gICAgICAgICAgcmVhZDogMjAwXG4gICAgICAgIH0pKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlUHVibGlzaFRhcChlKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdwdWJsaXNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZUl0ZW1UYXAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2l0ZW0nLCB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdKVxuICAgICAgY29uc3QgaWQgPSB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmlkXG4gICAgICBjb25zb2xlLmxvZygnaWQnLCBpZClcbiAgICAgIGNvbnNvbGUubG9nKGBib2FyZD9pZD0ke2lkfWApXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGBib2FyZD9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbikge1xuICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXG4gICAgLy8gY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbigpXG4gICAgLy8gY29uc29sZS5sb2coYXBpKVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuY2F0ZWdvcnlMaXN0KClcbiAgICAvLyBjb25zb2xlLmxvZygncmVzdWx0cycsIHJlc3VsdHMpXG4gICAgdGhpcy5uYXZzID0gcmVzdWx0cy5tYXAoKHtuYW1lfSkgPT4gbmFtZSlcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHRzXG4gICAgLy8gaWYgKG9wdGlvbi5jYXRlZ29yeUlkKSB7XG4gICAgLy8gICByZXN1bHRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgLy8gICAgIGlmIChpdGVtLmlkID09PSBvcHRpb24uY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgICAgIHRoaXMuY3VycmVudE5hdiA9IGluZGV4XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5ib2FyZExpc3QocmVzdWx0c1t0aGlzLmN1cnJlbnROYXZdLmlkLCBqZlRva2VuKVxuICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAgIGNyZWF0ZWRCeTogaXRlbS5jcmVhdG9yLFxuICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXG4gICAgICByZWFkOiAyMDBcbiAgICB9KSlcbiAgICAvLyBjb25zb2xlLmxvZygnYm9hcmQnLCByZXMpXG4gICAgLy8gYXdhaXQgcmVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICBpZiAoaXRlbS5waWNfdXJsc1swXSkge1xuICAgIC8vICAgICBhcGkuZG93bmxvYWRJbWFnZShpdGVtLnBpY191cmxzWzBdKS50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgICAgc2VsZi5saXN0LnB1c2goe1xuICAgIC8vICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgLy8gICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRCeTogaXRlbS5jcmVhdG9yLFxuICAgIC8vICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgIC8vICAgICAgICAgY292ZXI6IHJlcy50ZW1wRmlsZVBhdGgsXG4gICAgLy8gICAgICAgICByZWFkOiAyMDBcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICAgIC8vIGNvbnN0IGJvYXJkcyA9IHJlcy5kYXRhO1xuICAgIC8vIGNvbnN0IHJlc2VzID0gYXdhaXQgYXBpLmRvd25sb2FkSW1hZ2VzKGJvYXJkcy5tYXAoKHsgY292ZXJfaW1nIH0pID0+IGNvdmVyX2ltZykpXG4gICAgLy8gY29uc3QgdGVtcEZpbGVzID0gcmVzZXMubWFwKCh7dGVtcEZpbGVQYXRofSkgPT4gdGVtcEZpbGVQYXRoKVxuICAgIC8vIHRoaXMubGlzdCA9IGJvYXJkcy5tYXAoYm9hcmQgPT4gKHt0aXRsZSwgdGV4dCwgY3JlYXRvciwgYXV0aG9yLCBjb3Zlcl9pbWd9KSA9PiAoeyB0aXRsZSwgY29udGVudDogdGV4dCwgY3JlYXRlZEJ5OiBjcmVhdG9yLCBhdXRob3I6IHJlYWQsIGNvdmVyOiBjb3Zlcl9pbWcgfSkpXG4gIH1cbn1cbiJdfQ==