(window["shighl_jsonp"] = window["shighl_jsonp"] || []).push([[7],{

/***/ "076b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("4bad");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__("f904");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__("a368");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
// Module
exports.push([module.i, ".page{padding:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2717":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("076b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("02073fe3", content, shadowRoot)
};

/***/ }),

/***/ "33ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6df1568d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=71e2e14a&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('b-navbar',{attrs:{"toggleable":"lg","type":"dark","variant":"info"}},[_c('b-navbar-brand',{attrs:{"href":"#"}},[_vm._v("OVC-JV")]),_c('b-navbar-toggle',{attrs:{"target":"nav-collapse"}}),_c('b-collapse',{attrs:{"id":"nav-collapse","is-nav":""}},[_c('b-navbar-nav',[_c('b-nav-item',{attrs:{"href":"#"}},[_vm._v("Common")]),_c('b-nav-item',{attrs:{"href":"#"}},[_vm._v("ActivityStreams / ActivityPub")]),_c('b-nav-item',{attrs:{"href":"#"}},[_vm._v("Solid")])],1),_c('b-navbar-nav',{staticClass:"ml-auto"},[_c('b-nav-form',[_c('b-form-input',{staticClass:"mr-sm-2",attrs:{"size":"sm","placeholder":"Search"}}),_c('b-button',{staticClass:"my-2 my-sm-0",attrs:{"size":"sm","type":"submit"}},[_vm._v("Search")])],1),_c('b-nav-item-dropdown',{attrs:{"text":"Lang","right":""}},[_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("EN")]),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("ES")]),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("RU")]),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("FA")])],1),_c('b-nav-item-dropdown',{attrs:{"right":""},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('em',[_vm._v("User")])]},proxy:true}])},[_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("Profile")]),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("Sign Out")])],1)],1)],1)],1)],1),_c('div',{staticClass:"page"},[_c('hr'),_c('h1',[_vm._v(" Documentation ")]),_c('p',[_vm._v("All OVC-JV component has it's own doc in it you just add to include (copy all files in the /dist folder of the repo) it on a webpage as any other web component and set the attribute doc=\"true\" or doc=true. ")]),_c('p',[_vm._v(" example : "),_c('b-alert',{attrs:{"variant":"success","show":""}},[_c('SolidLogin',{attrs:{"msg":"This is a SolidLogin Component with no doc"}}),_c('hr'),_c('SolidLogin',{attrs:{"msg":"This is a SolidLogin Component with doc","doc":"true"}})],1)],1),_c('hr'),_c('h1',[_vm._v("Activity Streams ")]),_c('AsNote',{attrs:{"msg":"this is message for ASNOTE"}}),_c('hr'),_c('h1',[_vm._v("Common")]),_c('CommonLog',{attrs:{"msg":"here is the common log"}}),_c('hr'),_vm._v(" Other tests, will be remove "),_c('ValidationObserver',{ref:"observer",scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('b-form',{attrs:{"novalidate":""},on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_c('b-form-group',{attrs:{"label":"Keyword","label-for":"keyword"}},[_c('ValidationProvider',{attrs:{"name":"keyword","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('b-form-input',{attrs:{"state":errors.length == 0,"type":"text","required":"","placeholder":"Keyword","name":"keyword"},model:{value:(_vm.form.keyword),callback:function ($$v) {_vm.$set(_vm.form, "keyword", $$v)},expression:"form.keyword"}}),_c('b-form-invalid-feedback',{attrs:{"state":errors.length == 0}},[_vm._v("Keyword is required")])]}}])})],1),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Search")]),_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.add}},[_vm._v("Add")]),_vm._v(" nn "+_vm._s(_vm.count)+"ll ")],1)]},proxy:true}])}),_c('br'),_c('b-tabs',[_c('b-tab',{attrs:{"title":"Current Weather"}},[_c('CurrentWeather')],1),_c('b-tab',{attrs:{"title":"Forecast"}},[_c('Forecast')],1)],1),_c('RObject')],1),_c('a',{attrs:{"href":"https://github.com/scenaristeur/ovc-jv","target":"_blank"}},[_vm._v("Source")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=71e2e14a&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/index.js + 244 modules
var esm = __webpack_require__("5f5b");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/icons/plugin.js
var icons_plugin = __webpack_require__("b1e0");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__("4c93");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("f9e3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__("2dd8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&shadow

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





Object(vee_validate_esm["c" /* extend */])("required", rules["a" /* required */]); // Install BootstrapVue

vue_runtime_esm["default"].use(esm["a" /* BootstrapVue */]); // Optionally install the BootstrapVue icon components plugin

vue_runtime_esm["default"].use(icons_plugin["a" /* IconsPlugin */]);


/* harmony default export */ var Appvue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  BootstrapVue: esm["a" /* BootstrapVue */],
  IconsPlugin: icons_plugin["a" /* IconsPlugin */],
  name: "App",
  components: {
    CurrentWeather: () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "7550")),
    Forecast: () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "c844")),
    SolidLogin: () => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "f54e")),
    AsNote: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, "521b")),
    CommonLog: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "eb0a")),
    RObject: () => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "3a9e")),
    ValidationProvider: vee_validate_esm["b" /* ValidationProvider */],
    ValidationObserver: vee_validate_esm["a" /* ValidationObserver */]
  },

  data() {
    return {
      form: {}
    };
  },

  computed: {
    count() {
      console.log(this.$store.state.count);
      return this.$store.state.count;
    }

  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.observer.validate();

      if (!isValid) {
        return;
      }

      localStorage.setItem("keyword", this.form.keyword);
      this.$store.commit("setKeyword", this.form.keyword);
    },

    add() {
      console.log("add", 5);
      this.$store.commit("add", 5);
    }

  },

  beforeMount() {
    this.form = {
      keyword: localStorage.getItem("keyword") || ""
    };
  },

  mounted() {
    this.$store.commit("setKeyword", this.form.keyword);
  }

});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var src_Appvue_type_script_lang_js_shadow = (Appvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("547d")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Appshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b0e");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2f62");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Store({
  state: {
    keyword: "",
    count: 0
  },
  mutations: {
    setKeyword(state, payload) {
      console.log(state.keyword, payload);
      state.keyword = payload;
    },

    add(state, montant) {
      console.log(state.count);
      state.count = state.count + montant;
      console.log(montant);
    }

  },
  actions: {}
}));

/***/ }),

/***/ "547d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2717");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=shighl.7.js.map