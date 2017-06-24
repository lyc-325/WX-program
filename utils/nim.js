const Promise = require('../libs/es6-promise').Promise
const R = require('../libs/rambda');
const NIM = require('../libs/NIM_Web_NIM_v3.8.0');
const config = require('../config').nim;
const sha1 = require('./sha1');
const { functions } = require('./util');

/**
 * 创建请求头
 */
function createHeader() {
  const nonce = Math.ceil(Math.random() * 10000).toString();
  const curTime = (Math.floor(Date.now() / 1000)).toString();
  const hash = sha1.create();
  hash.update(`${config.appSecret}${nonce}${curTime}`);
  const checkSum = hash.hex();
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    AppKey: config.appKey,
    CurTime: curTime,
    Nonce: nonce,
    CheckSum: checkSum
  };
}

/**
 * 执行 NIM 相关请求
 */
function request(options) {
  const {api, data, method} = options;
  const header = createHeader();
  return wx.pro.request({
    url: `${config.server}/${api}`,
    header,
    data,
    method: method || 'POST'
  }).then(data => {
    return data.code === 200 ? Promise.resolve(data) : Promise.reject(data);
  });
}

/**
 * 创建用户
 * @param options Object
 * @param options.accid String
 * @param options.name String
 * @param options.icon String
 * @param optiosn.props Object
 */
function create({accid, name, icon, props}) {
  return request({
    api: 'user/create.action',
    data: {
      accid,
      name,
      icon
    }
  });
}

/**
 * 创建用户
 * @param options Object
 * @param options.accid String
 * @param options.name String
 * @param options.icon String
 * @param optiosn.props Object
 */
function login(accid) { 
  return request({
    api: 'user/refreshToken.action',
    data: {
      accid
    }
  }).then(({info}) => {
    return info.token;
  });
}

/**
 * 获得 NIM 实例
 * @param account String 账户名
 * @param token String token
 */
function getInstance(account, token) {
  return new Promise((resolve, reject) => {
    const nim = NIM.getInstance({
      appKey: config.appKey,
      account,
      token,
      onerror(error) {
        console.error('[NIM] error', error);
        reject(error);
      },
      onconnect(obj) {
        console.log('[NIM] connectd');
        // Promisify nim functions
        R.forEach((key) => {
          nim[key] = _promisify(nim[key].bind(nim));
        }, promisedFunctions);
        resolve(nim);
      }
    });
  })
}

/**
 * 需要被 Promise 化的函数
 */
const promisedFunctions = [
  // 好友关系相关 API
  'addFriend',
  'applyFriend',
  'passFriendApply',
  'rejectFriendApply',
  'deleteFriend',
  'updateFriend'
];

/**
 * 对 NIM 实例下的函数进行科里化
 */
const _promisify = R.curry(function (func, options) {
  return new Promise((resolve, reject) => {
    options = options || {};
    options.done = function (error, obj) {
      return error ? reject(error) : resolve(obj);
    };
    func(options);
  });
});

module.exports = {
  login,
  create,
  getInstance
};