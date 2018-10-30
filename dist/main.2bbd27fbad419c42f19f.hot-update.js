webpackHotUpdate("main",{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AggregateRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AggregateRating */ \"./src/AggregateRating.jsx\");\n/* harmony import */ var _SpecificRatings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecificRatings */ \"./src/SpecificRatings.jsx\");\n/* harmony import */ var _ReviewsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewsList */ \"./src/ReviewsList.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\nvar $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {};\n    _this.getReviews = _this.getReviews.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"ComponentDidMount\",\n    value: function ComponentDidMount() {\n      this.getReviews();\n    }\n  }, {\n    key: \"getReviews\",\n    value: function getReviews(num) {\n      $.ajax({\n        url: \"/listing-reviews/\".concat(num),\n        contentType: 'application/json',\n        method: 'GET',\n        success: function success(data) {\n          console.log('SUCCESFUL GET REQ WITH --->', data);\n        },\n        error: function error(err) {\n          console.log('ERROR IN GET REQ-->', err);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: function onClick() {\n          return _this2.getReviews(4);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AggregateRating__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAuanN4PzE1OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZ2dyZWdhdGVSYXRpbmcgZnJvbSAnLi9BZ2dyZWdhdGVSYXRpbmcnO1xuaW1wb3J0IFNwZWNpZmljUmF0aW5ncyBmcm9tICcuL1NwZWNpZmljUmF0aW5ncyc7XG5pbXBvcnQgUmV2aWV3c0xpc3QgZnJvbSAnLi9SZXZpZXdzTGlzdCc7XG5cbmNvbnN0ICQgPSByZXF1aXJlICgnanF1ZXJ5Jyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICAgIHRoaXMuZ2V0UmV2aWV3cyA9IHRoaXMuZ2V0UmV2aWV3cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgQ29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuZ2V0UmV2aWV3cygpO1xuICB9XG5cbiAgZ2V0UmV2aWV3cyhudW0pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgL2xpc3RpbmctcmV2aWV3cy8ke251bX1gLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiAoIGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTRlVMIEdFVCBSRVEgV0lUSCAtLS0+JyxkYXRhKVxuICAgICAgfSksXG4gICAgICBlcnJvcjogKCBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUIFJFUS0tPicsIGVycilcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0UmV2aWV3cyg0KX0+XG4gICAgICAgICAgICA8QWdncmVnYXRlUmF0aW5nLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSZXZpZXdzTGlzdC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7QUFyQ0E7QUFDQTtBQXdDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.jsx\n");

/***/ })

})