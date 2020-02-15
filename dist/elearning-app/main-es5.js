function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _investigation_investigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./investigation/investigation.component */
    "./src/app/investigation/investigation.component.ts");

    var routes = [{
      path: '',
      component: _investigation_investigation_component__WEBPACK_IMPORTED_MODULE_2__["InvestigationComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'elearning-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbHZhcm9cXERvY3VtZW50c1xcR2l0SHViXFxmbGFnc0hlcm9rdS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIqIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-login/user-login.component */
    "./src/app/user-login/user-login.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _user_results_user_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-results/user-results.component */
    "./src/app/user-results/user-results.component.ts");
    /* harmony import */


    var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./quiz/quiz.component */
    "./src/app/quiz/quiz.component.ts");
    /* harmony import */


    var _investigation_investigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./investigation/investigation.component */
    "./src/app/investigation/investigation.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _countries_countries_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./countries/countries.component */
    "./src/app/countries/countries.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"], _user_results_user_results_component__WEBPACK_IMPORTED_MODULE_12__["UserResultsComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"], _investigation_investigation_component__WEBPACK_IMPORTED_MODULE_14__["InvestigationComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_17__["CountriesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"], _user_results_user_results_component__WEBPACK_IMPORTED_MODULE_12__["UserResultsComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"], _investigation_investigation_component__WEBPACK_IMPORTED_MODULE_14__["InvestigationComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_17__["CountriesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/countries/countries.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/countries/countries.component.ts ***!
    \**************************************************/

  /*! exports provided: CountriesComponent */

  /***/
  function srcAppCountriesCountriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesComponent", function () {
      return CountriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function CountriesComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r30.pais);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", country_r30.foto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CountriesComponent =
    /*#__PURE__*/
    function () {
      function CountriesComponent() {
        _classCallCheck(this, CountriesComponent);

        this.time = 0;
        this.goQuiz = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CountriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.interval = setInterval(function () {
            if (_this.time >= 0) {
              _this.time++;
            }
          }, 1000);
        }
      }, {
        key: "next",
        value: function next() {
          console.log("Time seeing countries: " + this.time);
          this.goQuiz.emit();
        }
      }]);

      return CountriesComponent;
    }();

    CountriesComponent.ɵfac = function CountriesComponent_Factory(t) {
      return new (t || CountriesComponent)();
    };

    CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountriesComponent,
      selectors: [["app-countries"]],
      inputs: {
        countries: "countries"
      },
      outputs: {
        goQuiz: "goQuiz"
      },
      decls: 14,
      vars: 2,
      consts: [[1, "row"], [1, "column"], [1, "text-right"], [1, "wrapper"], ["class", "component", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [1, "component"], [2, "text-align", "center"], ["height", "120", "width", "140", 3, "src"]],
      template: function CountriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fun with flags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tomate tu tiempo para observar las siguientes banderas y el pa\xEDs al que pertenecen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CountriesComponent_div_10_Template, 7, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_12_listener($event) {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comenzar el quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 1%;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\nmat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  border: solid 1px grey;\n  border-radius: 5px;\n}\n.row[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  padding: 2%;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyaWVzL0M6XFxVc2Vyc1xcYWx2YXJvXFxEb2N1bWVudHNcXEdpdEh1YlxcZmxhZ3NIZXJva3Uvc3JjXFxhcHBcXGNvdW50cmllc1xcY291bnRyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0NSO0FERUk7RUFUSjtJQVVRLGNBQUE7RUNDTjtFRENNO0lBQ0ksV0FBQTtFQ0NWO0FBQ0Y7QURHQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNBSjtBREVJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLmNvbXBvbmVudCB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG59IiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ud3JhcHBlciAuY29tcG9uZW50IHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAud3JhcHBlciAuY29tcG9uZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5tYXQtY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5yb3cgLmNvbHVtbiB7XG4gIHBhZGRpbmc6IDIlO1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countries',
          templateUrl: './countries.component.html',
          styleUrls: ['./countries.component.scss']
        }]
      }], function () {
        return [];
      }, {
        countries: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        goQuiz: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/investigation/investigation.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/investigation/investigation.component.ts ***!
    \**********************************************************/

  /*! exports provided: InvestigationComponent */

  /***/
  function srcAppInvestigationInvestigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvestigationComponent", function () {
      return InvestigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/session.service */
    "./src/app/services/session.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-login/user-login.component */
    "./src/app/user-login/user-login.component.ts");
    /* harmony import */


    var _countries_countries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../countries/countries.component */
    "./src/app/countries/countries.component.ts");
    /* harmony import */


    var _user_results_user_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user-results/user-results.component */
    "./src/app/user-results/user-results.component.ts");
    /* harmony import */


    var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../quiz/quiz.component */
    "./src/app/quiz/quiz.component.ts");

    function InvestigationComponent_app_user_login_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-login", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginResult", function InvestigationComponent_app_user_login_0_Template_app_user_login_loginResult_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.loginResult($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvestigationComponent_app_countries_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-countries", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("goQuiz", function InvestigationComponent_app_countries_1_Template_app_countries_goQuiz_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.goQuiz();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countries", ctx_r1.countries);
      }
    }

    function InvestigationComponent_app_user_results_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-results", 6);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tiempoQuiz", ctx_r2.sesionInfo.tiempoQuiz)("respuestasAcertadas", ctx_r2.sesionInfo.respuestasAcertadas)("respuestasFalladas", ctx_r2.sesionInfo.respuestasFalladas);
      }
    }

    function InvestigationComponent_app_quiz_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-quiz", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("quizResult", function InvestigationComponent_app_quiz_3_Template_app_quiz_quizResult_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.quizResult($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questions", ctx_r3.questions);
      }
    }

    var InvestigationComponent =
    /*#__PURE__*/
    function () {
      function InvestigationComponent(sesionService) {
        _classCallCheck(this, InvestigationComponent);

        this.sesionService = sesionService;
        this.sesionInfo = {
          id: '',
          edad: '',
          sexo: '',
          ronda: '',
          tiempoCountries: '',
          tiempoQuiz: '',
          respuestasAcertadas: '',
          respuestasFalladas: ''
        };
        this.showLogin = true;
      }

      _createClass(InvestigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.countries = [{
            "pais": "Montenegro",
            "foto": "montenegro.png",
            "show": false,
            "pista": "Limita por el norte con Bosnia y Herzegovina"
          }, {
            "pais": "Kosovo",
            "foto": "kosovo.png",
            "show": false,
            "pista": "País de origen de Dua Lipa"
          }, {
            "pais": "Isla de Navidad",
            "foto": "isladenavidad.jpg",
            "show": false,
            "pista": "Santa Claus parece pero no es"
          }, {
            "pais": "Swazilandia",
            "foto": "swazilandia.png",
            "show": false,
            "pista": "Frontera con Sudáfrica y Mozambique"
          }, {
            "pais": "Palau",
            "foto": "palau.png",
            "show": false,
            "pista": "En Barcelona hay un pabellón con un nombre similar"
          }, {
            "pais": "Uganda",
            "foto": "uganda.jpg",
            "show": false,
            "pista": "Los vengadores saben la respuesta"
          }, {
            "pais": "Sierra Leona",
            "foto": "sierraleona.png",
            "show": false,
            "pista": "El ébola le ataco duramente"
          }, {
            "pais": "Argelia",
            "foto": "argelia.png",
            "show": false,
            "pista": "A solo hora y media de España"
          }, {
            "pais": "Surinam",
            "foto": "surinam.png",
            "show": false,
            "pista": "Paramaribo es su capital"
          }, {
            "pais": "Letonia",
            "foto": "letonia.jpg",
            "show": false,
            "pista": "País europeo con una capital ambientada por Erasmus"
          }, {
            "pais": "El Cairo",
            "foto": "elcairo.png",
            "show": false,
            "pista": "Las piramides estan cerca"
          }, {
            "pais": "Tanzania",
            "foto": "tanzania.png",
            "show": false,
            "pista": "Encontraras mucha fauna en este país"
          }];
          var resultsNumbers = [];
          var entro = false;
          var i;

          for (i = 0; i < 9; i++) {
            entro = false;

            while (!entro) {
              var number = Math.floor(Math.random() * 12);

              if (resultsNumbers.indexOf(number) < 0) {
                resultsNumbers.push(number);
                entro = true;
              }
            }
          }

          console.log(resultsNumbers);
          this.questions = [];

          for (var _i = 0, _resultsNumbers = resultsNumbers; _i < _resultsNumbers.length; _i++) {
            var resultsNumber = _resultsNumbers[_i];
            this.questions.push(this.countries[resultsNumber]);
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.questions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var question = _step.value;

              var _entro = void 0;

              var _i2 = void 0;

              var posiblesRespuestas = [];
              var _resultsNumbers2 = [];

              for (_i2 = 0; _i2 < 4; _i2++) {
                while (!_entro) {
                  var _number = Math.floor(Math.random() * 12);

                  if (_resultsNumbers2.indexOf(_number) < 0) {
                    posiblesRespuestas.push(_number);
                    break;
                  }
                }
              }

              var numberResponse = this.countries.indexOf(question);

              if (posiblesRespuestas.indexOf(numberResponse) < 0) {
                posiblesRespuestas[Math.floor(Math.random() * 4)] = numberResponse;
              }

              console.log(posiblesRespuestas);
              question.respuestas = [];

              for (var _i3 = 0, _posiblesRespuestas = posiblesRespuestas; _i3 < _posiblesRespuestas.length; _i3++) {
                var posiblesRespuesta = _posiblesRespuestas[_i3];
                question.respuestas.push(this.countries[posiblesRespuesta]);
              }

              console.log(question);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "loginResult",
        value: function loginResult(event) {
          this.showLogin = false;
          this.showCountries = true;
          console.log(event.userData.id);
          console.log(this.sesionInfo.id);
          this.sesionInfo.id = event.userData.id;
          console.log(this.sesionInfo.id);
          this.sesionInfo.edad = event.userData.edad;
          this.sesionInfo.sexo = event.userData.sexo;
          console.log(this.sesionInfo);
        }
      }, {
        key: "goQuiz",
        value: function goQuiz() {
          this.showCountries = false;
          this.showQuiz = true;
          window.scrollTo(0, 0);
        }
      }, {
        key: "quizResult",
        value: function quizResult(event) {
          this.showResults = true;
          console.log(event);
          this.sesionInfo.tiempoQuiz = event.tiempoQuiz;
          this.sesionInfo.respuestasAcertadas = event.respuestasAcertadas;
          this.sesionInfo.respuestasFalladas = event.respuestasFalladas;
          console.log(this.sesionInfo);
          this.sesionService.sendRegister(this.sesionInfo);
          window.scrollTo(0, 0);
        }
      }]);

      return InvestigationComponent;
    }();

    InvestigationComponent.ɵfac = function InvestigationComponent_Factory(t) {
      return new (t || InvestigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]));
    };

    InvestigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvestigationComponent,
      selectors: [["app-investigation"]],
      decls: 4,
      vars: 4,
      consts: [[3, "loginResult", 4, "ngIf"], [3, "countries", "goQuiz", 4, "ngIf"], [3, "tiempoQuiz", "respuestasAcertadas", "respuestasFalladas", 4, "ngIf"], [3, "questions", "quizResult", 4, "ngIf"], [3, "loginResult"], [3, "countries", "goQuiz"], [3, "tiempoQuiz", "respuestasAcertadas", "respuestasFalladas"], [3, "questions", "quizResult"]],
      template: function InvestigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InvestigationComponent_app_user_login_0_Template, 1, 0, "app-user-login", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvestigationComponent_app_countries_1_Template, 1, 1, "app-countries", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvestigationComponent_app_user_results_2_Template, 1, 3, "app-user-results", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvestigationComponent_app_quiz_3_Template, 1, 1, "app-quiz", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showQuiz);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_4__["CountriesComponent"], _user_results_user_results_component__WEBPACK_IMPORTED_MODULE_5__["UserResultsComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVzdGlnYXRpb24vaW52ZXN0aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-investigation',
          templateUrl: './investigation.component.html',
          styleUrls: ['./investigation.component.css']
        }]
      }], function () {
        return [{
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/quiz/quiz.component.ts":
  /*!****************************************!*\
    !*** ./src/app/quiz/quiz.component.ts ***!
    \****************************************/

  /*! exports provided: QuizComponent */

  /***/
  function srcAppQuizQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
      return QuizComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");

    function QuizComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pistas restantes: ", ctx_r10.pistas, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.time);
      }
    }

    function QuizComponent_div_7_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Respuesta ", question_r13.answer, "");
      }
    }

    function QuizComponent_div_7_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_7_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.unlockHint($event, question_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conseguir una pista ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "help_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuizComponent_div_7_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r13.pista);
      }
    }

    function QuizComponent_div_7_mat_radio_group_11_mat_radio_button_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var o_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", o_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r25.pais, " ");
      }
    }

    function QuizComponent_div_7_mat_radio_group_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_7_mat_radio_group_11_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r14 = ctx_r26.index;
        var question_r13 = ctx_r26.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "question", i_r14 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r13.respuestas);
      }
    }

    function QuizComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_div_7_p_5_Template, 2, 1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuizComponent_div_7_button_9_Template, 4, 0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuizComponent_div_7_p_10_Template, 2, 1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuizComponent_div_7_mat_radio_group_11_Template, 3, 2, "mat-radio-group", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pregunta ", i_r14 + 1, " de 9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.showAnswers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", question_r13.foto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.showAnswers && !question_r13.show);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r13.show);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.showAnswers);
      }
    }

    function QuizComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.sendQuiz();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completar el quiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var QuizComponent =
    /*#__PURE__*/
    function () {
      function QuizComponent(fb) {
        _classCallCheck(this, QuizComponent);

        this.contadorAcertadas = 0;
        this.contadorFalladas = 0;
        this.pistas = 3;
        this.time = 0;
        this.quizResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.answersForm = fb.group({
          question1: '',
          question2: '',
          question3: '',
          question4: '',
          question5: '',
          question6: '',
          question7: '',
          question8: '',
          question9: ''
        });
      }

      _createClass(QuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.interval = setInterval(function () {
            if (_this2.time >= 0) {
              _this2.time++;
            }
          }, 1000);
        }
      }, {
        key: "sendQuiz",
        value: function sendQuiz() {
          console.log(this.answersForm.get('question1').value.pais);
          this.showAnswers = true;
          this.questions[0].answer = this.answersForm.get('question1').value.pais == this.questions[0].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[0].pais;
          this.questions[1].answer = this.answersForm.get('question2').value.pais == this.questions[1].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[1].pais;
          this.questions[2].answer = this.answersForm.get('question3').value.pais == this.questions[2].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[2].pais;
          this.questions[3].answer = this.answersForm.get('question4').value.pais == this.questions[3].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[3].pais;
          this.questions[4].answer = this.answersForm.get('question5').value.pais == this.questions[4].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[4].pais;
          this.questions[5].answer = this.answersForm.get('question6').value.pais == this.questions[5].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[5].pais;
          this.questions[6].answer = this.answersForm.get('question7').value.pais == this.questions[6].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[6].pais;
          this.questions[7].answer = this.answersForm.get('question8').value.pais == this.questions[7].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[7].pais;
          this.questions[8].answer = this.answersForm.get('question9').value.pais == this.questions[8].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[8].pais;
          console.log(this.questions[0].pais);
          this.answersForm.get('question1').value.pais == this.questions[0].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question2').value.pais == this.questions[1].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question3').value.pais == this.questions[2].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question4').value.pais == this.questions[3].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question5').value.pais == this.questions[4].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question6').value.pais == this.questions[5].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question7').value.pais == this.questions[6].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question8').value.pais == this.questions[7].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          this.answersForm.get('question9').value.pais == this.questions[8].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
          console.log(this.contadorAcertadas);
          console.log(this.contadorFalladas);
          console.log("Time quiz countries: " + this.time);
          var finalTime = this.time;
          this.quizResult.emit({
            tiempoQuiz: finalTime,
            respuestasAcertadas: this.contadorAcertadas,
            respuestasFalladas: this.contadorFalladas
          });
        }
      }, {
        key: "unlockHint",
        value: function unlockHint(event, question) {
          var individual = this.questions.filter(function (item) {
            return item.pais == question.pais;
          });

          if (this.pistas > 0) {
            individual[0].show = true;
            this.pistas--;
          }
        }
      }]);

      return QuizComponent;
    }();

    QuizComponent.ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      inputs: {
        questions: "questions"
      },
      outputs: {
        quizResult: "quizResult"
      },
      decls: 10,
      vars: 4,
      consts: [[1, "row"], [1, "column"], ["class", "column text-right", 4, "ngIf"], [3, "formGroup"], [1, "wrapper"], ["class", "component", 4, "ngFor", "ngForOf"], [1, "text-right"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "column", "text-right"], [1, "component"], [4, "ngIf"], [2, "text-align", "center"], ["height", "120", "width", "140", 1, "component-2", 3, "src"], [1, "component-2"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", "style", "white-space: nowrap;", 3, "formControlName", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 2, "white-space", "nowrap", 3, "formControlName"], ["class", "example-radio-button", "style", "padding: 1%;", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "padding", "1%", 3, "value"], ["mat-button", "", "color", "primary", 3, "click"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fun with flags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuizComponent_div_4_Template, 5, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuizComponent_div_7_Template, 12, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuizComponent_button_9_Template, 2, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAnswers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.answersForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAnswers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 1%;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.example-radio-group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\nmat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  border: solid 1px grey;\n  border-radius: 5px;\n}\n.row[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  padding: 2%;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9DOlxcVXNlcnNcXGFsdmFyb1xcRG9jdW1lbnRzXFxHaXRIdWJcXGZsYWdzSGVyb2t1L3NyY1xcYXBwXFxxdWl6XFxxdWl6LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ1I7QURFSTtFQVRKO0lBVVEsY0FBQTtFQ0NOO0VEQ007SUFDSSxXQUFBO0VDQ1Y7QUFDRjtBREdBO0VBQ0ksaUJBQUE7QUNBSjtBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNBSjtBREVJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0FSO0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLmNvbXBvbmVudCB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndyYXBwZXIgLmNvbXBvbmVudCB7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDElO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLndyYXBwZXIgLmNvbXBvbmVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYXQtY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5yb3cgLmNvbHVtbiB7XG4gIHBhZGRpbmc6IDIlO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quiz',
          templateUrl: './quiz.component.html',
          styleUrls: ['./quiz.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        questions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        quizResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/session.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/session.service.ts ***!
    \*********************************************/

  /*! exports provided: SessionService */

  /***/
  function srcAppServicesSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionService", function () {
      return SessionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SessionService =
    /*#__PURE__*/
    function () {
      function SessionService(http) {
        _classCallCheck(this, SessionService);

        this.http = http;
      }

      _createClass(SessionService, [{
        key: "sendRegister",
        value: function sendRegister(register) {
          return this.http.post('/log', register);
        }
      }]);

      return SessionService;
    }();

    SessionService.ɵfac = function SessionService_Factory(t) {
      return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SessionService,
      factory: SessionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-login/user-login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/user-login/user-login.component.ts ***!
    \****************************************************/

  /*! exports provided: UserLoginComponent */

  /***/
  function srcAppUserLoginUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () {
      return UserLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var UserLoginComponent =
    /*#__PURE__*/
    function () {
      function UserLoginComponent() {
        _classCallCheck(this, UserLoginComponent);

        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.loginResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UserLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendLogin",
        value: function sendLogin() {
          var userData = {
            "id": '',
            "edad": '',
            "sexo": ''
          };
          userData.id = this.userForm.get('id').value;
          userData.edad = this.userForm.get('edad').value;
          userData.sexo = this.userForm.get('sexo').value;
          console.log(userData);
          this.loginResult.emit({
            userData: userData
          });
        }
      }]);

      return UserLoginComponent;
    }();

    UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) {
      return new (t || UserLoginComponent)();
    };

    UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserLoginComponent,
      selectors: [["app-user-login"]],
      outputs: {
        loginResult: "loginResult"
      },
      decls: 30,
      vars: 1,
      consts: [[1, "main-div"], [2, "text-align", "center"], ["src", "https://s.tcdn.co/3fb/8ef/3fb8efbf-0507-3263-9337-48bd0d73f629/6.png", "height", "100", "width", "100"], [1, "example-form", 3, "formGroup"], ["matInput", "", "placeholder", "Tu ID", "formControlName", "id", "required", ""], ["matInput", "", "placeholder", "Tu edad", "formControlName", "edad", "required", ""], ["formControlName", "sexo", "required", ""], ["value", "Hombre"], ["value", "Mujer"], ["mat-button", "", "color", "primary", 3, "click"]],
      template: function UserLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fun with flags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sexo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mujer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_28_listener($event) {
            return ctx.sendLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: [".main-div[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  mat-card-actions[_ngcontent-%COMP%] {\r\n      text-align: right;\r\n  }\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUVGO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-login',
          templateUrl: './user-login.component.html',
          styleUrls: ['./user-login.component.css']
        }]
      }], function () {
        return [];
      }, {
        loginResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user-results/user-results.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-results/user-results.component.ts ***!
    \********************************************************/

  /*! exports provided: UserResultsComponent */

  /***/
  function srcAppUserResultsUserResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserResultsComponent", function () {
      return UserResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var UserResultsComponent =
    /*#__PURE__*/
    function () {
      function UserResultsComponent() {
        _classCallCheck(this, UserResultsComponent);
      }

      _createClass(UserResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserResultsComponent;
    }();

    UserResultsComponent.ɵfac = function UserResultsComponent_Factory(t) {
      return new (t || UserResultsComponent)();
    };

    UserResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserResultsComponent,
      selectors: [["app-user-results"]],
      inputs: {
        tiempoQuiz: "tiempoQuiz",
        respuestasAcertadas: "respuestasAcertadas",
        respuestasFalladas: "respuestasFalladas"
      },
      decls: 11,
      vars: 3,
      template: function UserResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Muchas gracias por tu tiempo. Te esperamos pronto para la pr\xF3xima sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Acertadas: ", ctx.respuestasAcertadas, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Falladas: ", ctx.respuestasFalladas, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tiempo: ", ctx.tiempoQuiz, "");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZXN1bHRzL0M6XFxVc2Vyc1xcYWx2YXJvXFxEb2N1bWVudHNcXEdpdEh1YlxcZmxhZ3NIZXJva3Uvc3JjXFxhcHBcXHVzZXItcmVzdWx0c1xcdXNlci1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXJlc3VsdHMvdXNlci1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVzdWx0cy91c2VyLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufSIsIm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-results',
          templateUrl: './user-results.component.html',
          styleUrls: ['./user-results.component.scss']
        }]
      }], function () {
        return [];
      }, {
        tiempoQuiz: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        respuestasAcertadas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        respuestasFalladas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\alvaro\Documents\GitHub\flagsHeroku\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map