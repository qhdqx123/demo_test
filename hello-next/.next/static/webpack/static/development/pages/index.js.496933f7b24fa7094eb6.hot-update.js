webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "E:\\demo_test\\hello-next\\components\\MyLayout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}; // 定义组件的方式
// 1
// const Layout = props =>(
//     <div style={layoutStyle}>
//         <Header/>
//         {props.children}
//     </div>
// )
// export default Layout
// 2
// const withLayout = Page =>{
//     return () => (
//         <div style={layoutStyle}>
//             <Header/>
//             <Page/>
//         </div>
//     )
// }
// export default withLayout
// 3

var layout = function layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), props.content);
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ })

})
//# sourceMappingURL=index.js.496933f7b24fa7094eb6.hot-update.js.map