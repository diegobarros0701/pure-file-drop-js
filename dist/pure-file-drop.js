(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! exports provided: PureFileDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_pure_file_drop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pure-file-drop.scss */ \"./src/pure-file-drop.scss\");\n/* harmony import */ var _src_pure_file_drop_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_pure_file_drop_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_pure_file_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/pure-file-drop */ \"./src/pure-file-drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PureFileDrop\", function() { return _src_pure_file_drop__WEBPACK_IMPORTED_MODULE_1__[\"PureFileDrop\"]; });\n\n\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./src/pure-file-drop.js":
/*!*******************************!*\
  !*** ./src/pure-file-drop.js ***!
  \*******************************/
/*! exports provided: PureFileDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PureFileDrop\", function() { return PureFileDrop; });\n/* harmony import */ var _utils_simple_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/simple-ajax */ \"./src/utils/simple-ajax.js\");\n/* harmony import */ var _utils_dom_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/dom-handler */ \"./src/utils/dom-handler.js\");\n/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/event-js */ \"./src/utils/event-js.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar PureFileDrop =\n/*#__PURE__*/\nfunction () {\n  function PureFileDrop() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, PureFileDrop);\n\n    this.options = {\n      form_ajax: {\n        enabled: false,\n        selector: 'form'\n      },\n      submit_button: {\n        title: 'Send',\n        classes: 'btn btn-success'\n      },\n      file_drop_selector: '.pure-file-drop',\n      // default\n      file_drop_area_text: 'Arraste os arquivos ou clique aqui',\n      upload_url: null,\n      // default is the form action attribute\n      async_request: true,\n      // default\n      param_name: 'file',\n      // default\n      upload_on_drop: false,\n      // TO DO\n      select_by_click: true,\n      // default\n      onSuccess: function onSuccess(data) {},\n      onError: function onError(data) {},\n      onComplete: function onComplete(data) {},\n      onAddFile: function onAddFile(files_info) {},\n      onRemoveFile: function onRemoveFile(files_info) {},\n      initialFiles: [],\n      remove_options: {\n        url: null,\n        method: 'DELETE',\n        data: null\n      },\n      beforeRemove: function beforeRemove(options) {}\n    };\n    this._files_selected = [];\n\n    this._overrideOptionsProperties(options);\n\n    this._build();\n  }\n\n  _createClass(PureFileDrop, [{\n    key: \"setInitialFiles\",\n    value: function setInitialFiles(initialFiles) {\n      this.options.initialFiles = initialFiles;\n\n      this._updateInitialFiles();\n    }\n  }, {\n    key: \"_build\",\n    value: function _build() {\n      var drop_zone_text = document.createElement('span');\n      drop_zone_text.innerText = this.options.file_drop_area_text;\n      this._pure_file_drop_container = document.querySelector(this.options.file_drop_selector);\n      this._drop_zone_area = document.createElement('div');\n      this._drop_zone_area.className = 'drop-zone';\n\n      this._drop_zone_area.appendChild(drop_zone_text);\n\n      if (this.options.select_by_click) {\n        this._drop_zone_file_input = document.createElement('input');\n\n        this._drop_zone_file_input.setAttribute('type', 'file');\n\n        this._drop_zone_file_input.setAttribute('multiple', true);\n\n        this._drop_zone_area.appendChild(this._drop_zone_file_input);\n      }\n\n      this._pure_file_drop_container.appendChild(this._drop_zone_area);\n\n      if (this.options.form_ajax.enabled) {\n        this._form = document.querySelector(this.options.form_ajax.selector);\n        this._form.enctype = 'multipart/form-data';\n        if (this.options.upload_url) this._form.action = this.options.upload_url;else this.options.upload_url = this._form.action;\n      }\n\n      this._updateInitialFiles();\n\n      this._initializeEvents();\n    }\n  }, {\n    key: \"_updateInitialFiles\",\n    value: function _updateInitialFiles() {\n      var _this2 = this;\n\n      document.querySelectorAll('.single-file').forEach(function (single_file) {\n        single_file.parentNode.removeChild(single_file);\n      });\n\n      if (_typeof(this.options.initialFiles) === 'object') {\n        _utils_simple_ajax__WEBPACK_IMPORTED_MODULE_0__[\"simpleAjax\"].request({\n          url: this.options.initialFiles.url,\n          method: this.options.initialFiles.method,\n          data: this.options.initialFiles.params,\n          returnType: 'json',\n          async: false,\n          onSuccess: function onSuccess(response) {\n            console.log(_typeof(JSON.parse(response)));\n            _this2.options.initialFiles = JSON.parse(response);\n          }\n        });\n      }\n\n      this.options.initialFiles.forEach(function (file) {\n        console.log(file);\n\n        _this2._createFileInfo(file.name, file.id, file.remove_options);\n      });\n    }\n  }, {\n    key: \"_overrideOptionsProperties\",\n    value: function _overrideOptionsProperties(custom_options) {\n      var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n      for (var option_key in custom_options) {\n        if (this.options.hasOwnProperty(option_key)) this.options[option_key] = custom_options[option_key];\n      }\n    }\n  }, {\n    key: \"_createSubmitButton\",\n    value: function _createSubmitButton() {\n      this._submit_button = document.createElement('button');\n      this._submit_button.innerText = this.options.submit_button.title;\n      this._submit_button.className = this.options.submit_button.classes;\n\n      this._pure_file_drop_container.appendChild(this._submit_button);\n    }\n  }, {\n    key: \"_initializeEvents\",\n    value: function _initializeEvents() {\n      var _this3 = this;\n\n      if (this.options.form_ajax.enabled) {\n        this._form.addEventListener('submit', function (e) {\n          e.preventDefault();\n\n          _this3._sendForm();\n        });\n      } else {\n        this._createSubmitButton();\n\n        this._submit_button.addEventListener('click', function (e) {\n          _this3._sendForm();\n        });\n      }\n\n      this._drop_zone_area.addEventListener('dragenter', function (e) {\n        _this3._drop_zone_area.className += ' dragging';\n      });\n\n      this._drop_zone_area.addEventListener('dragover', function (e) {\n        return e.preventDefault();\n      });\n\n      this._drop_zone_area.addEventListener('drop', function (e) {\n        e.preventDefault();\n        _this3._drop_zone_area.className = _this3._drop_zone_area.className.replace(/\\s*.(dragging)/g, '');\n\n        _this3._handleFiles(e.dataTransfer.files, e);\n\n        if (_this3.options.upload_on_drop) {// TO DO\n        }\n      });\n\n      this._drop_zone_area.addEventListener('dragleave', function (e) {\n        _this3._drop_zone_area.className = _this3._drop_zone_area.className.replace(/\\s*.(dragging)/g, '');\n      });\n\n      _utils_event_js__WEBPACK_IMPORTED_MODULE_2__[\"eventJS\"].node(this._pure_file_drop_container).on('click', 'button[data-remove-file-drop]', function (e) {\n        _this3._removeFile(e, e.target.dataset.removeId);\n      });\n\n      if (this.options.select_by_click) {\n        var _this = this;\n\n        this._drop_zone_area.addEventListener('click', function (e) {\n          _this._drop_zone_file_input.click();\n        });\n\n        this._drop_zone_file_input.addEventListener('change', function (e) {\n          _this3._handleFiles(e.target.files, e);\n\n          e.target.value = \"\";\n        });\n      }\n    }\n  }, {\n    key: \"_removeFile\",\n    value: function _removeFile(e, remove_id) {\n      var _this4 = this;\n\n      if (remove_id) {\n        var dataset = e.target.dataset;\n        var url = dataset.removeUrl ? dataset.removeUrl : this.options.remove_options.url;\n        var method = dataset.method ? dataset.method : this.options.remove_options.method;\n        var params = dataset.params ? JSON.parse(dataset.params) : this.options.remove_options.params;\n        if (!params.id && dataset.removeId) params.id = dataset.removeId;\n        console.log(params);\n        _utils_simple_ajax__WEBPACK_IMPORTED_MODULE_0__[\"simpleAjax\"].request({\n          url: url,\n          method: method,\n          data: {\n            teste: '123'\n          },\n          onSuccess: function onSuccess(response) {\n            _this4._removeFileDomInfo(e);\n          },\n          onError: function onError(response) {\n            console.log(\"Can't remove\");\n          }\n        });\n      } else {\n        this._removeFileDomInfo(e);\n      }\n    }\n  }, {\n    key: \"_removeFileDomInfo\",\n    value: function _removeFileDomInfo(e) {\n      var parent_index = _utils_dom_handler__WEBPACK_IMPORTED_MODULE_1__[\"domHandler\"].index(e.target.parentNode);\n\n      this._files_selected.splice(parent_index, 1);\n\n      this._files_dropped_area.removeChild(e.target.parentNode);\n\n      if (this._files_dropped_area.children.length == 0) {\n        this._pure_file_drop_container.removeChild(this._files_dropped_area);\n\n        this._files_dropped_area = null;\n      }\n\n      this.options.onRemoveFile(this._files_selected);\n    }\n  }, {\n    key: \"_createFileInfo\",\n    value: function _createFileInfo(filename) {\n      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var remove_options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var filename_span = document.createElement('span');\n      filename_span.innerText = filename;\n      var btn_remove_file_drop = document.createElement('button');\n      btn_remove_file_drop.setAttribute('type', 'button');\n      btn_remove_file_drop.className = 'btn btn-danger';\n      btn_remove_file_drop.innerText = 'Remover';\n      btn_remove_file_drop.dataset.removeFileDrop = 'remove-file-drop';\n\n      if (remove_options) {\n        if (remove_options.url) {\n          btn_remove_file_drop.dataset.removeUrl = remove_options.url;\n        }\n\n        if (remove_options.method) {\n          btn_remove_file_drop.dataset.method = remove_options.method;\n        }\n\n        if (remove_options.params) {\n          btn_remove_file_drop.dataset.params = JSON.stringify(remove_options.params);\n        }\n      }\n\n      if (id) {\n        btn_remove_file_drop.dataset.removeId = id;\n      }\n\n      var single_file_wrapper_element = document.createElement('div');\n      single_file_wrapper_element.className = 'single-file';\n      single_file_wrapper_element.appendChild(filename_span);\n      single_file_wrapper_element.appendChild(btn_remove_file_drop);\n\n      if (!this._files_dropped_area) {\n        this._files_dropped_area = document.createElement('div');\n        this._files_dropped_area.className = 'files-dropped';\n\n        this._pure_file_drop_container.appendChild(this._files_dropped_area);\n      }\n\n      this._files_dropped_area.appendChild(single_file_wrapper_element);\n    }\n  }, {\n    key: \"_handleFiles\",\n    value: function _handleFiles(files, e) {\n      e.preventDefault();\n\n      for (var i = 0; i < files.length; i++) {\n        var file = files[i]; // let filename_span = document.createElement('span');\n        // filename_span.innerText = file.name;\n        // let btn_remove_file_drop = document.createElement('button');\n        // btn_remove_file_drop.setAttribute('type', 'button');\n        // btn_remove_file_drop.className = 'btn btn-danger';\n        // btn_remove_file_drop.innerText = 'Remover';\n        // btn_remove_file_drop.dataset.removeFileDrop = 'remove-file-drop';\n        // let single_file_wrapper_element = document.createElement('div');\n        // single_file_wrapper_element.className = 'single-file';\n        // single_file_wrapper_element.appendChild(filename_span);\n        // single_file_wrapper_element.appendChild(btn_remove_file_drop);\n        // if(!this._files_dropped_area) {\n        // \tthis._files_dropped_area = document.createElement('div');\n        // \tthis._files_dropped_area.className = 'files-dropped';\n        // \tthis._pure_file_drop_container.appendChild(this._files_dropped_area);\n        // }\n        // this._files_dropped_area.appendChild(single_file_wrapper_element);\n\n        this._createFileInfo(file.name);\n\n        this._files_selected.push(file);\n\n        this.options.onAddFile(this._files_selected);\n      }\n    }\n  }, {\n    key: \"_sendForm\",\n    value: function _sendForm(data) {\n      var _this5 = this;\n\n      _utils_simple_ajax__WEBPACK_IMPORTED_MODULE_0__[\"simpleAjax\"].request({\n        url: this.options.upload_url,\n        method: 'POST',\n        data: this._getFormData(),\n        onError: function onError(response) {\n          _this5.options.onError(response);\n        },\n        onSuccess: function onSuccess(response) {\n          _this5.options.onSuccess(response);\n        },\n        onComplete: function onComplete(response) {\n          _this5.options.onComplete(response);\n        }\n      });\n    }\n  }, {\n    key: \"_getFormData\",\n    value: function _getFormData() {\n      var _this = this;\n\n      var formData = _this.options.form_ajax.enabled ? new FormData(_this._form) : new FormData();\n\n      _this._files_selected.forEach(function (file_selected) {\n        formData.append(_this.options.param_name, file_selected);\n      });\n\n      return formData;\n    }\n  }]);\n\n  return PureFileDrop;\n}();\n\n\n\n//# sourceURL=webpack:///./src/pure-file-drop.js?");

