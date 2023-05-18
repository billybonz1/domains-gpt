"use strict";
self["webpackHotUpdatematerio_vuetify_vuejs_laravel_admin_template_free"]("resources_js_src_views_create-site_CreateSite_vue",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/ListSite.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/ListSite.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditSite_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditSite.vue */ "./resources/js/src/views/create-site/components/EditSite.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    EditSite: _EditSite_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      showEditModal: false,
      selectedItem: null
    };
  },
  methods: {
    showEditDialog: function showEditDialog(index) {
      // Обработчик нажатия на кнопку "Редактировать"
      this.selectedItem = this.items[index];
      this.showEditModal = true;
    },
    hideEditDialog: function hideEditDialog() {
      // Обработчик нажатия на кнопку "Отмена"
      console.log(324234);
      this.showEditModal = false;
      this.selectedItem = null;
    },
    saveChanges: function saveChanges() {
      // Обработчик нажатия на кнопку "Сохранить"
      this.showEditModal = false;
      this.selectedItem = null;
    },
    deleteItem: function deleteItem(index) {
      // Обработчик нажатия на кнопку "Удалить"
      this.items.splice(index, 1);
    },
    changeSubmit: function changeSubmit(e) {
      console.log(12213123);
      this.$emit('changeSubmit', e);
    }
  }
});

/***/ })

});