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
      styles: ["*[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: #e0e0d1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBkMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function CountriesComponent_div_13_Template(rf, ctx) {
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
        var country_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r53.pais);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", country_r53.foto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CountriesComponent =
    /*#__PURE__*/
    function () {
      function CountriesComponent() {
        _classCallCheck(this, CountriesComponent);

        this.time = 20;
        this.goQuiz = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CountriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var time = true;
          this.interval = setInterval(function () {
            if (_this.time >= 0) {
              _this.time--;
            } else {
              if (time == true) {
                _this.goQuiz.emit({
                  tiempoCountries: 20
                });

                time = false;
              }
            }
          }, 1000);
        }
      }, {
        key: "next",
        value: function next() {
          console.log("Time seeing countries: " + this.time);
          this.goQuiz.emit({
            tiempoCountries: 20 - this.time
          });
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
      decls: 17,
      vars: 2,
      consts: [[1, "row"], [1, "column"], [1, "text-right"], ["mat-button", "", "color", "primary", 3, "click"], [1, "wrapper"], ["class", "component", 4, "ngFor", "ngForOf"], [1, "component"], [2, "text-align", "center"], ["height", "120", "width", "140", 3, "src"]],
      template: function CountriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FUN WITH FLAGS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tienes un m\xE1ximo de 20 segundos para observar las siguientes banderas y el pa\xEDs al que pertenecen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_10_listener($event) {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comenzar el quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CountriesComponent_div_13_Template, 7, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_15_listener($event) {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Comenzar el quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 1%;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\nmat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  border: solid 1px grey;\n  border-radius: 5px;\n}\n.row[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  padding: 2%;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n@media only screen and (min-width: 768px) {\n  mat-card-content[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHZhcm9sb3NhZGEvRG9jdW1lbnRzL0dpdEh1Yi9mbGFnc0hlcm9rdS9zcmMvYXBwL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ1I7QURFSTtFQVRKO0lBVVEsY0FBQTtFQ0NOO0VEQ007SUFDSSxXQUFBO0VDQ1Y7QUFDRjtBREdBO0VBQ0ksaUJBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0FKO0FERUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDQVI7QURJQTtFQUNJO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuY29tcG9uZW50IHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgcGFkZGluZzogMSU7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgXG4gICAgICAgIC5jb21wb25lbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxubWF0LWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLmNvbHVtbiB7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufSIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndyYXBwZXIgLmNvbXBvbmVudCB7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDElO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLndyYXBwZXIgLmNvbXBvbmVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxubWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ucm93IC5jb2x1bW4ge1xuICBwYWRkaW5nOiAyJTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */"]
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
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-login", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginResult", function InvestigationComponent_app_user_login_0_Template_app_user_login_loginResult_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.loginResult($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvestigationComponent_app_countries_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-countries", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("goQuiz", function InvestigationComponent_app_countries_1_Template_app_countries_goQuiz_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.goQuiz($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countries", ctx_r19.countries);
      }
    }

    function InvestigationComponent_app_user_results_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-results", 6);
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tiempoQuiz", ctx_r20.sesionInfo.tiempoQuiz)("respuestasAcertadas", ctx_r20.sesionInfo.respuestasAcertadas)("respuestasFalladas", ctx_r20.sesionInfo.respuestasFalladas)("pistas", ctx_r20.pistasUsadas);
      }
    }

    function InvestigationComponent_app_quiz_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-quiz", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("quizResult", function InvestigationComponent_app_quiz_3_Template_app_quiz_quizResult_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.quizResult($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questions", ctx_r21.questions);
      }
    }

    function InvestigationComponent_app_user_results_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-results", 6);
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tiempoQuiz", ctx_r22.sesionInfo.tiempoQuiz)("respuestasAcertadas", ctx_r22.sesionInfo.respuestasAcertadas)("respuestasFalladas", ctx_r22.sesionInfo.respuestasFalladas)("pistas", ctx_r22.pistasUsadas);
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
          respuestasFalladas: '',
          date: '',
          pistasRestantes: '',
          preguntasPista: '',
          consecAcert: '',
          consecFall: '',
          contadorNoConstestadas: ''
        };
        this.showLogin = true;
      }

      _createClass(InvestigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.countries = [{
            "pais": "Antwerp",
            "foto": "amberes.png",
            "show": false,
            "pista": "Tomorrowland es la pista"
          }, {
            "pais": "Libia",
            "foto": "libia.png",
            "show": false,
            "pista": "País en época de guerra"
          }, {
            "pais": "Camboya",
            "foto": "camboya.png",
            "show": false,
            "pista": "Nom Pen es su capital."
          }, {
            "pais": "Belize",
            "foto": "belize.png",
            "show": false,
            "pista": "País de Centro América independizado"
          }, {
            "pais": "Hawaii",
            "foto": "hawaii.png",
            "show": false,
            "pista": "Te gustaría estar en sus maravillosas playas"
          }, {
            "pais": "Dominica",
            "foto": "dominica.png",
            "show": false,
            "pista": "Isla formada por 10 parroquias"
          }, {
            "pais": "Qatar",
            "foto": "qatar.png",
            "show": false,
            "pista": "País machista"
          }, {
            "pais": "Islas Marianas",
            "foto": "nothermarian.png",
            "show": false,
            "pista": "Es un Estado libre asociado a EE.UU."
          }, {
            "pais": "Surinam",
            "foto": "surinam.png",
            "show": false,
            "pista": "Paramaribo es su capital"
          }, {
            "pais": "Etiopía",
            "foto": "etiopia.png",
            "show": false,
            "pista": "Su capital es Adís Adeba"
          }, {
            "pais": "Kazajistan",
            "foto": "kazajistan.jpg",
            "show": false,
            "pista": "Pertenecío a la antigua República Soviética. Su capital es Ástana"
          }, {
            "pais": "Groenlandia",
            "foto": "groenlandia.jpg",
            "show": false,
            "pista": "Se sitúa próxima a Dinamarca"
          }, {
            "pais": "Nepal",
            "foto": "nepal.jpg",
            "show": false,
            "pista": "Situada justo debajo de China"
          }, {
            "pais": "Seychelles",
            "foto": "seychelles.png",
            "show": false,
            "pista": "Islas"
          }, {
            "pais": "Sri Lanka",
            "foto": "srilanka.jpg",
            "show": false,
            "pista": "Isla asiática"
          }, {
            "pais": "Santa Lucía",
            "foto": "santalucia.jpg",
            "show": false,
            "pista": "Recemos"
          }, {
            "pais": "Kiribati",
            "foto": "kiribati.jpg",
            "show": false,
            "pista": "El pajáro es un símbolo mítico de países de Oceanía"
          }, {
            "pais": "Somalia",
            "foto": "somalia.png",
            "show": false,
            "pista": "País en el cuerno de África"
          }, {
            "pais": "Emirato C. Del Norte",
            "foto": "caucasian.png",
            "show": false,
            "pista": "Territorio que pertenecío al islam durante un breve periodo de tiempo"
          }, {
            "pais": "Ciudad del Vaticano",
            "foto": "vatican.png",
            "show": false,
            "pista": "Pequeña ciudad dónde vive el Papa"
          }, {
            "pais": "Leichtesntein",
            "foto": "leichtesntein.png",
            "show": false,
            "pista": "España endoso la mayor victoria de su historia a este país"
          }];
          var resultsNumbers = [];
          var entro = false;
          var i;

          for (i = 0; i < 12; i++) {
            entro = false;

            while (!entro) {
              var number = Math.floor(Math.random() * 21);

              if (resultsNumbers.indexOf(number) < 0) {
                resultsNumbers.push(number);
                entro = true;
              }
            }
          }

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
                  var _number = Math.floor(Math.random() * 21);

                  if (posiblesRespuestas.indexOf(_number) < 0) {
                    posiblesRespuestas.push(_number);
                    break;
                  }
                }
              }

              var numberResponse = this.countries.indexOf(question);

              if (posiblesRespuestas.indexOf(numberResponse) < 0) {
                posiblesRespuestas[Math.floor(Math.random() * 4)] = numberResponse;
              }

              question.respuestas = [];

              for (var _i3 = 0, _posiblesRespuestas = posiblesRespuestas; _i3 < _posiblesRespuestas.length; _i3++) {
                var posiblesRespuesta = _posiblesRespuestas[_i3];
                question.respuestas.push(this.countries[posiblesRespuesta]);
              }
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
          this.sesionInfo.id = event.userData.id;
          this.sesionInfo.edad = event.userData.edad;
          this.sesionInfo.sexo = event.userData.sexo; //console.log(this.sesionInfo);
        }
      }, {
        key: "goQuiz",
        value: function goQuiz(event) {
          this.showCountries = false;
          this.showQuiz = true;
          this.sesionInfo.tiempoCountries = event.tiempoCountries;
          window.scrollTo(0, 0);
        }
      }, {
        key: "quizResult",
        value: function quizResult(event) {
          this.showResults = true;
          this.sesionInfo.tiempoQuiz = event.tiempoQuiz;
          this.sesionInfo.respuestasAcertadas = event.respuestasAcertadas;
          this.sesionInfo.respuestasFalladas = event.respuestasFalladas;
          this.sesionInfo.pistasRestantes = event.pistasRestantes;
          this.sesionInfo.preguntasPista = event.preguntasPista;
          this.sesionInfo.consecAcert = event.consecAcert;
          this.sesionInfo.consecFall = event.consecFall;
          this.sesionInfo.contadorNoConstestadas = event.contadorNoConstestadas;
          this.pistasUsadas = 3 - parseFloat(this.sesionInfo.pistasRestantes);
          this.sesionInfo.date = new Date().toLocaleString();
          console.log(this.sesionInfo);
          this.sesionService.sendRegister(this.sesionInfo);
          window.scrollTo(0, 0);
          setTimeout(function () {
            window.scrollTo(0, 0);
          }, 100);
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
      decls: 5,
      vars: 5,
      consts: [[3, "loginResult", 4, "ngIf"], [3, "countries", "goQuiz", 4, "ngIf"], [3, "tiempoQuiz", "respuestasAcertadas", "respuestasFalladas", "pistas", 4, "ngIf"], [3, "questions", "quizResult", 4, "ngIf"], [3, "loginResult"], [3, "countries", "goQuiz"], [3, "tiempoQuiz", "respuestasAcertadas", "respuestasFalladas", "pistas"], [3, "questions", "quizResult"]],
      template: function InvestigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InvestigationComponent_app_user_login_0_Template, 1, 0, "app-user-login", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvestigationComponent_app_countries_1_Template, 1, 1, "app-countries", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvestigationComponent_app_user_results_2_Template, 1, 4, "app-user-results", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvestigationComponent_app_quiz_3_Template, 1, 1, "app-quiz", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InvestigationComponent_app_user_results_4_Template, 1, 4, "app-user-results", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showQuiz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResults);
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


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");

    function QuizComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pistas restantes: ", ctx_r33.pistas, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.time);
      }
    }

    function QuizComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FUN WITH FLAGS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Es tu momento. Tienes 1 minuto. Arrasa con lo que veas y generoso no seas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuizComponent_div_0_div_6_Template, 5, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r29.showAnswers);
      }
    }

    function QuizComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_button_2_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.sendQuiz();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completar el quiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuizComponent_div_5_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Respuesta ", question_r36.answer, "");
      }
    }

    function QuizComponent_div_5_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_5_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var question_r36 = ctx_r45.$implicit;
          var i_r37 = ctx_r45.index;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.unlockHint($event, question_r36, i_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sentiment_satisfied_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PISTA(", ctx_r39.pistas, " restantes)");
      }
    }

    function QuizComponent_div_5_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r36.pista);
      }
    }

    function QuizComponent_div_5_mat_radio_group_11_mat_radio_button_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var o_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", o_r48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r48.pais, " ");
      }
    }

    function QuizComponent_div_5_mat_radio_group_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_5_mat_radio_group_11_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r37 = ctx_r49.index;
        var question_r36 = ctx_r49.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "question", i_r37 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r36.respuestas);
      }
    }

    function QuizComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_div_5_p_5_Template, 2, 1, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuizComponent_div_5_button_9_Template, 4, 1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuizComponent_div_5_p_10_Template, 2, 1, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuizComponent_div_5_mat_radio_group_11_Template, 3, 2, "mat-radio-group", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r36 = ctx.$implicit;
        var i_r37 = ctx.index;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pregunta ", i_r37 + 1, " de 12");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.showAnswers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", question_r36.foto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.showAnswers && !question_r36.show);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r36.show);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.showAnswers);
      }
    }

    function QuizComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_button_7_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.sendQuiz();
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
        this.contadorNoConstestadas = 0;
        this.respuestas = [];
        this.pistas = 3;
        this.preguntasPista = [];
        this.preguntasConPista = 0;
        this.time = 60;
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
          question9: '',
          question10: '',
          question11: '',
          question12: ''
        });
      }

      _createClass(QuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var sendQuiz = true;
          this.interval = setInterval(function () {
            if (_this2.time >= 0) {
              _this2.time--;
            } else {
              if (sendQuiz == true) {
                _this2.sendQuiz();

                _this2.time = 0;
                sendQuiz = false;
              }
            }
          }, 1000);
        }
      }, {
        key: "sendQuiz",
        value: function sendQuiz() {
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
          this.questions[9].answer = this.answersForm.get('question10').value.pais == this.questions[9].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[9].pais;
          this.questions[10].answer = this.answersForm.get('question11').value.pais == this.questions[10].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[10].pais;
          this.questions[11].answer = this.answersForm.get('question12').value.pais == this.questions[11].pais ? "correcta" : "incorrecta. La respuesta correcta era " + this.questions[11].pais;
          this.respuestas.push(this.answersForm.get('question1').value.pais);
          this.respuestas.push(this.answersForm.get('question2').value.pais);
          this.respuestas.push(this.answersForm.get('question3').value.pais);
          this.respuestas.push(this.answersForm.get('question4').value.pais);
          this.respuestas.push(this.answersForm.get('question5').value.pais);
          this.respuestas.push(this.answersForm.get('question6').value.pais);
          this.respuestas.push(this.answersForm.get('question7').value.pais);
          this.respuestas.push(this.answersForm.get('question8').value.pais);
          this.respuestas.push(this.answersForm.get('question9').value.pais);
          this.respuestas.push(this.answersForm.get('question10').value.pais);
          this.respuestas.push(this.answersForm.get('question11').value.pais);
          this.respuestas.push(this.answersForm.get('question12').value.pais);
          var i;
          var consecAcert = 0,
              acert = 0,
              consecFall = 0,
              fall = 0;

          for (i = 0; i < 12; i++) {
            if (this.respuestas[i] == this.questions[i].pais) {
              if (this.preguntasPista.find(function (element) {
                return element == i;
              }) >= 0) this.preguntasConPista++;
            }

            if (this.respuestas[i] == this.questions[i].pais) {
              acert++;
              if (fall > consecFall) consecFall = fall;
              fall = 0;
            } else {
              fall++;
              if (acert > consecAcert) consecAcert = acert;
              acert = 0;
            }
          }

          if (acert > consecAcert) consecAcert = acert;
          if (fall > consecFall) consecFall = fall;
          console.log("consec acert: " + consecAcert + " fall " + consecFall);
          console.log(this.answersForm.get('question1').value.pais);
          console.log(typeof this.answersForm.get('question1').value.pais != undefined);
          this.answersForm.get('question1').value.pais == this.questions[0].pais ? this.contadorAcertadas++ : this.answersForm.get('question1').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question2').value.pais == this.questions[1].pais ? this.contadorAcertadas++ : this.answersForm.get('question2').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question3').value.pais == this.questions[2].pais ? this.contadorAcertadas++ : this.answersForm.get('question3').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question4').value.pais == this.questions[3].pais ? this.contadorAcertadas++ : this.answersForm.get('question4').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question5').value.pais == this.questions[4].pais ? this.contadorAcertadas++ : this.answersForm.get('question5').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question6').value.pais == this.questions[5].pais ? this.contadorAcertadas++ : this.answersForm.get('question6').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question7').value.pais == this.questions[6].pais ? this.contadorAcertadas++ : this.answersForm.get('question7').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question8').value.pais == this.questions[7].pais ? this.contadorAcertadas++ : this.answersForm.get('question8').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question9').value.pais == this.questions[8].pais ? this.contadorAcertadas++ : this.answersForm.get('question9').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question10').value.pais == this.questions[9].pais ? this.contadorAcertadas++ : this.answersForm.get('question10').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question11').value.pais == this.questions[10].pais ? this.contadorAcertadas++ : this.answersForm.get('question11').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          this.answersForm.get('question12').value.pais == this.questions[11].pais ? this.contadorAcertadas++ : this.answersForm.get('question12').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas;
          console.log(this.contadorAcertadas);
          console.log(this.contadorFalladas);
          console.log("Preguntas con pista " + this.preguntasConPista);
          console.log("Time quiz countries: " + this.time);
          var finalTime = 60 - this.time;
          this.quizResult.emit({
            tiempoQuiz: finalTime,
            respuestasAcertadas: this.contadorAcertadas,
            respuestasFalladas: this.contadorFalladas,
            pistasRestantes: this.pistas,
            preguntasPista: this.preguntasConPista,
            consecAcert: consecAcert,
            consecFall: consecFall,
            contadorNoConstestadas: this.contadorNoConstestadas
          });
        }
      }, {
        key: "unlockHint",
        value: function unlockHint(event, question, number) {
          var individual = this.questions.filter(function (item) {
            return item.pais == question.pais;
          });

          if (this.pistas > 0) {
            individual[0].show = true;
            this.pistas--;
          }

          this.preguntasPista.push(number);
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
      decls: 8,
      vars: 5,
      consts: [["class", "row", 4, "ngIf"], [1, "text-right"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "wrapper"], ["class", "component", 4, "ngFor", "ngForOf"], [1, "row"], [1, "column"], ["class", "column text-right", 4, "ngIf"], [1, "column", "text-right"], ["mat-button", "", "color", "primary", 3, "click"], [1, "component"], [4, "ngIf"], [2, "text-align", "center"], ["height", "120", "width", "140", 1, "component-2", 3, "src"], [1, "component-2"], ["mat-raised-button", "", "color", "warn", "color", "primary", 3, "click", 4, "ngIf"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", "style", "white-space: nowrap;", 3, "formControlName", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "color", "primary", 3, "click"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 2, "white-space", "nowrap", 3, "formControlName"], ["class", "example-radio-button", "style", "padding: 1%;", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "padding", "1%", 3, "value"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuizComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuizComponent_button_2_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_div_5_Template, 12, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuizComponent_button_7_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAnswers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAnswers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.answersForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAnswers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 1%;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .wrapper[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.example-radio-group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\nmat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  border: solid 1px grey;\n  border-radius: 5px;\n}\n.row[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  padding: 2%;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHZhcm9sb3NhZGEvRG9jdW1lbnRzL0dpdEh1Yi9mbGFnc0hlcm9rdS9zcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0NSO0FERUk7RUFUSjtJQVVRLGNBQUE7RUNDTjtFRENNO0lBQ0ksV0FBQTtFQ0NWO0FBQ0Y7QURHQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQUo7QURFSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNBUjtBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuY29tcG9uZW50IHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgcGFkZGluZzogMSU7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgXG4gICAgICAgIC5jb21wb25lbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubWF0LWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLmNvbHVtbiB7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59IiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ud3JhcHBlciAuY29tcG9uZW50IHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAud3JhcHBlciAuY29tcG9uZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnJvdyAuY29sdW1uIHtcbiAgcGFkZGluZzogMiU7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"]
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
          console.log(register);
          return this.http.post('/log', register).subscribe(function (res) {
            return console.log(res);
          });
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function UserLoginComponent_p_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Asegurate de introducir bien toda la informaci\xF3n. Gracias");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

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

          if (userData.id != '' && userData.edad != '') {
            this.loginResult.emit({
              userData: userData
            });
          } else {
            this.wrongData = true;
          }
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
      decls: 49,
      vars: 2,
      consts: [[1, "main-div"], [2, "text-align", "center"], ["src", "https://s.tcdn.co/3fb/8ef/3fb8efbf-0507-3263-9337-48bd0d73f629/6.png", "height", "100", "width", "100"], [2, "color", "red"], [1, "example-form", 3, "formGroup"], ["matInput", "", "placeholder", "Tu ID", "formControlName", "id", "required", ""], ["matInput", "", "placeholder", "Tu edad", "formControlName", "edad", "required", ""], ["formControlName", "sexo", "required", ""], ["value", "Hombre"], ["value", "Mujer"], [4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"]],
      template: function UserLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FUN WITH FLAGS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "With Sheldon Cooper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tienes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "20 segundos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " para VISUALIZAR una serie de banderas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A continuaci\xF3n dispondr\xE1s de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " para contestar a 12 PREGUNTAS. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Recuerda que tienes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3 PISTAS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " para ayudarte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Edad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sexo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mujer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserLoginComponent_p_46_Template, 2, 0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_47_listener($event) {
            return ctx.sendLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Empezar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wrongData);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".main-div[_ngcontent-%COMP%]{\n    height: 100vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\n  mat-card-actions[_ngcontent-%COMP%] {\n      text-align: right;\n  }\n\n  .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n  h2[_ngcontent-%COMP%] {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUVGO0lBQ0ksV0FBVztBQUNmOztFQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXZ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"]
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
        value: function ngOnInit() {
          window.scrollTo(0, 0);
        }
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
        respuestasFalladas: "respuestasFalladas",
        pistas: "pistas"
      },
      decls: 26,
      vars: 4,
      consts: [[1, "side"], ["src", "https://bigbangtheoryla.files.wordpress.com/2009/05/jim_parsons.jpg?w=584", "height", "250", "width", "160"]],
      template: function UserResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sheldon est\xE1 orgulloso de tu desempe\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Aciertos: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Fallos: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Tiempo realizando el quiz: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Pistas utilizadas: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Muchas gracias por tu tiempo. Te esperamos pronto para la pr\xF3xima sesi\xF3n. Si es tu \xFAltima vez no nos olvides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.respuestasAcertadas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.respuestasFalladas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tiempoQuiz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pistas);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\nmat-card-content[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1%;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHZhcm9sb3NhZGEvRG9jdW1lbnRzL0dpdEh1Yi9mbGFnc0hlcm9rdS9zcmMvYXBwL3VzZXItcmVzdWx0cy91c2VyLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItcmVzdWx0cy91c2VyLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC91c2VyLXJlc3VsdHMvdXNlci1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAuc2lkZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG59IiwibWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWF0LWNhcmQtY29udGVudCAuc2lkZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxJTtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"]
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
        }],
        pistas: [{
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
    /*! /Users/alvarolosada/Documents/GitHub/flagsHeroku/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map