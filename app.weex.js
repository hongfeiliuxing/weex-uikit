// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 258);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(24)('wks')
  , uid        = __webpack_require__(15)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32)
  , defined = __webpack_require__(17);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(14);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(31)
  , toPrimitive    = __webpack_require__(26)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(36)
  , enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(62)
  , hide      = __webpack_require__(6)
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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(3)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys')
  , uid    = __webpack_require__(15);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(0)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(20)
  , wksExt         = __webpack_require__(28)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(41);

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* default */]);
var store = new __WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* default */].Store({
  state: {
    title: 'weex-uikit',
    mask: {
      show: false,
      justify: 'center'
    },
    select: {
      show: false
    },
    loading: {
      show: false
    }
  },
  mutations: {
    SET_TITLE: function SET_TITLE(state, title) {
      state.title = title;
    },
    TOGGLE_MASK_VISIABLE: function TOGGLE_MASK_VISIABLE(state, visiable) {
      state.mask.show = visiable;
      state.mask.justify = 'center';
    },
    TOGGLE_SELECT_VISIABLE: function TOGGLE_SELECT_VISIABLE(state, visiable) {
      state.select.show = visiable;
      state.mask.show = visiable;
      state.mask.justify = 'flex-end';
    },
    TOGGLE_LOADING_VISIABLE: function TOGGLE_LOADING_VISIABLE(state, visiable) {
      state.loading.show = visiable;
      state.mask.show = visiable;
      state.mask.justify = 'center';
    }
  },
  actions: {
    setTitle: function setTitle(_ref, title) {
      var commit = _ref.commit;

      commit('SET_TITLE', title);
    },
    toggleMask: function toggleMask(_ref2, visiable) {
      var commit = _ref2.commit;

      commit('TOGGLE_MASK_VISIABLE', visiable);
    },
    toggleSelect: function toggleSelect(_ref3, visiable) {
      var commit = _ref3.commit;

      commit('TOGGLE_SELECT_VISIABLE', visiable);
    },
    toggleLoading: function toggleLoading(_ref4, visiable) {
      var commit = _ref4.commit;

      commit('TOGGLE_LOADING_VISIABLE', visiable);
    }
  },
  getters: {
    title: function title(state) {
      return state.title;
    },
    maskVisiable: function maskVisiable(state) {
      return state.mask.show;
    },
    selectVisiable: function selectVisiable(state) {
      return state.select.show;
    },
    loadingVisiable: function loadingVisiable(state) {
      return state.loading.show;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(9)(function(){
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(20)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(37)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(3)
  , Iterators      = __webpack_require__(12)
  , $iterCreate    = __webpack_require__(66)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(74)
  , ITERATOR       = __webpack_require__(1)('iterator')
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

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(8)
  , dPs         = __webpack_require__(71)
  , enumBugKeys = __webpack_require__(18)
  , IE_PROTO    = __webpack_require__(23)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(64).appendChild(iframe);
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


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(36)
  , hiddenKeys = __webpack_require__(18).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(3)
  , toIObject    = __webpack_require__(4)
  , arrayIndexOf = __webpack_require__(60)(false)
  , IE_PROTO     = __webpack_require__(23)('IE_PROTO');

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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(75)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function(iterated){
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

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(6)
  , Iterators     = __webpack_require__(12)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapActions; });
/**
 * vuex v2.3.0
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: {} };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        );
        return
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type));
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type));
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler(local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error(("[vuex] duplicate getter key: " + type));
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.3.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

/* harmony default export */ __webpack_exports__["b"] = (index_esm);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(43);








__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */]);

Vue.mixin(__WEBPACK_IMPORTED_MODULE_4__mixins__["a" /* default */]);


new Vue({
  el: '#root',
  router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_0__App_vue___default.a);
  }
});
__WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push('/');

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Iconfont__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Iconfont___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Iconfont__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Checker__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Checker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Checker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packages_common_Mask__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packages_common_Mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_packages_common_Mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_packages_common_SelectPopup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_packages_common_SelectPopup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_packages_common_SelectPopup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_packages_common_Loading__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_packages_common_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_packages_common_Loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_packages_text_H1__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_packages_text_H1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_packages_text_H1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_packages_text_H2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_packages_text_H2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_packages_text_H2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_packages_text_H3__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_packages_text_H3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_packages_text_H3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_packages_text_H4__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_packages_text_H4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_packages_text_H4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_packages_text_H5__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_packages_text_H5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_packages_text_H5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_packages_text_H6__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_packages_text_H6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_packages_text_H6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_packages_text_H7__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_packages_text_H7___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_packages_text_H7__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_packages_button_Button__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_packages_button_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_packages_button_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_packages_form_Radio__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_packages_form_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_packages_form_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_packages_form_Checkbox__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_packages_form_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_packages_form_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_packages_form_Switch__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_packages_form_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_packages_form_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_packages_form_Input__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_packages_form_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_packages_form_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_packages_form_InputNumber__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_packages_form_InputNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_packages_form_InputNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_packages_form_Select__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_packages_form_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_packages_form_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_packages_navigation_Header__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_packages_navigation_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_packages_navigation_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_packages_navigation_Tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_packages_navigation_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_packages_navigation_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_packages_navigation_Tab__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_packages_navigation_Tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_packages_navigation_Tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_packages_navigation_Navbar__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_packages_navigation_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_packages_navigation_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_packages_navigation_NavbarItem__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_packages_navigation_NavbarItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_packages_navigation_NavbarItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_packages_data_Progress__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_packages_data_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_packages_data_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_packages_layout_CellGroup__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_packages_layout_CellGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_packages_layout_CellGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_packages_layout_Cell__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_packages_layout_Cell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_packages_layout_Cell__);




























Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_Iconfont___default.a.name, __WEBPACK_IMPORTED_MODULE_0__components_Iconfont___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_1__components_Checker___default.a.name, __WEBPACK_IMPORTED_MODULE_1__components_Checker___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_2_packages_common_Mask___default.a.name, __WEBPACK_IMPORTED_MODULE_2_packages_common_Mask___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_3_packages_common_SelectPopup___default.a.name, __WEBPACK_IMPORTED_MODULE_3_packages_common_SelectPopup___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_4_packages_common_Loading___default.a.name, __WEBPACK_IMPORTED_MODULE_4_packages_common_Loading___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_5_packages_text_H1___default.a.name, __WEBPACK_IMPORTED_MODULE_5_packages_text_H1___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_6_packages_text_H2___default.a.name, __WEBPACK_IMPORTED_MODULE_6_packages_text_H2___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_8_packages_text_H4___default.a.name, __WEBPACK_IMPORTED_MODULE_8_packages_text_H4___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_7_packages_text_H3___default.a.name, __WEBPACK_IMPORTED_MODULE_7_packages_text_H3___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_9_packages_text_H5___default.a.name, __WEBPACK_IMPORTED_MODULE_9_packages_text_H5___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_10_packages_text_H6___default.a.name, __WEBPACK_IMPORTED_MODULE_10_packages_text_H6___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_11_packages_text_H7___default.a.name, __WEBPACK_IMPORTED_MODULE_11_packages_text_H7___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_12_packages_button_Button___default.a.name, __WEBPACK_IMPORTED_MODULE_12_packages_button_Button___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_13_packages_form_Radio___default.a.name, __WEBPACK_IMPORTED_MODULE_13_packages_form_Radio___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_14_packages_form_Checkbox___default.a.name, __WEBPACK_IMPORTED_MODULE_14_packages_form_Checkbox___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_15_packages_form_Switch___default.a.name, __WEBPACK_IMPORTED_MODULE_15_packages_form_Switch___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_16_packages_form_Input___default.a.name, __WEBPACK_IMPORTED_MODULE_16_packages_form_Input___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_17_packages_form_InputNumber___default.a.name, __WEBPACK_IMPORTED_MODULE_17_packages_form_InputNumber___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_18_packages_form_Select___default.a.name, __WEBPACK_IMPORTED_MODULE_18_packages_form_Select___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_19_packages_navigation_Header___default.a.name, __WEBPACK_IMPORTED_MODULE_19_packages_navigation_Header___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_20_packages_navigation_Tabs___default.a.name, __WEBPACK_IMPORTED_MODULE_20_packages_navigation_Tabs___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_21_packages_navigation_Tab___default.a.name, __WEBPACK_IMPORTED_MODULE_21_packages_navigation_Tab___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_22_packages_navigation_Navbar___default.a.name, __WEBPACK_IMPORTED_MODULE_22_packages_navigation_Navbar___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_23_packages_navigation_NavbarItem___default.a.name, __WEBPACK_IMPORTED_MODULE_23_packages_navigation_NavbarItem___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_24_packages_data_Progress___default.a.name, __WEBPACK_IMPORTED_MODULE_24_packages_data_Progress___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_25_packages_layout_CellGroup___default.a.name, __WEBPACK_IMPORTED_MODULE_25_packages_layout_CellGroup___default.a);
Vue.component(__WEBPACK_IMPORTED_MODULE_26_packages_layout_Cell___default.a.name, __WEBPACK_IMPORTED_MODULE_26_packages_layout_Cell___default.a);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    jump: function jump(to) {
      if (this.$router) {
        this.$router.push(to);
      }
    }
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Homepage__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Homepage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_Homepage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Color__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Text__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Iconfont__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Iconfont___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_Iconfont__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_Button__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_Radio__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_Checkbox__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_Input__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_InputNumber__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_InputNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_InputNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_Select__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__views_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_Tab__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_Tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__views_Tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_Progress__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__views_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_Cell__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_Cell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__views_Cell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_Navbar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__views_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_NavbarContent__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_NavbarContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__views_NavbarContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_Checker__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_Checker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__views_Checker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store__ = __webpack_require__(29);



















Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]);

function createNavContent(content) {
  return {
    name: 'navbar-content-' + content,
    render: function render(h) {
      return h(__WEBPACK_IMPORTED_MODULE_15__views_NavbarContent___default.a, { props: { content: content } });
    }
  };
}

