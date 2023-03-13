function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/services-modal/services-modal.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/services-modal/services-modal.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminPanelComponentsServicesModalServicesModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div>\n    <div class=\"drawer\"></div>\n  </div>\n  <div class=\"admin-modal-title-container\">\n    <div style=\"display: flex; justify-content: end;\">\n      <i (click)=\"closeModal()\" class=\"fa fa-times close-button\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"admin-modal-title\">{{editMode ? 'Update' : 'Add'}} Service</div>\n  </div>\n</ion-header>\n<ion-content>\n  <form [formGroup]='servicesForm'>\n    <div class=\"modal-form-image\">\n      <div class=\"modal-image\">\n        <img *ngIf=\"imageBase64 && !imageUrl\" src=\"{{imageBase64}}\" alt=\"\">\n        <img *ngIf=\"!imageBase64 && !imageUrl\" src=\"/assets/no-image.png\" alt=\"\">\n        <img *ngIf=\"editMode && imageUrl\" [src]=\"imageUrl\" alt=\"\">\n      </div>\n      <div class=\"image-changer\">\n        <input accept=\"image/*\" (change)=\"onFileChange($event)\" type=\"file\" id=\"upload\"\n               hidden/>\n        <label style=\"margin-bottom: 0\" for=\"upload\">\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\n        </label>\n      </div>\n    </div>\n    <div class=\"modal-form-container\">\n      <ion-list>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Service Name</ion-label>\n          <ion-input maxlength=\"20\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Duration (Minutes)</ion-label>\n          <ion-input maxlength=\"3\" formControlName=\"duration\" style=\"width: 100px\" type=\"number\"></ion-input>\n          <!--        <ion-label class=\"required-label\">Minutes</ion-label>-->\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Price (₹)</ion-label>\n          <ion-input maxlength=\"6\" formControlName=\"price\" style=\"width: 100px\" type=\"number\"></ion-input>\n          <!--        <ion-label class=\"required-label\">₹</ion-label>-->\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"required-label\" *ngIf=\"editMode\" position=\"stacked\">Sub Service</ion-label>\n          <ion-label class=\"required-label\" *ngIf=\"!editMode\" position=\"floating\">Sub Service</ion-label>\n          <ion-select  formControlName=\"subService\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option [value]=\"subService?.id\" *ngFor=\"let subService of subServices\">{{subService?.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Type</ion-label>\n          <ion-select formControlName=\"type\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option value=\"convincing\">Convincing</ion-select-option>\n            <ion-select-option value=\"frequent\">Frequent</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Description</ion-label>\n          <ion-textarea maxlength=\"150\" class=\"service-textarea\" formControlName=\"description\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Brands Used</ion-label>\n          <ion-select (ionChange)=\"onChangingBrand($event)\"  [multiple]=\"true\" formControlName=\"brands\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option value=\"no_brands\">No Brands</ion-select-option>\n            <ion-select-option *ngFor=\"let brand of brandsList\" value=\"{{brand?.value}}\">{{brand?.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Skin Type</ion-label>\n          <ion-select (ionChange)=\"onChangingSkinType($event)\"  [multiple]=\"true\" formControlName=\"skinTypes\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option value=\"all\">All Skin Types</ion-select-option>\n            <ion-select-option *ngFor=\"let skinType of skinTypesList\" value=\"{{skinType?.value}}\">{{skinType?.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <div style=\"display: flex; justify-content: center; padding: 10px;\">\n    <button (click)=\"onAddService()\" style=\"width: 250px\"\n            mat-raised-button color=\"primary\">{{editMode ? 'Update' : 'Save'}}\n    </button>\n  </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/services/services.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/services/services.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminPanelServicesServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"service-type-container\">\n    <div class=\"service-types-container\">\n      <ion-card *ngFor=\"let service of services\">\n        <div class=\"service-types-image-container\">\n          <img [src]=\"service?.imageUrl\"/>\n        </div>\n        <ion-card-header>\n          <div class=\"ion-card-header\">\n            <div class=\"display: flex; align-items: center;\">\n              <div class=\"service-type-name\">{{service?.name}}</div>\n              <div style=\"margin-left: 5px\">\n                <i style=\"margin-right: 5px\" class=\"fa fa-clock-o\">  </i>{{service?.duration}} Minutes\n              </div>\n            </div>\n            <div style=\"font-size: 20px\">\n              {{service?.price}} ₹\n            </div>\n          </div>\n        </ion-card-header>\n        <ion-card-content>\n          <div style=\"font-size: 14px\">\n            <div>\n              <div>\n                <div class=\"text-style-horizontal-line\">Sub Service</div>\n              </div>\n              <div class=\"tags-container\">\n                <ul class=\"tags\">\n                  <li><a href=\"#\" class=\"tag\">{{service?.subService?.name | titlecase}}</a></li>\n                </ul>\n              </div>\n            </div>\n            <div>\n              <div>\n                <div class=\"text-style-horizontal-line\">Description</div>\n              </div>\n              <div style=\"margin: 5px 0 20px\">\n                {{service.description}}\n              </div>\n            </div>\n            <div *ngIf=\"service?.brands && service?.brands?.length\">\n              <div>\n                <div class=\"text-style-horizontal-line\">Brands Used</div>\n              </div>\n              <div class=\"tags-container\">\n                <ul *ngFor=\"let brand of service?.brands\" class=\"tags\">\n                  <li><a href=\"#\" class=\"tag\">{{brand}}</a></li>\n                </ul>\n              </div>\n            </div>\n            <div *ngIf=\"service?.skinTypes && service?.skinTypes?.length\">\n              <div>\n                <div class=\"text-style-horizontal-line\">Skin Types</div>\n              </div>\n              <div class=\"tags-container\">\n                <ul *ngFor=\"let skinType of service?.skinTypes\" class=\"tags\">\n                  <li><a href=\"#\" class=\"tag\">{{skinType}}</a></li>\n                </ul>\n              </div>\n            </div>\n            <div style=\"padding: 15px 0;\">\n              <mat-divider></mat-divider>\n            </div>\n            <div class=\"service-type-footer-icons\">\n              <button (click)=\"onEdit(service)\" color=\"primary\" mat-mini-fab>\n                <i class=\"fa fa-pencil-square-o\"></i>\n              </button>\n              <button (click)=\"onDelete(service)\" color=\"warn\" mat-mini-fab>\n                <i class=\"fa fa-trash\"></i>\n              </button>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button (click)=\"presentModal({})\" size=\"small\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/services-modal/services-modal.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/services-modal/services-modal.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminPanelComponentsServicesModalServicesModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".drawer {\n  left: 0px;\n  right: 0px;\n  top: 5px;\n  border-radius: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  width: 36px;\n  height: 5px;\n  transform: translateZ(0px);\n  border: 0px;\n  background: var(--ion-color-step-350, #c0c0be);\n  cursor: pointer;\n  z-index: 11;\n}\n\n.admin-modal-title-container {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 15px 10px;\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n}\n\n.admin-modal-title-container .admin-modal-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.close-button {\n  display: flex;\n  position: absolute;\n  justify-content: end;\n  right: 19px;\n  font-size: 20px;\n  color: gray;\n}\n\n.modal-form-image {\n  height: 165px;\n  background: #000000c4;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.modal-form-image .modal-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-form-image .modal-image img {\n  height: 100%;\n}\n\n.modal-form-image .image-changer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  padding: 10px 15px;\n}\n\n.modal-form-image .image-changer ion-icon {\n  font-size: 25px;\n  color: #ffffffba;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2VzLW1vZGFsL3NlcnZpY2VzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2VzLW1vZGFsL3NlcnZpY2VzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRERJO0VBQ0UsWUFBQTtBQ0dOOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRERJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2VzLW1vZGFsL3NlcnZpY2VzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlciB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgLmFkbWluLW1vZGFsLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHJpZ2h0OiAxOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubW9kYWwtZm9ybS1pbWFnZSB7XG4gIGhlaWdodDogMTY1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAubW9kYWwtaW1hZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5pbWFnZS1jaGFuZ2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmYmE7XG4gICAgfVxuICB9XG59XG5cbiIsIi5kcmF3ZXIge1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTM1MCwgI2MwYzBiZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTE7XG59XG5cbi5hZG1pbi1tb2RhbC10aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWRtaW4tbW9kYWwtdGl0bGUtY29udGFpbmVyIC5hZG1pbi1tb2RhbC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgcmlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5tb2RhbC1mb3JtLWltYWdlIHtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGM0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwtZm9ybS1pbWFnZSAubW9kYWwtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tb2RhbC1mb3JtLWltYWdlIC5tb2RhbC1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubW9kYWwtZm9ybS1pbWFnZSAuaW1hZ2UtY2hhbmdlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLmltYWdlLWNoYW5nZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmYmE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/services-modal/services-modal.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/services-modal/services-modal.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ServicesModalComponent */

  /***/
  function srcAppPagesAdminPanelComponentsServicesModalServicesModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesModalComponent", function () {
      return ServicesModalComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../communication.service */
    "./src/app/pages/admin-panel/communication.service.ts");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ServicesModalComponent = /*#__PURE__*/function () {
      function ServicesModalComponent(navParams, router, adminService, communication, sharedService, formBuilder, modalController) {
        _classCallCheck(this, ServicesModalComponent);

        this.navParams = navParams;
        this.router = router;
        this.adminService = adminService;
        this.communication = communication;
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.selectedImage = null;
        this.imageBase64 = '';
        this.imageUrl = '';
        this.serviceId = '';
        this.editMode = false;
        this.subServices = [];
        this.brandsList = [];
        this.skinTypesList = [];
      }

      _createClass(ServicesModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.servicesForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            subService: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            brands: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: [],
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            skinTypes: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: [],
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.editMode = false;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getSubServices();
          this.getBrands();
          this.getSkinTypes();
        }
      }, {
        key: "patchServiceData",
        value: function patchServiceData() {
          this.editMode = false;

          if (this.navParams && this.navParams.data && this.navParams.data.id) {
            this.editMode = true;
            this.patchModalData(this.navParams.data);
          }
        }
      }, {
        key: "getBrands",
        value: function getBrands() {
          var _this = this;

          this.sharedService.showSkeletonSpinner.next(true);
          this.adminService.getBrands().subscribe(function (res) {
            return _this.getBrandsSuccess(res);
          }, function (error) {
            _this.adminService.commonError(error);
          });
        }
      }, {
        key: "getBrandsSuccess",
        value: function getBrandsSuccess(res) {
          this.brandsList = res;
          this.brandsList = this.brandsList.map(function (val) {
            val.value = val.name.trim().split(' ').join('_');
            return val;
          });
        }
      }, {
        key: "getSkinTypes",
        value: function getSkinTypes() {
          var _this2 = this;

          this.sharedService.showSkeletonSpinner.next(true);
          this.adminService.getSkinTypes().subscribe(function (res) {
            return _this2.getSkinTypesSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "getSkinTypesSuccess",
        value: function getSkinTypesSuccess(res) {
          this.skinTypesList = res;
          this.skinTypesList = this.skinTypesList.map(function (val) {
            val.value = val.name.trim().split(' ').join('_');
            return val;
          });
        }
      }, {
        key: "onChangingSkinType",
        value: function onChangingSkinType(event) {
          var selectedValues = event.target.value.map(function (v) {
            return v.toLowerCase();
          });

          if (selectedValues.includes('all')) {
            this.servicesForm.get('skinTypes').setValue('all');
          }
        }
      }, {
        key: "onChangingBrand",
        value: function onChangingBrand(event) {
          var selectedValues = event.target.value.map(function (v) {
            return v.toLowerCase();
          });

          if (selectedValues.includes('no_brands')) {
            this.servicesForm.get('brands').setValue('no_brands');
          }
        }
      }, {
        key: "patchModalData",
        value: function patchModalData(patchData) {
          this.serviceId = patchData.id;
          this.servicesForm.get('name').setValue(patchData.name);
          this.servicesForm.get('type').setValue(patchData.type);
          this.servicesForm.get('duration').setValue(patchData.duration);
          this.servicesForm.get('price').setValue(patchData.price);
          this.servicesForm.get('subService').setValue(patchData.subService.id);
          this.servicesForm.get('description').setValue(patchData.description);
          this.servicesForm.get('brands').setValue(patchData.brands);
          this.servicesForm.get('skinTypes').setValue(patchData.skinTypes); // This logic to update the image

          this.imageUrl = "".concat(patchData.imageUrl, "?").concat(new Date().getTime());
        }
      }, {
        key: "onAddService",
        value: function onAddService() {
          if (this.servicesForm.invalid) {
            this.sharedService.presentToast('Please fill all the mandatory fields', 'error');
            return;
          }

          if (this.imageUrl.length === 0 && this.imageBase64.length === 0) {
            this.sharedService.presentToast('Please select the image', 'error');
            return;
          }

          if (this.editMode) {
            this.patchService();
          } else {
            this.createService();
          }
        }
      }, {
        key: "patchService",
        value: function patchService() {
          var _this3 = this;

          var formData = new FormData();
          formData.append('name', this.servicesForm.get('name').value);
          formData.append('type', this.servicesForm.get('type').value);
          formData.append('duration', this.servicesForm.get('duration').value);
          formData.append('price', this.servicesForm.get('price').value);
          formData.append('subService', this.servicesForm.get('subService').value);
          formData.append('description', this.servicesForm.get('description').value);
          formData.append('brands', this.servicesForm.get('brands').value);
          formData.append('skinTypes', this.servicesForm.get('skinTypes').value);

          if (this.imageBase64) {
            var fileName = "service-".concat(this.servicesForm.get('name').value.toLowerCase().trim().split(' ').join('-'), ".").concat(this.selectedImage.name.split('.')[1]);
            formData.append('file', this.selectedImage, fileName);
          }

          this.adminService.updateService(formData, this.serviceId).subscribe(function (res) {
            return _this3.createServiceSuccess(res);
          }, function (error) {
            _this3.adminService.commonError(error);
          });
        }
      }, {
        key: "createService",
        value: function createService() {
          var _this4 = this;

          var formData = new FormData();
          var fileName = "service-".concat(this.servicesForm.get('name').value.toLowerCase().trim().split(' ').join('-'), ".").concat(this.selectedImage.name.split('.')[1]);
          formData.append('name', this.servicesForm.get('name').value);
          formData.append('type', this.servicesForm.get('type').value);
          formData.append('duration', this.servicesForm.get('duration').value);
          formData.append('price', this.servicesForm.get('price').value);
          formData.append('subService', this.servicesForm.get('subService').value);
          formData.append('description', this.servicesForm.get('description').value);
          formData.append('brands', this.servicesForm.get('brands').value);
          formData.append('skinTypes', this.servicesForm.get('skinTypes').value);
          formData.append('file', this.selectedImage, fileName);
          this.adminService.createService(formData).subscribe(function (res) {
            return _this4.createServiceSuccess(res);
          }, function (error) {
            _this4.adminService.commonError(error);
          });
        }
      }, {
        key: "createServiceSuccess",
        value: function createServiceSuccess(res) {
          this.closeModal();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.servicesForm.reset();
                    this.selectedImage = null;
                    this.imageBase64 = '';
                    onClosedData = "Wrapped Up!";
                    _context.next = 6;
                    return this.modalController.dismiss(onClosedData);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          var image = event.target.files[0];
          var fileExtension = image.name.split('.')[1].toLowerCase();

          if (image && image.type.includes('image') && ['png', 'jpg', 'jpeg'].includes(fileExtension)) {
            this.getImageBase64(image);
            this.selectedImage = image;
            this.imageUrl = '';
          } else {
            this.sharedService.presentToast('Image format is incorrect', 'error');
          }
        }
      }, {
        key: "getImageBase64",
        value: function getImageBase64(file) {
          var _this5 = this;

          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            _this5.imageBase64 = reader.result;
          };
        }
      }, {
        key: "getSubServices",
        value: function getSubServices() {
          var _this6 = this;

          this.adminService.getAllSubService().subscribe(function (res) {
            return _this6.getAllSubServiceSuccess(res);
          }, function (error) {
            _this6.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllSubServiceSuccess",
        value: function getAllSubServiceSuccess(res) {
          this.subServices = res;
          this.patchServiceData();
        }
      }]);

      return ServicesModalComponent;
    }();

    ServicesModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ServicesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/services-modal/services-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services-modal.component.scss */
      "./src/app/pages/admin-panel/components/services-modal/services-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ServicesModalComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/services-modal/services-modal.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/services-modal/services-modal.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: ServicesModalModule */

  /***/
  function srcAppPagesAdminPanelComponentsServicesModalServicesModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesModalModule", function () {
      return ServicesModalModule;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services-modal.component */
    "./src/app/pages/admin-panel/components/services-modal/services-modal.component.ts");

    var ServicesModalModule = function ServicesModalModule() {
      _classCallCheck(this, ServicesModalModule);
    };

    ServicesModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_services_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServicesModalComponent"]],
      declarations: [_services_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServicesModalComponent"]],
      entryComponents: [_services_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServicesModalComponent"]]
    })], ServicesModalModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/services/services-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/admin-panel/services/services-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ServicesPageRoutingModule */

  /***/
  function srcAppPagesAdminPanelServicesServicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPageRoutingModule", function () {
      return ServicesPageRoutingModule;
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


    var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services.page */
    "./src/app/pages/admin-panel/services/services.page.ts");

    var routes = [{
      path: '',
      component: _services_page__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"]
    }];

    var ServicesPageRoutingModule = function ServicesPageRoutingModule() {
      _classCallCheck(this, ServicesPageRoutingModule);
    };

    ServicesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServicesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/services/services.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/admin-panel/services/services.module.ts ***!
    \***************************************************************/

  /*! exports provided: ServicesPageModule */

  /***/
  function srcAppPagesAdminPanelServicesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function () {
      return ServicesPageModule;
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


    var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services-routing.module */
    "./src/app/pages/admin-panel/services/services-routing.module.ts");
    /* harmony import */


    var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services.page */
    "./src/app/pages/admin-panel/services/services.page.ts");
    /* harmony import */


    var _components_services_modal_services_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/services-modal/services-modal.module */
    "./src/app/pages/admin-panel/components/services-modal/services-modal.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ServicesPageModule = function ServicesPageModule() {
      _classCallCheck(this, ServicesPageModule);
    };

    ServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicesPageRoutingModule"], _components_services_modal_services_modal_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModalModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]],
      declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]],
      entryComponents: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
    })], ServicesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/services/services.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/admin-panel/services/services.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminPanelServicesServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  border-bottom: 6px solid #d3d3d37a;\n}\n.page-heading .heading-text {\n  font-size: 18px;\n}\n.service-types-image-container {\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #000000c4;\n}\n.service-types-image-container img {\n  height: 200px;\n}\n.service-type-grid ion-row {\n  padding: 5px;\n  border-radius: 5px;\n}\n.service-type-grid ion-row:nth-child(2n+1) {\n  background: lightgray;\n}\n.service-type-footer-icons {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.service-type-footer-icons button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n.service-type-footer-icons button .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ion-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ion-card-header .service-type-name {\n  font-size: 18px;\n  font-weight: 500;\n}\n.text-style-horizontal-line {\n  font-size: 12px;\n  color: gray;\n}\n.text-style-horizontal-line {\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  text-align: center;\n  width: 100%;\n  margin: 5px 0;\n  font-weight: 500;\n}\n.text-style-horizontal-line:before, .text-style-horizontal-line:after {\n  position: absolute;\n  top: 51%;\n  overflow: hidden;\n  width: 49%;\n  height: 1px;\n  content: \" \";\n  background-color: lightgray;\n}\n.text-style-horizontal-line:before {\n  margin-left: -50%;\n  text-align: right;\n}\n.text-style-horizontal-line .color {\n  background-color: #ccc;\n}\n.tags-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.tags-container .tags {\n  list-style: none;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n}\n.tags-container .tags li {\n  float: left;\n}\n.tags-container .tag {\n  background: #eee;\n  border-radius: 3px 0 0 3px;\n  color: #666;\n  display: inline-block;\n  height: 26px;\n  line-height: 26px;\n  padding: 0 20px 0 23px;\n  position: relative;\n  margin: 0 10px 10px 0;\n  text-decoration: none;\n  -webkit-transition: color 0.2s;\n}\n.tags-container .tag::before {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);\n  content: \"\";\n  height: 6px;\n  left: 10px;\n  position: absolute;\n  width: 6px;\n  top: 10px;\n}\n.tags-container .tag::after {\n  background: #fff;\n  border-bottom: 13px solid transparent;\n  border-left: 10px solid #eee;\n  border-top: 13px solid transparent;\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.tags-container .tag:hover {\n  background-color: crimson;\n  color: white;\n}\n.tags-container .tag:hover::after {\n  border-left-color: crimson;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUY7QURDRTtFQUNFLGFBQUE7QUNDSjtBRElFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREo7QURHRTtFQUNFLHFCQUFBO0FDREo7QURLQTtFQUNFLGFBQUE7RUFBZSwyQkFBQTtFQUE2QixtQkFBQTtBQ0E5QztBRENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNBRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDRTtFQUNFLHNCQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQUY7QURDRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0FDQUo7QURHRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDREo7QURJRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ0hKO0FETUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNKSjtBRE9FO0VBQ0UsMEJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2QzZDNkMzdhO1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuLnNlcnZpY2UtdHlwZXMtaW1hZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5cbi5zZXJ2aWNlLXR5cGUtZ3JpZCB7XG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgaW9uLXJvdzpudGgtY2hpbGQoMm4rMSkge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgfVxufVxuXG4uc2VydmljZS10eXBlLWZvb3Rlci1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLmlvbi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLnNlcnZpY2UtdHlwZS1uYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG4udGV4dC1zdHlsZS1ob3Jpem9udGFsLWxpbmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICAmIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUxJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA0OSU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBtYXJnaW4tbGVmdDogLTUwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cbn1cblxuLnRhZ3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAudGFncyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnRhZ3MgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLnRhZyB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICB9XG5cbiAgLnRhZzo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNnB4O1xuICAgIHRvcDogMTBweDtcbiAgfVxuXG4gIC50YWc6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItdG9wOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAudGFnOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC50YWc6aG92ZXI6OmFmdGVyIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogY3JpbXNvbjtcbiAgfVxufVxuIiwiLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2QzZDNkMzdhO1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2VydmljZS10eXBlcy1pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGM0O1xufVxuLnNlcnZpY2UtdHlwZXMtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zZXJ2aWNlLXR5cGUtZ3JpZCBpb24tcm93IHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2VydmljZS10eXBlLWdyaWQgaW9uLXJvdzpudGgtY2hpbGQoMm4rMSkge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi5zZXJ2aWNlLXR5cGUtZm9vdGVyLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlcnZpY2UtdHlwZS1mb290ZXItaWNvbnMgYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXJ2aWNlLXR5cGUtZm9vdGVyLWljb25zIGJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaW9uLWNhcmQtaGVhZGVyIC5zZXJ2aWNlLXR5cGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRleHQtc3R5bGUtaG9yaXpvbnRhbC1saW5lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi50ZXh0LXN0eWxlLWhvcml6b250YWwtbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50ZXh0LXN0eWxlLWhvcml6b250YWwtbGluZTpiZWZvcmUsIC50ZXh0LXN0eWxlLWhvcml6b250YWwtbGluZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0OSU7XG4gIGhlaWdodDogMXB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuLnRleHQtc3R5bGUtaG9yaXpvbnRhbC1saW5lOmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50ZXh0LXN0eWxlLWhvcml6b250YWwtbGluZSAuY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4udGFncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udGFncy1jb250YWluZXIgLnRhZ3Mge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG59XG4udGFncy1jb250YWluZXIgLnRhZ3MgbGkge1xuICBmbG9hdDogbGVmdDtcbn1cbi50YWdzLWNvbnRhaW5lciAudGFnIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDIzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cbi50YWdzLWNvbnRhaW5lciAudGFnOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNnB4O1xuICB0b3A6IDEwcHg7XG59XG4udGFncy1jb250YWluZXIgLnRhZzo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZWVlO1xuICBib3JkZXItdG9wOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4udGFncy1jb250YWluZXIgLnRhZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50YWdzLWNvbnRhaW5lciAudGFnOmhvdmVyOjphZnRlciB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBjcmltc29uO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/services/services.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/admin-panel/services/services.page.ts ***!
    \*************************************************************/

  /*! exports provided: ServicesPage */

  /***/
  function srcAppPagesAdminPanelServicesServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPage", function () {
      return ServicesPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_services_modal_services_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/services-modal/services-modal.component */
    "./src/app/pages/admin-panel/components/services-modal/services-modal.component.ts");
    /* harmony import */


    var _communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../communication.service */
    "./src/app/pages/admin-panel/communication.service.ts");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var ServicesPage = /*#__PURE__*/function () {
      // tslint:disable-next-line:max-line-length
      function ServicesPage(sharedService, alertController, communicationService, adminService, modalController) {
        _classCallCheck(this, ServicesPage);

        this.sharedService = sharedService;
        this.alertController = alertController;
        this.communicationService = communicationService;
        this.adminService = adminService;
        this.modalController = modalController;
        this.services = [];
        this.selectedService = null;
      }

      _createClass(ServicesPage, [{
        key: "presentModal",
        value: function presentModal(componentData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _components_services_modal_services_modal_component__WEBPACK_IMPORTED_MODULE_3__["ServicesModalComponent"],
                      cssClass: 'admin-modal-class',
                      backdropDismiss: true,
                      swipeToClose: true,
                      showBackdrop: true,
                      componentProps: componentData
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onWillDismiss().then(function () {
                      _this7.getAllServices();
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onEdit",
        value: function onEdit(serviceType) {
          this.selectedService = serviceType;
          this.presentModal(serviceType);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.closeModal();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    onClosedData = 'Wrapped Up!';
                    _context3.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete(serviceType) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this8 = this;

            var serviceTypeId, alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.communicationService.showAdminSpinner.next(true);
                    serviceTypeId = serviceType.id;
                    _context4.next = 4;
                    return this.alertController.create({
                      header: "Do you want to delete ".concat(serviceType.name, "?"),
                      cssClass: 'alert-popup',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          _this8.communicationService.showAdminSpinner.next(false);
                        }
                      }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: function handler() {
                          _this8.deleteService(serviceTypeId);
                        }
                      }]
                    });

                  case 4:
                    alert = _context4.sent;
                    _context4.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "deleteService",
        value: function deleteService(serviceTypeId) {
          var _this9 = this;

          this.adminService.deleteService(serviceTypeId).subscribe(function (res) {
            return _this9.deleteServiceSuccess(res);
          }, function (error) {
            _this9.adminService.commonError(error);
          });
        }
      }, {
        key: "deleteServiceSuccess",
        value: function deleteServiceSuccess(res) {
          this.sharedService.presentToast('service deleted Successfully.', 'success');
          this.getAllServices();
          this.communicationService.showAdminSpinner.next(false);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.communicationService.pageTitle.next('Services');
          this.getAllServices();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAllServices",
        value: function getAllServices() {
          var _this10 = this;

          this.adminService.getAllServices().subscribe(function (res) {
            return _this10.getAllServicesSuccess(res);
          }, function (error) {
            _this10.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllServicesSuccess",
        value: function getAllServicesSuccess(res) {
          this.services = res;

          if (this.services && this.services.length) {
            this.services = this.services.map(function (ser) {
              // Adding the api url and also updating image with timestamp
              ser.brands = ser.brands.map(function (val) {
                val = val.split('_').join(' ');
                return val;
              });
              ser.skinTypes = ser.skinTypes.map(function (val) {
                val = val.split('_').join(' ');
                return val;
              });
              ser.imageUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domainUrlApi).concat(ser.imageUrl, "?").concat(new Date().getTime());
              return ser;
            });
          }
        }
      }]);

      return ServicesPage;
    }();

    ServicesPage.ctorParameters = function () {
      return [{
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/services/services.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.page.scss */
      "./src/app/pages/admin-panel/services/services.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ServicesPage);
    /***/
  }
}]);
//# sourceMappingURL=services-services-module-es5.js.map