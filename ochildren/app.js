/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		16: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([509,17]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1027:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1028:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/polyfill/lib/index.js
var lib = __webpack_require__(513);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/react-burger-menu/lib/BurgerMenu.js
var BurgerMenu = __webpack_require__(462);

// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__(137);
var react_responsive_default = /*#__PURE__*/__webpack_require__.n(react_responsive);

// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js + 4 modules
var index_esm = __webpack_require__(52);

// EXTERNAL MODULE: ./src/components/Header/index.scss
var components_Header = __webpack_require__(722);

// EXTERNAL MODULE: ./src/assets/img/logo.png
var logo = __webpack_require__(724);

// CONCATENATED MODULE: ./src/components/Header/index.js





 // fichier scss




var Header_Header = function Header(_ref) {
  var loggedIn = _ref.loggedIn,
      handleLogOut = _ref.handleLogOut;
  return react_default.a.createElement("header", {
    className: "header"
  }, react_default.a.createElement(react_responsive_default.a, {
    query: "(max-width: 768px)"
  }, react_default.a.createElement(BurgerMenu["bubble"], {
    right: true,
    width: "250px"
  }, react_default.a.createElement("p", {
    className: "header-p"
  }, react_default.a.createElement(index_esm["d" /* FaHome */], {
    size: "1.5em",
    color: "#fff"
  }), react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    className: "header-link",
    exact: true,
    to: "/"
  }, "Accueil")), loggedIn ? react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("p", {
    className: "header-p"
  }, react_default.a.createElement(index_esm["e" /* FaSignInAlt */], {
    size: "1.5em",
    color: "#fff"
  }), react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    className: "header-link",
    to: "/profile"
  }, "Mon Compte")), react_default.a.createElement("p", {
    className: "header-p"
  }, react_default.a.createElement(index_esm["e" /* FaSignInAlt */], {
    size: "1.5em",
    color: "#fff"
  }), react_default.a.createElement("a", {
    className: "header-link bm-item",
    href: "#",
    onClick: handleLogOut
  }, "Se d\xE9connecter"))) : react_default.a.createElement("p", {
    className: "header-p"
  }, react_default.a.createElement(index_esm["e" /* FaSignInAlt */], {
    size: "1.5em",
    color: "#fff"
  }), react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    className: "header-link",
    to: "/login"
  }, "Connexion")))), react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    className: "header-link",
    to: "/"
  }, react_default.a.createElement("img", {
    className: "header-img",
    src: "./src/assets/img/logo.png",
    alt: "logo du site"
  })), react_default.a.createElement(react_responsive_default.a, {
    query: "(min-width: 769px)"
  }, react_default.a.createElement("nav", {
    className: "header-nav-desktop"
  }, react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(index_esm["d" /* FaHome */], {
    size: "1.7em",
    color: "lightgreen"
  }), react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    className: "header-link bm-item",
    exact: true,
    to: "/"
  }, "Accueil")), loggedIn ? react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("li", null, react_default.a.createElement(index_esm["e" /* FaSignInAlt */], {
    size: "1.7em",
    color: "lightgreen"
  }), react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    className: "header-link bm-item",
    to: "/profile"
  }, "Mon Compte")), react_default.a.createElement("li", null, react_default.a.createElement(index_esm["e" /* FaSignInAlt */], {
    size: "1.7em",
    color: "lightgreen"
  }), react_default.a.createElement("a", {
    className: "header-link bm-item",
    href: "#",
    onClick: handleLogOut
  }, "Se d\xE9connecter"))) : react_default.a.createElement("li", null, react_default.a.createElement(index_esm["e" /* FaSignInAlt */], {
    size: "1.7em",
    color: "lightgreen"
  }), react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    className: "header-link bm-item",
    to: "/login"
  }, "Connexion"))))));
};

Header_Header.propTypes = {
  loggedIn: prop_types_default.a.bool.isRequired,
  handleLogOut: prop_types_default.a.func.isRequired
};
/* harmony default export */ var src_components_Header = (Header_Header);
// EXTERNAL MODULE: ./src/store/reducer.js + 1 modules
var reducer = __webpack_require__(9);

// CONCATENATED MODULE: ./src/containers/Header.js
/**
 * Npm import
 */

/**
 * Local import
 */




var Header_mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

var Header_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogOut: function handleLogOut(e) {
      e.preventDefault();
      dispatch(Object(reducer["F" /* logOut */])());
    }
  };
};

/* harmony default export */ var containers_Header = (Object(es["b" /* connect */])(Header_mapStateToProps, Header_mapDispatchToProps)(src_components_Header));
// EXTERNAL MODULE: ./node_modules/react-typed/dist/react-typed.js
var react_typed = __webpack_require__(464);
var react_typed_default = /*#__PURE__*/__webpack_require__.n(react_typed);

// EXTERNAL MODULE: ./src/components/Home/index.scss
var components_Home = __webpack_require__(727);

// EXTERNAL MODULE: ./node_modules/semantic-ui-css/semantic.min.css
var semantic_min = __webpack_require__(729);

// CONCATENATED MODULE: ./src/components/Home/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Home_Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClickCard", function (e) {
      e.currentTarget.classList.toggle('is-flipped');
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dataForHomePage = this.props.dataForHomePage;
      dataForHomePage();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          dataHomePage = _this$props.dataHomePage,
          infosCatAge = _this$props.infosCatAge;
      return react_default.a.createElement("div", {
        className: "home"
      }, react_default.a.createElement("h1", null, react_default.a.createElement(react_typed_default.a, {
        className: "home-title",
        strings: ["Bienvenue sur O'Children"],
        showCursor: false,
        typeSpeed: 50
      })), react_default.a.createElement("div", {
        className: "container"
      }, dataHomePage.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            image = _ref.image;
        return react_default.a.createElement("div", {
          key: id,
          className: "wrapper"
        }, react_default.a.createElement("div", {
          onClick: _this2.handleClickCard,
          className: "card"
        }, react_default.a.createElement("div", {
          className: "card__face card__face--front"
        }, react_default.a.createElement("div", {
          className: "home-category"
        }, react_default.a.createElement("img", {
          src: "http://92.243.9.67/plateforme-educative-api/public/uploads/images/".concat(image),
          alt: "icon"
        }), react_default.a.createElement("h2", null, name))), react_default.a.createElement("div", {
          className: "card__face card__face--back"
        }, react_default.a.createElement("div", {
          className: "home-category home-category--link"
        }, react_default.a.createElement("p", {
          className: ""
        }, react_default.a.createElement(react_router_dom["b" /* Link */], {
          onClick: function onClick() {
            return infosCatAge(name, id);
          },
          to: "/home-game/".concat(id)
        }, "jouer"))))));
      })));
    }
  }]);

  return Home;
}(react["Component"]);

Home_Home.propTypes = {
  dataHomePage: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    id: prop_types_default.a.number,
    name: prop_types_default.a.string,
    description: prop_types_default.a.string,
    image: prop_types_default.a.string
  })).isRequired,
  dataForHomePage: prop_types_default.a.func.isRequired,
  infosCatAge: prop_types_default.a.func.isRequired
};
/* harmony default export */ var src_components_Home = (Home_Home);
// CONCATENATED MODULE: ./src/containers/Home.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var Home_mapStateToProps = function mapStateToProps(state) {
  return {
    dataHomePage: state.dataHomePage
  };
};

var Home_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dataForHomePage: function dataForHomePage() {
      dispatch(Object(reducer["o" /* dataForHomePage */])());
    },
    infosCatAge: function infosCatAge(category, id) {
      dispatch(Object(reducer["D" /* infosCatAge */])(category, id));
    }
  };
};

/* harmony default export */ var containers_Home = (Object(es["b" /* connect */])(Home_mapStateToProps, Home_mapDispatchToProps)(src_components_Home));
// EXTERNAL MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js + 21 modules
var Form = __webpack_require__(1099);

// EXTERNAL MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js + 3 modules
var Button = __webpack_require__(1103);

// CONCATENATED MODULE: ./src/modules/verifyForm/index.ts
function verifyForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { verifyForm_typeof = function _typeof(obj) { return typeof obj; }; } else { verifyForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return verifyForm_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { verifyForm_defineProperty(target, key, source[key]); }); } return target; }

function verifyForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function verifyForm_possibleConstructorReturn(self, call) { if (call && (verifyForm_typeof(call) === "object" || typeof call === "function")) { return call; } return verifyForm_assertThisInitialized(self); }

function verifyForm_getPrototypeOf(o) { verifyForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return verifyForm_getPrototypeOf(o); }

function verifyForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function verifyForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) verifyForm_setPrototypeOf(subClass, superClass); }

function verifyForm_setPrototypeOf(o, p) { verifyForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return verifyForm_setPrototypeOf(o, p); }

function verifyForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var VerifyForm =
/*#__PURE__*/
function (_Component) {
  verifyForm_inherits(VerifyForm, _Component);

  function VerifyForm(props) {
    var _this;

    verifyForm_classCallCheck(this, VerifyForm);

    _this = verifyForm_possibleConstructorReturn(this, verifyForm_getPrototypeOf(VerifyForm).call(this, props));

    verifyForm_defineProperty(verifyForm_assertThisInitialized(_this), "verify", {
      inputs: undefined,
      errorComp: undefined,
      successComp: undefined,
      // init the verify
      init: function init(inputsEntry) {
        return _this.verify.inputs = inputsEntry.reduce(function (acc, cur) {
          return _objectSpread({}, acc, verifyForm_defineProperty({}, cur, true));
        }, {});
      },
      // cond
      cond: function (_cond) {
        function cond(_x, _x2) {
          return _cond.apply(this, arguments);
        }

        cond.toString = function () {
          return _cond.toString();
        };

        return cond;
      }(function (cond, inputName) {
        var newInputs = _objectSpread({}, _this.verify.inputs, verifyForm_defineProperty({}, inputName, cond));

        _this.verify.inputs = newInputs;
        return newInputs;
      }),
      verifyAll: function verifyAll() {
        return Object.values(_this.verify.inputs).filter(function (e) {
          return e;
        }).length > 0;
      },
      verifyOne: function verifyOne(inputName, inputValue, callback) {
        if (inputValue.length <= 0) return;
        return callback(_this.verify.inputs[inputName]);
      },
      // set the error comp
      setErrorComp: function setErrorComp(comp) {
        return _this.verify.errorComp = comp;
      },
      // set the success comp
      setSuccessComp: function setSuccessComp(comp) {
        return _this.verify.successComp = comp;
      }
    });

    return _this;
  }

  return VerifyForm;
}(react["Component"]);


// EXTERNAL MODULE: ./src/components/Login/style.scss
var style = __webpack_require__(243);

// CONCATENATED MODULE: ./src/components/Login/ForgottenPassword.js
function ForgottenPassword_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ForgottenPassword_typeof = function _typeof(obj) { return typeof obj; }; } else { ForgottenPassword_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ForgottenPassword_typeof(obj); }

function ForgottenPassword_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ForgottenPassword_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ForgottenPassword_createClass(Constructor, protoProps, staticProps) { if (protoProps) ForgottenPassword_defineProperties(Constructor.prototype, protoProps); if (staticProps) ForgottenPassword_defineProperties(Constructor, staticProps); return Constructor; }

function ForgottenPassword_possibleConstructorReturn(self, call) { if (call && (ForgottenPassword_typeof(call) === "object" || typeof call === "function")) { return call; } return ForgottenPassword_assertThisInitialized(self); }

function ForgottenPassword_getPrototypeOf(o) { ForgottenPassword_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ForgottenPassword_getPrototypeOf(o); }

function ForgottenPassword_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ForgottenPassword_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ForgottenPassword_setPrototypeOf(subClass, superClass); }

function ForgottenPassword_setPrototypeOf(o, p) { ForgottenPassword_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ForgottenPassword_setPrototypeOf(o, p); }

function ForgottenPassword_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ForgottenPassword_ForgottenPassword =
/*#__PURE__*/
function (_VerifyForm) {
  ForgottenPassword_inherits(ForgottenPassword, _VerifyForm);

  function ForgottenPassword(props) {
    var _this;

    ForgottenPassword_classCallCheck(this, ForgottenPassword);

    _this = ForgottenPassword_possibleConstructorReturn(this, ForgottenPassword_getPrototypeOf(ForgottenPassword).call(this, props));

    ForgottenPassword_defineProperty(ForgottenPassword_assertThisInitialized(_this), "handleEmailChange", function (name) {
      return function (e) {
        var value = e.target.value;

        _this.props.handleChange(value, name);

        _this.verify.cond(function () {
          switch (name) {
            case 'email':
              return !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(value);

            default:
              return false;
          }
        }(), name);
      };
    });

    _this.verify.init(['email']);

    _this.verify.setErrorComp(function (text) {
      return react_default.a.createElement("span", {
        style: {
          color: 'red'
        }
      }, text);
    });

    _this.verify.setSuccessComp(function (text) {
      return react_default.a.createElement("span", {
        style: {
          color: 'green'
        }
      }, text);
    });

    _this.state = {
      inputsErrors: _this.verify.inputs
    };
    return _this;
  }

  ForgottenPassword_createClass(ForgottenPassword, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          email = _this$props.email,
          handleForgottenSubmit = _this$props.handleForgottenSubmit,
          loading = _this$props.loading;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h1", null, "Changez votre mot de passe"), react_default.a.createElement("br", null), react_default.a.createElement("p", null, "Suivez les instructions ci-dessous"), react_default.a.createElement("br", null), react_default.a.createElement(Form["a" /* default */], {
        onSubmit: handleForgottenSubmit
      }, react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Veuillez renseigner votre Email", react_default.a.createElement("input", {
        id: "email",
        placeholder: "Email",
        type: "text",
        onChange: this.handleEmailChange('email'),
        value: email,
        style: {
          borderColor: this.verify.verifyOne('email', email, function (err) {
            return err ? 'red' : 'green';
          })
        }
      })), this.verify.verifyOne('email', email, function (error) {
        return error ? _this2.verify.errorComp("Cette email n'est pas valide") : _this2.verify.successComp('Cette email est valide');
      })), react_default.a.createElement(Button["a" /* default */], {
        disabled: this.verify.verifyAll(),
        id: "new-pw",
        type: "submit"
      }, "ok")), loading && react_default.a.createElement("p", {
        className: "treatment"
      }, "Traitement en cours ..."));
    }
  }]);

  return ForgottenPassword;
}(VerifyForm);

/* harmony default export */ var Login_ForgottenPassword = (ForgottenPassword_ForgottenPassword);
// CONCATENATED MODULE: ./src/containers/ForgottenPassword.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var ForgottenPassword_mapStateToProps = function mapStateToProps(state) {
  return {
    email: state.loginForm.email,
    loading: state.loading
  };
};

var ForgottenPassword_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChange: function handleChange(text, name) {
      return dispatch(Object(reducer["B" /* handleLoginChange */])(text, name));
    },
    handleForgottenSubmit: function handleForgottenSubmit() {
      return dispatch(Object(reducer["s" /* forgottenSubmit */])());
    }
  };
}; // Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)


var ForgottenPasswordContainer = Object(es["b" /* connect */])(ForgottenPassword_mapStateToProps, ForgottenPassword_mapDispatchToProps)(Login_ForgottenPassword);
/**
 * Export
 */

/* harmony default export */ var containers_ForgottenPassword = (ForgottenPasswordContainer);
// EXTERNAL MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js + 4 modules
var Message = __webpack_require__(1102);

// CONCATENATED MODULE: ./src/components/Login/LoginForm.js
function LoginForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LoginForm_typeof = function _typeof(obj) { return typeof obj; }; } else { LoginForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LoginForm_typeof(obj); }

function LoginForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LoginForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LoginForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) LoginForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) LoginForm_defineProperties(Constructor, staticProps); return Constructor; }

function LoginForm_possibleConstructorReturn(self, call) { if (call && (LoginForm_typeof(call) === "object" || typeof call === "function")) { return call; } return LoginForm_assertThisInitialized(self); }

function LoginForm_getPrototypeOf(o) { LoginForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LoginForm_getPrototypeOf(o); }

function LoginForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LoginForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LoginForm_setPrototypeOf(subClass, superClass); }

function LoginForm_setPrototypeOf(o, p) { LoginForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LoginForm_setPrototypeOf(o, p); }

function LoginForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var LoginForm_LoginForm =
/*#__PURE__*/
function (_VerifyForm) {
  LoginForm_inherits(LoginForm, _VerifyForm);

  function LoginForm(props) {
    var _this;

    LoginForm_classCallCheck(this, LoginForm);

    _this = LoginForm_possibleConstructorReturn(this, LoginForm_getPrototypeOf(LoginForm).call(this, props));

    LoginForm_defineProperty(LoginForm_assertThisInitialized(_this), "handleChange", function (name) {
      return function (evt) {
        var value = evt.target.value;

        _this.props.handleLoginChange(value, name);

        return _this.setState({
          inputsErrors: _this.verify.cond(function () {
            if (value.length <= 0) return true;

            switch (name) {
              case 'email':
                return !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(value);

              default:
                return false;
            }
          }(), name)
        });
      };
    });

    LoginForm_defineProperty(LoginForm_assertThisInitialized(_this), "handleSubmit", function (evt) {
      evt.preventDefault();

      _this.props.onLoginSubmit();
    });

    _this.verify.init(['username', 'password']);

    _this.verify.setErrorComp(function (text) {
      return react_default.a.createElement("span", {
        style: {
          color: 'red'
        }
      }, text);
    });

    _this.verify.setSuccessComp(function (text) {
      return react_default.a.createElement("span", {
        style: {
          color: 'green'
        }
      }, text);
    });

    _this.state = {
      inputsErrors: _this.verify.inputs
    };
    return _this;
  }

  LoginForm_createClass(LoginForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.loginReset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          password = _this$props.password,
          email = _this$props.email,
          loading = _this$props.loading,
          error = _this$props.error,
          loggedIn = _this$props.loggedIn;
      if (loggedIn) return react_default.a.createElement(react_router["a" /* Redirect */], {
        to: "/"
      });
      return react_default.a.createElement(Form["a" /* default */], {
        className: "login-form",
        onSubmit: this.handleSubmit
      }, error && react_default.a.createElement(Message["a" /* default */], {
        negative: true
      }, react_default.a.createElement(Message["a" /* default */].Header, null, "La connexion a \xE9chou\xE9"), react_default.a.createElement("p", null, "Verifiez vos ifentifiants")), react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Email", react_default.a.createElement("input", {
        id: "email",
        placeholder: "Email",
        type: "text",
        value: email,
        onChange: this.handleChange('email'),
        style: {
          borderColor: this.verify.verifyOne('email', email, function (err) {
            return err ? 'red' : 'green';
          })
        }
      }), this.verify.verifyOne('email', email, function (err) {
        return err ? _this2.verify.errorComp("Cette email n'est pas valide") : _this2.verify.successComp('Votre email est valide');
      }))), react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "password"
      }, "Password", react_default.a.createElement("input", {
        id: "password",
        placeholder: "Password",
        type: "password",
        value: password,
        onChange: this.handleChange('password')
      }))), react_default.a.createElement("div", {
        className: "ui two buttons"
      }, react_default.a.createElement(Button["a" /* default */], {
        disabled: loading && this.verify.verifyAll(),
        loading: loading,
        id: "connexion"
      }, "Connexion"), react_default.a.createElement(react_router_dom["b" /* Link */], {
        to: "/register",
        id: "inscription",
        className: "ui button"
      }, "Inscription")));
    }
  }]);

  return LoginForm;
}(VerifyForm);

