const NIM = require('../../utils/nim');
const app = getApp();
const { validator, validateLength, validateEmail, validatePhone }= require('../../utils/validator');

// 校验规则配置
const rules = {
  company: {
    prompt: '公司名称在1-20字以内', 
    validate: validateLength(1, 20)
  },
  email: {
    prompt: '邮箱不合法',
    validate: validateEmail
  },
  phone: {
    prompt: '电话号码不合法',
    validate: validatePhone
  }
};

const validate = validator(rules);

// register.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    requesting: false,
    userInfo: null,
    formError: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    app.getUserInfo()
      .then(userInfo => {
        this.setData({ userInfo });
      });
  },
  bindFocus(e) {
    this.setData({formError: null, formErrorKey: null});
  },
  submit(e) {
    // 第三方信息注入到网易云
    const errorKey = validate(e.detail.value);
    const { company, phone, email } = e.detail.value;
    if (!errorKey) {
      const props = {
        company,
        phone,
        email,
        credits: 0
      };

      const { openid, avatarUrl, nickName } = this.userInfo;

      this.setData({
        requesting: true
      });

      // 想网易云信登录或者注册用户
      NIM.create({
        accid: openid,
        name: nickname,
        icon: avatarUrl,
        props: props
      }).then(({token}) => {
        return NIM.getInstance(openid, token);
      }).then(nim => {
        app.globalData.nim = nim;
      });
    } else {
      this.setData({
        formError: rules[errorKey].prompt,
        formErrorKey: errorKey
      });
    }
  }
});