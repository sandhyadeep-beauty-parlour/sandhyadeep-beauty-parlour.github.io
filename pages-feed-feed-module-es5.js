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


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n<ion-content>\n    <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n    <ion-slides class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n        </ion-slide>\n    </ion-slides>\n    <div class=\"menu-container\">\n<!--        <div class=\"feed-heading\">-->\n<!--            <h2><b>Services</b></h2>-->\n<!--        </div>-->\n<!--        <div class=\"height-95px slide_container\">-->\n<!--            <div class=\"slider s1 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s2 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s3 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s4 filter-bright-03\"></div>-->\n<!--        </div>-->\n\n        <div class=\"quick_menus\">\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-1\"></div>\n                <div class=\"menu-text\">Hair Cuts</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-2\"></div>\n                <div class=\"menu-text\">Eye Brows</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-3\"></div>\n                <div class=\"menu-text\">Facials</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-4\"></div>\n                <div class=\"menu-text\">Manicure</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-5\"></div>\n                <div class=\"menu-text\">Products</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-6\"></div>\n                <div class=\"menu-text\">Upper lips</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-7\"></div>\n                <div class=\"menu-text\">Bridal Makeup</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-8\"></div>\n                <div class=\"menu-text\">Waxing</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-9\"></div>\n                <div class=\"menu-text\">Courses</div>\n            </div>\n        </div>\n\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Packages</b>\n            </div>\n            <div [routerLink]=\"['/home/packages']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"height-200px slide_container\">\n            <div class=\"slider p1\"></div>\n            <div class=\"slider p2\"></div>\n            <div class=\"slider p3\"></div>\n            <div class=\"slider p4\"></div>\n        </div>\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Our Stylist</b>\n            </div>\n            <div (click)=\"onKnowMore()\" class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"application-details\">\n            <div class=\"owner-info-container\">\n                <div class=\"owner-image\">\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\n                </div>\n                <div class=\"owner-details\">\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\n                    <div class=\"social-media-icons\">\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <ul>\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"copy-rights\">\n            <i class=\"fa fa-copyright\"></i> Copyright 2020 <br> Sandhyadeep Beauty Parlour. <br>\n        </div>\n<!--        <div class=\"feed-container\">-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-hair\"></div>-->\n<!--                    <div class=\"feed-text\"> Hair</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-skin\"></div>-->\n<!--                    <div class=\"feed-text\"> Skin</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-makeup\"></div>-->\n<!--                    <div class=\"feed-text\"> Makeup</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-course\"></div>-->\n<!--                    <div class=\"feed-text\"> Courses</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n    </div>\n\n</ion-content>\n\n";
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


    __webpack_exports__["default"] = ".top-adjust {\n  top: 65px;\n}\n\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n\n.feed-sliders {\n  height: 40%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 24px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('beaurty-1.jpg');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('beauty-2.jpg');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('beauty-3.jpg');\n}\n\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n\n.height-95px {\n  height: 95px;\n}\n\n.height-200px {\n  height: 200px;\n}\n\n.slide_container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.menu-container {\n  padding: 0 15px;\n}\n\n.slide_container .slider {\n  display: inline-block;\n  height: 95%;\n  border-radius: 10px;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  width: 200px;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  margin: 0 10px 5px;\n}\n\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n\n.main-container {\n  background: #d3d3d34f;\n}\n\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: -3px 4px 25px #aaaaaa94;\n  padding: 7px;\n}\n\n.quick_menus div.menu-container {\n  flex-basis: 33%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.quick_menus div.menu-container:nth-child(1) {\n  border-top-left-radius: 12px;\n}\n\n.quick_menus div.menu-container:nth-child(3) {\n  border-top-right-radius: 12px;\n}\n\n.quick_menus div.menu-container:nth-child(7) {\n  border-bottom-left-radius: 12px;\n}\n\n.quick_menus div.menu-container:nth-child(9) {\n  border-bottom-right-radius: 12px;\n}\n\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  background-size: cover;\n  background-position: center center;\n  width: 65px;\n  border: 2px solid #666;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.quick_menus div.menu-container .menu-image.image-1 {\n  background-image: url('vector-haircut.jpg');\n}\n\n.quick_menus div.menu-container .menu-image.image-2 {\n  background-image: url('thredding2.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-3 {\n  background-image: url('vector_facial.jpg');\n}\n\n.quick_menus div.menu-container .menu-image.image-4 {\n  background-image: url('manicure.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-5 {\n  background-image: url('products.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-6 {\n  background-image: url('upperLips.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-7 {\n  background-image: url('bridal.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-8 {\n  background-image: url('waxing.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-9 {\n  background-image: url('courses.jpeg');\n}\n\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n}\n\n.application-details {\n  margin: 15px 0 0;\n  padding: 5px 0;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  background-image: url('back-3.jpg');\n  background-size: cover;\n  background-position: center center;\n}\n\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 0;\n  border-radius: 50%;\n  margin: 5px 0;\n}\n\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n\n.linkedin-icon {\n  background: #0E76A8;\n}\n\n.fb-icon {\n  background: #3B5998;\n}\n\n.insta-icon {\n  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\n}\n\n.copy-rights {\n  padding: 5px 15px;\n  background: #cc2b5efa;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRERFO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtBQ0lyQjs7QURGRTtFQUNFLGNBQUE7QUNJSjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHRjs7QURGRTtFQUNFLGtDQUFBO0FDSUo7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxlQUFBO0FDQ0o7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0FDQUY7O0FER0E7RUFDRSwrQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxxQ0FBQTtBQ0FGOztBREdBO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNDLFlBQUE7QUNBRDs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FDREY7O0FERUU7RUFDRSxvQkFBQTtBQ0FKOztBREVFO0VBQ0Usb0JBQUE7QUNBSjs7QURJQTtFQUNFLCtCQUFBO0FDREY7O0FESUE7RUFDRSwrQkFBQTtBQ0RGOztBRElBO0VBQ0UsK0JBQUE7QUNERjs7QURJQTtFQUNFLGdDQUFBO0FDREY7O0FESUE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDREY7O0FESUE7RUFDRSwrQkFBQTtBQ0RGOztBRElBO0VBQ0UsK0JBQUE7QUNERjs7QURJQTtFQUNFLCtCQUFBO0FDREY7O0FESUE7RUFDRSxnQ0FBQTtBQ0RGOztBRElBO0VBQ0UsNEJBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0FDREY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVJO0VBQ0UsNEJBQUE7QUNBTjs7QURLSTtFQUNFLDZCQUFBO0FDSE47O0FEUUk7RUFDRSwrQkFBQTtBQ05OOztBRFNJO0VBQ0UsZ0NBQUE7QUNQTjs7QURTSTtFQU1FLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHFCQUFBO0FDVDFEOztBRFVNO0VBQ0UsMkNBQUE7QUNSUjs7QURVTTtFQUNFLHdDQUFBO0FDUlI7O0FEVU07RUFDRSwwQ0FBQTtBQ1JSOztBRFVNO0VBQ0Usc0NBQUE7QUNSUjs7QURVTTtFQUNFLHNDQUFBO0FDUlI7O0FEVU07RUFDRSx1Q0FBQTtBQ1JSOztBRFVNO0VBQ0Usb0NBQUE7QUNSUjs7QURVTTtFQUNFLG9DQUFBO0FDUlI7O0FEVU07RUFDRSxxQ0FBQTtBQ1JSOztBRFdJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDVE47O0FEY0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FDWEY7O0FEYUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWEo7O0FEWUk7RUFDRSxXQUFBO0FDVk47O0FEV007RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1RSOztBRGFJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDWE47O0FEY0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNaTjs7QURhTTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWFI7O0FEWVE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNWVjs7QURpQkE7RUFDRSxtQkFBQTtBQ2RGOztBRGdCQTtFQUNFLG1CQUFBO0FDYkY7O0FEZUE7RUFDRSx3RkFBQTtBQ1pGOztBRGVBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYWRqdXN0IHtcbiAgdG9wOiA2NXB4O1xufVxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgLmxvZ28tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5zbG9nYW4tdGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cblxuLnNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMC41O1xuICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuLy8uZmVlZC1pbWFnZXMge1xuLy8gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuLy99XG5cbi5mZWVkLXNsaWRlcnMge1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1cnR5LTEuanBnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXR5LTIuanBnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMy5qcGdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciB7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgcmdiYSg0MCwgMjksIDIzMiwgMSkgLTI1JSwgcmdiKDgxLCAzNiwgODIpIDYzJSk7Ki9cbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI5cHggI2FhYWFhYTk0O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWhhaXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGFpci5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLXNraW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2tpbi5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLW1ha2V1cCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tYWtldXAuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb3Vyc2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY291cnNlcy5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLXRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWlnaHQtOTVweCB7XG4gaGVpZ2h0OiA5NXB4O1xufVxuXG4uaGVpZ2h0LTIwMHB4IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDk1JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8vYm94LXNoYWRvdzogNXB4IDEwcHggMjlweCAjYWFhYWFhOTQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xuICB9XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MxLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczMuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcbn1cblxuLmZpbHRlci1icmlnaHQtMDMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczEuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MyLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczQuanBlZycpO1xufVxuXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2QzZDNkMzRmO1xufVxuLnF1aWNrX21lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiAtM3B4IDRweCAyNXB4ICNhYWFhYWE5NDtcbiAgcGFkZGluZzogN3B4O1xuXG4gIGRpdi5tZW51LWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMzMlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgfVxuICAgIC8vJjpudGgtY2hpbGQoMikge1xuICAgIC8vICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIC8vfVxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgICAvLyY6bnRoLWNoaWxkKDQpIHt9XG4gICAgLy8mOm50aC1jaGlsZCg1KSB7fVxuICAgIC8vJjpudGgtY2hpbGQoNikge31cbiAgICAmOm50aC1jaGlsZCg3KSB7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgICAvLyY6bnRoLWNoaWxkKDgpIHt9XG4gICAgJjpudGgtY2hpbGQoOSkge1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgfVxuICAgIC5tZW51LWltYWdlIHtcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLy9iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAgIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XG4gICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcbiAgICAgIHBhZGRpbmc6IDFweDsgYm9yZGVyLXJhZGl1czogNTAlOyBvdmVyZmxvdzogaGlkZGVuOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAmLmltYWdlLTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92ZWN0b3ItaGFpcmN1dC5qcGcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtMiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RocmVkZGluZzIuanBlZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS0zIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVjdG9yX2ZhY2lhbC5qcGcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtNCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21hbmljdXJlLmpwZWcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtNSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Byb2R1Y3RzLmpwZWcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtNiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3VwcGVyTGlwcy5qcGVnJyk7XG4gICAgICB9XG4gICAgICAmLmltYWdlLTcge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9icmlkYWwuanBlZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS04IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2F4aW5nLmpwZWcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtOSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZycpO1xuICAgICAgfVxuICAgIH1cbiAgICAubWVudS10ZXh0IHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG5cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFjay0zLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTNkZWcsICNjYzJiNWUgMiUsICM3NTNhODggODQlKTtcbiAgLm93bmVyLWluZm8tY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAzNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAub3duZXItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5vd25lci1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc29jaWFsLW1lZGlhLWljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGRpdiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC5tZWRpYS1pY29uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxpbmtlZGluLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xufVxuLmZiLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xufVxuLmluc3RhLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MDVkZTYsICM1ODUxZGIsICM4MzNhYjQsICNjMTM1ODQsICNlMTMwNmMsICNmZDFkMWQpOztcbn1cblxuLmNvcHktcmlnaHRzIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNjYzJiNWVmYTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG4iLCIudG9wLWFkanVzdCB7XG4gIHRvcDogNjVweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2VhcmNoLWJhciAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mZWVkLXNsaWRlcnMge1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLmZlZWQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXVydHktMS5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMi5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0zLmpwZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjlweCAjYWFhYWFhOTQ7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9oYWlyLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Utc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9za2luLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtbWFrZXVwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtdGV4dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsICMyODFkZTggLTI1JSwgIzUxMjQ1MiA2MyUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlaWdodC05NXB4IHtcbiAgaGVpZ2h0OiA5NXB4O1xufVxuXG4uaGVpZ2h0LTIwMHB4IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAxMHB4IDVweDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAxMHB4IDVweCAwO1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCA1cHggMTBweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MxLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MyLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MzLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnM0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWdcIik7XG59XG5cbi5maWx0ZXItYnJpZ2h0LTAzIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMS5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMi5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMy5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnXCIpO1xufVxuXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2QzZDNkMzRmO1xufVxuXG4ucXVpY2tfbWVudXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6IC0zcHggNHB4IDI1cHggI2FhYWFhYTk0O1xuICBwYWRkaW5nOiA3cHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzMlO1xuICBwYWRkaW5nOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyOm50aC1jaGlsZCgzKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lcjpudGgtY2hpbGQoNykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lcjpudGgtY2hpbGQoOSkge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2Uge1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiA2NXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjY2O1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3ZlY3Rvci1oYWlyY3V0LmpwZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90aHJlZGRpbmcyLmpwZWdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdmVjdG9yX2ZhY2lhbC5qcGdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFuaWN1cmUuanBlZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wcm9kdWN0cy5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS02IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3VwcGVyTGlwcy5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS03IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JyaWRhbC5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS04IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3dheGluZy5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS05IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtdGV4dCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFwcGxpY2F0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFjay0zLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDM1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLWltYWdlIHtcbiAgd2lkdGg6IDg1cHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyBkaXYge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMgZGl2IC5tZWRpYS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxpbmtlZGluLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xufVxuXG4uZmItaWNvbiB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG59XG5cbi5pbnN0YS1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDA1ZGU2LCAjNTg1MWRiLCAjODMzYWI0LCAjYzEzNTg0LCAjZTEzMDZjLCAjZmQxZDFkKTtcbn1cblxuLmNvcHktcmlnaHRzIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNjYzJiNWVmYTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
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
      }, {
        key: "onKnowMore",
        value: function onKnowMore() {
          this.router.navigate(['home/about-us']);
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