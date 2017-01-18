(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueHtml5Editor"] = factory();
	else
		root["VueHtml5Editor"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _keys = __webpack_require__(1);

	var _keys2 = _interopRequireDefault(_keys);

	var _editor = __webpack_require__(36);

	var _editor2 = _interopRequireDefault(_editor);

	var _index = __webpack_require__(40);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(43);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(48);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(53);

	var _index8 = _interopRequireDefault(_index7);

	var _index9 = __webpack_require__(56);

	var _index10 = _interopRequireDefault(_index9);

	var _index11 = __webpack_require__(59);

	var _index12 = _interopRequireDefault(_index11);

	var _index13 = __webpack_require__(63);

	var _index14 = _interopRequireDefault(_index13);

	var _index15 = __webpack_require__(64);

	var _index16 = _interopRequireDefault(_index15);

	var _index17 = __webpack_require__(68);

	var _index18 = _interopRequireDefault(_index17);

	var _hr = __webpack_require__(72);

	var _hr2 = _interopRequireDefault(_hr);

	var _index19 = __webpack_require__(73);

	var _index20 = _interopRequireDefault(_index19);

	var _index21 = __webpack_require__(74);

	var _index22 = _interopRequireDefault(_index21);

	var _index23 = __webpack_require__(75);

	var _index24 = _interopRequireDefault(_index23);

	var _zhCn = __webpack_require__(76);

	var _zhCn2 = _interopRequireDefault(_zhCn);

	var _enUs = __webpack_require__(77);

	var _enUs2 = _interopRequireDefault(_enUs);

	var _arrayPolyfill = __webpack_require__(78);

	var _arrayPolyfill2 = _interopRequireDefault(_arrayPolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * install
	 * @param Vue   {Vue}
	 * @param options {Object}
	 */
	exports.install = function (Vue, options) {

	    (0, _arrayPolyfill2.default)();

	    options = options || {};

	    //modules
	    var modules = [_index2.default, _index6.default, _index4.default, _index8.default, _index10.default, _index12.default, _index14.default, _index16.default, _index18.default, _hr2.default, _index20.default, _index22.default, _index24.default];
	    //extended modules
	    if (Array.isArray(options.modules)) {
	        (function () {
	            var arr = [];
	            options.modules.forEach(function (module) {
	                if (module.name) {
	                    arr.push(module);
	                }
	            });
	            modules = modules.concat(arr);
	        })();
	    }
	    //hidden modules
	    if (Array.isArray(options.hiddenModules)) {
	        modules = function () {
	            var arr = [];
	            modules.forEach(function (m) {
	                if (!options.hiddenModules.includes(m.name)) {
	                    arr.push(m);
	                }
	            });
	            return arr;
	        }();
	    }
	    //visible modules
	    if (Array.isArray(options.visibleModules)) {
	        modules = function () {
	            var arr = [];
	            options.visibleModules.forEach(function (name) {
	                modules.forEach(function (module) {
	                    if (module.name == name) {
	                        arr.push(module);
	                    }
	                });
	            });
	            return arr;
	        }();
	    }

	    var components = {};
	    modules.forEach(function (module) {

	        //specify the config for each module in options by name
	        var config = options[module.name];
	        module.config = Vue.util.extend(module.config || {}, config || {});

	        if (module.dashboard) {
	            //$options.module
	            module.dashboard.module = module;
	            components['dashboard-' + module.name] = module.dashboard;
	        }
	        if (options.icons && options.icons[module.name]) {
	            module.icon = options.icons[module.name];
	        }

	        module.hasDashboard = !!module.dashboard;
	        //prevent vue sync
	        module.dashboard = null;
	    });

	    //i18n
	    var i18n = { "zh-cn": _zhCn2.default, "en-us": _enUs2.default };
	    var customI18n = options.i18n || {};
	    (0, _keys2.default)(customI18n).forEach(function (key) {
	        i18n[key] = i18n[key] ? Vue.util.extend(i18n[key], customI18n[key]) : customI18n[key];
	    });
	    var language = options.language || "en-us";
	    var locale = i18n[language] || i18n["en-us"];

	    var component = Vue.extend(_editor2.default).extend({
	        data: function data() {
	            return { modules: modules, locale: locale };
	        },

	        components: components
	    });

	    Vue.component(options.name || "vue-html5-editor", component);
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);

	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(37)

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(39)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\editor.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1aa1b5c6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1aa1b5c6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] editor.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./../node_modules/css-loader/lib/css-base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))();
	// imports


	// module
	exports.push([module.id, "/**\n.vue-html5-editor\n    ├──.toolbar\n    |    ├── ul  (menu)\n    |    └── .dashboard\n    └──.content\n*/\n.vue-html5-editor {\n  font-size: 14px;\n  line-height: 1.5;\n  border: 1px solid #ddd;\n  text-align: left;\n  background-color: white;\n  border-radius: .4em;\n  overflow: hidden;\n}\n.vue-html5-editor * {\n  box-sizing: border-box;\n}\n.vue-html5-editor.full-screen {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  bottom: 0 !important;\n  right: 0 !important;\n  border-radius: 0;\n}\n.vue-html5-editor > .toolbar {\n  background-color: white;\n  position: relative;\n}\n.vue-html5-editor > .toolbar > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border-bottom: 1px solid #ddd;\n}\n.vue-html5-editor > .toolbar > ul > li {\n  display: inline-block;\n  cursor: pointer;\n  width: 50px;\n  text-align: center;\n  line-height: 36px;\n}\n.vue-html5-editor > .toolbar > ul > li .icon {\n  height: 16px;\n  width: 16px;\n  display: inline-block;\n}\n.vue-html5-editor > .toolbar .dashboard {\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background-color: white;\n  overflow: auto;\n}\n.vue-html5-editor > .toolbar .dashboard input[type='text'],\n.vue-html5-editor > .toolbar .dashboard input[type='number'],\n.vue-html5-editor > .toolbar .dashboard select {\n  padding: 6px 12px;\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.vue-html5-editor > .toolbar .dashboard input[type='text']:focus,\n.vue-html5-editor > .toolbar .dashboard input[type='number']:focus,\n.vue-html5-editor > .toolbar .dashboard select:focus {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.vue-html5-editor > .toolbar .dashboard input[type='text'][disabled],\n.vue-html5-editor > .toolbar .dashboard input[type='number'][disabled],\n.vue-html5-editor > .toolbar .dashboard select[disabled],\n.vue-html5-editor > .toolbar .dashboard input[type='text'][readonly],\n.vue-html5-editor > .toolbar .dashboard input[type='number'][readonly],\n.vue-html5-editor > .toolbar .dashboard select[readonly] {\n  background-color: #eee;\n  opacity: 1;\n}\n.vue-html5-editor > .toolbar .dashboard input[type='text'][disabled],\n.vue-html5-editor > .toolbar .dashboard input[type='number'][disabled],\n.vue-html5-editor > .toolbar .dashboard select[disabled] {\n  cursor: not-allowed;\n}\n.vue-html5-editor > .toolbar .dashboard button {\n  padding: 6px 12px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.vue-html5-editor > .toolbar .dashboard button.active,\n.vue-html5-editor > .toolbar .dashboard button:active,\n.vue-html5-editor > .toolbar .dashboard button:focus,\n.vue-html5-editor > .toolbar .dashboard button:hover {\n  color: #333;\n  background-color: #e6e6e6;\n}\n.vue-html5-editor > .toolbar .dashboard button.active,\n.vue-html5-editor > .toolbar .dashboard button:active {\n  border-color: #adadad;\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.vue-html5-editor > .toolbar .dashboard button:focus {\n  border-color: #8c8c8c;\n  text-decoration: none;\n}\n.vue-html5-editor > .toolbar .dashboard button:hover {\n  border-color: #adadad;\n  text-decoration: none;\n}\n.vue-html5-editor > .toolbar .dashboard input,\n.vue-html5-editor > .toolbar .dashboard button,\n.vue-html5-editor > .toolbar .dashboard select {\n  line-height: normal;\n}\n.vue-html5-editor > .toolbar .dashboard label {\n  font-weight: bolder;\n}\n.vue-html5-editor .content {\n  overflow: auto;\n  padding: 10px;\n}\n.vue-html5-editor .content:focus {\n  outline: 0;\n}\n.vue-html5-editor .content img {\n  max-width: 100%;\n}\n.vue-html5-editor .loading {\n  overflow: hidden;\n  text-align: center;\n  padding: 20px;\n}\n@media (max-width: 767px) {\n.vue-html5-editor .dashboard label,\n  .vue-html5-editor .dashboard input[type='text'],\n  .vue-html5-editor .dashboard input[type='number'],\n  .vue-html5-editor .dashboard button,\n  .vue-html5-editor .dashboard select {\n    display: block;\n    margin-bottom: 5px;\n    width: 100% !important;\n}\n.vue-html5-editor .dashboard label:last-child,\n  .vue-html5-editor .dashboard input[type='text']:last-child,\n  .vue-html5-editor .dashboard input[type='number']:last-child,\n  .vue-html5-editor .dashboard button:last-child,\n  .vue-html5-editor .dashboard select:last-child {\n    margin-bottom: 0;\n}\n}\n@media (min-width: 768px) {\n.vue-html5-editor .dashboard label,\n  .vue-html5-editor .dashboard input,\n  .vue-html5-editor .dashboard button,\n  .vue-html5-editor .dashboard select {\n    display: inline-block;\n    margin-right: 4px;\n    max-width: 100%;\n}\n.vue-html5-editor .dashboard label:last-child,\n  .vue-html5-editor .dashboard input:last-child,\n  .vue-html5-editor .dashboard button:last-child,\n  .vue-html5-editor .dashboard select:last-child {\n    margin-right: 0;\n}\n}\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        content: {
	            type: String,
	            required: true,
	            default: ""
	        },
	        height: {
	            type: Number,
	            default: 300,
	            validator: function validator(val) {
	                return val >= 100;
	            }
	        },
	        zIndex: {
	            type: Number,
	            default: 1000
	        },
	        autoHeight: {
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            //locale: {},
	            fullScreen: false,
	            dashboard: null,
	            dashboardStyle: {}
	        };
	    },

	    watch: {
	        content: function content(val) {
	            var content = this.$refs.content.innerHTML;
	            if (val != content) {
	                this.$refs.content.innerHTML = val;
	                this.$emit('update', val); //new
	            }
	        },
	        dashboard: function dashboard(val) {
	            if (val) {
	                this.computeDashboardStyle();
	            }
	        },
	        fullScreen: function fullScreen(val) {
	            var component = this;
	            component.$nextTick(function () {
	                component.computeDashboardStyle();
	            });
	            if (val) {
	                component.parentEl = component.$el.parentNode;
	                component.nextEl = component.$el.nextSibling;
	                component.$appendTo(document.body);
	                return;
	            }
	            if (component.nextEl) {
	                component.$before(component.nextEl);
	                return;
	            }
	            component.$appendTo(component.parentEl);
	        }
	    },

	    computed: {
	        contentStyle: function contentStyle() {
	            var style = {};
	            if (this.fullScreen) {
	                style.height = window.innerHeight - (this.$refs.toolbar.clientHeight + 1) + "px";
	                return style;
	            }
	            if (!this.autoHeight) {
	                style.height = this.height + 'px';
	                return style;
	            }
	            style["min-height"] = this.height + 'px';
	            return style;
	        }
	    },
	    methods: {
	        computeDashboardStyle: function computeDashboardStyle() {
	            this.dashboardStyle = { 'max-height': this.$refs.content.clientHeight + 'px' };
	        },
	        getContentElement: function getContentElement() {
	            return this.$refs.content;
	        },
	        toggleFullScreen: function toggleFullScreen() {
	            this.fullScreen = !this.fullScreen;
	        },
	        toggleDashboard: function toggleDashboard(dashboard) {
	            this.dashboard == dashboard ? this.dashboard = null : this.dashboard = dashboard;
	        },
	        execCommand: function execCommand(command, arg) {
	            this.restoreSelection();
	            document.execCommand(command, false, arg);
	            this.content = this.$refs.content.innerHTML;
	            this.dashboard = null;
	        },
	        getCurrentRange: function getCurrentRange() {
	            return this.range;
	        },
	        saveCurrentRange: function saveCurrentRange() {
	            var selection = window.getSelection ? window.getSelection() : document.getSelection();
	            var range = selection.rangeCount ? selection.getRangeAt(0) : null;
	            if (!range) {
	                return;
	            }
	            if (this.$refs.content.contains(range.startContainer) && this.$refs.content.contains(range.endContainer)) {
	                this.range = range;
	            }
	        },
	        restoreSelection: function restoreSelection() {
	            var selection = window.getSelection ? window.getSelection() : document.getSelection();
	            selection.removeAllRanges();
	            if (this.range) {
	                selection.addRange(this.range);
	            } else {
	                var content = this.$refs.content;
	                var div = document.createElement("div");
	                var range = document.createRange();
	                content.appendChild(div);
	                range.setStart(div, 0);
	                range.setEnd(div, 0);
	                selection.addRange(range);
	            }
	        },
	        activeModule: function activeModule(module) {
	            if (typeof module.handler == "function") {
	                module.handler(this);
	                return;
	            }
	            if (module.hasDashboard) {
	                this.toggleDashboard('dashboard-' + module.name);
	            }
	        }
	    },
	    mounted: function mounted() {
	        var editor = this;
	        editor.modules.forEach(function (module) {
	            if (typeof module.init == "function") {
	                module.init(editor);
	            }
	        });
	        //ready
	        var component = this;
	        this.$nextTick(function () {
	            var content = component.$refs.content;
	            content.innerHTML = component.content;
	            content.addEventListener("mouseup", component.saveCurrentRange, false);
	            content.addEventListener("keyup", component.saveCurrentRange, false);
	            content.addEventListener("mouseout", component.saveCurrentRange, false);
	            content.addEventListener("keyup", function () {
	                component.content = component.$refs.content.innerHTML;
	            }, false);

	            component.touchHandler = function (e) {
	                if (component.$refs.content.contains(e.target)) {
	                    component.saveCurrentRange();
	                }
	            };

	            window.addEventListener("touchend", component.touchHandler, false);
	        });
	    },
	    beforeDestroy: function beforeDestroy() {
	        var editor = this;
	        window.removeEventListener("touchend", editor.touchHandler);
	        editor.modules.forEach(function (module) {
	            if (typeof module.destroyed == "function") {
	                module.destroyed(editor);
	            }
	        });
	    }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vue-html5-editor",
	    class: {
	      'full-screen': _vm.fullScreen
	    },
	    style: ({
	      'z-index': _vm.zIndex
	    })
	  }, [_c('div', {
	    ref: "toolbar",
	    staticClass: "toolbar",
	    style: ({
	      'z-index': _vm.zIndex + 1
	    })
	  }, [_c('ul', [_vm._l((_vm.modules), function(module) {
	    return [(module.show) ? _c('li', {
	      attrs: {
	        "title": _vm.locale[module.i18n]
	      },
	      on: {
	        "click": function($event) {
	          _vm.activeModule(module)
	        }
	      }
	    }, [_c('span', {
	      staticClass: "icon",
	      class: module.icon
	    })]) : _vm._e()]
	  })], 2), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dashboard),
	      expression: "dashboard"
	    }],
	    staticClass: "dashboard",
	    style: (_vm.dashboardStyle)
	  }, [_c('keep-alive', [(_vm.dashboard) ? _c(_vm.dashboard, {
	    tag: "div"
	  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
	    ref: "content",
	    staticClass: "content",
	    style: (_vm.contentStyle),
	    attrs: {
	      "contenteditable": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.toggleDashboard(_vm.dashboard)
	      }
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1aa1b5c6", module.exports)
	  }
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(41);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: "text",
	    icon: "fa fa-pencil",
	    i18n: "text",
	    show: true,
	    dashboard: _dashboard2.default
	}; /**
	    * text,set the text bold or italic or underline or with strike through or subscript or superscript
	    * Created by peak on 16/8/18.
	    */

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(42)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\text\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-562d3f73", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-562d3f73", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('bold')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale["bold"]))]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('italic')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale["italic"]))]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('underline')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale["underline"]))]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('strikeThrough')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale["strike through"]))]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('subscript')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale["subscript"]))]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('superscript')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale["superscript"]))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-562d3f73", module.exports)
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(44);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * font name and font size
	 * Created by peak on 16/8/18.
	 */
	exports.default = {
	    name: "font",
	    icon: "fa fa-font",
	    i18n: "font",
	    show: true,
	    dashboard: _dashboard2.default
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(45)

	/* script */
	__vue_exports__ = __webpack_require__(46)

	/* template */
	var __vue_template__ = __webpack_require__(47)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\font\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-25ba39d6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-25ba39d6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./../../../node_modules/css-loader/lib/css-base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))();
	// imports


	// module
	exports.push([module.id, "\n.vue-html5-editor .dashboard .dashboard-font {\n  line-height: 36px;\n}\n", ""]);

	// exports


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            nameList: ["Microsoft YaHei", "Helvetica Neue", "Helvetica", "Arial", "sans-serif", "Verdana", "Georgia", "Times New Roman", "Trebuchet MS", "Microsoft JhengHei", "Courier New", "Impact", "Comic Sans MS", "Consolas"],
	            lineHeightList: ["1.0", "1.5", "1.8", "2.0", "2.5", "3.0"]
	        };
	    },

	    methods: {
	        setFontName: function setFontName(name) {
	            this.$parent.execCommand("fontName", name);
	        },
	        setFontSize: function setFontSize(size) {
	            this.$parent.execCommand("fontSize", size);
	        },
	        setHeading: function setHeading(heading) {
	            this.$parent.execCommand("formatBlock", "h" + heading);
	        },
	        _contains: function _contains(arr, el) {
	            for (var i = 0; i < arr.length; i++) {
	                if (arr[i] == el) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        setLineHeight: function setLineHeight(lh) {
	            var range = this.$parent.getCurrentRange();
	            if (!range) {
	                return;
	            }
	            if (!range.collapsed) {
	                range.collapse();
	            }
	            //find parent block element
	            var blockNodeNames = ["DIV", "P", "SECTION", "H1", "H2", "H3", "H4", "H5", "H6", "OL", "UL", "LI", "BODY"];
	            var container = range.endContainer;
	            while (container) {
	                if (container.nodeType != 1) {
	                    container = container.parentNode;
	                    continue;
	                }

	                if (blockNodeNames.includes(container.nodeName)) {
	                    break;
	                }
	                container = container.parentNode;
	            }
	            var contentEl = this.$parent.getContentElement();
	            if (contentEl.contains(container)) {
	                container.style.lineHeight = lh;
	            } else {
	                container = range.endContainer;
	                var div = document.createElement("div");
	                div.innerText = container.innerText || container.textContent;
	                div.style.lineHeight = lh;
	                container.parentNode.replaceChild(div, container);
	            }
	            this.$parent.toggleDashboard("font");
	        }
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "dashboard-font"
	  }, [_c('div', [_c('label', [_vm._v(_vm._s(_vm.$parent.locale["heading"]) + ":")]), _vm._v(" "), _vm._l((6), function(h) {
	    return _c('button', {
	      attrs: {
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          _vm.setHeading(h + 1)
	        }
	      }
	    }, [_vm._v("H" + _vm._s(h + 1))])
	  })], 2), _vm._v(" "), _c('div', [_c('label', [_vm._v("\n            " + _vm._s(_vm.$parent.locale["font name"]) + ":\n        ")]), _vm._v(" "), _vm._l((_vm.nameList), function(name) {
	    return _c('button', {
	      attrs: {
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          _vm.setFontName(name)
	        }
	      }
	    }, [_vm._v(_vm._s(name))])
	  })], 2), _vm._v(" "), _c('div', [_c('label', [_vm._v("\n            " + _vm._s(_vm.$parent.locale["font size"]) + ":\n        ")]), _vm._v(" "), _vm._l((7), function(size) {
	    return _c('button', {
	      attrs: {
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          _vm.setFontSize(size + 1)
	        }
	      }
	    }, [_vm._v(_vm._s(size + 1))])
	  })], 2), _vm._v(" "), _c('div', [_c('label', [_vm._v("\n            " + _vm._s(_vm.$parent.locale["line height"]) + ":\n        ")]), _vm._v(" "), _vm._l((_vm.lineHeightList), function(lh) {
	    return _c('button', {
	      attrs: {
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          _vm.setLineHeight(lh)
	        }
	      }
	    }, [_vm._v("\n            " + _vm._s(lh) + "\n        ")])
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-25ba39d6", module.exports)
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(49);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * fore color and back color
	 * Created by peak on 16/8/18.
	 */
	exports.default = {
	    name: "color",
	    icon: "fa fa-paint-brush",
	    i18n: "color",
	    show: true,
	    dashboard: _dashboard2.default
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(50)

	/* script */
	__vue_exports__ = __webpack_require__(51)

	/* template */
	var __vue_template__ = __webpack_require__(52)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\color\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0ddae07d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0ddae07d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./../../../node_modules/css-loader/lib/css-base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))();
	// imports


	// module
	exports.push([module.id, "\n.vue-html5-editor .color-card {\n  margin: 2px;\n  width: 30px;\n  height: 30px;\n  float: left;\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            command: "foreColor", //backColor
	            colors: ["#000000", "#000033", "#000066", "#000099", "#003300", "#003333", "#003366", "#003399", "#006600", "#006633", "#009900", "#330000", "#330033", "#330066", "#333300", "#333366", "#660000", "#660033", "#663300", "#666600", "#666633", "#666666", "#666699", "#990000", "#990033", "#9900CC", "#996600", "#FFCC00", "#FFCCCC", "#FFCC99", "#FFFF00", "#FF9900", "#CCFFCC", "#CCFFFF", "#CCFF99"]
	        };
	    },

	    methods: {
	        changeColor: function changeColor(color) {
	            this.$parent.execCommand(this.command, color);
	        }
	    }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('div', [_c('label', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.command),
	      expression: "command"
	    }],
	    attrs: {
	      "type": "radio",
	      "value": "foreColor"
	    },
	    domProps: {
	      "checked": _vm._q(_vm.command, "foreColor")
	    },
	    on: {
	      "click": function($event) {
	        _vm.command = "foreColor"
	      }
	    }
	  }), _vm._v(" \n            " + _vm._s(_vm.$parent.locale["fore color"]) + "\n        ")]), _vm._v(" "), _c('label', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.command),
	      expression: "command"
	    }],
	    attrs: {
	      "type": "radio",
	      "value": "backColor"
	    },
	    domProps: {
	      "checked": _vm._q(_vm.command, "backColor")
	    },
	    on: {
	      "click": function($event) {
	        _vm.command = "backColor"
	      }
	    }
	  }), _vm._v(" \n            " + _vm._s(_vm.$parent.locale["background color"]) + "\n        ")])]), _vm._v(" "), _c('div', [_vm._l((_vm.colors), function(color) {
	    return _c('div', {
	      staticClass: "color-card",
	      style: ({
	        'background-color': color
	      }),
	      on: {
	        "click": function($event) {
	          _vm.changeColor(color)
	        }
	      }
	    })
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "clear": "both"
	    }
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0ddae07d", module.exports)
	  }
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(54);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: "align",
	    icon: "fa fa-align-center",
	    i18n: "align",
	    show: true,
	    dashboard: _dashboard2.default
	}; /**
	    * text align
	    * Created by peak on 16/8/18.
	    */

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(55)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\align\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-825376c2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-825376c2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('justifyLeft')
	      }
	    }
	  }, [_vm._v("\n        " + _vm._s(_vm.$parent.locale["left justify"]) + "\n    ")]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('justifyCenter')
	      }
	    }
	  }, [_vm._v("\n        " + _vm._s(_vm.$parent.locale["center justify"]) + "\n    ")]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('justifyRight')
	      }
	    }
	  }, [_vm._v("\n        " + _vm._s(_vm.$parent.locale["right justify"]) + "\n    ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-825376c2", module.exports)
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(57);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: "list",
	    icon: "fa fa-list",
	    show: true,
	    i18n: "list",
	    dashboard: _dashboard2.default
	}; /**
	    * list,ul,ol
	    * Created by peak on 16/8/18.
	    */

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\list\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0c6c5124", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0c6c5124", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('insertOrderedList')
	      }
	    }
	  }, [_vm._v("\n        " + _vm._s(_vm.$parent.locale["ordered list"]) + "\n    ")]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$parent.execCommand('insertUnorderedList')
	      }
	    }
	  }, [_vm._v("\n        " + _vm._s(_vm.$parent.locale["unordered list"]) + "\n    ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0c6c5124", module.exports)
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(60);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: "link",
	    icon: "fa fa-chain",
	    show: true,
	    i18n: "link",
	    dashboard: _dashboard2.default
	}; /**
	    * create link
	    * Created by peak on 16/8/18.
	    */

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(61)

	/* template */
	var __vue_template__ = __webpack_require__(62)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\link\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7bdc3f80", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7bdc3f80", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return { url: null };
	    },

	    methods: {
	        createLink: function createLink() {
	            if (!this.url) {
	                return;
	            }
	            this.$parent.execCommand("createLink", this.url);
	            this.url = null;
	        }
	    }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.createLink($event)
	      }
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.url),
	      expression: "url"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.$parent.locale['please enter a url'],
	      "maxlength": "1024"
	    },
	    domProps: {
	      "value": _vm._s(_vm.url)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.url = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale["create link"]))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7bdc3f80", module.exports)
	  }
	}

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * unlink
	 * Created by peak on 16/8/18.
	 */
	exports.default = {
	    name: "unlink",
	    icon: "fa fa-chain-broken",
	    show: true,
	    i18n: "unlink",
	    handler: function handler(editor) {
	        editor.execCommand("unlink");
	    }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(65);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * insert table
	 * Created by peak on 16/8/18.
	 */
	exports.default = {
	    //can not named table
	    //dashboard will add to editor as a child component and named as module name
	    //Do not use built-in or reserved HTML elements as component id
	    name: "tabulation",
	    icon: "fa fa-table",
	    i18n: "table",
	    show: true,
	    dashboard: _dashboard2.default
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(66)

	/* template */
	var __vue_template__ = __webpack_require__(67)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\table\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ca9754b0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ca9754b0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            rows: 2,
	            cols: 2,
	            hasHead: false,
	            striped: false,
	            hover: false
	        };
	    },

	    methods: {
	        insertTable: function insertTable() {
	            var component = this;
	            if (component.rows < 2 || component.rows > 10) {
	                return;
	            }
	            if (component.cols < 2 || component.cols > 10) {
	                return;
	            }
	            var table = "<table style='border-spacing: 0px; border-collapse: collapse; width: 100%; max-width: 100%; margin-bottom: 0px; border: 1px solid rgb(221, 221, 221); color: rgb(51, 51, 51); font-size: 14px; line-height: 20px; background-color: transparent;'><tbody>";
	            for (var i = 0; i < component.rows; i++) {
	                table += "<tr>";
	                for (var j = 0; j < component.cols; j++) {
	                    table += "<td style='padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);'>&nbsp;</td>";
	                }
	                table += "</tr>";
	            }
	            table += "</tbody></table>";
	            component.$parent.execCommand("insertHTML", table);
	        }
	    }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.insertTable($event)
	      }
	    }
	  }, [_c('label', [_vm._v("\n        " + _vm._s(_vm.$parent.locale["row count"]) + "\n        "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.rows),
	      expression: "rows"
	    }],
	    staticStyle: {
	      "width": "60px"
	    },
	    attrs: {
	      "type": "number",
	      "maxlength": "2",
	      "min": "2",
	      "max": "10"
	    },
	    domProps: {
	      "value": _vm._s(_vm.rows)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.rows = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("\n        " + _vm._s(_vm.$parent.locale["column count"]) + "\n        "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.cols),
	      expression: "cols"
	    }],
	    staticStyle: {
	      "width": "60px"
	    },
	    attrs: {
	      "type": "number",
	      "maxlength": "2",
	      "min": "2",
	      "max": "10"
	    },
	    domProps: {
	      "value": _vm._s(_vm.cols)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.cols = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  })]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v(_vm._s(_vm.$parent.locale.save))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ca9754b0", module.exports)
	  }
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dashboard = __webpack_require__(69);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * insert image
	 * Created by peak on 16/8/18.
	 */
	exports.default = {
	    name: "image",
	    icon: "fa fa-file-image-o",
	    i18n: "image",
	    show: true,
	    config: {
	        server: '/api/common/upload_file',
	        fieldName: "image",
	        sizeLimit: 512 * 1024, //512k
	        compress: true,
	        width: 1600,
	        height: 1600,
	        quality: 80,
	        uploadHandler: function uploadHandler(responseText) {
	            var json = JSON.parse(responseText);
	            if (!json.ok) {
	                alert(json.msg);
	            } else {
	                return json.data;
	            }
	        }
	    },
	    dashboard: _dashboard2.default
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(70)

	/* template */
	var __vue_template__ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-loader/lib/template-compiler?id=data-v-42b58875!vue-loader/lib/selector?type=template&index=0!./dashboard.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\playground\\vue-html5-editor/src\\modules\\image\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-42b58875", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-42b58875", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	// import lrz from './lrz.all.bundle'
	exports.default = {
	    data: function data() {
	        return {
	            url: "",
	            upload: {
	                status: "ready", //progress,success,error,abort
	                progressComputable: false,
	                complete: 0
	            }

	        };
	    },

	    methods: {
	        reset: function reset() {
	            this.upload.status = "ready";
	        },
	        pick: function pick() {
	            this.$refs.file.click();
	        },
	        insertImage: function insertImage(e) {
	            e.preventDefault();
	            if (!this.url) {
	                return;
	            }
	            this.$parent.execCommand("insertImage", this.url);
	            this.url = null;
	        },
	        selectFile: function selectFile(e) {
	            var component = this;
	            var config = component.$options.module.config;

	            var file = this.$refs.file.files[0];
	            if (file.size > config.size_limit) {
	                var prompt = component.$parent.locale["exceed size limit"];
	                alert(prompt);
	                return;
	            }
	            component.$refs.file.value = null;
	            //需要压缩
	            // if (config.compress) {
	            //     lrz(file, {
	            //         width: config.width,
	            //         height: config.height,
	            //         quality: config.quality,
	            //         fieldName: config.fieldName
	            //     }).then(function (rst) {
	            //         config.server ? component.uploadFile(rst.file) : component.insertBase64(rst.base64)
	            //     }).catch(function (err) {
	            //         component.upload.status = "error"
	            //         console.log("upload error", err)
	            //     })
	            //     return
	            // }
	            //不需要压缩
	            //base64
	            if (!config.server) {
	                var reader = new FileReader();
	                reader.onload = function (e) {
	                    component.insertBase64(e.target.result);
	                };
	                reader.readAsDataURL(file);
	                return;
	            }
	            //上传服务器
	            component.uploadFile(file);
	        },

	        insertBase64: function insertBase64(data) {
	            this.$parent.execCommand("insertimage", data);
	        },
	        uploadFile: function uploadFile(file) {
	            var component = this;
	            var config = component.$options.module.config;
	            if (config.uploadFile) {
	                var url = config.uploadFile(file);
	                if (url) {
	                    component.upload.status = "success";
	                    component.$parent.execCommand("insertImage", url);
	                }
	                return;
	            }
	            var formData = new FormData();
	            formData.append(config.fieldName, file);
	            var xhr = new XMLHttpRequest();
	            xhr.onprogress = function (e) {
	                component.upload.status = "progress";
	                if (e.lengthComputable) {
	                    component.upload.progressComputable = true;
	                    var percentComplete = e.loaded / e.total;
	                    component.upload.complete = (percentComplete * 100).toFixed(2);
	                } else {
	                    component.upload.progressComputable = false;
	                }
	            };
	            xhr.onload = function (e) {
	                if (xhr.status != 200) {
	                    component.upload.status = "error";
	                    console.log("upload error", e);
	                    return;
	                }
	                component.upload.status = "success";
	                try {
	                    var _url = config.uploadHandler(xhr.responseText);
	                    if (_url) {
	                        component.$parent.execCommand("insertImage", _url);
	                    }
	                } catch (e) {
	                    console.error(e);
	                } finally {
	                    component.upload.status = "ready";
	                }
	            };
	            xhr.onerror = function (e) {
	                component.upload.status = "error";
	                console.log("upload error", e);
	            };
	            xhr.onabort = function (e) {
	                component.upload.status = "abort";
	                console.log("upload abort", e);
	            };
	            xhr.open("POST", config.server);
	            xhr.send(formData);
	        }
	    }
	};

/***/ },
/* 71 */,
/* 72 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * hr
	 * Created by peak on 16/8/20.
	 */
	exports.default = {
	    name: "hr",
	    icon: "fa fa-minus",
	    show: true,
	    i18n: "hr",
	    handler: function handler(editor) {
	        editor.execCommand("insertHorizontalRule");
	    }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * remove format of selection
	 * Created by peak on 16/8/18.
	 */
	exports.default = {
	    name: "eraser",
	    icon: "fa fa-eraser",
	    i18n: "eraser",
	    show: true,
	    handler: function handler(editor) {
	        editor.execCommand("removeFormat");
	    }
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * undo
	 * Created by peak on 16/8/20.
	 */
	exports.default = {
	    name: "undo",
	    icon: "fa-undo fa",
	    show: true,
	    i18n: "undo",
	    handler: function handler(editor) {
	        editor.execCommand("undo");
	    }
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * toggle full screen mode
	 * Created by peak on 16/8/18.
	 */
	exports.default = {
	    name: "full-screen",
	    icon: "fa fa-arrows-alt",
	    i18n: "full screen",
	    show: true,
	    handler: function handler(editor) {
	        editor.toggleFullScreen();
	    }
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    "align": "对齐方式",
	    "image": "图片",
	    "list": "列表",
	    "link": "链接",
	    "unlink": "去除链接",
	    "table": "表格",
	    "font": "文字",
	    "full screen": "全屏",
	    "text": "排版",
	    "eraser": "格式清除",
	    "info": "关于",
	    "color": "颜色",
	    "please enter a url": "请输入地址",
	    "create link": "创建链接",
	    "bold": "加粗",
	    "italic": "倾斜",
	    "underline": "下划线",
	    "strike through": "删除线",
	    "subscript": "上标",
	    "superscript": "下标",
	    "heading": "标题",
	    "font name": "字体",
	    "font size": "文字大小",
	    "left justify": "左对齐",
	    "center justify": "居中",
	    "right justify": "右对齐",
	    "ordered list": "有序列表",
	    "unordered list": "无序列表",
	    "fore color": "前景色",
	    "background color": "背景色",
	    "row count": "行数",
	    "column count": "列数",
	    "save": "确定",
	    "upload": "上传",
	    "progress": "进度",
	    "unknown": "未知",
	    "please wait": "请稍等",
	    "error": "错误",
	    "abort": "中断",
	    "reset": "重置",
	    "hr": "分隔线",
	    "undo": "撤消",
	    "line height": "行高",
	    "exceed size limit": "超出大小限制"
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    "align": "align",
	    "image": "image",
	    "list": "list",
	    "link": "link",
	    "unlink": "unlink",
	    "table": "table",
	    "font": "font",
	    "full screen": "full screen",
	    "text": "text",
	    "eraser": "remove format",
	    "info": "info",
	    "color": "color",
	    "please enter a url": "please enter a url",
	    "create link": "create link",
	    "bold": "bold",
	    "italic": "italic",
	    "underline": "underline",
	    "strike through": "strike through",
	    "subscript": "subscript",
	    "superscript": "superscript",
	    "heading": "heading",
	    "font name": "font name",
	    "font size": "font size",
	    "left justify": "left justify",
	    "center justify": "center justify",
	    "right justify": "right justify",
	    "ordered list": "ordered list",
	    "unordered list": "unordered list",
	    "fore color": "fore color",
	    "background color": "background color",
	    "row count": "row count",
	    "column count": "column count",
	    "save": "save",
	    "upload": "upload",
	    "progress": "progress",
	    "unknown": "unknown",
	    "please wait": "please wait",
	    "error": "error",
	    "abort": "abort",
	    "reset": "reset",
	    "hr": "horizontal rule",
	    "undo": "undo",
	    "line height": "line height",
	    "exceed size limit": "exceed size limit"
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    if (!Array.prototype.includes) {
	        Array.prototype.includes = function (searchElement /*, fromIndex*/) {
	            'use strict';

	            if (this == null) {
	                throw new TypeError('Array.prototype.includes called on null or undefined');
	            }

	            var O = Object(this);
	            var len = parseInt(O.length, 10) || 0;
	            if (len === 0) {
	                return false;
	            }
	            var n = parseInt(arguments[1], 10) || 0;
	            var k;
	            if (n >= 0) {
	                k = n;
	            } else {
	                k = len + n;
	                if (k < 0) {
	                    k = 0;
	                }
	            }
	            var currentElement;
	            while (k < len) {
	                currentElement = O[k];
	                if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
	                    return true;
	                }
	                k++;
	            }
	            return false;
	        };
	    }
	};

/***/ }
/******/ ])
});
;