/* harmony default export */ var Login_LoginForm = (LoginForm_LoginForm);
// CONCATENATED MODULE: ./src/containers/LoginForm.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var LoginForm_mapStateToProps = function mapStateToProps(state) {
  return {
    password: state.loginForm.password,
    email: state.loginForm.email,
    loggedIn: state.loginForm.loggedIn,
    loading: state.loginForm.loading,
    error: state.loginForm.error
  };
};

var LoginForm_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLoginChange: function handleLoginChange(text, name) {
      return dispatch(Object(reducer["B" /* handleLoginChange */])(text, name));
    },
    onLoginSubmit: function onLoginSubmit() {
      return dispatch(Object(reducer["J" /* loginSubmit */])());
    },
    loginReset: function loginReset() {
      return dispatch(Object(reducer["I" /* loginReset */])());
    }
  };
}; // Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)


var LoginFormContainer = Object(es["b" /* connect */])(LoginForm_mapStateToProps, LoginForm_mapDispatchToProps)(Login_LoginForm);
/**
 * Export
 */

/* harmony default export */ var containers_LoginForm = (LoginFormContainer);
// CONCATENATED MODULE: ./src/components/Login/index.js
/* eslint-disable react/prefer-stateless-function */
 // comps





var Login_Login = function Login(_ref) {
  var viewLogin = _ref.viewLogin,
      changeViewLogin = _ref.changeViewLogin,
      resetPassword = _ref.resetPassword;

  var handleClick = function handleClick(currentView) {
    return function () {
      changeViewLogin(currentView);
    };
  };

  return react_default.a.createElement(react["Fragment"], null, viewLogin === 'login' && react_default.a.createElement("div", {
    className: "login"
  }, resetPassword && react_default.a.createElement("p", null, "Un nouveau mot de passe vous a \xE9t\xE9 envoy\xE9."), react_default.a.createElement(containers_LoginForm, null), react_default.a.createElement("a", {
    className: "app-link",
    onClick: handleClick('forgottenPassword')
  }, "Mot de passe oubli\xE9")), viewLogin === 'forgottenPassword' && react_default.a.createElement("div", {
    id: "forgotten-pw"
  }, react_default.a.createElement("div", {
    className: "forgotten-form"
  }, react_default.a.createElement(containers_ForgottenPassword, null), react_default.a.createElement("a", {
    className: "app-link",
    onClick: handleClick('login')
  }, "Retourner sur la page pr\xE9c\xE8dente"))));
};

/* harmony default export */ var components_Login = (Login_Login);
// CONCATENATED MODULE: ./src/containers/LoginIndex.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var LoginIndex_mapStateToProps = function mapStateToProps(state) {
  return {
    viewLogin: state.viewLogin,
    resetPassword: state.loginForm.resetPassword
  };
};

var LoginIndex_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeViewLogin: function changeViewLogin(currentView) {
      return dispatch(Object(reducer["l" /* changeViewLogin */])(currentView));
    }
  };
};

/* harmony default export */ var LoginIndex = (Object(es["b" /* connect */])(LoginIndex_mapStateToProps, LoginIndex_mapDispatchToProps)(components_Login));
// EXTERNAL MODULE: ./src/components/Register/style.scss
var Register_style = __webpack_require__(189);

// CONCATENATED MODULE: ./src/components/Register/FormUserDetails.js
function FormUserDetails_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FormUserDetails_typeof = function _typeof(obj) { return typeof obj; }; } else { FormUserDetails_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FormUserDetails_typeof(obj); }

function FormUserDetails_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FormUserDetails_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FormUserDetails_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormUserDetails_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormUserDetails_defineProperties(Constructor, staticProps); return Constructor; }

function FormUserDetails_possibleConstructorReturn(self, call) { if (call && (FormUserDetails_typeof(call) === "object" || typeof call === "function")) { return call; } return FormUserDetails_assertThisInitialized(self); }

function FormUserDetails_getPrototypeOf(o) { FormUserDetails_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FormUserDetails_getPrototypeOf(o); }

function FormUserDetails_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FormUserDetails_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FormUserDetails_setPrototypeOf(subClass, superClass); }

function FormUserDetails_setPrototypeOf(o, p) { FormUserDetails_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FormUserDetails_setPrototypeOf(o, p); }

function FormUserDetails_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FormUserDetails_FormUserDetails =
/*#__PURE__*/
function (_VerifyForm) {
  FormUserDetails_inherits(FormUserDetails, _VerifyForm);

  function FormUserDetails(props) {
    var _this;

    FormUserDetails_classCallCheck(this, FormUserDetails);

    _this = FormUserDetails_possibleConstructorReturn(this, FormUserDetails_getPrototypeOf(FormUserDetails).call(this, props));

    FormUserDetails_defineProperty(FormUserDetails_assertThisInitialized(_this), "continue", function (evt) {
      evt.preventDefault();

      _this.props.nextStep();
    });

    FormUserDetails_defineProperty(FormUserDetails_assertThisInitialized(_this), "verifyChange", function (name) {
      return function (e) {
        var value = e.target.value;

        _this.setState({
          inputsErrors: _this.verify.cond(function () {
            switch (name) {
              case 'username':
                return value.length <= 0;

              case 'firstName':
                return value.length <= 0;

              case 'lastName':
                return value.length <= 0;

              case 'email':
                return !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(value);

              case 'password':
                _this.setState({
                  inputsErrors: _this.verify.cond(value !== _this.props.confirmPasswordValue, 'confirmPassword')
                });

                return value.length < 8;

              case 'confirmPassword':
                return value !== _this.props.passwordValue;

              default:
                return false;
            }
          }(), name)
        });

        _this.props.handleRegisterChange(name)(e);
      };
    });

    _this.verify.init(['username', 'firstName', 'lastName', 'email', 'password', 'confirmPassword']);

    _this.verify.setErrorComp(function (text) {
      return react_default.a.createElement("span", {
        style: {
          color: 'red'
        }
      }, text);
    });

    _this.verify.setSuccessComp(function (text) {
      return react_default.a.createElement("span", {
        style: {
          color: 'green'
        }
      }, text);
    });

    _this.state = {
      inputsErrors: _this.verify.inputs
    };
    return _this;
  }

  FormUserDetails_createClass(FormUserDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          emailValue = _this$props.emailValue,
          firstNameValue = _this$props.firstNameValue,
          lastNameValue = _this$props.lastNameValue,
          passwordValue = _this$props.passwordValue,
          confirmPasswordValue = _this$props.confirmPasswordValue,
          usernameValue = _this$props.usernameValue;
      return react_default.a.createElement("div", {
        className: "form-user-details"
      }, react_default.a.createElement(Form["a" /* default */], null, react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "username"
      }, "Identifiant", react_default.a.createElement("input", {
        id: "username",
        placeholder: "Entrez votre Identifiant",
        onChange: this.verifyChange('username'),
        value: usernameValue,
        style: {
          borderColor: this.verify.verifyOne('username', usernameValue, function (err) {
            return err ? 'red' : 'green';
          })
        }
      }), this.verify.verifyOne('username', usernameValue, function (err) {
        return err ? _this2.verify.errorComp("Cette identifiant n'est pas valide") : _this2.verify.successComp('Cette identifiant est valide');
      }))), react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "firstName"
      }, "Pr\xE9nom", react_default.a.createElement("input", {
        id: "firstName",
        placeholder: "Entrez votre Pr\xE9nom",
        onChange: this.verifyChange('firstName'),
        value: firstNameValue,
        style: {
          borderColor: this.verify.verifyOne('firstName', firstNameValue, function (err) {
            return err ? 'red' : 'green';
          })
        }
      }), this.verify.verifyOne('firstName', firstNameValue, function (err) {
        return err ? _this2.verify.errorComp("Ce prénom n'est pas valide") : _this2.verify.successComp('Ce prénom est valide');
      }))), react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "lastName"
      }, "Nom", react_default.a.createElement("input", {
        id: "lastName",
        placeholder: "Entrez votre Nom",
        onChange: this.verifyChange('lastName'),
        value: lastNameValue,
        style: {
          borderColor: this.verify.verifyOne('lastName', lastNameValue, function (err) {
            return err ? 'red' : 'green';
          })
        }
      }), this.verify.verifyOne('lastName', lastNameValue, function (err) {
        return err ? _this2.verify.errorComp("Ce nom n'est pas valide") : _this2.verify.successComp('Ce nom est valide');
      }))), react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Email", react_default.a.createElement("input", {
        id: "email",
        placeholder: "Entrez votre Email",
        onChange: this.verifyChange('email'),
        value: emailValue,
        style: {
          borderColor: this.verify.verifyOne('email', emailValue, function (err) {
            return err ? 'red' : 'green';
          })
        }
      }), this.verify.verifyOne('email', emailValue, function (err) {
        return err ? _this2.verify.errorComp("Cette email n'est pas valide") : _this2.verify.successComp('Cette email est valide');
      }))), react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "password"
      }, "Mot de passe", react_default.a.createElement("input", {
        id: "password",
        placeholder: "Entrez votre mot de passe",
        onChange: this.verifyChange('password'),
        value: passwordValue,
        type: "password",
        style: {
          borderColor: this.verify.verifyOne('password', passwordValue, function (err) {
            return err ? 'red' : 'green';
          })
        }
      }), this.verify.verifyOne('password', passwordValue, function (err) {
        return err ? _this2.verify.errorComp("Votre mot de passe n'est pas assez long" // eslint-disable-line indent
        ) // eslint-disable-line indent
        : _this2.verify.successComp('Ce mot de passe est valide');
      }))), react_default.a.createElement(Form["a" /* default */].Field, null, react_default.a.createElement("label", {
        htmlFor: "confirmPassword"
      }, "Confirmation du mot de passe", react_default.a.createElement("input", {
        id: "confirmPassword",
        placeholder: "Confirmez votre mot de passe",
        onChange: this.verifyChange('confirmPassword'),
        value: confirmPasswordValue,
        type: "password",
        style: {
          borderColor: this.verify.verifyOne('confirmPassword', confirmPasswordValue, function (err) {
            return err ? 'red' : 'green';
          })
        }
      }), this.verify.verifyOne('confirmPassword', confirmPasswordValue, function (err) {
        return err ? _this2.verify.errorComp('Ce mot de passe ne corespond pas') : _this2.verify.successComp('Ce mot de passe corespond');
      }))), react_default.a.createElement(Button["a" /* default */], {
        disabled: this.verify.verifyAll(),
        id: "continue-button",
        primary: true,
        onClick: this["continue"]
      }, "Continuer")));
    }
  }]);

  return FormUserDetails;
}(VerifyForm);

/* harmony default export */ var Register_FormUserDetails = (FormUserDetails_FormUserDetails);
// EXTERNAL MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/List.js + 6 modules
var List = __webpack_require__(1101);

// CONCATENATED MODULE: ./src/components/Register/Confirm.js
function Confirm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Confirm_typeof = function _typeof(obj) { return typeof obj; }; } else { Confirm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Confirm_typeof(obj); }

function Confirm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Confirm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Confirm_createClass(Constructor, protoProps, staticProps) { if (protoProps) Confirm_defineProperties(Constructor.prototype, protoProps); if (staticProps) Confirm_defineProperties(Constructor, staticProps); return Constructor; }

function Confirm_possibleConstructorReturn(self, call) { if (call && (Confirm_typeof(call) === "object" || typeof call === "function")) { return call; } return Confirm_assertThisInitialized(self); }

function Confirm_getPrototypeOf(o) { Confirm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Confirm_getPrototypeOf(o); }

function Confirm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Confirm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Confirm_setPrototypeOf(subClass, superClass); }

function Confirm_setPrototypeOf(o, p) { Confirm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Confirm_setPrototypeOf(o, p); }

function Confirm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Confirm_Confirm =
/*#__PURE__*/
function (_Component) {
  Confirm_inherits(Confirm, _Component);

  function Confirm() {
    var _getPrototypeOf2;

    var _this;

    Confirm_classCallCheck(this, Confirm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Confirm_possibleConstructorReturn(this, (_getPrototypeOf2 = Confirm_getPrototypeOf(Confirm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Confirm_defineProperty(Confirm_assertThisInitialized(_this), "continue", function (evt) {
      evt.preventDefault();
      var _this$props = _this.props,
          signupSubmit = _this$props.signupSubmit,
          loading = _this$props.loading;
      if (loading) return;
      signupSubmit();
    });

    Confirm_defineProperty(Confirm_assertThisInitialized(_this), "back", function (evt) {
      evt.preventDefault();

      _this.props.prevStep();
    });

    return _this;
  }

  Confirm_createClass(Confirm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          signedUp = _this$props2.signedUp,
          nextStep = _this$props2.nextStep,
          error = _this$props2.error;
      if (signedUp || error) nextStep();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          emailValue = _this$props3.emailValue,
          firstNameValue = _this$props3.firstNameValue,
          lastNameValue = _this$props3.lastNameValue,
          usernameValue = _this$props3.usernameValue,
          loading = _this$props3.loading;
      return react_default.a.createElement("div", {
        className: "confirmation"
      }, react_default.a.createElement(List["a" /* default */], null, react_default.a.createElement(List["a" /* default */].Item, null, react_default.a.createElement(List["a" /* default */].Header, null, "Identifiant"), usernameValue), react_default.a.createElement(List["a" /* default */].Item, null, react_default.a.createElement(List["a" /* default */].Header, null, "Pr\xE9nom"), firstNameValue), react_default.a.createElement(List["a" /* default */].Item, null, react_default.a.createElement(List["a" /* default */].Header, null, "Nom"), lastNameValue), react_default.a.createElement(List["a" /* default */].Item, null, react_default.a.createElement(List["a" /* default */].Header, null, "Email"), emailValue)), react_default.a.createElement(Button["a" /* default */], {
        id: "continue-button",
        primary: true,
        loading: loading,
        onClick: this["continue"]
      }, "Continuer"), react_default.a.createElement(Button["a" /* default */], {
        id: "back-button",
        primary: false,
        disabled: loading,
        onClick: this.back
      }, "Pr\xE9cedent"));
    }
  }]);

  return Confirm;
}(react["Component"]);

Confirm_Confirm.propTypes = {
  signedUp: prop_types_default.a.bool.isRequired,
  error: prop_types_default.a.bool.isRequired,
  loading: prop_types_default.a.bool.isRequired,
  nextStep: prop_types_default.a.func.isRequired,
  prevStep: prop_types_default.a.func.isRequired,
  signupSubmit: prop_types_default.a.func.isRequired,
  emailValue: prop_types_default.a.string.isRequired,
  firstNameValue: prop_types_default.a.string.isRequired,
  lastNameValue: prop_types_default.a.string.isRequired,
  usernameValue: prop_types_default.a.string.isRequired
};
/* harmony default export */ var Register_Confirm = (Confirm_Confirm);
// CONCATENATED MODULE: ./src/components/Register/Success.js



var Success_Success = function Success() {
  return react_default.a.createElement("div", {
    className: "success"
  }, react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("h1", null, "Merci de vous \xEAtre enregist\xE9!"), react_default.a.createElement("p", null, "Vous allez recevoir un email de confirmation")));
};

/* harmony default export */ var Register_Success = (Success_Success);
// CONCATENATED MODULE: ./src/components/Register/Error.js



var Error_Error = function Error() {
  return react_default.a.createElement("div", {
    className: "error"
  }, react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("h1", null, "Une erreur est survenu"), react_default.a.createElement("p", null, "Vous", ' ', react_default.a.createElement("a", {
    href: "",
    onClick: function onClick() {
      return window.location.reload();
    }
  }, "pouvez retourner sur la page d'inscription"), ' ', "pour ressayer")));
};

/* harmony default export */ var Register_Error = (Error_Error);
// CONCATENATED MODULE: ./src/components/Register/index.js
function Register_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Register_typeof = function _typeof(obj) { return typeof obj; }; } else { Register_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Register_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Register_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Register_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Register_createClass(Constructor, protoProps, staticProps) { if (protoProps) Register_defineProperties(Constructor.prototype, protoProps); if (staticProps) Register_defineProperties(Constructor, staticProps); return Constructor; }

function Register_possibleConstructorReturn(self, call) { if (call && (Register_typeof(call) === "object" || typeof call === "function")) { return call; } return Register_assertThisInitialized(self); }

function Register_getPrototypeOf(o) { Register_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Register_getPrototypeOf(o); }

function Register_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Register_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Register_setPrototypeOf(subClass, superClass); }

function Register_setPrototypeOf(o, p) { Register_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Register_setPrototypeOf(o, p); }

function Register_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable default-case */

/* eslint-disable react/require-render-return */







var Register_Register =
/*#__PURE__*/
function (_Component) {
  Register_inherits(Register, _Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    Register_classCallCheck(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Register_possibleConstructorReturn(this, (_getPrototypeOf2 = Register_getPrototypeOf(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Register_defineProperty(Register_assertThisInitialized(_this), "state", {
      step: 1
    });

    Register_defineProperty(Register_assertThisInitialized(_this), "nextStep", function () {
      var step = _this.state.step;

      _this.setState({
        step: step + 1
      });
    });

    Register_defineProperty(Register_assertThisInitialized(_this), "prevStep", function () {
      var step = _this.state.step;

      _this.setState({
        step: step - 1
      });
    });

    return _this;
  }

  Register_createClass(Register, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.signeUpReset();
    } // etape suivante

  }, {
    key: "render",
    value: function render() {
      var step = this.state.step;
      var error = this.props.error;

      switch (step) {
        case 1:
          return react_default.a.createElement(Register_FormUserDetails, _extends({
            nextStep: this.nextStep
          }, this.props));

        case 2:
          return react_default.a.createElement(Register_Confirm, _extends({
            nextStep: this.nextStep,
            prevStep: this.prevStep
          }, this.props));

        case 3:
          return !error ? react_default.a.createElement(Register_Success, null) : react_default.a.createElement(Register_Error, null);

        default:
          return react_default.a.createElement("div", null);
      }
    }
  }]);

  return Register;
}(react["Component"]);

Register_Register.propTypes = {
  error: prop_types_default.a.bool.isRequired,
  signeUpReset: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_Register = (Register_Register);
// CONCATENATED MODULE: ./src/containers/Register.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var Register_mapStateToProps = function mapStateToProps(state) {
  return {
    emailValue: state.registerForm.email,
    firstNameValue: state.registerForm.firstName,
    lastNameValue: state.registerForm.lastName,
    usernameValue: state.registerForm.username,
    passwordValue: state.registerForm.password,
    confirmPasswordValue: state.registerForm.confirmPassword,
    loading: state.registerForm.loading,
    signedUp: state.registerForm.signedUp,
    error: state.registerForm.error
  };
};

var Register_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleRegisterChange: function handleRegisterChange(name) {
      return function (e) {
        return dispatch(Object(reducer["Q" /* registerInputChange */])(e.target.value, name));
      };
    },
    signupSubmit: function signupSubmit() {
      return dispatch(Object(reducer["W" /* signupSubmit */])());
    },
    signeUpReset: function signeUpReset() {
      return dispatch(Object(reducer["U" /* signeUpReset */])());
    }
  };
}; // Container


