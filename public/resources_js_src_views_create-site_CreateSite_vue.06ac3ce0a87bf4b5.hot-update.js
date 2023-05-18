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
  props: {},
  methods: {
    editItem: function editItem(index) {
      // Обработчик нажатия на кнопку "Редактировать"
      // Вызываем метод родительского компонента, передавая индекс элемента, который нужно отредактировать
      console.log('edit');
      this.$emit('edit-item', index);
    },
    deleteItem: function deleteItem(index) {
      console.log('delete'); // Обработчик нажатия на кнопку "Удалить"
      // Вызываем метод родительского компонента, передавая индекс элемента, который нужно удалить

      this.$emit('delete-item', index);
    }
  }
});

/***/ })

});