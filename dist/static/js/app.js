global.webpackJsonp([1],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_wxService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_api_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_http_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_util_js__ = __webpack_require__(95);









// 设置api为全局变量
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4__common_api_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__common_http_js__["a" /* default */]);

// 把工具函数定义为全局
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.util = __WEBPACK_IMPORTED_MODULE_6__common_util_js__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.mixin({
  data: function data() {
    return {
      service: '',
      router: '/',
      imgSrc: '/',
      env: 'xcx'
    };
  },

  methods: {
    newroot: function newroot() {
      return this.$root.$mp;
    },
    navigatePageTo: function navigatePageTo(url) {
      wx.navigateTo({ url: url });
    },
    reLaunchPageTo: function reLaunchPageTo(url) {
      wx.reLaunch({ url: url });
    },
    setStorageSync: function setStorageSync(name, data) {
      wx.setStorageSync(name, data);
    },
    getStorageSync: function getStorageSync(name) {
      return wx.getStorageSync(name);
    }
  },
  created: function created() {
    // console.log('wx')
    // this.service = wxService
  }
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue demo',
      navigationBarTextStyle: 'black'
    }
  }
});

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b93398f", Component.options)
  } else {
    hotAPI.reload("data-v-0b93398f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    // 调用API从本地缓存中获取数据
    var logs = this.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    this.setStorageSync('logs', logs);
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(48);


// import * as getters from './getters.js'

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/** 状态定义 */

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function increment(state) {
      var obj = state;
      obj.count += 1;
    },
    decrement: function decrement(state) {
      var obj = state;
      obj.count -= 1;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);




/* unused harmony default export */ var _unused_webpack_default_export = ({
  getUserInfo: function getUserInfo() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                wx.login({
                  success: function success() {
                    wx.getUserInfo({
                      success: resolve,
                      fail: reject
                    });
                  }
                });
              });

            case 2:
              data = _context.sent;
              return _context.abrupt('return', data);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  httpRequest: function httpRequest() {
    var _this2 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                switch (options.type) {
                  case 0:
                    options.url = 'https://stocks.liangplus.com' + options.url.split('/liang')[1];
                    break;
                  case 1:
                    options.url = 'http://www.liangplus.com' + options.url.split('/api')[1];
                    break;
                  default:
                    break;
                }
                wx.request({
                  url: options.url,
                  data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, options.data),
                  method: options.methods || 'GET',
                  header: {
                    'Content-Type': 'application/json'
                  },
                  success: resolve,
                  fail: reject
                });
              });

            case 2:
              data = _context2.sent;
              return _context2.abrupt('return', data);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created on 2018/10/1.
 */



var baseURL = 'http://test.gdfangpin.com/'; // 连接到测试环境
// const baseURL = 'https://m.gdfangpin.com/' // 连接到正式环境

/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    Vue.prototype.API = {
      school: baseURL + 'weixin/school',
      getSignPackage: baseURL + 'weixin/Weixin/getSignPackage'
    };
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/**
 * Created on 2018/10/1.
 */



/**
 * 通过判断浏览器来选择引入哪种fly
 * @type {null}
 */


var Fly = __webpack_require__(94); //小程序环境启用
// var Fly = require('flyio/dist/npm/fly') // 非微信环境启用
var fly = new Fly();

/**
 *  状态码
 */
var CODE = {
  SUCCESS: 200,
  ERROR: 400

  /**
   * 请求类型
   * @type {{form: string, json: string}}
   */
};var CONTENT_TYPES = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json;charset=UTF-8'
};

var is_weixn = function is_weixn() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    Vue.prototype.httpGet = function (url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return fly.get(url, params).then(function (res) {
        console.log(res);
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data;
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data;
          } else {
            window.router.push({ name: 'login' });
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error);
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data.error);
        }
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data);
      }).catch(function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
      });
    };

    Vue.prototype.httpPost = function (url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';

      return fly.post(url, params).then(function (res) {
        console.log(res);
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data;
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data;
          } else {
            window.router.push({ name: 'login' });
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error);
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data.error);
        }
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data);
      }).catch(function (error) {
        console.log(error);
      });
    };

    Vue.prototype.httpDelete = function (url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return fly.delete(url, params).then(function (res) {
        console.log(res);
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data;
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data;
          } else {
            window.router.push({ name: 'login' });
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error);
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data.error);
        }
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data);
      }).catch(function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
      });
    };

    Vue.prototype.httpPut = function (url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return fly.put(url, params).then(function (res) {
        console.log(res);
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data;
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data;
          } else {
            window.router.push({ name: 'login' });
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error);
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data.error);
        }
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(res.data);
      }).catch(function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
      });
    };
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created on 2018/10/1.
 */



/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 环境判断
   */
  judgeEnv: function judgeEnv() {
    // console.log(navigator);
    // console.log(navigator.userAgent);
    wx.miniProgram.getEnv(function (res) {
      console.log(res.miniprogram); // true
    });
    if (ua.indexof('MicroMessage') == -1) {
      //说明不在微信中
      console.log('非微信');
      // 走不在小程序的逻辑
    } else {
      wx.miniProgram.getEnv(function (res) {
        if (res.miniProgram) {
          // 走在小程序的逻辑
          console.log('微信');
        } else {
          // 走不在小程序的逻辑
          console.log('小程序');
        }
      });
    }
    /*if(navigator.userAgent.toLowerCase().indexOf('miniprogram') != -1){
      console.log('微信小程序')
      return 'xcx'
    } else if (navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1){
      console.log('微信内置浏览器')
      return 'wx'
    } else {
      console.log('其它浏览器')
      return 'qt'
    }*/
  }
});

/***/ })

},[42]);
//# sourceMappingURL=app.js.map