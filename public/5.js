(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./resources/assets/js/components/List.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--4-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./resources/assets/js/components/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.10.5@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! weui */ "./node_modules/_weui@2.3.0@weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: weui__WEBPACK_IMPORTED_MODULE_1___default.a,
  mounted: function mounted() {
    this.chooseData = this.storage.get('choose');
    this.getData(true);
  },
  data: function data() {
    return {
      chooseData: {},
      choose_car_brand: false,
      loadingToast: false,
      success: false,
      err: false,
      msg: '',
      masterData: [],
      url: '/api/v1?page=1',
      loading: false,
      noData: false,
      allData: false
    };
  },
  methods: {
    toInfo: function toInfo(item) {
      this.storage.set('item', item);
      this.$router.push({
        name: 'details',
        query: {
          id: item.id
        }
      });
    },
    toHome: function toHome() {
      this.$router.push('/');
    },
    getData: function getData() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var status, that, chooseData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
                that = _this;
                if (status) _this.loadingToast = true;
                if (!status) _this.loading = true;
                _this.msg = "查询中";
                chooseData = that.chooseData; //  if (chooseData.car_brand == "请选择汽车品牌") chooseData.car_brand = '';

                _this.$axios({
                  method: 'get',
                  url: that.url,
                  params: chooseData
                }).then(function (response) {
                  if (status) that.loadingToast = false;
                  if (!status) that.loading = false;
                  that.masterData = response.data.data.data;

                  if (that.masterData.length == 0) {
                    that.noData = true;
                  }

                  that.url = response.data.data.next_page_url;
                })["catch"](function (error) {
                  that.msg = error;
                  that.err = true;
                  _this.loadingToast = false;
                  setInterval(function () {
                    that.err = false;
                  }, 5000);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./resources/assets/js/components/List.vue?vue&type=template&id=39abd255&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./resources/assets/js/components/List.vue?vue&type=template&id=39abd255& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "page preview js_show" },
        [
          _c("div", { staticClass: "page__hd", on: { click: _vm.toHome } }, [
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.success,
                  expression: "success"
                }
              ],
              attrs: { id: "toast" }
            },
            [
              _c("div", { staticClass: "weui-mask_transparent" }),
              _vm._v(" "),
              _c("div", { staticClass: "weui-toast" }, [
                _c("i", {
                  staticClass: "weui-icon-success-no-circle weui-icon_toast"
                }),
                _vm._v(" "),
                _c("p", { staticClass: "weui-toast__content" }, [
                  _vm._v(_vm._s(_vm.msg))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.err,
                  expression: "err"
                }
              ]
            },
            [
              _c("div", { staticClass: "weui-mask_transparent" }),
              _vm._v(" "),
              _c("div", { staticClass: "weui-toast" }, [
                _c("i", { staticClass: "weui_icon_warn weui-icon_toast" }),
                _vm._v(" "),
                _c("p", { staticClass: "weui-toast__content" }, [
                  _vm._v(_vm._s(_vm.msg))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loadingToast,
                  expression: "loadingToast"
                }
              ]
            },
            [
              _c("div", { staticClass: "weui-mask_transparent" }),
              _vm._v(" "),
              _c("div", { staticClass: "weui-toast" }, [
                _c("i", { staticClass: "weui-loading weui-icon_toast" }),
                _vm._v(" "),
                _c("p", { staticClass: "weui-toast__content" }, [
                  _vm._v(_vm._s(_vm.msg))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm._l(_vm.masterData, function(item, i) {
            return _c(
              "div",
              {
                staticClass: "page__hd",
                on: {
                  click: function($event) {
                    return _vm.toInfo(item)
                  }
                }
              },
              [
                _c("div", { staticClass: "weui-form-preview" }, [
                  _c("div", { staticClass: "weui-form-preview__hd" }, [
                    _c("div", { staticClass: "weui-form-preview__item" }, [
                      _c("label", { staticClass: "weui-form-preview__label" }, [
                        _vm._v("汽车品牌")
                      ]),
                      _vm._v(" "),
                      _c("em", { staticClass: "weui-form-preview__value" }, [
                        _vm._v(_vm._s(item.car_brand))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "weui-form-preview__bd" }, [
                    _c("div", { staticClass: "weui-form-preview__item" }, [
                      _c("label", { staticClass: "weui-form-preview__label" }, [
                        _vm._v("品牌编号")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "weui-form-preview__value" }, [
                        _vm._v(_vm._s(item.brand_no))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "weui-form-preview__item" }, [
                      _c("label", { staticClass: "weui-form-preview__label" }, [
                        _vm._v("品牌")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "weui-form-preview__value" }, [
                        _vm._v(_vm._s(item.brand))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "weui-form-preview__item" }, [
                      _c("label", { staticClass: "weui-form-preview__label" }, [
                        _vm._v("适用车型")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "weui-form-preview__value" }, [
                        _vm._v(_vm._s(item.series))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "weui-form-preview__item" }, [
                      _c("label", { staticClass: "weui-form-preview__label" }, [
                        _vm._v("原厂色号")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "weui-form-preview__value" }, [
                        _vm._v(_vm._s(item.color_no))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "weui-form-preview__item" }, [
                      _c("label", { staticClass: "weui-form-preview__label" }, [
                        _vm._v("颜色名称")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "weui-form-preview__value" }, [
                        _vm._v(_vm._s(item.color_name))
                      ])
                    ])
                  ])
                ])
              ]
            )
          }),
          _vm._v(" "),
          _c("div", { staticClass: "page__bd" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ],
                staticClass: "weui-loadmore"
              },
              [
                _c("i", { staticClass: "weui-loading" }),
                _vm._v(" "),
                _c("span", { staticClass: "weui-loadmore__tips" }, [
                  _vm._v("正在加载")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.noData,
                    expression: "noData"
                  }
                ],
                staticClass: "weui-loadmore weui-loadmore_line"
              },
              [
                _c("span", { staticClass: "weui-loadmore__tips" }, [
                  _vm._v("暂无数据")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.allData,
                    expression: "allData"
                  }
                ],
                staticClass:
                  "weui-loadmore weui-loadmore_line weui-loadmore_dot"
              },
              [_c("span", { staticClass: "weui-loadmore__tips" })]
            )
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "page__title" }, [
      _c("i", {
        staticClass: "fa  fa-2x fa-home",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/List.vue":
/*!*************************************************!*\
  !*** ./resources/assets/js/components/List.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_39abd255___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=39abd255& */ "./resources/assets/js/components/List.vue?vue&type=template&id=39abd255&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_39abd255___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_39abd255___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--4-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./resources/assets/js/components/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/List.vue?vue&type=template&id=39abd255&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/List.vue?vue&type=template&id=39abd255& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_39abd255___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=39abd255& */ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./resources/assets/js/components/List.vue?vue&type=template&id=39abd255&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_39abd255___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_39abd255___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);