var router = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]({
  routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_1__views_Homepage___default.a }, { path: '/color', component: __WEBPACK_IMPORTED_MODULE_2__views_Color___default.a }, { path: '/text', component: __WEBPACK_IMPORTED_MODULE_3__views_Text___default.a }, { path: '/iconfont', component: __WEBPACK_IMPORTED_MODULE_4__views_Iconfont___default.a }, { path: '/button', component: __WEBPACK_IMPORTED_MODULE_5__views_Button___default.a }, { path: '/radio', component: __WEBPACK_IMPORTED_MODULE_6__views_Radio___default.a }, { path: '/checkbox', component: __WEBPACK_IMPORTED_MODULE_7__views_Checkbox___default.a }, { path: '/input', component: __WEBPACK_IMPORTED_MODULE_8__views_Input___default.a }, { path: '/input-number', component: __WEBPACK_IMPORTED_MODULE_9__views_InputNumber___default.a }, { path: '/select', component: __WEBPACK_IMPORTED_MODULE_10__views_Select___default.a }, { path: '/tab', component: __WEBPACK_IMPORTED_MODULE_11__views_Tab___default.a }, { path: '/progress', component: __WEBPACK_IMPORTED_MODULE_12__views_Progress___default.a }, { path: '/cell', component: __WEBPACK_IMPORTED_MODULE_13__views_Cell___default.a }, { path: '/navbar', component: __WEBPACK_IMPORTED_MODULE_14__views_Navbar___default.a, children: [{ path: '/', component: createNavContent('home') }, { path: 'cart', component: createNavContent('cart') }, { path: 'order', component: createNavContent('order') }, { path: 'my', component: createNavContent('my') }] }, { path: '/checker', component: __WEBPACK_IMPORTED_MODULE_16__views_Checker___default.a }]
});

router.beforeEach(function (to, from, next) {
  __WEBPACK_IMPORTED_MODULE_17__store__["a" /* default */].dispatch('setTitle', to.path.replace(/^\//, ''));
  next();
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(48);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(50);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(49);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
__webpack_require__(39);
module.exports = __webpack_require__(79);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(2)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
__webpack_require__(82);
__webpack_require__(84);
__webpack_require__(85);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(40);
module.exports = __webpack_require__(28).f('iterator');

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4)
  , toLength  = __webpack_require__(77)
  , toIndex   = __webpack_require__(76);
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

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16)
  , TAG = __webpack_require__(1)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(58);
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

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(10)
  , gOPS    = __webpack_require__(21)
  , pIE     = __webpack_require__(13);
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

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(34)
  , descriptor     = __webpack_require__(14)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(10)
  , toIObject = __webpack_require__(4);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(15)('meta')
  , isObject = __webpack_require__(11)
  , has      = __webpack_require__(3)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(9)(function(){
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

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(10)
  , gOPS     = __webpack_require__(21)
  , pIE      = __webpack_require__(13)
  , toObject = __webpack_require__(38)
  , IObject  = __webpack_require__(32)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(8)
  , getKeys  = __webpack_require__(10);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(13)
  , createDesc     = __webpack_require__(14)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(26)
  , has            = __webpack_require__(3)
  , IE8_DOM_DEFINE = __webpack_require__(31)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4)
  , gOPN      = __webpack_require__(35).f
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


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(3)
  , toObject    = __webpack_require__(38)
  , IE_PROTO    = __webpack_require__(23)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , defined   = __webpack_require__(17);
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

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(61)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(12);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8)
  , get      = __webpack_require__(78);
module.exports = __webpack_require__(2).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(59)
  , step             = __webpack_require__(67)
  , Iterators        = __webpack_require__(12)
  , toIObject        = __webpack_require__(4);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function(iterated, kind){
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

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(19);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(70)});

/***/ }),
/* 82 */
/***/ (function(module, exports) {



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(0)
  , has            = __webpack_require__(3)
  , DESCRIPTORS    = __webpack_require__(5)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(37)
  , META           = __webpack_require__(69).KEY
  , $fails         = __webpack_require__(9)
  , shared         = __webpack_require__(24)
  , setToStringTag = __webpack_require__(22)
  , uid            = __webpack_require__(15)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(28)
  , wksDefine      = __webpack_require__(27)
  , keyOf          = __webpack_require__(68)
  , enumKeys       = __webpack_require__(63)
  , isArray        = __webpack_require__(65)
  , anObject       = __webpack_require__(8)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(26)
  , createDesc     = __webpack_require__(14)
  , _create        = __webpack_require__(34)
  , gOPNExt        = __webpack_require__(73)
  , $GOPD          = __webpack_require__(72)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(10)
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
  __webpack_require__(35).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(13).f  = $propertyIsEnumerable;
  __webpack_require__(21).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(20)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('asyncIterator');

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('observable');

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path) {
  var regex = index(path);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.5.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(86)))

/***/ }),
/* 88 */
/***/ (function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    state: cloneRoute(router.currentRoute),
    mutations: {
      'router/ROUTE_CHANGED': function (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  store.watch(
    function (state) { return state[moduleName] },
    function (route) {
      if (route.fullPath === currentPath) {
        return
      }
      isTimeTraveling = true
      currentPath = route.fullPath
      router.push(route)
    },
    { sync: true }
  )

  // sync store on router navigation
  router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit('router/ROUTE_CHANGED', { to: to, from: from })
  })
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(212)
)

/* script */
__vue_exports__ = __webpack_require__(133)

/* template */
var __vue_template__ = __webpack_require__(255)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eec90706"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(186)
)

/* script */
__vue_exports__ = __webpack_require__(134)

/* template */
var __vue_template__ = __webpack_require__(230)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/components/Checker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-583c3150"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(135)

/* template */
var __vue_template__ = __webpack_require__(223)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/components/Iconfont.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(205)
)

/* script */
__vue_exports__ = __webpack_require__(136)

/* template */
var __vue_template__ = __webpack_require__(248)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8a065972"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(137)

/* template */
var __vue_template__ = __webpack_require__(222)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(210)
)

/* script */
__vue_exports__ = __webpack_require__(138)

/* template */
var __vue_template__ = __webpack_require__(253)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Checkbox.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-da2f27d0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(196)
)

/* script */
__vue_exports__ = __webpack_require__(139)

/* template */
var __vue_template__ = __webpack_require__(240)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Checker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5c7a0cf0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(211)
)

/* template */
var __vue_template__ = __webpack_require__(254)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Color.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e8445b44"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(193)
)

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(237)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Homepage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a4312c3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(201)
)

/* template */
var __vue_template__ = __webpack_require__(244)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Iconfont.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-68c7ea1d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(204)
)

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(247)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Input.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b896f45"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(197)
)

/* script */
__vue_exports__ = __webpack_require__(142)

/* template */
var __vue_template__ = __webpack_require__(241)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/InputNumber.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5f273724"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(209)
)

/* script */
__vue_exports__ = __webpack_require__(143)

/* template */
var __vue_template__ = __webpack_require__(252)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ce07adb6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(183)
)

/* script */
__vue_exports__ = __webpack_require__(144)

/* template */
var __vue_template__ = __webpack_require__(227)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/NavbarContent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4d53a978"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(176)
)

/* script */
__vue_exports__ = __webpack_require__(145)

/* template */
var __vue_template__ = __webpack_require__(217)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Progress.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2034cd82"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(182)
)

/* script */
__vue_exports__ = __webpack_require__(146)

/* template */
var __vue_template__ = __webpack_require__(226)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Radio.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4812aa14"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(181)
)

/* script */
__vue_exports__ = __webpack_require__(147)

/* template */
var __vue_template__ = __webpack_require__(225)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Select.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42e9ec11"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(179)
)

/* script */
__vue_exports__ = __webpack_require__(148)

/* template */
var __vue_template__ = __webpack_require__(221)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Tab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-33341650"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(177)
)

/* template */
var __vue_template__ = __webpack_require__(219)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/demo/src/views/Text.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-302bf702"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(200)
)

/* script */
__vue_exports__ = __webpack_require__(149)

/* template */
var __vue_template__ = __webpack_require__(243)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/button/Button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6858c940"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(180)
)

/* script */
__vue_exports__ = __webpack_require__(150)

/* template */
var __vue_template__ = __webpack_require__(224)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/common/Loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-41068157"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(187)
)

/* script */
__vue_exports__ = __webpack_require__(151)

/* template */
var __vue_template__ = __webpack_require__(231)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/common/Mask.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-593edee1"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(199)
)

/* script */
__vue_exports__ = __webpack_require__(152)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/common/SelectPopup.vue"
__vue_options__._scopeId = "data-v-640025ab"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(174)
)

/* script */
__vue_exports__ = __webpack_require__(153)

/* template */
var __vue_template__ = __webpack_require__(215)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/data/Progress.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0a1dd603"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(185)
)

/* script */
__vue_exports__ = __webpack_require__(154)

/* template */
var __vue_template__ = __webpack_require__(229)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/form/Checkbox.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-56cdf1bf"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(203)
)

/* script */
__vue_exports__ = __webpack_require__(155)

/* template */
var __vue_template__ = __webpack_require__(246)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/form/Input.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6e3722fe"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(214)
)

/* script */
__vue_exports__ = __webpack_require__(156)

/* template */
var __vue_template__ = __webpack_require__(257)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/form/InputNumber.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f9aead32"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(198)
)

/* script */
__vue_exports__ = __webpack_require__(157)

/* template */
var __vue_template__ = __webpack_require__(242)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/form/Radio.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-62b742a2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(206)
)

/* script */
__vue_exports__ = __webpack_require__(158)

/* template */
var __vue_template__ = __webpack_require__(249)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/form/Select.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b41aa110"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(175)
)

/* script */
__vue_exports__ = __webpack_require__(159)

/* template */
var __vue_template__ = __webpack_require__(216)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/form/Switch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-181954a0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(184)
)

/* script */
__vue_exports__ = __webpack_require__(160)

/* template */
var __vue_template__ = __webpack_require__(228)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/layout/Cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-555a5bf8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(208)
)

