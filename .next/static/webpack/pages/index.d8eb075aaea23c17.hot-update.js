"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_campaigns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/campaigns */ \"./components/campaigns.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar CampaignIndex = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(CampaignIndex, _Component);\n    var _super = _createSuper(CampaignIndex);\n    function CampaignIndex() {\n        _classCallCheck(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    _createClass(CampaignIndex, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_campaigns__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        campaigns: this.props.cam\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 16\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", {\n                                    cam: [\n                                        \"abd\",\n                                        \"cde\"\n                                    ]\n                                });\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNnQjtBQUNBO0FBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFekNHLGFBQWEsaUJBQW5CLFFBQVE7O2NBQUZBLGFBQWE7OEJBQWJBLGFBQWE7YUFBYkEsYUFBYTs4QkFBYkEsYUFBYTs7O2lCQUFiQSxhQUFhOztZQVVmQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBQ04sTUFBTSw2RUFBRUMsQ0FBRzswR0FDTkgsNkRBQVM7d0JBQUNJLFNBQVMsRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7WUFFNUMsQ0FBQzs7OztZQVhZQyxHQUFlLEVBQWZBLENBQWU7bUJBQTVCLFFBQVEsQ0FBS0EsZUFBZTtxTEFBNUIsUUFBUSxXQUF1QixDQUFDOzs7OzZEQUdyQixDQUFDRDtvQ0FBQUEsR0FBRyxFQUFFLENBQUM7d0NBQUEsQ0FBSzt3Q0FBRSxDQUFLO29DQUFBLENBQUM7Z0NBQUEsQ0FBQzs7Ozs7O2dCQUNoQyxDQUFDOzs7O1dBUENMLGFBQWE7RUFBU0gsd0RBQWU7QUFnQjNDLCtEQUFlRyxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5cclxuaW1wb3J0IENhbXBhaWducyBmcm9tIFwiLi4vY29tcG9uZW50cy9jYW1wYWlnbnNcIjtcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgIHtcclxuICAgIFxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgLy8gbGV0IGNhbSA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhbSlcclxuICAgICAgICByZXR1cm4ge2NhbTogW1wiYWJkXCIsIFwiY2RlXCJdfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYW1wYWlnbnMgY2FtcGFpZ25zPXt0aGlzLnByb3BzLmNhbX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59ICAgXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsIkNhbXBhaWducyIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXIiLCJkaXYiLCJjYW1wYWlnbnMiLCJwcm9wcyIsImNhbSIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});