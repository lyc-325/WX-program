const R = require('../libs/rambda');

const getLength = R.prop('length');
const getTouches = changed => changed ? R.prop('changedTouches') : R.prop('touches');

/**
 * 是否是单点触摸
 * @param changed Boolean
 */
const isOnePointTouch = changed => R.compose(
  R.equals(1),
  getLength,
  getTouches(changed),
);

/**
 * 是否是两点触摸
 * @param changed Boolean
 */
const isTwoPointTouch = changed => R.compose(
  R.equals(2),
  getLength,
  getTouches(changed)
);

/**
 * 是否是多点触摸
 * @param changed Boolean
 */
const isMultiPointTouch = changed => R.compose(
  R.gt(2),
  getLength,
  getTouches(changed)
);

/**
 * 获得触摸坐标
 * @param changed Boolean
 */
const getClientX = changed => R.compose(
  R.prop('clientX'),
  R.head,
  getTouches(changed)
);

module.exports = {
  isOnePointTouch,
  isTwoPointTouch,
  isMultiPointTouch,
  getClientX
};