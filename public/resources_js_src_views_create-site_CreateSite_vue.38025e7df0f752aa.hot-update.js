"use strict";
self["webpackHotUpdatematerio_vuetify_vuejs_laravel_admin_template_free"]("resources_js_src_views_create-site_CreateSite_vue",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/ListSite.vue?vue&type=template&id=41cc974d&lang=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/create-site/components/ListSite.vue?vue&type=template&id=41cc974d&lang=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    [
      _vm._l(_vm.items, function (item, index) {
        return _c("div", { key: index }, [
          _c("span", [_vm._v(_vm._s(item.title))]),
          _vm._v(" "),
          _c(
            "button",
            {
              on: {
                click: function ($event) {
                  return _vm.editItem(index)
                },
              },
            },
            [_vm._v("Редактировать")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              on: {
                click: function ($event) {
                  return _vm.deleteItem(index)
                },
              },
            },
            [_vm._v("Удалить")]
          ),
        ])
      }),
      _vm._v(" "),
      _c("edit-site", { on: { hideEditDialog: function ($event) {} } }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

});