/* script */
__vue_exports__ = __webpack_require__(161)

/* template */
var __vue_template__ = __webpack_require__(251)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/layout/CellGroup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bb28b7d2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(202)
)

/* script */
__vue_exports__ = __webpack_require__(162)

/* template */
var __vue_template__ = __webpack_require__(245)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/navigation/Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-69d2e679"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(178)
)

/* script */
__vue_exports__ = __webpack_require__(163)

/* template */
var __vue_template__ = __webpack_require__(220)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/navigation/Navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-315ab308"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(213)
)

/* script */
__vue_exports__ = __webpack_require__(164)

/* template */
var __vue_template__ = __webpack_require__(256)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/navigation/NavbarItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eedf9ba2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(165)

/* template */
var __vue_template__ = __webpack_require__(218)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/navigation/Tab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(207)
)

/* script */
__vue_exports__ = __webpack_require__(166)

/* template */
var __vue_template__ = __webpack_require__(250)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/navigation/Tabs.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-baa3882c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(195)
)

/* script */
__vue_exports__ = __webpack_require__(167)

/* template */
var __vue_template__ = __webpack_require__(239)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/text/H1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a74cb88"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(194)
)

/* script */
__vue_exports__ = __webpack_require__(168)

/* template */
var __vue_template__ = __webpack_require__(238)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/text/H2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a589c86"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(192)
)

/* script */
__vue_exports__ = __webpack_require__(169)

/* template */
var __vue_template__ = __webpack_require__(236)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/text/H3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a3c6d84"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(191)
)

/* script */
__vue_exports__ = __webpack_require__(170)

/* template */
var __vue_template__ = __webpack_require__(235)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/text/H4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a203e82"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(190)
)

/* script */
__vue_exports__ = __webpack_require__(171)

/* template */
var __vue_template__ = __webpack_require__(234)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/text/H5.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a040f80"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(189)
)

/* script */
__vue_exports__ = __webpack_require__(172)

/* template */
var __vue_template__ = __webpack_require__(233)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/text/H6.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-59e7e07e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(188)
)

/* script */
__vue_exports__ = __webpack_require__(173)

/* template */
var __vue_template__ = __webpack_require__(232)
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
__vue_options__.__file = "/home/travis/build/erguotou520/weex-uikit/packages/text/H7.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-59cbb17c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var clipboard = weex.requireModule('clipboard');
var modal = weex.requireModule('modal');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      appHeight: weex.config.deviceHeight + 'px'
    };
  },

  methods: {
    copy: function copy() {
      clipboard.setString(weex.config.bundleUrl);
      modal.toast({ message: '已复制地址', duration: 0.3 });
    },
    onMaskClick: function onMaskClick() {
      if (!this.$store.getters.loadingVisiable) {
        this.$store.dispatch('toggleMask', false);
      }
    }
  }
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-checker',
  props: {
    value: {
      type: [Boolean, Array]
    }
  },
  computed: {
    checked: function checked() {
      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.value) === 'object') {
        return this.value.every(function (item) {
          return item;
        });
      } else {
        return this.value;
      }
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
      this.$emit('input', !this.checked);
      this.$emit('change', !this.checked);
    }
  }
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var domModule = weex.requireModule('dom');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-icon',
  props: {
    size: {
      type: String,
      default: '34px'
    },
    color: {
      type: String,
      default: '#667180'
    }
  },
  computed: {
    style: function style() {
      return {
        fontFamily: 'iconfont',
        color: this.color,
        fontSize: this.size + 'px'
      };
    }
  },
  created: function created() {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('//at.alicdn.com/t/font_gzccnevsgs3jtt9.ttf')"
    });
  }
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);



var modal = weex.requireModule('modal');
var clipboard = weex.requireModule('clipboard');
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    toast: function toast() {
      modal.toast({
        message: 'This is a toast',
        duration: 0.3
      });
    },
    showVueVersion: function showVueVersion() {
      modal.toast({
        message: Vue.version,
        duration: 0.3
      });
    },
    getDocument: function getDocument() {
      modal.toast({
        message: weex.document,
        duration: 0.3
      });
      clipboard.setString(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(weex.document));
    }
  }
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var clipboard = weex.requireModule('clipboard');
var modal = weex.requireModule('modal');
var domModule = weex.requireModule('dom');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      gender: 'male'
    };
  },

  methods: {
    share: function share() {
      clipboard.setString('erguotou525@gmail.com');
      modal.toast({ message: '已复制邮箱地址', duration: 0.3 });
    }
  },
  created: function created() {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('//at.alicdn.com/t/font_0dgio1v15kz6ko6r.ttf')"
    });
  }
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      checked1: ['c2', 'c3']
    };
  }
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      subs: [false, false, false]
    };
  },

  methods: {
    onSelectAll: function onSelectAll(v) {
      this.subs = this.subs.map(function (sub) {
        return v;
      });
    },
    onChange: function onChange(index, v) {
      var tmp = this.subs.slice();
      tmp[index] = v;
      this.subs = tmp;
    }
  }
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(41);