var RegisterContainer = Object(es["b" /* connect */])(Register_mapStateToProps, Register_mapDispatchToProps)(components_Register);
/**
 * Export
 */

/* harmony default export */ var containers_Register = (RegisterContainer);
// EXTERNAL MODULE: ./src/components/GameMenu/index.scss
var components_GameMenu = __webpack_require__(842);

// CONCATENATED MODULE: ./src/components/GameMenu/index.js






var GameMenu_GameMenu = function GameMenu(_ref) {
  var category = _ref.category;
  return react_default.a.createElement("div", {
    className: "gameMenu"
  }, react_default.a.createElement("nav", {
    className: "gameMenu-nav"
  }, react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/discovery"
  }, react_default.a.createElement(index_esm["b" /* FaEye */], {
    className: "gameMenu-icon--discovery"
  }), react_default.a.createElement("span", {
    className: "gameMenu-link--discovery"
  }, "Discovery"))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/quizzes/".concat(category)
  }, react_default.a.createElement(index_esm["a" /* FaCheckSquare */], {
    className: "gameMenu-icon--square"
  }), react_default.a.createElement("span", {
    className: "gameMenu-link--quiz"
  }, "Quiz"))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/games/".concat(category)
  }, react_default.a.createElement(index_esm["c" /* FaGamepad */], {
    className: "gameMenu-icon--jeux"
  }), react_default.a.createElement("span", {
    className: "gameMenu-link--jeux"
  }, "Jeux"))))));
};

GameMenu_GameMenu.propTypes = {
  category: prop_types_default.a.string.isRequired
};
/* harmony default export */ var src_components_GameMenu = (GameMenu_GameMenu);
// EXTERNAL MODULE: ./src/components/HomeGame/index.scss
var components_HomeGame = __webpack_require__(844);

// CONCATENATED MODULE: ./src/components/HomeGame/index.js
function HomeGame_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HomeGame_typeof = function _typeof(obj) { return typeof obj; }; } else { HomeGame_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HomeGame_typeof(obj); }

function HomeGame_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HomeGame_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HomeGame_createClass(Constructor, protoProps, staticProps) { if (protoProps) HomeGame_defineProperties(Constructor.prototype, protoProps); if (staticProps) HomeGame_defineProperties(Constructor, staticProps); return Constructor; }

function HomeGame_possibleConstructorReturn(self, call) { if (call && (HomeGame_typeof(call) === "object" || typeof call === "function")) { return call; } return HomeGame_assertThisInitialized(self); }

function HomeGame_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HomeGame_getPrototypeOf(o) { HomeGame_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HomeGame_getPrototypeOf(o); }

function HomeGame_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HomeGame_setPrototypeOf(subClass, superClass); }

function HomeGame_setPrototypeOf(o, p) { HomeGame_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HomeGame_setPrototypeOf(o, p); }






var HomeGame_HomeGame =
/*#__PURE__*/
function (_Component) {
  HomeGame_inherits(HomeGame, _Component);

  function HomeGame() {
    HomeGame_classCallCheck(this, HomeGame);

    return HomeGame_possibleConstructorReturn(this, HomeGame_getPrototypeOf(HomeGame).apply(this, arguments));
  }

  HomeGame_createClass(HomeGame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          dataForHomeGame = _this$props.dataForHomeGame,
          category = _this$props.category;
      dataForHomeGame(category);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          category = _this$props2.category,
          dataHomeGame = _this$props2.dataHomeGame;
      return react_default.a.createElement("div", {
        className: "homeGame"
      }, react_default.a.createElement("div", {
        className: "homeGame-title"
      }, react_default.a.createElement("h1", null, " ", dataHomeGame.description, " ")), react_default.a.createElement(src_components_GameMenu, {
        category: category
      }));
    }
  }]);

  return HomeGame;
}(react["Component"]);

HomeGame_HomeGame.propTypes = {
  category: prop_types_default.a.string.isRequired,
  dataHomeGame: prop_types_default.a.object.isRequired
};
/* harmony default export */ var src_components_HomeGame = (HomeGame_HomeGame);
// CONCATENATED MODULE: ./src/containers/HomeGame.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var HomeGame_mapStateToProps = function mapStateToProps(state) {
  return {
    dataHomeGame: state.dataHomeGame
  };
};

var HomeGame_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dataForHomeGame: function dataForHomeGame(categoryId) {
      dispatch(Object(reducer["n" /* dataForHomeGame */])(categoryId));
    }
  };
};

/* harmony default export */ var containers_HomeGame = (Object(es["b" /* connect */])(HomeGame_mapStateToProps, HomeGame_mapDispatchToProps)(src_components_HomeGame));
// EXTERNAL MODULE: ./src/components/CategoriesQuizzs/index.scss
var components_CategoriesQuizzs = __webpack_require__(846);

// CONCATENATED MODULE: ./src/components/CategoriesQuizzs/index.js
function CategoriesQuizzs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CategoriesQuizzs_typeof = function _typeof(obj) { return typeof obj; }; } else { CategoriesQuizzs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CategoriesQuizzs_typeof(obj); }

function CategoriesQuizzs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CategoriesQuizzs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CategoriesQuizzs_createClass(Constructor, protoProps, staticProps) { if (protoProps) CategoriesQuizzs_defineProperties(Constructor.prototype, protoProps); if (staticProps) CategoriesQuizzs_defineProperties(Constructor, staticProps); return Constructor; }

function CategoriesQuizzs_possibleConstructorReturn(self, call) { if (call && (CategoriesQuizzs_typeof(call) === "object" || typeof call === "function")) { return call; } return CategoriesQuizzs_assertThisInitialized(self); }

function CategoriesQuizzs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CategoriesQuizzs_getPrototypeOf(o) { CategoriesQuizzs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CategoriesQuizzs_getPrototypeOf(o); }

function CategoriesQuizzs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CategoriesQuizzs_setPrototypeOf(subClass, superClass); }

function CategoriesQuizzs_setPrototypeOf(o, p) { CategoriesQuizzs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CategoriesQuizzs_setPrototypeOf(o, p); }






var CategoriesQuizzs_CategoriesQuizzs =
/*#__PURE__*/
function (_Component) {
  CategoriesQuizzs_inherits(CategoriesQuizzs, _Component);

  function CategoriesQuizzs() {
    CategoriesQuizzs_classCallCheck(this, CategoriesQuizzs);

    return CategoriesQuizzs_possibleConstructorReturn(this, CategoriesQuizzs_getPrototypeOf(CategoriesQuizzs).apply(this, arguments));
  }

  CategoriesQuizzs_createClass(CategoriesQuizzs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var getAllCategoriesQuizzs = this.props.getAllCategoriesQuizzs;
      getAllCategoriesQuizzs(); // Lancement de l'action pour récupérer toutes les catégories de quiz
    }
  }, {
    key: "render",
    value: function render() {
      var categoriesQuizzs = this.props.categoriesQuizzs;
      return react_default.a.createElement("div", {
        className: "categories"
      }, react_default.a.createElement("h1", null, "Les cat\xE9gories de nos quiz"), react_default.a.createElement("div", {
        className: "wrapper-categories"
      }, categoriesQuizzs.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            image = _ref.image;
        return react_default.a.createElement(react_router_dom["b" /* Link */], {
          key: id,
          className: "categories-quiz",
          to: "/category/".concat(id)
        }, react_default.a.createElement("img", {
          src: "http://92.243.9.67/plateforme-educative-api/public/uploads/images/".concat(image),
          alt: "icon"
        }), react_default.a.createElement("span", null, name));
      })));
    }
  }]);

  return CategoriesQuizzs;
}(react["Component"]);

CategoriesQuizzs_CategoriesQuizzs.propTypes = {
  getAllCategoriesQuizzs: prop_types_default.a.func.isRequired,
  categoriesQuizzs: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
};
/* harmony default export */ var src_components_CategoriesQuizzs = (CategoriesQuizzs_CategoriesQuizzs);
// CONCATENATED MODULE: ./src/containers/CategoriesQuizzs.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var CategoriesQuizzs_mapStateToProps = function mapStateToProps(state) {
  return {
    categoriesQuizzs: state.categoriesQuizzs
  };
};

var CategoriesQuizzs_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllCategoriesQuizzs: function getAllCategoriesQuizzs() {
      dispatch(Object(reducer["t" /* getAllCategoriesQuizzs */])());
    }
  };
};

/* harmony default export */ var containers_CategoriesQuizzs = (Object(es["b" /* connect */])(CategoriesQuizzs_mapStateToProps, CategoriesQuizzs_mapDispatchToProps)(src_components_CategoriesQuizzs));
// EXTERNAL MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js + 10 modules
var Modal = __webpack_require__(1100);

// EXTERNAL MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js + 4 modules
var Image = __webpack_require__(488);

// EXTERNAL MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js + 2 modules
var elements_Header_Header = __webpack_require__(1105);

// EXTERNAL MODULE: ./src/components/Discovery/index.scss
var components_Discovery = __webpack_require__(848);

// CONCATENATED MODULE: ./src/components/Discovery/index.js
function Discovery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Discovery_typeof = function _typeof(obj) { return typeof obj; }; } else { Discovery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Discovery_typeof(obj); }

function Discovery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Discovery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Discovery_createClass(Constructor, protoProps, staticProps) { if (protoProps) Discovery_defineProperties(Constructor.prototype, protoProps); if (staticProps) Discovery_defineProperties(Constructor, staticProps); return Constructor; }

function Discovery_possibleConstructorReturn(self, call) { if (call && (Discovery_typeof(call) === "object" || typeof call === "function")) { return call; } return Discovery_assertThisInitialized(self); }

function Discovery_getPrototypeOf(o) { Discovery_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Discovery_getPrototypeOf(o); }

function Discovery_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Discovery_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Discovery_setPrototypeOf(subClass, superClass); }

function Discovery_setPrototypeOf(o, p) { Discovery_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Discovery_setPrototypeOf(o, p); }

function Discovery_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Discovery's home

var Discovery_Home =
/*#__PURE__*/
function (_Component) {
  Discovery_inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Discovery_classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Discovery_possibleConstructorReturn(this, (_getPrototypeOf2 = Discovery_getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Discovery_defineProperty(Discovery_assertThisInitialized(_this), "state", {
      open1: false,
      open2: false,
      open3: false
    });

    Discovery_defineProperty(Discovery_assertThisInitialized(_this), "show1", function (dimmer1) {
      return function () {
        return _this.setState({
          dimmer1: dimmer1,
          open1: true
        });
      };
    });

    Discovery_defineProperty(Discovery_assertThisInitialized(_this), "show2", function (dimmer2) {
      return function () {
        return _this.setState({
          dimmer2: dimmer2,
          open2: true
        });
      };
    });

    Discovery_defineProperty(Discovery_assertThisInitialized(_this), "show3", function (dimmer3) {
      return function () {
        return _this.setState({
          dimmer3: dimmer3,
          open3: true
        });
      };
    });

    Discovery_defineProperty(Discovery_assertThisInitialized(_this), "close1", function () {
      return _this.setState({
        open1: false
      });
    });

    Discovery_defineProperty(Discovery_assertThisInitialized(_this), "close2", function () {
      return _this.setState({
        open2: false
      });
    });

    Discovery_defineProperty(Discovery_assertThisInitialized(_this), "close3", function () {
      return _this.setState({
        open3: false
      });
    });

    return _this;
  }

  Discovery_createClass(Home, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open1 = _this$state.open1,
          dimmer1 = _this$state.dimmer1;
      var _this$state2 = this.state,
          open2 = _this$state2.open2,
          dimmer2 = _this$state2.dimmer2;
      var _this$state3 = this.state,
          open3 = _this$state3.open3,
          dimmer3 = _this$state3.dimmer3;
      return react_default.a.createElement("main", {
        className: "discovery"
      }, react_default.a.createElement("h1", {
        className: "discovery--title"
      }, "Bienvenu sur le dicovery"), react_default.a.createElement("p", {
        className: "discovery--description"
      }, "Discovery est un livre interactif. Avec lui, tu decouvriras different th\xE8mes!"), react_default.a.createElement("ul", {
        className: "discovery--theme-list"
      }, react_default.a.createElement("li", {
        className: "discovery--theme-list--elem"
      }, react_default.a.createElement(Modal["a" /* default */], {
        className: "space_modal",
        dimmer: dimmer1,
        open: open1,
        onClose: this.close1,
        trigger: react_default.a.createElement(Image["a" /* default */], {
          src: "https://image.flaticon.com/icons/svg/1055/1055646.svg",
          size: "small",
          onClick: this.show1('blurring')
        })
      }, react_default.a.createElement(Modal["a" /* default */].Header, null, "Space Discovery "), react_default.a.createElement(Modal["a" /* default */].Content, {
        image: true
      }, react_default.a.createElement(Image["a" /* default */], {
        wrapped: true,
        size: "medium",
        src: "https://image.flaticon.com/icons/svg/1485/1485197.svg"
      }), react_default.a.createElement(Modal["a" /* default */].Description, null, react_default.a.createElement(elements_Header_Header["a" /* default */], null, "Space Discovery"), react_default.a.createElement("p", null, "Embarquement imm\xE9diat pour un visite de notre syst\xE8me solaire \xE0 bord de notre fus\xE9e!", ' '), react_default.a.createElement("br", null), react_default.a.createElement("p", null, "Avec le space Discovery, tu vas decouvrir l'origine de la Terre, de quoi est compos\xE9 l'espace ainsi que les plan\xE8tes les plus proche de nous."))), react_default.a.createElement(Modal["a" /* default */].Actions, null, react_default.a.createElement(Button["a" /* default */], {
        color: "red",
        onClick: this.close1,
        size: "large"
      }, "Retour"), react_default.a.createElement(react_router_dom["b" /* Link */], {
        to: "discovery/space&card=1",
        style: {
          color: '#fff',
          textDecoration: 'none'
        }
      }, react_default.a.createElement(Button["a" /* default */], {
        positive: true,
        icon: "checkmark",
        labelPosition: "right",
        size: "large"
      }, "Go!"))))), react_default.a.createElement("li", {
        className: "discovery--theme-list--elem"
      }, react_default.a.createElement(Modal["a" /* default */], {
        className: "science_modal",
        dimmer: dimmer2,
        open: open2,
        onClose: this.close2,
        trigger: react_default.a.createElement(Image["a" /* default */], {
          src: "https://image.flaticon.com/icons/svg/501/501398.svg",
          size: "small",
          onClick: this.show2('blurring')
        })
      }, react_default.a.createElement(Modal["a" /* default */].Header, null, "Science Discovery"), react_default.a.createElement(Modal["a" /* default */].Content, {
        image: true
      }, react_default.a.createElement(Image["a" /* default */], {
        wrapped: true,
        size: "medium",
        src: "https://image.flaticon.com/icons/svg/1028/1028474.svg"
      }), react_default.a.createElement(Modal["a" /* default */].Description, null, react_default.a.createElement(elements_Header_Header["a" /* default */], null, "Science Discovery"), react_default.a.createElement("p", null, "Si tu veux d\xE9couvrir de quoi se compose un laboratoire, voir des bact\xE8ries en grand et comprendre comment sont fait nos m\xE9dicament?"), react_default.a.createElement("br", null), react_default.a.createElement("p", null, "C'est par ici!!"))), react_default.a.createElement(Modal["a" /* default */].Actions, null, react_default.a.createElement(Button["a" /* default */], {
        color: "red",
        onClick: this.close2,
        size: "large"
      }, "Retour"), react_default.a.createElement(react_router_dom["b" /* Link */], {
        to: "discovery/science&card=1",
        style: {
          color: '#fff',
          textDecoration: 'none'
        }
      }, react_default.a.createElement(Button["a" /* default */], {
        positive: true,
        icon: "checkmark",
        labelPosition: "right",
        size: "large"
      }, "Go!"))))), react_default.a.createElement("li", {
        className: "discovery--theme-list--elem"
      }, react_default.a.createElement(Modal["a" /* default */], {
        className: "nature_modal",
        dimmer: dimmer3,
        open: open3,
        onClose: this.close3,
        trigger: react_default.a.createElement(Image["a" /* default */], {
          src: "https://image.flaticon.com/icons/svg/1747/1747184.svg",
          size: "small",
          onClick: this.show3('blurring')
        })
      }, react_default.a.createElement(Modal["a" /* default */].Header, null, "Nature Discovery"), react_default.a.createElement(Modal["a" /* default */].Content, {
        image: true
      }, react_default.a.createElement(Image["a" /* default */], {
        wrapped: true,
        size: "medium",
        src: "https://image.flaticon.com/icons/svg/713/713999.svg"
      }), react_default.a.createElement(Modal["a" /* default */].Description, null, react_default.a.createElement(elements_Header_Header["a" /* default */], null, "Nature Discovery"), react_default.a.createElement("p", null, "Et oui! C'est bien beau de voyager dans l'espace, de voir l'infiniment petit, mais il faut aussi avoir les pieds sur terre."), react_default.a.createElement("p", null, "Tellement de beaux paysages et d'esp\xE8ce composent notre plan\xE8te."), react_default.a.createElement("p", null, "Que serait l'homme sans les animaux? Et que serait les animaux sans la nature?"), react_default.a.createElement("p", null), react_default.a.createElement("br", null), react_default.a.createElement("p", null, "Viens vite voyager avec nous!!"))), react_default.a.createElement(Modal["a" /* default */].Actions, null, react_default.a.createElement(Button["a" /* default */], {
        color: "red",
        onClick: this.close3,
        size: "large"
      }, "Retour"), react_default.a.createElement(react_router_dom["b" /* Link */], {
        to: "discovery/nature&card=1",
        style: {
          color: '#fff',
          textDecoration: 'none'
        }
      }, react_default.a.createElement(Button["a" /* default */], {
        positive: true,
        icon: "checkmark",
        labelPosition: "right",
        size: "large"
      }, "Go!")))))));
    }
  }]);

  return Home;
}(react["Component"]); // Discovery dumb


var Discovery_Discovery = function Discovery(_ref) {
  var url = _ref.url;
  return react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: url,
    component: Discovery_Home
  }), react_default.a.createElement(react["Suspense"], {
    fallback: react_default.a.createElement("div", {
      style: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff',
        textAlign: 'center'
      }
    }, "Loading...")
  }, react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "".concat(url, "/:theme&card=:cardId"),
    render: function render(_ref2) {
      var match = _ref2.match;
      var _match$params = match.params,
          theme = _match$params.theme,
          cardId = _match$params.cardId;
      var formatedThemeName = theme.charAt(0).toUpperCase() + theme.slice(1);
      if (formatedThemeName.includes('..')) return react_default.a.createElement("h1", null, "Not found");
      var Theme = Object(react["lazy"])(function () {
        return __webpack_require__(902)("./".concat(formatedThemeName))["catch"](function () {
          return {
            "default": function _default() {
              return react_default.a.createElement("h1", null, "Not found");
            }
          };
        });
      });
      return react_default.a.createElement(Theme, {
        cardId: parseInt(cardId, 10),
        themeName: theme
      });
    }
  })));
};

