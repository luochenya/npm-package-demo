/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 241:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LuoChenYaButton: function() { return /* reexport */ luochenya_button; },
  LuoChenYaJs: function() { return /* reexport */ luochenya_js; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/luochenya-button/index.vue?vue&type=template&id=fe99a39e&scoped=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.confirmEvent && _ctx.confirmEvent(...args))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]);
}
;// ./src/package/luochenya-button/index.vue?vue&type=template&id=fe99a39e&scoped=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/luochenya-button/index.vue?vue&type=script&lang=js

/* harmony default export */ var luochenya_buttonvue_type_script_lang_js = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "luochenya-button",
  emits: ['confirm'],
  props: {},
  setup(props, {
    emit
  }) {
    const confirmEvent = () => {
      emit('confirm');
    };
    return {
      confirmEvent
    };
  }
}));
;// ./src/package/luochenya-button/index.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/luochenya-button/index.vue?vue&type=style&index=0&id=fe99a39e&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/package/luochenya-button/index.vue?vue&type=style&index=0&id=fe99a39e&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(241);
;// ./src/package/luochenya-button/index.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(luochenya_buttonvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-fe99a39e"]])

/* harmony default export */ var luochenya_button = (__exports__);
;// ./src/package/luochenya-js/scroll.js
/**
 * @Description 禁用滚动条
 * @Author luochen_ya
 * @Date 2025-01-11
 */
function handleStopScroll() {
  var mo = function (e) {
    e.preventDefault();
  };
  document.body.style.overflow = 'hidden';
  document.addEventListener("touchmove", mo, false);
}

/**
 * @Description 恢复滚动条
 * @Author luochen_ya
 * @Date 2025-01-11
 */
function handleCanScroll() {
  var mo = function (e) {
    e.preventDefault();
  };
  document.body.style.overflow = '';
  document.removeEventListener("touchmove", mo, false);
}
;// ./src/package/luochenya-js/thousands.js
/**
 * @Description 數字千位符
 * @Author luochen_ya
 * @Date 2025-01-11
 * @param {number} value
 * @returns {string}
 */
function handleThousands(value) {
  const suffix = '';
  if (value && value !== 'NULL' && value !== 'undefined' && isNaN(Number(value))) {
    return value;
  } else if (!value) {
    return '0';
  } else {
    const pSuffix = '';
    value = value.toString();
    const intPart = Math.floor(Math.abs(Number(value)));
    let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    intPartFormat = pSuffix + intPartFormat;
    let floatPart = '';
    const value2Array = value.split('.');
    if (value2Array.length === 2) {
      floatPart = value2Array[1].toString();
      if (floatPart.length === 1) {
        return intPartFormat + '.' + floatPart + '0' + suffix;
      } else {
        return intPartFormat + '.' + floatPart + suffix;
      }
    } else {
      return intPartFormat + floatPart + suffix;
    }
  }
}
;// ./src/package/luochenya-js/index.js


/* harmony default export */ var luochenya_js = ({
  handleStopScroll: handleStopScroll,
  handleCanScroll: handleCanScroll,
  handleThousands: handleThousands
});
;// ./src/package/index.js



;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=luochenya-common.common.js.map