/* harmony default export */ __webpack_exports__["default"] = ({
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapActions */])(['toggleLoading']), {
    showLoading: function showLoading() {
      var _this = this;

      this.toggleLoading(true);
      setTimeout(function () {
        _this.toggleLoading(false);
      }, 2000);
    }
  })
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var domModule = weex.requireModule('dom');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      input1: '',
      input2: 'hello world'
    };
  },
  created: function created() {
    domModule.addRule('fontFace', {
      'fontFamily': 'inputfont',
      'src': "url('//at.alicdn.com/t/font_1uf08qmz45tgldi.ttf')"
    });
  }
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      number1: 1,
      number2: 1,
      number3: 10
    };
  }
});

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activeIndex: '1-2'
    };
  }
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    content: String
  }
});

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      percentage: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var interval = setInterval(function () {
        var rest = 100 - _this.percentage;
        if (_this.percentage > 99.5) {
          if (Math.random() > 0.5) {
            _this.percentage = 100;
            clearInterval(interval);
            interval = null;
          }
        } else {
          _this.percentage += Math.random() * rest;
        }
      }, 1500);
    });
  }
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      checked1: 'r2',
      checked2: 'r3',
      checked3: 'male',
      checked4: 'female',
      checked5: 'male',
      checked6: 'ok'
    };
  }
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      select1: '',
      select2: 'female',
      data1: [{
        label: '男', value: 'male'
      }, {
        label: '女', value: 'female'
      }, {
        label: '其它', value: 'other'
      }],
      data2: [{
        label: '男', value: 'male'
      }, {
        label: '女', value: 'female'
      }, {
        label: '其它', value: 'other', disabled: true
      }]
    };
  }
});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tab1: 'sport'
    };
  }
});

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-loading'
});

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-mask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: 'center'
    }
  },
  created: function created() {
    Vue.prototype.$uMask = this;
  }
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-select-popup',
  props: {
    maskShow: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    var _this = this;

    var h = this.$createElement || this.$root.$createElement;
    return {
      selectComponent: null,
      options: [],
      renderFn: function renderFn(item) {
        return h('div', {
          on: {
            click: function (e) {
              if (!item.disabled) {
                this.selectComponent.$emit('selected', item);
                this.$emit('hide-mask');
              }
              e.stopPropagation();
            }.bind(_this)
          },
          'class': [item.disabled ? 'disabled option' : 'option'] }, [h('text', { 'class': ['text', item.selected ? 'text-active' : '', item.disabled ? 'text-disabled' : ''] }, item.label), h('text', { 'class': ['icon', item.selected ? 'icon-active' : '', item.disabled ? 'icon-disabled' : ''] })]);
      }
    };
  },

  watch: {
    maskShow: function maskShow(val) {
      if (this.selectComponent && !val && this.selectComponent.expanded) {
        this.selectComponent.collapse();
      }
    }
  },
  methods: {
    showPopup: function showPopup(selectComp) {
      this.selectComponent = selectComp;
      var options = selectComp.data.slice();
      options.forEach(function (opt) {
        opt.selected = opt.value === selectComp.value;
      });
      this.options = options;
      if (typeof renderFn === 'function') {
        this.renderFn = selectComp.renderFn;
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    var $options = this.options.map(function (opt) {
      return _this2.renderFn.bind(_this2)(opt);
    });
    return h('div', {
      attrs: { 'class': 'popup' }
    }, $options);
  },
  created: function created() {
    Vue.prototype.$uSelectPopup = this;
  }
});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-progress',
  props: {
    percentage: {
      type: Number,
      required: true,
      validator: function validator(val) {
        return val >= 0 && val <= 100;
      }
    }
  },
  data: function data() {
    return {
      progressWidth: 0
    };
  },

  watch: {
    percentage: function percentage(val) {
      this.$nextTick(this.animateCompleted);
    }
  },
  filters: {
    textFilter: function textFilter(val) {
      return Math.floor(val * 10) / 10;
    }
  },
  methods: {
    animateCompleted: function animateCompleted() {
      animation.transition(this.$refs.completed, {
        duration: 300,
        timingFunction: 'ease-in-out',
        styles: {
          width: this.progressWidth * this.percentage / 100 + 'px'
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      dom.getComponentRect(_this.$refs.progress, function (option) {
        _this.progressWidth = option.size.width;
        _this.animateCompleted();
      });
    });
  }
});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-checkbox',
  props: {
    value: [Array],
    val: [String, Number, Boolean, Object, Array],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked: function checked() {
      return this.value.indexOf(this.val) > -1;
    }
  },
  methods: {
    change: function change() {
      if (!this.disabled) {
        var copyed = this.value.slice();
        if (this.checked) {
          copyed.splice(this.value.indexOf(this.val), 1);
        } else {
          copyed.push(this.val);
        }
        this.$emit('input', copyed);
        this.$emit('change', copyed);
      }
    }
  }
});

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-input',
  props: {
    type: String,
    value: String,
    placeholder: String
  },
  data: function data() {
    return {
      inputVal: this.value
    };
  },

  watch: {
    value: function value(val) {
      this.inputVal = val;
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', e.value);
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    }
  }
});

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-input-number',
  props: {
    value: {
      type: Number,
      required: true
    },
    min: Number,
    max: Number,
    disabled: Boolean
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.min !== undefined && this.value <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.max !== undefined && this.value >= this.max;
    }
  },
  methods: {
    minus: function minus() {
      if (this.min === undefined || this.value > this.min) {
        this.$emit('input', -1 + this.value);
      }
    },
    plus: function plus() {
      if (this.max === undefined || this.value < this.max) {
        this.$emit('input', 1 + this.value);
      }
    },
    onInput: function onInput(e) {
      if (this.min === undefined || e.value > this.min || this.max === undefined || e.value < this.max) {
        this.$emit('input', +e.value);
      }
    }
  }
});

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-radio',
  props: {
    value: [String, Number, Boolean, Object, Array],
    val: [String, Number, Boolean, Object, Array],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clz: function clz() {
      var result = [];
      var checked = this.val === this.value;
      if (checked) {
        result.push('checked');
      }
      if (this.disabled) {
        result.push('disabled');
      }
      return result;
    }
  },
  methods: {
    change: function change() {
      if (!this.disabled) {
        this.$emit('input', this.val);
        this.$emit('change', this.val);
      }
    }
  }
});

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-select',
  props: {
    placeholder: String,
    value: [String, Number, Boolean, Object, Array],
    data: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    renderFn: Function
  },
  data: function data() {
    return {
      expanded: false
    };
  },

  computed: {
    text: function text() {
      if (this.value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var opt = _step.value;

            if (opt.value === this.value) {
              return opt.label;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return '';
    }
  },
  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        this.expanded = !this.expanded;
        if (this.expanded) {
          this.$emit('expand');
          this.$uSelectPopup.showPopup(this);
        }
      }
    },
    collapse: function collapse() {
      this.expanded = false;
    }
  },
  created: function created() {
    var _this = this;

    this.$on('selected', function (opt) {
      _this.$emit('input', opt.value);
    });
  }
});

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var animation = weex.requireModule('animation');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-switch',
  props: {
    value: [String, Number, Boolean, Object, Array],
    trueValue: {
      type: [String, Number, Boolean, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Object, Array],
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked: function checked() {
      return this.value == this.trueValue;
    }
  },
  methods: {
    change: function change() {
      if (!this.disabled) {
        var targetValue = this.checked ? this.falseValue : this.trueValue;
        animation.transition(this.$refs.icon, {
          styles: {
            transform: 'translateX(' + (this.checked ? '100%' : '0') + ')'
          },
          duration: 300,
          timingFunction: 'ease',
          delay: 0 });
        this.$emit('input', targetValue);
        this.$emit('change', targetValue);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.checked) {
        animation.transition(_this.$refs.icon, {
          styles: {
            transform: 'translateX(0)'
          },
          duration: 0,
          delay: 0 });
      }
    });
  }
});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-cell',
  props: {
    text: String,
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-cell-group',
  props: {
    title: String
  }
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-header',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    bg: String
  }
});

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-navbar',
  props: {
    value: {
      type: String
    },

    router: {
      type: Boolean,
      default: false
    },
    imageType: {
      type: String,

      default: 'iconfont'
    }
  },
  data: function data() {
    return {
      bars: []
    };
  },

  computed: {
    activeIndex: function activeIndex() {
      return this.bars.map(function (bar) {
        return bar.index;
      }).indexOf(this.value) || 0;
    }
  },
  methods: {
    addBar: function addBar(bar) {
      this.bars.push(bar);
    },
    removeBar: function removeBar(bar) {
      this.bars.splice(this.bars.indexOf(bar), 1);
    },
    selectBar: function selectBar(bar) {
      this.$emit('input', bar);
      this.$emit('change', bar);
    }
  }
});

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var modal = weex.requireModule('modal');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-navbar-item',
  props: {
    label: {
      type: String,
      required: true
    },
    index: String,

    normalUrl: String,
    activeUrl: String,

    fontFamily: {
      type: String,
      default: 'iconfont'
    }
  },
  data: function data() {
    return {
      $parent: null
    };
  },

  computed: {
    actived: function actived() {
      return this.$parent && this.$parent.value === this.index;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.$parent) {
        this.$parent.selectBar(this.index);
        if (this.$router && this.$parent.router) {
          this.$router.push(this.index);
        } else {
          this.$emit('click');
        }
      }
    }
  },
  created: function created() {
    var parent = this.$parent;
    while (parent.$parent && parent.$options._componentTag !== 'u-navbar') {
      parent = parent.$parent;
    }
    if (parent.$options._componentTag !== 'u-navbar') {
      modal.toast({ message: 'u-navbar-item不能单独使用', duration: 0.3 });
      return;
    }
    this.$parent = parent;
  },
  beforeDestroy: function beforeDestroy() {
    this.$parent && this.$parent.removeBar(this);
  }
});

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var modal = weex.requireModule('modal');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-tab',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number, Boolean, Object, Array],
      required: true
    }
  },
  data: function data() {
    return {
      $parent: null
    };
  },

  computed: {
    actived: function actived() {
      return this.$parent && this.$parent.value === this.value;
    }
  },
  created: function created() {
    var parent = this.$parent;
    while (parent.$parent && parent.$options._componentTag !== 'u-tabs') {
      parent = parent.$parent;
    }
    if (parent.$options._componentTag !== 'u-tabs') {
      modal.toast({ message: 'u-tab不能单独使用', duration: 0.3 });
      return;
    }
    this.$parent = parent;
    parent.addTab(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.$parent && this.$parent.removeTab(this);
  }
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-tabs',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: 0
    }
  },
  data: function data() {
    return {
      tabs: [],
      lineWidth: 0
    };
  },

  computed: {
    activeIndex: function activeIndex() {
      return this.tabs.map(function (tab) {
        return tab.value;
      }).indexOf(this.value) || 0;
    }
  },
  watch: {
    value: function value(val) {
      var _this = this;

      this.$nextTick(function () {
        _this.animateLine();
      });
    }
  },
  methods: {
    addTab: function addTab(tab) {
      this.tabs.push(tab);
    },
    removeTab: function removeTab(tab) {
      this.tabs.splice(this.tabs.indexOf(tab), 1);
    },
    selectTab: function selectTab(tab) {
      this.$emit('input', tab.value);
      this.$emit('change', tab.value);
    },
    animateLine: function animateLine() {
      animation.transition(this.$refs.line, {
        duration: 300,
        timingFunction: 'ease-in-out',
        styles: {
          transform: 'translateX(' + this.activeIndex * this.lineWidth + 'px)'
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      dom.getComponentRect(_this2.$refs.tabs, function (option) {
        _this2.lineWidth = option.size.width / _this2.tabs.length;
        _this2.animateLine();
      });
    });
  }
});

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-h1',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
});

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-h2',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
});

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-h3',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
});

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-h4',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
});

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-h5',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
});

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-h6',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
});

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-h7',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
});

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = {
  "progress": {
    "position": "relative",
    "flexDirection": "row",
    "alignItems": "center",
    "height": 32
  },
  "line": {
    "flex": 1,
    "height": 4,
    "backgroundColor": "#e6ecf2",
    "borderRadius": 2
  },
  "completed": {
    "position": "absolute",
    "left": 0,
    "top": 14,
    "height": 4,
    "backgroundColor": "#489cff",
    "borderRadius": 2
  },
  "text": {
    "width": 80,
    "textAlign": "right",
    "color": "#233040",
    "fontSize": 24
  }
}

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = {
  "switch": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#98a4b3"
  },
  "sz-small": {
    "minWidth": 80,
    "height": 40,
    "borderRadius": 20
  },
  "sz-normal": {
    "minWidth": 120,
    "height": 60,
    "borderRadius": 30
  },
  "sz-large": {
    "minWidth": 160,
    "height": 80,
    "borderRadius": 40
  },
  "checked": {
    "backgroundColor": "#489cff"
  },
  "disabled": {
    "backgroundColor": "#b8c7d8"
  },
  "icon": {
    "backgroundColor": "#ffffff",
    "borderStyle": "solid",
    "borderColor": "#98a4b3",
    "transform": "translateX(100%)"
  },
  "icon-checked": {
    "borderColor": "#489cff"
  },
  "icon-disabled": {
    "borderColor": "#b8c7d8"
  },
  "isz-small": {
    "width": 40,
    "height": 40,
    "borderWidth": 2,
    "borderRadius": 20
  },
  "isz-normal": {
    "width": 60,
    "height": 60,
    "borderWidth": 4,
    "borderRadius": 30
  },
  "isz-large": {
    "width": 80,
    "height": 80,
    "borderWidth": 6,
    "borderRadius": 40
  },
  "text": {
    "color": "#667180",
    "marginLeft": 40
  },
  "text-disabled": {
    "color": "#e6ecf2"
  }
}

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = {
  "v-progress": {
    "padding": 20
  }
}

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = {
  "v-texts": {
    "padding": 20
  },
  "text-item": {
    "marginTop": 20,
    "marginBottom": 20
  }
}

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = {
  "navbar": {
    "position": "relative",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = {
  "v-tabs": {
    "padding": 20
  }
}

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = {
  "loading": {
    "backgroundColor": "#535353",
    "width": 360,
    "height": 360,
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": 20
  },
  "img": {
    "width": 200,
    "height": 200
  },
  "text": {
    "marginTop": 10,
    "color": "#fcfcfc",
    "textAlign": "center"
  }
}

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = {
  "v-selects": {
    "padding": 20
  },
  "select-item": {
    "marginTop": 20,
    "marginBottom": 20
  }
}

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = {
  "v-radios": {
    "padding": 20
  },
  "radio-block": {
    "flexDirection": "row",
    "marginTop": 20,
    "marginBottom": 20
  },
  "radio-item": {
    "flex": 1
  }
}

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "color": "#667180",
    "paddingLeft": 20,
    "lineHeight": 88
  }
}

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = {
  "cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "minHeight": 94,
    "paddingLeft": 20,
    "paddingRight": 20,
    "backgroundColor": "#ffffff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e6ecf2"
  },
  "left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "minHeight": 30,
    "flexDirection": "row",
    "alignItems": "center"
  },
  "text": {
    "color": "#233040",
    "fontSize": 28
  },
  "value": {
    "marginRight": 20,
    "color": "#667180",
    "fontSize": 26
  },
  "arrow": {
    "width": 20,
    "height": 20,
    "marginTop": 6,
    "marginRight": 10,
    "borderRightStyle": "solid",
    "borderRightWidth": 2,
    "borderRightColor": "#667180",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 2,
    "borderBottomColor": "#667180",
    "transform": "rotate(-45deg)"
  }
}

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = {
  "checkbox": {
    "position": "relative",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "box": {
    "width": 40,
    "height": 40,
    "borderStyle": "solid",
    "borderWidth": 2,
    "borderColor": "#667180",
    "borderRadius": 10
  },
  "box-checked": {
    "borderColor": "#489cff"
  },
  "box-disabled": {
    "borderColor": "#b8c7d8"
  },
  "icon": {
    "position": "absolute",
    "left": 8,
    "top": 12,
    "width": 24,
    "height": 12,
    "borderLeftStyle": "solid",
    "borderLeftWidth": 3,
    "borderLeftColor": "#489cff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 3,
    "borderBottomColor": "#489cff",
    "borderRadius": 2,
    "transform": "rotate(-45deg)"
  },
  "icon-disabled": {
    "borderLeftColor": "#b8c7d8",
    "borderBottomColor": "#b8c7d8"
  },
  "text": {
    "marginLeft": 40,
    "color": "#667180"
  },
  "text-disabled": {
    "color": "#e6ecf2"
  }
}

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = {
  "checker": {
    "position": "relative",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "box": {
    "width": 40,
    "height": 40,
    "borderStyle": "solid",
    "borderWidth": 2,
    "borderColor": "#667180",
    "borderRadius": 20
  },
  "box-checked": {
    "borderColor": "#489cff"
  },
  "icon": {
    "position": "absolute",
    "left": 8,
    "top": 14,
    "width": 24,
    "height": 12,
    "borderLeftStyle": "solid",
    "borderLeftWidth": 3,
    "borderLeftColor": "#489cff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 3,
    "borderBottomColor": "#489cff",
    "borderRadius": 2,
    "transform": "rotate(-45deg)"
  },
  "text": {
    "marginLeft": 40,
    "color": "#667180"
  }
}

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = {
  "mask": {
    "position": "fixed",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "flex": 1,
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "zIndex": 10,
    "opacity": 0,
    "transform": "translate(-100%)"
  },
  "active": {
    "opacity": 1,
    "transform": "translate(0)"
  }
}

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = {
  "u-h7": {
    "fontSize": 22
  },
  "color-primary": {
    "color": "#667180"
  },
  "color-highlight": {
    "color": "#233040"
  },
  "color-minor": {
    "color": "#98a4b3"
  }
}

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = {
  "u-h6": {
    "fontSize": 26,
    "lineHeight": 48
  },
  "color-primary": {
    "color": "#667180"
  },
  "color-highlight": {
    "color": "#233040"
  },
  "color-minor": {
    "color": "#98a4b3"
  }
}

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = {
  "u-h5": {
    "fontSize": 30
  },
  "color-primary": {
    "color": "#667180"
  },
  "color-highlight": {
    "color": "#233040"
  },
  "color-minor": {
    "color": "#98a4b3"
  }
}

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = {
  "u-h4": {
    "fontSize": 34,
    "lineHeight": 52,
    "fontWeight": "200"
  },
  "color-primary": {
    "color": "#667180"
  },
  "color-highlight": {
    "color": "#233040"
  },
  "color-minor": {
    "color": "#98a4b3"
  }
}

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = {
  "u-h3": {
    "fontSize": 34,
    "fontWeight": "300"
  },
  "color-primary": {
    "color": "#667180"
  },
  "color-highlight": {
    "color": "#233040"
  },
  "color-minor": {
    "color": "#98a4b3"
  }
}

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = {
  "grid-row": {
    "flexDirection": "row"
  },
  "grid-cell": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center",
    "padding": 32,
    "borderStyle": "solid",
    "borderWidth": 1,
    "borderColor": "#e6ecf2"
  }
}

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = {
  "u-h2": {
    "fontSize": 44,
    "lineHeight": 64,
    "fontWeight": "500"
  },
  "color-primary": {
    "color": "#667180"
  },
  "color-highlight": {
    "color": "#233040"
  },
  "color-minor": {
    "color": "#98a4b3"
  }
}

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = {
  "u-h1": {
    "fontSize": 60
  },
  "color-primary": {
    "color": "#667180"
  },
  "color-highlight": {
    "color": "#233040"
  },
  "color-minor": {
    "color": "#98a4b3"
  }
}

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = {
  "row": {
    "marginTop": 20,
    "marginBottom": 20
  }
}

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = {
  "v-input-number": {
    "padding": 20
  },
  "number-row": {
    "flexDirection": "row",
    "marginTop": 20,
    "marginBottom": 20
  },
  "number-cell": {
    "flex": 1
  }
}

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = {
  "radio": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "icon": {
    "width": 40,
    "height": 40,
    "backgroundColor": "#ffffff",
    "borderRadius": 20,
    "borderStyle": "solid",
    "borderWidth": 2,
    "borderColor": "#667180"
  },
  "checked": {
    "borderWidth": 16,
    "borderColor": "#489cff"
  },
  "disabled": {
    "borderColor": "#b8c7d8"
  },
  "text": {
    "color": "#667180",
    "marginLeft": 40
  },
  "text-disabled": {
    "color": "#e6ecf2"
  }
}

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = {
  "option": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": 88,
    "paddingLeft": 20,
    "paddingRight": 20,
    "backgroundColor": "#ffffff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e6ecf2",
    "backgroundColor:active": "#f2f3f5"
  },
  "disabled": {
    "backgroundColor:active": "#ffffff"
  },
  "text": {
    "color": "#667180"
  },
  "text-active": {
    "color": "#489cff"
  },
  "text-disabled": {
    "color": "#e6ecf2"
  },
  "icon": {
    "width": 24,
    "height": 12,
    "borderLeftStyle": "solid",
    "borderLeftWidth": 3,
    "borderLeftColor": "#489cff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 3,
    "borderBottomColor": "#489cff",
    "borderRadius": 2,
    "transform": "rotate(-45deg)",
    "opacity": 0
  },
  "icon-active": {
    "opacity": 1
  }
}

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "position": "relative",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "btn-text": {
    "width": 670,
    "height": 96,
    "lineHeight": 96,
    "borderRadius": 4,
    "fontSize": 34,
    "fontWeight": "300",
    "textAlign": "center"
  },
  "btn-tp-primary": {
    "backgroundColor": "#489cff",
    "backgroundColor:active": "#278aff"
  },
  "btn-tp-highlight": {
    "backgroundColor": "#ff8038",
    "backgroundColor:active": "#ff6c19"
  },
  "btn-tp-minor": {
    "backgroundColor": "#667180",
    "backgroundColor:active": "#5c6673"
  },
  "btn-tpd-primary": {
    "backgroundColor": "rgba(72,156,255,0.52)",
    "backgroundColor:active": "rgba(72,156,255,0.52)"
  },
  "btn-tpd-highlight": {
    "backgroundColor": "rgba(255,128,56,0.52)",
    "backgroundColor:active": "rgba(255,128,56,0.52)"
  },
  "btn-tpd-minor": {
    "backgroundColor": "rgba(102,113,128,0.52)",
    "backgroundColor:active": "rgba(102,113,128,0.52)"
  },
  "btn-text-primary": {
    "color": "#ffffff"
  },
  "btn-text-highlight": {
    "color": "#ffffff"
  },
  "btn-text-minor": {
    "color": "#ffffff"
  }
}

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = {
  "v-iconfonts": {
    "padding": 20
  },
  "icon-row": {
    "flexDirection": "row"
  },
  "icon-cell": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center",
    "padding": 20
  }
}

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": 88,
    "paddingLeft": 20,
    "paddingRight": 20
  },
  "bg-primary": {
    "backgroundColor": "#489cff"
  },
  "left": {
    "flexDirection": "row",
    "flex": 1
  },
  "right": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "flex": 1
  },
  "title": {
    "flex": 4,
    "color": "#ffffff",
    "fontSize": 34,
    "fontWeight": "300",
    "textAlign": "center"
  }
}

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = {
  "input-field": {
    "position": "relative",
    "justifyContent": "center"
  },
  "left": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": 88,
    "height": 88,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "right": {
    "position": "absolute",
    "right": 0,
    "top": 0,
    "width": 88,
    "height": 88,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "input": {
    "paddingLeft": 20,
    "paddingRight": 20,
    "height": 88,
    "fontSize": 34,
    "borderRadius": 4,
    "borderColor": "#b8c7d8",
    "borderWidth": 1,
    "borderStyle": "solid",
    "borderColor:focus": "#489cff",
    "color:focus": "#489cff",
    "placeholderColor:focus": "#489cff",
    "borderColor:focus:active": "#489cff",
    "color:focus:active": "#489cff",
    "placeholderColor:focus:active": "#489cff",
    "color:focus::-webkit-input-placeholder": "#489cff"
  },
  "with-left": {
    "paddingLeft": 88
  },
  "with-right": {
    "paddingRight": 88
  }
}

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = {
  "v-inputs": {
    "padding": 20
  },
  "input-item": {
    "marginTop": 20,
    "marginBottom": 20
  }
}

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = {
  "button-item": {
    "marginTop": 20,
    "marginBottom": 20
  }
}

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = {
  "select": {
    "position": "relative"
  },
  "item": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": 20,
    "paddingRight": 20,
    "height": 88,
    "fontSize": 34,
    "borderRadius": 4,
    "borderColor": "#b8c7d8",
    "borderWidth": 1,
    "borderStyle": "solid"
  },
  "disabled": {
    "backgroundColor": "#e6ecf2",
    "borderColor": "#cdd8e4"
  },
  "text": {
    "flex": 1,
    "fontSize": 34,
    "fontWeight": "300",
    "color": "#667180"
  },
  "placeholder": {
    "color": "#929ba8"
  },
  "text-disabled": {
    "color": "#b8c7d8"
  },
  "icon": {
    "width": 20,
    "height": 20,
    "marginTop": -12,
    "marginRight": 6,
    "borderLeftStyle": "solid",
    "borderLeftWidth": 3,
    "borderLeftColor": "#98a4b3",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 3,
    "borderBottomColor": "#98a4b3",
    "transform": "rotate(-45deg)"
  }
}

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = {
  "tab-nav": {
    "position": "relative",
    "flexDirection": "row",
    "height": 88
  },
  "tab": {
    "flex": 1,
    "height": 88,
    "lineHeight": 88,
    "fontSize": 30,
    "textAlign": "center",
    "color": "#233040"
  },
  "tab-active": {
    "color": "#489cff"
  },
  "line": {
    "position": "absolute",
    "bottom": 0,
    "left": 0,
    "height": 4,
    "backgroundColor": "#489cff"
  },
  "tab-content": {
    "paddingTop": 20
  }
}

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = {
  "cell-group": {
    "backgroundColor": "#ffffff"
  },
  "header": {
    "paddingTop": 16,
    "paddingBottom": 16,
    "paddingLeft": 20,
    "paddingRight": 20,
    "backgroundColor": "#f9fafc"
  },
  "title": {
    "color": "#98a4b3",
    "fontSize": 22
  },
  "text": {
    "color": "#233040"
  }
}

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = {
  "v-navbar": {
    "paddingTop": 20,
    "paddingBottom": 20
  }
}

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = {
  "v-checkboxs": {
    "padding": 20
  },
  "checkbox-block": {
    "flexDirection": "row",
    "marginTop": 20,
    "marginBottom": 20
  },
  "checkbox-item": {
    "flex": 1
  }
}

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = {
  "v-colors": {
    "padding": 20
  },
  "text-block": {
    "marginTop": 20,
    "marginBottom": 20,
    "lineHeight": 90,
    "borderRadius": 10,
    "color": "#ffffff",
    "textAlign": "center"
  },
  "t-primary": {
    "backgroundColor": "#489cff"
  },
  "t-highlight": {
    "backgroundColor": "#ff8038"
  },
  "t-home-icon": {
    "backgroundColor": "#21d3ac"
  },
  "t-star-icon": {
    "backgroundColor": "#ffd56c"
  },
  "t-text-highlight": {
    "backgroundColor": "#233040"
  },
  "t-text-primary": {
    "backgroundColor": "#667180"
  },
  "t-text-minor": {
    "backgroundColor": "#98a4b3"
  },
  "t-text-disable": {
    "backgroundColor": "#e6ecf2",
    "color": "#667180"
  },
  "t-background": {
    "backgroundColor": "#f9fafc",
    "color": "#667180"
  }
}

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = {
  "v-app": {
    "backgroundColor": "#f9fafc"
  }
}

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = {
  "navbar-item": {
    "flex": 1,
    "height": 100,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "icon-font": {
    "color": "#98a4b3",
    "fontSize": 32
  },
  "icon-font-active": {
    "color": "#489cff"
  },
  "icon-image": {
    "maxWidth": 40,
    "maxHeight": ""
  },
  "text": {
    "color": "#98a4b3",
    "fontSize": 20
  },
  "text-active": {
    "color": "#489cff"
  }
}

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = {
  "input-number": {
    "flexDirection": "row",
    "width": 220,
    "alignItems": "center",
    "height": 60,
    "borderStyle": "solid",
    "borderWidth": 1,
    "borderColor": "#667180",
    "borderRadius": 4
  },
  "minus": {
    "width": 60,
    "height": 60,
    "lineHeight": 60,
    "textAlign": "center",
    "fontSize": 48,
    "color": "#667180",
    "borderRightStyle": "solid",
    "borderRightWidth": 1,
    "borderRightColor": "#98a4b3"
  },
  "minus-disabled": {
    "color": "#e6ecf2"
  },
  "plus": {
    "width": 60,
    "height": 60,
    "lineHeight": 60,
    "textAlign": "center",
    "fontSize": 48,
    "color": "#667180",
    "borderLeftStyle": "solid",
    "borderLeftWidth": 1,
    "borderLeftColor": "#98a4b3"
  },
  "plus-disabled": {
    "color": "#e6ecf2"
  },
  "input": {
    "width": 100,
    "height": 60,
    "lineHeight": 60,
    "fontSize": 28,
    "textAlign": "center",
    "color": "#667180",
    "backgroundColor": "rgba(0,0,0,0)",
    "borderLeftStyle": "none",
    "borderRightStyle": "none",
    "borderTopStyle": "none",
    "borderBottomStyle": "none"
  },
  "input-disabled": {
    "color": "#e6ecf2"
  }
}

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["progress"]
  }, [_c('div', {
    ref: "progress",
    staticClass: ["line"]
  }), _c('div', {
    ref: "completed",
    staticClass: ["completed"]
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm._f("textFilter")(_vm.percentage)) + "%")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["switch"],
    class: [_vm.checked ? 'checked' : '', _vm.disabled ? 'disabled' : '', 'sz-' + _vm.size],
    on: {
      "click": _vm.change
    }
  }, [_c('div', {
    ref: "icon",
    staticClass: ["icon"],
    class: [_vm.checked ? 'icon-checked' : '', _vm.disabled ? 'icon-disabled' : '', 'isz-' + _vm.size]
  }), (_vm.$slots.default) ? _c('text', {
    staticClass: ["text"],
    class: [_vm.disabled ? 'text-disabled' : '']
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-progress"]
  }, [_c('u-progress', {
    staticClass: ["progress-item"],
    attrs: {
      "percentage": 10
    }
  }), _c('u-progress', {
    staticClass: ["progress-item"],
    attrs: {
      "percentage": _vm.percentage
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.actived) ? _c('div', [_vm._t("default")], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-texts"]
  }, [_c('u-h1', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h1 强调信息,标题 ")]), _c('u-h2', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h2 文章标题栏")]), _c('u-h3', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h3 标题,数字,按钮")]), _c('u-h4', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h4 文章正文")]), _c('u-h5', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h5 标题")]), _c('u-h6', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h6 副标题,提示,次要信息")]), _c('u-h7', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h7 注释,tab,次要信息")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["navbar"]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-tabs"]
  }, [_c('u-tabs', {
    attrs: {
      "value": _vm.tab1
    },
    on: {
      "input": function (v) { return _vm.tab1 = v; }
    }
  }, [_c('u-tab', {
    attrs: {
      "label": "新闻",
      "value": "news"
    }
  }, [_c('text', [_vm._v("新闻。。。")])]), _c('u-tab', {
    attrs: {
      "label": "娱乐",
      "value": "entertainment"
    }
  }, [_c('text', [_vm._v("娱乐。。。")])]), _c('u-tab', {
    attrs: {
      "label": "八卦",
      "value": "gossip"
    }
  }, [_c('text', [_vm._v("八卦。。。")])]), _c('u-tab', {
    attrs: {
      "label": "体育",
      "value": "sport"
    }
  }, [_c('text', [_vm._v("体育。。。")])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-cells"]
  }, [_c('u-cell-group', {
    attrs: {
      "title": "个人信息"
    }
  }, [_c('u-cell', {
    attrs: {
      "text": "用户名",
      "value": "erguotou",
      "showArrow": ""
    }
  }), _c('u-cell', {
    attrs: {
      "text": "邮箱",
      "value": "erguotou525@gmail.com",
      "showArrow": ""
    }
  }), _c('u-cell', {
    attrs: {
      "text": "性别",
      "value": _vm.gender === 'male' ? '男' : '女'
    }
  }, [_c('u-switch', {
    attrs: {
      "value": _vm.gender,
      "size": "small",
      "trueValue": "male",
      "falseValue": "female"
    },
    on: {
      "input": function (v) { return _vm.gender = v; }
    },
    slot: "right"
  })], 1)], 1), _c('u-cell-group', [_c('u-cell', {
    attrs: {
      "text": "分享名片",
      "showArrow": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.share($event)
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "color": "#489cff",
      "size": "30px"
    },
    slot: "icon"
  }, [_vm._v("")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    style: _vm.style,
    on: {
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["loading"]
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "src": "https://media.giphy.com/media/l0Iy9nEw0XgbPeT16/giphy.gif"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-selects"]
  }, [_c('u-select', {
    ref: "select1",
    staticClass: ["select-item"],
    attrs: {
      "value": _vm.select1,
      "placeholder": "请选择",
      "data": _vm.data1
    },
    on: {
      "input": function (v) { return _vm.select1 = v; },
      "expand": function($event) {
        _vm.$store.dispatch('toggleSelect', true)
      }
    }
  }), _c('u-select', {
    ref: "select2",
    staticClass: ["select-item"],
    attrs: {
      "value": _vm.select2,
      "placeholder": "请选择",
      "data": _vm.data2
    },
    on: {
      "input": function (v) { return _vm.select2 = v; },
      "expand": function($event) {
        _vm.$store.dispatch('toggleSelect', true)
      }
    }
  }), _c('u-select', {
    staticClass: ["select-item"],
    attrs: {
      "placeholder": "请选择",
      "disabled": "",
      "data": _vm.data1
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-radios"]
  }, [_c('div', {
    staticClass: ["radio-block"]
  }, [_c('u-radio', {
    staticClass: ["radio-item"],
    attrs: {
      "value": _vm.checked1,
      "val": "r1"
    },
    on: {
      "input": function (v) { return _vm.checked1 = v; }
    }
  }, [_vm._v("按钮1")]), _c('u-radio', {
    staticClass: ["radio-item"],
    attrs: {
      "value": _vm.checked1,
      "val": "r2"
    },
    on: {
      "input": function (v) { return _vm.checked1 = v; }
    }
  }, [_vm._v("按钮2")])], 1), _c('div', {
    staticClass: ["radio-block"]
  }, [_c('u-radio', {
    staticClass: ["radio-item"],
    attrs: {
      "value": _vm.checked2,
      "val": "r3",
      "disabled": ""
    },
    on: {
      "input": function (v) { return _vm.checked2 = v; }
    }
  }, [_vm._v("按钮3")]), _c('u-radio', {
    staticClass: ["radio-item"],
    attrs: {
      "value": _vm.checked2,
      "val": "r4",
      "disabled": ""
    },
    on: {
      "input": function (v) { return _vm.checked2 = v; }
    }
  }, [_vm._v("按钮4")])], 1), _c('div', {
    staticClass: ["radio-block"]
  }, [_c('u-switch', {
    attrs: {
      "value": _vm.checked3,
      "size": "small",
      "trueValue": "male",
      "falseValue": "female"
    },
    on: {
      "input": function (v) { return _vm.checked3 = v; }
    }
  }), _c('u-switch', {
    staticStyle: {
      marginLeft: "100px"
    },
    attrs: {
      "value": _vm.checked4,
      "trueValue": "male",
      "falseValue": "female"
    },
    on: {
      "input": function (v) { return _vm.checked4 = v; }
    }
  })], 1), _c('div', {
    staticClass: ["radio-block"]
  }, [_c('u-switch', {
    attrs: {
      "value": _vm.checked5,
      "size": "large",
      "trueValue": "male",
      "falseValue": "female"
    },
    on: {
      "input": function (v) { return _vm.checked5 = v; }
    }
  }), _c('u-switch', {
    staticStyle: {
      marginLeft: "100px"
    },
    attrs: {
      "value": _vm.checked6,
      "disabled": "",
      "trueValue": "ok",
      "falseValue": "no"
    },
    on: {
      "input": function (v) { return _vm.checked6 = v; }
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["text"]
  }, [_vm._v("路由模式:" + _vm._s(_vm.content))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell"]
  }, [_c('div', {
    staticClass: ["left"]
  }, [_vm._t("icon"), _c('text', {
    staticClass: ["text"],
    style: [_vm.$slots.icon ? {
      'margin-left': '20px'
    } : {}]
  }, [_vm._v(_vm._s(_vm.text))])], 2), _c('div', {
    staticClass: ["right"]
  }, [_c('text', {
    staticClass: ["value"],
    style: [_vm.$slots.right ? {
      'margin-right': '20px'
    } : {}]
  }, [_vm._v(_vm._s(_vm.value))]), _vm._t("right"), (_vm.showArrow) ? _c('div', {
    staticClass: ["arrow"]
  }) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["checkbox"],
    on: {
      "click": _vm.change
    }
  }, [_c('text', {
    staticClass: ["box"],
    class: [_vm.checked ? 'box-checked' : '', _vm.disabled ? 'box-disabled' : '']
  }), (_vm.checked) ? _c('text', {
    staticClass: ["icon"],
    class: [_vm.disabled ? 'icon-disabled' : '']
  }) : _vm._e(), (_vm.$slots.default) ? _c('text', {
    staticClass: ["text"],
    class: [_vm.disabled ? 'text-disabled' : '']
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["checker"],
    on: {
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: ["box"],
    class: [_vm.checked ? 'box-checked' : '']
  }), (_vm.checked) ? _c('text', {
    staticClass: ["icon"]
  }) : _vm._e(), (_vm.$slots.default) ? _c('text', {
    staticClass: ["text"]
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mask"],
    class: [_vm.show ? 'active' : ''],
    style: [{
      'justify-content': _vm.justify
    }],
    on: {
      "click": function($event) {
        _vm.$emit('click', false)
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["u-h7"],
    class: ['color-' + _vm.color]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["u-h6"],
    class: ['color-' + _vm.color]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["u-h5"],
    class: ['color' + _vm.color]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["u-h4"],
    class: ['color-' + _vm.color]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["u-h3"],
    class: ['color-' + _vm.color]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-homepage", "grid"]
  }, [_c('div', {
    staticClass: ["grid-row"]
  }, [_c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/color')
      }
    }
  }, [_c('text', [_vm._v("颜色")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/text')
      }
    }
  }, [_c('text', [_vm._v("文本")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/iconfont')
      }
    }
  }, [_c('text', [_vm._v("iconfont")])])]), _c('div', {
    staticClass: ["grid-row"]
  }, [_c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/button')
      }
    }
  }, [_c('text', [_vm._v("按钮")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/radio')
      }
    }
  }, [_c('text', [_vm._v("单选")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/checkbox')
      }
    }
  }, [_c('text', [_vm._v("多选")])])]), _c('div', {
    staticClass: ["grid-row"]
  }, [_c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/input')
      }
    }
  }, [_c('text', [_vm._v("输入框(待优化)")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/input-number')
      }
    }
  }, [_c('text', [_vm._v("数字选择")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/select')
      }
    }
  }, [_c('text', [_vm._v("下拉(待优化)")])])]), _c('div', {
    staticClass: ["grid-row"]
  }, [_c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": _vm.showLoading
    }
  }, [_c('text', [_vm._v("加载动画(仅做参考)")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/tab')
      }
    }
  }, [_c('text', [_vm._v("Tab页(待修复)")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/progress')
      }
    }
  }, [_c('text', [_vm._v("进度条")])])]), _c('div', {
    staticClass: ["grid-row"]
  }, [_c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/cell')
      }
    }
  }, [_c('text', [_vm._v("列表")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/navbar')
      }
    }
  }, [_c('text', [_vm._v("Navbar")])]), _c('div', {
    staticClass: ["grid-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/checker')
      }
    }
  }, [_c('text', [_vm._v("全选")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["u-h2"],
    class: ['color-' + _vm.color]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["u-h1"],
    class: ['color-' + _vm.color]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-checkers"],
    staticStyle: {
      padding: "20px"
    }
  }, [_c('div', {
    staticClass: ["row"]
  }, [_c('v-checker', {
    attrs: {
      "value": _vm.subs
    },
    on: {
      "input": _vm.onSelectAll
    }
  }, [_vm._v("全选/非全选")])], 1), _c('div', {
    staticClass: ["row"]
  }, [_c('v-checker', {
    attrs: {
      "value": _vm.subs[0]
    },
    on: {
      "input": function (v) { return _vm.onChange(0, v); }
    }
  }, [_vm._v("item1")])], 1), _c('div', {
    staticClass: ["row"]
  }, [_c('v-checker', {
    attrs: {
      "value": _vm.subs[1]
    },
    on: {
      "input": function (v) { return _vm.onChange(1, v); }
    }
  }, [_vm._v("item2")])], 1), _c('div', {
    staticClass: ["row"]
  }, [_c('v-checker', {
    attrs: {
      "value": _vm.subs[2]
    },
    on: {
      "input": function (v) { return _vm.onChange(2, v); }
    }
  }, [_vm._v("item3")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-input-number"]
  }, [_c('div', {
    staticClass: ["number-row"]
  }, [_c('div', {
    staticClass: ["number-cell"]
  }, [_c('u-input-number', {
    attrs: {
      "value": _vm.number1
    },
    on: {
      "input": function (v) { return _vm.number1 = v; }
    }
  })], 1), _c('div', {
    staticClass: ["number-cell"]
  }, [_c('u-input-number', {
    attrs: {
      "value": _vm.number2,
      "min": 0,
      "max": 20
    },
    on: {
      "input": function (v) { return _vm.number2 = v; }
    }
  })], 1)]), _c('div', {
    staticClass: ["number-row"]
  }, [_c('div', {
    staticClass: ["number-cell"]
  }, [_c('u-input-number', {
    attrs: {
      "value": _vm.number3,
      "disabled": ""
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["radio"],
    on: {
      "click": _vm.change
    }
  }, [_c('div', {
    staticClass: ["icon"],
    class: _vm.clz
  }), (_vm.$slots.default) ? _c('text', {
    staticClass: ["text"],
    class: [_vm.disabled ? 'text-disabled' : '']
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["btn"]
  }, [_c('text', {
    staticClass: ["btn-text"],
    class: ['btn-tp-' + _vm.type, 'btn-sz-' + _vm.size, 'btn-text-' + _vm.type, _vm.disabled ? ('btn-tpd-' + _vm.type) : ''],
    on: {
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-iconfonts"]
  }, [_c('div', {
    staticClass: ["icon-row"]
  }, [_c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1)]), _c('div', {
    staticClass: ["icon-row"]
  }, [_c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1)]), _c('div', {
    staticClass: ["icon-row"]
  }, [_c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1)]), _c('div', {
    staticClass: ["icon-row"]
  }, [_c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1), _c('div', {
    staticClass: ["icon-cell"]
  }, [_c('v-icon', [_vm._v("")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"],
    class: ['bg-' + _vm.type],
    style: _vm.bg ? {
      'background-color': _vm.bg
    } : {}
  }, [_c('div', {
    staticClass: ["left"]
  }, [(!_vm.$slots.left) ? _c('text', [_vm._v(" ")]) : _vm._e(), _vm._t("left")], 2), _c('text', {
    staticClass: ["title"]
  }, [_vm._t("default")], 2), _c('div', {
    staticClass: ["right"]
  }, [(!_vm.$slots.right) ? _c('text', [_vm._v(" ")]) : _vm._t("right")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-field"]
  }, [(_vm.$slots.left) ? _c('div', {
    staticClass: ["left"]
  }, [_vm._t("left")], 2) : _vm._e(), _c('input', {
    ref: "input",
    staticClass: ["input"],
    class: [!!_vm.$slots.left ? 'with-left' : '', !!_vm.$slots.right ? 'with-right' : ''],
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "value": _vm.inputVal
    },
    on: {
      "input": _vm.handleInput,
      "change": function (e) { return _vm.$emit('change', e); },
      "focus": function (e) { return _vm.$emit('focus', e); },
      "blur": function (e) { return _vm.$emit('blur', e); },
      "return": function (e) { return _vm.$emit('return', e); }
    }
  }), (_vm.$slots.right) ? _c('div', {
    staticClass: ["right"]
  }, [_vm._t("right")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-inputs"]
  }, [_c('u-input', {
    staticClass: ["input-item"],
    attrs: {
      "placeholder": "input something"
    },
    model: {
      value: (_vm.input1),
      callback: function(value) {
        _vm.input1 = value
      }
    }
  }), _c('u-input', {
    ref: "input2",
    staticClass: ["input-item"],
    attrs: {
      "placeholder": "input something"
    },
    model: {
      value: (_vm.input2),
      callback: function(value) {
        _vm.input2 = value
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "size": "24px"
    },
    slot: "left"
  }, [_vm._v("")]), (!!_vm.input2) ? _c('v-icon', {
    attrs: {
      "size": "20px"
    },
    on: {
      "click": function($event) {
        _vm.input2 = '';
        _vm.$refs.input2.focus()
      }
    },
    slot: "right"
  }, [_vm._v("")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-buttons"]
  }, [_c('u-button', {
    staticClass: ["button-item"],
    on: {
      "click": _vm.toast
    }
  }, [_vm._v("primary")]), _c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("primary disabled")]), _c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "type": "highlight"
    },
    on: {
      "click": _vm.showVueVersion
    }
  }, [_vm._v("highlight")]), _c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "type": "highlight",
      "disabled": ""
    }
  }, [_vm._v("highlight disabled")]), _c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "type": "minor"
    },
    on: {
      "click": _vm.getDocument
    }
  }, [_vm._v("minor")]), _c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "type": "minor",
      "disabled": ""
    }
  }, [_vm._v("minor disabled")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["select"]
  }, [_c('div', {
    staticClass: ["item"],
    class: [_vm.disabled ? 'disabled' : ''],
    on: {
      "click": _vm.toggle
    }
  }, [_c('text', {
    staticClass: ["text"],
    class: [!_vm.text ? 'placeholder' : '', _vm.disabled ? 'text-disabled' : '']
  }, [_vm._v(_vm._s(_vm.text ? _vm.text : _vm.placeholder))]), (!_vm.disabled) ? _c('text', {
    staticClass: ["icon"]
  }) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    ref: "tabs",
    staticClass: ["tab-nav"]
  }, [_vm._l((_vm.tabs), function(tab) {
    return _c('text', {
      staticClass: ["tab"],
      class: [tab.value === _vm.value ? 'tab-active' : ''],
      on: {
        "click": function($event) {
          _vm.selectTab(tab)
        }
      }
    }, [_vm._v(_vm._s(tab.label))])
  }), _c('div', {
    ref: "line",
    staticClass: ["line"],
    style: {
      width: _vm.lineWidth + 'px'
    }
  })], 2), _c('div', {
    staticClass: ["tab-content"]
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-group"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [(!_vm.$slots.left && _vm.title) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._t("left"), _vm._t("right")], 2), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-navbar"]
  }, [_c('router-view'), _c('u-navbar', {
    attrs: {
      "value": _vm.$route.path,
      "router": ""
    }
  }, [_c('u-navbar-item', {
    attrs: {
      "label": "首页",
      "index": "/navbar"
    }
  }, [_vm._v("")]), _c('u-navbar-item', {
    attrs: {
      "label": "购物车",
      "index": "/navbar/cart"
    }
  }, [_vm._v("")]), _c('u-navbar-item', {
    attrs: {
      "label": "订单",
      "index": "/navbar/order"
    }
  }, [_vm._v("")]), _c('u-navbar-item', {
    attrs: {
      "label": "我的",
      "index": "/navbar/my"
    }
  }, [_vm._v("")])], 1), _c('text', {
    staticStyle: {
      paddingLeft: "20px",
      lineHeight: "88px",
      color: "#667180",
      marginTop: "40px"
    }
  }, [_vm._v("索引模式:" + _vm._s(_vm.activeIndex))]), _c('u-navbar', {
    attrs: {
      "value": _vm.activeIndex
    },
    on: {
      "input": function (v) { return _vm.activeIndex = v; }
    }
  }, [_c('u-navbar-item', {
    attrs: {
      "label": "首页",
      "index": "1-1"
    }
  }, [_vm._v("")]), _c('u-navbar-item', {
    attrs: {
      "label": "购物车",
      "index": "1-2"
    }
  }, [_vm._v("")]), _c('u-navbar-item', {
    attrs: {
      "label": "订单",
      "index": "1-3"
    }
  }, [_vm._v("")]), _c('u-navbar-item', {
    attrs: {
      "label": "我的",
      "index": "1-4"
    }
  }, [_vm._v("")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-checkboxs"]
  }, [_c('div', {
    staticClass: ["checkbox-block"]
  }, [_c('u-checkbox', {
    staticClass: ["checkbox-item"],
    attrs: {
      "value": _vm.checked1,
      "val": "c1"
    },
    on: {
      "input": function (v) { return _vm.checked1 = v; }
    }
  }, [_vm._v("按钮1")]), _c('u-checkbox', {
    staticClass: ["checkbox-item"],
    attrs: {
      "value": _vm.checked1,
      "val": "c2"
    },
    on: {
      "input": function (v) { return _vm.checked1 = v; }
    }
  }, [_vm._v("按钮2")]), _c('u-checkbox', {
    staticClass: ["checkbox-item"],
    attrs: {
      "value": _vm.checked1,
      "val": "c3",
      "disabled": ""
    },
    on: {
      "input": function (v) { return _vm.checked1 = v; }
    }
  }, [_vm._v("按钮3")]), _c('u-checkbox', {
    staticClass: ["checkbox-item"],
    attrs: {
      "value": _vm.checked1,
      "val": "c4",
      "disabled": ""
    },
    on: {
      "input": function (v) { return _vm.checked1 = v; }
    }
  }, [_vm._v("按钮4")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-colors"]
  }, [_c('text', {
    staticClass: ["text-block", "t-primary"]
  }, [_vm._v("#489cff")]), _c('text', {
    staticClass: ["text-block", "t-highlight"]
  }, [_vm._v("#ff8038")]), _c('text', {
    staticClass: ["text-block", "t-home-icon"]
  }, [_vm._v("#21d3ac")]), _c('text', {
    staticClass: ["text-block", "t-star-icon"]
  }, [_vm._v("#ffd56c")]), _c('text', {
    staticClass: ["text-block", "t-text-highlight"]
  }, [_vm._v("#233040")]), _c('text', {
    staticClass: ["text-block", "t-text-primary"]
  }, [_vm._v("#667180")]), _c('text', {
    staticClass: ["text-block", "t-text-minor"]
  }, [_vm._v("#98a4b3")]), _c('text', {
    staticClass: ["text-block", "t-text-disable"]
  }, [_vm._v("#e6ecf2")]), _c('text', {
    staticClass: ["text-block", "t-background"]
  }, [_vm._v("#f9fafc")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-app"],
    staticStyle: {
      flexDirection: "column"
    },
    style: {
      height: _vm.appHeight
    }
  }, [(_vm.$route.path !== '/') ? _c('u-header', [_c('v-icon', {
    attrs: {
      "color": "#fff"
    },
    on: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    },
    slot: "left"
  }, [_vm._v("")]), _vm._v("\n    " + _vm._s(_vm.$store.getters.title) + "\n    "), _c('v-icon', {
    attrs: {
      "color": "#fff"
    },
    on: {
      "click": _vm.copy
    },
    slot: "right"
  }, [_vm._v("")])], 1) : _vm._e(), _c('router-view'), _c('u-mask', {
    attrs: {
      "show": _vm.$store.getters.maskVisiable
    },
    on: {
      "click": _vm.onMaskClick
    }
  }, [_c('u-select-popup', {
    attrs: {
      "maskShow": _vm.$store.getters.maskVisiable
    },
    on: {
      "hideMask": function($event) {
        _vm.$store.dispatch('toggleMask', false)
      }
    }
  }), (_vm.$store.getters.loadingVisiable) ? _c('u-loading', [_vm._v("2秒后消失")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["navbar-item"],
    on: {
      "click": _vm.onClick
    }
  }, [(!_vm.actived) ? _vm._t("normal") : _vm._t("active"), (!_vm.$slots.normal && _vm.$parent && _vm.$parent.imageType === 'iconfont') ? _c('text', {
    staticClass: ["icon-font"],
    class: [_vm.actived ? 'icon-font-active' : ''],
    style: {
      fontFamily: _vm.fontFamily
    }
  }, [_vm._t("default")], 2) : _vm._e(), (!_vm.$slots.normal && _vm.$parent && _vm.$parent.imageType === 'image') ? _c('image', {
    staticClass: ["icon-image"],
    attrs: {
      "src": _vm.actived ? _vm.normalUrl : _vm.activeUrl
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["text"],
    class: [_vm.actived ? 'text-active' : '']
  }, [_vm._v(_vm._s(_vm.label))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-number"],
    class: [_vm.disabled ? 'input-number-disabled' : '']
  }, [_c('text', {
    staticClass: ["minus"],
    class: [_vm.minusDisabled ? 'minus-disabled' : ''],
    on: {
      "click": _vm.minus
    }
  }, [_vm._v("-")]), (!_vm.disabled) ? _c('input', {
    staticClass: ["input"],
    class: [_vm.disabled ? 'input-disabled' : ''],
    attrs: {
      "type": "tel",
      "value": _vm.value
    },
    on: {
      "input": _vm.onInput
    }
  }) : _c('text', {
    staticClass: ["input"],
    class: [_vm.disabled ? 'input-disabled' : '']
  }, [_vm._v(_vm._s(_vm.value))]), _c('text', {
    staticClass: ["plus"],
    class: [_vm.plusDisabled ? 'plus-disabled' : ''],
    on: {
      "click": _vm.plus
    }
  }, [_vm._v("+")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ })
/******/ ]);