Discovery_Discovery.propTypes = {
  url: prop_types_default.a.string.isRequired
};
/* harmony default export */ var src_components_Discovery = (Discovery_Discovery);
// EXTERNAL MODULE: ./src/components/Quizzs/index.scss
var components_Quizzs = __webpack_require__(903);

// CONCATENATED MODULE: ./src/components/Quizzs/index.js
function Quizzs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Quizzs_typeof = function _typeof(obj) { return typeof obj; }; } else { Quizzs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Quizzs_typeof(obj); }

function Quizzs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Quizzs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Quizzs_createClass(Constructor, protoProps, staticProps) { if (protoProps) Quizzs_defineProperties(Constructor.prototype, protoProps); if (staticProps) Quizzs_defineProperties(Constructor, staticProps); return Constructor; }

function Quizzs_possibleConstructorReturn(self, call) { if (call && (Quizzs_typeof(call) === "object" || typeof call === "function")) { return call; } return Quizzs_assertThisInitialized(self); }

function Quizzs_getPrototypeOf(o) { Quizzs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Quizzs_getPrototypeOf(o); }

function Quizzs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Quizzs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Quizzs_setPrototypeOf(subClass, superClass); }

function Quizzs_setPrototypeOf(o, p) { Quizzs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Quizzs_setPrototypeOf(o, p); }

function Quizzs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Quizzs_Quizzs =
/*#__PURE__*/
function (_Component) {
  Quizzs_inherits(Quizzs, _Component);

  function Quizzs() {
    var _getPrototypeOf2;

    var _this;

    Quizzs_classCallCheck(this, Quizzs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Quizzs_possibleConstructorReturn(this, (_getPrototypeOf2 = Quizzs_getPrototypeOf(Quizzs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Quizzs_defineProperty(Quizzs_assertThisInitialized(_this), "handleClick", function () {
      return function () {
        var initialQuiz = _this.props.initialQuiz;
        initialQuiz();
      };
    });

    return _this;
  }

  Quizzs_createClass(Quizzs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getQuizByWorldId = _this$props.getQuizByWorldId,
          worldId = _this$props.worldId,
          handleGetUserInfos = _this$props.handleGetUserInfos,
          loggedIn = _this$props.loggedIn;
      if (loggedIn) handleGetUserInfos();
      getQuizByWorldId(worldId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          quizzsByWorldId = _this$props2.quizzsByWorldId,
          loaded = _this$props2.loaded;
      return react_default.a.createElement("div", {
        className: "quizzs"
      }, loaded && react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h1", null, "Nos quiz"), react_default.a.createElement("div", {
        className: "wrapper-quizzs"
      }, quizzsByWorldId.map(function (_ref) {
        var image = _ref.image,
            id = _ref.id,
            title = _ref.title;
        return react_default.a.createElement("div", {
          className: "quizzs-quiz",
          key: id
        }, react_default.a.createElement("img", {
          src: "http://92.243.9.67/plateforme-educative-api/public/uploads/images/".concat(image),
          alt: "icon"
        }), react_default.a.createElement(react_router_dom["b" /* Link */], {
          onClick: _this2.handleClick(id),
          to: "/quiz/".concat(id)
        }, title));
      }))));
    }
  }]);

  return Quizzs;
}(react["Component"]);

Quizzs_Quizzs.defaultProps = {
  handleGetUserInfos: function handleGetUserInfos() {},
  loggedIn: false
};
Quizzs_Quizzs.propTypes = {
  quizzsByWorldId: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
  initialQuiz: prop_types_default.a.func.isRequired,
  getQuizByWorldId: prop_types_default.a.func.isRequired,
  worldId: prop_types_default.a.string.isRequired,
  handleGetUserInfos: prop_types_default.a.func,
  loggedIn: prop_types_default.a.bool,
  loaded: prop_types_default.a.bool.isRequired
};
/* harmony default export */ var src_components_Quizzs = (Quizzs_Quizzs);
// CONCATENATED MODULE: ./src/containers/Quizzs.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var Quizzs_mapStateToProps = function mapStateToProps(state) {
  return {
    quizzsByWorldId: state.quizzsByWorldId,
    nameCategoryQuiz: state.nameCategoryQuiz,
    loaded: state.quizzesLoaded
  };
};

var Quizzs_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getQuestionsByQuizId: function getQuestionsByQuizId(id) {
      dispatch(Object(reducer["x" /* getQuestionsByQuizId */])(id));
    },
    initialQuiz: function initialQuiz() {
      dispatch(Object(reducer["E" /* initialQuiz */])());
    },
    getQuizByWorldId: function getQuizByWorldId(worldId) {
      dispatch(Object(reducer["y" /* getQuizByWorldId */])(worldId));
    }
  };
};

/* harmony default export */ var containers_Quizzs = (Object(es["b" /* connect */])(Quizzs_mapStateToProps, Quizzs_mapDispatchToProps)(src_components_Quizzs));
// EXTERNAL MODULE: ./src/components/Score/index.scss
var components_Score = __webpack_require__(905);

// CONCATENATED MODULE: ./src/components/Score/index.js




var Score_Score = function Score(_ref) {
  var score = _ref.score,
      messageScore = _ref.messageScore,
      currentNameQuiz = _ref.currentNameQuiz,
      arrayQuizzes = _ref.arrayQuizzes;
  return react_default.a.createElement("div", {
    className: "score"
  }, react_default.a.createElement("h1", null, "Ton score pour le quiz: ", react_default.a.createElement("span", null, currentNameQuiz)), react_default.a.createElement("div", {
    className: "score-title"
  }, react_default.a.createElement("h2", null, " ", score, "/", arrayQuizzes.length), react_default.a.createElement("img", {
    src: "./src/assets/img/".concat(messageScore, ".svg"),
    alt: ""
  })), react_default.a.createElement("p", {
    className: "score-message"
  }, messageScore === 'bad' && "Ce n'est pas grave, le principal c'est de s'amuser tu feras mieux la prochaine fois !", messageScore === 'good' && 'Bravo, tu as réussi le quiz !'));
};

Score_Score.propTypes = {
  score: prop_types_default.a.number.isRequired,
  messageScore: prop_types_default.a.string.isRequired,
  currentNameQuiz: prop_types_default.a.string.isRequired,
  arrayQuizzes: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
};
/* harmony default export */ var src_components_Score = (Score_Score);
// EXTERNAL MODULE: ./src/components/Quiz/index.scss
var components_Quiz = __webpack_require__(907);

// CONCATENATED MODULE: ./src/components/Quiz/index.js
function Quiz_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Quiz_typeof = function _typeof(obj) { return typeof obj; }; } else { Quiz_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Quiz_typeof(obj); }

function Quiz_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Quiz_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Quiz_createClass(Constructor, protoProps, staticProps) { if (protoProps) Quiz_defineProperties(Constructor.prototype, protoProps); if (staticProps) Quiz_defineProperties(Constructor, staticProps); return Constructor; }

function Quiz_possibleConstructorReturn(self, call) { if (call && (Quiz_typeof(call) === "object" || typeof call === "function")) { return call; } return Quiz_assertThisInitialized(self); }

function Quiz_getPrototypeOf(o) { Quiz_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Quiz_getPrototypeOf(o); }

function Quiz_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Quiz_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Quiz_setPrototypeOf(subClass, superClass); }

function Quiz_setPrototypeOf(o, p) { Quiz_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Quiz_setPrototypeOf(o, p); }

function Quiz_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Quiz_Quiz =
/*#__PURE__*/
function (_Component) {
  Quiz_inherits(Quiz, _Component);

  function Quiz() {
    var _getPrototypeOf2;

    var _this;

    Quiz_classCallCheck(this, Quiz);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Quiz_possibleConstructorReturn(this, (_getPrototypeOf2 = Quiz_getPrototypeOf(Quiz)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Quiz_defineProperty(Quiz_assertThisInitialized(_this), "quizQuestion", react_default.a.createRef());

    Quiz_defineProperty(Quiz_assertThisInitialized(_this), "handleClickAnswer", function (e) {
      var _this$props = _this.props,
          questionsOfQuiz = _this$props.questionsOfQuiz,
          getMessage = _this$props.getMessage,
          userResponse = _this$props.userResponse,
          disabledButton = _this$props.disabledButton,
          indexQuiz = _this$props.indexQuiz,
          updateScore = _this$props.updateScore,
          userChosenAnswer = _this$props.userChosenAnswer;
      var userAnswer = e.currentTarget.textContent.trim();
      var goodAnswer = questionsOfQuiz[indexQuiz].right_answer.content;
      var idCurrentQuestion = questionsOfQuiz[indexQuiz].id;

      if (disabledButton) {
        if (userAnswer === goodAnswer) {
          e.currentTarget.classList.add('quiz-responses--good');

          _this.quizQuestion.current.classList.add('quiz-answer--good');

          var messageForUser = 'Bravo, tu as trouvé la bonne réponse !';
          userResponse(userAnswer, true, idCurrentQuestion);
          getMessage(messageForUser);
          updateScore();
        } else {
          e.currentTarget.classList.add('quiz-responses--bad');

          _this.quizQuestion.current.classList.add('quiz-answer--bad');

          var _messageForUser = "D\xE9sol\xE9! Mauvaise r\xE9ponse. La r\xE9ponse est ".concat(goodAnswer);

          userResponse(userAnswer, false, idCurrentQuestion);
          getMessage(_messageForUser);
          var allAnswers = e.currentTarget.parentNode.childNodes;

          for (var i = 0; i < allAnswers.length; i++) {
            if (allAnswers[i].textContent.trim() === goodAnswer) {
              allAnswers[i].classList.add('quiz-responses--good');
            }
          }
        }
      }

      userChosenAnswer();
    });

    Quiz_defineProperty(Quiz_assertThisInitialized(_this), "handleClickNextQuestion", function () {
      _this.props.handleClickButtonNext();

      _this.quizQuestion.current.classList.remove('quiz-answer--bad');

      _this.quizQuestion.current.classList.remove('quiz-answer--good');
    });

    return _this;
  }

  Quiz_createClass(Quiz, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          getQuestionsByQuizId = _this$props2.getQuestionsByQuizId,
          quizId = _this$props2.quizId;
      getQuestionsByQuizId(quizId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          loaded = _this$props3.loaded,
          myScore = _this$props3.myScore,
          descriptionCurrentQuiz = _this$props3.descriptionCurrentQuiz,
          currentNameQuiz = _this$props3.currentNameQuiz,
          questionsOfQuiz = _this$props3.questionsOfQuiz,
          indexQuiz = _this$props3.indexQuiz,
          disabledButton = _this$props3.disabledButton,
          getMyScore = _this$props3.getMyScore,
          score = _this$props3.score,
          message = _this$props3.message,
          messageScore = _this$props3.messageScore;
      return loaded && !myScore ? react_default.a.createElement("div", {
        className: "quiz"
      }, react_default.a.createElement("h1", null, descriptionCurrentQuiz), react_default.a.createElement("div", {
        ref: this.quizQuestion,
        className: "quiz-questions"
      }, react_default.a.createElement("p", {
        className: "quiz-question"
      }, questionsOfQuiz[indexQuiz].content), react_default.a.createElement("div", {
        className: "quiz-responses"
      }, questionsOfQuiz[indexQuiz].answers.map(function (answer) {
        return react_default.a.createElement("p", {
          key: answer.id,
          onClick: _this2.handleClickAnswer
        }, answer.content);
      })), message !== '' && react_default.a.createElement("p", {
        className: questionsOfQuiz[indexQuiz].isRightUserResponse ? 'quiz-message quiz-message--good' : 'quiz-message quiz-message--bad'
      }, message), react_default.a.createElement("p", {
        className: "quiz-nbQuestions"
      }, indexQuiz + 1, " / ", questionsOfQuiz.length), indexQuiz < questionsOfQuiz.length - 1 ? react_default.a.createElement(Button["a" /* default */], {
        disabled: disabledButton,
        onClick: this.handleClickNextQuestion,
        className: "quiz-button-next"
      }, "Question suivante") : react_default.a.createElement(Button["a" /* default */], {
        disabled: disabledButton,
        onClick: getMyScore,
        className: "quiz-button-next"
      }, "Voir mon score"))) : myScore && react_default.a.createElement(src_components_Score, {
        score: score,
        arrayQuizzes: questionsOfQuiz,
        messageScore: messageScore,
        currentNameQuiz: currentNameQuiz
      });
    }
  }]);

  return Quiz;
}(react["Component"]);

Quiz_Quiz.propTypes = {
  handleClickButtonNext: prop_types_default.a.func.isRequired,
  questionsOfQuiz: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
  loaded: prop_types_default.a.bool.isRequired,
  indexQuiz: prop_types_default.a.number.isRequired,
  disabledButton: prop_types_default.a.bool.isRequired,
  userChosenAnswer: prop_types_default.a.func.isRequired,
  message: prop_types_default.a.string.isRequired,
  score: prop_types_default.a.number.isRequired,
  updateScore: prop_types_default.a.func.isRequired,
  getMessage: prop_types_default.a.func.isRequired,
  myScore: prop_types_default.a.bool.isRequired,
  getMyScore: prop_types_default.a.func.isRequired,
  userResponse: prop_types_default.a.func.isRequired,
  messageScore: prop_types_default.a.string.isRequired,
  descriptionCurrentQuiz: prop_types_default.a.string.isRequired,
  currentNameQuiz: prop_types_default.a.string.isRequired,
  getQuestionsByQuizId: prop_types_default.a.func.isRequired,
  quizId: prop_types_default.a.string.isRequired
};
/* harmony default export */ var src_components_Quiz = (Quiz_Quiz);
// CONCATENATED MODULE: ./src/containers/Quiz.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var Quiz_mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    questionsOfQuiz: state.questionsOfQuiz,
    responses: state.responses,
    loaded: state.questionLoaded,
    indexQuiz: state.indexQuiz,
    disabledButton: state.disabledButton,
    message: state.message,
    score: state.score,
    myScore: state.myScore,
    messageScore: Object(reducer["L" /* messageScore */])(state, ownProps.arrayQuizzes.length),
    descriptionCurrentQuiz: state.descriptionCurrentQuiz,
    currentNameQuiz: state.currentNameQuiz
  };
};

var Quiz_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleClickButtonNext: function handleClickButtonNext() {
      dispatch(Object(reducer["A" /* handleClickButtonNext */])());
    },
    userChosenAnswer: function userChosenAnswer() {
      dispatch(Object(reducer["bb" /* userChosenAnswer */])());
    },
    updateScore: function updateScore() {
      dispatch(Object(reducer["Y" /* updateScore */])());
    },
    getMessage: function getMessage(message) {
      dispatch(Object(reducer["u" /* getMessage */])(message));
    },
    getMyScore: function getMyScore() {
      dispatch(Object(reducer["v" /* getMyScore */])());
    },
    userResponse: function userResponse(userAnswer, bool, id) {
      dispatch(Object(reducer["cb" /* userResponse */])(userAnswer, bool, id));
    },
    getQuestionsByQuizId: function getQuestionsByQuizId(id) {
      dispatch(Object(reducer["x" /* getQuestionsByQuizId */])(id));
    }
  };
};

/* harmony default export */ var containers_Quiz = (Object(es["b" /* connect */])(Quiz_mapStateToProps, Quiz_mapDispatchToProps)(src_components_Quiz));
// EXTERNAL MODULE: ./src/components/Games/index.scss
var components_Games = __webpack_require__(909);

// EXTERNAL MODULE: ./src/assets/img/memory.svg
var memory = __webpack_require__(911);

// CONCATENATED MODULE: ./src/components/Games/index.js
function Games_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Games_typeof = function _typeof(obj) { return typeof obj; }; } else { Games_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Games_typeof(obj); }

function Games_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Games_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Games_createClass(Constructor, protoProps, staticProps) { if (protoProps) Games_defineProperties(Constructor.prototype, protoProps); if (staticProps) Games_defineProperties(Constructor, staticProps); return Constructor; }

function Games_possibleConstructorReturn(self, call) { if (call && (Games_typeof(call) === "object" || typeof call === "function")) { return call; } return Games_assertThisInitialized(self); }

function Games_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Games_getPrototypeOf(o) { Games_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Games_getPrototypeOf(o); }

function Games_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Games_setPrototypeOf(subClass, superClass); }

function Games_setPrototypeOf(o, p) { Games_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Games_setPrototypeOf(o, p); }







var Games_Games =
/*#__PURE__*/
function (_Component) {
  Games_inherits(Games, _Component);

  function Games() {
    Games_classCallCheck(this, Games);

    return Games_possibleConstructorReturn(this, Games_getPrototypeOf(Games).apply(this, arguments));
  }

  Games_createClass(Games, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          dataForPuzzles = _this$props.dataForPuzzles,
          worldId = _this$props.worldId,
          resetMemory = _this$props.resetMemory;
      dataForPuzzles(worldId);
      resetMemory();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          puzzles = _this$props2.puzzles,
          dataMemory = _this$props2.dataMemory;
      return react_default.a.createElement("div", {
        className: "games"
      }, react_default.a.createElement("h1", null, "Les jeux"), react_default.a.createElement("div", {
        className: "games-wrapper"
      }, puzzles.map(function (_ref) {
        var image = _ref.image,
            title = _ref.title,
            id = _ref.id;
        return react_default.a.createElement("div", {
          key: title,
          className: "games-puzzles"
        }, react_default.a.createElement("img", {
          src: "http://92.243.9.67/plateforme-educative-api/public/uploads/images/".concat(image),
          alt: title
        }), react_default.a.createElement(react_router_dom["b" /* Link */], {
          to: "/puzzle/".concat(id)
        }, " ", title, " "));
      }), dataMemory.map(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title,
            icon = _ref2.icon;
        return react_default.a.createElement("div", {
          key: id,
          className: "games-memory"
        }, react_default.a.createElement("img", {
          src: "./src/assets/img/".concat(icon),
          alt: title
        }), react_default.a.createElement(react_router_dom["b" /* Link */], {
          to: "/memory/".concat(id)
        }, " ", title, " "));
      })));
    }
  }]);

  return Games;
}(react["Component"]);

Games_Games.propTypes = {
  puzzles: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
  dataForPuzzles: prop_types_default.a.func.isRequired,
  worldId: prop_types_default.a.string.isRequired,
  resetMemory: prop_types_default.a.func.isRequired,
  dataMemory: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
};
/* harmony default export */ var src_components_Games = (Games_Games);
// CONCATENATED MODULE: ./src/containers/Games.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var Games_mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    puzzles: state.puzzles,
    dataMemory: state.dataMemory.filter(function (memory) {
      return memory.world.id == ownProps.worldId;
    })
  };
};

