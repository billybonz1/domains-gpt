"use strict";
self["webpackHotUpdatematerio_vuetify_vuejs_laravel_admin_template_free"]("resources_js_src_views_create-site_CreateSite_vue",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/EditSite.vue?vue&type=template&id=cec9ae8e&scoped=true&lang=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/EditSite.vue?vue&type=template&id=cec9ae8e&scoped=true&lang=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "edit-site  " },
    [
      _c(
        "v-card",
        { staticClass: "edit-site_modal m-3 pt-8 pe-8 pb-8 ps-8" },
        [
          _c(
            "v-col",
            { staticClass: "d-flex " },
            [
              _c("v-text-field", {
                attrs: { label: "Title", dense: "", outlined: "", rows: 5 },
                model: {
                  value: _vm.element.title,
                  callback: function ($$v) {
                    _vm.$set(_vm.element, "title", $$v)
                  },
                  expression: "element.title",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Discription", dense: "", outlined: "" },
                model: {
                  value: _vm.element.discription,
                  callback: function ($$v) {
                    _vm.$set(_vm.element, "discription", $$v)
                  },
                  expression: "element.discription",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mt-4",
              attrs: { color: "primary" },
              on: { click: _vm.submit },
            },
            [_vm._v("\n        Save changes\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mt-4",
              attrs: { color: "secondary", outlined: "", type: "reset" },
              on: {
                click: function ($event) {
                  return _vm.$emit("hideEditDialog")
                },
              },
            },
            [_vm._v("\n          Cancel\n        ")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

});