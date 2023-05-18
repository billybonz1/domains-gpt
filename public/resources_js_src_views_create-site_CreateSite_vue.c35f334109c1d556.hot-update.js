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
  props: {
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
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

/***/ }),

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
      _c("teleport", { attrs: { to: "body" } }, [
        _vm.showEditModal
          ? _c("div", { staticClass: "edit-modal" }, [
              _c("h2", [
                _vm._v(
                  'Редактировать элемент "' +
                    _vm._s(_vm.selectedItem.title) +
                    '"'
                ),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedItem.title,
                    expression: "selectedItem.title",
                  },
                ],
                domProps: { value: _vm.selectedItem.title },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.selectedItem, "title", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("button", { on: { click: _vm.hideEditDialog } }, [
                _vm._v("Отмена"),
              ]),
              _vm._v(" "),
              _c("button", { on: { click: _vm.saveChanges } }, [
                _vm._v("Сохранить"),
              ]),
            ])
          : _vm._e(),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

});