var Games_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dataForPuzzles: function dataForPuzzles(worldId) {
      dispatch(Object(reducer["q" /* dataForPuzzles */])(worldId));
    },
    resetMemory: function resetMemory() {
      dispatch(Object(reducer["S" /* resetMemory */])());
    }
  };
};

/* harmony default export */ var containers_Games = (Object(es["b" /* connect */])(Games_mapStateToProps, Games_mapDispatchToProps)(src_components_Games));
// EXTERNAL MODULE: ./node_modules/react-image-puzzle/build/index.js
var build = __webpack_require__(299);
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// EXTERNAL MODULE: ./src/components/MyPuzzle/index.scss
var components_MyPuzzle = __webpack_require__(958);

// CONCATENATED MODULE: ./src/components/MyPuzzle/index.js
function MyPuzzle_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyPuzzle_typeof = function _typeof(obj) { return typeof obj; }; } else { MyPuzzle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyPuzzle_typeof(obj); }

function MyPuzzle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyPuzzle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyPuzzle_createClass(Constructor, protoProps, staticProps) { if (protoProps) MyPuzzle_defineProperties(Constructor.prototype, protoProps); if (staticProps) MyPuzzle_defineProperties(Constructor, staticProps); return Constructor; }

function MyPuzzle_possibleConstructorReturn(self, call) { if (call && (MyPuzzle_typeof(call) === "object" || typeof call === "function")) { return call; } return MyPuzzle_assertThisInitialized(self); }

function MyPuzzle_getPrototypeOf(o) { MyPuzzle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MyPuzzle_getPrototypeOf(o); }

function MyPuzzle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyPuzzle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MyPuzzle_setPrototypeOf(subClass, superClass); }

function MyPuzzle_setPrototypeOf(o, p) { MyPuzzle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MyPuzzle_setPrototypeOf(o, p); }

function MyPuzzle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var MyPuzzle_MyPuzzle =
/*#__PURE__*/
function (_Component) {
  MyPuzzle_inherits(MyPuzzle, _Component);

  function MyPuzzle() {
    var _getPrototypeOf2;

    var _this;

    MyPuzzle_classCallCheck(this, MyPuzzle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = MyPuzzle_possibleConstructorReturn(this, (_getPrototypeOf2 = MyPuzzle_getPrototypeOf(MyPuzzle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    MyPuzzle_defineProperty(MyPuzzle_assertThisInitialized(_this), "imgPuzzle", react_default.a.createRef());

    MyPuzzle_defineProperty(MyPuzzle_assertThisInitialized(_this), "puzzle", react_default.a.createRef());

    MyPuzzle_defineProperty(MyPuzzle_assertThisInitialized(_this), "textWin", react_default.a.createRef());

    MyPuzzle_defineProperty(MyPuzzle_assertThisInitialized(_this), "puzzleFinished", function () {
      _this.imgPuzzle.current.className = 'puzzle-img puzzle-img--show';
      _this.puzzle.current.className = 'puzzle--hide';

      _this.textWin.current.classList.add('puzzle-win-text-display');
    });

    return _this;
  }

  MyPuzzle_createClass(MyPuzzle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          dataForPuzzle = _this$props.dataForPuzzle,
          puzzleId = _this$props.puzzleId;
      dataForPuzzle(puzzleId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          puzzle = _this$props2.puzzle,
          loaded = _this$props2.loaded;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "puzzle"
      }, react_default.a.createElement("p", {
        ref: this.textWin,
        className: "puzzle-win-text"
      }, "BRAVO !"), loaded && react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h1", null, " ", puzzle.title), react_default.a.createElement("div", {
        ref: this.puzzle
      }, react_default.a.createElement(react_responsive_default.a, {
        query: "(max-width: 768px)"
      }, react_default.a.createElement(build_default.a, {
        image: "http://92.243.9.67/plateforme-educative-api/public/uploads/images/".concat(puzzle.image),
        size: 350,
        onDone: this.puzzleFinished
      })), react_default.a.createElement(react_responsive_default.a, {
        query: "(min-width: 769px)"
      }, react_default.a.createElement(build_default.a, {
        image: "http://92.243.9.67/plateforme-educative-api/public/uploads/images/".concat(puzzle.image),
        size: 550,
        onDone: this.puzzleFinished
      })))), react_default.a.createElement("img", {
        className: "puzzle-img",
        ref: this.imgPuzzle,
        src: "http://92.243.9.67/plateforme-educative-api/public/uploads/images/".concat(puzzle.image),
        alt: ""
      })));
    }
  }]);

  return MyPuzzle;
}(react["Component"]);

MyPuzzle_MyPuzzle.propTypes = {
  puzzle: prop_types_default.a.object.isRequired,
  dataForPuzzle: prop_types_default.a.func.isRequired,
  puzzleId: prop_types_default.a.string.isRequired,
  loaded: prop_types_default.a.bool.isRequired
};
/* harmony default export */ var src_components_MyPuzzle = (MyPuzzle_MyPuzzle);
// CONCATENATED MODULE: ./src/containers/MyPuzzle.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var MyPuzzle_mapStateToProps = function mapStateToProps(state) {
  return {
    puzzle: state.puzzle,
    loaded: state.loaded
  };
};

var MyPuzzle_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dataForPuzzle: function dataForPuzzle(puzzleId) {
      dispatch(Object(reducer["p" /* dataForPuzzle */])(puzzleId));
    }
  };
};

/* harmony default export */ var containers_MyPuzzle = (Object(es["b" /* connect */])(MyPuzzle_mapStateToProps, MyPuzzle_mapDispatchToProps)(src_components_MyPuzzle));
// EXTERNAL MODULE: ./src/components/Memory/index.scss
var Memory = __webpack_require__(960);

// CONCATENATED MODULE: ./src/components/Memory/index.js
function Memory_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Memory_typeof = function _typeof(obj) { return typeof obj; }; } else { Memory_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Memory_typeof(obj); }

function Memory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Memory_defineProperty(target, key, source[key]); }); } return target; }

function Memory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Memory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Memory_createClass(Constructor, protoProps, staticProps) { if (protoProps) Memory_defineProperties(Constructor.prototype, protoProps); if (staticProps) Memory_defineProperties(Constructor, staticProps); return Constructor; }

function Memory_possibleConstructorReturn(self, call) { if (call && (Memory_typeof(call) === "object" || typeof call === "function")) { return call; } return Memory_assertThisInitialized(self); }

function Memory_getPrototypeOf(o) { Memory_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Memory_getPrototypeOf(o); }

function Memory_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Memory_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Memory_setPrototypeOf(subClass, superClass); }

function Memory_setPrototypeOf(o, p) { Memory_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Memory_setPrototypeOf(o, p); }

function Memory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Memory_CardFlip =
/*#__PURE__*/
function (_Component) {
  Memory_inherits(CardFlip, _Component);

  function CardFlip() {
    var _getPrototypeOf2;

    var _this;

    Memory_classCallCheck(this, CardFlip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Memory_possibleConstructorReturn(this, (_getPrototypeOf2 = Memory_getPrototypeOf(CardFlip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Memory_defineProperty(Memory_assertThisInitialized(_this), "container", react_default.a.createRef());

    Memory_defineProperty(Memory_assertThisInitialized(_this), "cardMatched", function () {
      var _this$props = _this.props,
          dataMemory = _this$props.dataMemory,
          updatedData = _this$props.updatedData,
          resetCountClick = _this$props.resetCountClick,
          tentative = _this$props.tentative,
          countPairs = _this$props.countPairs,
          updatedOpenedCard = _this$props.updatedOpenedCard,
          openedCard = _this$props.openedCard;

      if (openedCard.length === 2 && openedCard[0].name === openedCard[1].name && openedCard[0].index !== openedCard[1].index) {
        countPairs();
        setTimeout(function () {
          var newdataMemory = Memory_objectSpread({}, JSON.parse(JSON.stringify(dataMemory)));

          newdataMemory.memory[openedCard[0].index].complete = true;
          newdataMemory.memory[openedCard[1].index].complete = true;
          updatedData([newdataMemory]);
          resetCountClick();
          updatedOpenedCard([]);
          tentative();
        }, 1000);
      }
    });

    Memory_defineProperty(Memory_assertThisInitialized(_this), "notMatch", function () {
      var _this$props2 = _this.props,
          openedCard = _this$props2.openedCard,
          updatedOpenedCard = _this$props2.updatedOpenedCard,
          updatedData = _this$props2.updatedData,
          tentative = _this$props2.tentative,
          resetCountClick = _this$props2.resetCountClick,
          dataMemory = _this$props2.dataMemory;

      if (openedCard.length === 2 && openedCard[0].name !== openedCard[1].name && openedCard[0].index !== openedCard[1].index) {
        setTimeout(function () {
          var newdataMemory = Memory_objectSpread({}, JSON.parse(JSON.stringify(dataMemory)));

          newdataMemory.memory[openedCard[0].index].close = true;
          newdataMemory.memory[openedCard[1].index].close = true;
          updatedData([newdataMemory]);
          updatedOpenedCard([]);
          tentative();
          resetCountClick();
        }, 800);
      }
    });

    Memory_defineProperty(Memory_assertThisInitialized(_this), "gameFinished", function () {
      var _this$props3 = _this.props,
          memoryFinished = _this$props3.memoryFinished,
          dataMemory = _this$props3.dataMemory,
          getCountPaire = _this$props3.getCountPaire;

      if (getCountPaire == dataMemory.memory.length / 2) {
        setTimeout(function () {
          memoryFinished();
        }, 1200);
      }
    });

    Memory_defineProperty(Memory_assertThisInitialized(_this), "handleClickCard", function (indexCard) {
      return function (e) {
        var _this$props4 = _this.props,
            incrementeCountClick = _this$props4.incrementeCountClick,
            dataMemory = _this$props4.dataMemory,
            updatedData = _this$props4.updatedData,
            updatedOpenedCard = _this$props4.updatedOpenedCard;
        if (!dataMemory.memory[indexCard].close) return;
        incrementeCountClick();

        if (_this.props.getCountClick <= 2 && dataMemory.memory[indexCard].close) {
          var newdataMemory = Memory_objectSpread({}, JSON.parse(JSON.stringify(dataMemory)));

          newdataMemory.memory[indexCard].close = false;
          updatedData([newdataMemory]);
          updatedOpenedCard(Memory_objectSpread({}, dataMemory.memory[indexCard], {
            index: indexCard
          }));

          _this.cardMatched();

          _this.notMatch();

          _this.gameFinished();
        }
      };
    });

    return _this;
  }

  Memory_createClass(CardFlip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var cards = this.container.current.childNodes;
      cards.forEach(function (card, index) {
        card.addEventListener('click', _this2.handleClickCard(index));
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      var cards = this.container.current.childNodes;
      cards.forEach(function (card, index) {
        card.childNodes[0].removeEventListener('click', _this3.handleClickCard(index, card.name));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          getCountPaire = _this$props5.getCountPaire,
          getTentative = _this$props5.getTentative,
          dataMemory = _this$props5.dataMemory,
          finished = _this$props5.finished;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "memory-infos-cat-".concat(dataMemory.world.id)
      }, react_default.a.createElement("p", null, "Nombre de paire trouv\xE9e: ", getCountPaire), react_default.a.createElement("p", null, "Nombre de tentative: ", getTentative)), react_default.a.createElement("div", {
        ref: this.container,
        className: "memory-container"
      }, dataMemory.memory.map(function (card, index) {
        return react_default.a.createElement("div", {
          key: index,
          className: "memory-wrapper-cat-".concat(dataMemory.world.id)
        }, react_default.a.createElement("div", {
          "data-animal": card.name,
          className: "memory-card" + (!card.close ? ' is-flipped' : '') + (card.complete ? ' matched' : '')
        }, react_default.a.createElement("div", {
          className: "memory-card__face memory-card__face--front"
        }, react_default.a.createElement("p", null, react_default.a.createElement("span", null, "o'children"))), react_default.a.createElement("div", {
          className: "memory-card__face memory-card__face--back"
        }, react_default.a.createElement("div", {
          className: "memory-category memory-category--link"
        }, react_default.a.createElement("img", {
          className: "memory-category-img-".concat(dataMemory.world.id),
          src: "./src/assets/img/".concat(card.image),
          alt: "card.name"
        })))));
      })), finished && react_default.a.createElement("div", {
        className: "memory-win"
      }, react_default.a.createElement("p", null, "Bravo tu as termin\xE9 le memory !")));
    }
  }]);

  return CardFlip;
}(react["Component"]);

Memory_CardFlip.propTypes = {
  dataMemory: prop_types_default.a.object.isRequired,
  updatedData: prop_types_default.a.func.isRequired,
  resetCountClick: prop_types_default.a.func.isRequired,
  tentative: prop_types_default.a.func.isRequired,
  countPairs: prop_types_default.a.func.isRequired,
  updatedOpenedCard: prop_types_default.a.func.isRequired,
  getCountPaire: prop_types_default.a.number.isRequired,
  getTentative: prop_types_default.a.number.isRequired,
  finished: prop_types_default.a.bool.isRequired,
  openedCard: prop_types_default.a.array.isRequired,
  incrementeCountClick: prop_types_default.a.func.isRequired,
  memoryFinished: prop_types_default.a.func.isRequired,
  getCountClick: prop_types_default.a.number.isRequired
};
/* harmony default export */ var components_Memory = (Memory_CardFlip);
// CONCATENATED MODULE: ./src/containers/Memory.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators



var Memory_mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    getCountPaire: state.getCountPaire,
    finished: state.finished,
    getTentative: state.getTentative,
    getCountClick: state.getCountClick,
    dataMemory: state.dataMemory.find(function (memory) {
      return memory.id == ownProps.memoryId;
    }),
    openedCard: state.openedCard
  };
};

var Memory_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    incrementeCountClick: function incrementeCountClick() {
      dispatch(Object(reducer["C" /* incrementeCountClick */])());
    },
    memoryFinished: function memoryFinished() {
      dispatch(Object(reducer["K" /* memoryFinished */])());
    },
    countPairs: function countPairs() {
      dispatch(Object(reducer["m" /* countPairs */])());
    },
    tentative: function tentative() {
      dispatch(Object(reducer["X" /* tentative */])());
    },
    resetCountClick: function resetCountClick() {
      dispatch(Object(reducer["R" /* resetCountClick */])());
    },
    updatedData: function updatedData(data) {
      dispatch(Object(reducer["Z" /* updatedData */])(data));
    },
    updatedOpenedCard: function updatedOpenedCard(data) {
      dispatch(Object(reducer["ab" /* updatedOpenedCard */])(data));
    },
    resetMemory: function resetMemory() {
      dispatch(Object(reducer["S" /* resetMemory */])());
    }
  };
};

/* harmony default export */ var containers_Memory = (Object(es["b" /* connect */])(Memory_mapStateToProps, Memory_mapDispatchToProps)(components_Memory));
// EXTERNAL MODULE: ./src/components/Page404/index.scss
var components_Page404 = __webpack_require__(962);

// CONCATENATED MODULE: ./src/components/Page404/index.js



var Page404_Page404 = function Page404() {
  return react_default.a.createElement("div", {
    className: "page404"
  }, react_default.a.createElement("h1", null, "Page not found"));
};

/* harmony default export */ var src_components_Page404 = (Page404_Page404);
// EXTERNAL MODULE: ./src/components/Profile/index.scss
var components_Profile = __webpack_require__(964);

// CONCATENATED MODULE: ./src/components/Profile/index.js





 // comp

var Profile_Profile = function Profile(_ref) {
  var handleGetUserInfos = _ref.handleGetUserInfos,
      loggedIn = _ref.loggedIn,
      userInfos = _ref.userInfos;
  Object(react["useEffect"])(function () {
    handleGetUserInfos();
  }, []);

  if (!loggedIn) {
    return react_default.a.createElement(react_router["a" /* Redirect */], {
      to: "/not-found"
    });
  }

  return react_default.a.createElement("div", {
    className: "profile"
  }, react_default.a.createElement("img", {
    src: userInfos.image,
    className: "profile--image",
    alt: "Avatar"
  }), react_default.a.createElement("ul", {
    className: "profile--list"
  }, react_default.a.createElement("li", {
    className: "profile--list--elem"
  }, userInfos.firstname), react_default.a.createElement("li", {
    className: "profile--list--elem"
  }, userInfos.username), react_default.a.createElement("li", {
    className: "profile--list--elem"
  }, userInfos.email), react_default.a.createElement("li", {
    className: "profile--list--elem"
  }, react_default.a.createElement(Button["a" /* default */], null, "Modifier mon mot de passe"))));
};

Profile_Profile.propTypes = {
  handleGetUserInfos: prop_types_default.a.func.isRequired,
  loggedIn: prop_types_default.a.bool.isRequired,
  userInfos: prop_types_default.a.object.isRequired
};
/* harmony default export */ var src_components_Profile = (Profile_Profile);
// CONCATENATED MODULE: ./src/containers/Profile.js
/**
 * Npm import
 */

/**
 * Local import
 */




var Profile_mapStateToProps = function mapStateToProps(state) {
  return {
    userData: state.userLoggedData,
    loggedIn: state.loggedIn,
    userInfos: state.publicUserInfos,
    viewProfile: state.viewProfile
  };
};

var Profile_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleGetUserInfos: function handleGetUserInfos() {
      return dispatch(Object(reducer["z" /* getUserInfos */])());
    }
  };
};

/* harmony default export */ var containers_Profile = (Object(es["b" /* connect */])(Profile_mapStateToProps, Profile_mapDispatchToProps)(src_components_Profile));
// EXTERNAL MODULE: ./src/components/App/app.scss
var app = __webpack_require__(966);

// CONCATENATED MODULE: ./src/components/App/index.js
/**
 * Import
 */



/**
 * Local import
 */
// Composants














 // Styles et assets

 // import background from '../../assets/img/background.jpg';

/**
 * Code
 */

