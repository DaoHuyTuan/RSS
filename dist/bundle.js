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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lazyload.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'events.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n//CORS proxy\n\nvar proxy = \"https://cors-anywhere.herokuapp.com/\";\nvar arrayBlogURL = [\n    \"https://medium.engineering/feed\",\n    \"https://blogs.dropbox.com/tech/feed/\",\n    \"https://slack.engineering/feed\",\n    // \"https://www.blog.google/rss/\",\n    \"https://code.fb.com/feed/\",\n    // \"https://engineering.grab.com/feed.xml\"\n    \"https://eng.lyft.com/feed\",\n    \"https://medium.com/feed/airbnb-engineering\",\n    \"https://instagram-engineering.com/feed\",\n    \"https://labs.spotify.com/feed/\",\n    \"https://medium.com/feed/netflix-techblog\"\n];\nvar feedUrl = \"\";\nvar arrayData = new Array();\nvar arrayContents = new Array();\n//DOM variable\nvar main = document.getElementById(\"main\");\nvar listTitle = document.getElementById(\"main__listTitle\");\nvar contents  = document.getElementById(\"main__content\");\nvar rssTitle,rssContent,listTitles,indexItem,contentCloneBox;\nvar lazyload = true;\n\n\n\nconst createDOM  = function createDomWhenDataLoaded() {\n    rssTitle = document.createElement(\"SPAN\");\n    rssContent = document.createElement(\"SPAN\");\n    rssTitle.classList = \"title--item\";\n    listTitle.appendChild(rssTitle);\n    contents.appendChild(rssContent);\n}\nconst renderData = function renderDataFrom(arrayData) {\n    if(arrayData.length == arrayBlogURL.length){\n\t    lazyload = false;\n\t//console.log(flag)\n        for(var y = 0; y < arrayBlogURL.length;y++) {\n            for(var i =0;i < arrayData[y].length;i++){\n                createDOM();\n                if(arrayData[0][i] == arrayData[y][0]) {\n                    rssTitle.classList += \" active\";\n                }\n                arrayContents.push(arrayData[y][i]);\n                rssTitle.innerHTML = arrayData[y][i].childNodes.item(1).childNodes.item(0).data;\n                contents.innerHTML += arrayContents[0].getElementsByTagName(\"content:encoded\").item(0).innerHTML;\n            }\n        }\n\t    lazyLoading(lazyload);\n    }\n    addEventsListeners();\n}\nconst getItems   = function getItemsFrom(xmlValue){\n    //get all <item> tag\n \n    arrayData.push(xmlValue.getElementsByTagName(\"item\"));\n    renderData(arrayData);\n    //console.log(arrayData.length)\n}\nconst loadRSS    = function loadRSSFrom(url) {\n    var ajax = new XMLHttpRequest();\n    ajax.open(\"GET\",url,true);\n    ajax.onreadystatechange = function() {\n        if (ajax.readyState == 4 && ajax.status == 200) {\n            getItems(ajax.responseXML);\n        }\n    }\n    ajax.send();\n}\nconst loadArrURL = function loadArrURLFromArrayURL(param) {\n    lazyLoading(lazyload);\n    for(var i=0;i<arrayBlogURL.length;i++){\n        var param = proxy + arrayBlogURL[i];\n        loadRSS(param);\n    }\n}\nloadArrURL(feedUrl);\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });