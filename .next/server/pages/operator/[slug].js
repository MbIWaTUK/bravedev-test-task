module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/operator/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/operator/[slug].js":
/*!**********************************!*\
  !*** ./pages/operator/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OperatorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-text-mask */ "react-text-mask");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "F:\\projects\\brave developer\\test\\test-task\\pages\\operator\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const PAY = _apollo_client__WEBPACK_IMPORTED_MODULE_8__["gql"]`
  mutation Pay($input: Values) {
    pay(input: $input)
  }
`;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({});

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }));
}

function TextMaskCustom(props) {
  const {
    inputRef
  } = props,
        other = _objectWithoutProperties(props, ["inputRef"]);

  return __jsx(react_text_mask__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/] // placeholderChar={'\u2000'}
    ,
    showMask: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }));
}

TextMaskCustom.propTypes = {
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};

function NumberFormatCustom(props) {
  const {
    inputRef,
    onChange
  } = props,
        other = _objectWithoutProperties(props, ["inputRef", "onChange"]);

  return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({}, other, {
    getInputRef: inputRef,
    onValueChange: values => {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    isNumericString: true // suffix="₽"
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }));
}

NumberFormatCustom.propTypes = {
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
function OperatorPage({
  rout
}) {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    0: operator,
    1: setOperator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rout);
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [pay] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(PAY);

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  const handleChangeTotal = e => {
    setTotal(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = {};

    if (phone.length === 0) {
      errors.phone = 'Введите номер телефона';
    }

    if (phone && !('(', /[1 - 9] /, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/.test(phone) && !phone.includes("_"))) {
      errors.phone = 'Телефон введен не верно';
    }

    if (total.length === 0) {
      errors.total = 'Введите сумму от 1 до 1000';
    }

    if (total && (parseFloat(total) < 1 || parseFloat(total) > 1000)) {
      errors.total = 'Сумма должна быть от 1 до 1000';
    }

    await setError(errors);
    const err = await Object.keys(errors).length;

    if (err === 0) {
      const {
        data
      } = await pay({
        variables: {
          input: {
            phone,
            operator,
            total
          }
        }
      });

      if (data && data.pay === false) {
        await handleClick();
        setMsg("Ошибка в запросе");
      } else if (data && data.pay === true) {
        await handleClick();
        setMsg("Оплата полшла успешно");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    }
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, msg && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: `${msg === "Ошибка в запросе" ? "error" : "success"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, msg)), __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "column",
    justify: "center",
    alignItems: "center",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "standard-basic",
    label: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440",
    disabled: true,
    value: operator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    error: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    error: error && error.phone ? true : false,
    label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    value: phone,
    onChange: handleChangePhone,
    name: "phone",
    id: "formatted-text-mask-input",
    InputProps: {
      inputComponent: TextMaskCustom
    },
    helperText: error && error.phone ? error.phone : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    error: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    error: error && error.total ? true : false,
    label: "\u0421\u0443\u043C\u043C\u0430",
    value: total,
    onChange: handleChangeTotal,
    name: "total",
    id: "formatted-numberformat-input",
    InputProps: {
      inputComponent: NumberFormatCustom
    },
    helperText: error && error.total ? error.total : "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    type: "submit",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, "\u041D\u0430\u0437\u0430\u0434")))));
}