var App_App = function App(_ref) {
  var error404 = _ref.error404,
      dataMemory = _ref.dataMemory,
      arrayQuizzes = _ref.arrayQuizzes;
  return react_default.a.createElement("div", {
    id: "app"
  }, react_default.a.createElement(react_router["b" /* Route */], {
    path: "*",
    render: function render(_ref2) {
      var location = _ref2.location;
      return /^(?!.*(\/discovery\/)).*$/.test(location.pathname) && react_default.a.createElement(containers_Header, null);
    }
  }), react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "/",
    component: containers_Home
  }), react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "/games/:worldId",
    render: function render(_ref3) {
      var match = _ref3.match;
      var worldId = match.params.worldId;
      return react_default.a.createElement(containers_Games, {
        worldId: worldId
      });
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/login",
    component: LoginIndex
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/register",
    component: containers_Register
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/profile",
    component: containers_Profile
  }), react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "/puzzle/:puzzleId",
    render: function render(_ref4) {
      var match = _ref4.match;
      var puzzleId = match.params.puzzleId;
      return react_default.a.createElement(containers_MyPuzzle, {
        puzzleId: puzzleId
      });
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "/memory/:memoryId",
    render: function render(_ref5) {
      var match = _ref5.match;
      var memoryId = match.params.memoryId;
      var searchMemory = dataMemory.find(function (memory) {
        return memory.id == memoryId;
      });

      if (searchMemory === undefined) {
        return react_default.a.createElement(react_router["a" /* Redirect */], {
          to: "/not-found"
        });
      }

      return react_default.a.createElement(containers_Memory, {
        memoryId: memoryId
      });
    }
  }), react_default.a.createElement(react_router["b" /* Route */] // is ok
  , {
    exact: true,
    path: "/home-game/:categories/categories",
    component: containers_CategoriesQuizzs
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/discovery",
    render: function render(_ref6) {
      var match = _ref6.match;
      return react_default.a.createElement(src_components_Discovery, {
        url: match.url
      });
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "/quiz/:quizId",
    render: function render(_ref7) {
      var match = _ref7.match;
      var quizId = match.params.quizId;

      if (!error404) {
        return react_default.a.createElement(containers_Quiz, {
          quizId: quizId,
          arrayQuizzes: arrayQuizzes
        });
      }

      return react_default.a.createElement(react_router["a" /* Redirect */], {
        to: "/not-found"
      });
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "/quizzes/:worldId",
    render: function render(_ref8) {
      var match = _ref8.match;
      var worldId = match.params.worldId;

      if (!error404) {
        return react_default.a.createElement(containers_Quizzs, {
          worldId: worldId
        });
      }

      return react_default.a.createElement(react_router["a" /* Redirect */], {
        to: "/not-found"
      });
    }
  }), react_default.a.createElement(react_router["b" /* Route */] // is ok
  , {
    exact: true,
    path: "/home-game/:category",
    render: function render(_ref9) {
      var match = _ref9.match;
      var category = match.params.category;

      if (!error404) {
        return react_default.a.createElement(containers_HomeGame, {
          category: category
        });
      }

      return react_default.a.createElement(react_router["a" /* Redirect */], {
        to: "/not-found"
      });
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    component: src_components_Page404
  })));
};

App_App.propTypes = {
  error404: prop_types_default.a.bool.isRequired,
  dataMemory: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
  arrayQuizzes: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
  /**
   * Export
   */

};
/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./src/containers/App.js
/**
 * Npm import
 */

/**
 * Local import
 */

 // Action Creators

var App_mapStateToProps = function mapStateToProps(state) {
  return {
    error404: state.error404,
    dataMemory: state.dataMemory,
    arrayQuizzes: state.questionsOfQuiz
  };
};

var App_mapDispatchToProps = {};
/* harmony default export */ var containers_App = (Object(es["b" /* connect */])(App_mapStateToProps, App_mapDispatchToProps)(components_App));
// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__(485);

// CONCATENATED MODULE: ./src/index.js
/**
 * NPM import
 */





/**
 * Local import
 */

 // store


/**
 * Code
 */

var rootComponent = react_default.a.createElement(es["a" /* Provider */], {
  store: store["a" /* default */]
}, react_default.a.createElement(react_router_dom["a" /* HashRouter */], null, react_default.a.createElement(containers_App, null)));
Object(react_dom["render"])(rootComponent, document.getElementById('root'));

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(841);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(744);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _ajaxMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(486);
/*
 * Npm import
 */

/*
 * Local import
 */
// Reducer



var appliedMiddlewares = Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* applyMiddleware */ "a"])(_ajaxMiddleware__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
/*
 * Code
 */
// createStore

var enhancers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* compose */ "c"])(appliedMiddlewares, // eslint-disable-next-line no-underscore-dangle
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* createStore */ "d"])(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "r"], (process && process.env && "production" || "production ") === 'development' ? enhancers : appliedMiddlewares);
/*
 * Export
 */

/* harmony default export */ __webpack_exports__["a"] = (store);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)))

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(114);
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shuffle_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(487);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ajaxMiddleware = function ajaxMiddleware(store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* DATA_HOME_PAGE */ "e"]:
          // Requete qui récupère les données nécessaire pour la page home
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/worlds")).then(function (response) {
            next(_objectSpread({}, action, {
              data: response.data
            }));
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* DATA_HOME_GAME */ "d"]:
          // Requete qui récupère les données nécessaire pour la page home
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/worlds/").concat(action.categoryId, "/")).then(function (response) {
            next(_objectSpread({}, action, {
              data: response.data
            }));
          })["catch"](function (error) {
            if (error.response.status === 404) store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* getPage404 */ "w"])());
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* CATEGORIES_QUIZZS */ "a"]:
          // Requete qui récupère les catégories pour les quizzs
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/categories")).then(function (response) {
            next(_objectSpread({}, action, {
              data: response.data
            }));
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* QUIZ_BY_WORLD_ID */ "j"]:
          next(action);
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/worlds/").concat(action.worldId, "/quizzs"), {}).then(function (response) {
            var arrayData = [];
            response.data.forEach(function (data) {
              return arrayData.push.apply(arrayData, _toConsumableArray(data.quizzs));
            });
            store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* receivedDataQuizzes */ "O"])(arrayData));
          })["catch"](function (error) {
            if (error.response.status === 404) store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* getPage404 */ "w"])());
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* QUESTION_BY_ID */ "i"]:
          next(action);
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/quizzs/").concat(action.id), {}).then(function (_ref) {
            var data = _ref.data;
            var newArrayDataQuestion = data.questions.map(function (question) {
              shuffle_array__WEBPACK_IMPORTED_MODULE_1___default()(question.answers);
              return question;
            });
            console.log(newArrayDataQuestion);
            store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* receivedDataQuestions */ "N"])(shuffle_array__WEBPACK_IMPORTED_MODULE_1___default()(newArrayDataQuestion), data.description, data.title));
          })["catch"](function (error) {
            if (error.response.status === 404) store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* getPage404 */ "w"])());
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* DATA_FOR_PUZZLES */ "c"]:
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/worlds/").concat(action.worldId, "/puzzles"), {}).then(function (response) {
            next(_objectSpread({}, action, {
              data: response.data[0].puzzles
            }));
          })["catch"](function (error) {
            if (error.response.status === 404) store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* getPage404 */ "w"])());
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* DATA_FOR_PUZZLE */ "b"]:
          next(action);
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/puzzles/").concat(action.puzzleId, "/"), {}).then(function (response) {
            store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* receivedDataPuzzle */ "M"])(response.data));
          })["catch"](function (error) {
            if (error.response.status === 404) store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* getPage404 */ "w"])());
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* LOGIN_SUBMIT */ "h"]:
          next(action);
          var _store$getState$login = store.getState().loginForm,
              loginEmail = _store$getState$login.email,
              loginPassword = _store$getState$login.password;
          var LoginObject = {
            username: loginEmail,
            password: loginPassword
          };
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/login"), LoginObject).then(function (_ref2) {
            var data = _ref2.data;
            console.log('Connexion réussie, vous êtes connecté.');

            var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(data.token),
                userId = _jwt$decode.userId;

            store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* loggedIn */ "G"])({
              token: data.token,
              userId: userId
            }));
          })["catch"](function () {
            return store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* loginError */ "H"])());
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* SIGNUP_SUBMIT */ "k"]:
          next(action);
          var _store$getState$regis = store.getState().registerForm,
              signUpFirstName = _store$getState$regis.firstName,
              signUpLastName = _store$getState$regis.lastName,
              signUpEmail = _store$getState$regis.email,
              signUpUsername = _store$getState$regis.username,
              signUpPassword = _store$getState$regis.password,
              signUpConfirmPassword = _store$getState$regis.confirmPassword;
          var signUpObject = {
            email: signUpEmail,
            firstName: "".concat(signUpFirstName, " ").concat(signUpLastName),
            plainpassword: signUpPassword,
            plainpassword2: signUpConfirmPassword,
            username: signUpUsername
          };
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/signup"), signUpObject).then(function () {
            return store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* signedUp */ "V"])());
          })["catch"](function () {
            return store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* signeUpError */ "T"])());
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* FORGOTTEN_SUBMIT */ "f"]:
          next(action);
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/password/forgotten"), {
            email: store.getState().loginForm.email
          }).then(function (response) {
            store.dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[/* receivedNewPassword */ "P"])());
          })["catch"](function (error) {
            /* if (error.response.status === 404) store.dispatch(getPage404()); */
          });

        case _reducer__WEBPACK_IMPORTED_MODULE_3__[/* GET_USER_INFOS */ "g"]:
          if (!store.getState().loggedIn) return next({
            type: ''
          });
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(process && process.env && process.env.API_URL || "http://92.243.9.67/plateforme-educative-api/public", "/api/users/").concat(store.getState().loggedUserInfos.userId), {
            headers: {
              Authorization: "bearer ".concat(store.getState().loggedUserInfos.token)
            }
          }).then(function (_ref3) {
            var data = _ref3.data;
            return next(_objectSpread({}, action, {
              data: data
            }));
          });

        default:
          return next(action);
      }
    };
  };
};

/* harmony default export */ __webpack_exports__["a"] = (ajaxMiddleware);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)))

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(510);
module.exports = __webpack_require__(1088);


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(511);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, "/* Colors */\n/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* Reset perso */\na, del, ins {\n  text-decoration: none; }\n\na {\n  color: inherit; }\n\nlabel, button {\n  cursor: pointer; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\ninput, button {\n  outline: 0; }\n", ""]);



/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(723);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, "/* Position and sizing of burger button */\n.bm-burger-button {\n  position: absolute;\n  width: 36px;\n  height: 30px;\n  right: 36px;\n  top: 36px; }\n\n/* Color/shape of burger icon bars */\n.bm-burger-bars {\n  background: lightgreen; }\n\n/* Color/shape of burger icon bars on hover*/\n/* Position and sizing of clickable cross button */\n.bm-cross-button {\n  height: 24px;\n  width: 24px; }\n\n/* Color/shape of close button cross */\n.bm-cross {\n  background: #fff; }\n\n/*\r\nSidebar wrapper styles\r\nNote: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases\r\n*/\n.bm-menu-wrap {\n  position: fixed;\n  height: 100%; }\n\n/* General sidebar styles */\n.bm-menu {\n  background: lightgreen;\n  padding: 2.5em 1.5em 0;\n  font-size: 1.15em; }\n\n/* Morph shape necessary with bubble or elastic */\n.bm-morph-shape {\n  fill: lightgreen; }\n\n/* Wrapper for item list */\n.bm-item-list {\n  color: #b8b7ad;\n  padding: 0.8em; }\n\n/* Individual item */\n.bm-item {\n  display: inline-block;\n  color: #000; }\n\n/* Styling of overlay */\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3); }\n\n.active {\n  text-decoration: underline; }\n\n@media screen and (min-width: 769px) {\n  .header {\n    display: flex;\n    justify-content: space-between; } }\n\n.header-nav-desktop {\n  margin-top: 36px;\n  margin-right: 36px; }\n  .header-nav-desktop ul {\n    display: flex; }\n    .header-nav-desktop ul li {\n      margin-left: 20px;\n      display: flex;\n      align-items: flex-end; }\n\n.header-p {\n  margin-top: 10px;\n  display: flex !important; }\n\n.header-p:focus {\n  outline: none; }\n\n.header-img {\n  margin-top: 36px;\n  margin-left: 36px; }\n\n.header-link {\n  font-size: 1.5em;\n  padding-left: 5px;\n  padding-bottom: 4px;\n  color: #fff; }\n  .header-link:hover {\n    color: #fff; }\n  @media screen and (min-width: 769px) {\n    .header-link:hover {\n      color: lightgreen; } }\n  @media screen and (min-width: 769px) {\n    .header-link {\n      color: lightgreen; } }\n", ""]);



/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJzcmMvYXNzZXRzL2ltZy9sb2dvLnBuZyI7"

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(728);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".home-content {\n  text-align: center; }\n\n.home-title {\n  margin-top: 2em !important;\n  text-align: center;\n  font-family: 'Love Ya Like A Sister', sans-serif;\n  color: orange;\n  text-shadow: 2px 2px #000; }\n  @media screen and (min-width: 769px) {\n    .home-title {\n      margin-top: 1.5em !important;\n      font-size: 1.5em; } }\n\n.home p {\n  margin: 2em auto;\n  font-size: 1.2em; }\n\n.home span {\n  font-weight: bold;\n  font-size: 1.5em;\n  line-height: 50px;\n  margin: 2em 0 0.7em !important;\n  display: flex;\n  justify-content: center; }\n  @media screen and (min-width: 769px) {\n    .home span {\n      margin: 1.3em 0 0.7em !important;\n      font-size: 1.8em;\n      line-height: 0px; } }\n\n.home-category {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  color: #fff;\n  width: 220px;\n  height: 220px;\n  border: 10px solid lightgreen;\n  border-radius: 50%;\n  background-color: #fff;\n  color: #000;\n  text-align: center;\n  cursor: pointer; }\n  @media screen and (min-width: 769px) {\n    .home-category {\n      display: block; } }\n  .home-category img {\n    margin-top: 15px;\n    width: 120px; }\n  .home-category h2 {\n    font-size: 2em;\n    margin-top: 10px;\n    font-weight: bold; }\n  .home-category--link {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .home-category--link a {\n      color: #000;\n      font-size: 3em;\n      font-weight: bold;\n      text-transform: uppercase; }\n      .home-category--link a:hover {\n        color: lightgreen; }\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px; }\n  @media screen and (min-width: 769px) {\n    .container {\n      flex-direction: row;\n      justify-content: center;\n      margin-top: 250px; } }\n\n.wrapper {\n  width: 200px;\n  height: 200px;\n  perspective: 600px;\n  margin: 50px 0; }\n  .wrapper-focus {\n    border: none; }\n  @media screen and (min-width: 769px) {\n    .wrapper {\n      margin: 0 100px; } }\n\n.card {\n  position: relative;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  transform-origin: center right; }\n\n.card__face {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.card__face--front {\n  border-radius: 50%; }\n\n.card__face--back {\n  border-radius: 50%;\n  transform: rotateY(180deg); }\n\n.is-flipped {\n  transform: translateX(-100%) rotateY(-180deg); }\n", ""]);



/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".login {\n  width: 380px;\n  margin: 10em auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  box-shadow: 0px 0px 20px -6px #000;\n  padding: 1.5em;\n  border-radius: 6px; }\n  .login p {\n    margin: 0 0 10px 10px;\n    font-size: 1.2em; }\n\n.app-link {\n  cursor: pointer;\n  padding-left: 1em; }\n\n.forgotten-form {\n  width: 380px;\n  margin: 10em auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  box-shadow: 0px 0px 20px -6px #000;\n  padding: 1.5em;\n  border-radius: 6px; }\n\n.login-form {\n  padding: 1em;\n  width: 20em; }\n\n#connexion {\n  background-color: #ff8b73; }\n\n#inscription {\n  background-color: #cc2e43; }\n\n#forgotten-pw a {\n  margin: 20px 0 auto; }\n\nh1 {\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.treatment {\n  margin-top: 10px; }\n", ""]);



/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".form-user-details {\n  width: 380px;\n  margin: 10em auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  box-shadow: 0px 0px 20px -6px #000;\n  padding: 1.5em;\n  border-radius: 6px; }\n\n.form-personal-details {\n  width: 380px;\n  margin: 10em auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  box-shadow: 0px 0px 20px -6px #000;\n  padding: 1.5em;\n  border-radius: 6px; }\n\n.confirmation {\n  width: 380px;\n  margin: 10em auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  box-shadow: 0px 0px 20px -6px #000;\n  padding: 1.5em;\n  border-radius: 6px; }\n\n.success,\n.error {\n  width: 380px;\n  margin: 10em auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  box-shadow: 0px 0px 20px -6px #000;\n  padding: 1.5em;\n  border-radius: 6px; }\n", ""]);



/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(843);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".gameMenu {\n  display: flex;\n  justify-content: center; }\n  .gameMenu-nav {\n    position: fixed;\n    bottom: 0; }\n    .gameMenu-nav ul {\n      display: flex; }\n      .gameMenu-nav ul li a {\n        font-size: 1.2em;\n        color: #000;\n        font-weight: bold;\n        width: 100px;\n        height: 100px;\n        border-radius: 50%;\n        border: 4px solid lightgreen;\n        background-color: #fff;\n        margin: 0 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        @media screen and (min-width: 769px) {\n          .gameMenu-nav ul li a {\n            font-size: 1.7em;\n            width: 200px;\n            border: 8px solid lightgreen;\n            height: 200px; } }\n        @media screen and (min-width: 769px) {\n          .gameMenu-nav ul li a span {\n            margin-top: 10px; } }\n  .gameMenu-icon--discovery {\n    width: 3em;\n    height: 3em; }\n    @media screen and (min-width: 769px) {\n      .gameMenu-icon--discovery {\n        width: 4em;\n        height: 4em;\n        margin-top: 15px; } }\n  .gameMenu-icon--square {\n    width: 2em;\n    height: 2em;\n    margin-top: 5px; }\n    @media screen and (min-width: 769px) {\n      .gameMenu-icon--square {\n        margin-top: 20px;\n        width: 3em;\n        height: 3em; } }\n  .gameMenu-icon--jeux {\n    width: 3em;\n    height: 3em; }\n    @media screen and (min-width: 769px) {\n      .gameMenu-icon--jeux {\n        width: 4em;\n        height: 4em;\n        margin-top: 10px; } }\n  @media screen and (min-width: 769px) {\n    .gameMenu-link--discovery {\n      margin-bottom: 28px !important;\n      margin-top: 50px !important; } }\n  .gameMenu-link--quiz {\n    margin-top: 11px; }\n    @media screen and (min-width: 769px) {\n      .gameMenu-link--quiz {\n        margin-top: 48px !important;\n        width: 2.5em; } }\n  @media screen and (min-width: 769px) {\n    .gameMenu-link--jeux {\n      margin-bottom: 28px !important;\n      margin-top: 50px !important; } }\n", ""]);



/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(845);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".homeGame {\n  margin-top: 100px; }\n  .homeGame-title {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start; }\n    .homeGame-title h1 {\n      font-size: 2em;\n      font-weight: bold;\n      margin: 0;\n      color: orange;\n      text-shadow: 2px 2px #000; }\n      @media screen and (min-width: 769px) {\n        .homeGame-title h1 {\n          font-size: 3.5em;\n          font-weight: bold;\n          margin-top: 0; } }\n    .homeGame-title img {\n      width: 60px;\n      height: 60px;\n      margin-right: 20px; }\n", ""]);



/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(847);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".categories {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 80px; }\n  .categories h1 {\n    font-size: 2em;\n    color: orange;\n    text-shadow: 2px 2px #000; }\n    @media screen and (min-width: 769px) {\n      .categories h1 {\n        font-size: 3.5em; } }\n  .categories .wrapper-categories {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin: 50px 0; }\n    @media screen and (min-width: 769px) {\n      .categories .wrapper-categories {\n        flex-direction: row;\n        flex-wrap: wrap;\n        margin: 120px 0; } }\n    .categories .wrapper-categories span {\n      margin-top: 20px;\n      color: #000; }\n    .categories .wrapper-categories img {\n      margin-top: 15px;\n      width: 100px; }\n    .categories .wrapper-categories a {\n      margin-top: 50px;\n      text-align: center; }\n  .categories-quiz {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 8px solid lightgreen;\n    background-color: #fff;\n    margin: 0 50px; }\n    .categories-quiz span {\n      font-size: 2em;\n      font-weight: bold;\n      display: flex;\n      justify-content: center; }\n", ""]);



