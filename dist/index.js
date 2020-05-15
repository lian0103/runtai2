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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_QAlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/QAlist */ \"./src/util/QAlist.js\");\n\n\n$(document).ready(function () {\n    switchPage('mainPage',[btnInit]);\n})\n\nfunction btnInit(){\n    $('.btnInitTar').each(function(){\n        let domStr = $(this).attr('data-link');\n        $(this).click(function(){\n            switchPage(domStr);\n            let isPhoneSize = window.innerWidth <= 800 ? true : false;\n            if(isPhoneSize){$('#btn-menu').click();}\n        })\n    });\n}\n\nwindow.particlesJSinit = function(){\n    particlesJS.load('wrapper-particlesJS', './src/util/particlesjs-config.json', function() {\n        console.log('callback - particles.js config loaded');\n    });\n}\n\nwindow.switchPage = function(page,callbackFns = false){\n    if(page == null){\n        return\n    }\n\n    switch (page){\n        case \"mainPage\":\n            $('#app').load('./src/pages/mainPage.html');\n            window.location.hash = 'mainPage';\n        break;\n        case \"carLoan\":\n            window.location.hash = 'carLoan';\n            $('#app').load('./src/pages/carLoan.html'); \n        break;\n        case \"creditLoanPage\":\n            $('#app').load('./src/pages/creditLoanPage.html');\n            window.location.hash = 'creditLoanPage';\n        break;\n        case \"preferPage\":\n            $('#app').load('./src/pages/preferPage.html');\n            window.location.hash = 'preferPage';\n        break;\n        case \"secondOrderLoan\":\n            $('#app').load('./src/pages/secondOrderLoan.html');\n            window.location.hash = 'secondOrderLoan';\n        break;\n    }\n\n    if(callbackFns){\n        for(let i=0;i<callbackFns.length;i++){\n            setTimeout(callbackFns[i],1000)\n        }\n        \n    }\n\n    let domlinks = $('a[data-link]');\n    domlinks.each(function(){\n        $(this).removeClass('active');\n    })\n    \n    let domTars = $(`a[data-link=\"${page}\"]`);\n    domTars.each(function(){\n        $(this).addClass('active');\n    })\n}\n\nwindow.QAlist = _util_QAlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/QAlist.js":
/*!****************************!*\
  !*** ./src/util/QAlist.js ***!
  \****************************/
/*! exports provided: QAlist, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QAlist\", function() { return QAlist; });\nconst QAlist = [\n    {\n        id: 1,\n        qTitle: \"本身在銀行信用有瑕疵可以辦理嗎？\",\n        aContent: `\n        <p>在銀行的信用有瑕疵並不影響借款人所提供擔保品的價值，只要您所提供的擔保品是有價的，\n        本公司將竭誠為您規劃屬於您的超彈性利率方案，讓您無後顧之憂。</p>\n        `\n    },\n    {\n        id: 2,\n        qTitle: \"有車子可是想借錢，要向誰借呢？\",\n        aContent: `\n        <p>要先看您的車子在銀行是否有貸款，若是貸款已清償或無貸款的情形，除非是時間上過於急迫，\n            又或者個人本身信用上有瑕疵，不然向銀行申辦貸款才是真正的理財、紓困的好方法。\n        </p>\n        `\n    },\n    {\n        id: 3,\n        qTitle: \"申請貸款人需要有什麼條件呢？\",\n        aContent: `\n        <p>依法貸款人須年滿20歲、為中華民國國民、且符合申辦貸款資格者。</p>\n        `\n    },\n    {\n        id: 4,\n        qTitle: \"汽車貸款有什麼優點？\",\n        aContent: `\n        <p>申請門檻低：汽車抵押貸款因為有汽車作為抵押，貸款公司對借款人比較放心，<br>\n            所以對徵信沒有太嚴格的要求，簡直是有信用「瑕疵」的借款人的「福音」。<br><br>\n            放款速度快：車子抵押貸款流程簡單，貸款公司的審批速度很快。借款人將手續準備齊全，<br>\n            最快當天便可獲得貸款資金，對於急需資金的借款人來說，<br>\n            辦理汽車抵押貸款，無疑是快速獲得資金的好辦法。\n        </p>`\n    },\n    {\n        id: 5,\n        qTitle: \"借二胎房貸，需要提供什麼資訊？\",\n        aContent: `\n        <p>二胎會不會過的原因有很多，因此我們需要您提供以下資訊，協助判斷多久能撥款。<br>\n            房屋地址：可以的話請一併提供房屋的類型，住宅、辦公、店面等等<br>\n            銀行房貸：目前一胎房貸還剩多少<br>\n            職業工作：如果沒有薪轉就需要提供收入證明<br>\n            收入：主要評估是否有還款能力<br>\n            是否有其他債務(信貸、車貸、信用卡循環等)：也會請申請人提供聯徵紀錄確認是否有按時還款<br>\n            資金用途和借款金額<br>\n            如果初步判斷借款人的條件比較差的話，可能會需要提供保證人，評估沒有問題的話，最快3-5天就可以撥款了。\n        </p>\n        `\n    },\n    {\n        id: 6,\n        qTitle: \"什麼狀況會需要申辦信用貸款?\",\n        aContent: `\n        <p>信用貸款是以個人消費、子女教育支出或資金周轉為目的的無擔保信用貸款，\n            和其它貸款產品例如：房屋貸款或汽車貸款，最大的不同在於不用提供抵押品，\n            也不需要保證人，是一種較為靈活和便利的資金來源選擇。若您是一般上班族，最近需要一筆資金來裝修房屋，這時就很適合利用信用貨款的便利性(快速、不需要擔保)來滿足資金需求。\n        </p>\n        `\n    }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QAlist);\n\n//# sourceURL=webpack:///./src/util/QAlist.js?");

/***/ })

/******/ });