OperatorPage.getInitialProps = ctx => {
  const router = ctx.query.slug;
  return {
    rout: router ? router : "оператор"
  };
};

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "react-text-mask":
/*!**********************************!*\
  !*** external "react-text-mask" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvb3BlcmF0b3IvW3NsdWddLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdGV4dC1tYXNrXCIiXSwibmFtZXMiOlsiUEFZIiwiZ3FsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsIkFsZXJ0IiwicHJvcHMiLCJUZXh0TWFza0N1c3RvbSIsImlucHV0UmVmIiwib3RoZXIiLCJyZWYiLCJpbnB1dEVsZW1lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIk51bWJlckZvcm1hdEN1c3RvbSIsIm9uQ2hhbmdlIiwidmFsdWVzIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwic3RyaW5nIiwiT3BlcmF0b3JQYWdlIiwicm91dCIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVyYXRvciIsInNldE9wZXJhdG9yIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidG90YWwiLCJzZXRUb3RhbCIsIm1zZyIsInNldE1zZyIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwicmVhc29uIiwiZXJyb3IiLCJzZXRFcnJvciIsInBheSIsInVzZU11dGF0aW9uIiwiaGFuZGxlQ2hhbmdlUGhvbmUiLCJlIiwiaGFuZGxlQ2hhbmdlVG90YWwiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9ycyIsImxlbmd0aCIsInRlc3QiLCJpbmNsdWRlcyIsInBhcnNlRmxvYXQiLCJlcnIiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsInZhcmlhYmxlcyIsImlucHV0Iiwic2V0VGltZW91dCIsInB1c2giLCJpbnB1dENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUdDLGtEQUFJOzs7O0NBQWhCO0FBTUEsTUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLEVBQUQsQ0FBNUI7O0FBSUEsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLFNBQU8sTUFBQyw2REFBRDtBQUFVLGFBQVMsRUFBRSxDQUFyQjtBQUF3QixXQUFPLEVBQUM7QUFBaEMsS0FBNkNBLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JELEtBQXhCLEVBQStCO0FBQzdCLFFBQU07QUFBRUU7QUFBRixNQUF5QkYsS0FBL0I7QUFBQSxRQUFxQkcsS0FBckIsNEJBQStCSCxLQUEvQjs7QUFFQSxTQUNFLE1BQUMsc0RBQUQsZUFDTUcsS0FETjtBQUVFLE9BQUcsRUFBR0MsR0FBRCxJQUFTO0FBQ1pGLGNBQVEsQ0FBQ0UsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFlBQVAsR0FBc0IsSUFBMUIsQ0FBUjtBQUNELEtBSkg7QUFLRSxRQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sT0FBTixFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsSUFBakQsRUFBdUQsR0FBdkQsRUFBNEQsSUFBNUQsRUFBa0UsSUFBbEUsRUFBd0UsR0FBeEUsRUFBNkUsSUFBN0UsRUFBbUYsSUFBbkYsQ0FMUixDQU1FO0FBTkY7QUFPRSxZQUFRLE1BUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBV0Q7O0FBRURKLGNBQWMsQ0FBQ0ssU0FBZixHQUEyQjtBQUN6QkosVUFBUSxFQUFFSyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREEsQ0FBM0I7O0FBSUEsU0FBU0Msa0JBQVQsQ0FBNEJWLEtBQTVCLEVBQW1DO0FBQ2pDLFFBQU07QUFBRUUsWUFBRjtBQUFZUztBQUFaLE1BQW1DWCxLQUF6QztBQUFBLFFBQStCRyxLQUEvQiw0QkFBeUNILEtBQXpDOztBQUVBLFNBQ0UsTUFBQywwREFBRCxlQUNNRyxLQUROO0FBRUUsZUFBVyxFQUFFRCxRQUZmO0FBR0UsaUJBQWEsRUFBR1UsTUFBRCxJQUFZO0FBQ3pCRCxjQUFRLENBQUM7QUFDUEUsY0FBTSxFQUFFO0FBQ05DLGVBQUssRUFBRUYsTUFBTSxDQUFDRTtBQURSO0FBREQsT0FBRCxDQUFSO0FBS0QsS0FUSDtBQVVFLG1CQUFlLE1BVmpCLENBV0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFlRDs7QUFFREosa0JBQWtCLENBQUNKLFNBQW5CLEdBQStCO0FBQzdCSixVQUFRLEVBQUVLLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFESTtBQUU3Qk0sTUFBSSxFQUFFUixpREFBUyxDQUFDUyxNQUFWLENBQWlCUCxVQUZNO0FBRzdCRSxVQUFRLEVBQUVKLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFISSxDQUEvQjtBQU1lLFNBQVNRLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFnQztBQUM3QyxRQUFNQyxPQUFPLEdBQUd0QixTQUFTLEVBQXpCO0FBQ0EsUUFBTXVCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUNOLElBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCTixzREFBUSxDQUFDLElBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ08sSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JSLHNEQUFRLENBQUMsS0FBRCxDQUFoQzs7QUFFQSxRQUFNUyxXQUFXLEdBQUcsTUFBTTtBQUN4QkQsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUUsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNyQyxRQUFJQSxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMxQjtBQUNEOztBQUVESixXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FORDs7QUFRQSxRQUFNO0FBQUEsT0FBQ0ssS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JkLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU0sQ0FBQ2UsR0FBRCxJQUFRQyxrRUFBVyxDQUFDN0MsR0FBRCxDQUF6Qjs7QUFFQSxRQUFNOEMsaUJBQWlCLEdBQUlDLENBQUQsSUFBTztBQUMvQmhCLFlBQVEsQ0FBQ2dCLENBQUMsQ0FBQzdCLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxRQUFNNkIsaUJBQWlCLEdBQUlELENBQUQsSUFBTztBQUMvQmQsWUFBUSxDQUFDYyxDQUFDLENBQUM3QixNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsUUFBTThCLFlBQVksR0FBRyxNQUFPRixDQUFQLElBQWE7QUFDaENBLEtBQUMsQ0FBQ0csY0FBRjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLFFBQUlyQixLQUFLLENBQUNzQixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRCxZQUFNLENBQUNyQixLQUFQLEdBQWUsd0JBQWY7QUFDRDs7QUFFRCxRQUNFQSxLQUFLLElBQUksRUFBRSxLQUFLLFVBQUwsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEMsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0MsRUFBbUQsSUFBbkQsRUFBeUQsR0FBekQsRUFBOEQsSUFBOUQsRUFBb0UsSUFBcEUsRUFBMEUsR0FBMUUsRUFBK0UsSUFBL0UsRUFBcUYsS0FBS3VCLElBQUwsQ0FBVXZCLEtBQVYsS0FBb0IsQ0FBQ0EsS0FBSyxDQUFDd0IsUUFBTixDQUFlLEdBQWYsQ0FBNUcsQ0FEWCxFQUVFO0FBQ0FILFlBQU0sQ0FBQ3JCLEtBQVAsR0FBZSx5QkFBZjtBQUNEOztBQUVELFFBQUlFLEtBQUssQ0FBQ29CLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJELFlBQU0sQ0FBQ25CLEtBQVAsR0FBZSw0QkFBZjtBQUNEOztBQUVELFFBQUlBLEtBQUssS0FDTnVCLFVBQVUsQ0FBQ3ZCLEtBQUQsQ0FBVixHQUFvQixDQUFwQixJQUF5QnVCLFVBQVUsQ0FBQ3ZCLEtBQUQsQ0FBVixHQUFvQixJQUR2QyxDQUFULEVBRUU7QUFDQW1CLFlBQU0sQ0FBQ25CLEtBQVAsR0FBZSxnQ0FBZjtBQUNEOztBQUVELFVBQU1XLFFBQVEsQ0FBQ1EsTUFBRCxDQUFkO0FBQ0EsVUFBTUssR0FBRyxHQUFHLE1BQU1DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxNQUFaLEVBQW9CQyxNQUF0Qzs7QUFFQSxRQUFJSSxHQUFHLEtBQUssQ0FBWixFQUFlO0FBRWIsWUFBTTtBQUFFRztBQUFGLFVBQVcsTUFBTWYsR0FBRyxDQUFDO0FBQ3pCZ0IsaUJBQVMsRUFBRTtBQUNUQyxlQUFLLEVBQUU7QUFDTC9CLGlCQURLO0FBRUxILG9CQUZLO0FBR0xLO0FBSEs7QUFERTtBQURjLE9BQUQsQ0FBMUI7O0FBV0EsVUFBSTJCLElBQUksSUFBSUEsSUFBSSxDQUFDZixHQUFMLEtBQWEsS0FBekIsRUFBZ0M7QUFDOUIsY0FBTU4sV0FBVyxFQUFqQjtBQUNBSCxjQUFNLENBQUMsa0JBQUQsQ0FBTjtBQUNELE9BSEQsTUFHTyxJQUFJd0IsSUFBSSxJQUFJQSxJQUFJLENBQUNmLEdBQUwsS0FBYSxJQUF6QixFQUErQjtBQUNwQyxjQUFNTixXQUFXLEVBQWpCO0FBQ0FILGNBQU0sQ0FBQyx1QkFBRCxDQUFOO0FBQ0EyQixrQkFBVSxDQUFDLE1BQU07QUFDZnJDLGdCQUFNLENBQUNzQyxJQUFQLENBQVksR0FBWjtBQUNELFNBRlMsRUFFUCxJQUZPLENBQVY7QUFHRDtBQUVGO0FBRUYsR0FyREQ7O0FBd0RBLFNBQ0UsTUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRzdCLEdBQUcsSUFBSSxNQUFDLDBEQUFEO0FBQVUsUUFBSSxFQUFFRSxJQUFoQjtBQUFzQixvQkFBZ0IsRUFBRSxJQUF4QztBQUE4QyxXQUFPLEVBQUVHLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTixNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBRyxHQUFFTCxHQUFHLEtBQUssa0JBQVIsR0FBNkIsT0FBN0IsR0FBdUMsU0FBVSxFQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEdBREgsQ0FETSxDQUZWLEVBUUU7QUFBTSxZQUFRLEVBQUVlLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUlFLGNBQVUsRUFBQyxRQUpiO0FBS0UsV0FBTyxFQUFFLENBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVyxNQUFFLEVBQUMsZ0JBQWQ7QUFBK0IsU0FBSyxFQUFDLGtEQUFyQztBQUFnRCxZQUFRLEVBQUUsSUFBMUQ7QUFBZ0UsU0FBSyxFQUFFdEIsUUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkYsRUFZRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQywyREFBRDtBQUNFLFNBQUssRUFBRWUsS0FBSyxJQUFJQSxLQUFLLENBQUNaLEtBQWYsR0FBdUIsSUFBdkIsR0FBOEIsS0FEdkM7QUFFRSxTQUFLLEVBQUMsaUZBRlI7QUFHRSxTQUFLLEVBQUVBLEtBSFQ7QUFJRSxZQUFRLEVBQUVnQixpQkFKWjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBTUUsTUFBRSxFQUFDLDJCQU5MO0FBT0UsY0FBVSxFQUFFO0FBQ1ZrQixvQkFBYyxFQUFFMUQ7QUFETixLQVBkO0FBVUUsY0FBVSxFQUFFb0MsS0FBSyxJQUFJQSxLQUFLLENBQUNaLEtBQWYsR0FBdUJZLEtBQUssQ0FBQ1osS0FBN0IsR0FBcUMsS0FWbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FaRixFQWdDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLFNBQUssRUFBRVksS0FBSyxJQUFJQSxLQUFLLENBQUNWLEtBQWYsR0FBdUIsSUFBdkIsR0FBOEIsS0FEdkM7QUFFRSxTQUFLLEVBQUMsZ0NBRlI7QUFHRSxTQUFLLEVBQUVBLEtBSFQ7QUFJRSxZQUFRLEVBQUVnQixpQkFKWjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBTUUsTUFBRSxFQUFDLDhCQU5MO0FBT0UsY0FBVSxFQUFFO0FBQ1ZnQixvQkFBYyxFQUFFakQ7QUFETixLQVBkO0FBVUUsY0FBVSxFQUFFMkIsS0FBSyxJQUFJQSxLQUFLLENBQUNWLEtBQWYsR0FBdUJVLEtBQUssQ0FBQ1YsS0FBN0IsR0FBcUMsRUFWbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FoQ0YsRUFrREUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixRQUFJLEVBQUMsUUFBakM7QUFBMEMsU0FBSyxFQUFDLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBREYsQ0FsREYsRUFzREUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsQ0F0REYsQ0FGRixDQVJGLENBREY7QUEwRUQ7O0FBRURWLFlBQVksQ0FBQzJDLGVBQWIsR0FBZ0NDLEdBQUQsSUFBUztBQUN0QyxRQUFNekMsTUFBTSxHQUFHeUMsR0FBRyxDQUFDQyxLQUFKLENBQVVDLElBQXpCO0FBRUEsU0FBTztBQUNMN0MsUUFBSSxFQUFFRSxNQUFNLEdBQUdBLE1BQUgsR0FBWTtBQURuQixHQUFQO0FBR0QsQ0FORCxDOzs7Ozs7Ozs7OztBQzFPQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw0QyIsImZpbGUiOiJwYWdlcy9vcGVyYXRvci9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL29wZXJhdG9yL1tzbHVnXS5qc1wiKTtcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgQnV0dG9uLCBTbmFja2JhciwgR3JpZCwgQm94LCBMaW5rIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gJ3JlYWN0LXRleHQtbWFzaydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCdcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxyXG5cclxuY29uc3QgUEFZID0gZ3FsYFxyXG4gIG11dGF0aW9uIFBheSgkaW5wdXQ6IFZhbHVlcykge1xyXG4gICAgcGF5KGlucHV0OiAkaW5wdXQpXHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG4gIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gVGV4dE1hc2tDdXN0b20ocHJvcHMpIHtcclxuICBjb25zdCB7IGlucHV0UmVmLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFza2VkSW5wdXRcclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgICByZWY9eyhyZWYpID0+IHtcclxuICAgICAgICBpbnB1dFJlZihyZWYgPyByZWYuaW5wdXRFbGVtZW50IDogbnVsbCk7XHJcbiAgICAgIH19XHJcbiAgICAgIG1hc2s9e1snKCcsIC9bMS05XS8sIC9cXGQvLCAvXFxkLywgJyknLCAnICcsIC9cXGQvLCAvXFxkLywgL1xcZC8sICctJywgL1xcZC8sIC9cXGQvLCAnLScsIC9cXGQvLCAvXFxkL119XHJcbiAgICAgIC8vIHBsYWNlaG9sZGVyQ2hhcj17J1xcdTIwMDAnfVxyXG4gICAgICBzaG93TWFza1xyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5UZXh0TWFza0N1c3RvbS5wcm9wVHlwZXMgPSB7XHJcbiAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBOdW1iZXJGb3JtYXRDdXN0b20ocHJvcHMpIHtcclxuICBjb25zdCB7IGlucHV0UmVmLCBvbkNoYW5nZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE51bWJlckZvcm1hdFxyXG4gICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgIGdldElucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVzLnZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfX1cclxuICAgICAgaXNOdW1lcmljU3RyaW5nXHJcbiAgICAvLyBzdWZmaXg9XCLigr1cIlxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5OdW1iZXJGb3JtYXRDdXN0b20ucHJvcFR5cGVzID0ge1xyXG4gIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdG9yUGFnZSh7IHJvdXQgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW29wZXJhdG9yLCBzZXRPcGVyYXRvcl0gPSB1c2VTdGF0ZShyb3V0KVxyXG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFtwYXldID0gdXNlTXV0YXRpb24oUEFZKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQaG9uZSA9IChlKSA9PiB7XHJcbiAgICBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRvdGFsID0gKGUpID0+IHtcclxuICAgIHNldFRvdGFsKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgZXJyb3JzID0ge31cclxuXHJcbiAgICBpZiAocGhvbmUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGVycm9ycy5waG9uZSA9ICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBwaG9uZSAmJiAhKCcoJywgL1sxIC0gOV0gLywgL1xcZC8sIC9cXGQvLCAnKScsICcgJywgL1xcZC8sIC9cXGQvLCAvXFxkLywgJy0nLCAvXFxkLywgL1xcZC8sICctJywgL1xcZC8sIC9cXGQvLnRlc3QocGhvbmUpICYmICFwaG9uZS5pbmNsdWRlcyhcIl9cIikpXHJcbiAgICApIHtcclxuICAgICAgZXJyb3JzLnBob25lID0gJ9Ci0LXQu9C10YTQvtC9INCy0LLQtdC00LXQvSDQvdC1INCy0LXRgNC90L4nXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvdGFsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBlcnJvcnMudG90YWwgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQvtGCIDEg0LTQviAxMDAwJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3RhbCAmJlxyXG4gICAgICAocGFyc2VGbG9hdCh0b3RhbCkgPCAxIHx8IHBhcnNlRmxvYXQodG90YWwpID4gMTAwMClcclxuICAgICkge1xyXG4gICAgICBlcnJvcnMudG90YWwgPSAn0KHRg9C80LzQsCDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L7RgiAxINC00L4gMTAwMCdcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBzZXRFcnJvcihlcnJvcnMpXHJcbiAgICBjb25zdCBlcnIgPSBhd2FpdCBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aFxyXG5cclxuICAgIGlmIChlcnIgPT09IDApIHtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcGF5KHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIHBob25lLFxyXG4gICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnBheSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhd2FpdCBoYW5kbGVDbGljaygpXHJcbiAgICAgICAgc2V0TXNnKFwi0J7RiNC40LHQutCwINCyINC30LDQv9GA0L7RgdC1XCIpXHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSAmJiBkYXRhLnBheSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGF3YWl0IGhhbmRsZUNsaWNrKClcclxuICAgICAgICBzZXRNc2coXCLQntC/0LvQsNGC0LAg0L/QvtC70YjQu9CwINGD0YHQv9C10YjQvdC+XCIpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgICB9LCAxNTAwKVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBtdD17M30+XHJcblxyXG4gICAgICB7bXNnICYmIDxTbmFja2JhciBvcGVuPXtvcGVufSBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT17YCR7bXNnID09PSBcItCe0YjQuNCx0LrQsCDQsiDQt9Cw0L/RgNC+0YHQtVwiID8gXCJlcnJvclwiIDogXCJzdWNjZXNzXCJ9YH0+XHJcbiAgICAgICAgICB7bXNnfVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgIDwvU25hY2tiYXI+fVxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgc3BhY2luZz17M31cclxuXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgbGFiZWw9XCLQntC/0LXRgNCw0YLQvtGAXCIgZGlzYWJsZWQ9e3RydWV9IHZhbHVlPXtvcGVyYXRvcn0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZXJyb3I+XHJcblxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvciAmJiBlcnJvci5waG9uZSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQaG9uZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImZvcm1hdHRlZC10ZXh0LW1hc2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogVGV4dE1hc2tDdXN0b21cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvciAmJiBlcnJvci5waG9uZSA/IGVycm9yLnBob25lIDogZmFsc2V9XHJcblxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBlcnJvcj5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3IgJiYgZXJyb3IudG90YWwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCh0YPQvNC80LBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRvdGFsfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRvdGFsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZm9ybWF0dGVkLW51bWJlcmZvcm1hdC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3IgJiYgZXJyb3IudG90YWwgPyBlcnJvci50b3RhbCA6IFwiXCJ9XHJcblxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiID7Qn9C+0L/QvtC70L3QuNGC0Ywg0YHRh9C10YI8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPtCd0LDQt9Cw0LQ8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuT3BlcmF0b3JQYWdlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSBjdHgucXVlcnkuc2x1Z1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm91dDogcm91dGVyID8gcm91dGVyIDogXCLQvtC/0LXRgNCw0YLQvtGAXCIsXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10ZXh0LW1hc2tcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==