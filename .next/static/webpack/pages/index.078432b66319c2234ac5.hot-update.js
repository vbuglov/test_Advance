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

/***/ "./src/components/5_pages/PhonePage/index.js":
/*!***************************************************!*\
  !*** ./src/components/5_pages/PhonePage/index.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_slicers_counterSlicer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/slicers/counterSlicer */ \"./src/store/slicers/counterSlicer/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/5_pages/PhonePage/styles/index.js\");\n/* harmony import */ var _atoms_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/atoms/index */ \"./src/components/1_atoms/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/vyc/Documents/template/src/components/5_pages/PhonePage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Option = _atoms_index__WEBPACK_IMPORTED_MODULE_4__.Select.Option;\n\nvar PhonePage = function PhonePage() {\n  _s();\n\n  var count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.counter.value;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        \"aria-label\": \"Increment value\",\n        onClick: function onClick() {\n          return dispatch((0,_store_slicers_counterSlicer__WEBPACK_IMPORTED_MODULE_2__.increment)());\n        },\n        children: \"Increment\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n        children: count\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        \"aria-label\": \"Decrement value\",\n        onClick: function onClick() {\n          return dispatch((0,_store_slicers_counterSlicer__WEBPACK_IMPORTED_MODULE_2__.decrement)());\n        },\n        children: \"Decrement\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"slect\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n        value: 16,\n        children: \"12\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_index__WEBPACK_IMPORTED_MODULE_4__.Button, {\n      color: \"#2873eb\",\n      children: \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PhonePage, \"Hx8ZS0E5Jr/6DPTYqq8Q1lSknko=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];\n});\n\n_c = PhonePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhonePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"PhonePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy81X3BhZ2VzL1Bob25lUGFnZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBUVEsTUFBUixHQUFtQkQsdURBQW5COztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsS0FBSyxHQUFHVCx3REFBVyxDQUFDLFVBQUNVLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsS0FBekI7QUFBQSxHQUFELENBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHWix3REFBVyxFQUE1QjtBQUVBLHNCQUNFLDhEQUFDLDRDQUFEO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUNFLHNCQUFXLGlCQURiO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1ZLFFBQVEsQ0FBQ1YsdUVBQVMsRUFBVixDQUFkO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFBQSxrQkFBT007QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFRRTtBQUNFLHNCQUFXLGlCQURiO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1JLFFBQVEsQ0FBQ1gsdUVBQVMsRUFBVixDQUFkO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZ0JFO0FBQUEsNkJBQ0U7QUFBUSxhQUFLLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsZUFtQkUsOERBQUMsZ0RBQUQ7QUFBUSxXQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQTNCRDs7R0FBTU07VUFDVVIsc0RBQ0dDOzs7S0FGYk87QUE2Qk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvNV9wYWdlcy9QaG9uZVBhZ2UvaW5kZXguanM/YzNmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGRlY3JlbWVudCwgaW5jcmVtZW50IH0gZnJvbSBcIkAvc3RvcmUvc2xpY2Vycy9jb3VudGVyU2xpY2VyXCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdCB9IGZyb20gXCJAL2F0b21zL2luZGV4XCI7XG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5cbmNvbnN0IFBob25lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiSW5jcmVtZW50IHZhbHVlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnQoKSl9XG4gICAgICAgID5cbiAgICAgICAgICBJbmNyZW1lbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuPntjb3VudH08L3NwYW4+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVjcmVtZW50IHZhbHVlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnQoKSl9XG4gICAgICAgID5cbiAgICAgICAgICBEZWNyZW1lbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzbGVjdD5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTZ9PjEyPC9vcHRpb24+XG4gICAgICA8L3NsZWN0PlxuICAgICAgPEJ1dHRvbiBjb2xvcj1cIiMyODczZWJcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L0J1dHRvbj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiV3JhcHBlciIsIkJ1dHRvbiIsIlNlbGVjdCIsIk9wdGlvbiIsIlBob25lUGFnZSIsImNvdW50Iiwic3RhdGUiLCJjb3VudGVyIiwidmFsdWUiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/5_pages/PhonePage/index.js\n");

/***/ })

});