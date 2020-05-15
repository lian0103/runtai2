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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_QAlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/QAlist */ \"./src/util/QAlist.js\");\n\r\n\r\n$(document).ready(function () {\r\n    switchPage('mainPage',[btnInit]);\r\n})\r\n\r\nfunction btnInit(){\r\n    $('.btnInitTar').each(function(){\r\n        let domStr = $(this).attr('data-link');\r\n        $(this).click(function(){\r\n            switchPage(domStr);\r\n            let isPhoneSize = window.innerWidth <= 800 ? true : false;\r\n            if(isPhoneSize){$('#btn-menu').click();}\r\n        })\r\n    });\r\n}\r\n\r\nwindow.particlesJSinit = function(){\r\n    particlesJS.load('wrapper-particlesJS', './src/util/particlesjs-config.json', function() {\r\n        console.log('callback - particles.js config loaded');\r\n    });\r\n}\r\n\r\nwindow.switchPage = function(page,callbackFns = false){\r\n    if(page == null){\r\n        return\r\n    }\r\n\r\n    switch (page){\r\n        case \"mainPage\":\r\n            $('#app').load('./src/pages/mainPage.html');\r\n            window.location.hash = 'mainPage';\r\n        break;\r\n        case \"carLoan\":\r\n            window.location.hash = 'carLoan';\r\n            $('#app').load('./src/pages/carLoan.html'); \r\n        break;\r\n        case \"creditLoanPage\":\r\n            $('#app').load('./src/pages/creditLoanPage.html');\r\n            window.location.hash = 'creditLoanPage';\r\n        break;\r\n        case \"preferPage\":\r\n            $('#app').load('./src/pages/preferPage.html');\r\n            window.location.hash = 'preferPage';\r\n        break;\r\n        case \"secondOrderLoan\":\r\n            $('#app').load('./src/pages/secondOrderLoan.html');\r\n            window.location.hash = 'secondOrderLoan';\r\n        break;\r\n    }\r\n\r\n    if(callbackFns){\r\n        for(let i=0;i<callbackFns.length;i++){\r\n            setTimeout(callbackFns[i],1000)\r\n        }\r\n        \r\n    }\r\n\r\n    let domlinks = $('a[data-link]');\r\n    domlinks.each(function(){\r\n        $(this).removeClass('active');\r\n    })\r\n    \r\n    let domTars = $(`a[data-link=\"${page}\"]`);\r\n    domTars.each(function(){\r\n        $(this).addClass('active');\r\n    })\r\n}\r\n\r\nwindow.QAlist = _util_QAlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/QAlist.js":
/*!****************************!*\
  !*** ./src/util/QAlist.js ***!
  \****************************/
/*! exports provided: QAlist, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QAlist\", function() { return QAlist; });\nconst QAlist = [\r\n    {\r\n        id: 1,\r\n        qTitle: \"本身在銀行信用有瑕疵可以辦理嗎？\",\r\n        aContent: `\r\n        <p>在銀行的信用有瑕疵並不影響借款人所提供擔保品的價值，只要您所提供的擔保品是有價的，\r\n        本公司將竭誠為您規劃屬於您的超彈性利率方案，讓您無後顧之憂。</p>\r\n        `\r\n    },\r\n    {\r\n        id: 2,\r\n        qTitle: \"有車子可是想借錢，要向誰借呢？\",\r\n        aContent: `\r\n        <p>要先看您的車子在銀行是否有貸款，若是貸款已清償或無貸款的情形，除非是時間上過於急迫，\r\n            又或者個人本身信用上有瑕疵，不然向銀行申辦貸款才是真正的理財、紓困的好方法。\r\n        </p>\r\n        `\r\n    },\r\n    {\r\n        id: 3,\r\n        qTitle: \"申請貸款人需要有什麼條件呢？\",\r\n        aContent: `\r\n        <p>依法貸款人須年滿20歲、為中華民國國民、且符合申辦貸款資格者。</p>\r\n        `\r\n    },\r\n    {\r\n        id: 4,\r\n        qTitle: \"汽車貸款有什麼優點？\",\r\n        aContent: `\r\n        <p>申請門檻低：汽車抵押貸款因為有汽車作為抵押，貸款公司對借款人比較放心，<br>\r\n            所以對徵信沒有太嚴格的要求，簡直是有信用「瑕疵」的借款人的「福音」。<br><br>\r\n            放款速度快：車子抵押貸款流程簡單，貸款公司的審批速度很快。借款人將手續準備齊全，<br>\r\n            最快當天便可獲得貸款資金，對於急需資金的借款人來說，<br>\r\n            辦理汽車抵押貸款，無疑是快速獲得資金的好辦法。\r\n        </p>`\r\n    },\r\n    {\r\n        id: 5,\r\n        qTitle: \"借二胎房貸，需要提供什麼資訊？\",\r\n        aContent: `\r\n        <p>二胎會不會過的原因有很多，因此我們需要您提供以下資訊，協助判斷多久能撥款。<br>\r\n            房屋地址：可以的話請一併提供房屋的類型，住宅、辦公、店面等等<br>\r\n            銀行房貸：目前一胎房貸還剩多少<br>\r\n            職業工作：如果沒有薪轉就需要提供收入證明<br>\r\n            收入：主要評估是否有還款能力<br>\r\n            是否有其他債務(信貸、車貸、信用卡循環等)：也會請申請人提供聯徵紀錄確認是否有按時還款<br>\r\n            資金用途和借款金額<br>\r\n            如果初步判斷借款人的條件比較差的話，可能會需要提供保證人，評估沒有問題的話，最快3-5天就可以撥款了。\r\n        </p>\r\n        `\r\n    },\r\n    {\r\n        id: 6,\r\n        qTitle: \"什麼狀況會需要申辦信用貸款?\",\r\n        aContent: `\r\n        <p>信用貸款是以個人消費、子女教育支出或資金周轉為目的的無擔保信用貸款，\r\n            和其它貸款產品例如：房屋貸款或汽車貸款，最大的不同在於不用提供抵押品，\r\n            也不需要保證人，是一種較為靈活和便利的資金來源選擇。若您是一般上班族，最近需要一筆資金來裝修房屋，這時就很適合利用信用貨款的便利性(快速、不需要擔保)來滿足資金需求。\r\n        </p>\r\n        `\r\n    }\r\n];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (QAlist);\n\n//# sourceURL=webpack:///./src/util/QAlist.js?");

/***/ })

/******/ });