/***/ }),

/***/ "./src/pure-file-drop.scss":
/*!*********************************!*\
  !*** ./src/pure-file-drop.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pure-file-drop.scss?");

/***/ }),

/***/ "./src/utils/dom-handler.js":
/*!**********************************!*\
  !*** ./src/utils/dom-handler.js ***!
  \**********************************/
/*! exports provided: domHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domHandler\", function() { return domHandler; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DOMHandler =\n/*#__PURE__*/\nfunction () {\n  function DOMHandler() {\n    _classCallCheck(this, DOMHandler);\n  }\n\n  _createClass(DOMHandler, [{\n    key: \"closest\",\n    value: function closest(node, parent_selector) {\n      var parentNode = node.parentNode;\n\n      if (parent_selector.startsWith('.')) {\n        parent_selector = parent_selector.substring(1);\n\n        while (parentNode && !parentNode.className.includes(parent_selector)) {\n          parentNode = parentNode.parentNode;\n        }\n      } else if (parent_selector.startsWith('#')) {\n        parent_selector = parent_selector.substring(1);\n\n        while (parentNode && parentNode.getAttribute('id') !== parent_selector) {\n          parentNode = parentNode.parentNode;\n        }\n      } else {\n        while (parentNode && parentNode.nodeName.toLowerCase() !== parent_selector) {\n          parentNode = parentNode.parentNode;\n        }\n      }\n\n      return node.parentNode == parentNode ? parentNode : null;\n    }\n  }, {\n    key: \"index\",\n    value: function index(node) {\n      var siblings = 0;\n\n      while (node) {\n        node = node.previousSibling;\n        siblings++;\n      }\n\n      siblings--; // para não contar o próprio elemento que originou a contagem\n\n      return siblings;\n    }\n  }, {\n    key: \"isParent\",\n    value: function isParent(parent, node) {\n      while (node) {\n        node = node.parentNode;\n        if (node == parent) return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return DOMHandler;\n}();\n\nvar domHandler = new DOMHandler();\n\n\n//# sourceURL=webpack:///./src/utils/dom-handler.js?");

/***/ }),

/***/ "./src/utils/event-js.js":
/*!*******************************!*\
  !*** ./src/utils/event-js.js ***!
  \*******************************/
/*! exports provided: eventJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventJS\", function() { return eventJS; });\n/* harmony import */ var _dom_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-handler */ \"./src/utils/dom-handler.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar EventJS =\n/*#__PURE__*/\nfunction () {\n  function EventJS() {\n    _classCallCheck(this, EventJS);\n  }\n\n  _createClass(EventJS, [{\n    key: \"on\",\n    value: function on(eventName, selector, callback) {\n      var _this = this;\n\n      this._element.addEventListener(eventName, function (e) {\n        var element_selector = document.querySelector(selector);\n\n        if (_this._isTheTarget(e.target, element_selector, selector)) {\n          callback(e);\n        }\n      });\n    }\n  }, {\n    key: \"node\",\n    value: function node(element) {\n      this._element = element;\n      return this;\n    } // To be the target, needs to be the same as the target and must be child of the element caller\n\n  }, {\n    key: \"_isTheTarget\",\n    value: function _isTheTarget(target, element_selector, selector) {\n      return target.matches(selector) && _dom_handler__WEBPACK_IMPORTED_MODULE_0__[\"domHandler\"].isParent(this._element, element_selector);\n    }\n  }]);\n\n  return EventJS;\n}();\n\nvar eventJS = new EventJS();\n\n\n//# sourceURL=webpack:///./src/utils/event-js.js?");

