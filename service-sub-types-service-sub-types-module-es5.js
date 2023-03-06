function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-sub-types-service-sub-types-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminPanelComponentsServiceSubTypesModalServiceSubTypesModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div>\n    <div class=\"drawer\"></div>\n  </div>\n  <div class=\"admin-modal-title-container\">\n    <div style=\"display: flex; justify-content: end;\">\n      <i (click)=\"closeModal()\" class=\"fa fa-times close-button\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"admin-modal-title\">{{editMode ? 'Update' : 'Add'}} Sub Service</div>\n  </div>\n</ion-header>\n<ion-content>\n  <form [formGroup]='adminComponentForm'>\n    <div class=\"modal-form-container\">\n      <ion-list>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Sub Service Name</ion-label>\n          <ion-input maxlength=\"20\" formControlName=\"name\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" class=\"required-label\">Service Type</ion-label>\n          <ion-select formControlName=\"serviceType\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ng-container *ngFor=\"let serviceType of serviceTypes\">\n              <ion-select-option [value]=\"serviceType?.id\" >{{serviceType?.name}}</ion-select-option>\n            </ng-container>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <div style=\"display: flex; justify-content: center; padding: 10px;\">\n    <button (click)=\"onAddValue()\" style=\"width: 250px\"\n            mat-raised-button color=\"primary\">{{editMode ? 'Update' : 'Save'}}\n    </button>\n  </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminPanelServiceSubTypesServiceSubTypesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"service-type-container\">\n    <div class=\"service-types-container\">\n      <ion-card *ngFor=\"let subService of subServices\">\n        <ion-card-header>\n          <div class=\"ion-card-header\">\n            <div class=\"service-type-name\">{{subService?.name | titlecase}}</div>\n          </div>\n          <ion-card-subtitle>{{subService?.serviceType?.name}}</ion-card-subtitle>\n        </ion-card-header>\n        <mat-divider></mat-divider>\n        <ion-card-content>\n          <div class=\"service-type-footer-icons\">\n            <button (click)=\"onEdit(subService)\" color=\"primary\" mat-mini-fab>\n              <i class=\"fa fa-pencil-square-o\"></i>\n            </button>\n            <button (click)=\"onDelete(subService)\" color=\"warn\" mat-mini-fab>\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button (click)=\"presentModal({})\" size=\"small\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminPanelComponentsServiceSubTypesModalServiceSubTypesModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".drawer {\n  left: 0px;\n  right: 0px;\n  top: 5px;\n  border-radius: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  width: 36px;\n  height: 5px;\n  transform: translateZ(0px);\n  border: 0px;\n  background: var(--ion-color-step-350, #c0c0be);\n  cursor: pointer;\n  z-index: 11;\n}\n\n.admin-modal-title-container {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 15px 10px;\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n}\n\n.admin-modal-title-container .admin-modal-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.close-button {\n  display: flex;\n  position: absolute;\n  justify-content: end;\n  right: 19px;\n  font-size: 20px;\n  color: gray;\n}\n\n.modal-form-image {\n  height: 165px;\n  background: #000000c4;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.modal-form-image .modal-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-form-image .modal-image img {\n  height: 100%;\n}\n\n.modal-form-image .image-changer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  padding: 10px 15px;\n}\n\n.modal-form-image .image-changer ion-icon {\n  font-size: 25px;\n  color: #ffffffba;\n}\n\n.modal-form-container ion-label {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvY29tcG9uZW50cy9zZXJ2aWNlLXN1Yi10eXBlcy1tb2RhbC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxhZG1pbi1wYW5lbFxcY29tcG9uZW50c1xcc2VydmljZS1zdWItdHlwZXMtbW9kYWxcXHNlcnZpY2Utc3ViLXR5cGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRERJO0VBQ0UsWUFBQTtBQ0dOOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRERJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR047O0FERUU7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlciB7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgdG9wOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5hZG1pbi1tb2RhbC10aXRsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5hZG1pbi1tb2RhbC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgcmlnaHQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubW9kYWwtZm9ybS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxNjVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAubW9kYWwtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbWFnZS1jaGFuZ2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZmJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubW9kYWwtZm9ybS1jb250YWluZXIge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcbn1cclxuIiwiLmRyYXdlciB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZG1pbi1tb2RhbC10aXRsZS1jb250YWluZXIgLmFkbWluLW1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICByaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1vZGFsLWZvcm0taW1hZ2Uge1xuICBoZWlnaHQ6IDE2NXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tb2RhbC1mb3JtLWltYWdlIC5tb2RhbC1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLm1vZGFsLWltYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tb2RhbC1mb3JtLWltYWdlIC5pbWFnZS1jaGFuZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4ubW9kYWwtZm9ybS1pbWFnZSAuaW1hZ2UtY2hhbmdlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNmZmZmZmZiYTtcbn1cblxuLm1vZGFsLWZvcm0tY29udGFpbmVyIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: ServiceSubTypesModalComponent */

  /***/
  function srcAppPagesAdminPanelComponentsServiceSubTypesModalServiceSubTypesModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceSubTypesModalComponent", function () {
      return ServiceSubTypesModalComponent;
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

    var ServiceSubTypesModalComponent = /*#__PURE__*/function () {
      function ServiceSubTypesModalComponent(navParams, router, adminService, communication, sharedService, formBuilder, modalController) {
        _classCallCheck(this, ServiceSubTypesModalComponent);

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
        this.subServiceId = '';
        this.editMode = false;
        this.serviceTypes = [];
      }

      _createClass(ServiceSubTypesModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminComponentForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            serviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
          });
          this.getMainServices();
          this.editMode = false;

          if (this.navParams && this.navParams.data && this.navParams.data.id) {
            this.editMode = true;
            this.patchModalData(this.navParams.data);
          }
        }
      }, {
        key: "getMainServices",
        value: function getMainServices() {
          var _this = this;

          this.adminService.getAllServiceTypes().subscribe(function (res) {
            return _this.getMainServicesSuccess(res);
          }, function (error) {
            _this.adminService.commonError(error);
          });
        }
      }, {
        key: "getMainServicesSuccess",
        value: function getMainServicesSuccess(res) {
          this.serviceTypes = res;
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.editMode = false;
        }
      }, {
        key: "patchModalData",
        value: function patchModalData(patchData) {
          this.adminComponentForm.get('name').setValue(patchData.name);
          this.adminComponentForm.get('serviceType').setValue(patchData.serviceType.id);
          this.subServiceId = patchData.id;
        }
      }, {
        key: "onAddValue",
        value: function onAddValue() {
          if (this.adminComponentForm.invalid) {
            this.sharedService.presentToast('Please fill all the mandatory fields', 'error');
            return;
          }

          if (this.editMode) {
            this.patchSubService();
          } else {
            this.createSubService();
          }
        }
      }, {
        key: "patchSubService",
        value: function patchSubService() {
          var _this2 = this;

          var data = {
            name: this.adminComponentForm.get('name').value,
            serviceType: this.adminComponentForm.get('serviceType').value
          };
          this.adminService.updateSubService(data, this.subServiceId).subscribe(function (res) {
            return _this2.createSubServiceSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "createSubService",
        value: function createSubService() {
          var _this3 = this;

          var data = {
            name: this.adminComponentForm.get('name').value,
            serviceType: this.adminComponentForm.get('serviceType').value
          };
          this.adminService.createSubService(data).subscribe(function (res) {
            return _this3.createSubServiceSuccess(res);
          }, function (error) {
            _this3.adminService.commonError(error);
          });
        }
      }, {
        key: "createSubServiceSuccess",
        value: function createSubServiceSuccess(res) {
          this.sharedService.presentToast(res.message, 'success');
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
                    this.adminComponentForm.reset();
                    this.selectedImage = null;
                    this.imageBase64 = '';
                    onClosedData = 'Wrapped Up!';
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
        key: "getImageBase64",
        value: function getImageBase64(file) {
          var _this4 = this;

          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            _this4.imageBase64 = reader.result;
          };
        }
      }]);

      return ServiceSubTypesModalComponent;
    }();

    ServiceSubTypesModalComponent.ctorParameters = function () {
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

    ServiceSubTypesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-sub-types-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service-sub-types-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service-sub-types-modal.component.scss */
      "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ServiceSubTypesModalComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.module.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.module.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ServiceSubTypesModalModule */

  /***/
  function srcAppPagesAdminPanelComponentsServiceSubTypesModalServiceSubTypesModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceSubTypesModalModule", function () {
      return ServiceSubTypesModalModule;
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


    var _service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service-sub-types-modal.component */
    "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts");

    var ServiceSubTypesModalModule = function ServiceSubTypesModalModule() {
      _classCallCheck(this, ServiceSubTypesModalModule);
    };

    ServiceSubTypesModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesModalComponent"]],
      declarations: [_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesModalComponent"]],
      entryComponents: [_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesModalComponent"]]
    })], ServiceSubTypesModalModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/service-sub-types/service-sub-types-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ServiceSubTypesPageRoutingModule */

  /***/
  function srcAppPagesAdminPanelServiceSubTypesServiceSubTypesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceSubTypesPageRoutingModule", function () {
      return ServiceSubTypesPageRoutingModule;
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


    var _service_sub_types_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service-sub-types.page */
    "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts");

    var routes = [{
      path: '',
      component: _service_sub_types_page__WEBPACK_IMPORTED_MODULE_3__["ServiceSubTypesPage"]
    }];

    var ServiceSubTypesPageRoutingModule = function ServiceSubTypesPageRoutingModule() {
      _classCallCheck(this, ServiceSubTypesPageRoutingModule);
    };

    ServiceSubTypesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServiceSubTypesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/service-sub-types/service-sub-types.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ServiceSubTypesPageModule */

  /***/
  function srcAppPagesAdminPanelServiceSubTypesServiceSubTypesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceSubTypesPageModule", function () {
      return ServiceSubTypesPageModule;
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


    var _service_sub_types_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service-sub-types-routing.module */
    "./src/app/pages/admin-panel/service-sub-types/service-sub-types-routing.module.ts");
    /* harmony import */


    var _service_sub_types_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service-sub-types.page */
    "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts");
    /* harmony import */


    var _components_service_sub_types_modal_service_sub_types_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/service-sub-types-modal/service-sub-types-modal.module */
    "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ServiceSubTypesPageModule = function ServiceSubTypesPageModule() {
      _classCallCheck(this, ServiceSubTypesPageModule);
    };

    ServiceSubTypesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _service_sub_types_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceSubTypesPageRoutingModule"], _components_service_sub_types_modal_service_sub_types_modal_module__WEBPACK_IMPORTED_MODULE_7__["ServiceSubTypesModalModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]],
      declarations: [_service_sub_types_page__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesPage"]]
    })], ServiceSubTypesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminPanelServiceSubTypesServiceSubTypesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  border-bottom: 6px solid #d3d3d37a;\n}\n.page-heading .heading-text {\n  font-size: 18px;\n}\n.service-types-image-container {\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #000000c4;\n}\n.service-types-image-container img {\n  height: 200px;\n}\n.service-type-grid ion-row {\n  padding: 5px;\n  border-radius: 5px;\n}\n.service-type-grid ion-row:nth-child(2n+1) {\n  background: lightgray;\n}\n.service-type-footer-icons {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.service-type-footer-icons button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n.service-type-footer-icons button .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ion-card-header {\n  display: flex;\n  align-items: center;\n}\n.ion-card-header .service-type-name {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvc2VydmljZS1zdWItdHlwZXMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcYWRtaW4tcGFuZWxcXHNlcnZpY2Utc3ViLXR5cGVzXFxzZXJ2aWNlLXN1Yi10eXBlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL3NlcnZpY2Utc3ViLXR5cGVzL3NlcnZpY2Utc3ViLXR5cGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUY7QURDRTtFQUNFLGFBQUE7QUNDSjtBRElFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREo7QURHRTtFQUNFLHFCQUFBO0FDREo7QURLQTtFQUNFLGFBQUE7RUFBZSwyQkFBQTtFQUE2QixtQkFBQTtBQ0E5QztBRENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvc2VydmljZS1zdWItdHlwZXMvc2VydmljZS1zdWItdHlwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjZDNkM2QzN2E7XHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZS10eXBlcy1pbWFnZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlLXR5cGUtZ3JpZCB7XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIGlvbi1yb3c6bnRoLWNoaWxkKDJuKzEpIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlLXR5cGUtZm9vdGVyLWljb25zIHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLnNlcnZpY2UtdHlwZS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuIiwiLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2QzZDNkMzdhO1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2VydmljZS10eXBlcy1pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGM0O1xufVxuLnNlcnZpY2UtdHlwZXMtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zZXJ2aWNlLXR5cGUtZ3JpZCBpb24tcm93IHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2VydmljZS10eXBlLWdyaWQgaW9uLXJvdzpudGgtY2hpbGQoMm4rMSkge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi5zZXJ2aWNlLXR5cGUtZm9vdGVyLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlcnZpY2UtdHlwZS1mb290ZXItaWNvbnMgYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXJ2aWNlLXR5cGUtZm9vdGVyLWljb25zIGJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlvbi1jYXJkLWhlYWRlciAuc2VydmljZS10eXBlLW5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: ServiceSubTypesPage */

  /***/
  function srcAppPagesAdminPanelServiceSubTypesServiceSubTypesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceSubTypesPage", function () {
      return ServiceSubTypesPage;
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


    var _components_service_sub_types_modal_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/service-sub-types-modal/service-sub-types-modal.component */
    "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts");
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

    var ServiceSubTypesPage = /*#__PURE__*/function () {
      function ServiceSubTypesPage(sharedService, alertController, communicationService, adminService, modalController) {
        _classCallCheck(this, ServiceSubTypesPage);

        this.sharedService = sharedService;
        this.alertController = alertController;
        this.communicationService = communicationService;
        this.adminService = adminService;
        this.modalController = modalController;
        this.subServices = [];
        this.selectedServiceType = null;
      }

      _createClass(ServiceSubTypesPage, [{
        key: "presentModal",
        value: function presentModal(componentData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _components_service_sub_types_modal_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_3__["ServiceSubTypesModalComponent"],
                      cssClass: 'admin-modal-class',
                      backdropDismiss: true,
                      swipeToClose: true,
                      showBackdrop: true,
                      componentProps: componentData
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onWillDismiss().then(function () {
                      _this5.getMainServices();
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
          this.selectedServiceType = serviceType;
          this.presentModal(serviceType);
        }
      }, {
        key: "onDelete",
        value: function onDelete(serviceType) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            var serviceTypeId, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.communicationService.showAdminSpinner.next(true);
                    serviceTypeId = serviceType.id;
                    _context3.next = 4;
                    return this.alertController.create({
                      header: "Do you want to delete ".concat(serviceType.name, "?"),
                      cssClass: 'alert-popup',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          _this6.communicationService.showAdminSpinner.next(false);
                        }
                      }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: function handler() {
                          _this6.deleteServiceType(serviceTypeId);
                        }
                      }]
                    });

                  case 4:
                    alert = _context3.sent;
                    _context3.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "deleteServiceType",
        value: function deleteServiceType(serviceTypeId) {
          var _this7 = this;

          this.adminService.deleteSubService(serviceTypeId).subscribe(function (res) {
            return _this7.deleteServiceTypeSuccess(res);
          }, function (error) {
            _this7.adminService.commonError(error);
          });
        }
      }, {
        key: "deleteServiceTypeSuccess",
        value: function deleteServiceTypeSuccess(res) {
          this.sharedService.presentToast('Sub Service deleted Successfully.', 'success');
          this.getMainServices();
          this.communicationService.showAdminSpinner.next(false);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.communicationService.pageTitle.next('Sub Services');
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.closeModal();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    onClosedData = 'Wrapped Up!';
                    _context4.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.communicationService.pageTitle.next('Sub Services');
          this.getMainServices();
        }
      }, {
        key: "getMainServices",
        value: function getMainServices() {
          var _this8 = this;

          this.adminService.getAllSubService().subscribe(function (res) {
            return _this8.getAllSubServiceSuccess(res);
          }, function (error) {
            _this8.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllSubServiceSuccess",
        value: function getAllSubServiceSuccess(res) {
          this.subServices = res;
          console.log(this.subServices, 'this.subServices');
        }
      }]);

      return ServiceSubTypesPage;
    }();

    ServiceSubTypesPage.ctorParameters = function () {
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

    ServiceSubTypesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-sub-types',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service-sub-types.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service-sub-types.page.scss */
      "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ServiceSubTypesPage);
    /***/
  }
}]);
//# sourceMappingURL=service-sub-types-service-sub-types-module-es5.js.map