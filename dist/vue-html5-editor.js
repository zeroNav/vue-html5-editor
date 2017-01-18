/*!
 * Vue-html5-editor 0.5.1
 * https://github.com/PeakTai/vue-html5-editor
 */
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

	var _hr = __webpack_require__(110);

	var _hr2 = _interopRequireDefault(_hr);

	var _index19 = __webpack_require__(111);

	var _index20 = _interopRequireDefault(_index19);

	var _index21 = __webpack_require__(112);

	var _index22 = _interopRequireDefault(_index21);

	var _index23 = __webpack_require__(113);

	var _index24 = _interopRequireDefault(_index23);

	var _zhCn = __webpack_require__(114);

	var _zhCn2 = _interopRequireDefault(_zhCn);

	var _enUs = __webpack_require__(115);

	var _enUs2 = _interopRequireDefault(_enUs);

	var _arrayPolyfill = __webpack_require__(116);

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

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1aa1b5c6!./../node_modules/less-loader/index.js!./style.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!./../node_modules/vue-style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1aa1b5c6!./../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1aa1b5c6!./../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

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

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25ba39d6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!./../../../node_modules/vue-style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25ba39d6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25ba39d6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

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

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0ddae07d!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!./../../../node_modules/vue-style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0ddae07d!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0ddae07d!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lrzAll = __webpack_require__(71);

	var _lrzAll2 = _interopRequireDefault(_lrzAll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	            if (config.compress) {
	                (0, _lrzAll2.default)(file, {
	                    width: config.width,
	                    height: config.height,
	                    quality: config.quality,
	                    fieldName: config.fieldName
	                }).then(function (rst) {
	                    config.server ? component.uploadFile(rst.file) : component.insertBase64(rst.base64);
	                }).catch(function (err) {
	                    component.upload.status = "error";
	                    console.log("upload error", err);
	                });
	                return;
	            }
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
	}; //
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

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof2 = __webpack_require__(72);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * https://github.com/think2011/localResizeIMG.git
	 */
	!function (e, t) {
	  if ("object" == ( false ? "undefined" : (0, _typeof3.default)(exports)) && "object" == ( false ? "undefined" : (0, _typeof3.default)(module))) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var n = t();for (var r in n) {
	      ("object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) ? exports : e)[r] = n[r];
	    }
	  }
	}(undefined, function () {
	  return function (e) {
	    function t(r) {
	      if (n[r]) return n[r].exports;var i = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
	    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
	  }([function (e, t, n) {
	    n(6), n(7), e.exports = n(8);
	  }, function (e, t, n) {
	    (function (t) {
	      !function (n) {
	        function r(e, t) {
	          return function () {
	            e.apply(t, arguments);
	          };
	        }function i(e) {
	          if ("object" != (0, _typeof3.default)(this)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof e) throw new TypeError("not a function");this._state = null, this._value = null, this._deferreds = [], l(e, r(a, this), r(s, this));
	        }function o(e) {
	          var t = this;return null === this._state ? void this._deferreds.push(e) : void f(function () {
	            var n = t._state ? e.onFulfilled : e.onRejected;if (null === n) return void (t._state ? e.resolve : e.reject)(t._value);var r;try {
	              r = n(t._value);
	            } catch (i) {
	              return void e.reject(i);
	            }e.resolve(r);
	          });
	        }function a(e) {
	          try {
	            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");if (e && ("object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) || "function" == typeof e)) {
	              var t = e.then;if ("function" == typeof t) return void l(r(t, e), r(a, this), r(s, this));
	            }this._state = !0, this._value = e, u.call(this);
	          } catch (n) {
	            s.call(this, n);
	          }
	        }function s(e) {
	          this._state = !1, this._value = e, u.call(this);
	        }function u() {
	          for (var e = 0, t = this._deferreds.length; t > e; e++) {
	            o.call(this, this._deferreds[e]);
	          }this._deferreds = null;
	        }function c(e, t, n, r) {
	          this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r;
	        }function l(e, t, n) {
	          var r = !1;try {
	            e(function (e) {
	              r || (r = !0, t(e));
	            }, function (e) {
	              r || (r = !0, n(e));
	            });
	          } catch (i) {
	            if (r) return;r = !0, n(i);
	          }
	        }var f = "function" == typeof t && t || function (e) {
	          setTimeout(e, 1);
	        },
	            d = Array.isArray || function (e) {
	          return "[object Array]" === Object.prototype.toString.call(e);
	        };i.prototype["catch"] = function (e) {
	          return this.then(null, e);
	        }, i.prototype.then = function (e, t) {
	          var n = this;return new i(function (r, i) {
	            o.call(n, new c(e, t, r, i));
	          });
	        }, i.all = function () {
	          var e = Array.prototype.slice.call(1 === arguments.length && d(arguments[0]) ? arguments[0] : arguments);return new i(function (t, n) {
	            function r(o, a) {
	              try {
	                if (a && ("object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) || "function" == typeof a)) {
	                  var s = a.then;if ("function" == typeof s) return void s.call(a, function (e) {
	                    r(o, e);
	                  }, n);
	                }e[o] = a, 0 === --i && t(e);
	              } catch (u) {
	                n(u);
	              }
	            }if (0 === e.length) return t([]);for (var i = e.length, o = 0; o < e.length; o++) {
	              r(o, e[o]);
	            }
	          });
	        }, i.resolve = function (e) {
	          return e && "object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) && e.constructor === i ? e : new i(function (t) {
	            t(e);
	          });
	        }, i.reject = function (e) {
	          return new i(function (t, n) {
	            n(e);
	          });
	        }, i.race = function (e) {
	          return new i(function (t, n) {
	            for (var r = 0, i = e.length; i > r; r++) {
	              e[r].then(t, n);
	            }
	          });
	        }, i._setImmediateFn = function (e) {
	          f = e;
	        }, i.prototype.always = function (e) {
	          var t = this.constructor;return this.then(function (n) {
	            return t.resolve(e()).then(function () {
	              return n;
	            });
	          }, function (n) {
	            return t.resolve(e()).then(function () {
	              throw n;
	            });
	          });
	        }, "undefined" != typeof e && e.exports ? e.exports = i : n.Promise || (n.Promise = i);
	      }(this);
	    }).call(t, n(2).setImmediate);
	  }, function (e, t, n) {
	    (function (e, r) {
	      function i(e, t) {
	        this._id = e, this._clearFn = t;
	      }var o = n(3).nextTick,
	          a = Function.prototype.apply,
	          s = Array.prototype.slice,
	          u = {},
	          c = 0;t.setTimeout = function () {
	        return new i(a.call(setTimeout, window, arguments), clearTimeout);
	      }, t.setInterval = function () {
	        return new i(a.call(setInterval, window, arguments), clearInterval);
	      }, t.clearTimeout = t.clearInterval = function (e) {
	        e.close();
	      }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
	        this._clearFn.call(window, this._id);
	      }, t.enroll = function (e, t) {
	        clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
	      }, t.unenroll = function (e) {
	        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
	      }, t._unrefActive = t.active = function (e) {
	        clearTimeout(e._idleTimeoutId);var t = e._idleTimeout;t >= 0 && (e._idleTimeoutId = setTimeout(function () {
	          e._onTimeout && e._onTimeout();
	        }, t));
	      }, t.setImmediate = "function" == typeof e ? e : function (e) {
	        var n = c++,
	            r = arguments.length < 2 ? !1 : s.call(arguments, 1);return u[n] = !0, o(function () {
	          u[n] && (r ? e.apply(null, r) : e.call(null), t.clearImmediate(n));
	        }), n;
	      }, t.clearImmediate = "function" == typeof r ? r : function (e) {
	        delete u[e];
	      };
	    }).call(t, n(2).setImmediate, n(2).clearImmediate);
	  }, function (e, t) {
	    function n() {
	      c = !1, a.length ? u = a.concat(u) : l = -1, u.length && r();
	    }function r() {
	      if (!c) {
	        var e = setTimeout(n);c = !0;for (var t = u.length; t;) {
	          for (a = u, u = []; ++l < t;) {
	            a && a[l].run();
	          }l = -1, t = u.length;
	        }a = null, c = !1, clearTimeout(e);
	      }
	    }function i(e, t) {
	      this.fun = e, this.array = t;
	    }function o() {}var a,
	        s = e.exports = {},
	        u = [],
	        c = !1,
	        l = -1;s.nextTick = function (e) {
	      var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
	        t[n - 1] = arguments[n];
	      }u.push(new i(e, t)), 1 !== u.length || c || setTimeout(r, 0);
	    }, i.prototype.run = function () {
	      this.fun.apply(null, this.array);
	    }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = o, s.addListener = o, s.once = o, s.off = o, s.removeListener = o, s.removeAllListeners = o, s.emit = o, s.binding = function (e) {
	      throw new Error("process.binding is not supported");
	    }, s.cwd = function () {
	      return "/";
	    }, s.chdir = function (e) {
	      throw new Error("process.chdir is not supported");
	    }, s.umask = function () {
	      return 0;
	    };
	  }, function (e, t) {
	    function n() {
	      var e = ~navigator.userAgent.indexOf("Android") && ~navigator.vendor.indexOf("Google") && !~navigator.userAgent.indexOf("Chrome");return e && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534 || /MQQBrowser/g.test(navigator.userAgent);
	    }var r = function () {
	      try {
	        return new Blob(), !0;
	      } catch (e) {
	        return !1;
	      }
	    }() ? window.Blob : function (e, t) {
	      var n = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder)();return e.forEach(function (e) {
	        n.append(e);
	      }), n.getBlob(t ? t.type : void 0);
	    },
	        i = function () {
	      var e = 0;return function () {
	        var t = this,
	            n = [],
	            i = Array(21).join("-") + (+new Date() * (1e16 * Math.random())).toString(36),
	            o = XMLHttpRequest.prototype.send;this.getParts = function () {
	          return n.toString();
	        }, this.append = function (e, t, r) {
	          n.push("--" + i + '\r\nContent-Disposition: form-data; name="' + e + '"'), t instanceof Blob ? (n.push('; filename="' + (r || "blob") + '"\r\nContent-Type: ' + t.type + "\r\n\r\n"), n.push(t)) : n.push("\r\n\r\n" + t), n.push("\r\n");
	        }, e++, XMLHttpRequest.prototype.send = function (a) {
	          var s,
	              u,
	              c = this;a === t ? (n.push("--" + i + "--\r\n"), u = new r(n), s = new FileReader(), s.onload = function () {
	            o.call(c, s.result);
	          }, s.onerror = function (e) {
	            throw e;
	          }, s.readAsArrayBuffer(u), this.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + i), e--, 0 == e && (XMLHttpRequest.prototype.send = o)) : o.call(this, a);
	        };
	      };
	    }();e.exports = { Blob: r, FormData: n() ? i : FormData };
	  }, function (e, t, n) {
	    var r, i;(function () {
	      function n(e) {
	        return !!e.exifdata;
	      }function o(e, t) {
	        t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || "", e = e.replace(/^data\:([^\;]+)\;base64,/gim, "");for (var n = atob(e), r = n.length, i = new ArrayBuffer(r), o = new Uint8Array(i), a = 0; r > a; a++) {
	          o[a] = n.charCodeAt(a);
	        }return i;
	      }function a(e, t) {
	        var n = new XMLHttpRequest();n.open("GET", e, !0), n.responseType = "blob", n.onload = function (e) {
	          (200 == this.status || 0 === this.status) && t(this.response);
	        }, n.send();
	      }function s(e, t) {
	        function n(n) {
	          var r = u(n),
	              i = c(n);e.exifdata = r || {}, e.iptcdata = i || {}, t && t.call(e);
	        }if (e.src) {
	          if (/^data\:/i.test(e.src)) {
	            var r = o(e.src);n(r);
	          } else if (/^blob\:/i.test(e.src)) {
	            var i = new FileReader();i.onload = function (e) {
	              n(e.target.result);
	            }, a(e.src, function (e) {
	              i.readAsArrayBuffer(e);
	            });
	          } else {
	            var s = new XMLHttpRequest();s.onload = function () {
	              200 == this.status || 0 === this.status ? n(s.response) : t(new Error("Could not load image")), s = null;
	            }, s.open("GET", e.src, !0), s.responseType = "arraybuffer", s.send(null);
	          }
	        } else if (window.FileReader && (e instanceof window.Blob || e instanceof window.File)) {
	          var i = new FileReader();i.onload = function (e) {
	            p && console.log("Got file of length " + e.target.result.byteLength), n(e.target.result);
	          }, i.readAsArrayBuffer(e);
	        }
	      }function u(e) {
	        var t = new DataView(e);if (p && console.log("Got file of length " + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1)) return p && console.log("Not a valid JPEG"), !1;for (var n, r = 2, i = e.byteLength; i > r;) {
	          if (255 != t.getUint8(r)) return p && console.log("Not a valid marker at offset " + r + ", found: " + t.getUint8(r)), !1;if (n = t.getUint8(r + 1), p && console.log(n), 225 == n) return p && console.log("Found 0xFFE1 marker"), g(t, r + 4, t.getUint16(r + 2) - 2);r += 2 + t.getUint16(r + 2);
	        }
	      }function c(e) {
	        var t = new DataView(e);if (p && console.log("Got file of length " + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1)) return p && console.log("Not a valid JPEG"), !1;for (var n = 2, r = e.byteLength, i = function i(e, t) {
	          return 56 === e.getUint8(t) && 66 === e.getUint8(t + 1) && 73 === e.getUint8(t + 2) && 77 === e.getUint8(t + 3) && 4 === e.getUint8(t + 4) && 4 === e.getUint8(t + 5);
	        }; r > n;) {
	          if (i(t, n)) {
	            var o = t.getUint8(n + 7);o % 2 !== 0 && (o += 1), 0 === o && (o = 4);var a = n + 8 + o,
	                s = t.getUint16(n + 6 + o);return l(e, a, s);
	          }n++;
	        }
	      }function l(e, t, n) {
	        for (var r, i, o, a, s, u = new DataView(e), c = {}, l = t; t + n > l;) {
	          28 === u.getUint8(l) && 2 === u.getUint8(l + 1) && (a = u.getUint8(l + 2), a in S && (o = u.getInt16(l + 3), s = o + 5, i = S[a], r = h(u, l + 5, o), c.hasOwnProperty(i) ? c[i] instanceof Array ? c[i].push(r) : c[i] = [c[i], r] : c[i] = r)), l++;
	        }return c;
	      }function f(e, t, n, r, i) {
	        var o,
	            a,
	            s,
	            u = e.getUint16(n, !i),
	            c = {};for (s = 0; u > s; s++) {
	          o = n + 12 * s + 2, a = r[e.getUint16(o, !i)], !a && p && console.log("Unknown tag: " + e.getUint16(o, !i)), c[a] = d(e, o, t, n, i);
	        }return c;
	      }function d(e, t, n, r, i) {
	        var o,
	            a,
	            s,
	            u,
	            c,
	            l,
	            f = e.getUint16(t + 2, !i),
	            d = e.getUint32(t + 4, !i),
	            g = e.getUint32(t + 8, !i) + n;switch (f) {case 1:case 7:
	            if (1 == d) return e.getUint8(t + 8, !i);for (o = d > 4 ? g : t + 8, a = [], u = 0; d > u; u++) {
	              a[u] = e.getUint8(o + u);
	            }return a;case 2:
	            return o = d > 4 ? g : t + 8, h(e, o, d - 1);case 3:
	            if (1 == d) return e.getUint16(t + 8, !i);for (o = d > 2 ? g : t + 8, a = [], u = 0; d > u; u++) {
	              a[u] = e.getUint16(o + 2 * u, !i);
	            }return a;case 4:
	            if (1 == d) return e.getUint32(t + 8, !i);for (a = [], u = 0; d > u; u++) {
	              a[u] = e.getUint32(g + 4 * u, !i);
	            }return a;case 5:
	            if (1 == d) return c = e.getUint32(g, !i), l = e.getUint32(g + 4, !i), s = new Number(c / l), s.numerator = c, s.denominator = l, s;for (a = [], u = 0; d > u; u++) {
	              c = e.getUint32(g + 8 * u, !i), l = e.getUint32(g + 4 + 8 * u, !i), a[u] = new Number(c / l), a[u].numerator = c, a[u].denominator = l;
	            }return a;case 9:
	            if (1 == d) return e.getInt32(t + 8, !i);for (a = [], u = 0; d > u; u++) {
	              a[u] = e.getInt32(g + 4 * u, !i);
	            }return a;case 10:
	            if (1 == d) return e.getInt32(g, !i) / e.getInt32(g + 4, !i);for (a = [], u = 0; d > u; u++) {
	              a[u] = e.getInt32(g + 8 * u, !i) / e.getInt32(g + 4 + 8 * u, !i);
	            }return a;}
	      }function h(e, t, n) {
	        var r,
	            i = "";for (r = t; t + n > r; r++) {
	          i += String.fromCharCode(e.getUint8(r));
	        }return i;
	      }function g(e, t) {
	        if ("Exif" != h(e, t, 4)) return p && console.log("Not valid EXIF data! " + h(e, t, 4)), !1;var n,
	            r,
	            i,
	            o,
	            a,
	            s = t + 6;if (18761 == e.getUint16(s)) n = !1;else {
	          if (19789 != e.getUint16(s)) return p && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;n = !0;
	        }if (42 != e.getUint16(s + 2, !n)) return p && console.log("Not valid TIFF data! (no 0x002A)"), !1;var u = e.getUint32(s + 4, !n);if (8 > u) return p && console.log("Not valid TIFF data! (First offset less than 8)", e.getUint32(s + 4, !n)), !1;if (r = f(e, s, s + u, v, n), r.ExifIFDPointer) {
	          o = f(e, s, s + r.ExifIFDPointer, w, n);for (i in o) {
	            switch (i) {case "LightSource":case "Flash":case "MeteringMode":case "ExposureProgram":case "SensingMethod":case "SceneCaptureType":case "SceneType":case "CustomRendered":case "WhiteBalance":case "GainControl":case "Contrast":case "Saturation":case "Sharpness":case "SubjectDistanceRange":case "FileSource":
	                o[i] = b[i][o[i]];break;case "ExifVersion":case "FlashpixVersion":
	                o[i] = String.fromCharCode(o[i][0], o[i][1], o[i][2], o[i][3]);break;case "ComponentsConfiguration":
	                o[i] = b.Components[o[i][0]] + b.Components[o[i][1]] + b.Components[o[i][2]] + b.Components[o[i][3]];}r[i] = o[i];
	          }
	        }if (r.GPSInfoIFDPointer) {
	          a = f(e, s, s + r.GPSInfoIFDPointer, y, n);for (i in a) {
	            switch (i) {case "GPSVersionID":
	                a[i] = a[i][0] + "." + a[i][1] + "." + a[i][2] + "." + a[i][3];}r[i] = a[i];
	          }
	        }return r;
	      }var p = !1,
	          m = function m(e) {
	        return e instanceof m ? e : this instanceof m ? void (this.EXIFwrapped = e) : new m(e);
	      };"undefined" != typeof e && e.exports && (t = e.exports = m), t.EXIF = m;var w = m.Tags = { 36864: "ExifVersion", 40960: "FlashpixVersion", 40961: "ColorSpace", 40962: "PixelXDimension", 40963: "PixelYDimension", 37121: "ComponentsConfiguration", 37122: "CompressedBitsPerPixel", 37500: "MakerNote", 37510: "UserComment", 40964: "RelatedSoundFile", 36867: "DateTimeOriginal", 36868: "DateTimeDigitized", 37520: "SubsecTime", 37521: "SubsecTimeOriginal", 37522: "SubsecTimeDigitized", 33434: "ExposureTime", 33437: "FNumber", 34850: "ExposureProgram", 34852: "SpectralSensitivity", 34855: "ISOSpeedRatings", 34856: "OECF", 37377: "ShutterSpeedValue", 37378: "ApertureValue", 37379: "BrightnessValue", 37380: "ExposureBias", 37381: "MaxApertureValue", 37382: "SubjectDistance", 37383: "MeteringMode", 37384: "LightSource", 37385: "Flash", 37396: "SubjectArea", 37386: "FocalLength", 41483: "FlashEnergy", 41484: "SpatialFrequencyResponse", 41486: "FocalPlaneXResolution", 41487: "FocalPlaneYResolution", 41488: "FocalPlaneResolutionUnit", 41492: "SubjectLocation", 41493: "ExposureIndex", 41495: "SensingMethod", 41728: "FileSource", 41729: "SceneType", 41730: "CFAPattern", 41985: "CustomRendered", 41986: "ExposureMode", 41987: "WhiteBalance", 41988: "DigitalZoomRation", 41989: "FocalLengthIn35mmFilm", 41990: "SceneCaptureType", 41991: "GainControl", 41992: "Contrast", 41993: "Saturation", 41994: "Sharpness", 41995: "DeviceSettingDescription", 41996: "SubjectDistanceRange", 40965: "InteroperabilityIFDPointer", 42016: "ImageUniqueID" },
	          v = m.TiffTags = { 256: "ImageWidth", 257: "ImageHeight", 34665: "ExifIFDPointer", 34853: "GPSInfoIFDPointer", 40965: "InteroperabilityIFDPointer", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 274: "Orientation", 277: "SamplesPerPixel", 284: "PlanarConfiguration", 530: "YCbCrSubSampling", 531: "YCbCrPositioning", 282: "XResolution", 283: "YResolution", 296: "ResolutionUnit", 273: "StripOffsets", 278: "RowsPerStrip", 279: "StripByteCounts", 513: "JPEGInterchangeFormat", 514: "JPEGInterchangeFormatLength", 301: "TransferFunction", 318: "WhitePoint", 319: "PrimaryChromaticities", 529: "YCbCrCoefficients", 532: "ReferenceBlackWhite", 306: "DateTime", 270: "ImageDescription", 271: "Make", 272: "Model", 305: "Software", 315: "Artist", 33432: "Copyright" },
	          y = m.GPSTags = { 0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude", 5: "GPSAltitudeRef", 6: "GPSAltitude", 7: "GPSTimeStamp", 8: "GPSSatellites", 9: "GPSStatus", 10: "GPSMeasureMode", 11: "GPSDOP", 12: "GPSSpeedRef", 13: "GPSSpeed", 14: "GPSTrackRef", 15: "GPSTrack", 16: "GPSImgDirectionRef", 17: "GPSImgDirection", 18: "GPSMapDatum", 19: "GPSDestLatitudeRef", 20: "GPSDestLatitude", 21: "GPSDestLongitudeRef", 22: "GPSDestLongitude", 23: "GPSDestBearingRef", 24: "GPSDestBearing", 25: "GPSDestDistanceRef", 26: "GPSDestDistance", 27: "GPSProcessingMethod", 28: "GPSAreaInformation", 29: "GPSDateStamp", 30: "GPSDifferential" },
	          b = m.StringValues = { ExposureProgram: { 0: "Not defined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode" }, MeteringMode: { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }, LightSource: { 0: "Unknown", 1: "Daylight", 2: "Fluorescent", 3: "Tungsten (incandescent light)", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 - 5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }, Flash: { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }, SensingMethod: { 1: "Not defined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor" }, SceneCaptureType: { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene" }, SceneType: { 1: "Directly photographed" }, CustomRendered: { 0: "Normal process", 1: "Custom process" }, WhiteBalance: { 0: "Auto white balance", 1: "Manual white balance" }, GainControl: { 0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down" }, Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" }, Saturation: { 0: "Normal", 1: "Low saturation", 2: "High saturation" }, Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" }, SubjectDistanceRange: { 0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view" }, FileSource: { 3: "DSC" }, Components: { 0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" } },
	          S = { 120: "caption", 110: "credit", 25: "keywords", 55: "dateCreated", 80: "byline", 85: "bylineTitle", 122: "captionWriter", 105: "headline", 116: "copyright", 15: "category" };m.getData = function (e, t) {
	        return (e instanceof Image || e instanceof HTMLImageElement) && !e.complete ? !1 : (n(e) ? t && t.call(e) : s(e, t), !0);
	      }, m.getTag = function (e, t) {
	        return n(e) ? e.exifdata[t] : void 0;
	      }, m.getAllTags = function (e) {
	        if (!n(e)) return {};var t,
	            r = e.exifdata,
	            i = {};for (t in r) {
	          r.hasOwnProperty(t) && (i[t] = r[t]);
	        }return i;
	      }, m.pretty = function (e) {
	        if (!n(e)) return "";var t,
	            r = e.exifdata,
	            i = "";for (t in r) {
	          r.hasOwnProperty(t) && (i += "object" == (0, _typeof3.default)(r[t]) ? r[t] instanceof Number ? t + " : " + r[t] + " [" + r[t].numerator + "/" + r[t].denominator + "]\r\n" : t + " : [" + r[t].length + " values]\r\n" : t + " : " + r[t] + "\r\n");
	        }return i;
	      }, m.readFromBinaryFile = function (e) {
	        return u(e);
	      }, r = [], i = function () {
	        return m;
	      }.apply(t, r), !(void 0 !== i && (e.exports = i));
	    }).call(this);
	  }, function (e, t, n) {
	    var r, i;!function () {
	      function n(e) {
	        var t = e.naturalWidth,
	            n = e.naturalHeight;if (t * n > 1048576) {
	          var r = document.createElement("canvas");r.width = r.height = 1;var i = r.getContext("2d");return i.drawImage(e, -t + 1, 0), 0 === i.getImageData(0, 0, 1, 1).data[3];
	        }return !1;
	      }function o(e, t, n) {
	        var r = document.createElement("canvas");r.width = 1, r.height = n;var i = r.getContext("2d");i.drawImage(e, 0, 0);for (var o = i.getImageData(0, 0, 1, n).data, a = 0, s = n, u = n; u > a;) {
	          var c = o[4 * (u - 1) + 3];0 === c ? s = u : a = u, u = s + a >> 1;
	        }var l = u / n;return 0 === l ? 1 : l;
	      }function a(e, t, n) {
	        var r = document.createElement("canvas");return s(e, r, t, n), r.toDataURL("image/jpeg", t.quality || .8);
	      }function s(e, t, r, i) {
	        var a = e.naturalWidth,
	            s = e.naturalHeight,
	            c = r.width,
	            l = r.height,
	            f = t.getContext("2d");f.save(), u(t, f, c, l, r.orientation);var d = n(e);d && (a /= 2, s /= 2);var h = 1024,
	            g = document.createElement("canvas");g.width = g.height = h;for (var p = g.getContext("2d"), m = i ? o(e, a, s) : 1, w = Math.ceil(h * c / a), v = Math.ceil(h * l / s / m), y = 0, b = 0; s > y;) {
	          for (var S = 0, I = 0; a > S;) {
	            p.clearRect(0, 0, h, h), p.drawImage(e, -S, -y), f.drawImage(g, 0, 0, h, h, I, b, w, v), S += h, I += w;
	          }y += h, b += v;
	        }f.restore(), g = p = null;
	      }function u(e, t, n, r, i) {
	        switch (i) {case 5:case 6:case 7:case 8:
	            e.width = r, e.height = n;break;default:
	            e.width = n, e.height = r;}switch (i) {case 2:
	            t.translate(n, 0), t.scale(-1, 1);break;case 3:
	            t.translate(n, r), t.rotate(Math.PI);break;case 4:
	            t.translate(0, r), t.scale(1, -1);break;case 5:
	            t.rotate(.5 * Math.PI), t.scale(1, -1);break;case 6:
	            t.rotate(.5 * Math.PI), t.translate(0, -r);break;case 7:
	            t.rotate(.5 * Math.PI), t.translate(n, -r), t.scale(-1, 1);break;case 8:
	            t.rotate(-.5 * Math.PI), t.translate(-n, 0);}
	      }function c(e) {
	        if (window.Blob && e instanceof Blob) {
	          var t = new Image(),
	              n = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;if (!n) throw Error("No createObjectURL function found to create blob url");t.src = n.createObjectURL(e), this.blob = e, e = t;
	        }if (!e.naturalWidth && !e.naturalHeight) {
	          var r = this;e.onload = function () {
	            var e = r.imageLoadListeners;if (e) {
	              r.imageLoadListeners = null;for (var t = 0, n = e.length; n > t; t++) {
	                e[t]();
	              }
	            }
	          }, this.imageLoadListeners = [];
	        }this.srcImage = e;
	      }c.prototype.render = function (e, t, n) {
	        if (this.imageLoadListeners) {
	          var r = this;return void this.imageLoadListeners.push(function () {
	            r.render(e, t, n);
	          });
	        }t = t || {};var i = this.srcImage,
	            o = i.src,
	            u = o.length,
	            c = i.naturalWidth,
	            l = i.naturalHeight,
	            f = t.width,
	            d = t.height,
	            h = t.maxWidth,
	            g = t.maxHeight,
	            p = this.blob && "image/jpeg" === this.blob.type || 0 === o.indexOf("data:image/jpeg") || o.indexOf(".jpg") === u - 4 || o.indexOf(".jpeg") === u - 5;f && !d ? d = l * f / c << 0 : d && !f ? f = c * d / l << 0 : (f = c, d = l), h && f > h && (f = h, d = l * f / c << 0), g && d > g && (d = g, f = c * d / l << 0);var m = { width: f, height: d };for (var w in t) {
	          m[w] = t[w];
	        }var v = e.tagName.toLowerCase();"img" === v ? e.src = a(this.srcImage, m, p) : "canvas" === v && s(this.srcImage, e, m, p), "function" == typeof this.onrender && this.onrender(e), n && n();
	      }, r = [], i = function () {
	        return c;
	      }.apply(t, r), !(void 0 !== i && (e.exports = i));
	    }();
	  }, function (e, t) {
	    function n(e) {
	      function t(e) {
	        for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; 64 > n; n++) {
	          var r = F((t[n] * e + 50) / 100);1 > r ? r = 1 : r > 255 && (r = 255), x[N[n]] = r;
	        }for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o = 0; 64 > o; o++) {
	          var a = F((i[o] * e + 50) / 100);1 > a ? a = 1 : a > 255 && (a = 255), D[N[o]] = a;
	        }for (var s = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], u = 0, c = 0; 8 > c; c++) {
	          for (var l = 0; 8 > l; l++) {
	            U[u] = 1 / (x[N[u]] * s[c] * s[l] * 8), C[u] = 1 / (D[N[u]] * s[c] * s[l] * 8), u++;
	          }
	        }
	      }function n(e, t) {
	        for (var n = 0, r = 0, i = new Array(), o = 1; 16 >= o; o++) {
	          for (var a = 1; a <= e[o]; a++) {
	            i[t[r]] = [], i[t[r]][0] = n, i[t[r]][1] = o, r++, n++;
	          }n *= 2;
	        }return i;
	      }function r() {
	        y = n(W, H), b = n(V, X), S = n(z, q), I = n(Q, Y);
	      }function i() {
	        for (var e = 1, t = 2, n = 1; 15 >= n; n++) {
	          for (var r = e; t > r; r++) {
	            A[32767 + r] = n, T[32767 + r] = [], T[32767 + r][1] = n, T[32767 + r][0] = r;
	          }for (var i = -(t - 1); -e >= i; i++) {
	            A[32767 + i] = n, T[32767 + i] = [], T[32767 + i][1] = n, T[32767 + i][0] = t - 1 + i;
	          }e <<= 1, t <<= 1;
	        }
	      }function o() {
	        for (var e = 0; 256 > e; e++) {
	          k[e] = 19595 * e, k[e + 256 >> 0] = 38470 * e, k[e + 512 >> 0] = 7471 * e + 32768, k[e + 768 >> 0] = -11059 * e, k[e + 1024 >> 0] = -21709 * e, k[e + 1280 >> 0] = 32768 * e + 8421375, k[e + 1536 >> 0] = -27439 * e, k[e + 1792 >> 0] = -5329 * e;
	        }
	      }function a(e) {
	        for (var t = e[0], n = e[1] - 1; n >= 0;) {
	          t & 1 << n && (G |= 1 << O), n--, O--, 0 > O && (255 == G ? (s(255), s(0)) : s(G), O = 7, G = 0);
	        }
	      }function s(e) {
	        M.push(j[e]);
	      }function u(e) {
	        s(e >> 8 & 255), s(255 & e);
	      }function c(e, t) {
	        var n,
	            r,
	            i,
	            o,
	            a,
	            s,
	            u,
	            c,
	            l,
	            f = 0;var d = 8,
	            h = 64;for (l = 0; d > l; ++l) {
	          n = e[f], r = e[f + 1], i = e[f + 2], o = e[f + 3], a = e[f + 4], s = e[f + 5], u = e[f + 6], c = e[f + 7];var g = n + c,
	              p = n - c,
	              m = r + u,
	              w = r - u,
	              v = i + s,
	              y = i - s,
	              b = o + a,
	              S = o - a,
	              I = g + b,
	              P = g - b,
	              F = m + v,
	              x = m - v;e[f] = I + F, e[f + 4] = I - F;var D = .707106781 * (x + P);e[f + 2] = P + D, e[f + 6] = P - D, I = S + y, F = y + w, x = w + p;var U = .382683433 * (I - x),
	              C = .5411961 * I + U,
	              T = 1.306562965 * x + U,
	              A = .707106781 * F,
	              R = p + A,
	              M = p - A;e[f + 5] = M + C, e[f + 3] = M - C, e[f + 1] = R + T, e[f + 7] = R - T, f += 8;
	        }for (f = 0, l = 0; d > l; ++l) {
	          n = e[f], r = e[f + 8], i = e[f + 16], o = e[f + 24], a = e[f + 32], s = e[f + 40], u = e[f + 48], c = e[f + 56];var G = n + c,
	              O = n - c,
	              _ = r + u,
	              B = r - u,
	              E = i + s,
	              j = i - s,
	              k = o + a,
	              N = o - a,
	              W = G + k,
	              H = G - k,
	              z = _ + E,
	              q = _ - E;e[f] = W + z, e[f + 32] = W - z;var V = .707106781 * (q + H);e[f + 16] = H + V, e[f + 48] = H - V, W = N + j, z = j + B, q = B + O;var X = .382683433 * (W - q),
	              Q = .5411961 * W + X,
	              Y = 1.306562965 * q + X,
	              K = .707106781 * z,
	              J = O + K,
	              Z = O - K;e[f + 40] = Z + Q, e[f + 24] = Z - Q, e[f + 8] = J + Y, e[f + 56] = J - Y, f++;
	        }var $;for (l = 0; h > l; ++l) {
	          $ = e[l] * t[l], L[l] = $ > 0 ? $ + .5 | 0 : $ - .5 | 0;
	        }return L;
	      }function l() {
	        u(65504), u(16), s(74), s(70), s(73), s(70), s(0), s(1), s(1), s(0), u(1), u(1), s(0), s(0);
	      }function f(e, t) {
	        u(65472), u(17), s(8), u(t), u(e), s(3), s(1), s(17), s(0), s(2), s(17), s(1), s(3), s(17), s(1);
	      }function d() {
	        u(65499), u(132), s(0);for (var e = 0; 64 > e; e++) {
	          s(x[e]);
	        }s(1);for (var t = 0; 64 > t; t++) {
	          s(D[t]);
	        }
	      }function h() {
	        u(65476), u(418), s(0);for (var e = 0; 16 > e; e++) {
	          s(W[e + 1]);
	        }for (var t = 0; 11 >= t; t++) {
	          s(H[t]);
	        }s(16);for (var n = 0; 16 > n; n++) {
	          s(z[n + 1]);
	        }for (var r = 0; 161 >= r; r++) {
	          s(q[r]);
	        }s(1);for (var i = 0; 16 > i; i++) {
	          s(V[i + 1]);
	        }for (var o = 0; 11 >= o; o++) {
	          s(X[o]);
	        }s(17);for (var a = 0; 16 > a; a++) {
	          s(Q[a + 1]);
	        }for (var c = 0; 161 >= c; c++) {
	          s(Y[c]);
	        }
	      }function g() {
	        u(65498), u(12), s(3), s(1), s(0), s(2), s(17), s(3), s(17), s(0), s(63), s(0);
	      }function p(e, t, n, r, i) {
	        var o,
	            s = i[0],
	            u = i[240];var l = 16,
	            f = 63,
	            d = 64;for (var h = c(e, t), g = 0; d > g; ++g) {
	          R[N[g]] = h[g];
	        }var p = R[0] - n;n = R[0], 0 == p ? a(r[0]) : (o = 32767 + p, a(r[A[o]]), a(T[o]));for (var m = 63; m > 0 && 0 == R[m]; m--) {}if (0 == m) return a(s), n;for (var w, v = 1; m >= v;) {
	          for (var y = v; 0 == R[v] && m >= v; ++v) {}var b = v - y;if (b >= l) {
	            w = b >> 4;for (var S = 1; w >= S; ++S) {
	              a(u);
	            }b = 15 & b;
	          }o = 32767 + R[v], a(i[(b << 4) + A[o]]), a(T[o]), v++;
	        }return m != f && a(s), n;
	      }function m() {
	        for (var e = String.fromCharCode, t = 0; 256 > t; t++) {
	          j[t] = e(t);
	        }
	      }function w(e) {
	        if (0 >= e && (e = 1), e > 100 && (e = 100), P != e) {
	          var n = 0;n = 50 > e ? Math.floor(5e3 / e) : Math.floor(200 - 2 * e), t(n), P = e;
	        }
	      }function v() {
	        var t = new Date().getTime();e || (e = 50), m(), r(), i(), o(), w(e);new Date().getTime() - t;
	      }var y,
	          b,
	          S,
	          I,
	          P,
	          F = (Math.round, Math.floor),
	          x = new Array(64),
	          D = new Array(64),
	          U = new Array(64),
	          C = new Array(64),
	          T = new Array(65535),
	          A = new Array(65535),
	          L = new Array(64),
	          R = new Array(64),
	          M = [],
	          G = 0,
	          O = 7,
	          _ = new Array(64),
	          B = new Array(64),
	          E = new Array(64),
	          j = new Array(256),
	          k = new Array(2048),
	          N = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
	          W = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	          H = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	          z = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
	          q = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
	          V = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	          X = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	          Q = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
	          Y = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];this.encode = function (e, t, n) {
	        var r = new Date().getTime();t && w(t), M = new Array(), G = 0, O = 7, u(65496), l(), d(), f(e.width, e.height), h(), g();var i = 0,
	            o = 0,
	            s = 0;G = 0, O = 7, this.encode.displayName = "_encode_";for (var c, m, v, P, F, x, D, T, A, L = e.data, R = e.width, j = e.height, N = 4 * R, W = 0; j > W;) {
	          for (c = 0; N > c;) {
	            for (F = N * W + c, x = F, D = -1, T = 0, A = 0; 64 > A; A++) {
	              T = A >> 3, D = 4 * (7 & A), x = F + T * N + D, W + T >= j && (x -= N * (W + 1 + T - j)), c + D >= N && (x -= c + D - N + 4), m = L[x++], v = L[x++], P = L[x++], _[A] = (k[m] + k[v + 256 >> 0] + k[P + 512 >> 0] >> 16) - 128, B[A] = (k[m + 768 >> 0] + k[v + 1024 >> 0] + k[P + 1280 >> 0] >> 16) - 128, E[A] = (k[m + 1280 >> 0] + k[v + 1536 >> 0] + k[P + 1792 >> 0] >> 16) - 128;
	            }i = p(_, U, i, y, S), o = p(B, C, o, b, I), s = p(E, C, s, b, I), c += 32;
	          }W += 8;
	        }if (O >= 0) {
	          var H = [];H[1] = O + 1, H[0] = (1 << O + 1) - 1, a(H);
	        }if (u(65497), n) {
	          for (var z = M.length, q = new Uint8Array(z), V = 0; z > V; V++) {
	            q[V] = M[V].charCodeAt();
	          }M = [];new Date().getTime() - r;return q;
	        }var X = "data:image/jpeg;base64," + btoa(M.join(""));M = [];new Date().getTime() - r;return X;
	      }, v();
	    }e.exports = n;
	  }, function (e, t, n) {
	    function r(e, t) {
	      var n = this;if (!e) throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");t = t || {}, n.defaults = { width: null, height: null, fieldName: "file", quality: .7 }, n.file = e;for (var r in t) {
	        t.hasOwnProperty(r) && (n.defaults[r] = t[r]);
	      }return this.init();
	    }function i(e) {
	      var t = null;return t = e ? [].filter.call(document.scripts, function (t) {
	        return -1 !== t.src.indexOf(e);
	      })[0] : document.scripts[document.scripts.length - 1], t ? t.src.substr(0, t.src.lastIndexOf("/")) : null;
	    }function o(e) {
	      var t;t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : unescape(e.split(",")[1]);for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), i = 0; i < t.length; i++) {
	        r[i] = t.charCodeAt(i);
	      }return new s.Blob([r.buffer], { type: n });
	    }n.p = i("lrz") + "/", window.URL = window.URL || window.webkitURL;var a = n(1),
	        s = n(4),
	        u = n(5),
	        c = function (e) {
	      var t = /OS (\d)_.* like Mac OS X/g.exec(e),
	          n = /Android (\d.*?);/g.exec(e) || /Android\/(\d.*?) /g.exec(e);return { oldIOS: t ? +t.pop() < 8 : !1, oldAndroid: n ? +n.pop().substr(0, 3) < 4.5 : !1, iOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e), android: /Android/g.test(e), mQQBrowser: /MQQBrowser/g.test(e) };
	    }(navigator.userAgent);r.prototype.init = function () {
	      var e = this,
	          t = e.file,
	          n = "string" == typeof t,
	          r = /^data:/.test(t),
	          i = new Image(),
	          u = document.createElement("canvas"),
	          c = n ? t : URL.createObjectURL(t);if (e.img = i, e.blob = c, e.canvas = u, n ? e.fileName = r ? "base64.jpg" : t.split("/").pop() : e.fileName = t.name, !document.createElement("canvas").getContext) throw new Error("浏览器不支持canvas");return new a(function (n, a) {
	        i.onerror = function () {
	          throw new Error("加载图片文件失败");
	        }, i.onload = function () {
	          e._getBase64().then(function (e) {
	            return e.length < 10 && a("生成base64失败"), e;
	          }).then(function (r) {
	            var i = null;"object" == (0, _typeof3.default)(e.file) && r.length > e.file.size ? (i = new FormData(), t = e.file) : (i = new s.FormData(), t = o(r)), i.append(e.defaults.fieldName, t, e.fileName.replace(/\..+/g, ".jpg")), n({ formData: i, fileLen: +t.size, base64: r, base64Len: r.length, origin: e.file, file: t });for (var a in e) {
	              e.hasOwnProperty(a) && (e[a] = null);
	            }URL.revokeObjectURL(e.blob);
	          });
	        }, !r && (i.crossOrigin = "*"), i.src = c;
	      });
	    }, r.prototype._getBase64 = function () {
	      var e = this,
	          t = e.img,
	          n = e.file,
	          r = e.canvas;return new a(function (i) {
	        try {
	          u.getData("object" == (typeof n === "undefined" ? "undefined" : (0, _typeof3.default)(n)) ? n : t, function () {
	            e.orientation = u.getTag(this, "Orientation"), e.resize = e._getResize(), e.ctx = r.getContext("2d"), r.width = e.resize.width, r.height = e.resize.height, e.ctx.fillStyle = "#fff", e.ctx.fillRect(0, 0, r.width, r.height), c.oldIOS ? e._createBase64ForOldIOS().then(i) : e._createBase64().then(i);
	          });
	        } catch (o) {
	          throw new Error(o);
	        }
	      });
	    }, r.prototype._createBase64ForOldIOS = function () {
	      var e = this,
	          t = e.img,
	          r = e.canvas,
	          i = e.defaults,
	          o = e.orientation;return new a(function (e) {
	        !function () {
	          var a = [n(6)];(function (n) {
	            var a = new n(t);"5678".indexOf(o) > -1 ? a.render(r, { width: r.height, height: r.width, orientation: o }) : a.render(r, { width: r.width, height: r.height, orientation: o }), e(r.toDataURL("image/jpeg", i.quality));
	          }).apply(null, a);
	        }();
	      });
	    }, r.prototype._createBase64 = function () {
	      var e = this,
	          t = e.resize,
	          r = e.img,
	          i = e.canvas,
	          o = e.ctx,
	          s = e.defaults,
	          u = e.orientation;switch (u) {case 3:
	          o.rotate(180 * Math.PI / 180), o.drawImage(r, -t.width, -t.height, t.width, t.height);break;case 6:
	          o.rotate(90 * Math.PI / 180), o.drawImage(r, 0, -t.width, t.height, t.width);break;case 8:
	          o.rotate(270 * Math.PI / 180), o.drawImage(r, -t.height, 0, t.height, t.width);break;case 2:
	          o.translate(t.width, 0), o.scale(-1, 1), o.drawImage(r, 0, 0, t.width, t.height);break;case 4:
	          o.translate(t.width, 0), o.scale(-1, 1), o.rotate(180 * Math.PI / 180), o.drawImage(r, -t.width, -t.height, t.width, t.height);break;case 5:
	          o.translate(t.width, 0), o.scale(-1, 1), o.rotate(90 * Math.PI / 180), o.drawImage(r, 0, -t.width, t.height, t.width);break;case 7:
	          o.translate(t.width, 0), o.scale(-1, 1), o.rotate(270 * Math.PI / 180), o.drawImage(r, -t.height, 0, t.height, t.width);break;default:
	          o.drawImage(r, 0, 0, t.width, t.height);}return new a(function (e) {
	        c.oldAndroid || c.mQQBrowser || !navigator.userAgent ? !function () {
	          var t = [n(7)];(function (t) {
	            var n = new t(),
	                r = o.getImageData(0, 0, i.width, i.height);e(n.encode(r, 100 * s.quality));
	          }).apply(null, t);
	        }() : e(i.toDataURL("image/jpeg", s.quality));
	      });
	    }, r.prototype._getResize = function () {
	      var e = this,
	          t = e.img,
	          n = e.defaults,
	          r = n.width,
	          i = n.height,
	          o = e.orientation,
	          a = { width: t.width, height: t.height };if ("5678".indexOf(o) > -1 && (a.width = t.height, a.height = t.width), a.width < r || a.height < i) return a;var s = a.width / a.height;for (r && i ? s >= r / i ? a.width > r && (a.width = r, a.height = Math.ceil(r / s)) : a.height > i && (a.height = i, a.width = Math.ceil(i * s)) : r ? r < a.width && (a.width = r, a.height = Math.ceil(r / s)) : i && i < a.height && (a.width = Math.ceil(i * s), a.height = i); a.width >= 3264 || a.height >= 2448;) {
	        a.width *= .8, a.height *= .8;
	      }return a;
	    }, window.lrz = function (e, t) {
	      return new r(e, t);
	    }, window.lrz.version = "4.9.36", e.exports = window.lrz;
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./../../../node_modules/webpack/buildin/module.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(module)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(73);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(93);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	__webpack_require__(88);
	module.exports = __webpack_require__(92).f('iterator');

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(76)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(77)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(78)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(79)
	  , hide           = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(80)
	  , $iterCreate    = __webpack_require__(81)
	  , setToStringTag = __webpack_require__(85)
	  , getPrototypeOf = __webpack_require__(87)
	  , ITERATOR       = __webpack_require__(86)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(82)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(85)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(26)(IteratorPrototype, __webpack_require__(86)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(28)
	  , dPs         = __webpack_require__(83)
	  , enumBugKeys = __webpack_require__(20)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(33)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(84).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(27)
	  , anObject = __webpack_require__(28)
	  , getKeys  = __webpack_require__(6);

	module.exports = __webpack_require__(31) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(27).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(86)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(17)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(18).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89);
	var global        = __webpack_require__(18)
	  , hide          = __webpack_require__(26)
	  , Iterators     = __webpack_require__(80)
	  , TO_STRING_TAG = __webpack_require__(86)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(90)
	  , step             = __webpack_require__(91)
	  , Iterators        = __webpack_require__(80)
	  , toIObject        = __webpack_require__(9);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(77)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(86);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	module.exports = __webpack_require__(23).Symbol;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(18)
	  , has            = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(31)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(79)
	  , META           = __webpack_require__(96).KEY
	  , $fails         = __webpack_require__(32)
	  , shared         = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(85)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(86)
	  , wksExt         = __webpack_require__(92)
	  , wksDefine      = __webpack_require__(97)
	  , keyOf          = __webpack_require__(98)
	  , enumKeys       = __webpack_require__(99)
	  , isArray        = __webpack_require__(102)
	  , anObject       = __webpack_require__(28)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(34)
	  , createDesc     = __webpack_require__(35)
	  , _create        = __webpack_require__(82)
	  , gOPNExt        = __webpack_require__(103)
	  , $GOPD          = __webpack_require__(105)
	  , $DP            = __webpack_require__(27)
	  , $keys          = __webpack_require__(6)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(104).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(101).f  = $propertyIsEnumerable;
	  __webpack_require__(100).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(78)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(26)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(29)
	  , has      = __webpack_require__(8)
	  , setDesc  = __webpack_require__(27).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(32)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(18)
	  , core           = __webpack_require__(23)
	  , LIBRARY        = __webpack_require__(78)
	  , wksExt         = __webpack_require__(92)
	  , defineProperty = __webpack_require__(27).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(6)
	  , toIObject = __webpack_require__(9);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(6)
	  , gOPS    = __webpack_require__(100)
	  , pIE     = __webpack_require__(101);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 101 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(11);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(9)
	  , gOPN      = __webpack_require__(104).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(7)
	  , hiddenKeys = __webpack_require__(20).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(101)
	  , createDesc     = __webpack_require__(35)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(34)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(31) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)('asyncIterator');

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)('observable');

/***/ },
/* 109 */,
/* 110 */
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
/* 111 */
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
/* 112 */
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
/* 113 */
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
/* 114 */
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
/* 115 */
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
/* 116 */
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