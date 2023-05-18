"use strict";
self["webpackHotUpdatematerio_vuetify_vuejs_laravel_admin_template_free"]("/js/app",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    "v-navigation-drawer",
    {
      staticClass: "app-navigation-menu",
      attrs: {
        value: _vm.isDrawerOpen,
        app: "",
        floating: "",
        width: "260",
        right: _vm.$vuetify.rtl,
      },
      on: {
        input: function (val) {
          return _vm.$emit("update:is-drawer-open", val)
        },
      },
    },
    [
      _c(
        "div",
        {
          staticClass:
            "vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2",
        },
        [
          _c(
            "router-link",
            {
              staticClass: "d-flex align-center text-decoration-none",
              attrs: { to: "/" },
            },
            [
              _c("v-img", {
                staticClass: "app-logo me-3",
                attrs: {
                  src: (__webpack_require__(/*! @/assets/images/logos/logo.svg */ "./resources/js/src/assets/images/logos/logo.svg")["default"]),
                  "max-height": "30px",
                  "max-width": "30px",
                  alt: "logo",
                  contain: "",
                  eager: "",
                },
              }),
              _vm._v(" "),
              _c("v-slide-x-transition", [
                _c("h2", { staticClass: "app-title text--primary" }, [
                  _vm._v("MATERIO"),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        {
          staticClass: "vertical-nav-menu-items pr-5",
          attrs: { expand: "", shaped: "" },
        },
        [
          _c("nav-menu-link", {
            attrs: {
              title: "Dashboard",
              to: { name: "dashboard" },
              icon: _vm.icons.mdiHomeOutline,
            },
          }),
          _vm._v(" "),
          _c("nav-menu-link", {
            attrs: {
              title: "Test",
              to: { name: "form-layouts" },
              icon: _vm.icons.mdiFormSelect,
            },
          }),
          _vm._v(" "),
          _c("nav-menu-link", {
            attrs: {
              title: "Account Settings",
              to: { name: "pages-account-settings" },
              icon: _vm.icons.mdiAccountCogOutline,
            },
          }),
          _vm._v(" "),
          _c(
            "nav-menu-group",
            { attrs: { title: "Pages", icon: _vm.icons.mdiFileOutline } },
            [
              _c("nav-menu-link", {
                attrs: {
                  title: "Login",
                  to: { name: "pages-login" },
                  target: "_blank",
                },
              }),
              _vm._v(" "),
              _c("nav-menu-link", {
                attrs: {
                  title: "Register",
                  to: { name: "pages-register" },
                  target: "_blank",
                },
              }),
              _vm._v(" "),
              _c("nav-menu-link", {
                attrs: {
                  title: "Error",
                  to: { name: "error-404" },
                  target: "_blank",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("nav-menu-section-title", { attrs: { title: "USER INTERFACE" } }),
          _vm._v(" "),
          _c("nav-menu-link", {
            attrs: {
              title: "Typography",
              to: { name: "typography" },
              icon: _vm.icons.mdiAlphaTBoxOutline,
            },
          }),
          _vm._v(" "),
          _c("nav-menu-link", {
            attrs: {
              title: "Icons",
              to: { name: "icons" },
              icon: _vm.icons.mdiEyeOutline,
            },
          }),
          _vm._v(" "),
          _c("nav-menu-link", {
            attrs: {
              title: "Cards",
              to: { name: "cards" },
              icon: _vm.icons.mdiCreditCardOutline,
            },
          }),
          _vm._v(" "),
          _c("nav-menu-link", {
            attrs: {
              title: "Tables",
              to: { name: "simple-table" },
              icon: _vm.icons.mdiTable,
            },
          }),
          _vm._v(" "),
          _c("nav-menu-link", {
            attrs: {
              title: "Form Layouts",
              to: { name: "form-layouts" },
              icon: _vm.icons.mdiFormSelect,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          attrs: {
            href: "https://themeselection.com/products/materio-vuetify-vuejs-laravel-admin-template",
            target: "_blank",
            rel: "nofollow",
          },
        },
        [
          _c("v-img", {
            staticClass: "upgrade-banner mx-auto",
            attrs: {
              src: __webpack_require__("./resources/js/src/assets/images/pro sync recursive ^\\.\\/upgrade\\-banner\\-.*\\.png$")("./upgrade-banner-" +
                (_vm.$vuetify.theme.dark ? "dark" : "light") +
                ".png").default,
              alt: "upgrade-banner",
              transition: "scale-transition",
              "max-width": "230",
            },
          }),
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

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1a575ef06017a48f")
/******/ })();
/******/ 
/******/ }
);