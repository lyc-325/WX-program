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

var _config = require('./../config.js');

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
			boardId: '',
			navs: ['名片', '文章'],
			currentNav: 0
		}, _this.methods = {
			changeNav: function changeNav(e) {
				this.currentNav = e.currentTarget.dataset.index;
				this.sended = false;
				this.$apply();
			},
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
										cover: item.article.pic_urls[0] ? '' + _config.jf.baseServer + item.article.pic_urls[0] : '',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiYXBpIiwiY29sbGVjdGlvbiIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdDEiLCJsaXN0MiIsImJvYXJkSWQiLCJuYXZzIiwiY3VycmVudE5hdiIsIm1ldGhvZHMiLCJjaGFuZ2VOYXYiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInNlbmRlZCIsIiRhcHBseSIsImhhbmRsZUl0ZW1UYXAiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVOYW1lSWQiLCJpdGVtIiwiaXRlbWlkIiwic2VsZiIsInVzZXJEYXRhIiwiZ2V0U3RhclVzZXJMaXN0IiwidXNlclJlcyIsImdldFN0YXJBcnRpY2xlTGlzdCIsImJvYXJkUmVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZvbGxvd2VkIiwiY292ZXIiLCJpY29uIiwibmFtZSIsImNvbXBhbnkiLCJhcnRpY2xlIiwidGl0bGUiLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsImNyZWF0ZWRBdCIsImRhdGVsaW5lIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwicmVhZCIsImNsaWNrX251bSIsInJlTGF1bmNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7OztJQU9xQkMsVSxXQUxwQix3QkFBUTtBQUNSQyxLQURRLGdCQUNIQyxLQURHLEVBQ0k7QUFDWCxTQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0E7QUFITyxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7O2tOQU1BRyxNLEdBQVM7QUFDUkMsMkJBQXdCO0FBRGhCLEcsUUFHVEMsSSxHQUFPO0FBQ05DLFVBQU8sRUFERDtBQUVOQyxVQUFPLEVBRkQ7QUFHTkMsWUFBUyxFQUhIO0FBSU5DLFNBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUpBO0FBS05DLGVBQVk7QUFMTixHLFFBT1BDLE8sR0FBVTtBQUNUQyxZQURTLHFCQUNFQyxDQURGLEVBQ0s7QUFDYixTQUFLSCxVQUFMLEdBQWtCRyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBMUM7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLE1BQUw7QUFDQSxJQUxRO0FBTVRDLGdCQU5TLHlCQU1LTixDQU5MLEVBTVE7QUFDaEIsUUFBTU8sS0FBSyxLQUFLYixLQUFMLENBQVdNLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFuQyxFQUEwQ0ksRUFBckQ7QUFDQSxtQkFBS0MsVUFBTCxDQUFnQjtBQUNmQyx3QkFBaUJGO0FBREYsS0FBaEI7QUFHQSxJQVhRO0FBWVRHLGVBWlMsd0JBWUtDLElBWkwsRUFZVztBQUNuQixRQUFNQyxTQUFTRCxLQUFLSixFQUFwQjtBQUNBLG1CQUFLQyxVQUFMLENBQWdCO0FBQ2ZDLDJCQUFvQkc7QUFETCxLQUFoQjtBQUdBO0FBakJRLEc7Ozs7Ozs7Ozs7OztBQW9CTEMsWSxHQUFPLEk7O2FBQ1AsS0FBSzFCLElBQUwsQ0FBVTJCLFE7Ozs7O0FBQ1JQLFUsR0FBTSxLQUFLcEIsSUFBTCxDQUFVMkIsUSxDQUFoQlAsRTs7ZUFDaUJ0QixJQUFJOEIsZUFBSixDQUFvQlIsRUFBcEIsQzs7O0FBQWhCUyxlOztlQUNpQi9CLElBQUlnQyxrQkFBSixDQUF1QlYsRUFBdkIsQzs7O0FBQWpCVyxnQjs7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWUosT0FBWjtBQUNBLGFBQUt2QixLQUFMLEdBQWF1QixRQUFRSyxHQUFSLENBQVk7QUFBQSxnQkFBUztBQUNqQ2QsY0FBSUksS0FBS1csUUFBTCxDQUFjZixFQURlO0FBRWpDZ0IsaUJBQU9aLEtBQUtXLFFBQUwsQ0FBY0UsSUFGWTtBQUdqQ0MsZ0JBQU1kLEtBQUtXLFFBQUwsQ0FBY0csSUFIYTtBQUlqQ0MsbUJBQVNmLEtBQUtXLFFBQUwsQ0FBY0k7QUFKVSxVQUFUO0FBQUEsU0FBWixDQUFiO0FBTUEsYUFBS2hDLEtBQUwsR0FBYXdCLFNBQVNHLEdBQVQsQ0FBYTtBQUFBLGdCQUFTO0FBQ2xDZCxjQUFJSSxLQUFLZ0IsT0FBTCxDQUFhcEIsRUFEaUI7QUFFbENxQixpQkFBT2pCLEtBQUtnQixPQUFMLENBQWFDLEtBRmM7QUFHbENDLG1CQUFTbEIsS0FBS2dCLE9BQUwsQ0FBYUcsSUFIWTtBQUlsQ0MscUJBQVdwQixLQUFLZ0IsT0FBTCxDQUFhSyxNQUpVO0FBS2xDQyxxQkFBV3RCLEtBQUtnQixPQUFMLENBQWFPLFFBTFU7QUFNbENYLGlCQUFPWixLQUFLZ0IsT0FBTCxDQUFhUSxRQUFiLENBQXNCLENBQXRCLFNBQThCLFdBQUdDLFVBQWpDLEdBQThDekIsS0FBS2dCLE9BQUwsQ0FBYVEsUUFBYixDQUFzQixDQUF0QixDQUE5QyxHQUEyRSxFQU5oRDtBQU9sQ0UsZ0JBQU0xQixLQUFLZ0IsT0FBTCxDQUFhVztBQVBlLFVBQVQ7QUFBQSxTQUFiLENBQWI7QUFTQSxhQUFLakMsTUFBTDs7Ozs7QUFFQSx1QkFBS2tDLFFBQUwsQ0FBYztBQUNiOUIsY0FBSztBQURRLFNBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXREcUMsZUFBSytCLEk7a0JBQXhCdEQsVSIsImZpbGUiOiJjb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xyXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbkBjb25uZWN0KHtcclxuXHR1c2VyKHN0YXRlKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbGxlY3Rpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG5cdGNvbmZpZyA9IHtcclxuXHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmlLbol48nXHJcblx0fVxyXG5cdGRhdGEgPSB7XHJcblx0XHRsaXN0MTogW10sXHJcblx0XHRsaXN0MjogW10sXHJcblx0XHRib2FyZElkOiAnJyxcclxuXHRcdG5hdnM6IFsn5ZCN54mHJywgJ+aWh+eroCddLFxyXG5cdFx0Y3VycmVudE5hdjogMCxcclxuXHR9XHJcblx0bWV0aG9kcyA9IHtcclxuXHRcdGNoYW5nZU5hdiAoZSkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxyXG5cdFx0XHR0aGlzLnNlbmRlZCA9IGZhbHNlXHJcblx0XHRcdHRoaXMuJGFwcGx5KClcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVJdGVtVGFwKGUpIHtcclxuXHRcdFx0Y29uc3QgaWQgPSB0aGlzLmxpc3QyW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5pZFxyXG5cdFx0XHR3ZXB5Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogYGJvYXJkP2lkPSR7aWR9YFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZU5hbWVJZCAoaXRlbSkge1xyXG5cdFx0XHRjb25zdCBpdGVtaWQgPSBpdGVtLmlkXHJcblx0XHRcdHdlcHkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiBgdXNlckluZm8/aWQ9JHtpdGVtaWR9YFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHR9XHJcblx0YXN5bmMgb25TaG93KCkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzXHJcblx0XHRpZiAodGhpcy51c2VyLnVzZXJEYXRhKSB7XHJcblx0XHRcdGxldCB7aWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcblx0XHRcdGNvbnN0IHVzZXJSZXMgPSBhd2FpdCBhcGkuZ2V0U3RhclVzZXJMaXN0KGlkKVxyXG5cdFx0XHRjb25zdCBib2FyZFJlcyA9IGF3YWl0IGFwaS5nZXRTdGFyQXJ0aWNsZUxpc3QoaWQpXHJcblx0XHRcdGNvbnNvbGUubG9nKHVzZXJSZXMpXHJcblx0XHRcdHRoaXMubGlzdDEgPSB1c2VyUmVzLm1hcChpdGVtID0+ICh7XHJcblx0XHRcdFx0aWQ6IGl0ZW0uZm9sbG93ZWQuaWQsXHJcblx0XHRcdFx0Y292ZXI6IGl0ZW0uZm9sbG93ZWQuaWNvbixcclxuXHRcdFx0XHRuYW1lOiBpdGVtLmZvbGxvd2VkLm5hbWUsXHJcblx0XHRcdFx0Y29tcGFueTogaXRlbS5mb2xsb3dlZC5jb21wYW55XHJcblx0XHRcdH0pKVx0XHJcblx0XHRcdHRoaXMubGlzdDIgPSBib2FyZFJlcy5tYXAoaXRlbSA9PiAoe1xyXG5cdFx0XHRcdGlkOiBpdGVtLmFydGljbGUuaWQsXHJcblx0XHRcdFx0dGl0bGU6IGl0ZW0uYXJ0aWNsZS50aXRsZSxcclxuXHRcdFx0XHRjb250ZW50OiBpdGVtLmFydGljbGUudGV4dCxcclxuXHRcdFx0XHRjcmVhdGVkQnk6IGl0ZW0uYXJ0aWNsZS5hdXRob3IsXHJcblx0XHRcdFx0Y3JlYXRlZEF0OiBpdGVtLmFydGljbGUuZGF0ZWxpbmUsXHJcblx0XHRcdFx0Y292ZXI6IGl0ZW0uYXJ0aWNsZS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLmFydGljbGUucGljX3VybHNbMF19YCA6ICcnLFxyXG5cdFx0XHRcdHJlYWQ6IGl0ZW0uYXJ0aWNsZS5jbGlja19udW1cclxuXHRcdFx0fSkpXHJcblx0XHRcdHRoaXMuJGFwcGx5KClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdlcHkucmVMYXVuY2goe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19