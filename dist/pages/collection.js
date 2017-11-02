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
									_context.next = 14;
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
								_context.next = 15;
								break;

							case 14:
								_wepy2.default.reLaunch({
									url: '/pages/register'
								});

							case 15:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiYXBpIiwiY29sbGVjdGlvbiIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdDEiLCJsaXN0MiIsImJvYXJkSWQiLCJuYXZzIiwiY3VycmVudE5hdiIsIm1ldGhvZHMiLCJjaGFuZ2VOYXYiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInNlbmRlZCIsIiRhcHBseSIsImhhbmRsZUl0ZW1UYXAiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVOYW1lSWQiLCJpdGVtIiwiaXRlbWlkIiwic2VsZiIsInVzZXJEYXRhIiwiZ2V0U3RhclVzZXJMaXN0IiwidXNlclJlcyIsImdldFN0YXJBcnRpY2xlTGlzdCIsImJvYXJkUmVzIiwibWFwIiwiZm9sbG93ZWQiLCJjb3ZlciIsImljb24iLCJuYW1lIiwiY29tcGFueSIsImFydGljbGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0ZXh0IiwiY3JlYXRlZEJ5IiwiYXV0aG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJwaWNfdXJscyIsImJhc2VTZXJ2ZXIiLCJyZWFkIiwiY2xpY2tfbnVtIiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7Ozs7O0lBT3FCQyxVLFdBTHBCLHdCQUFRO0FBQ1JDLEtBRFEsZ0JBQ0hDLEtBREcsRUFDSTtBQUNYLFNBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDQTtBQUhPLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7a05BTUFHLE0sR0FBUztBQUNSQywyQkFBd0I7QUFEaEIsRyxRQUdUQyxJLEdBQU87QUFDTkMsVUFBTyxFQUREO0FBRU5DLFVBQU8sRUFGRDtBQUdOQyxZQUFTLEVBSEg7QUFJTkMsU0FBTSxDQUFDLElBQUQsRUFBTyxJQUFQLENBSkE7QUFLTkMsZUFBWTtBQUxOLEcsUUFPUEMsTyxHQUFVO0FBQ1RDLFlBRFMscUJBQ0VDLENBREYsRUFDSztBQUNiLFNBQUtILFVBQUwsR0FBa0JHLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUExQztBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsTUFBTDtBQUNBLElBTFE7QUFNVEMsZ0JBTlMseUJBTUtOLENBTkwsRUFNUTtBQUNoQixRQUFNTyxLQUFLLEtBQUtiLEtBQUwsQ0FBV00sRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQW5DLEVBQTBDSSxFQUFyRDtBQUNBLG1CQUFLQyxVQUFMLENBQWdCO0FBQ2ZDLHdCQUFpQkY7QUFERixLQUFoQjtBQUdBLElBWFE7QUFZVEcsZUFaUyx3QkFZS0MsSUFaTCxFQVlXO0FBQ25CLFFBQU1DLFNBQVNELEtBQUtKLEVBQXBCO0FBQ0EsbUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZkMsMkJBQW9CRztBQURMLEtBQWhCO0FBR0E7QUFqQlEsRzs7Ozs7Ozs7Ozs7O0FBb0JMQyxZLEdBQU8sSTs7YUFDUCxLQUFLMUIsSUFBTCxDQUFVMkIsUTs7Ozs7QUFDUlAsVSxHQUFNLEtBQUtwQixJQUFMLENBQVUyQixRLENBQWhCUCxFOztlQUNpQnRCLElBQUk4QixlQUFKLENBQW9CUixFQUFwQixDOzs7QUFBaEJTLGU7O2VBQ2lCL0IsSUFBSWdDLGtCQUFKLENBQXVCVixFQUF2QixDOzs7QUFBakJXLGdCOztBQUNOLGFBQUt6QixLQUFMLEdBQWF1QixRQUFRRyxHQUFSLENBQVk7QUFBQSxnQkFBUztBQUNqQ1osY0FBSUksS0FBS1MsUUFBTCxDQUFjYixFQURlO0FBRWpDYyxpQkFBT1YsS0FBS1MsUUFBTCxDQUFjRSxJQUZZO0FBR2pDQyxnQkFBTVosS0FBS1MsUUFBTCxDQUFjRyxJQUhhO0FBSWpDQyxtQkFBU2IsS0FBS1MsUUFBTCxDQUFjSTtBQUpVLFVBQVQ7QUFBQSxTQUFaLENBQWI7QUFNQSxhQUFLOUIsS0FBTCxHQUFhd0IsU0FBU0MsR0FBVCxDQUFhO0FBQUEsZ0JBQVM7QUFDbENaLGNBQUlJLEtBQUtjLE9BQUwsQ0FBYWxCLEVBRGlCO0FBRWxDbUIsaUJBQU9mLEtBQUtjLE9BQUwsQ0FBYUMsS0FGYztBQUdsQ0MsbUJBQVNoQixLQUFLYyxPQUFMLENBQWFHLElBSFk7QUFJbENDLHFCQUFXbEIsS0FBS2MsT0FBTCxDQUFhSyxNQUpVO0FBS2xDQyxxQkFBV3BCLEtBQUtjLE9BQUwsQ0FBYU8sUUFMVTtBQU1sQ1gsaUJBQU9WLEtBQUtjLE9BQUwsQ0FBYVEsUUFBYixDQUFzQixDQUF0QixTQUE4QixXQUFHQyxVQUFqQyxHQUE4Q3ZCLEtBQUtjLE9BQUwsQ0FBYVEsUUFBYixDQUFzQixDQUF0QixDQUE5QyxHQUEyRSxFQU5oRDtBQU9sQ0UsZ0JBQU14QixLQUFLYyxPQUFMLENBQWFXO0FBUGUsVUFBVDtBQUFBLFNBQWIsQ0FBYjtBQVNBLGFBQUsvQixNQUFMOzs7OztBQUVBLHVCQUFLZ0MsUUFBTCxDQUFjO0FBQ2I1QixjQUFLO0FBRFEsU0FBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckRxQyxlQUFLNkIsSTtrQkFBeEJwRCxVIiwiZmlsZSI6ImNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuQGNvbm5lY3Qoe1xyXG5cdHVzZXIoc3RhdGUpIHtcclxuXHRcdHJldHVybiBzdGF0ZS5jb21tb24udXNlclxyXG5cdH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29sbGVjdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcblx0Y29uZmlnID0ge1xyXG5cdFx0bmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOaUtuiXjydcclxuXHR9XHJcblx0ZGF0YSA9IHtcclxuXHRcdGxpc3QxOiBbXSxcclxuXHRcdGxpc3QyOiBbXSxcclxuXHRcdGJvYXJkSWQ6ICcnLFxyXG5cdFx0bmF2czogWyflkI3niYcnLCAn5paH56ugJ10sXHJcblx0XHRjdXJyZW50TmF2OiAwLFxyXG5cdH1cclxuXHRtZXRob2RzID0ge1xyXG5cdFx0Y2hhbmdlTmF2IChlKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudE5hdiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcblx0XHRcdHRoaXMuc2VuZGVkID0gZmFsc2VcclxuXHRcdFx0dGhpcy4kYXBwbHkoKVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUl0ZW1UYXAoZSkge1xyXG5cdFx0XHRjb25zdCBpZCA9IHRoaXMubGlzdDJbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmlkXHJcblx0XHRcdHdlcHkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiBgYm9hcmQ/aWQ9JHtpZH1gXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlTmFtZUlkIChpdGVtKSB7XHJcblx0XHRcdGNvbnN0IGl0ZW1pZCA9IGl0ZW0uaWRcclxuXHRcdFx0d2VweS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IGB1c2VySW5mbz9pZD0ke2l0ZW1pZH1gXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdH1cclxuXHRhc3luYyBvblNob3coKSB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXNcclxuXHRcdGlmICh0aGlzLnVzZXIudXNlckRhdGEpIHtcclxuXHRcdFx0bGV0IHtpZH0gPSB0aGlzLnVzZXIudXNlckRhdGFcclxuXHRcdFx0Y29uc3QgdXNlclJlcyA9IGF3YWl0IGFwaS5nZXRTdGFyVXNlckxpc3QoaWQpXHJcblx0XHRcdGNvbnN0IGJvYXJkUmVzID0gYXdhaXQgYXBpLmdldFN0YXJBcnRpY2xlTGlzdChpZClcclxuXHRcdFx0dGhpcy5saXN0MSA9IHVzZXJSZXMubWFwKGl0ZW0gPT4gKHtcclxuXHRcdFx0XHRpZDogaXRlbS5mb2xsb3dlZC5pZCxcclxuXHRcdFx0XHRjb3ZlcjogaXRlbS5mb2xsb3dlZC5pY29uLFxyXG5cdFx0XHRcdG5hbWU6IGl0ZW0uZm9sbG93ZWQubmFtZSxcclxuXHRcdFx0XHRjb21wYW55OiBpdGVtLmZvbGxvd2VkLmNvbXBhbnlcclxuXHRcdFx0fSkpXHRcclxuXHRcdFx0dGhpcy5saXN0MiA9IGJvYXJkUmVzLm1hcChpdGVtID0+ICh7XHJcblx0XHRcdFx0aWQ6IGl0ZW0uYXJ0aWNsZS5pZCxcclxuXHRcdFx0XHR0aXRsZTogaXRlbS5hcnRpY2xlLnRpdGxlLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IGl0ZW0uYXJ0aWNsZS50ZXh0LFxyXG5cdFx0XHRcdGNyZWF0ZWRCeTogaXRlbS5hcnRpY2xlLmF1dGhvcixcclxuXHRcdFx0XHRjcmVhdGVkQXQ6IGl0ZW0uYXJ0aWNsZS5kYXRlbGluZSxcclxuXHRcdFx0XHRjb3ZlcjogaXRlbS5hcnRpY2xlLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0uYXJ0aWNsZS5waWNfdXJsc1swXX1gIDogJycsXHJcblx0XHRcdFx0cmVhZDogaXRlbS5hcnRpY2xlLmNsaWNrX251bVxyXG5cdFx0XHR9KSlcclxuXHRcdFx0dGhpcy4kYXBwbHkoKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2VweS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=