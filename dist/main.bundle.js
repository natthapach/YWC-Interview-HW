webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div class=\"container\" style=\"background: #dddddd\">\n  <div class=\"row\" >\n    <app-search-form (searchSubmit)=\"onSearch($event)\"></app-search-form>\n  </div>\n  <div>\n    <app-name-list  [names]=\"names\" major=\"content\"></app-name-list>\n    <app-name-list  [names]=\"names\" major=\"design\"></app-name-list>\n    <app-name-list [names]=\"names\" major=\"marketing\"></app-name-list>\n    <app-name-list  [names]=\"names\" major=\"programming\"></app-name-list>\n  </div>\n  \n</div> -->\n<!-- <app-display-result></app-display-result> -->\n<div class=\"container\" style=\"padding: 0\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"\">\n      <b>YWC 15<sup>th</sup></b>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/result\">Result</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/stat\">Statistic</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"container\" style=\"background: #ddd\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_name_pool_service__ = __webpack_require__("../../../../../src/app/shared/name-pool.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(namePoolService) {
        var _this = this;
        this.namePoolService = namePoolService;
        this.title = 'app';
        this.names = namePoolService.getNames();
        namePoolService.regisListener(function (names) {
            _this.names = names;
        });
    }
    AppComponent.prototype.onSearch = function (text) {
        console.log("onSearch " + text);
        this.names = this.namePoolService.search(text);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_name_pool_service__["a" /* NamePoolService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_form_search_form_component__ = __webpack_require__("../../../../../src/app/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__name_list_name_list_component__ = __webpack_require__("../../../../../src/app/name-list/name-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__name_info_name_info_component__ = __webpack_require__("../../../../../src/app/name-info/name-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__displat_result_displat_result_component__ = __webpack_require__("../../../../../src/app/displat-result/displat-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_name_pool_service__ = __webpack_require__("../../../../../src/app/shared/name-pool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_search_stat_service__ = __webpack_require__("../../../../../src/app/shared/search-stat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__display_result_display_result_component__ = __webpack_require__("../../../../../src/app/display-result/display-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__display_stat_display_stat_component__ = __webpack_require__("../../../../../src/app/display-stat/display-stat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseConfig = {
    apiKey: "AIzaSyCXkXqCKZevGy1MgxkCpedzf2pT8cNEcA0",
    authDomain: "ywc-interview-hw.firebaseapp.com",
    databaseURL: "https://ywc-interview-hw.firebaseio.com",
    projectId: "ywc-interview-hw",
    storageBucket: "ywc-interview-hw.appspot.com",
    messagingSenderId: "988499838697"
};
var appRoutes = [
    {
        path: "result",
        component: __WEBPACK_IMPORTED_MODULE_14__display_result_display_result_component__["a" /* DisplayResultComponent */]
    },
    {
        path: "",
        redirectTo: "/result",
        pathMatch: "full"
    },
    {
        path: "stat",
        component: __WEBPACK_IMPORTED_MODULE_15__display_stat_display_stat_component__["a" /* DisplayStatComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__search_form_search_form_component__["a" /* SearchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__name_list_name_list_component__["a" /* NameListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__name_info_name_info_component__["a" /* NameInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__displat_result_displat_result_component__["a" /* DisplatResultComponent */],
                __WEBPACK_IMPORTED_MODULE_14__display_result_display_result_component__["a" /* DisplayResultComponent */],
                __WEBPACK_IMPORTED_MODULE_15__display_stat_display_stat_component__["a" /* DisplayStatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__shared_name_pool_service__["a" /* NamePoolService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_search_stat_service__["a" /* SearchStatService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/displat-result/displat-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-search-form #searchForm (searchSubmit)=\"onSearch($event)\"></app-search-form>\n</div>\n<div>\n  <app-name-list  [names]=\"names\" major=\"content\"></app-name-list>\n  <app-name-list  [names]=\"names\" major=\"design\"></app-name-list>\n  <app-name-list [names]=\"names\" major=\"marketing\"></app-name-list>\n  <app-name-list  [names]=\"names\" major=\"programming\"></app-name-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/displat-result/displat-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/displat-result/displat-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplatResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_name_pool_service__ = __webpack_require__("../../../../../src/app/shared/name-pool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplatResultComponent = (function () {
    function DisplatResultComponent(namePoolService) {
        var _this = this;
        this.namePoolService = namePoolService;
        this.title = 'app';
        this.searchStream$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(this.searchFrom, "searchSubmit");
        this.names = namePoolService.getNames();
        namePoolService.regisListener(function (names) {
            _this.names = names;
        });
        this.searchStream$.subscribe({
            next: function (value) {
                console.log(value);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    DisplatResultComponent.prototype.ngOnInit = function () {
    };
    DisplatResultComponent.prototype.onSearch = function (text) {
        console.log("onSearch " + text);
        this.names = this.namePoolService.search(text);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("searchForm"),
        __metadata("design:type", Object)
    ], DisplatResultComponent.prototype, "searchFrom", void 0);
    DisplatResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-displat-result',
            template: __webpack_require__("../../../../../src/app/displat-result/displat-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/displat-result/displat-result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_name_pool_service__["a" /* NamePoolService */]])
    ], DisplatResultComponent);
    return DisplatResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/display-result/display-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" >\n    <app-search-form #searchForm (searchSubmit)=\"onSearch($event)\"></app-search-form>\n  </div>\n  <div>\n    <app-name-list  [names]=\"names\" major=\"content\"></app-name-list>\n    <app-name-list  [names]=\"names\" major=\"design\"></app-name-list>\n    <app-name-list [names]=\"names\" major=\"marketing\"></app-name-list>\n    <app-name-list  [names]=\"names\" major=\"programming\"></app-name-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/display-result/display-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-result/display-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_name_pool_service__ = __webpack_require__("../../../../../src/app/shared/name-pool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_search_stat_service__ = __webpack_require__("../../../../../src/app/shared/search-stat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayResultComponent = (function () {
    function DisplayResultComponent(namePoolService, statService) {
        var _this = this;
        this.namePoolService = namePoolService;
        this.statService = statService;
        this.title = 'app';
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        // searchStream$ = Observable.fromEvent(this.searchFrom, "searchSubmit");
        this.stream = this.subject.debounceTime(3000);
        this.names = namePoolService.getNames();
        namePoolService.regisListener(function (names) {
            _this.names = names;
        });
        console.log("stat service " + this.statService);
        // this.subject.subscribe({
        //   next(value){
        //     console.log("subject " + value);
        //     console.log("stat service " + this.statService);
        //   }
        // });
        // this.stream.subscribe({
        //   next(value){
        //     console.log("debounce " + value);
        //     console.log("stat service " + this.statService);
        //     // this.statService.addSearchText(value); 
        //     onDebounce(value);
        //   }
        // });
        this.stream.subscribe({
            next: function (value) {
                var text = value["text"];
                var c = value["class"];
                console.log("debounce " + text);
                c.statService.addSearchText(text);
            }
        });
    }
    DisplayResultComponent.prototype.ngOnInit = function () {
    };
    DisplayResultComponent.prototype.next = function (value) {
        console.log("debounce " + value);
    };
    DisplayResultComponent.prototype.onSearch = function (text) {
        if (text != "") {
            console.log("onSearch " + text);
            this.names = this.namePoolService.search(text);
            this.subject.next({
                "text": text,
                "class": this
            });
        }
    };
    DisplayResultComponent.prototype.onDebounce = function (text) {
        this.statService.addSearchText(text);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("searchForm"),
        __metadata("design:type", Object)
    ], DisplayResultComponent.prototype, "searchFrom", void 0);
    DisplayResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display-result',
            template: __webpack_require__("../../../../../src/app/display-result/display-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-result/display-result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_name_pool_service__["a" /* NamePoolService */], __WEBPACK_IMPORTED_MODULE_3__shared_search_stat_service__["a" /* SearchStatService */]])
    ], DisplayResultComponent);
    return DisplayResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/display-stat/display-stat.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n    Search Statistics\n  </h1>\n  <ul class=\"list-group\" >\n    <li class=\"list-group-item\" *ngFor=\"let s of stats\">\n      <b>{{ s.word }}</b>\n      <div class=\"progress\">\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style.width=\"{{ (s.amt/total *100) + '%' }}\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{s.amt}}</div>\n        </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/display-stat/display-stat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-stat/display-stat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayStatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_search_stat_service__ = __webpack_require__("../../../../../src/app/shared/search-stat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayStatComponent = (function () {
    function DisplayStatComponent(statService) {
        var _this = this;
        this.statService = statService;
        this.stats = [];
        this.total = 0;
        this.statService.regisListener(function (statsInfo) {
            _this.stats = statsInfo["stats"];
            _this.total = statsInfo["total"];
        });
        this.stats = this.statService.getStats();
        this.total = this.statService.getTotal();
    }
    DisplayStatComponent.prototype.ngOnInit = function () {
    };
    DisplayStatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display-stat',
            template: __webpack_require__("../../../../../src/app/display-stat/display-stat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-stat/display-stat.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_search_stat_service__["a" /* SearchStatService */]])
    ], DisplayStatComponent);
    return DisplayStatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/name-info/name-info.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"info-item\">\n  {{name.interviewRef + \" \" + name.firstName + \" \" + name.lastName}}\n</div>\n<!-- <div clas=\"card\">\n  <div class=\"card-title\">\n    Title\n  </div>\n  <div class=\"card-body\">\n      {{name.interviewRef + \" \" + name.firstName + \" \" + name.lastName}}\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/name-info/name-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info-item {\n  background: white;\n  margin-top: 10px;\n  padding: 5px;\n  box-shadow: 1px 1px 3px #212121; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/name-info/name-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_name_item__ = __webpack_require__("../../../../../src/app/shared/name-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NameInfoComponent = (function () {
    function NameInfoComponent() {
    }
    NameInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_name_item__["a" /* NameItem */])
    ], NameInfoComponent.prototype, "name", void 0);
    NameInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-name-info',
            template: __webpack_require__("../../../../../src/app/name-info/name-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/name-info/name-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NameInfoComponent);
    return NameInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/name-list/name-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"margin-top:20px\">\n  <a data-toggle=\"collapse\" href=\"{{'#collapse' + major}}\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n      <h1>{{ major.toUpperCase() }}</h1>\n  </a>\n  \n  <div class=\"collapse.show row\" id=\"{{'collapse' + major}}\" >\n    <ng-container *ngFor=\"let name of names\">\n      <div class=\"col-sm-12 col-md-4\" *ngIf=\"name.major===this.major\">\n        <app-name-info [name]=\"name\"></app-name-info>\n      </div> \n    </ng-container>\n  </div>\n</div> -->\n\n<div style=\"margin-top:20px\">\n  <h1>{{ major.toUpperCase() }}</h1>\n  <div class=\"row\" >\n    <ng-container *ngFor=\"let name of names\">\n      <div class=\"col-sm-12 col-md-4\" *ngIf=\"name.major===this.major\">\n        <app-name-info [name]=\"name\"></app-name-info>\n      </div> \n    </ng-container>\n  </div>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/name-list/name-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/name-list/name-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NameListComponent = (function () {
    function NameListComponent() {
    }
    NameListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NameListComponent.prototype, "major", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], NameListComponent.prototype, "names", void 0);
    NameListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-name-list',
            template: __webpack_require__("../../../../../src/app/name-list/name-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/name-list/name-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NameListComponent);
    return NameListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-xs-12\" style=\"padding:10px; padding-bottom:0px\">\n<label>search</label> \n<input class=\"form-control\" type=\"text\" #searchBox [(ngModel)]=\"searchText\" (input)=\"onSearch($event)\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_search_stat_service__ = __webpack_require__("../../../../../src/app/shared/search-stat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchFormComponent = (function () {
    function SearchFormComponent(db, state) {
        this.db = db;
        this.state = state;
        this.searchText = "";
        this.searchSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.onSearch = function (event) {
        event.preventDefault();
        console.log(this.searchText);
        this.searchSubmit.emit(this.searchText);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "searchSubmit", void 0);
    SearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-form',
            template: __webpack_require__("../../../../../src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-form/search-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__shared_search_stat_service__["a" /* SearchStatService */]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/name-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameItem; });
var NameItem = (function () {
    function NameItem(firstName, lastName, major, interviewRef) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.major = major;
        this.interviewRef = interviewRef;
    }
    return NameItem;
}());



/***/ }),

/***/ "../../../../../src/app/shared/name-pool.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamePoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NamePoolService = (function () {
    function NamePoolService(http) {
        var _this = this;
        this.http = http;
        this.names = [];
        this.http
            .get("https://ywc15.ywc.in.th/api/interview")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
            _this.names = res;
            _this.listener(_this.names);
        });
    }
    NamePoolService.prototype.getNames = function () {
        return this.names;
    };
    NamePoolService.prototype.regisListener = function (listener) {
        this.listener = listener;
    };
    NamePoolService.prototype.search = function (text) {
        var names = this.names.filter(function (name) {
            return name.firstName.indexOf(text) >= 0 || name.lastName.indexOf(text) >= 0 || name.interviewRef.indexOf(text) >= 0;
        });
        return names;
    };
    NamePoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NamePoolService);
    return NamePoolService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/search-stat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_item__ = __webpack_require__("../../../../../src/app/shared/stat-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchStatService = (function () {
    function SearchStatService(db) {
        var _this = this;
        this.db = db;
        this.stats = [];
        this.total = 0;
        var item = this.db.object("search");
        item.snapshotChanges().subscribe(function (action) {
            _this.stats = [];
            _this.total = 0;
            var data = action.payload.val();
            for (var key in data) {
                console.log(key + ":" + data[key]);
                var stat = new __WEBPACK_IMPORTED_MODULE_2__stat_item__["a" /* StatItem */](key, data[key]);
                _this.stats.push(stat);
                _this.total += data[key];
            }
            if (_this.listener) {
                _this.listener({
                    "stats": _this.stats,
                    "total": _this.total
                });
            }
        });
    }
    SearchStatService.prototype.addSearchText = function (searchText) {
        var _this = this;
        var subscription = this.db.object("search").snapshotChanges().subscribe(function (action) {
            var data = action.payload.val();
            var n = data[searchText];
            if (!n) {
                _this.db.object("search").update((_a = {}, _a[searchText] = 1, _a));
            }
            else {
                _this.db.object("search").update((_b = {}, _b[searchText] = ++n, _b));
            }
            subscription.unsubscribe();
            var _a, _b;
        });
    };
    SearchStatService.prototype.getStats = function () {
        return this.stats;
    };
    SearchStatService.prototype.getTotal = function () {
        return this.total;
    };
    SearchStatService.prototype.regisListener = function (listener) {
        this.listener = listener;
    };
    SearchStatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SearchStatService);
    return SearchStatService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/stat-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatItem; });
var StatItem = (function () {
    function StatItem(word, amt) {
        this.word = word;
        this.amt = amt;
    }
    return StatItem;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map