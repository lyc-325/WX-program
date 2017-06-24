const R = require('../libs/rambda');

const EMAIL_REGEX = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
const PHONE_REGEX = /^1\d{10}$/;

const validator = function (rules) {
  return function (formData) {
    const keys = Object.keys(formData);
    const errorKey = R.find(key => {
      const value = formData[key];
      const { validate, prompt } = rules[key];
      return !validate(value);
    })(keys);
    return errorKey;
  }
};

const validateLength = function(min, max) {
  return R.compose(
    R.both(R.gte(R.__, min), R.lte(R.__,max)),
    R.prop('length'),
    value => value.replace(/\s/g, '')
  );
}

const validateEmail = R.test(EMAIL_REGEX);

const validatePhone = R.test(PHONE_REGEX);

module.exports = {
  validator,
  validateLength,
  validateEmail,
  validatePhone
};

