"use strict";
self["webpackHotUpdatematerio_vuetify_vuejs_laravel_admin_template_free"]("resources_js_src_views_create-site_CreateSite_vue",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/InputCode.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/InputCode.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/default.css */ "./node_modules/highlight.js/styles/default.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'highlight.js/styles/html.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//


 // Импорт стилей highlight.js по умолчанию
 // Импорт стилей для подсветки XML (аналогично HTML)

// Загрузка необходимых языков подсветки (например, HTML)

highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('html', (highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.highlightCode();
  },
  computed: {
    highlightedCode: function highlightedCode() {
      var code = '<span style="color: red;">Пример кода HTML</span>'; // Ваш код HTML, который требуется подсветить
      return this.$hljs.highlight('html', code).value;
    }
  },
  methods: {
    highlightCode: function highlightCode() {
      var _this = this;
      this.$nextTick(function () {
        _this.$hljs.highlightBlock(_this.$refs.codeElement);
      });
    }
  }
});

/***/ })

});