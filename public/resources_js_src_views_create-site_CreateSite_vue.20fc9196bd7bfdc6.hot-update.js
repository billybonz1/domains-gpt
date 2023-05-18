"use strict";
self["webpackHotUpdatematerio_vuetify_vuejs_laravel_admin_template_free"]("resources_js_src_views_create-site_CreateSite_vue",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/CreateSite.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/CreateSite.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ListSite_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ListSite.vue */ "./resources/js/src/views/create-site/components/ListSite.vue");

//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ListSite: _components_ListSite_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      items: [{
        title: 'Элемент 1',
        discription: '',
        "delete": false
      }, {
        title: 'Элемент 2',
        discription: '',
        "delete": false
      }, {
        title: 'Элемент 3',
        discription: '',
        "delete": false
      }]
    };
  },
  methods: {
    deleteItem: function deleteItem(index) {
      // Обработчик удаления элемента
      // Удаляем элемент массива с указанным индексом
      this.items.splice(index, 1);
    },
    changeSubmit: function changeSubmit(e) {
      console.log(e);
      this.items[0] = e;
    }
  }
});

/***/ })

});