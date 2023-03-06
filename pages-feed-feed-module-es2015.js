(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\r\n<ion-content (ionScroll)=\"onIonScroll($event)\"  [scrollEvents]=\"true\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\r\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\r\n\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-slides #bannerSlider (ionSlidesDidLoad)=\"slidesDidLoad($event)\" (ionSlidePrevEnd)=\"onLastBannerSlide()\"  class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-one\">\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\r\n\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <div  #animationRef class=\"menu-container\">\r\n        <div class=\"quick_menus\">\r\n            <ng-container *ngFor=\"let treatment of serviceTypesList; let index = index\">\r\n                <div [ngStyle]=\"{'animation-delay': (index+1)/6 + 's'}\" [ngClass]=\"{ animate__animated: changeAnim1, animate__fadeInRight: changeAnim1 }\"  (click)=\"goServices()\" class=\"animate__animated animate__fadeInRight menu-container\">\r\n                    <div class=\"menu-image\"><img src=\"{{treatment.imageUrl}}\" alt=\"\"></div>\r\n                    <div class=\"menu-text\">{{treatment.name}}</div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Packages</b>\r\n            </div>\r\n            <div [routerLink]=\"['//packages']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div [ngClass]=\"{ animate__animated: changeAnim2, animate__bounceIn: changeAnim2, animate__fast: changeAnim2 }\" #animationRef class=\"slide_container\">\r\n            <ion-content scroll-y=\"false\" [fullscreen]=\"true\">\r\n                <ion-slides (ionSlidePrevEnd)=\"onLastPackageSlide()\" #packagesSlider [options]=\"packagesOption\">\r\n                    <ion-slide *ngFor=\"let packageData of packageList\">\r\n                        <ion-card>\r\n                            <img src=\"{{packageData?.displayImage}}\" alt=\"\">\r\n                        </ion-card>\r\n                    </ion-slide>\r\n                </ion-slides>\r\n            </ion-content>\r\n        </div>\r\n\r\n<!--        Removed products for now -->\r\n<!--        <div class=\"feed-heading\">-->\r\n<!--            <div class=\"heading-text\">-->\r\n<!--                <b>Products</b>-->\r\n<!--            </div>-->\r\n<!--            <div [routerLink]=\"['//products']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>-->\r\n<!--        </div>-->\r\n<!--        <div class=\"products_container\">-->\r\n<!--            <div *ngFor=\"let product of productList, let index = index\" class=\"image-slider-container\">-->\r\n<!--                <div class=\"slider-image\">-->\r\n<!--                    <img src=\"{{product.url}}\" alt=\"\">-->\r\n<!--                </div>-->\r\n<!--                <div class=\"slider-text\">-->\r\n<!--                    <div class=\"product-name-container\">-->\r\n<!--                        <div class=\"product-name\">-->\r\n<!--                            {{product.name}}-->\r\n<!--                        </div>-->\r\n<!--                        <div class=\"product-price-details\">-->\r\n<!--                            <div class=\"price-container\">-->\r\n<!--                                <div class=\"price\">-->\r\n<!--                                    {{product.price}} ₹-->\r\n<!--                                </div>-->\r\n<!--                                <div class=\"discounted-price\">-->\r\n<!--                                    <del> {{product.discountedPrice}} ₹</del>-->\r\n<!--                                </div>-->\r\n<!--                            </div>-->\r\n<!--                        </div>-->\r\n<!--                    </div>-->\r\n<!--                    <add-button (updateCounter)=\"onUpdateCounter($event, index)\"></add-button>-->\r\n<!--                </div>-->\r\n<!--            </div>-->\r\n<!--        </div>-->\r\n\r\n        <div class=\"safety-measures\">\r\n            <div class=\"margin-bottom-10\">\r\n                Best-in-class safety measures\r\n            </div>\r\n            <div class=\"measures-container margin-bottom-10\">\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/mask.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Usage of mask & gloves</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/thermometer.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Temperature Checks</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/liquid-soap.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Sanitizations of tools & area</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/setu.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Arogya Setu to ensure Safety</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Our Stylist</b>\r\n            </div>\r\n            <div (click)=\"onKnowMore()\" class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div class=\"application-details\">\r\n            <div class=\"owner-info-container\">\r\n                <div [routerLink]=\"['//about-us']\" class=\"owner-image\">\r\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\r\n                </div>\r\n                <div class=\"owner-details\">\r\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\r\n                    <div class=\"social-media-icons\">\r\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\r\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\r\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <ul>\r\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\r\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\r\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\r\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\r\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"copy-rights\">\r\n            <i class=\"fa fa-copyright\"></i> Copyright {{todayYear}} <br> Sandhyadeep Beauty Parlour <br>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<app-skeleton-loader></app-skeleton-loader>\r\n<app-footer-component></app-footer-component>\r\n<!--<app-logo-spinner></app-logo-spinner>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-item\">\r\n  <div *ngIf=\"counter === 0\" class=\"custom-add-button\">\r\n    <div class=\"add-text\">Add</div>\r\n    <i (click)=\"onChange('plus')\"\r\n       class=\"fa fa-plus\"></i>\r\n  </div>\r\n  <div *ngIf=\"counter > 0\" class=\"custom-add-more-button\">\r\n    <div (click)=\"onChange('minus')\">\r\n      <i class=\"fa fa-minus\"></i>\r\n    </div>\r\n    <div class=\"in-cart-box\">\r\n      {{counter}}\r\n    </div>\r\n    <div (click)=\"onChange('plus')\">\r\n      <i class=\"fa fa-plus\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/skeleton-loader/skeleton-loader.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/skeleton-loader/skeleton-loader.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"skeleton-container\" *ngIf=\"showSkeletonSpinner\">\r\n\r\n    <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '100%', height: '100px'}\"\r\n            ></ngx-skeleton-loader>\r\n\r\n    <div class=\"middle-box\">\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n    </div>\r\n    <ngx-skeleton-loader count=\"1\" appearance=\"line\" [theme]=\"{width: '100%', height: '30px'}\"\r\n    ></ngx-skeleton-loader>\r\n    <ngx-skeleton-loader count=\"1\" appearance=\"line\" [theme]=\"{width: '100%', height: '30px'}\"\r\n    ></ngx-skeleton-loader>\r\n\r\n    <div class=\"footer-menu\">\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/feed/feed-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/feed/feed-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function() { return FeedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");




