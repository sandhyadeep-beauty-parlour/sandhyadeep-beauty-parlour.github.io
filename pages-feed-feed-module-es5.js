function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedFeedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sandhyadeep-header></sandhyadeep-header>\n<ion-content>\n    <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n    <ion-slides class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n        </ion-slide>\n    </ion-slides>\n    <div class=\"menu-container\">\n<!--        <div class=\"feed-heading\">-->\n<!--            <h2><b>Services</b></h2>-->\n<!--        </div>-->\n<!--        <div class=\"height-95px slide_container\">-->\n<!--            <div class=\"slider s1 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s2 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s3 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s4 filter-bright-03\"></div>-->\n<!--        </div>-->\n\n        <div class=\"quick_menus\">\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-1\"></div>\n                <div class=\"menu-text\">Hair Cuts</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-2\"></div>\n                <div class=\"menu-text\">Eye Brows</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-3\"></div>\n                <div class=\"menu-text\">Facials</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-4\"></div>\n                <div class=\"menu-text\">Manicure</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-5\"></div>\n                <div class=\"menu-text\">Products</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-6\"></div>\n                <div class=\"menu-text\">Upper lips</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-7\"></div>\n                <div class=\"menu-text\">Bridal Makeup</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-8\"></div>\n                <div class=\"menu-text\">Waxing</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-9\"></div>\n                <div class=\"menu-text\">Courses</div>\n            </div>\n        </div>\n\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Packages</b>\n            </div>\n            <div class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"height-200px slide_container\">\n            <div class=\"slider p1\"></div>\n            <div class=\"slider p2\"></div>\n            <div class=\"slider p3\"></div>\n            <div class=\"slider p4\"></div>\n        </div>\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Our Stylist</b>\n            </div>\n            <div class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"application-details\">\n            <div class=\"owner-info-container\">\n                <div class=\"owner-image\">\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\n                </div>\n                <div class=\"owner-details\">\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\n                    <div class=\"social-media-icons\">\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <ul>\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"copy-rights\">\n            <i class=\"fa fa-copyright\"></i> Copyright 2020 <br> Sandhyadeep Beauty Parlour. <br>\n        </div>\n<!--        <div class=\"feed-container\">-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-hair\"></div>-->\n<!--                    <div class=\"feed-text\"> Hair</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-skin\"></div>-->\n<!--                    <div class=\"feed-text\"> Skin</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-makeup\"></div>-->\n<!--                    <div class=\"feed-text\"> Makeup</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-course\"></div>-->\n<!--                    <div class=\"feed-text\"> Courses</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n    </div>\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/feed/feed-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/feed/feed-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: FeedPageRoutingModule */

  /***/
  function srcAppPagesFeedFeedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function () {
      return FeedPageRoutingModule;
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


    var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/pages/feed/feed.page.ts");

    var routes = [{
      path: '',
      component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }];

    var FeedPageRoutingModule = function FeedPageRoutingModule() {
      _classCallCheck(this, FeedPageRoutingModule);
    };

    FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/feed/feed.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/feed/feed.module.ts ***!
    \*******************************************/

  /*! exports provided: FeedPageModule */

  /***/
  function srcAppPagesFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
      return FeedPageModule;
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


    var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feed-routing.module */
    "./src/app/pages/feed/feed-routing.module.ts");
    /* harmony import */


    var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/pages/feed/feed.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]],
      declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })], FeedPageModule);
    /***/
  },

  /***/
  "./src/app/pages/feed/feed.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/feed/feed.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFeedFeedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n.feed-images {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.feed-sliders {\n  height: 40%;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n.feed-heading .heading-text {\n  font-size: 24px;\n}\n.know-more {\n  color: #666;\n}\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n.feed-sliders .feed-slider-one {\n  background: url('beaurty-1.jpg');\n}\n.feed-sliders .feed-slider-two {\n  background: url('beauty-2.jpg');\n}\n.feed-sliders .feed-slider-three {\n  background: url('beauty-3.jpg');\n}\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n.height-95px {\n  height: 95px;\n}\n.height-200px {\n  height: 200px;\n}\n.slide_container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.menu-container {\n  padding: 0 15px;\n}\n.slide_container .slider {\n  display: inline-block;\n  height: 95%;\n  border-radius: 10px;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  width: 200px;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  margin: 0 10px 5px;\n}\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n.main-container {\n  background: #d3d3d34f;\n}\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: -3px 4px 25px #aaaaaa94;\n  padding: 7px;\n}\n.quick_menus div.menu-container {\n  flex-basis: 33%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.quick_menus div.menu-container:nth-child(1) {\n  border-top-left-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(3) {\n  border-top-right-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(7) {\n  border-bottom-left-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(9) {\n  border-bottom-right-radius: 12px;\n}\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  background-size: cover;\n  background-position: center center;\n  width: 65px;\n  border: 2px solid #666;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n.quick_menus div.menu-container .menu-image.image-1 {\n  background-image: url('haircut.jpeg');\n}\n.quick_menus div.menu-container .menu-image.image-2 {\n  background-image: url('thredding.jpeg');\n}\n.quick_menus div.menu-container .menu-image.image-3 {\n  background-image: url('s3.jpg');\n}\n.quick_menus div.menu-container .menu-image.image-4 {\n  background-image: url('manicure.jpeg');\n}\n.quick_menus div.menu-container .menu-image.image-5 {\n  background-image: url('products.jpeg');\n}\n.quick_menus div.menu-container .menu-image.image-6 {\n  background-image: url('upperLips.jpeg');\n}\n.quick_menus div.menu-container .menu-image.image-7 {\n  background-image: url('bridal.jpeg');\n}\n.quick_menus div.menu-container .menu-image.image-8 {\n  background-image: url('waxing.jpeg');\n}\n.quick_menus div.menu-container .menu-image.image-9 {\n  background-image: url('courses.jpeg');\n}\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n}\n.application-details {\n  margin: 15px 0 0;\n  padding: 5px 0;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  background-image: url('back-3.jpg');\n  background-size: cover;\n  background-position: center center;\n}\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 0;\n  border-radius: 50%;\n  margin: 5px 0;\n}\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n.linkedin-icon {\n  background: #0E76A8;\n}\n.fb-icon {\n  background: #3B5998;\n}\n.insta-icon {\n  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\n}\n.copy-rights {\n  padding: 5px 15px;\n  background: #cc2b5efa;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0FDRXJCO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0Usa0NBQUE7QUNFSjtBRENBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQ0VGO0FEQ0E7RUFDRSxXQUFBO0FDRUY7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFRjtBRERFO0VBQ0UsZUFBQTtBQ0dKO0FEQ0E7RUFDRSxXQUFBO0FDRUY7QURDQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FDRUY7QURDQTtFQUNFLGdDQUFBO0FDRUY7QURDQTtFQUNFLCtCQUFBO0FDRUY7QURDQTtFQUNFLCtCQUFBO0FDRUY7QURDQTtFQUNFLHVGQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRUY7QURDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUNFRjtBRENBO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7QUNFRjtBRENBO0VBQ0Usa0NBQUE7QUNFRjtBRENBO0VBQ0Usa0NBQUE7QUNFRjtBRENBO0VBQ0Usb0NBQUE7QUNFRjtBRENBO0VBQ0UscUNBQUE7QUNFRjtBRENBO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFRjtBRENBO0VBQ0MsWUFBQTtBQ0VEO0FEQ0E7RUFDRSxhQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQ0E7RUFDRSxlQUFBO0FDRUY7QURDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxvQkFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtBQ0VKO0FERUE7RUFDRSwrQkFBQTtBQ0NGO0FERUE7RUFDRSwrQkFBQTtBQ0NGO0FERUE7RUFDRSwrQkFBQTtBQ0NGO0FERUE7RUFDRSxnQ0FBQTtBQ0NGO0FERUE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDQ0Y7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBREFJO0VBQ0UsNEJBQUE7QUNFTjtBREdJO0VBQ0UsNkJBQUE7QUNETjtBRE1JO0VBQ0UsK0JBQUE7QUNKTjtBRE9JO0VBQ0UsZ0NBQUE7QUNMTjtBRE9JO0VBTUUsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IscUJBQUE7QUNQMUQ7QURRTTtFQUNFLHFDQUFBO0FDTlI7QURRTTtFQUNFLHVDQUFBO0FDTlI7QURRTTtFQUNFLCtCQUFBO0FDTlI7QURRTTtFQUNFLHNDQUFBO0FDTlI7QURRTTtFQUNFLHNDQUFBO0FDTlI7QURRTTtFQUNFLHVDQUFBO0FDTlI7QURRTTtFQUNFLG9DQUFBO0FDTlI7QURRTTtFQUNFLG9DQUFBO0FDTlI7QURRTTtFQUNFLHFDQUFBO0FDTlI7QURTSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEWUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FDVEY7QURXRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFVJO0VBQ0UsV0FBQTtBQ1JOO0FEU007RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1BSO0FEV0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNUTjtBRFlJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDVk47QURXTTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVFI7QURVUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ1JWO0FEZUE7RUFDRSxtQkFBQTtBQ1pGO0FEY0E7RUFDRSxtQkFBQTtBQ1hGO0FEYUE7RUFDRSx3RkFBQTtBQ1ZGO0FEYUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICAubG9nby10ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLnNsb2dhbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuXG4uc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBvcGFjaXR5OiAwLjU7XG4gIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG59XG4uZmVlZC1pbWFnZXMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbn1cblxuLmZlZWQtc2xpZGVycyB7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXVydHktMS5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMi5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0zLmpwZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjlweCAjYWFhYWFhOTQ7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9oYWlyLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Utc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9za2luLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtbWFrZXVwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtdGV4dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlaWdodC05NXB4IHtcbiBoZWlnaHQ6IDk1cHg7XG59XG5cbi5oZWlnaHQtMjAwcHgge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogOTUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLy9ib3gtc2hhZG93OiA1cHggMTBweCAyOXB4ICNhYWFhYWE5NDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMTBweCA1cHg7XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMCAxMHB4IDVweCAwO1xuICB9XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG4gIH1cbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczEuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MyLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnM0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczQuanBlZycpO1xufVxuXG4uZmlsdGVyLWJyaWdodC0wMyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjMpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczIuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MzLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzNGY7XG59XG4ucXVpY2tfbWVudXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6IC0zcHggNHB4IDI1cHggI2FhYWFhYTk0O1xuICBwYWRkaW5nOiA3cHg7XG5cbiAgZGl2Lm1lbnUtY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAzMyU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgICB9XG4gICAgLy8mOm50aC1jaGlsZCgyKSB7XG4gICAgLy8gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgLy99XG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgfVxuICAgIC8vJjpudGgtY2hpbGQoNCkge31cbiAgICAvLyY6bnRoLWNoaWxkKDUpIHt9XG4gICAgLy8mOm50aC1jaGlsZCg2KSB7fVxuICAgICY6bnRoLWNoaWxkKDcpIHtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgfVxuICAgIC8vJjpudGgtY2hpbGQoOCkge31cbiAgICAmOm50aC1jaGlsZCg5KSB7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICB9XG4gICAgLm1lbnUtaW1hZ2Uge1xuICAgICAgLy9ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAvL2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcbiAgICAgIGhlaWdodDogNjVweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNjY2O1xuICAgICAgcGFkZGluZzogMXB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICYuaW1hZ2UtMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2hhaXJjdXQuanBlZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS0yIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdGhyZWRkaW5nLmpwZWcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MzLmpwZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS00IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvbWFuaWN1cmUuanBlZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS01IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvcHJvZHVjdHMuanBlZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS02IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdXBwZXJMaXBzLmpwZWcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtNyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JyaWRhbC5qcGVnJyk7XG4gICAgICB9XG4gICAgICAmLmltYWdlLTgge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy93YXhpbmcuanBlZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS05IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvY291cnNlcy5qcGVnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZW51LXRleHQge1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLmFwcGxpY2F0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrLTMuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5M2RlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA4NCUpO1xuICAub3duZXItaW5mby1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDM1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIC5vd25lci1pbWFnZSB7XG4gICAgICB3aWR0aDogODVweDtcbiAgICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm93bmVyLW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZGl2IHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLm1lZGlhLWljb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubGlua2VkaW4taWNvbiB7XG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XG59XG4uZmItaWNvbiB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG59XG4uaW5zdGEtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQwNWRlNiwgIzU4NTFkYiwgIzgzM2FiNCwgI2MxMzU4NCwgI2UxMzA2YywgI2ZkMWQxZCk7O1xufVxuXG4uY29weS1yaWdodHMge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYmFja2dyb3VuZDogI2NjMmI1ZWZhO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbiIsIi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNlYXJjaC1iYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZmVlZC1pbWFnZXMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbn1cblxuLmZlZWQtc2xpZGVycyB7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXJ0eS0xLmpwZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0yLmpwZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdGhyZWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXR5LTMuanBnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIge1xuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpOyovXG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiA1cHggMTBweCAyOXB4ICNhYWFhYWE5NDtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1oYWlyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hhaXIuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1za2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NraW4uanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1tYWtldXAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFrZXVwLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtY291cnNlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC10ZXh0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgIzI4MWRlOCAtMjUlLCAjNTEyNDUyIDYzJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVpZ2h0LTk1cHgge1xuICBoZWlnaHQ6IDk1cHg7XG59XG5cbi5oZWlnaHQtMjAwcHgge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDk1JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDEwcHggNXB4IDA7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAwIDVweCAxMHB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczEuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczIuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczMuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczQuanBlZ1wiKTtcbn1cblxuLmZpbHRlci1icmlnaHQtMDMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MxLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MyLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MzLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWdcIik7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzNGY7XG59XG5cbi5xdWlja19tZW51cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMjVweCAjYWFhYWFhOTQ7XG4gIHBhZGRpbmc6IDdweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIge1xuICBmbGV4LWJhc2lzOiAzMyU7XG4gIHBhZGRpbmc6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyOm50aC1jaGlsZCg3KSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyOm50aC1jaGlsZCg5KSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZSB7XG4gIGhlaWdodDogNjVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGFpcmN1dC5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS0yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3RocmVkZGluZy5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MzLmpwZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tYW5pY3VyZS5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3Byb2R1Y3RzLmpwZWdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdXBwZXJMaXBzLmpwZWdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYnJpZGFsLmpwZWdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvd2F4aW5nLmpwZWdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY291cnNlcy5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYXBwbGljYXRpb24tZGV0YWlscyB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrLTMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItaW1hZ2Uge1xuICB3aWR0aDogODVweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItaW1hZ2UgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIGRpdiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyBkaXYgLm1lZGlhLWljb24ge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubGlua2VkaW4taWNvbiB7XG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XG59XG5cbi5mYi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbn1cblxuLmluc3RhLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MDVkZTYsICM1ODUxZGIsICM4MzNhYjQsICNjMTM1ODQsICNlMTMwNmMsICNmZDFkMWQpO1xufVxuXG4uY29weS1yaWdodHMge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYmFja2dyb3VuZDogI2NjMmI1ZWZhO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/feed/feed.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/feed/feed.page.ts ***!
    \*****************************************/

  /*! exports provided: FeedPage */

  /***/
  function srcAppPagesFeedFeedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
      return FeedPage;
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

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage(router) {
        _classCallCheck(this, FeedPage);

        this.router = router;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true
        };
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goServices",
        value: function goServices() {
          this.router.navigate(['home/services']);
        }
      }]);

      return FeedPage;
    }();

    FeedPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feed.page.scss */
      "./src/app/pages/feed/feed.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map