/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(849);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".discovery {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden; }\n  .discovery > * {\n    padding-top: 40px; }\n  .discovery ul {\n    display: flex;\n    justify-content: center; }\n  .discovery li {\n    font-size: 1.2em;\n    color: #000;\n    font-weight: bold;\n    width: 190px;\n    height: 190px;\n    border-radius: 50%;\n    border: 7px solid #fff;\n    background-color: #fff;\n    margin: 0 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; }\n  .discovery--title, .discovery--description {\n    text-align: center; }\n  .discovery--title {\n    font-size: 2em; }\n  .discovery--description {\n    font-size: 1.5em; }\n  .discovery--theme-list--elem {\n    cursor: pointer; }\n\n.forward-button {\n  position: absolute;\n  bottom: 10px;\n  right: 10px; }\n\n.back-button {\n  position: absolute;\n  bottom: 10px;\n  left: 10px; }\n", ""]);



/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/shuffle-array/index.js
var shuffle_array = __webpack_require__(114);
var shuffle_array_default = /*#__PURE__*/__webpack_require__.n(shuffle_array);

// CONCATENATED MODULE: ./src/datas/index.js

var memory = [{
  id: 1,
  title: "Animal",
  "icon": "memory.svg",
  memory: [{
    id: 1,
    name: 'tiger',
    image: 'tiger.jpg',
    complete: false,
    close: true
  }, {
    id: 2,
    name: 'tiger',
    image: 'tiger.jpg',
    complete: false,
    close: true
  }, {
    id: 3,
    name: 'dog',
    image: 'dog.jpg',
    complete: false,
    close: true
  }, {
    id: 4,
    name: 'dog',
    image: 'dog.jpg',
    complete: false,
    close: true
  }, {
    id: 5,
    name: 'lion',
    image: 'lion.jpg',
    complete: false,
    close: true
  }, {
    id: 6,
    name: 'lion',
    image: 'lion.jpg',
    complete: false,
    close: true
  }, {
    id: 7,
    name: 'cat',
    image: 'cat.svg',
    complete: false,
    close: true
  }, {
    id: 8,
    name: 'cat',
    image: 'cat.svg',
    complete: false,
    close: true
  }],
  "world": {
    "id": 1,
    "name": "3-6 ans"
  }
}, {
  "id": 2,
  "title": "L'espace",
  "icon": "memory.svg",
  memory: [{
    id: 1,
    name: 'terre',
    image: 'terre.png',
    complete: false,
    close: true
  }, {
    id: 2,
    name: 'terre',
    image: 'terre.png',
    complete: false,
    close: true
  }, {
    id: 3,
    name: 'lune',
    image: 'lune.png',
    complete: false,
    close: true
  }, {
    id: 4,
    name: 'lune',
    image: 'lune.png',
    complete: false,
    close: true
  }, {
    id: 5,
    name: 'jupiter',
    image: 'jupiter.png',
    complete: false,
    close: true
  }, {
    id: 6,
    name: 'jupiter',
    image: 'jupiter.png',
    complete: false,
    close: true
  }, {
    id: 7,
    name: 'mars',
    image: 'mars.png',
    complete: false,
    close: true
  }, {
    id: 8,
    name: 'mars',
    image: 'mars.png',
    complete: false,
    close: true
  }, {
    id: 9,
    name: 'soleil',
    image: 'soleil.png',
    complete: false,
    close: true
  }, {
    id: 10,
    name: 'soleil',
    image: 'soleil.png',
    complete: false,
    close: true
  }, {
    id: 11,
    name: 'fusee',
    image: 'fusee.png',
    complete: false,
    close: true
  }, {
    id: 12,
    name: 'fusee',
    image: 'fusee.png',
    complete: false,
    close: true
  }],
  "world": {
    "id": 2,
    "name": "7-10 ans"
  }
}];
memory.map(function (data) {
  return shuffle_array_default()(data.memory);
});
/* harmony default export */ var datas = (memory);
// CONCATENATED MODULE: ./src/store/reducer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DATA_HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DATA_HOME_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOGIN_SUBMIT; });
/* unused harmony export RECEIVED_NEW_PASSWORD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FORGOTTEN_SUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SIGNUP_SUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES_QUIZZS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return QUESTION_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return QUIZ_BY_WORLD_ID; });
/* unused harmony export ERROR_404 */
/* unused harmony export RECEIVED_DATA_QUIZZES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DATA_FOR_PUZZLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DATA_FOR_PUZZLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_USER_INFOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return handleLoginChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return registerInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return loginSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return loggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return loginReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return forgottenSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getAllCategoriesQuizzs; });
/* unused harmony export currentSlugCatQuizzs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return dataForHomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return signupSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return signedUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return signeUpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return signeUpReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return dataForHomeGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return getQuizByWorldId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getQuestionsByQuizId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getMyScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return userChosenAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return updateScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return messageScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return userResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return handleClickButtonNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return initialQuiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return receivedDataQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return infosCatAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getPage404; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return dataForPuzzles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return countPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return memoryFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return tentative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return incrementeCountClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return resetCountClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return updatedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return updatedOpenedCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return resetMemory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return dataForPuzzle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return getUserInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return receivedDataPuzzle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return receivedDataQuizzes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return changeViewLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return receivedNewPassword; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/**
 * Initial State
 */

var initialState = {
  dataHomePage: [],
  viewLogin: 'login',
  loading: false,
  puzzles: [],
  puzzle: {},
  dataMemory: _toConsumableArray(JSON.parse(JSON.stringify(datas))),
  loginForm: {
    email: '',
    password: '',
    loading: false,
    loggedIn: false,
    resetPassword: false,
    error: false
  },
  registerForm: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    loading: false,
    signedUp: false,
    error: false
  },
  loggedIn: false,
  loggedUserInfos: {},
  indexQuiz: 0,
  message: '',
  score: 0,
  myScore: false,
  dataHomeGame: {},
  categoriesQuizzs: [],
  currentSlugCatAge: '',
  currrentSlugCatQuizzs: '',
  quizzsByWorldId: [],
  idCatAge: '',
  questionsOfQuiz: [],
  loaded: false,
  disabledButton: true,
  error404: false,
  getCountPaire: 0,
  getCountClick: 0,
  getTentative: 0,
  finished: false,
  openedCard: [],
  descriptionCurrentQuiz: '',
  currentNameQuiz: '',
  publicUserInfos: {},
  nameCategoryQuiz: '',
  quizzesLoaded: false,
  questionLoaded: false
};
/**
 * Types
 */

var DATA_HOME_PAGE = 'DATA_HOME_PAGE';
var DATA_HOME_GAME = 'DATA_HOME_GAME'; // login

var HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
var LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';
var LOGIN_RESET = 'LOGIN_RESET';
var LOGIN_ERROR = 'LOGIN_ERROR';
var LOGGED_IN = 'LOGGED_IN';
var CHANGE_VIEW_LOGIN = 'CHANGE_VIEW_LOGIN';
var RECEIVED_NEW_PASSWORD = 'RECEIVED_NEW_PASSWORD'; // forgotten

var FORGOTTEN_SUBMIT = 'FORGOTTEN_SUBMIT'; // signup

var REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
var SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
var SIGNEDUP = 'SIGNEDUP';
var SIGNUP_ERROR = 'SIGNUP_ERROR';
var SIGNUP_RESET = 'SIGNUP_RESET'; // logOut

var LOGOUT = 'LOGOUT'; // quiz

var INCREMENT_INDEX_QUIZ = 'INCREMENT_INDEX_QUIZ';
var CATEGORIES_QUIZZS = 'CATEGORIES_QUIZZS';
var CURRENT_SLUG_CAT_AGE = 'CURRENT_SLUG_CAT_AGE';
var CURRENT_SLUG_CAT_QUIZZS = 'CURRENT_SLUG_CAT_QUIZZS';
var QUESTION_BY_ID = 'QUESTION_BY_ID';
var RECEIVED_DATA_QUESTIONS = 'RECEIVED_DATA_QUESTIONS';
var CHOSEN_ANSWER = 'CHOSEN_ANSWER';
var UPDATE_SCORE = 'UPDATE_SCORE';
var GET_MESSAGE = 'GET_MESSAGE';
var MY_SCORE = 'MY_SCORE';
var INITIAL_QUIZ = 'INITIAL_QUIZ';
var USER_RESPONSE = 'USER_RESPONSE';
var QUIZ_BY_WORLD_ID = 'QUIZ_BY_WORLD_ID';
var ERROR_404 = 'ERROR_404';
var RECEIVED_DATA_QUIZZES = 'RECEIVED_DATA_QUIZZES'; // memory

var COUNT_PAIRS = 'COUNT_PAIRS';
var FINISHED = 'FINISHED';
var TENTATIVE = 'TENTATIVE';
var INCREMENTE_COUNT_CLICK = 'INCREMENTE_COUNT_CLICK';
var RESET_COUNT_CLICK = 'RESET_COUNT_CLICK';
var UPDATED_DATA = 'UPDATED_DATA';
var UPDATED_OPENED_CARD = 'UPDATED_OPENED_CARD';
var RESET_MEMORY = 'RESET_MEMORY'; // Puzzle

var DATA_FOR_PUZZLE = 'DATA_FOR_PUZZLE';
var DATA_FOR_PUZZLES = 'DATA_FOR_PUZZLES';
var RECEIVED_DATA_PUZZLE = 'RECEIVED_DATA_PUZZLE'; // User

var GET_USER_INFOS = 'GET_USER_INFOS';
/**
 * Traitements
 */

/**
 * Reducer
 */

var reducer_reducer = function reducer() {
  var _objectSpread2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case DATA_HOME_PAGE:
      return _objectSpread({}, state, {
        dataHomePage: _toConsumableArray(action.data),
        error404: false
      });
    // form

    case HANDLE_LOGIN_CHANGE:
      return _objectSpread({}, state, {
        loginForm: _objectSpread({}, state.loginForm, (_objectSpread2 = {}, _defineProperty(_objectSpread2, action.name, action.text), _defineProperty(_objectSpread2, "error", false), _objectSpread2))
      });

    case LOGIN_SUBMIT:
      return _objectSpread({}, state, {
        loginForm: _objectSpread({}, state.loginForm, {
          loading: true
        })
      });

    case LOGGED_IN:
      return _objectSpread({}, state, {
        loginForm: _objectSpread({}, state.loginForm, {
          loading: false,
          loggedIn: true
        }),
        loggedIn: true,
        loggedUserInfos: action.data
      });

    case LOGIN_ERROR:
      return _objectSpread({}, state, {
        loginForm: _objectSpread({}, state.loginForm, {
          error: true,
          loading: false
        })
      });

    case LOGIN_RESET:
      return _objectSpread({}, state, {
        loginForm: _objectSpread({}, initialState.loginForm)
      });

    case REGISTER_INPUT_CHANGE:
      return _objectSpread({}, state, {
        registerForm: _objectSpread({}, state.registerForm, _defineProperty({}, action.name, action.text))
      });

    case SIGNUP_SUBMIT:
      return _objectSpread({}, state, {
        registerForm: _objectSpread({}, state.registerForm, {
          loading: true
        })
      });

    case SIGNEDUP:
      return _objectSpread({}, state, {
        registerForm: _objectSpread({}, state.registerForm, {
          loading: false,
          signedUp: true
        })
      });

    case SIGNUP_ERROR:
      return _objectSpread({}, state, {
        registerForm: _objectSpread({}, state.registerForm, {
          error: true
        })
      });

    case SIGNUP_RESET:
      return _objectSpread({}, state, {
        registerForm: _objectSpread({}, initialState.registerForm)
      });

    case FORGOTTEN_SUBMIT:
      return _objectSpread({}, state, {
        loading: true
      });

    case RECEIVED_NEW_PASSWORD:
      return _objectSpread({}, state, {
        loginForm: _objectSpread({}, state.loginForm, {
          resetPassword: true
        }),
        loading: false,
        viewLogin: 'login'
      });

    case INCREMENT_INDEX_QUIZ:
      return _objectSpread({}, state, {
        indexQuiz: state.indexQuiz + 1,
        disabledButton: true,
        message: ''
      });

    case DATA_HOME_GAME:
      return _objectSpread({}, state, {
        dataHomeGame: _objectSpread({}, action.data),
        error404: false
      });

    case CATEGORIES_QUIZZS:
      return _objectSpread({}, state, {
        categoriesQuizzs: _toConsumableArray(action.data),
        error404: false
      });

    case CURRENT_SLUG_CAT_AGE:
      return _objectSpread({}, state, {
        currentSlugCatAge: action.category,
        idCatAge: action.id
      });

    case CURRENT_SLUG_CAT_QUIZZS:
      return _objectSpread({}, state, {
        currrentSlugCatQuizzs: action.slug
      });

    case QUIZ_BY_WORLD_ID:
      return _objectSpread({}, state, {
        quizzesLoaded: false
      });

    case RECEIVED_DATA_QUIZZES:
      return _objectSpread({}, state, {
        quizzsByWorldId: action.dataQuiz,
        nameCategoryQuiz: action.nameCatQuiz,
        error404: false,
        quizzesLoaded: true
      });

    case QUESTION_BY_ID:
      return _objectSpread({}, state, {
        questionLoaded: false
      });

    case RECEIVED_DATA_QUESTIONS:
      return _objectSpread({}, state, {
        questionLoaded: true,
        questionsOfQuiz: _toConsumableArray(action.dataQuestions),
        descriptionCurrentQuiz: action.dataDescription,
        currentNameQuiz: action.dataName,
        error404: false
      });

    case CHOSEN_ANSWER:
      return _objectSpread({}, state, {
        disabledButton: false
      });

    case UPDATE_SCORE:
      return _objectSpread({}, state, {
        score: state.score + 1
      });

    case GET_MESSAGE:
      return _objectSpread({}, state, {
        message: action.message
      });

    case MY_SCORE:
      return _objectSpread({}, state, {
        myScore: true
      });

    case INITIAL_QUIZ:
      return _objectSpread({}, state, {
        indexQuiz: 0,
        message: '',
        myScore: false,
        score: 0,
        disabledButton: true
      });

    case USER_RESPONSE:
      return _objectSpread({}, state, {
        questionsOfQuiz: state.questionsOfQuiz.map(function (data) {
          if (data.id === action.id) {
            return _objectSpread({}, data, {
              userResponse: action.userAnswer,
              isRightUserResponse: action.bool
            });
          }

          return _objectSpread({}, data);
        })
      });

    case ERROR_404:
      return _objectSpread({}, state, {
        error404: true
      });

    case DATA_FOR_PUZZLES:
      return _objectSpread({}, state, {
        puzzles: action.data
      });

    case RECEIVED_DATA_PUZZLE:
      return _objectSpread({}, state, {
        loaded: true,
        puzzle: _objectSpread({}, action.data)
      });

    case DATA_FOR_PUZZLE:
      return _objectSpread({}, state, {
        loaded: false
      });

    case COUNT_PAIRS:
      // eslint-disable-next-line no-return-assign
      return _objectSpread({}, state, {
        getCountPaire: state.getCountPaire += 1
      });

    case TENTATIVE:
      // eslint-disable-next-line no-return-assign
      return _objectSpread({}, state, {
        getTentative: state.getTentative += 1
      });

    case FINISHED:
      return _objectSpread({}, state, {
        finished: true
      });

    case INCREMENTE_COUNT_CLICK:
      // eslint-disable-next-line no-return-assign
      return _objectSpread({}, state, {
        getCountClick: state.getCountClick += 1
      });

    case RESET_COUNT_CLICK:
      return _objectSpread({}, state, {
        getCountClick: 0
      });

    case UPDATED_DATA:
      return _objectSpread({}, state, {
        dataMemory: _toConsumableArray(action.data)
      });

    case UPDATED_OPENED_CARD:
      return _objectSpread({}, state, {
        openedCard: state.openedCard.length === 2 ? action.data : [].concat(_toConsumableArray(state.openedCard), [action.data])
      });

    case RESET_MEMORY:
      datas.map(function (data) {
        return shuffle_array_default()(data.memory);
      });
      return _objectSpread({}, state, {
        dataMemory: _toConsumableArray(JSON.parse(JSON.stringify(datas))),
        openedCard: [],
        getCountPaire: 0,
        getCountClick: 0,
        getTentative: 0,
        finished: false
      });

    case GET_USER_INFOS:
      return _objectSpread({}, state, {
        publicUserInfos: action.data
      });

    case LOGOUT:
      return _objectSpread({}, state, {
        publicUserInfos: initialState.publicUserInfos,
        loggedUserInfos: initialState.loggedUserInfos,
        loggedIn: false
      });

    case CHANGE_VIEW_LOGIN:
      return _objectSpread({}, state, {
        viewLogin: action.currentView
      });

    default:
      return state;
  }
};
/**
 * Action Creators
 */


