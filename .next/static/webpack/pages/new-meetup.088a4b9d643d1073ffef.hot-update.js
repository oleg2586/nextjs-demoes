webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Rct_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Rct_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Rct_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Rct_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");



var _jsxFileName = "D:\\Rct\\06-onwards-to-a-bigger-project-starting-project\\pages\\new-meetup\\index.js";



function MeetUpPage() {
  function addMeetupHandler(_x) {
    return _addMeetupHandler.apply(this, arguments);
  }

  function _addMeetupHandler() {
    var _s = $RefreshSig$();

    _addMeetupHandler = Object(D_Rct_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/D_Rct_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredFOrmData) {
      var router, response, data;
      return D_Rct_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
              console.log('Send Form Data TO Mongo', enteredFOrmData);
              _context.next = 5;
              return fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(enteredFOrmData),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              data = _context.sent;
              console.log('data', data);
              router.push('/');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
    }));
    return _addMeetupHandler.apply(this, arguments);
  }

  ;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }, this);
}

_c = MeetUpPage;
;
/* harmony default export */ __webpack_exports__["default"] = (MeetUpPage);

var _c;

$RefreshReg$(_c, "MeetUpPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0VXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRGT3JtRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBLFdBQ0hDLGdCQURHO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLGdWQUNsQixpQkFBZ0NDLGVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNVQyxvQkFEVixHQUNtQkMsNkRBQVMsRUFENUI7QUFFSUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXNDSixlQUF0QztBQUZKO0FBQUEscUJBRzJCSyxLQUFLLENBQUMsaUJBQUQsRUFBbUI7QUFDM0NDLHNCQUFNLEVBQUMsTUFEb0M7QUFFM0NDLG9CQUFJLEVBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxlQUFmLENBRnNDO0FBRzNDVSx1QkFBTyxFQUFDO0FBQ0osa0NBQWU7QUFEWDtBQUhtQyxlQUFuQixDQUhoQzs7QUFBQTtBQUdVQyxzQkFIVjtBQUFBO0FBQUEscUJBVXNCQSxRQUFRLENBQUNDLElBQVQsRUFWdEI7O0FBQUE7QUFVVUMsa0JBVlY7QUFXSVYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBbUJTLElBQW5CO0FBQ0FaLG9CQUFNLENBQUNhLElBQVAsQ0FBWSxHQUFaOztBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRGtCO0FBQUEsY0FFQ1oscURBRkQ7QUFBQTtBQUFBO0FBQUE7O0FBY2pCO0FBQ0Qsc0JBQ1EscUVBQUMseUVBQUQ7QUFBZSxlQUFXLEVBQUVIO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQUdIOztLQWxCUUQsVTtBQWtCUjtBQUNjQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjA4OGE0YjlkNjQzZDEwNzNmZmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybSc7XHJcblxyXG5mdW5jdGlvbiBNZWV0VXBQYWdlICgpe1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihlbnRlcmVkRk9ybURhdGEpe1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZW5kIEZvcm0gRGF0YSBUTyBNb25nbycsZW50ZXJlZEZPcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1tZWV0dXAnLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShlbnRlcmVkRk9ybURhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9YXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJyxkYXRhKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfSAvPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9