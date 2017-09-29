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

var _account = require('./../apis/account.js');

var api = _interopRequireWildcard(_account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collection = (_dec = (0, _wepyRedux.connect)({
	user: function user(state) {
		return state.common.user;
	}
}), _dec(_class = function (_wepy$page) {
	(0, _inherits3.default)(collection, _wepy$page);

	function collection() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, collection);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = collection.__proto__ || (0, _getPrototypeOf2.default)(collection)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
			navigationBarTitleText: '我的收藏'
		}, _this.data = {
			list1: [],
			list2: [],
			boardId: ''
		}, _this.methods = {
			handleItemTap: function handleItemTap(e) {
				var id = this.list2[e.currentTarget.dataset.index].id;
				_wepy2.default.navigateTo({
					url: 'board?id=' + id
				});
			},
			handleNameId: function handleNameId(item) {
				var itemid = item.id;
				_wepy2.default.navigateTo({
					url: 'userInfo?id=' + itemid
				});
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(collection, [{
		key: 'onShow',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var self, id, userRes, boardRes;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								self = this;

								if (!this.user.userData) {
									_context.next = 15;
									break;
								}

								id = this.user.userData.id;
								_context.next = 5;
								return api.getStarUserList(id);

							case 5:
								userRes = _context.sent;
								_context.next = 8;
								return api.getStarArticleList(id);

							case 8:
								boardRes = _context.sent;

								console.log(userRes);
								this.list1 = userRes.map(function (item) {
									return {
										id: item.followed.id,
										cover: item.followed.icon,
										name: item.followed.name,
										company: item.followed.company
									};
								});
								this.list2 = boardRes.map(function (item) {
									return {
										id: item.article.id,
										title: item.article.title,
										content: item.article.text,
										createdBy: item.article.author,
										createdAt: item.article.dateline,
										cover: item.article.pic_urls[0] ? '' + jf.baseServer + item.article.pic_urls[0] : '',
										read: item.article.click_num
									};
								});
								this.$apply();
								_context.next = 16;
								break;

							case 15:
								_wepy2.default.reLaunch({
									url: '/pages/register'
								});

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function onShow() {
				return _ref2.apply(this, arguments);
			}

			return onShow;
		}()
	}]);
	return collection;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(collection , 'pages/collection'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiYXBpIiwiY29sbGVjdGlvbiIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdDEiLCJsaXN0MiIsImJvYXJkSWQiLCJtZXRob2RzIiwiaGFuZGxlSXRlbVRhcCIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTmFtZUlkIiwiaXRlbSIsIml0ZW1pZCIsInNlbGYiLCJ1c2VyRGF0YSIsImdldFN0YXJVc2VyTGlzdCIsInVzZXJSZXMiLCJnZXRTdGFyQXJ0aWNsZUxpc3QiLCJib2FyZFJlcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJmb2xsb3dlZCIsImNvdmVyIiwiaWNvbiIsIm5hbWUiLCJjb21wYW55IiwiYXJ0aWNsZSIsInRpdGxlIiwiY29udGVudCIsInRleHQiLCJjcmVhdGVkQnkiLCJhdXRob3IiLCJjcmVhdGVkQXQiLCJkYXRlbGluZSIsInBpY191cmxzIiwiamYiLCJiYXNlU2VydmVyIiwicmVhZCIsImNsaWNrX251bSIsIiRhcHBseSIsInJlTGF1bmNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7Ozs7OztJQVFTQyxVLFdBTnBCLHdCQUFRO0FBQ1JDLEtBRFEsZ0JBQ0hDLEtBREcsRUFDSTtBQUNYLFNBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDQTtBQUhPLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7a05BT0FHLE0sR0FBUztBQUNSQywyQkFBd0I7QUFEaEIsRyxRQUlUQyxJLEdBQU87QUFDTkMsVUFBTyxFQUREO0FBRU5DLFVBQU8sRUFGRDtBQUdOQyxZQUFTO0FBSEgsRyxRQUtQQyxPLEdBQVU7QUFDVEMsZ0JBRFMseUJBQ0tDLENBREwsRUFDUTtBQUNoQixRQUFNQyxLQUFLLEtBQUtMLEtBQUwsQ0FBV0ksRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQW5DLEVBQTBDSCxFQUFyRDtBQUNBLG1CQUFLSSxVQUFMLENBQWdCO0FBQ2ZDLHdCQUFpQkw7QUFERixLQUFoQjtBQUdBLElBTlE7QUFPVE0sZUFQUyx3QkFPS0MsSUFQTCxFQU9XO0FBQ2QsUUFBTUMsU0FBU0QsS0FBS1AsRUFBcEI7QUFDQSxtQkFBS0ksVUFBTCxDQUFnQjtBQUNkQywyQkFBb0JHO0FBRE4sS0FBaEI7QUFHRDtBQVpJLEc7Ozs7Ozs7Ozs7OztBQWVMQyxZLEdBQU8sSTs7YUFDUCxLQUFLckIsSUFBTCxDQUFVc0IsUTs7Ozs7QUFDUlYsVSxHQUFNLEtBQUtaLElBQUwsQ0FBVXNCLFEsQ0FBaEJWLEU7O2VBQ2lCZCxJQUFJeUIsZUFBSixDQUFvQlgsRUFBcEIsQzs7O0FBQWhCWSxlOztlQUNpQjFCLElBQUkyQixrQkFBSixDQUF1QmIsRUFBdkIsQzs7O0FBQWpCYyxnQjs7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWUosT0FBWjtBQUNBLGFBQUtsQixLQUFMLEdBQWFrQixRQUFRSyxHQUFSLENBQVk7QUFBQSxnQkFBUztBQUNqQ2pCLGNBQUlPLEtBQUtXLFFBQUwsQ0FBY2xCLEVBRGU7QUFFakNtQixpQkFBT1osS0FBS1csUUFBTCxDQUFjRSxJQUZZO0FBR2pDQyxnQkFBTWQsS0FBS1csUUFBTCxDQUFjRyxJQUhhO0FBSWpDQyxtQkFBU2YsS0FBS1csUUFBTCxDQUFjSTtBQUpVLFVBQVQ7QUFBQSxTQUFaLENBQWI7QUFNQSxhQUFLM0IsS0FBTCxHQUFhbUIsU0FBU0csR0FBVCxDQUFhO0FBQUEsZ0JBQVM7QUFDbENqQixjQUFJTyxLQUFLZ0IsT0FBTCxDQUFhdkIsRUFEaUI7QUFFbEN3QixpQkFBT2pCLEtBQUtnQixPQUFMLENBQWFDLEtBRmM7QUFHbENDLG1CQUFTbEIsS0FBS2dCLE9BQUwsQ0FBYUcsSUFIWTtBQUlsQ0MscUJBQVdwQixLQUFLZ0IsT0FBTCxDQUFhSyxNQUpVO0FBS2xDQyxxQkFBV3RCLEtBQUtnQixPQUFMLENBQWFPLFFBTFU7QUFNbENYLGlCQUFPWixLQUFLZ0IsT0FBTCxDQUFhUSxRQUFiLENBQXNCLENBQXRCLFNBQThCQyxHQUFHQyxVQUFqQyxHQUE4QzFCLEtBQUtnQixPQUFMLENBQWFRLFFBQWIsQ0FBc0IsQ0FBdEIsQ0FBOUMsR0FBMkUsRUFOaEQ7QUFPbENHLGdCQUFNM0IsS0FBS2dCLE9BQUwsQ0FBYVk7QUFQZSxVQUFUO0FBQUEsU0FBYixDQUFiO0FBU0EsYUFBS0MsTUFBTDs7Ozs7QUFFQSx1QkFBS0MsUUFBTCxDQUFjO0FBQ2JoQyxjQUFLO0FBRFEsU0FBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaERxQyxlQUFLaUMsSTtrQkFBeEJuRCxVIiwiZmlsZSI6ImNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xyXG5cclxuQGNvbm5lY3Qoe1xyXG5cdHVzZXIoc3RhdGUpIHtcclxuXHRcdHJldHVybiBzdGF0ZS5jb21tb24udXNlclxyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbGxlY3Rpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG5cdGNvbmZpZyA9IHtcclxuXHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmlLbol48nXHJcblx0fVxyXG5cclxuXHRkYXRhID0ge1xyXG5cdFx0bGlzdDE6IFtdLFxyXG5cdFx0bGlzdDI6IFtdLFxyXG5cdFx0Ym9hcmRJZDogJycsXHJcblx0fVxyXG5cdG1ldGhvZHMgPSB7XHJcblx0XHRoYW5kbGVJdGVtVGFwKGUpIHtcclxuXHRcdFx0Y29uc3QgaWQgPSB0aGlzLmxpc3QyW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5pZFxyXG5cdFx0XHR3ZXB5Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogYGJvYXJkP2lkPSR7aWR9YFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZU5hbWVJZCAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1pZCA9IGl0ZW0uaWRcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHtpdGVtaWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcblx0fVxyXG5cdGFzeW5jIG9uU2hvdygpIHtcclxuXHRcdGxldCBzZWxmID0gdGhpc1xyXG5cdFx0aWYgKHRoaXMudXNlci51c2VyRGF0YSkge1xyXG5cdFx0XHRsZXQge2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG5cdFx0XHRjb25zdCB1c2VyUmVzID0gYXdhaXQgYXBpLmdldFN0YXJVc2VyTGlzdChpZClcclxuXHRcdFx0Y29uc3QgYm9hcmRSZXMgPSBhd2FpdCBhcGkuZ2V0U3RhckFydGljbGVMaXN0KGlkKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh1c2VyUmVzKVxyXG5cdFx0XHR0aGlzLmxpc3QxID0gdXNlclJlcy5tYXAoaXRlbSA9PiAoe1xyXG5cdFx0XHRcdGlkOiBpdGVtLmZvbGxvd2VkLmlkLFxyXG5cdFx0XHRcdGNvdmVyOiBpdGVtLmZvbGxvd2VkLmljb24sXHJcblx0XHRcdFx0bmFtZTogaXRlbS5mb2xsb3dlZC5uYW1lLFxyXG5cdFx0XHRcdGNvbXBhbnk6IGl0ZW0uZm9sbG93ZWQuY29tcGFueVxyXG5cdFx0XHR9KSlcdFxyXG5cdFx0XHR0aGlzLmxpc3QyID0gYm9hcmRSZXMubWFwKGl0ZW0gPT4gKHtcclxuXHRcdFx0XHRpZDogaXRlbS5hcnRpY2xlLmlkLFxyXG5cdFx0XHRcdHRpdGxlOiBpdGVtLmFydGljbGUudGl0bGUsXHJcblx0XHRcdFx0Y29udGVudDogaXRlbS5hcnRpY2xlLnRleHQsXHJcblx0XHRcdFx0Y3JlYXRlZEJ5OiBpdGVtLmFydGljbGUuYXV0aG9yLFxyXG5cdFx0XHRcdGNyZWF0ZWRBdDogaXRlbS5hcnRpY2xlLmRhdGVsaW5lLFxyXG5cdFx0XHRcdGNvdmVyOiBpdGVtLmFydGljbGUucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5hcnRpY2xlLnBpY191cmxzWzBdfWAgOiAnJyxcclxuXHRcdFx0XHRyZWFkOiBpdGVtLmFydGljbGUuY2xpY2tfbnVtXHJcblx0XHRcdH0pKVxyXG5cdFx0XHR0aGlzLiRhcHBseSgpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3ZXB5LnJlTGF1bmNoKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=