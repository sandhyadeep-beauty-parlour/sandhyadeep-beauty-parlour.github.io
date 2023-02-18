function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n    <div class=\"login-main-container\">\n\n        <div class=\"login-container\">\n            <div *ngIf=\"isContinue\" class=\"back-container\">\n                <div (click)=\"isContinue = !isContinue\" class=\"back-button\">\n                    <i class=\"fa fa-angle-left\"></i>\n                </div>\n            </div>\n            <div class=\"logo-container\">\n                <div class=\"logo-image\"></div>\n                <div class=\"logo-text\">\n                    Sandhyadeep\n                </div>\n                <div class=\"slogan-text\">\n                    Have a hair affair with us\n                </div>\n            </div>\n            <div *ngIf=\"!isContinue\" class=\"login-buttons\">\n                <div (click)=\"onContinue()\" class=\"create-account-button fb-button\">\n                    <i class=\"fa fa-facebook-square\"></i> <div> Login with Facebook </div>\n                </div>\n                <div (click)=\"onContinue()\" class=\"create-account-button insta-button\">\n                    <i class=\"fa fa-instagram\"></i> <div> Login with Instagram </div>\n                </div>\n                <div (click)=\"onContinue()\" class=\"create-account-button only-button\">\n                    <i class=\"fa fa-user-circle\"></i> <div> Create New Account </div>\n                </div>\n            </div>\n            <div *ngIf=\"isContinue\" class=\"form-main-container\">\n                <form [formGroup]='loginForm'>\n                    <div class=\"form-container\">\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n                                <input formControlName=\"name\" type=\"text\" class=\"default form-control\" name=\"name\" placeholder=\"Enter Your Name\">\n                            </div>\n                        </div>\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\n                                <input formControlName=\"mobileNumber\" type=\"text\" class=\"default form-control\" name=\"email\" placeholder=\"Enter Mobile Number\">\n                            </div>\n                        </div>\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                                <ion-datetime formControlName=\"dob\" class=\"default form-control\" placeholder=\"Date of Birth\" display-timezone=\"ist\"></ion-datetime>\n                            </div>\n                        </div>\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-at\"></i></span>\n                                <input  formControlName=\"email\" type=\"email\" class=\"default form-control\" name=\"email\" placeholder=\"Enter Email\">\n                            </div>\n                        </div>\n                        <div (click)=\"onLogIn()\" class=\"login-button\">\n                            <button> Continue <i class=\"fa fa-arrow-right\"></i></button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/notification-service.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/notification-service.service.ts ***!
    \*************************************************/

  /*! exports provided: NotificationServiceService */

  /***/
  function srcAppNotificationServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationServiceService", function () {
      return NotificationServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationServiceService = function NotificationServiceService() {
      _classCallCheck(this, NotificationServiceService);
    };

    NotificationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationServiceService);
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-group {\n  margin-bottom: 10px;\n  height: 45px;\n}\n.input-group .input-group-addon {\n  padding: 6px 12px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  background-color: #901180;\n  border: 1px solid #901180;\n  display: flex;\n  align-items: center;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  min-width: 42px;\n  justify-content: center;\n}\ninput.default {\n  border: 1px solid #901180 !important;\n}\nion-datetime.default {\n  border: 1px solid #901180 !important;\n}\n.login-main-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(147, 18, 152) 63%);*/\n  background: url('image.jpg');\n  height: 100%;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background-size: cover;\n}\n.login-main-container .login-container {\n  width: 80%;\n  padding: 15px;\n  background: #ffffff78;\n  border-radius: 15px;\n}\n.login-main-container .login-container .logo-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.2;\n}\n.login-main-container .login-container .logo-container .logo-image {\n  background-image: url('sandhyadeep-final-logo.png');\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  background-position: center center;\n}\n.login-main-container .login-container .logo-container .slogan-text {\n  color: #901180;\n  margin-bottom: 10%;\n  font-size: 12px;\n}\n.login-main-container .login-container .logo-container .logo-text {\n  font-size: 30px;\n  color: #901180;\n  font-weight: 700;\n}\n.login-main-container .login-container .form-main-container {\n  display: flex;\n  justify-content: center;\n}\n.login-main-container .login-container .form-main-container form {\n  width: 90%;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup {\n  text-align: center;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup a {\n  font-size: 12px;\n  font-weight: bold;\n  color: #901180;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button {\n  color: white;\n  padding: 9px 15px;\n  margin: 30px 0 5px;\n  display: flex;\n  border-radius: 5px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n  height: 45px;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container input {\n  font-size: 16px;\n  height: 100%;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container ion-datetime {\n  font-size: 16px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-webkit-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-moz-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-ms-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input {\n  padding: 15px;\n  border: 1px solid #fff;\n  margin: 10px;\n  color: white;\n  border-radius: 25px;\n  background-color: transparent;\n}\n.login-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.login-buttons .create-account-button {\n  padding: 6px;\n  width: 90%;\n  text-align: center;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  border-radius: 0.25rem;\n  height: 45px;\n}\n.login-buttons .create-account-button.only-button {\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n  color: white;\n}\n.login-buttons .create-account-button.fb-button {\n  background: #3B5999;\n  color: white;\n}\n.login-buttons .create-account-button.insta-button {\n  color: white;\n  background: #c32aa3;\n}\n.login-buttons .create-account-button i {\n  margin: 0 12px;\n  font-size: 22px;\n}\n.login-buttons img {\n  height: 40px;\n}\n.back-container {\n  position: absolute;\n}\n.back-container .back-button {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 0.25rem;\n  color: #901180;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL2hvbWUvbHQtMTAwL3NhbmRoeWFkZWVwMTk5My1yZXBvL3NyYy9zYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDREY7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUVIVTtFRklWLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQUo7QURJQTtFQUNFLG9DQUFBO0FDREY7QURJQTtFQUNFLG9DQUFBO0FDREY7QURJQTtFQUNFLHlGQUFBO0VBRUEsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVFbENrQjtFRm1DbEIsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBREtBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsbURBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGRjtBRElBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNERjtBREVFO0VBQ0UsVUFBQTtBQ0FKO0FET0E7RUFNRSxrQkFBQTtBQ1RGO0FESUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRko7QURPQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsWUV0R2M7QURrR2hCO0FET0E7RUFDRSxlRTlHWTtFRitHWixpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0pGO0FEUUU7RUFDRSxlRXRIVTtFRnVIVixZQUFBO0FDTEo7QURPRTtFQUNFLGVFMUhVO0VGMkhWLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFNBO0VBQ0UsWUFBQTtBQ05GO0FES0E7RUFDRSxZQUFBO0FDTkY7QURLQTtFQUNFLFlBQUE7QUNORjtBREtBO0VBQ0UsWUFBQTtBQ05GO0FEU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNORjtBRFNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ05GO0FET0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUV2SlU7RUZ3SlYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0xKO0FETUk7RUFDRSw0REFBQTtFQUNBLFlBQUE7QUNKTjtBRE9JO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDTE47QURRSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ05OO0FEU0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEV0U7RUFDRSxZQUFBO0FDVEo7QURhQTtFQUNFLGtCQUFBO0FDVkY7QURXRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlRTVMVTtBRG1MZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLTE7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTE4MDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xuICAgIG1pbi13aWR0aDogNDJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5pbnB1dC5kZWZhdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUuZGVmYXVsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODAgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoMTQ3LCAxOCwgMTUyKSA2MyUpOyovXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgcmdiYSg0MCwgMjksIDIzMiwgMSkgLTI1JSwgcmdiKDgxLCAzNiwgODIpIDYzJSk7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2UuanBnXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY3ODtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zYW5kaHlhZGVlcC1maW5hbC1sb2dvLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBjb2xvcjogIzkwMTE4MDtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM5MDExODA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIHtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5saW5rLXNpZ251cCB7XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzkwMTE4MDtcbiAgfVxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubG9naW4tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgbWFyZ2luOiAzMHB4IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgaGVpZ2h0OiAkYnV0dG9uLWhlaWdodDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLTE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIHtcbiAgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBpb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbnB1dC1jb250YWluZXIgLmZvcm0taW5wdXQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5jcmVhdGUtYWNjb3VudC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGhlaWdodDogNDVweDtcbiAgICAmLm9ubHktYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLmZiLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjM0I1OTk5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYuaW5zdGEtYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNjMzJhYTM7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuXG4uYmFjay1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC5iYWNrLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBjb2xvcjogIzkwMTE4MDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMztcbiAgfVxufVxuIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxMTgwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBtaW4td2lkdGg6IDQycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dC5kZWZhdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUuZGVmYXVsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODAgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoMTQ3LCAxOCwgMTUyKSA2MyUpOyovXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2UuanBnXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2FuZGh5YWRlZXAtZmluYWwtbG9nby5wbmdcIik7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgY29sb3I6ICM5MDExODA7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM5MDExODA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciBmb3JtIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5saW5rLXNpZ251cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubGluay1zaWdudXAgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjOTAxMTgwO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxvZ2luLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIG1hcmdpbjogMzBweCAwIDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciBpb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbnB1dC1jb250YWluZXIgLmZvcm0taW5wdXQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uIHtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbi5vbmx5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbi5mYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk5O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uLmluc3RhLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2MzMmFhMztcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24gaSB7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubG9naW4tYnV0dG9ucyBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5iYWNrLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5iYWNrLWNvbnRhaW5lciAuYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiAjOTAxMTgwO1xuICBmb250LXNpemU6IDMwcHg7XG59IiwiJHByaW1hcnktY29sb3I6ICNjYzJiNWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzUzYTg4O1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _notification_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../notification-service.service */
    "./src/app/notification-service.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, formBuilder, toastController, notification) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.notification = notification;
        this.isContinue = false;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
        }
      }, {
        key: "onContinue",
        value: function onContinue() {
          this.isContinue = true;
        }
      }, {
        key: "goToSignup",
        value: function goToSignup() {
          this.router.navigate(['signup']);
        }
      }, {
        key: "onLogIn",
        value: function onLogIn() {
          if (this.loginForm.invalid) {
            this.presentToast('Please fill all the mandatory fields');
            return;
          }

          this.router.navigate(['home/feed']);
        }
      }, {
        key: "presentToast",
        value: function presentToast(displayMessage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: displayMessage,
                      position: 'top',
                      cssClass: 'customToastClass',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      header: 'Toast header',
                      message: 'Click to Close',
                      position: 'top',
                      buttons: [{
                        side: 'start',
                        icon: 'star',
                        text: 'Favorite',
                        handler: function handler() {
                          console.log('Favorite clicked');
                        }
                      }, {
                        text: 'Done',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _notification_service_service__WEBPACK_IMPORTED_MODULE_5__["NotificationServiceService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _notification_service_service__WEBPACK_IMPORTED_MODULE_5__["NotificationServiceService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map