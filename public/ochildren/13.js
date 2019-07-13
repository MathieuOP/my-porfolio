(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1118);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(488);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1103);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1107);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1089);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var calc = function calc(x, y) {
  return [(x - window.innerWidth) / 3, (y - window.innerHeight) / 3];
};

var trans1 = function trans1(x, y) {
  return "translate3d(".concat(x / 12, "px,").concat(y / 12, "px,0)");
};

var trans2 = function trans2(x, y) {
  return "translate3d(".concat(x / 15 + 420, "px,").concat(y / 10 - 230, "px,0)");
};

var trans3 = function trans3(x, y) {
  return "translate3d(".concat(x / 9 + 450, "px,").concat(y / 6 - 120, "px,0)");
};

var trans4 = function trans4(x, y) {
  return "translate3d(".concat(x / 7 - 290, "px,").concat(y / 6.5 - 100, "px,0)");
};

var trans5 = function trans5(x, y) {
  return "translate3d(".concat(x / 6 - 150, "px,").concat(y / 3.5 - -200, "px,0)");
};

var trans6 = function trans6(x, y) {
  return "translate3d(".concat(x / 6 - 170, "px,").concat(y / 4 - -80, "px,0)");
};

var trans7 = function trans7(x, y) {
  return "translate3d(".concat(x / 9 - 610, "px,").concat(y / 4 - -200, "px,0)");
};

var trans8 = function trans8(x, y) {
  return "translate3d(".concat(x / 6 - 250, "px,").concat(y / 3.5 - -200, "px,0)");
};

var Card2 = function Card2(_ref) {
  var selectId = _ref.selectId,
      cardId = _ref.cardId,
      themeName = _ref.themeName;

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* useSpring */ "b"])(function () {
    return {
      xy: [0, 0],
      config: {
        mass: 5,
        tension: 500,
        friction: 180
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      p = _useSpring2[0],
      set = _useSpring2[1];

  var pStyle = {
    fontSize: '1.2em'
  };
  var data = selectId({
    name: 'space',
    id: cardId
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "discovery--space",
    onMouseMove: function onMouseMove(_ref2) {
      var x = _ref2.clientX,
          y = _ref2.clientY;
      return set({
        xy: calc(x, y)
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic5",
    style: {
      transform: p.xy.interpolate(trans1)
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic6",
    style: {
      transform: p.xy.interpolate(trans2)
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    header: data.pics[1].name,
    content: data.pics[1].desc,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: "discovery--space--pic6",
      src: data.pics[1].image_url
    }) // position='top left'
    ,
    style: pStyle
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic7",
    style: {
      transform: p.xy.interpolate(trans3)
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    header: data.pics[2].name,
    content: data.pics[2].desc,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: "discovery--space--pic7",
      src: data.pics[2].image_url
    }) // position='top left'
    ,
    style: pStyle
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic8",
    style: {
      transform: p.xy.interpolate(trans4)
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    header: data.pics[3].name,
    content: data.pics[3].desc,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: "discovery--space--pic8",
      src: data.pics[3].image_url
    }) // position='top left'
    ,
    style: pStyle
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic9",
    style: {
      transform: p.xy.interpolate(trans5)
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    header: data.pics[4].name,
    content: data.pics[4].desc,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: "discovery--space--pic9",
      src: data.pics[4].image_url
    }) // position='top left'
    ,
    style: pStyle
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic10",
    style: {
      transform: p.xy.interpolate(trans6)
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    header: data.pics[5].name,
    content: data.pics[5].desc,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: "discovery--space--pic10",
      src: data.pics[5].image_url
    }) // position='top left'
    ,
    style: pStyle
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic11",
    style: {
      transform: p.xy.interpolate(trans7)
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    header: data.pics[6].name,
    content: data.pics[6].desc,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: "discovery--space--pic11",
      src: data.pics[6].image_url
    }) // position='top left'
    ,
    style: pStyle
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__[/* animated */ "a"].div, {
    className: "discovery--space--pic12",
    style: {
      transform: p.xy.interpolate(trans8)
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "b"], {
    to: "/discovery/".concat(themeName, "&card=").concat(cardId - 1)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    className: "back-button",
    icon: "left chevron",
    style: {
      color: '#0b0900',
      backgroundColor: '#ffdd57'
    }
  }, "Retour")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "b"], {
    to: "/discovery/".concat(themeName, "&card=").concat(cardId + 1)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    className: "forward-button",
    icon: "right chevron",
    style: {
      color: '#0b0900',
      backgroundColor: '#ffdd57'
    }
  }, "Continer")));
};

Card2.propTypes = {
  selectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cardId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Card2);

/***/ })

}]);