const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.module.ts ***!
  \*******************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-routing.module */ "./src/app/pages/feed/feed-routing.module.ts");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/add-button/add-button.module */ "./src/app/shared-components/add-button/add-button.module.ts");
/* harmony import */ var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/logo-spinner/logo-spinner.module */ "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");
/* harmony import */ var _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared-components/footer-component/footer-component.module */ "./src/app/shared-components/footer-component/footer-component.module.ts");
/* harmony import */ var _shared_components_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-components/skeleton-loader/skeleton-loader.module */ "./src/app/shared-components/skeleton-loader/skeleton-loader.module.ts");












let FeedPageModule = class FeedPageModule {
};
FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"],
            _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_9__["LogoSpinnerModule"],
            _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__["FooterComponentModule"],
            _shared_components_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_11__["SkeletonLoaderModule"]
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })
], FeedPageModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n.feed-sliders {\n  height: 40%;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.know-more {\n  color: #666;\n}\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n.feed-sliders .feed-slider-one {\n  background: url('beaurty-1.jpg');\n}\n.feed-sliders .feed-slider-two {\n  background: url('beauty-2.jpg');\n}\n.feed-sliders .feed-slider-three {\n  background: url('beauty-3.jpg');\n}\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n.height-95px {\n  height: 95px;\n}\n.height-200px {\n  height: 200px;\n}\n.slide_container {\n  height: 215px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.slide_container ion-card {\n  width: 100%;\n  height: 160px;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.slide_container ion-card img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transform: scale(1.1, 1.1) rotate(1deg);\n  transition: 600ms all ease-in-out;\n}\n.slide_container .swiper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n.slide_container .swiper-slide-active ion-card img {\n  transform: scale(1, 1);\n}\n.slide_container .swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n.slide_container::-webkit-scrollbar {\n  display: none;\n}\n.menu-container {\n  padding: 0 15px;\n  font-size: 14px;\n}\n.products_container {\n  display: flex;\n  overflow: scroll;\n}\n.products_container .swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n.products_container::-webkit-scrollbar {\n  display: none;\n}\n.products_container .image-slider-container {\n  display: flex;\n  border-radius: 10px;\n  background-color: white;\n  width: 200px;\n  border: 1px solid #BFBFBF;\n  margin: 0 10px 5px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products_container .image-slider-container:first-child {\n  margin: 0 10px 5px 0;\n}\n.products_container .image-slider-container:last-child {\n  margin: 0 0 5px 10px;\n}\n.products_container .image-slider-container .slider-image {\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n}\n.products_container .image-slider-container .slider-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.products_container .image-slider-container .slider-text {\n  line-height: 1.3;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.products_container .image-slider-container .slider-text .product-name-container {\n  display: flex;\n  flex-direction: column;\n}\n.products_container .image-slider-container .slider-text .product-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.products_container .image-slider-container .slider-text .product-price-details {\n  display: flex;\n  justify-content: space-between;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container {\n  display: flex;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .discounted-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.slide_container .slider {\n  display: inline-block;\n  background-color: white;\n  width: 80%;\n  margin: 0 10px 5px;\n}\n.slide_container .slider img {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n.main-container {\n  background: #d3d3d34f;\n}\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: 1px 1px 4px #aaaaaa94;\n  padding: 7px;\n  justify-content: center;\n}\n.quick_menus div.menu-container {\n  flex-basis: 30%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3px;\n}\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  width: 65px;\n  border: 2px solid #666;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n.quick_menus div.menu-container .menu-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n  text-align: center;\n}\n.application-details {\n  margin: 15px 0 0;\n  padding: 12px;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background: #614d7f;\n}\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 2px solid #e95c8f;\n  border-radius: 50%;\n  margin: 5px 0;\n  padding: 2px;\n}\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n.linkedin-icon {\n  background: #0E76A8;\n}\n.fb-icon {\n  background: #3B5998;\n}\n.insta-icon {\n  background: linear-gradient(to right top, #e95c8f, #bc2a6d, #a82e7a, #903483, #614d7f);\n}\n.copy-rights {\n  padding: 5px 15px;\n  background: #e95c8f;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n.end-section {\n  padding: 10px 0;\n  background-color: lightgray;\n}\n.safety-measures {\n  margin: 15px 0 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #BFBFBF;\n  padding: 10px 0;\n  border-radius: 10px;\n}\n.safety-measures .margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.safety-measures .logo-safe .logo-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.safety-measures .measures-container {\n  display: flex;\n}\n.safety-measures .measures-container .measure {\n  padding: 5px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.safety-measures .measures-container .measure .measure-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px;\n}\n.safety-measures .measures-container .measure .measure-text {\n  text-align: center;\n}\n.customise-fab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxmZWVkXFxmZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURFRTtFQUNFLGNBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERUU7RUFDRSxrQ0FBQTtBQ0FKO0FET0E7RUFDRSxXQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKRjtBREtFO0VBQ0UsZUVoQ1U7QUQ2QmQ7QURPQTtFQUNFLFdBQUE7QUNKRjtBRE9BO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsZ0NBQUE7QUNKRjtBRE9BO0VBQ0UsK0JBQUE7QUNKRjtBRE9BO0VBQ0UsK0JBQUE7QUNKRjtBRE9BO0VBQ0UsdUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtBQ0pGO0FET0E7RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtBQ0pGO0FET0E7RUFDRSxrQ0FBQTtBQ0pGO0FET0E7RUFDRSxrQ0FBQTtBQ0pGO0FET0E7RUFDRSxvQ0FBQTtBQ0pGO0FET0E7RUFDRSxxQ0FBQTtBQ0pGO0FET0E7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0pGO0FET0E7RUFDQyxZQUFBO0FDSkQ7QURPQTtFQUNFLGFBQUE7QUNKRjtBRE9BO0VBNkJFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0FDREo7QURJTTtFQUNFLHNCQUFBO0FDRlI7QURPRTtFQUNFLGlDQUFBO0FDTEo7QURXRTtFQUNFLGFBQUE7QUNUSjtBRGFBO0VBQ0UsZUFBQTtFQUNBLGVFOUprQjtBRG9KcEI7QURhQTtFQVNFLGFBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRFNFO0VBQ0UsaUNBQUE7QUNQSjtBRGdCRTtFQUNFLGFBQUE7QUNkSjtBRGdCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDZEo7QURlSTtFQUNFLG9CQUFBO0FDYk47QURlSTtFQUNFLG9CQUFBO0FDYk47QURlSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNiTjtBRGNNO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1pSO0FEZUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2JOO0FEY007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNaUjtBRGNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDWlI7QURjTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1pSO0FEYVE7RUFDRSxhQUFBO0FDWFY7QURZVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDVlo7QURZVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWWjtBRG1CQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURpQkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQ2ZKO0FEaUJFO0VBQ0Usb0JBQUE7QUNmSjtBRGlCRTtFQUNFLG9CQUFBO0FDZko7QURtQkE7RUFDRSwrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsK0JBQUE7QUNoQkY7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNoQkY7QURtQkE7RUFDRSwrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsK0JBQUE7QUNoQkY7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjtBRG1CQTtFQUNFLDRCQUFBO0FDaEJGO0FEb0JBO0VBQ0UscUJBQUE7QUNqQkY7QURtQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ2hCRjtBRGtCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNqQko7QURrQ0k7RUFNRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHFCQUFBO0FDbEMxRDtBRG1DTTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7QUNqQ1I7QUQrREk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzdETjtBRGtFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUMvREY7QURpRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDL0RKO0FEZ0VJO0VBQ0UsV0FBQTtBQzlETjtBRCtETTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUM3RFI7QURpRUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUMvRE47QURrRUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNoRU47QURpRU07RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQy9EUjtBRGdFUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQzlEVjtBRHFFQTtFQUNFLG1CQUFBO0FDbEVGO0FEb0VBO0VBQ0UsbUJBQUE7QUNqRUY7QURtRUE7RUFDRSxzRkFBQTtBQ2hFRjtBRG1FQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNoRUY7QURtRUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUNoRUY7QURtRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNoRUY7QURpRUU7RUFDRSxtQkFBQTtBQy9ESjtBRGtFSTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDaEVOO0FEb0VFO0VBQ0UsYUFBQTtBQ2xFSjtBRG1FSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNqRU47QURrRU07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2hFUjtBRGtFTTtFQUNFLGtCQUFBO0FDaEVSO0FEc0VBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ25FRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuc2xvZ2FuLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLy8uZmVlZC1pbWFnZXMge1xyXG4vLyAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XHJcbi8vfVxyXG5cclxuLmZlZWQtc2xpZGVycyB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5mZWVkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ua25vdy1tb3JlIHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDMwZW07XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXVydHktMS5qcGdcIik7XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0yLmpwZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdGhyZWUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMy5qcGdcIik7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciB7XHJcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiA1cHggMTBweCAyOXB4ICNhYWFhYWE5NDtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hhaXIuanBlZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1za2luIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2tpbi5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLW1ha2V1cCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmhlaWdodC05NXB4IHtcclxuIGhlaWdodDogOTVweDtcclxufVxyXG5cclxuLmhlaWdodC0yMDBweCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciB7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpIHJvdGF0ZSgxZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogNjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIGhlaWdodDogMjE1cHg7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcclxufVxyXG5cclxuLnByb2R1Y3RzX2NvbnRhaW5lciB7XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xyXG4gICAgbWFyZ2luOiAwIDEwcHggNXB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNsaWRlci1pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlci10ZXh0IHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAucHJvZHVjdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1wcmljZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAucHJpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogIzJkMmMyYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpc2NvdW50ZWQtcHJpY2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMxIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnM0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XHJcbn1cclxuXHJcbi5maWx0ZXItYnJpZ2h0LTAzIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0ZjtcclxufVxyXG4ucXVpY2tfbWVudXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggI2FhYWFhYTk0O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZGl2Lm1lbnUtY29udGFpbmVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvL2JveC1zaGFkb3c6IHJnYigwIDAgMCAvIDUlKSAzcHggM3B4IDFweDtcclxuXHJcblxyXG4gICAgLy8mOm50aC1jaGlsZCgxKSB7XHJcbiAgICAvLyAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgIC8vfVxyXG4gICAgLy8mOm50aC1jaGlsZCgzKSB7XHJcbiAgICAvLyAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICAvL31cclxuICAgIC8vJjpudGgtY2hpbGQoNykge1xyXG4gICAgLy8gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgICAvL31cclxuICAgIC8vJjpudGgtY2hpbGQoOSkge1xyXG4gICAgLy8gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gICAgLy99XHJcbiAgICAubWVudS1pbWFnZSB7XHJcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAvL2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcclxuICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcclxuICAgICAgcGFkZGluZzogMXB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaW1nIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICAvLyYuaW1hZ2UtMSB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92ZWN0b3ItaGFpcmN1dC5qcGcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS0yIHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RocmVkZGluZzIuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgICAgLy8mLmltYWdlLTMge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVjdG9yX2ZhY2lhbC5qcGcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS00IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21hbmljdXJlLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS01IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Byb2R1Y3RzLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS02IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3VwcGVyTGlwcy5qcGVnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtNyB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9icmlkYWwuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgICAgLy8mLmltYWdlLTgge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2F4aW5nLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS05IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgIH1cclxuICAgIC5tZW51LXRleHQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcclxuICBtYXJnaW46IDE1cHggMCAwO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTkzZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDg0JSk7XHJcbiAgLm93bmVyLWluZm8tY29udGFpbmVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDM1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC5vd25lci1pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTk1YzhmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vd25lci1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1tZWRpYS1pY29ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAubWVkaWEtaWNvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saW5rZWRpbi1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xyXG59XHJcbi5mYi1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG59XHJcbi5pbnN0YS1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZTk1YzhmLCAjYmMyYTZkLCAjYTgyZTdhLCAjOTAzNDgzLCAjNjE0ZDdmKTtcclxufVxyXG5cclxuLmNvcHktcmlnaHRzIHtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZTk1YzhmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZW5kLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5zYWZldHktbWVhc3VyZXMge1xyXG4gIG1hcmdpbjogMTVweCAwIDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAubWFyZ2luLWJvdHRvbS0xMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAubG9nby1zYWZlIHtcclxuICAgIC5sb2dvLWltYWdlIHtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5sb2dvLXRleHQge31cclxuICB9XHJcbiAgLm1lYXN1cmVzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLm1lYXN1cmUge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLm1lYXN1cmUtaW1hZ2Uge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1lYXN1cmUtdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9taXNlLWZhYiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiIsIi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNlYXJjaC1iYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5mZWVkLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1cnR5LTEuanBnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXR5LTIuanBnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMy5qcGdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciB7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgcmdiYSg0MCwgMjksIDIzMiwgMSkgLTI1JSwgcmdiKDgxLCAzNiwgODIpIDYzJSk7Ki9cbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI5cHggI2FhYWFhYTk0O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWhhaXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGFpci5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLXNraW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2tpbi5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLW1ha2V1cCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tYWtldXAuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb3Vyc2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY291cnNlcy5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLXRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCAjMjgxZGU4IC0yNSUsICM1MTI0NTIgNjMlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWlnaHQtOTVweCB7XG4gIGhlaWdodDogOTVweDtcbn1cblxuLmhlaWdodC0yMDBweCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIge1xuICBoZWlnaHQ6IDIxNXB4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zbGlkZV9jb250YWluZXIgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5zbGlkZV9jb250YWluZXIgaW9uLWNhcmQgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpIHJvdGF0ZSgxZGVnKTtcbiAgdHJhbnNpdGlvbjogNjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zd2lwZXItc2xpZGUtYWN0aXZlIGlvbi1jYXJkIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2l0aW9uOiA0MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG4uc2xpZGVfY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZHVjdHNfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcbn1cbi5wcm9kdWN0c19jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBtYXJnaW46IDAgMTBweCA1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMTBweCA1cHggMDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAwIDVweCAxMHB4O1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLWltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1wcmljZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtcHJpY2UtZGV0YWlscyAucHJpY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LXByaWNlLWRldGFpbHMgLnByaWNlLWNvbnRhaW5lciAucHJpY2Uge1xuICBjb2xvcjogIzJkMmMyYztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtcHJpY2UtZGV0YWlscyAucHJpY2UtY29udGFpbmVyIC5kaXNjb3VudGVkLXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyIGltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAxMHB4IDVweCAwO1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCA1cHggMTBweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MxLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MyLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MzLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnM0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWdcIik7XG59XG5cbi5maWx0ZXItYnJpZ2h0LTAzIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMS5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMi5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMy5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnXCIpO1xufVxuXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2QzZDNkMzRmO1xufVxuXG4ucXVpY2tfbWVudXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICNhYWFhYWE5NDtcbiAgcGFkZGluZzogN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIge1xuICBmbGV4LWJhc2lzOiAzMCU7XG4gIHBhZGRpbmc6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzcHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LXRleHQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwcGxpY2F0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItaW1hZ2Uge1xuICB3aWR0aDogODVweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItaW1hZ2UgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTk1YzhmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIGRpdiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyBkaXYgLm1lZGlhLWljb24ge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubGlua2VkaW4taWNvbiB7XG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XG59XG5cbi5mYi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbn1cblxuLmluc3RhLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZTk1YzhmLCAjYmMyYTZkLCAjYTgyZTdhLCAjOTAzNDgzLCAjNjE0ZDdmKTtcbn1cblxuLmNvcHktcmlnaHRzIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZW5kLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnNhZmV0eS1tZWFzdXJlcyB7XG4gIG1hcmdpbjogMTVweCAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubWFyZ2luLWJvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5sb2dvLXNhZmUgLmxvZ28taW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubWVhc3VyZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciAubWVhc3VyZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubWVhc3VyZXMtY29udGFpbmVyIC5tZWFzdXJlIC5tZWFzdXJlLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciAubWVhc3VyZSAubWVhc3VyZS10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3VzdG9taXNlLWZhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/feed/feed.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/feed/feed.page.ts ***!
  \*****************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/storage.service */ "./src/app/shared-components/storage.service.ts");
/* harmony import */ var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/constants/app-constants */ "./src/assets/constants/app-constants.ts");