/***/ }),

/***/ "./src/utils/simple-ajax.js":
/*!**********************************!*\
  !*** ./src/utils/simple-ajax.js ***!
  \**********************************/
/*! exports provided: simpleAjax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"simpleAjax\", function() { return simpleAjax; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SimpleAjax =\n/*#__PURE__*/\nfunction () {\n  function SimpleAjax() {\n    _classCallCheck(this, SimpleAjax);\n\n    this.options = {\n      method: 'GET',\n      url: null,\n      async: true,\n      data: '',\n      responseType: 'text',\n      headers: [],\n      onError: function onError(response, xhr) {},\n      onSuccess: function onSuccess(response, xhr) {},\n      onComplete: function onComplete(response, xhr) {},\n      beforeSend: function beforeSend(xhr) {}\n    };\n  }\n\n  _createClass(SimpleAjax, [{\n    key: \"_setRequestHeaders\",\n    value: function _setRequestHeaders(xhr) {\n      this.options.headers.forEach(function (header) {\n        return xhr.setRequestHeader(header.name, header.value);\n      });\n    }\n  }, {\n    key: \"request\",\n    value: function request() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      var _this = this;\n\n      _this._overrideOptionsProperties(options);\n\n      if (_this._isOptionsValid()) {\n        var xhr = new XMLHttpRequest();\n        xhr.open(_this.options.method, _this.options.url, _this.options.async);\n\n        xhr.onreadystatechange = function () {\n          var status = this.status.toString();\n\n          if (this.readyState == 4) {\n            var response = this.response;\n\n            if (status.startsWith('2')) {\n              if (_this.options.responseType === 'json') {\n                response = JSON.parse(response);\n              }\n\n              _this.options.onSuccess(response, this);\n            } else if (status.startsWith('4') || status.startsWith('5')) {\n              console.error(status, ' - ', this.statusText);\n\n              _this.options.onError(response, this);\n            }\n\n            _this.options.onComplete(response, this);\n          }\n        };\n\n        if (_this.options.method === 'POST' && typeof _this.options.data === 'string') {\n          xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n        }\n\n        this._setRequestHeaders(xhr);\n\n        this.options.beforeSend(xhr);\n        xhr.send(_this.options.data);\n      } else {\n        console.error('ERROR - Specify the options correctly');\n      }\n    }\n  }, {\n    key: \"_overrideOptionsProperties\",\n    value: function _overrideOptionsProperties(custom_options) {\n      for (var option_key in custom_options) {\n        if (this.options.hasOwnProperty(option_key)) this.options[option_key] = custom_options[option_key];\n      }\n    }\n  }, {\n    key: \"_isOptionsValid\",\n    value: function _isOptionsValid() {\n      if (typeof this.options.url !== 'string' || this.options.url == null || this.options.url.trim() === '') return false;\n      return true;\n    }\n  }]);\n\n  return SimpleAjax;\n}();\n\nvar simpleAjax = new SimpleAjax();\n\n\n//# sourceURL=webpack:///./src/utils/simple-ajax.js?");

/***/ })

/******/ });
});