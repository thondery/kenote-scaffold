require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _install = __webpack_require__(1);

Object.defineProperty(exports, 'Install', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_install).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(3);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _runscript = __webpack_require__(4);

var _runscript2 = _interopRequireDefault(_runscript);

var _uuid = __webpack_require__(5);

var _uuid2 = _interopRequireDefault(_uuid);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (repository) {
  var is_repository = isRepository(repository);
  if (is_repository) {
    var git_dir = _uuid2.default.v4();
    return (0, _runscript2.default)('rm -rf ' + git_dir + ' && git clone ' + repository + ' ' + git_dir + ' && rm -rf ' + git_dir + '/.git ' + git_dir + '/README.md ' + git_dir + '/LICENSE').then(function (ret) {
      _fsExtra2.default.moveSync(git_dir, './');
      var pkg = JSON.parse(_fsExtra2.default.readFileSync('package.json', 'utf-8'));
      _lodash2.default.unset(pkg, 'repository');
      _lodash2.default.unset(pkg, 'author');
      pkg.name = _path2.default.basename(process.cwd());
      _fsExtra2.default.writeFileSync('package.json', JSON.stringify(pkg, null, 2), 'utf-8');
      return (0, _runscript2.default)('yarn install');
    });
  } else {
    //
  }
};

var isRepository = function isRepository(repository) {
  var isTrue = _lodash2.default.isString(repository);
  isTrue = /^(http|https):\/\//.test(repository);
  return isTrue;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("runscript");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map