let FeedPage = class FeedPage {
    constructor(storageService, sharedService, router, adminService) {
        this.storageService = storageService;
        this.sharedService = sharedService;
        this.router = router;
        this.adminService = adminService;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true,
            zoom: {
                maxRatio: 3,
            },
            loop: true,
        };
        this.productImages = [
            {
                name: 'Product 1',
                url: 'assets/product1.jpg',
                price: 345,
                discountedPrice: 355,
                inCart: false,
                addedInCart: 0
            },
            {
                name: 'Product 2',
                url: 'assets/product2.jpeg',
                price: 45,
                discountedPrice: 60,
                inCart: false,
                addedInCart: 0
            },
            {
                name: 'Product 3',
                url: 'assets/product3.jpeg',
                price: 126,
                discountedPrice: 150,
                inCart: false,
                addedInCart: 0
            },
            {
                name: 'Product 4',
                url: 'assets/product4.jpeg',
                price: 324,
                discountedPrice: 387,
                inCart: false,
                addedInCart: 0
            },
        ];
        this.packagesOption = {
            slidesPerView: 1.5,
            centeredSlides: true,
            loop: true,
            initialSlide: 2,
            spaceBetween: 10,
            speed: 400,
            autoplay: true,
        };
        this.treatments = [
            {
                name: 'Threading',
                sequence: 1,
                url: 'assets/vector-icons/eyebrow.png',
            },
            {
                name: 'waxing',
                sequence: 2,
                url: 'assets/vector-icons/waxing.png',
            },
            {
                name: 'Haircuts',
                sequence: 3,
                url: 'assets/vector-icons/haircuts.png',
            },
            {
                name: 'Facials',
                sequence: 4,
                url: 'assets/vector-icons/facial.png',
            },
            {
                name: 'Bleach',
                sequence: 5,
                url: 'assets/vector-icons/bleach.png',
            },
            {
                name: 'Hairs',
                sequence: 6,
                url: 'assets/vector-icons/hair-straightener.png',
            },
            {
                name: 'Body',
                sequence: 7,
                url: 'assets/vector-icons/body-treatments.png',
            },
            {
                name: 'Makeup',
                sequence: 8,
                url: 'assets/vector-icons/makeup.png',
            },
            {
                name: 'Courses',
                sequence: 9,
                url: 'assets/vector-icons/badge.png',
            }
        ];
        this.packages = [
            {
                id: 1,
                sequence: 1,
                url: 'assets/s1.jpg',
            },
            {
                id: 2,
                sequence: 2,
                url: 'assets/s2.jpg',
            },
            {
                id: 3,
                sequence: 3,
                url: 'assets/s3.jpg',
            },
            {
                id: 4,
                sequence: 4,
                url: 'assets/s4.jpeg',
            }
        ];
        this.packageList = [];
        this.productList = [];
        this.serviceTypesList = [];
        this.bannerAnim1 = false;
        this.changeAnim1 = false;
        this.changeAnim2 = false;
        this.packagesSliderObservable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]();
        this.bannerSliderObservable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]();
    }
    ionViewWillEnter() {
        this.getPackages();
        this.getProducts();
        this.getServiceTypes();
        this.todayYear = (new Date()).getFullYear();
    }
    ionViewDidEnter() {
        this.sharedService.onSettingEvent.next(false);
        this.sharedService.showBackIcon.next(false);
        const userData = this.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__["appConstants"].USER_INFO);
        if (userData.roleId.name === 'admin') {
            this.sharedService.showBackIcon.next(true);
        }
        this.packagesSliderObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(3000).subscribe(x => {
            this.packagesSlider.startAutoplay().then();
        });
        this.bannerSliderObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(3000).subscribe(x => {
            this.bannerSlider.startAutoplay().then();
        });
    }
    onIonScroll(event) {
        // const eventDetails = event.detail;
        // const slideUpCssList = ['animate__animated', 'animate__slideInUp', 'animate__fast'];
        // switch (eventDetails.scrollTop) {
        //   case 200: {
        //     this.changeAnim1 = false;
        //     setTimeout(() => {
        //       this.changeAnim1 = true;
        //     }, 20);
        //     break;
        //   } case 600: {
        //     this.changeAnim2 = false;
        //     setTimeout(() => {
        //       this.changeAnim2 = true;
        //     }, 20);
        //     break;
        //   }
        // }
    }
    ionViewDidLeave() {
        this.packagesSliderObservable.unsubscribe();
        this.bannerSliderObservable.unsubscribe();
    }
    slidesDidLoad(event) {
        setTimeout(() => {
            this.packagesSlider.startAutoplay().then();
            this.bannerSlider.startAutoplay().then();
        }, 1000);
    }
    onLastBannerSlide() {
        this.bannerSlider.slideTo(2).then();
    }
    onLastPackageSlide() {
        this.packagesSlider.slideTo(2).then();
    }
    ngOnInit() {
    }
    refreshPage(event) {
        setTimeout(() => {
            this.getServiceTypes();
            event.target.complete();
        }, 1000);
    }
    getPackages() {
        this.sharedService.showSkeletonSpinner.next(true);
        this.adminService.getServicePackage().subscribe(res => this.getServicePackageSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getServicePackageSuccess(res) {
        this.packageList = res;
    }
    getProducts() {
        this.sharedService.showSkeletonSpinner.next(true);
        this.adminService.getProducts().subscribe(res => this.getProductSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getProductSuccess(res) {
        this.productList = res;
    }
    getServiceTypes() {
        this.sharedService.showSkeletonSpinner.next(true);
        this.adminService.getAllServiceTypes().subscribe(res => this.getAllServiceTypesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getAllServiceTypesSuccess(res) {
        this.serviceTypesList = res;
        this.serviceTypesList = this.serviceTypesList.map((ser) => {
            // Adding the api url and also updating image with timestamp
            ser.imageUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domainUrlApi}${ser.imageUrl}?${new Date().getTime()}`;
            return ser;
        });
        this.sharedService.showSkeletonSpinner.next(false);
    }
    onClickPackage(id) {
        this.router.navigate(['/package-details'], { queryParams: { packageId: id } });
    }
    goServices() {
        this.router.navigate(['/services']);
    }
    onKnowMore() {
        this.router.navigate(['/about-us']);
    }
    onUpdateCounter(data, index) {
        this.productImages[index].addedInCart = data;
    }
};
FeedPage.ctorParameters = () => [
    { type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('packagesSlider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], FeedPage.prototype, "packagesSlider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bannerSlider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], FeedPage.prototype, "bannerSlider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animationRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FeedPage.prototype, "animationRef", void 0);
FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/feed/feed.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], FeedPage);



/***/ }),

/***/ "./src/app/shared-components/add-button/add-button.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared-components/add-button/add-button.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButtonModule", function() { return AddButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_button_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-button.page */ "./src/app/shared-components/add-button/add-button.page.ts");






let AddButtonModule = class AddButtonModule {
};
AddButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]
        ],
        declarations: [_add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]]
    })
], AddButtonModule);



/***/ }),

/***/ "./src/app/shared-components/add-button/add-button.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared-components/add-button/add-button.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 0 5px;\n  color: #614d7f;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #e95c8f40;\n  color: #614d7f;\n  border-left: 1px solid #614d7f;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 2px 5px;\n  color: #614d7f;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #614d7f;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #614d7f;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #614d7f;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxhZGQtYnV0dG9uXFxhZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUNmLG1CQUFBO0VBQXFCLHlCQUFBO0VBQ3JCLGtCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHTjtBRERJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0dOO0FEQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDR047QURESTtFQUNFLGNBQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7QUNFTjtBRENJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDTjtBREVJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2FkZC1idXR0b24vYWRkLWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0ge1xyXG4gIC5jdXN0b20tYWRkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XHJcbiAgICB9XHJcbiAgICBpLmZhLmZhLXBsdXMge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcclxuICAgICAgY29sb3I6ICM2MTRkN2Y7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYxNGQ3ZjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuYWRkLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgIH1cclxuICAgIC5pbi1jYXJ0LWJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XHJcbiAgICAgIC8vYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1wbHVzIHtcclxuICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1taW51cyB7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGYxZjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gaS5mYS5mYS1wbHVzIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gIGNvbG9yOiAjNjE0ZDdmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2MTRkN2Y7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5hZGQtdGV4dCB7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGNvbG9yOiAjNjE0ZDdmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5pbi1jYXJ0LWJveCB7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBjb2xvcjogIzYxNGQ3ZjtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICBjb2xvcjogIzYxNGQ3ZjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtbWludXMge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/add-button/add-button.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared-components/add-button/add-button.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddButtonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButtonPage", function() { return AddButtonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddButtonPage = class AddButtonPage {
    constructor() {
        this.counter = 0;
        this.updateCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onChange(key) {
        switch (key) {
            case 'plus':
                this.counter = this.counter + 1;
                this.updateCounter.emit(this.counter);
                break;
            case 'minus':
                this.counter = this.counter - 1;
                this.updateCounter.emit(this.counter);
                break;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddButtonPage.prototype, "updateCounter", void 0);
AddButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-button.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-button.page.scss */ "./src/app/shared-components/add-button/add-button.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddButtonPage);



/***/ }),

/***/ "./src/app/shared-components/skeleton-loader/skeleton-loader.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared-components/skeleton-loader/skeleton-loader.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skeleton-container {\n  z-index: 999;\n  background: white;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  padding: 80px 15px 20px;\n}\n\n.middle-box {\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.middle-box ngx-skeleton-loader {\n  flex-basis: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n}\n\n.footer-menu {\n  display: flex;\n  justify-content: space-around;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  padding: 10px 0;\n  align-items: center;\n  border-top: 1px solid #eff1f6;\n}\n\n.footer-menu div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2tlbGV0b24tbG9hZGVyL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXHNrZWxldG9uLWxvYWRlclxcc2tlbGV0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9za2VsZXRvbi1sb2FkZXIvc2tlbGV0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FERUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NrZWxldG9uLWxvYWRlci9za2VsZXRvbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tlbGV0b24tY29udGFpbmVyIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogODBweCAxNXB4IDIwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUtYm94IHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG5neC1za2VsZXRvbi1sb2FkZXIge1xyXG4gICAgZmxleC1iYXNpczogMzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXItbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZmMWY2O1xyXG4gIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iLCIuc2tlbGV0b24tY29udGFpbmVyIHtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDgwcHggMTVweCAyMHB4O1xufVxuXG4ubWlkZGxlLWJveCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWlkZGxlLWJveCBuZ3gtc2tlbGV0b24tbG9hZGVyIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4uZm9vdGVyLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZmMWY2O1xufVxuLmZvb3Rlci1tZW51IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared-components/skeleton-loader/skeleton-loader.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared-components/skeleton-loader/skeleton-loader.component.ts ***!
  \********************************************************************************/
/*! exports provided: SkeletonLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonLoaderComponent", function() { return SkeletonLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");



let SkeletonLoaderComponent = class SkeletonLoaderComponent {
    constructor(sharedServiceService) {
        this.sharedServiceService = sharedServiceService;
        this.showSkeletonSpinner = false;
    }
    ngOnInit() {
        this.sharedServiceService.showSkeletonSpinner.subscribe((res) => {
            this.showSkeletonSpinner = res;
        });
    }
};
SkeletonLoaderComponent.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"] }
];
SkeletonLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skeleton-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skeleton-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/skeleton-loader/skeleton-loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skeleton-loader.component.scss */ "./src/app/shared-components/skeleton-loader/skeleton-loader.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]])
], SkeletonLoaderComponent);



/***/ }),

/***/ "./src/app/shared-components/skeleton-loader/skeleton-loader.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared-components/skeleton-loader/skeleton-loader.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SkeletonLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonLoaderModule", function() { return SkeletonLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _skeleton_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skeleton-loader.component */ "./src/app/shared-components/skeleton-loader/skeleton-loader.component.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");








let SkeletonLoaderModule = class SkeletonLoaderModule {
};
SkeletonLoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"]
        ],
        exports: [
            _skeleton_loader_component__WEBPACK_IMPORTED_MODULE_6__["SkeletonLoaderComponent"]
        ],
        declarations: [_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_6__["SkeletonLoaderComponent"]]
    })
], SkeletonLoaderModule);



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map