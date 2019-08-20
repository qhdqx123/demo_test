webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\demo_test\\hello-next\\pages\\index.js";

//1 
// import Layout from '../components/MyLayout'
// const Index = () => (
//     <Layout>
//         <p>hello Next.js</p>
//     </Layout>
// );
// export default Index
//2
// import withLayout from '../components/MyLayout'
// const Page = ()=> <p>hello Next.js</p>
// export default withLayout(Page)
// 3
// import Layout from '../components/MyLayout'
// const indexPageContent = <p>hello Next.js</p>
// export default function Index() {
//     return <Layout content={indexPageContent}></Layout>
// }
// blog demo
// import Layout from '../components/MyLayout'
// import Link from 'next/link'
// const PostLink = props =>(
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// )
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="Hello Next.js" />
//                 <PostLink title="Learn Next.js is awesome" />
//                 <PostLink title="Deploy apps with Zeit" />
//             </ul>
//         </Layout>
//     )
// }
// dynamic routing
// import Layout from '../components/MyLayout'
// import Link from 'next/link'
// const PostLink = props =>(
//     <li>
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// )
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>my Blob</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" />
//                 <PostLink id="learn-nextjs" />
//                 <PostLink id="deploy-nextjs" />
//             </ul>
//         </Layout>
//     )
// }
// fetch data




var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Tv show"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, props.shows.map(function (show) {
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, show.name)));
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.4dbae4844518d6782c9d.hot-update.js.map