var handleLoginChange = function handleLoginChange(text, name) {
  return {
    type: HANDLE_LOGIN_CHANGE,
    text: text,
    name: name
  };
};
var registerInputChange = function registerInputChange(text, name) {
  return {
    type: REGISTER_INPUT_CHANGE,
    text: text,
    name: name
  };
};
var loginSubmit = function loginSubmit() {
  return {
    type: LOGIN_SUBMIT
  };
};
var loggedIn = function loggedIn(data) {
  return {
    type: LOGGED_IN,
    data: data
  };
};
var loginError = function loginError() {
  return {
    type: LOGIN_ERROR
  };
};
var loginReset = function loginReset() {
  return {
    type: LOGIN_RESET
  };
};
var forgottenSubmit = function forgottenSubmit() {
  return {
    type: FORGOTTEN_SUBMIT
  };
};
var getAllCategoriesQuizzs = function getAllCategoriesQuizzs() {
  return {
    type: CATEGORIES_QUIZZS
  };
};
var currentSlugCatQuizzs = function currentSlugCatQuizzs(slug) {
  return {
    type: CURRENT_SLUG_CAT_QUIZZS,
    slug: slug
  };
};
var dataForHomePage = function dataForHomePage() {
  return {
    type: DATA_HOME_PAGE
  };
};
var signupSubmit = function signupSubmit() {
  return {
    type: SIGNUP_SUBMIT
  };
};
var signedUp = function signedUp() {
  return {
    type: SIGNEDUP
  };
};
var signeUpError = function signeUpError() {
  return {
    type: SIGNUP_ERROR
  };
};
var signeUpReset = function signeUpReset() {
  return {
    type: SIGNUP_RESET
  };
};
var dataForHomeGame = function dataForHomeGame(categoryId) {
  return {
    type: DATA_HOME_GAME,
    categoryId: categoryId
  };
};
var getQuizByWorldId = function getQuizByWorldId(worldId) {
  return {
    type: QUIZ_BY_WORLD_ID,
    worldId: worldId
  };
};
var getQuestionsByQuizId = function getQuestionsByQuizId(id) {
  return {
    type: QUESTION_BY_ID,
    id: id
  };
};
var getMyScore = function getMyScore() {
  return {
    type: MY_SCORE
  };
};
var userChosenAnswer = function userChosenAnswer() {
  return {
    type: CHOSEN_ANSWER
  };
};
var updateScore = function updateScore() {
  return {
    type: UPDATE_SCORE
  };
};
var getMessage = function getMessage(message) {
  return {
    type: GET_MESSAGE,
    message: message
  };
};
var messageScore = function messageScore(state, ownProps) {
  var score = state.score;
  return score < ownProps / 2 ? 'bad' : 'good';
};
var userResponse = function userResponse(userAnswer, bool, id) {
  return {
    type: USER_RESPONSE,
    userAnswer: userAnswer,
    bool: bool,
    id: id
  };
};
var handleClickButtonNext = function handleClickButtonNext() {
  return {
    type: INCREMENT_INDEX_QUIZ
  };
};
var initialQuiz = function initialQuiz() {
  return {
    type: INITIAL_QUIZ
  };
};
var receivedDataQuestions = function receivedDataQuestions(dataQuestions, dataDescription, dataName) {
  return {
    type: RECEIVED_DATA_QUESTIONS,
    dataQuestions: dataQuestions,
    dataDescription: dataDescription,
    dataName: dataName
  };
};
var infosCatAge = function infosCatAge(category, id) {
  return {
    type: CURRENT_SLUG_CAT_AGE,
    category: category,
    id: id
  };
};
var getPage404 = function getPage404() {
  return {
    type: ERROR_404
  };
};
var dataForPuzzles = function dataForPuzzles(worldId) {
  return {
    type: DATA_FOR_PUZZLES,
    worldId: worldId
  };
};
var countPairs = function countPairs() {
  return {
    type: COUNT_PAIRS
  };
};
var memoryFinished = function memoryFinished() {
  return {
    type: FINISHED
  };
};
var tentative = function tentative() {
  return {
    type: TENTATIVE
  };
};
var incrementeCountClick = function incrementeCountClick() {
  return {
    type: INCREMENTE_COUNT_CLICK
  };
};
var resetCountClick = function resetCountClick() {
  return {
    type: RESET_COUNT_CLICK
  };
};
var updatedData = function updatedData(data) {
  return {
    type: UPDATED_DATA,
    data: data
  };
};
var updatedOpenedCard = function updatedOpenedCard(data) {
  return {
    type: UPDATED_OPENED_CARD,
    data: data
  };
};
var resetMemory = function resetMemory() {
  return {
    type: RESET_MEMORY
  };
};
var dataForPuzzle = function dataForPuzzle(puzzleId) {
  return {
    type: DATA_FOR_PUZZLE,
    puzzleId: puzzleId
  };
}; // User

var getUserInfos = function getUserInfos(data) {
  return {
    type: GET_USER_INFOS,
    data: data
  };
};
var receivedDataPuzzle = function receivedDataPuzzle(data) {
  return {
    type: RECEIVED_DATA_PUZZLE,
    data: data
  };
};
var receivedDataQuizzes = function receivedDataQuizzes(dataQuiz) {
  return {
    type: RECEIVED_DATA_QUIZZES,
    dataQuiz: dataQuiz
  };
};
var logOut = function logOut() {
  return {
    type: LOGOUT
  };
};
var changeViewLogin = function changeViewLogin(currentView) {
  return {
    type: CHANGE_VIEW_LOGIN,
    currentView: currentView
  };
};
var receivedNewPassword = function receivedNewPassword() {
  return {
    type: RECEIVED_NEW_PASSWORD
  };
};
/**
 * Selectors
 */

/**
 * Export
 */

/* harmony default export */ var store_reducer = __webpack_exports__["r"] = (reducer_reducer);

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Nature": [
		211,
		9,
		1
	],
	"./Nature/": [
		211,
		9,
		1
	],
	"./Nature/Card1": [
		494,
		9,
		0,
		4
	],
	"./Nature/Card1.js": [
		494,
		9,
		0,
		4
	],
	"./Nature/Card2": [
		495,
		9,
		0,
		5
	],
	"./Nature/Card2.js": [
		495,
		9,
		0,
		5
	],
	"./Nature/index": [
		211,
		9,
		1
	],
	"./Nature/index.js": [
		211,
		9,
		1
	],
	"./Nature/index.scss": [
		1090,
		7,
		18
	],
	"./Science": [
		212,
		9,
		2
	],
	"./Science/": [
		212,
		9,
		2
	],
	"./Science/Card1": [
		496,
		9,
		0,
		6
	],
	"./Science/Card1.js": [
		496,
		9,
		0,
		6
	],
	"./Science/Card2": [
		497,
		9,
		0,
		7
	],
	"./Science/Card2.js": [
		497,
		9,
		0,
		7
	],
	"./Science/Card3": [
		498,
		9,
		0,
		8
	],
	"./Science/Card3.js": [
		498,
		9,
		0,
		8
	],
	"./Science/index": [
		212,
		9,
		2
	],
	"./Science/index.js": [
		212,
		9,
		2
	],
	"./Science/index.scss": [
		1091,
		7,
		19
	],
	"./Space": [
		213,
		9,
		3
	],
	"./Space/": [
		213,
		9,
		3
	],
	"./Space/Card1": [
		499,
		9,
		0,
		9
	],
	"./Space/Card1.js": [
		499,
		9,
		0,
		9
	],
	"./Space/Card2": [
		491,
		9,
		0,
		10
	],
	"./Space/Card2.js": [
		491,
		9,
		0,
		10
	],
	"./Space/Card3": [
		492,
		9,
		0,
		11
	],
	"./Space/Card3.js": [
		492,
		9,
		0,
		11
	],
	"./Space/Card4": [
		493,
		9,
		0,
		12
	],
	"./Space/Card4.js": [
		493,
		9,
		0,
		12
	],
	"./Space/index": [
		213,
		9,
		3
	],
	"./Space/index.js": [
		213,
		9,
		3
	],
	"./Space/index.scss": [
		1089,
		7,
		20
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 902;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(904);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".quizzs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 80px; }\n  .quizzs h1 {\n    font-size: 4em;\n    color: orange;\n    text-shadow: 1px 1px #000; }\n  .quizzs .wrapper-quizzs {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin: 50px 0; }\n    @media screen and (min-width: 769px) {\n      .quizzs .wrapper-quizzs {\n        flex-direction: row;\n        flex-wrap: wrap;\n        margin: 150px 0; } }\n    .quizzs .wrapper-quizzs .quizzs-fav {\n      font-size: 40px;\n      position: absolute;\n      top: 75px;\n      left: -25px;\n      cursor: pointer; }\n  .quizzs-quiz {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 8px solid lightgreen;\n    background-color: #fff;\n    margin: 20px;\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    align-items: center;\n    position: relative; }\n    @media screen and (min-width: 769px) {\n      .quizzs-quiz {\n        margin: 0 50px; } }\n    .quizzs-quiz img {\n      width: 100px;\n      margin-top: 15px; }\n    .quizzs-quiz a {\n      font-size: 1.8em;\n      font-weight: bold;\n      display: flex;\n      justify-content: center;\n      margin-bottom: 25px;\n      color: #000; }\n", ""]);



/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(906);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".score {\n  background-color: #FFF;\n  max-width: 850px;\n  padding: 20px 5px;\n  border-radius: 15px;\n  margin: 150px 50px; }\n  @media screen and (min-width: 1100px) {\n    .score {\n      margin: 150px auto; } }\n  .score h1 {\n    font-size: 2em;\n    text-align: center;\n    margin-bottom: 50px; }\n    .score h1 span {\n      text-decoration: underline; }\n    @media screen and (min-width: 769px) {\n      .score h1 {\n        font-size: 3em; } }\n  .score h2 {\n    font-size: 1.8em;\n    text-align: center;\n    margin-bottom: 0px;\n    margin-right: 15px; }\n    @media screen and (min-width: 769px) {\n      .score h2 {\n        font-size: 3em; } }\n  .score .score-title {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .score img {\n    width: 40px; }\n    @media screen and (min-width: 769px) {\n      .score img {\n        width: 70px; } }\n  .score-message {\n    margin: 50px 20px;\n    font-size: 1.5em;\n    text-align: center; }\n    @media screen and (min-width: 769px) {\n      .score-message {\n        font-size: 2em; } }\n", ""]);



/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(908);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".quiz {\n  margin: 50px 0 100px; }\n  .quiz h1 {\n    text-align: center;\n    font-size: 3em;\n    margin-bottom: 50px;\n    color: orange;\n    text-shadow: 2px 2px #000; }\n  .quiz-answer--bad {\n    -webkit-animation: shake 0.5s;\n            animation: shake 0.5s; }\n  .quiz-answer--good {\n    -webkit-animation: good 0.8s;\n            animation: good 0.8s; }\n  .quiz--score {\n    margin-top: 200px; }\n  .quiz-questions {\n    background-color: #FFF;\n    max-width: 1000px;\n    margin: 0 50px;\n    text-align: center;\n    padding: 20px 0;\n    border-radius: 15px;\n    box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.06); }\n    @media screen and (min-width: 1100px) {\n      .quiz-questions {\n        margin: 0 auto; } }\n    .quiz-questions button:hover {\n      color: #5e457d !important;\n      background-color: #FFF !important;\n      transition: .5s !important; }\n  .quiz-question {\n    font-size: 2em;\n    font-weight: bold;\n    margin-bottom: 30px; }\n  .quiz-message {\n    font-size: 1.5em;\n    margin: 40px 0 20px; }\n    .quiz-message--good {\n      color: green; }\n    .quiz-message--bad {\n      color: red; }\n  .quiz-nbQuestions {\n    font-size: 1.5em; }\n  .quiz-responses {\n    font-size: 1.5em;\n    margin: 20px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n    .quiz-responses--good {\n      font-weight: bold;\n      color: #FFF;\n      background-color: green; }\n    .quiz-responses--bad {\n      font-weight: bold;\n      color: #fff;\n      background-color: red; }\n    .quiz-responses p {\n      cursor: pointer;\n      margin: 0 30px;\n      border-radius: 10px;\n      border: 1px solid #777;\n      padding: 15px;\n      width: 100%;\n      margin: 5px; }\n      @media screen and (min-width: 619px) {\n        .quiz-responses p {\n          width: 50%; } }\n  .quiz-button-next {\n    background-color: #5e457d !important;\n    color: #FFF !important;\n    padding: 20px 30px !important;\n    border-radius: 10px !important;\n    font-size: 1.2em !important;\n    margin: 20px 0 0 !important;\n    border: 1px solid #5e457d !important; }\n\n@-webkit-keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg); } }\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg); } }\n\n@-webkit-keyframes good {\n  16.65% {\n    transform: translateY(8px); }\n  33.3% {\n    transform: translateY(-6px); }\n  49.95% {\n    transform: translateY(4px); }\n  66.6% {\n    transform: translateY(-2px); }\n  83.25% {\n    transform: translateY(1px); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes good {\n  16.65% {\n    transform: translateY(8px); }\n  33.3% {\n    transform: translateY(-6px); }\n  49.95% {\n    transform: translateY(4px); }\n  66.6% {\n    transform: translateY(-2px); }\n  83.25% {\n    transform: translateY(1px); }\n  100% {\n    transform: translateY(0); } }\n", ""]);



/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(910);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".games {\n  text-align: center;\n  margin-top: 100px; }\n  .games h1 {\n    font-size: 4em;\n    color: orange;\n    text-shadow: 2px 2px #000; }\n  .games-wrapper {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 150px auto 50px; }\n    @media screen and (min-width: 769px) {\n      .games-wrapper {\n        flex-direction: row;\n        flex-wrap: wrap; } }\n  .games-puzzles, .games-memory {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 8px solid lightgreen;\n    background-color: #fff;\n    margin: 20px 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center; }\n    .games-puzzles img, .games-memory img {\n      margin-top: 5px;\n      max-width: 90px; }\n    .games-puzzles a, .games-memory a {\n      font-size: 1.9em;\n      font-weight: bold;\n      display: flex;\n      justify-content: center;\n      color: #000;\n      margin-bottom: 5px; }\n      .games-puzzles a:hover, .games-memory a:hover {\n        color: lightgreen; }\n", ""]);



/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJzcmMvYXNzZXRzL2ltZy9tZW1vcnkuc3ZnIjs="

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(959);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".puzzle {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin: 100px 0;\n  flex-direction: column;\n  align-items: center; }\n  @media screen and (min-width: 769px) {\n    .puzzle {\n      margin-top: 50px; } }\n  .puzzle h1 {\n    font-size: 3em;\n    color: orange;\n    text-shadow: 2px 2px #000;\n    margin-bottom: 50px; }\n  .puzzle-win-text {\n    position: absolute;\n    font-size: 4em;\n    color: green;\n    opacity: 0;\n    z-index: 1;\n    top: -80px; }\n    .puzzle-win-text-display {\n      transition: 1.5s;\n      top: 250px;\n      opacity: 1; }\n      @media screen and (min-width: 769px) {\n        .puzzle-win-text-display {\n          top: 320px;\n          font-size: 7em; } }\n  .puzzle--hide {\n    display: none; }\n  .puzzle-img {\n    width: 350px;\n    height: 350px;\n    display: none; }\n    @media screen and (min-width: 769px) {\n      .puzzle-img {\n        width: 550px;\n        height: 550px; } }\n    .puzzle-img--show {\n      display: block;\n      opacity: 1; }\n    .puzzle-img img {\n      max-width: 100%; }\n", ""]);



/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(961);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".memory-category {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  background-color: #fff;\n  color: #000;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 10px; }\n  .memory-category-img-1 {\n    max-width: 80%; }\n  .memory-category-img-2 {\n    max-width: 100%;\n    max-height: 100%; }\n\n.memory-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 0px 10px 10px; }\n  @media screen and (min-width: 769px) {\n    .memory-container {\n      padding: 0px 100px 10px; } }\n  @media screen and (min-width: 1100px) {\n    .memory-container {\n      padding: 0px 200px 10px; } }\n  @media screen and (min-width: 1550px) {\n    .memory-container {\n      padding: 0px 400px 10px; } }\n  @media screen and (min-width: 1900px) {\n    .memory-container {\n      padding: 0px 500px 10px; } }\n\n.memory-wrapper-cat-1 {\n  cursor: pointer;\n  width: calc(100% / 4 - 10px);\n  perspective: 600px;\n  height: 200px;\n  margin: 5px 5px; }\n  @media screen and (min-width: 769px) {\n    .memory-wrapper-cat-1 {\n      height: 250px; } }\n\n.memory-wrapper-cat-2 {\n  cursor: pointer;\n  width: calc(100% / 4 - 10px);\n  perspective: 600px;\n  height: 200px;\n  margin: 5px 5px; }\n\n.memory-card {\n  transform-style: preserve-3d;\n  position: relative;\n  transform-origin: center right;\n  transition: transform 1s;\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n  border-radius: 10px;\n  background-color: tan; }\n\n.memory-card__face {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n  .memory-card__face p {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    font-size: 1.4em;\n    text-transform: uppercase;\n    font-weight: bold; }\n    .memory-card__face p span {\n      transform: rotate(60deg);\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n      @media screen and (min-width: 600px) {\n        .memory-card__face p span {\n          font-size: 1.4em;\n          transform: rotate(45deg); } }\n      @media screen and (min-width: 1200px) {\n        .memory-card__face p span {\n          font-size: 1.8em; } }\n\n.memory-card__face--front {\n  border-radius: 50%; }\n\n.memory-card__face--back {\n  border-radius: 50%;\n  transform: rotateY(180deg); }\n\n.is-flipped {\n  transform: translateX(-100%) rotateY(-180deg); }\n\n.matched {\n  transform: translateX(-100%) rotateY(-180deg);\n  border: 2px solid green; }\n\n.memory-win {\n  text-align: center;\n  font-size: 1.5em;\n  color: orange;\n  text-shadow: 1px 1px #000; }\n  @media screen and (min-width: 769px) {\n    .memory-win {\n      font-size: 3em; } }\n\n.memory-infos-cat-1 {\n  text-align: center;\n  font-size: 0.9em;\n  margin-top: 100px;\n  display: flex;\n  justify-content: space-between; }\n  @media screen and (min-width: 769px) {\n    .memory-infos-cat-1 {\n      padding: 0px 100px 10px;\n      font-size: 1.5em; } }\n  @media screen and (min-width: 1100px) {\n    .memory-infos-cat-1 {\n      padding: 0px 200px 10px; } }\n  @media screen and (min-width: 1550px) {\n    .memory-infos-cat-1 {\n      padding: 0px 400px 10px; } }\n  @media screen and (min-width: 1900px) {\n    .memory-infos-cat-1 {\n      padding: 0px 500px 10px; } }\n  .memory-infos-cat-1 p {\n    text-align: left;\n    padding: 0 15px;\n    margin-bottom: 0;\n    font-weight: bold;\n    color: orange;\n    text-shadow: 1px 1px #000; }\n\n.memory-infos-cat-2 {\n  text-align: center;\n  font-size: 0.9em;\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between; }\n  @media screen and (min-width: 769px) {\n    .memory-infos-cat-2 {\n      padding: 0px 100px 10px;\n      font-size: 1.5em; } }\n  @media screen and (min-width: 1100px) {\n    .memory-infos-cat-2 {\n      padding: 0px 200px 10px; } }\n  @media screen and (min-width: 1550px) {\n    .memory-infos-cat-2 {\n      padding: 0px 400px 10px; } }\n  @media screen and (min-width: 1900px) {\n    .memory-infos-cat-2 {\n      padding: 0px 500px 10px; } }\n  .memory-infos-cat-2 p {\n    text-align: left;\n    padding: 0 15px;\n    margin-bottom: 0;\n    font-weight: bold;\n    color: orange;\n    text-shadow: 1px 1px #000; }\n", ""]);



/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(963);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".page404 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n  .page404 h1 {\n    font-size: 5em;\n    color: orange;\n    text-shadow: 2px 2px #000;\n    margin-top: 200px; }\n", ""]);



/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(965);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Module
exports.push([module.i, ".profile {\n  margin: auto;\n  margin-top: 10vh;\n  border-radius: 4px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 2%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #eee; }\n  .profile--image {\n    max-width: 200px;\n    width: 40%;\n    background-color: #ccc; }\n  .profile--list {\n    margin-left: 5%; }\n    .profile--list--elem {\n      padding: 10px; }\n      .profile--list--elem:not(:last-child) {\n        border-bottom: #ccc solid 1px; }\n      .profile--list--elem:last-child {\n        margin-top: 5px; }\n", ""]);



/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(967);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Imports
var urlEscape = __webpack_require__(342);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(968));

// Module
exports.push([module.i, "body {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: bottom center;\n  background-attachment: fixed;\n  -webkit-filter: grayscale(5%);\n          filter: grayscale(5%); }\n\n#app {\n  min-height: 100vh; }\n", ""]);



/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/background.jpg";

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });