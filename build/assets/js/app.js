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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\r\n  // menu\r\n  $(\".burder-menu\").click(function () {\r\n    $(this).toggleClass(\"burger--active\");\r\n    $('.nav').toggleClass(\"nav--active\");\r\n    $('body').toggleClass(\"body--overflow\");\r\n\r\n  });\r\n\r\n  $(document).click( function(e){\r\n    if ( $(e.target).closest('.nav').length || $(e.target).closest('.burder-menu').length) {\r\n        // клик внутри элемента \r\n        return;\r\n    }\r\n    // клик снаружи элемента \r\n    $(\".burder-menu\").removeClass(\"burger--active\");\r\n    $('.nav').removeClass(\"nav--active\");\r\n});\r\n\r\n  // tabs\r\n  $(\".tabs-wrapper\").each(function () {\r\n    let ths = $(this);\r\n    ths.find(\".tab-item\").not(\":first\").hide();\r\n    ths\r\n      .find(\".tab\")\r\n      .click(function () {\r\n        ths\r\n          .find(\".tab\")\r\n          .removeClass(\"active\")\r\n          .eq($(this).index())\r\n          .addClass(\"active\");\r\n        $(\".tasks__btn\").removeClass(\"tasks__btn--active\");\r\n        ths.find(\".tab-item\").hide().eq($(this).index()).fadeIn();\r\n      })\r\n      .eq(0)\r\n      .addClass(\"active\");\r\n  });\r\n\r\n  // show/hidden password\r\n  $(\".input--password__icon\").click(function () {\r\n    $(this).toggleClass(\"active\");\r\n    if ($(this).hasClass(\"active\")) {\r\n      $(\".input--password__icon img\").attr(\r\n        \"src\",\r\n        \"./assets/images/Iconly/inputs/Hide.png\"\r\n      );\r\n      $(\".input--password input\").attr(\"type\", \"text\");\r\n    } else {\r\n      $(\".input--password__icon img\").attr(\r\n        \"src\",\r\n        \"./assets/images/Iconly/inputs/Show.png\"\r\n      );\r\n      $(\".input--password input\").attr(\"type\", \"password\");\r\n    }\r\n  });\r\n\r\n  //masks\r\n  $(\".js-input-email\").on(\"input\", function () {\r\n    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\\.)+[A-Z]{2,4}$/i;\r\n\r\n    if (!testEmail.test($(this).val())) {\r\n      $(this).siblings(\".input__error\").css(\"display\", \"block\");\r\n    } else {\r\n      $(this).siblings(\".input__error\").css(\"display\", \"none\");\r\n    }\r\n  });\r\n\r\n  $(\".js-input-num\").on(\"input\", function (e) {\r\n    e.target.value = e.target.value.replace(/[^\\d]/g, \"\");\r\n  });\r\n\r\n  // accordion\r\n\r\n  $(\".accordion-item-title\").click(function () {\r\n    var $item = $(this).parents(\".accordion-item\");\r\n\r\n    $item.toggleClass(\"active\").siblings(\"active\").removeClass(\"active\");\r\n  });\r\n\r\n\r\n\r\n\r\n  // SLIDERS\r\n  $(\".js-our-works-slider\").owlCarousel({\r\n    loop: true,\r\n    margin: 0,\r\n    nav: true,\r\n    items: 7.5,\r\n    center: true,\r\n    autoplay: true,\r\n    responsive: {\r\n      1200: {\r\n        items: 7.5,\r\n      },\r\n      768: {\r\n        items: 4,\r\n      },\r\n      480: {\r\n        items: 4,\r\n      },\r\n      0: {\r\n        items: 2,\r\n      },\r\n    },\r\n  });\r\n\r\n  // /SLIDERS\r\n\r\n\r\n  // show more product info\r\n  $(\".js-product-info-showmore\").on(\"click\", function () {\r\n    if ($(this).hasClass(\"active\")) {\r\n      $(\".product-info__row--visible\")\r\n        .removeClass(\"product-info__row--visible\")\r\n        .addClass(\"product-info__row--hidden\");\r\n      $(this).removeClass(\"active\");\r\n    } else {\r\n      $(\".product-info__row--hidden\")\r\n        .removeClass(\"product-info__row--hidden\")\r\n        .addClass(\"product-info__row--visible\");\r\n      $(this).addClass(\"active\");\r\n    }\r\n  });\r\n\r\n\r\n\r\n  // FIXME: <Dev scripts/ delete in production>\r\n\r\n  // fake modal open\r\n  // if ($('#modal-auth')){\r\n  // \t$.fancybox.open({\r\n  // \t\tsrc  : '#modal-auth'\r\n  // \t});\r\n  // }\r\n\r\n  // FIXME: </Dev scripts/ delete in production>\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });