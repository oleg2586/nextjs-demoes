webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "D:\\Rct\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";


 // const DUMMY_MEETUPS = [
//     {
//         id:'h3',
//         title:"First Meetup",
//         image:'https://costar.brightspotcdn.com/dims4/default/e1b9846/2147483647/strip/true/crop/2100x1485+0+0/resize/2100x1485!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.amazonaws.com%2F10%2Ff0%2F261bc7174a77905a8ba8c5a2a4aa%2Fchicago.jpg',
//         address:'some city in some town',
//         description:'THes is a first meetup'
//     },
//     {
//         id:'h1',
//         title:"First Meetup City",
//         image:'https://blog.se.com/wp-content/uploads/2020/12/GettyImages-946784972_1200x628.jpg',
//         address:'some city in some town 2',
//         description:'THes is a first meetup 2'
//     }
// ];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_c = HomePage;
; // export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     //fetch data from API
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     };
// };

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBRUE7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULENBQW1CQyxLQUFuQixFQUF5QjtBQUNyQixzQkFDQSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFPSDs7S0FSUUYsUTtBQVFSLEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFxQkM7O0FBQ2NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhZDE2MGE5ZjU0MzAwNzA2ZTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOidoMycsXHJcbi8vICAgICAgICAgdGl0bGU6XCJGaXJzdCBNZWV0dXBcIixcclxuLy8gICAgICAgICBpbWFnZTonaHR0cHM6Ly9jb3N0YXIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9lMWI5ODQ2LzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzIxMDB4MTQ4NSswKzAvcmVzaXplLzIxMDB4MTQ4NSEvcXVhbGl0eS8xMDAvP3VybD1odHRwJTNBJTJGJTJGY29zdGFyLWJyaWdodHNwb3QuczMuYW1hem9uYXdzLmNvbSUyRjEwJTJGZjAlMkYyNjFiYzcxNzRhNzc5MDVhOGJhOGM1YTJhNGFhJTJGY2hpY2Fnby5qcGcnLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6J3NvbWUgY2l0eSBpbiBzb21lIHRvd24nLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOidUSGVzIGlzIGEgZmlyc3QgbWVldHVwJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDonaDEnLFxyXG4vLyAgICAgICAgIHRpdGxlOlwiRmlyc3QgTWVldHVwIENpdHlcIixcclxuLy8gICAgICAgICBpbWFnZTonaHR0cHM6Ly9ibG9nLnNlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMi9HZXR0eUltYWdlcy05NDY3ODQ5NzJfMTIwMHg2MjguanBnJyxcclxuLy8gICAgICAgICBhZGRyZXNzOidzb21lIGNpdHkgaW4gc29tZSB0b3duIDInLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOidUSGVzIGlzIGEgZmlyc3QgbWVldHVwIDInXHJcbi8vICAgICB9XHJcbi8vIF07XHJcbmZ1bmN0aW9uIEhvbWVQYWdlIChwcm9wcyl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcbiAgICA8L0ZyYWdtZW50Pik7XHJcbn07XHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcbi8vICAgICBjb25zdCByZXE9Y29udGV4dC5yZXE7XHJcbi8vICAgICBjb25zdCByZXM9Y29udGV4dC5yZXM7XHJcbi8vICAgICAvL2ZldGNoIGRhdGEgZnJvbSBBUElcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6e1xyXG4vLyAgICAgICAgICAgICBtZWV0dXBzOkRVTU1ZX01FRVRVUFNcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIC8vZmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG4gICAgY29uc3QgY2xpZW50ID1hd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL29sZWdpNDo0NTc0NjVAY2x1c3RlcjAuMHIxamJwZy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG4gICAgY29uc3QgZGI9Y2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbnMgPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9ucy5pbnNlcnRPbmUoZGF0YSk7XHJcbiAgICBjb25zdCBtZWV0dXBzcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9ucy5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgLy8gbWVldHVwczpEVU1NWV9NRUVUVVBTXHJcbiAgICAgICAgICAgIG1lZXR1cHM6bWVldHVwc3MubWFwKG1lZXR1cCA9Pih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTptZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOm1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6bWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6bWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgICxyZXZhbGlkYXRlOjEvL2V2ZXJ5IDEwIHNlY29uZHMgZGF0YSB3aWxsIG1lIHJlZ2VuZXJhdGVkIHRvIHVwZGF0ZSBpdHNlbGZcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=