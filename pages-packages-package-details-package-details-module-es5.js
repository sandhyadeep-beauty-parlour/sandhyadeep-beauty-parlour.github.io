function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-package-details-package-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPackagesPackageDetailsPackageDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURLAdminAPIs;
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentCountry = this.country.asObservable();
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        });
      }

      _createClass(ApiService, [{
        key: "getUserRole",
        value: function getUserRole() {
          return localStorage.getItem('role');
        }
      }, {
        key: "setHeaderToken",
        value: function setHeaderToken() {
          var token = localStorage.getItem('token');
          this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            Authorization: "Bearer ".concat(token)
          });
        }
      }, {
        key: "getServicesData",
        value: function getServicesData() {
          var localUrl = 'assets/json_files/services.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getMainServiceData",
        value: function getMainServiceData() {
          var localUrl = 'assets/json_files/MainServices.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCombos",
        value: function getCombos() {
          var localUrl = 'assets/json_files/packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCoupons",
        value: function getCoupons() {
          var localUrl = 'assets/json_files/coupons.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getServicePackage",
        value: function getServicePackage() {
          var localUrl = 'assets/json_files/service-packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "commonError",
        value: function commonError(err) {
          console.log(err);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/pages/packages/package-details/package-details-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: PackageDetailsRoutingModule */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetailsRoutingModule", function () {
      return PackageDetailsRoutingModule;
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


    var _package_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./package-details.page */
    "./src/app/pages/packages/package-details/package-details.page.ts");

    var routes = [{
      path: '',
      component: _package_details_page__WEBPACK_IMPORTED_MODULE_3__["PackageDetailsPage"]
    }];

    var PackageDetailsRoutingModule = function PackageDetailsRoutingModule() {
      _classCallCheck(this, PackageDetailsRoutingModule);
    };

    PackageDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PackageDetailsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/package-details/package-details.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details.module.ts ***!
    \**************************************************************************/

  /*! exports provided: PackageDetailsModule */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetailsModule", function () {
      return PackageDetailsModule;
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


    var _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./package-details-routing.module */
    "./src/app/pages/packages/package-details/package-details-routing.module.ts");
    /* harmony import */


    var _package_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./package-details.page */
    "./src/app/pages/packages/package-details/package-details.page.ts");

    var PackageDetailsModule = function PackageDetailsModule() {
      _classCallCheck(this, PackageDetailsModule);
    };

    PackageDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackageDetailsRoutingModule"]],
      declarations: [_package_details_page__WEBPACK_IMPORTED_MODULE_6__["PackageDetailsPage"]]
    })], PackageDetailsModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/package-details/package-details.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2UtZGV0YWlscy9wYWNrYWdlLWRldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/packages/package-details/package-details.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details.page.ts ***!
    \************************************************************************/

  /*! exports provided: PackageDetailsPage */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetailsPage", function () {
      return PackageDetailsPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../api.service */
    "./src/app/api.service.ts");

    var PackageDetailsPage = /*#__PURE__*/function () {
      function PackageDetailsPage(adminService) {
        _classCallCheck(this, PackageDetailsPage);

        this.adminService = adminService;
      }

      _createClass(PackageDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPackages();
        }
      }, {
        key: "getPackages",
        value: function getPackages() {
          var _this = this;

          this.adminService.getServicePackage().subscribe(function (res) {
            return _this.getServicePackageSuccess(res);
          }, function (error) {
            _this.adminService.commonError(error);
          });
        }
      }, {
        key: "getServicePackageSuccess",
        value: function getServicePackageSuccess(res) {
          console.log(res);
        }
      }]);

      return PackageDetailsPage;
    }();

    PackageDetailsPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    PackageDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'package-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./package-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./package-details.page.scss */
      "./src/app/pages/packages/package-details/package-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], PackageDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-packages-package-details-package-details-module-es5.js.map