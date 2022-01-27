"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_customButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/customButton */ \"./components/customButton.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewCampaign = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), contribution = ref[0], setContribution = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        errorStatus: false,\n        errorMessage: ''\n    }), error = ref1[0], setErrorMessage = ref1[1];\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var accounts;\n            return D_projects_etherium_crowdFunding_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].eth.getAccounts();\n                    case 4:\n                        accounts = _ctx.sent;\n                        console.log(accounts);\n                        _ctx.next = 8;\n                        return _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__[\"default\"].methods.createCampaign(contribution).send({\n                            from: accounts[0]\n                        });\n                    case 8:\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0.Message);\n                        setErrorMessage({\n                            errorStatus: true,\n                            errorMessage: _ctx.t0.message\n                        });\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n            error: error.errorStatus,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: \"Campaign Name\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            placeholder: \"Campaign Name\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: \"Minimum Contribution in (Wei) \"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                            label: \"wei\",\n                            labelPosition: \"right\",\n                            placeholder: \"Amount in Wei\",\n                            value: contribution,\n                            onChange: function(event) {\n                                return setContribution(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Checkbox, {\n                        label: \"I agree to the Terms and Conditions\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {\n                    error: true,\n                    negative: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message.Header, {\n                            children: \"Oopss!!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: error.errorMessage\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_customButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    content: \"Submit\",\n                    iconName: \"add\",\n                    floated: false,\n                    onSubmit: onSubmit\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projects\\\\etherium\\\\crowdFunding\\\\pages\\\\campaigns\\\\new.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_s(NewCampaign, \"UWlkuCdoWIm63akmoTYZvrZsObY=\");\n_c = NewCampaign;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewCampaign);\nvar _c;\n$RefreshReg$(_c, \"NewCampaign\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNtQztBQUM5QjtBQUNZO0FBQ1o7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsR0FBSyxDQUFDVyxXQUFXLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDOUIsR0FBSyxDQUFtQ1gsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBM0NZLFlBQVksR0FBcUJaLEdBQVcsS0FBOUJhLGVBQWUsR0FBSWIsR0FBVztJQUNuRCxHQUFLLENBQTRCQSxJQUFpRCxHQUFqREEsK0NBQVEsQ0FBQyxDQUFDO1FBQUNjLFdBQVcsRUFBRSxLQUFLO1FBQUVDLFlBQVksRUFBRSxDQUFFO0lBQUEsQ0FBQyxHQUExRUMsS0FBSyxHQUFxQmhCLElBQWlELEtBQXBFaUIsZUFBZSxHQUFJakIsSUFBaUQ7SUFFbEYsR0FBSyxDQUFDa0IsUUFBUTtpTEFBRyxRQUFRLFNBQURDLEtBQUssRUFBSyxDQUFDO2dCQUl6QkMsUUFBUTs7Ozt3QkFIaEJELEtBQUssQ0FBQ0UsY0FBYzs7OytCQUdLWixzRUFBb0I7O3dCQUFyQ1csUUFBUTt3QkFDZEksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVE7OytCQUNkWixnRkFDVyxDQUFDSSxZQUFZLEVBQzNCZ0IsSUFBSSxDQUFDLENBQUM7NEJBQUNDLElBQUksRUFBRVQsUUFBUSxDQUFDLENBQUM7d0JBQUUsQ0FBQzs7Ozs7Ozt3QkFFN0JJLE9BQU8sQ0FBQ0MsR0FBRyxTQUFLcEIsT0FBTzt3QkFDdkJZLGVBQWUsQ0FBQyxDQUFDSDs0QkFBQUEsV0FBVyxFQUFFLElBQUk7NEJBQUVDLFlBQVksVUFBTWUsT0FBTzt3QkFBQSxDQUFDOzs7Ozs7Ozs7OztRQUVsRSxDQUFDO3dCQWJLWixRQUFRLENBQVVDLEtBQUs7Ozs7SUFlN0IsTUFBTSw2RUFDSGIsMERBQU07OEZBQ0pILG1EQUFJO1lBQUNhLEtBQUssRUFBRUEsS0FBSyxDQUFDRixXQUFXOzs0RkFDM0JYLHlEQUFVOztvR0FDUjZCLENBQUs7c0NBQUMsQ0FBYTs7Ozs7O29HQUNuQkMsQ0FBSzs0QkFBQ0MsV0FBVyxFQUFDLENBQWU7Ozs7Ozs7Ozs7Ozs0RkFFbkMvQix5REFBVTs7b0dBQ1I2QixDQUFLO3NDQUFDLENBQThCOzs7Ozs7b0dBQ3BDNUIsb0RBQUs7NEJBQ0o0QixLQUFLLEVBQUMsQ0FBSzs0QkFDWEcsYUFBYSxFQUFDLENBQU87NEJBQ3JCRCxXQUFXLEVBQUMsQ0FBZTs0QkFDM0JFLEtBQUssRUFBRXhCLFlBQVk7NEJBQ25CeUIsUUFBUSxFQUFFLFFBQVEsQ0FBUGxCLEtBQUs7Z0NBQUtOLE1BQU0sQ0FBTkEsZUFBZSxDQUFDTSxLQUFLLENBQUNtQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs7NEZBRzFEakMseURBQVU7MEdBQ1JELHVEQUFRO3dCQUFDOEIsS0FBSyxFQUFDLENBQXFDOzs7Ozs7Ozs7Ozs0RkFJdEQzQixzREFBTztvQkFBQ1csS0FBSztvQkFBQ3VCLFFBQVE7O29HQUNwQmxDLDZEQUFjO3NDQUFDLENBRWhCOzs7Ozs7b0dBQ0NvQyxDQUFDO3NDQUFFekIsS0FBSyxDQUFDRCxZQUFZOzs7Ozs7Ozs7Ozs7NEZBRXZCUixnRUFBWTtvQkFDWG1DLE9BQU8sRUFBQyxDQUFRO29CQUNoQkMsUUFBUSxFQUFDLENBQUs7b0JBQ2RDLE9BQU8sRUFBRSxLQUFLO29CQUNkMUIsUUFBUSxFQUFFQSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QixDQUFDO0dBeERLUixXQUFXO0tBQVhBLFdBQVc7QUEwRGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9iZDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2N1c3RvbUJ1dHRvblwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5cclxuY29uc3QgTmV3Q2FtcGFpZ24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbY29udHJpYnV0aW9uLCBzZXRDb250cmlidXRpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoeyBlcnJvclN0YXR1czogZmFsc2UsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XHJcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xyXG4gICAgICAgIC5jcmVhdGVDYW1wYWlnbihjb250cmlidXRpb24pXHJcbiAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIuTWVzc2FnZSlcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKHtlcnJvclN0YXR1czogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Rm9ybSBlcnJvcj17ZXJyb3IuZXJyb3JTdGF0dXN9PlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPkNhbXBhaWduIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ2FtcGFpZ24gTmFtZVwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uIGluIChXZWkpIDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudCBpbiBXZWlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb250cmlidXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiSSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICB7LyogPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+ICovfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIG5lZ2F0aXZlPlxyXG4gICAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPlxyXG4gICAgICAgICAgICBPb3BzcyEhXHJcbiAgICAgICAgICA8L01lc3NhZ2UuSGVhZGVyPlxyXG4gICAgICAgICAgPHA+e2Vycm9yLmVycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgIDxDdXN0b21CdXR0b25cclxuICAgICAgICAgIGNvbnRlbnQ9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgaWNvbk5hbWU9XCJhZGRcIlxyXG4gICAgICAgICAgZmxvYXRlZD17ZmFsc2V9XHJcbiAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0NhbXBhaWduO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsIkN1c3RvbUJ1dHRvbiIsImZhY3RvcnkiLCJ3ZWIzIiwiTmV3Q2FtcGFpZ24iLCJwcm9wcyIsImNvbnRyaWJ1dGlvbiIsInNldENvbnRyaWJ1dGlvbiIsImVycm9yU3RhdHVzIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwiYWNjb3VudHMiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsIkZpZWxkIiwibGFiZWwiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwibGFiZWxQb3NpdGlvbiIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJuZWdhdGl2ZSIsIkhlYWRlciIsInAiLCJjb250ZW50IiwiaWNvbk5hbWUiLCJmbG9hdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

});