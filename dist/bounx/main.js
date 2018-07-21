(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _coachreg_coachreg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coachreg/coachreg.component */ "./src/app/coachreg/coachreg.component.ts");
/* harmony import */ var _clubreg_clubreg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clubreg/clubreg.component */ "./src/app/clubreg/clubreg.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resetpw/resetpw.component */ "./src/app/resetpw/resetpw.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'register/clubreg', component: _clubreg_clubreg_component__WEBPACK_IMPORTED_MODULE_5__["ClubregComponent"] },
    { path: 'register/coachreg', component: _coachreg_coachreg_component__WEBPACK_IMPORTED_MODULE_4__["CoachregComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'reset', component: _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_7__["ResetpwComponent"] },
    { path: 'verify', component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_8__["VerifyComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    _coachreg_coachreg_component__WEBPACK_IMPORTED_MODULE_4__["CoachregComponent"],
    _clubreg_clubreg_component__WEBPACK_IMPORTED_MODULE_5__["ClubregComponent"],
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'app';
        this.openPages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.route);
        this.session = localStorage.getItem('sessionKey');
        if (this.session == 'loggedin') {
            this.router.navigate(['dashboard'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['login'], { relativeTo: this.route });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mastercalendar_mastercalendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mastercalendar/mastercalendar.component */ "./src/app/mastercalendar/mastercalendar.component.ts");
/* harmony import */ var _myclasses_myclasses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myclasses/myclasses.component */ "./src/app/myclasses/myclasses.component.ts");
/* harmony import */ var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myprofile/myprofile.component */ "./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resetpw/resetpw.component */ "./src/app/resetpw/resetpw.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                _mastercalendar_mastercalendar_component__WEBPACK_IMPORTED_MODULE_4__["MastercalendarComponent"],
                _myclasses_myclasses_component__WEBPACK_IMPORTED_MODULE_5__["MyclassesComponent"],
                _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_6__["MyprofileComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
                _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_9__["ResetpwComponent"],
                _verify_verify_component__WEBPACK_IMPORTED_MODULE_10__["VerifyComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\n  position: relative;\n  width: 102%;\n  height: 30px;\n  left: -1%;\n  top: 85px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  overflow-x: none;\n}\n\n.buttons{\n  position: absolute;\n  left: 6%;\n  bottom: -3%;\n  color: grey;\n}\n\n.headingButton2{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  outline: none;\n}\n\n.headingButton2:hover{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  cursor: pointer;\n  outline: none;\n}\n\n.inside{\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 85%;\n  top: 85px;\n  padding: 25px;\n  color: \t#252525;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n  <div class=\"buttons\">\n    <button id=\"1\" class=\"headingButton2\">Active Chats</button>\n  </div>\n</div><br>\n<div class=\"inside\">\nWe instantly connect you to BOUNX players. Message players and manage coaching sessions,\nbooking requests and other general enquiries here.\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(loginService) {
        this.loginService = loginService;
        this.data = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem('data'));
        console.log(this.data);
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/clubreg.service.ts":
/*!************************************!*\
  !*** ./src/app/clubreg.service.ts ***!
  \************************************/
/*! exports provided: ClubregService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubregService", function() { return ClubregService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClubregService = /** @class */ (function () {
    function ClubregService(http) {
        this.http = http;
    }
    ClubregService.prototype.register = function (info) {
        console.log('hello');
        return this.http.get(info);
    };
    ClubregService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClubregService);
    return ClubregService;
}());



/***/ }),

/***/ "./src/app/clubreg/clubreg.component.css":
/*!***********************************************!*\
  !*** ./src/app/clubreg/clubreg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back1{\n  position: fixed;\n  height: 101%;\n  top: -1%;\n  left: -1%;\n}\n\n.back2{\n  position: fixed;\n  width: 101%;\n  top: -1%;\n  left: -1%;\n}\n\n.watermark{\n  position: fixed;\n  height: 50%;\n  bottom: 2%;\n  right: 0%;\n}\n\n.form{\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 1px 1px 2px 2px lightgrey;\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.logo{\n  position: absolute;\n  width: 100px;\n  top: 0%;\n  left: 4%;\n}\n\n.headings{\n  font-size: 13px;\n  color: #7F7F7F;\n}\n\ninput{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 97%;\n}\n\n.input{\n  font-size: 13px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  width: 97%;\n  resize: none;\n}\n\n.inputdropdown{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n}\n\n.overall{\n  position: absolute;\n  top: 10%;\n  left: 3%;\n  width: 35%;\n}\n\n.overall2{\n  position: absolute;\n  top: 10%;\n  left: 3%;\n  right: 3%;\n  width: 79%;\n}\n\n::-webkit-input-placeholder{\n  color: lightgrey\n}\n\n:-ms-input-placeholder{\n  color: lightgrey\n}\n\n::-ms-input-placeholder{\n  color: lightgrey\n}\n\n::placeholder{\n  color: lightgrey\n}\n\n.register{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.register:hover{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: black;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n}\n\n.black{\n  position: fixed;\n  height: 102%;\n  bottom: -1%;\n  right: -1%;\n  opacity: 0.5;\n}\n\n.load{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.error{\n  position: fixed;\n  width: 40%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.error2{\n  position: fixed;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.errormsg{\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n}\n\n.ok{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/clubreg/clubreg.component.html":
/*!************************************************!*\
  !*** ./src/app/clubreg/clubreg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\">\n  <img id=\"bi\" src=\"/assets/pics/BG_registration_club_hover.png\" class=\"back1\">\n  <img src=\"/assets/pics/clubregister.png\" class=\"watermark\">\n  <div id=\"overall\" class=\"overall\">\n  <img src=\"/assets/pics/clubcoachlogo.png\" class=\"logo\"><br><br><br>\n  <div class=\"form\">\n    <p>Manager Details</p>\n    <br>\n    <div class=\"headings\">\n      Manager Name <span style=\"color: red\" size=\"50\">*</span><br>\n      <input #managername><br><br>\n      Manager Phone <span style=\"color: red\">* </span><br>\n      <input #phone type=\"number\" maxlength=\"10\" size=\"10\"><br><br>\n      Manager Email <span style=\"color: red\">* </span><span style=\"font-size: 10px\">(login ID)</span><br>\n      <input #email type=\"email\"><br><br>\n      Password <span style=\"color: red\">* </span><span style=\"font-size: 10px\">(alphanumeric, min 8 characters, max 16 characters)</span><br>\n      <input #password type=\"password\"><br><br><br><br>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"form\">\n    <p>Club Details</p>\n    <br>\n    <div class=\"headings\">\n      Club Logo <span style=\"color: red\">*</span><br>\n      <input #logo placeholder=\"click here to choose file\" type=\"file\"><br><br>\n      Club Name <span style=\"color: red\">* </span><br>\n      <input #clubname><br><br>\n      Club Description <span style=\"color: red\">* </span><span style=\"font-size: 10px\">(max 500 characters)</span><br><br>\n      <textarea #description class=\"input\" rows=\"3\"></textarea><br><br>\n      Website <br>\n      <input #website><br><br>\n      Google Map <br>\n      <input #map><br><br>\n      Address Line 1 <span style=\"color: red\">* </span><br>\n      <input #add1><br><br>\n      Address Line 2 <br>\n      <input #add2><br><br>\n      City <span style=\"color: red\">* </span><br>\n      <input #city><br><br>\n      State <span style=\"color: red\">* </span><br>\n      <input #state><br><br>\n      Postcode <span style=\"color: red\">* </span><br>\n      <input #postcode type=\"number\" ><br><br>\n      Country <span style=\"color: red\">* </span><br><br>\n      <select #country class=\"inputdropdown\">\n\t<option value=\"AF\">Afghanistan</option>\n\t<option value=\"AX\">Åland Islands</option>\n\t<option value=\"AL\">Albania</option>\n\t<option value=\"DZ\">Algeria</option>\n\t<option value=\"AS\">American Samoa</option>\n\t<option value=\"AD\">Andorra</option>\n\t<option value=\"AO\">Angola</option>\n\t<option value=\"AI\">Anguilla</option>\n\t<option value=\"AQ\">Antarctica</option>\n\t<option value=\"AG\">Antigua and Barbuda</option>\n\t<option value=\"AR\">Argentina</option>\n\t<option value=\"AM\">Armenia</option>\n\t<option value=\"AW\">Aruba</option>\n\t<option value=\"AU\">Australia</option>\n\t<option value=\"AT\">Austria</option>\n\t<option value=\"AZ\">Azerbaijan</option>\n\t<option value=\"BS\">Bahamas</option>\n\t<option value=\"BH\">Bahrain</option>\n\t<option value=\"BD\">Bangladesh</option>\n\t<option value=\"BB\">Barbados</option>\n\t<option value=\"BY\">Belarus</option>\n\t<option value=\"BE\">Belgium</option>\n\t<option value=\"BZ\">Belize</option>\n\t<option value=\"BJ\">Benin</option>\n\t<option value=\"BM\">Bermuda</option>\n\t<option value=\"BT\">Bhutan</option>\n\t<option value=\"BO\">Bolivia, Plurinational State of</option>\n\t<option value=\"BQ\">Bonaire, Sint Eustatius and Saba</option>\n\t<option value=\"BA\">Bosnia and Herzegovina</option>\n\t<option value=\"BW\">Botswana</option>\n\t<option value=\"BV\">Bouvet Island</option>\n\t<option value=\"BR\">Brazil</option>\n\t<option value=\"IO\">British Indian Ocean Territory</option>\n\t<option value=\"BN\">Brunei Darussalam</option>\n\t<option value=\"BG\">Bulgaria</option>\n\t<option value=\"BF\">Burkina Faso</option>\n\t<option value=\"BI\">Burundi</option>\n\t<option value=\"KH\">Cambodia</option>\n\t<option value=\"CM\">Cameroon</option>\n\t<option value=\"CA\">Canada</option>\n\t<option value=\"CV\">Cape Verde</option>\n\t<option value=\"KY\">Cayman Islands</option>\n\t<option value=\"CF\">Central African Republic</option>\n\t<option value=\"TD\">Chad</option>\n\t<option value=\"CL\">Chile</option>\n\t<option value=\"CN\">China</option>\n\t<option value=\"CX\">Christmas Island</option>\n\t<option value=\"CC\">Cocos (Keeling) Islands</option>\n\t<option value=\"CO\">Colombia</option>\n\t<option value=\"KM\">Comoros</option>\n\t<option value=\"CG\">Congo</option>\n\t<option value=\"CD\">Congo, the Democratic Republic of the</option>\n\t<option value=\"CK\">Cook Islands</option>\n\t<option value=\"CR\">Costa Rica</option>\n\t<option value=\"CI\">Côte d'Ivoire</option>\n\t<option value=\"HR\">Croatia</option>\n\t<option value=\"CU\">Cuba</option>\n\t<option value=\"CW\">Curaçao</option>\n\t<option value=\"CY\">Cyprus</option>\n\t<option value=\"CZ\">Czech Republic</option>\n\t<option value=\"DK\">Denmark</option>\n\t<option value=\"DJ\">Djibouti</option>\n\t<option value=\"DM\">Dominica</option>\n\t<option value=\"DO\">Dominican Republic</option>\n\t<option value=\"EC\">Ecuador</option>\n\t<option value=\"EG\">Egypt</option>\n\t<option value=\"SV\">El Salvador</option>\n\t<option value=\"GQ\">Equatorial Guinea</option>\n\t<option value=\"ER\">Eritrea</option>\n\t<option value=\"EE\">Estonia</option>\n\t<option value=\"ET\">Ethiopia</option>\n\t<option value=\"FK\">Falkland Islands (Malvinas)</option>\n\t<option value=\"FO\">Faroe Islands</option>\n\t<option value=\"FJ\">Fiji</option>\n\t<option value=\"FI\">Finland</option>\n\t<option value=\"FR\">France</option>\n\t<option value=\"GF\">French Guiana</option>\n\t<option value=\"PF\">French Polynesia</option>\n\t<option value=\"TF\">French Southern Territories</option>\n\t<option value=\"GA\">Gabon</option>\n\t<option value=\"GM\">Gambia</option>\n\t<option value=\"GE\">Georgia</option>\n\t<option value=\"DE\">Germany</option>\n\t<option value=\"GH\">Ghana</option>\n\t<option value=\"GI\">Gibraltar</option>\n\t<option value=\"GR\">Greece</option>\n\t<option value=\"GL\">Greenland</option>\n\t<option value=\"GD\">Grenada</option>\n\t<option value=\"GP\">Guadeloupe</option>\n\t<option value=\"GU\">Guam</option>\n\t<option value=\"GT\">Guatemala</option>\n\t<option value=\"GG\">Guernsey</option>\n\t<option value=\"GN\">Guinea</option>\n\t<option value=\"GW\">Guinea-Bissau</option>\n\t<option value=\"GY\">Guyana</option>\n\t<option value=\"HT\">Haiti</option>\n\t<option value=\"HM\">Heard Island and McDonald Islands</option>\n\t<option value=\"VA\">Holy See (Vatican City State)</option>\n\t<option value=\"HN\">Honduras</option>\n\t<option value=\"HK\">Hong Kong</option>\n\t<option value=\"HU\">Hungary</option>\n\t<option value=\"IS\">Iceland</option>\n\t<option value=\"IN\">India</option>\n\t<option value=\"ID\">Indonesia</option>\n\t<option value=\"IR\">Iran, Islamic Republic of</option>\n\t<option value=\"IQ\">Iraq</option>\n\t<option value=\"IE\">Ireland</option>\n\t<option value=\"IM\">Isle of Man</option>\n\t<option value=\"IL\">Israel</option>\n\t<option value=\"IT\">Italy</option>\n\t<option value=\"JM\">Jamaica</option>\n\t<option value=\"JP\">Japan</option>\n\t<option value=\"JE\">Jersey</option>\n\t<option value=\"JO\">Jordan</option>\n\t<option value=\"KZ\">Kazakhstan</option>\n\t<option value=\"KE\">Kenya</option>\n\t<option value=\"KI\">Kiribati</option>\n\t<option value=\"KP\">Korea, Democratic People's Republic of</option>\n\t<option value=\"KR\">Korea, Republic of</option>\n\t<option value=\"KW\">Kuwait</option>\n\t<option value=\"KG\">Kyrgyzstan</option>\n\t<option value=\"LA\">Lao People's Democratic Republic</option>\n\t<option value=\"LV\">Latvia</option>\n\t<option value=\"LB\">Lebanon</option>\n\t<option value=\"LS\">Lesotho</option>\n\t<option value=\"LR\">Liberia</option>\n\t<option value=\"LY\">Libya</option>\n\t<option value=\"LI\">Liechtenstein</option>\n\t<option value=\"LT\">Lithuania</option>\n\t<option value=\"LU\">Luxembourg</option>\n\t<option value=\"MO\">Macao</option>\n\t<option value=\"MK\">Macedonia, the former Yugoslav Republic of</option>\n\t<option value=\"MG\">Madagascar</option>\n\t<option value=\"MW\">Malawi</option>\n\t<option value=\"MY\">Malaysia</option>\n\t<option value=\"MV\">Maldives</option>\n\t<option value=\"ML\">Mali</option>\n\t<option value=\"MT\">Malta</option>\n\t<option value=\"MH\">Marshall Islands</option>\n\t<option value=\"MQ\">Martinique</option>\n\t<option value=\"MR\">Mauritania</option>\n\t<option value=\"MU\">Mauritius</option>\n\t<option value=\"YT\">Mayotte</option>\n\t<option value=\"MX\">Mexico</option>\n\t<option value=\"FM\">Micronesia, Federated States of</option>\n\t<option value=\"MD\">Moldova, Republic of</option>\n\t<option value=\"MC\">Monaco</option>\n\t<option value=\"MN\">Mongolia</option>\n\t<option value=\"ME\">Montenegro</option>\n\t<option value=\"MS\">Montserrat</option>\n\t<option value=\"MA\">Morocco</option>\n\t<option value=\"MZ\">Mozambique</option>\n\t<option value=\"MM\">Myanmar</option>\n\t<option value=\"NA\">Namibia</option>\n\t<option value=\"NR\">Nauru</option>\n\t<option value=\"NP\">Nepal</option>\n\t<option value=\"NL\">Netherlands</option>\n\t<option value=\"NC\">New Caledonia</option>\n\t<option value=\"NZ\">New Zealand</option>\n\t<option value=\"NI\">Nicaragua</option>\n\t<option value=\"NE\">Niger</option>\n\t<option value=\"NG\">Nigeria</option>\n\t<option value=\"NU\">Niue</option>\n\t<option value=\"NF\">Norfolk Island</option>\n\t<option value=\"MP\">Northern Mariana Islands</option>\n\t<option value=\"NO\">Norway</option>\n\t<option value=\"OM\">Oman</option>\n\t<option value=\"PK\">Pakistan</option>\n\t<option value=\"PW\">Palau</option>\n\t<option value=\"PS\">Palestinian Territory, Occupied</option>\n\t<option value=\"PA\">Panama</option>\n\t<option value=\"PG\">Papua New Guinea</option>\n\t<option value=\"PY\">Paraguay</option>\n\t<option value=\"PE\">Peru</option>\n\t<option value=\"PH\">Philippines</option>\n\t<option value=\"PN\">Pitcairn</option>\n\t<option value=\"PL\">Poland</option>\n\t<option value=\"PT\">Portugal</option>\n\t<option value=\"PR\">Puerto Rico</option>\n\t<option value=\"QA\">Qatar</option>\n\t<option value=\"RE\">Réunion</option>\n\t<option value=\"RO\">Romania</option>\n\t<option value=\"RU\">Russian Federation</option>\n\t<option value=\"RW\">Rwanda</option>\n\t<option value=\"BL\">Saint Barthélemy</option>\n\t<option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</option>\n\t<option value=\"KN\">Saint Kitts and Nevis</option>\n\t<option value=\"LC\">Saint Lucia</option>\n\t<option value=\"MF\">Saint Martin (French part)</option>\n\t<option value=\"PM\">Saint Pierre and Miquelon</option>\n\t<option value=\"VC\">Saint Vincent and the Grenadines</option>\n\t<option value=\"WS\">Samoa</option>\n\t<option value=\"SM\">San Marino</option>\n\t<option value=\"ST\">Sao Tome and Principe</option>\n\t<option value=\"SA\">Saudi Arabia</option>\n\t<option value=\"SN\">Senegal</option>\n\t<option value=\"RS\">Serbia</option>\n\t<option value=\"SC\">Seychelles</option>\n\t<option value=\"SL\">Sierra Leone</option>\n\t<option value=\"SG\">Singapore</option>\n\t<option value=\"SX\">Sint Maarten (Dutch part)</option>\n\t<option value=\"SK\">Slovakia</option>\n\t<option value=\"SI\">Slovenia</option>\n\t<option value=\"SB\">Solomon Islands</option>\n\t<option value=\"SO\">Somalia</option>\n\t<option value=\"ZA\">South Africa</option>\n\t<option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n\t<option value=\"SS\">South Sudan</option>\n\t<option value=\"ES\">Spain</option>\n\t<option value=\"LK\">Sri Lanka</option>\n\t<option value=\"SD\">Sudan</option>\n\t<option value=\"SR\">Suriname</option>\n\t<option value=\"SJ\">Svalbard and Jan Mayen</option>\n\t<option value=\"SZ\">Swaziland</option>\n\t<option value=\"SE\">Sweden</option>\n\t<option value=\"CH\">Switzerland</option>\n\t<option value=\"SY\">Syrian Arab Republic</option>\n\t<option value=\"TW\">Taiwan, Province of China</option>\n\t<option value=\"TJ\">Tajikistan</option>\n\t<option value=\"TZ\">Tanzania, United Republic of</option>\n\t<option value=\"TH\">Thailand</option>\n\t<option value=\"TL\">Timor-Leste</option>\n\t<option value=\"TG\">Togo</option>\n\t<option value=\"TK\">Tokelau</option>\n\t<option value=\"TO\">Tonga</option>\n\t<option value=\"TT\">Trinidad and Tobago</option>\n\t<option value=\"TN\">Tunisia</option>\n\t<option value=\"TR\">Turkey</option>\n\t<option value=\"TM\">Turkmenistan</option>\n\t<option value=\"TC\">Turks and Caicos Islands</option>\n\t<option value=\"TV\">Tuvalu</option>\n\t<option value=\"UG\">Uganda</option>\n\t<option value=\"UA\">Ukraine</option>\n\t<option value=\"AE\">United Arab Emirates</option>\n\t<option value=\"GB\">United Kingdom</option>\n\t<option value=\"US\">United States</option>\n\t<option value=\"UM\">United States Minor Outlying Islands</option>\n\t<option value=\"UY\">Uruguay</option>\n\t<option value=\"UZ\">Uzbekistan</option>\n\t<option value=\"VU\">Vanuatu</option>\n\t<option value=\"VE\">Venezuela, Bolivarian Republic of</option>\n\t<option value=\"VN\">Viet Nam</option>\n\t<option value=\"VG\">Virgin Islands, British</option>\n\t<option value=\"VI\">Virgin Islands, U.S.</option>\n\t<option value=\"WF\">Wallis and Futuna</option>\n\t<option value=\"EH\">Western Sahara</option>\n\t<option value=\"YE\">Yemen</option>\n\t<option value=\"ZM\">Zambia</option>\n\t<option value=\"ZW\">Zimbabwe</option>\n  </select><br><br>\n      Timezone <span style=\"color: red\">* </span><br><br>\n\t<select #timezone name=\"timezone\" id=\"timezone\" class=\"inputdropdown\">\n\t\t\t\t<optgroup label=\"Africa\">\n\t\t\t<option value=\"Africa/Abidjan\" label=\"Abidjan\">Abidjan</option>\n<option value=\"Africa/Accra\" label=\"Accra\">Accra</option>\n<option value=\"Africa/Addis_Ababa\" label=\"Addis Ababa\">Addis Ababa</option>\n<option value=\"Africa/Algiers\" label=\"Algiers\">Algiers</option>\n<option value=\"Africa/Asmara\" label=\"Asmara\">Asmara</option>\n<option value=\"Africa/Asmera\" label=\"Asmera\">Asmera</option>\n<option value=\"Africa/Bamako\" label=\"Bamako\">Bamako</option>\n<option value=\"Africa/Bangui\" label=\"Bangui\">Bangui</option>\n<option value=\"Africa/Banjul\" label=\"Banjul\">Banjul</option>\n<option value=\"Africa/Bissau\" label=\"Bissau\">Bissau</option>\n<option value=\"Africa/Blantyre\" label=\"Blantyre\">Blantyre</option>\n<option value=\"Africa/Brazzaville\" label=\"Brazzaville\">Brazzaville</option>\n<option value=\"Africa/Bujumbura\" label=\"Bujumbura\">Bujumbura</option>\n<option value=\"Africa/Cairo\" label=\"Cairo\">Cairo</option>\n<option value=\"Africa/Casablanca\" label=\"Casablanca\">Casablanca</option>\n<option value=\"Africa/Ceuta\" label=\"Ceuta\">Ceuta</option>\n<option value=\"Africa/Conakry\" label=\"Conakry\">Conakry</option>\n<option value=\"Africa/Dakar\" label=\"Dakar\">Dakar</option>\n<option value=\"Africa/Dar_es_Salaam\" label=\"Dar es Salaam\">Dar es Salaam</option>\n<option value=\"Africa/Djibouti\" label=\"Djibouti\">Djibouti</option>\n<option value=\"Africa/Douala\" label=\"Douala\">Douala</option>\n<option value=\"Africa/El_Aaiun\" label=\"El Aaiun\">El Aaiun</option>\n<option value=\"Africa/Freetown\" label=\"Freetown\">Freetown</option>\n<option value=\"Africa/Gaborone\" label=\"Gaborone\">Gaborone</option>\n<option value=\"Africa/Harare\" label=\"Harare\">Harare</option>\n<option value=\"Africa/Johannesburg\" label=\"Johannesburg\">Johannesburg</option>\n<option value=\"Africa/Kampala\" label=\"Kampala\">Kampala</option>\n<option value=\"Africa/Khartoum\" label=\"Khartoum\">Khartoum</option>\n<option value=\"Africa/Kigali\" label=\"Kigali\">Kigali</option>\n<option value=\"Africa/Kinshasa\" label=\"Kinshasa\">Kinshasa</option>\n<option value=\"Africa/Lagos\" label=\"Lagos\">Lagos</option>\n<option value=\"Africa/Libreville\" label=\"Libreville\">Libreville</option>\n<option value=\"Africa/Lome\" label=\"Lome\">Lome</option>\n<option value=\"Africa/Luanda\" label=\"Luanda\">Luanda</option>\n<option value=\"Africa/Lubumbashi\" label=\"Lubumbashi\">Lubumbashi</option>\n<option value=\"Africa/Lusaka\" label=\"Lusaka\">Lusaka</option>\n<option value=\"Africa/Malabo\" label=\"Malabo\">Malabo</option>\n<option value=\"Africa/Maputo\" label=\"Maputo\">Maputo</option>\n<option value=\"Africa/Maseru\" label=\"Maseru\">Maseru</option>\n<option value=\"Africa/Mbabane\" label=\"Mbabane\">Mbabane</option>\n<option value=\"Africa/Mogadishu\" label=\"Mogadishu\">Mogadishu</option>\n<option value=\"Africa/Monrovia\" label=\"Monrovia\">Monrovia</option>\n<option value=\"Africa/Nairobi\" label=\"Nairobi\">Nairobi</option>\n<option value=\"Africa/Ndjamena\" label=\"Ndjamena\">Ndjamena</option>\n<option value=\"Africa/Niamey\" label=\"Niamey\">Niamey</option>\n<option value=\"Africa/Nouakchott\" label=\"Nouakchott\">Nouakchott</option>\n<option value=\"Africa/Ouagadougou\" label=\"Ouagadougou\">Ouagadougou</option>\n<option value=\"Africa/Porto-Novo\" label=\"Porto-Novo\">Porto-Novo</option>\n<option value=\"Africa/Sao_Tome\" label=\"Sao Tome\">Sao Tome</option>\n<option value=\"Africa/Timbuktu\" label=\"Timbuktu\">Timbuktu</option>\n<option value=\"Africa/Tripoli\" label=\"Tripoli\">Tripoli</option>\n<option value=\"Africa/Tunis\" label=\"Tunis\">Tunis</option>\n<option value=\"Africa/Windhoek\" label=\"Windhoek\">Windhoek</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"America\">\n\t\t\t<option value=\"America/Adak\" label=\"Adak\">Adak</option>\n<option value=\"America/Anchorage\" label=\"Anchorage\">Anchorage</option>\n<option value=\"America/Anguilla\" label=\"Anguilla\">Anguilla</option>\n<option value=\"America/Antigua\" label=\"Antigua\">Antigua</option>\n<option value=\"America/Araguaina\" label=\"Araguaina\">Araguaina</option>\n<option value=\"America/Argentina/Buenos_Aires\" label=\"Argentina (Buenos Aires)\">Argentina (Buenos Aires)</option>\n<option value=\"America/Argentina/Catamarca\" label=\"Argentina (Catamarca)\">Argentina (Catamarca)</option>\n<option value=\"America/Argentina/ComodRivadavia\" label=\"Argentina (ComodRivadavia)\">Argentina (ComodRivadavia)</option>\n<option value=\"America/Argentina/Cordoba\" label=\"Argentina (Cordoba)\">Argentina (Cordoba)</option>\n<option value=\"America/Argentina/Jujuy\" label=\"Argentina (Jujuy)\">Argentina (Jujuy)</option>\n<option value=\"America/Argentina/La_Rioja\" label=\"Argentina (La Rioja)\">Argentina (La Rioja)</option>\n<option value=\"America/Argentina/Mendoza\" label=\"Argentina (Mendoza)\">Argentina (Mendoza)</option>\n<option value=\"America/Argentina/Rio_Gallegos\" label=\"Argentina (Rio Gallegos)\">Argentina (Rio Gallegos)</option>\n<option value=\"America/Argentina/Salta\" label=\"Argentina (Salta)\">Argentina (Salta)</option>\n<option value=\"America/Argentina/San_Juan\" label=\"Argentina (San Juan)\">Argentina (San Juan)</option>\n<option value=\"America/Argentina/San_Luis\" label=\"Argentina (San Luis)\">Argentina (San Luis)</option>\n<option value=\"America/Argentina/Tucuman\" label=\"Argentina (Tucuman)\">Argentina (Tucuman)</option>\n<option value=\"America/Argentina/Ushuaia\" label=\"Argentina (Ushuaia)\">Argentina (Ushuaia)</option>\n<option value=\"America/Aruba\" label=\"Aruba\">Aruba</option>\n<option value=\"America/Asuncion\" label=\"Asuncion\">Asuncion</option>\n<option value=\"America/Atikokan\" label=\"Atikokan\">Atikokan</option>\n<option value=\"America/Atka\" label=\"Atka\">Atka</option>\n<option value=\"America/Bahia\" label=\"Bahia\">Bahia</option>\n<option value=\"America/Barbados\" label=\"Barbados\">Barbados</option>\n<option value=\"America/Belem\" label=\"Belem\">Belem</option>\n<option value=\"America/Belize\" label=\"Belize\">Belize</option>\n<option value=\"America/Blanc-Sablon\" label=\"Blanc-Sablon\">Blanc-Sablon</option>\n<option value=\"America/Boa_Vista\" label=\"Boa Vista\">Boa Vista</option>\n<option value=\"America/Bogota\" label=\"Bogota\">Bogota</option>\n<option value=\"America/Boise\" label=\"Boise\">Boise</option>\n<option value=\"America/Buenos_Aires\" label=\"Buenos Aires\">Buenos Aires</option>\n<option value=\"America/Cambridge_Bay\" label=\"Cambridge Bay\">Cambridge Bay</option>\n<option value=\"America/Campo_Grande\" label=\"Campo Grande\">Campo Grande</option>\n<option value=\"America/Cancun\" label=\"Cancun\">Cancun</option>\n<option value=\"America/Caracas\" label=\"Caracas\">Caracas</option>\n<option value=\"America/Catamarca\" label=\"Catamarca\">Catamarca</option>\n<option value=\"America/Cayenne\" label=\"Cayenne\">Cayenne</option>\n<option value=\"America/Cayman\" label=\"Cayman\">Cayman</option>\n<option value=\"America/Chicago\" label=\"Chicago\">Chicago</option>\n<option value=\"America/Chihuahua\" label=\"Chihuahua\">Chihuahua</option>\n<option value=\"America/Coral_Harbour\" label=\"Coral Harbour\">Coral Harbour</option>\n<option value=\"America/Cordoba\" label=\"Cordoba\">Cordoba</option>\n<option value=\"America/Costa_Rica\" label=\"Costa Rica\">Costa Rica</option>\n<option value=\"America/Cuiaba\" label=\"Cuiaba\">Cuiaba</option>\n<option value=\"America/Curacao\" label=\"Curacao\">Curacao</option>\n<option value=\"America/Danmarkshavn\" label=\"Danmarkshavn\">Danmarkshavn</option>\n<option value=\"America/Dawson\" label=\"Dawson\">Dawson</option>\n<option value=\"America/Dawson_Creek\" label=\"Dawson Creek\">Dawson Creek</option>\n<option value=\"America/Denver\" label=\"Denver\">Denver</option>\n<option value=\"America/Detroit\" label=\"Detroit\">Detroit</option>\n<option value=\"America/Dominica\" label=\"Dominica\">Dominica</option>\n<option value=\"America/Edmonton\" label=\"Edmonton\">Edmonton</option>\n<option value=\"America/Eirunepe\" label=\"Eirunepe\">Eirunepe</option>\n<option value=\"America/El_Salvador\" label=\"El Salvador\">El Salvador</option>\n<option value=\"America/Ensenada\" label=\"Ensenada\">Ensenada</option>\n<option value=\"America/Fort_Wayne\" label=\"Fort Wayne\">Fort Wayne</option>\n<option value=\"America/Fortaleza\" label=\"Fortaleza\">Fortaleza</option>\n<option value=\"America/Glace_Bay\" label=\"Glace Bay\">Glace Bay</option>\n<option value=\"America/Godthab\" label=\"Godthab\">Godthab</option>\n<option value=\"America/Goose_Bay\" label=\"Goose Bay\">Goose Bay</option>\n<option value=\"America/Grand_Turk\" label=\"Grand Turk\">Grand Turk</option>\n<option value=\"America/Grenada\" label=\"Grenada\">Grenada</option>\n<option value=\"America/Guadeloupe\" label=\"Guadeloupe\">Guadeloupe</option>\n<option value=\"America/Guatemala\" label=\"Guatemala\">Guatemala</option>\n<option value=\"America/Guayaquil\" label=\"Guayaquil\">Guayaquil</option>\n<option value=\"America/Guyana\" label=\"Guyana\">Guyana</option>\n<option value=\"America/Halifax\" label=\"Halifax\">Halifax</option>\n<option value=\"America/Havana\" label=\"Havana\">Havana</option>\n<option value=\"America/Hermosillo\" label=\"Hermosillo\">Hermosillo</option>\n<option value=\"America/Indiana/Indianapolis\" label=\"Indiana (Indianapolis)\">Indiana (Indianapolis)</option>\n<option value=\"America/Indiana/Knox\" label=\"Indiana (Knox)\">Indiana (Knox)</option>\n<option value=\"America/Indiana/Marengo\" label=\"Indiana (Marengo)\">Indiana (Marengo)</option>\n<option value=\"America/Indiana/Petersburg\" label=\"Indiana (Petersburg)\">Indiana (Petersburg)</option>\n<option value=\"America/Indiana/Tell_City\" label=\"Indiana (Tell City)\">Indiana (Tell City)</option>\n<option value=\"America/Indiana/Vevay\" label=\"Indiana (Vevay)\">Indiana (Vevay)</option>\n<option value=\"America/Indiana/Vincennes\" label=\"Indiana (Vincennes)\">Indiana (Vincennes)</option>\n<option value=\"America/Indiana/Winamac\" label=\"Indiana (Winamac)\">Indiana (Winamac)</option>\n<option value=\"America/Indianapolis\" label=\"Indianapolis\">Indianapolis</option>\n<option value=\"America/Inuvik\" label=\"Inuvik\">Inuvik</option>\n<option value=\"America/Iqaluit\" label=\"Iqaluit\">Iqaluit</option>\n<option value=\"America/Jamaica\" label=\"Jamaica\">Jamaica</option>\n<option value=\"America/Jujuy\" label=\"Jujuy\">Jujuy</option>\n<option value=\"America/Juneau\" label=\"Juneau\">Juneau</option>\n<option value=\"America/Kentucky/Louisville\" label=\"Kentucky (Louisville)\">Kentucky (Louisville)</option>\n<option value=\"America/Kentucky/Monticello\" label=\"Kentucky (Monticello)\">Kentucky (Monticello)</option>\n<option value=\"America/Knox_IN\" label=\"Knox IN\">Knox IN</option>\n<option value=\"America/La_Paz\" label=\"La Paz\">La Paz</option>\n<option value=\"America/Lima\" label=\"Lima\">Lima</option>\n<option value=\"America/Los_Angeles\" label=\"Los Angeles\">Los Angeles</option>\n<option value=\"America/Louisville\" label=\"Louisville\">Louisville</option>\n<option value=\"America/Maceio\" label=\"Maceio\">Maceio</option>\n<option value=\"America/Managua\" label=\"Managua\">Managua</option>\n<option value=\"America/Manaus\" label=\"Manaus\">Manaus</option>\n<option value=\"America/Marigot\" label=\"Marigot\">Marigot</option>\n<option value=\"America/Martinique\" label=\"Martinique\">Martinique</option>\n<option value=\"America/Mazatlan\" label=\"Mazatlan\">Mazatlan</option>\n<option value=\"America/Mendoza\" label=\"Mendoza\">Mendoza</option>\n<option value=\"America/Menominee\" label=\"Menominee\">Menominee</option>\n<option value=\"America/Merida\" label=\"Merida\">Merida</option>\n<option value=\"America/Mexico_City\" label=\"Mexico City\">Mexico City</option>\n<option value=\"America/Miquelon\" label=\"Miquelon\">Miquelon</option>\n<option value=\"America/Moncton\" label=\"Moncton\">Moncton</option>\n<option value=\"America/Monterrey\" label=\"Monterrey\">Monterrey</option>\n<option value=\"America/Montevideo\" label=\"Montevideo\">Montevideo</option>\n<option value=\"America/Montreal\" label=\"Montreal\">Montreal</option>\n<option value=\"America/Montserrat\" label=\"Montserrat\">Montserrat</option>\n<option value=\"America/Nassau\" label=\"Nassau\">Nassau</option>\n<option value=\"America/New_York\" label=\"New York\">New York</option>\n<option value=\"America/Nipigon\" label=\"Nipigon\">Nipigon</option>\n<option value=\"America/Nome\" label=\"Nome\">Nome</option>\n<option value=\"America/Noronha\" label=\"Noronha\">Noronha</option>\n<option value=\"America/North_Dakota/Center\" label=\"North Dakota (Center)\">North Dakota (Center)</option>\n<option value=\"America/North_Dakota/New_Salem\" label=\"North Dakota (New Salem)\">North Dakota (New Salem)</option>\n<option value=\"America/Panama\" label=\"Panama\">Panama</option>\n<option value=\"America/Pangnirtung\" label=\"Pangnirtung\">Pangnirtung</option>\n<option value=\"America/Paramaribo\" label=\"Paramaribo\">Paramaribo</option>\n<option value=\"America/Phoenix\" label=\"Phoenix\">Phoenix</option>\n<option value=\"America/Port-au-Prince\" label=\"Port-au-Prince\">Port-au-Prince</option>\n<option value=\"America/Port_of_Spain\" label=\"Port of Spain\">Port of Spain</option>\n<option value=\"America/Porto_Acre\" label=\"Porto Acre\">Porto Acre</option>\n<option value=\"America/Porto_Velho\" label=\"Porto Velho\">Porto Velho</option>\n<option value=\"America/Puerto_Rico\" label=\"Puerto Rico\">Puerto Rico</option>\n<option value=\"America/Rainy_River\" label=\"Rainy River\">Rainy River</option>\n<option value=\"America/Rankin_Inlet\" label=\"Rankin Inlet\">Rankin Inlet</option>\n<option value=\"America/Recife\" label=\"Recife\">Recife</option>\n<option value=\"America/Regina\" label=\"Regina\">Regina</option>\n<option value=\"America/Resolute\" label=\"Resolute\">Resolute</option>\n<option value=\"America/Rio_Branco\" label=\"Rio Branco\">Rio Branco</option>\n<option value=\"America/Rosario\" label=\"Rosario\">Rosario</option>\n<option value=\"America/Santarem\" label=\"Santarem\">Santarem</option>\n<option value=\"America/Santiago\" label=\"Santiago\">Santiago</option>\n<option value=\"America/Santo_Domingo\" label=\"Santo Domingo\">Santo Domingo</option>\n<option value=\"America/Sao_Paulo\" label=\"Sao Paulo\">Sao Paulo</option>\n<option value=\"America/Scoresbysund\" label=\"Scoresbysund\">Scoresbysund</option>\n<option value=\"America/Shiprock\" label=\"Shiprock\">Shiprock</option>\n<option value=\"America/St_Barthelemy\" label=\"St Barthelemy\">St Barthelemy</option>\n<option value=\"America/St_Johns\" label=\"St Johns\">St Johns</option>\n<option value=\"America/St_Kitts\" label=\"St Kitts\">St Kitts</option>\n<option value=\"America/St_Lucia\" label=\"St Lucia\">St Lucia</option>\n<option value=\"America/St_Thomas\" label=\"St Thomas\">St Thomas</option>\n<option value=\"America/St_Vincent\" label=\"St Vincent\">St Vincent</option>\n<option value=\"America/Swift_Current\" label=\"Swift Current\">Swift Current</option>\n<option value=\"America/Tegucigalpa\" label=\"Tegucigalpa\">Tegucigalpa</option>\n<option value=\"America/Thule\" label=\"Thule\">Thule</option>\n<option value=\"America/Thunder_Bay\" label=\"Thunder Bay\">Thunder Bay</option>\n<option value=\"America/Tijuana\" label=\"Tijuana\">Tijuana</option>\n<option value=\"America/Toronto\" label=\"Toronto\">Toronto</option>\n<option value=\"America/Tortola\" label=\"Tortola\">Tortola</option>\n<option value=\"America/Vancouver\" label=\"Vancouver\">Vancouver</option>\n<option value=\"America/Virgin\" label=\"Virgin\">Virgin</option>\n<option value=\"America/Whitehorse\" label=\"Whitehorse\">Whitehorse</option>\n<option value=\"America/Winnipeg\" label=\"Winnipeg\">Winnipeg</option>\n<option value=\"America/Yakutat\" label=\"Yakutat\">Yakutat</option>\n<option value=\"America/Yellowknife\" label=\"Yellowknife\">Yellowknife</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Antarctica\">\n\t\t\t<option value=\"Antarctica/Casey\" label=\"Casey\">Casey</option>\n<option value=\"Antarctica/Davis\" label=\"Davis\">Davis</option>\n<option value=\"Antarctica/DumontDUrville\" label=\"DumontDUrville\">DumontDUrville</option>\n<option value=\"Antarctica/Mawson\" label=\"Mawson\">Mawson</option>\n<option value=\"Antarctica/McMurdo\" label=\"McMurdo\">McMurdo</option>\n<option value=\"Antarctica/Palmer\" label=\"Palmer\">Palmer</option>\n<option value=\"Antarctica/Rothera\" label=\"Rothera\">Rothera</option>\n<option value=\"Antarctica/South_Pole\" label=\"South Pole\">South Pole</option>\n<option value=\"Antarctica/Syowa\" label=\"Syowa\">Syowa</option>\n<option value=\"Antarctica/Vostok\" label=\"Vostok\">Vostok</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Arctic\">\n\t\t\t<option value=\"Arctic/Longyearbyen\" label=\"Longyearbyen\">Longyearbyen</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Asia\">\n\t\t\t<option value=\"Asia/Aden\" label=\"Aden\">Aden</option>\n<option value=\"Asia/Almaty\" label=\"Almaty\">Almaty</option>\n<option value=\"Asia/Amman\" label=\"Amman\">Amman</option>\n<option value=\"Asia/Anadyr\" label=\"Anadyr\">Anadyr</option>\n<option value=\"Asia/Aqtau\" label=\"Aqtau\">Aqtau</option>\n<option value=\"Asia/Aqtobe\" label=\"Aqtobe\">Aqtobe</option>\n<option value=\"Asia/Ashgabat\" label=\"Ashgabat\">Ashgabat</option>\n<option value=\"Asia/Ashkhabad\" label=\"Ashkhabad\">Ashkhabad</option>\n<option value=\"Asia/Baghdad\" label=\"Baghdad\">Baghdad</option>\n<option value=\"Asia/Bahrain\" label=\"Bahrain\">Bahrain</option>\n<option value=\"Asia/Baku\" label=\"Baku\">Baku</option>\n<option value=\"Asia/Bangkok\" label=\"Bangkok\">Bangkok</option>\n<option value=\"Asia/Beirut\" label=\"Beirut\">Beirut</option>\n<option value=\"Asia/Bishkek\" label=\"Bishkek\">Bishkek</option>\n<option value=\"Asia/Brunei\" label=\"Brunei\">Brunei</option>\n<option value=\"Asia/Calcutta\" label=\"Calcutta\">Calcutta</option>\n<option value=\"Asia/Choibalsan\" label=\"Choibalsan\">Choibalsan</option>\n<option value=\"Asia/Chongqing\" label=\"Chongqing\">Chongqing</option>\n<option value=\"Asia/Chungking\" label=\"Chungking\">Chungking</option>\n<option value=\"Asia/Colombo\" label=\"Colombo\">Colombo</option>\n<option value=\"Asia/Dacca\" label=\"Dacca\">Dacca</option>\n<option value=\"Asia/Damascus\" label=\"Damascus\">Damascus</option>\n<option value=\"Asia/Dhaka\" label=\"Dhaka\">Dhaka</option>\n<option value=\"Asia/Dili\" label=\"Dili\">Dili</option>\n<option value=\"Asia/Dubai\" label=\"Dubai\">Dubai</option>\n<option value=\"Asia/Dushanbe\" label=\"Dushanbe\">Dushanbe</option>\n<option value=\"Asia/Gaza\" label=\"Gaza\">Gaza</option>\n<option value=\"Asia/Harbin\" label=\"Harbin\">Harbin</option>\n<option value=\"Asia/Ho_Chi_Minh\" label=\"Ho Chi Minh\">Ho Chi Minh</option>\n<option value=\"Asia/Hong_Kong\" label=\"Hong Kong\">Hong Kong</option>\n<option value=\"Asia/Hovd\" label=\"Hovd\">Hovd</option>\n<option value=\"Asia/Irkutsk\" label=\"Irkutsk\">Irkutsk</option>\n<option value=\"Asia/Istanbul\" label=\"Istanbul\">Istanbul</option>\n<option value=\"Asia/Jakarta\" label=\"Jakarta\">Jakarta</option>\n<option value=\"Asia/Jayapura\" label=\"Jayapura\">Jayapura</option>\n<option value=\"Asia/Jerusalem\" label=\"Jerusalem\">Jerusalem</option>\n<option value=\"Asia/Kabul\" label=\"Kabul\">Kabul</option>\n<option value=\"Asia/Kamchatka\" label=\"Kamchatka\">Kamchatka</option>\n<option value=\"Asia/Karachi\" label=\"Karachi\">Karachi</option>\n<option value=\"Asia/Kashgar\" label=\"Kashgar\">Kashgar</option>\n<option value=\"Asia/Kathmandu\" label=\"Kathmandu\">Kathmandu</option>\n<option value=\"Asia/Katmandu\" label=\"Katmandu\">Katmandu</option>\n<option value=\"Asia/Kolkata\" label=\"Kolkata\">Kolkata</option>\n<option value=\"Asia/Krasnoyarsk\" label=\"Krasnoyarsk\">Krasnoyarsk</option>\n<option value=\"Asia/Kuala_Lumpur\" label=\"Kuala Lumpur\">Kuala Lumpur</option>\n<option value=\"Asia/Kuching\" label=\"Kuching\">Kuching</option>\n<option value=\"Asia/Kuwait\" label=\"Kuwait\">Kuwait</option>\n<option value=\"Asia/Macao\" label=\"Macao\">Macao</option>\n<option value=\"Asia/Macau\" label=\"Macau\">Macau</option>\n<option value=\"Asia/Magadan\" label=\"Magadan\">Magadan</option>\n<option value=\"Asia/Makassar\" label=\"Makassar\">Makassar</option>\n<option value=\"Asia/Manila\" label=\"Manila\">Manila</option>\n<option value=\"Asia/Muscat\" label=\"Muscat\">Muscat</option>\n<option value=\"Asia/Nicosia\" label=\"Nicosia\">Nicosia</option>\n<option value=\"Asia/Novosibirsk\" label=\"Novosibirsk\">Novosibirsk</option>\n<option value=\"Asia/Omsk\" label=\"Omsk\">Omsk</option>\n<option value=\"Asia/Oral\" label=\"Oral\">Oral</option>\n<option value=\"Asia/Phnom_Penh\" label=\"Phnom Penh\">Phnom Penh</option>\n<option value=\"Asia/Pontianak\" label=\"Pontianak\">Pontianak</option>\n<option value=\"Asia/Pyongyang\" label=\"Pyongyang\">Pyongyang</option>\n<option value=\"Asia/Qatar\" label=\"Qatar\">Qatar</option>\n<option value=\"Asia/Qyzylorda\" label=\"Qyzylorda\">Qyzylorda</option>\n<option value=\"Asia/Rangoon\" label=\"Rangoon\">Rangoon</option>\n<option value=\"Asia/Riyadh\" label=\"Riyadh\">Riyadh</option>\n<option value=\"Asia/Saigon\" label=\"Saigon\">Saigon</option>\n<option value=\"Asia/Sakhalin\" label=\"Sakhalin\">Sakhalin</option>\n<option value=\"Asia/Samarkand\" label=\"Samarkand\">Samarkand</option>\n<option value=\"Asia/Seoul\" label=\"Seoul\">Seoul</option>\n<option value=\"Asia/Shanghai\" label=\"Shanghai\">Shanghai</option>\n<option value=\"Asia/Singapore\" label=\"Singapore\">Singapore</option>\n<option value=\"Asia/Taipei\" label=\"Taipei\">Taipei</option>\n<option value=\"Asia/Tashkent\" label=\"Tashkent\">Tashkent</option>\n<option value=\"Asia/Tbilisi\" label=\"Tbilisi\">Tbilisi</option>\n<option value=\"Asia/Tehran\" label=\"Tehran\">Tehran</option>\n<option value=\"Asia/Tel_Aviv\" label=\"Tel Aviv\">Tel Aviv</option>\n<option value=\"Asia/Thimbu\" label=\"Thimbu\">Thimbu</option>\n<option value=\"Asia/Thimphu\" label=\"Thimphu\">Thimphu</option>\n<option value=\"Asia/Tokyo\" label=\"Tokyo\">Tokyo</option>\n<option value=\"Asia/Ujung_Pandang\" label=\"Ujung Pandang\">Ujung Pandang</option>\n<option value=\"Asia/Ulaanbaatar\" label=\"Ulaanbaatar\">Ulaanbaatar</option>\n<option value=\"Asia/Ulan_Bator\" label=\"Ulan Bator\">Ulan Bator</option>\n<option value=\"Asia/Urumqi\" label=\"Urumqi\">Urumqi</option>\n<option value=\"Asia/Vientiane\" label=\"Vientiane\">Vientiane</option>\n<option value=\"Asia/Vladivostok\" label=\"Vladivostok\">Vladivostok</option>\n<option value=\"Asia/Yakutsk\" label=\"Yakutsk\">Yakutsk</option>\n<option value=\"Asia/Yekaterinburg\" label=\"Yekaterinburg\">Yekaterinburg</option>\n<option value=\"Asia/Yerevan\" label=\"Yerevan\">Yerevan</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Atlantic\">\n\t\t\t<option value=\"Atlantic/Azores\" label=\"Azores\">Azores</option>\n<option value=\"Atlantic/Bermuda\" label=\"Bermuda\">Bermuda</option>\n<option value=\"Atlantic/Canary\" label=\"Canary\">Canary</option>\n<option value=\"Atlantic/Cape_Verde\" label=\"Cape Verde\">Cape Verde</option>\n<option value=\"Atlantic/Faeroe\" label=\"Faeroe\">Faeroe</option>\n<option value=\"Atlantic/Faroe\" label=\"Faroe\">Faroe</option>\n<option value=\"Atlantic/Jan_Mayen\" label=\"Jan Mayen\">Jan Mayen</option>\n<option value=\"Atlantic/Madeira\" label=\"Madeira\">Madeira</option>\n<option value=\"Atlantic/Reykjavik\" label=\"Reykjavik\">Reykjavik</option>\n<option value=\"Atlantic/South_Georgia\" label=\"South Georgia\">South Georgia</option>\n<option value=\"Atlantic/St_Helena\" label=\"St Helena\">St Helena</option>\n<option value=\"Atlantic/Stanley\" label=\"Stanley\">Stanley</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Australia\">\n\t\t\t<option value=\"Australia/ACT\" label=\"ACT\">ACT</option>\n<option value=\"Australia/Adelaide\" label=\"Adelaide\">Adelaide</option>\n<option value=\"Australia/Brisbane\" label=\"Brisbane\">Brisbane</option>\n<option value=\"Australia/Broken_Hill\" label=\"Broken Hill\">Broken Hill</option>\n<option value=\"Australia/Canberra\" label=\"Canberra\">Canberra</option>\n<option value=\"Australia/Currie\" label=\"Currie\">Currie</option>\n<option value=\"Australia/Darwin\" label=\"Darwin\">Darwin</option>\n<option value=\"Australia/Eucla\" label=\"Eucla\">Eucla</option>\n<option value=\"Australia/Hobart\" label=\"Hobart\">Hobart</option>\n<option value=\"Australia/LHI\" label=\"LHI\">LHI</option>\n<option value=\"Australia/Lindeman\" label=\"Lindeman\">Lindeman</option>\n<option value=\"Australia/Lord_Howe\" label=\"Lord Howe\">Lord Howe</option>\n<option value=\"Australia/Melbourne\" label=\"Melbourne\">Melbourne</option>\n<option value=\"Australia/North\" label=\"North\">North</option>\n<option value=\"Australia/NSW\" label=\"NSW\">NSW</option>\n<option value=\"Australia/Perth\" label=\"Perth\">Perth</option>\n<option value=\"Australia/Queensland\" label=\"Queensland\">Queensland</option>\n<option value=\"Australia/South\" label=\"South\">South</option>\n<option value=\"Australia/Sydney\" label=\"Sydney\">Sydney</option>\n<option value=\"Australia/Tasmania\" label=\"Tasmania\">Tasmania</option>\n<option value=\"Australia/Victoria\" label=\"Victoria\">Victoria</option>\n<option value=\"Australia/West\" label=\"West\">West</option>\n<option value=\"Australia/Yancowinna\" label=\"Yancowinna\">Yancowinna</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Europe\">\n\t\t\t<option value=\"Europe/Amsterdam\" label=\"Amsterdam\">Amsterdam</option>\n<option value=\"Europe/Andorra\" label=\"Andorra\">Andorra</option>\n<option value=\"Europe/Athens\" label=\"Athens\">Athens</option>\n<option value=\"Europe/Belfast\" label=\"Belfast\">Belfast</option>\n<option value=\"Europe/Belgrade\" label=\"Belgrade\">Belgrade</option>\n<option value=\"Europe/Berlin\" label=\"Berlin\">Berlin</option>\n<option value=\"Europe/Bratislava\" label=\"Bratislava\">Bratislava</option>\n<option value=\"Europe/Brussels\" label=\"Brussels\">Brussels</option>\n<option value=\"Europe/Bucharest\" label=\"Bucharest\">Bucharest</option>\n<option value=\"Europe/Budapest\" label=\"Budapest\">Budapest</option>\n<option value=\"Europe/Chisinau\" label=\"Chisinau\">Chisinau</option>\n<option value=\"Europe/Copenhagen\" label=\"Copenhagen\">Copenhagen</option>\n<option value=\"Europe/Dublin\" label=\"Dublin\">Dublin</option>\n<option value=\"Europe/Gibraltar\" label=\"Gibraltar\">Gibraltar</option>\n<option value=\"Europe/Guernsey\" label=\"Guernsey\">Guernsey</option>\n<option value=\"Europe/Helsinki\" label=\"Helsinki\">Helsinki</option>\n<option value=\"Europe/Isle_of_Man\" label=\"Isle of Man\">Isle of Man</option>\n<option value=\"Europe/Istanbul\" label=\"Istanbul\">Istanbul</option>\n<option value=\"Europe/Jersey\" label=\"Jersey\">Jersey</option>\n<option value=\"Europe/Kaliningrad\" label=\"Kaliningrad\">Kaliningrad</option>\n<option value=\"Europe/Kiev\" label=\"Kiev\">Kiev</option>\n<option value=\"Europe/Lisbon\" label=\"Lisbon\">Lisbon</option>\n<option value=\"Europe/Ljubljana\" label=\"Ljubljana\">Ljubljana</option>\n<option value=\"Europe/London\" label=\"London\" selected=\"selected\">London</option>\n<option value=\"Europe/Luxembourg\" label=\"Luxembourg\">Luxembourg</option>\n<option value=\"Europe/Madrid\" label=\"Madrid\">Madrid</option>\n<option value=\"Europe/Malta\" label=\"Malta\">Malta</option>\n<option value=\"Europe/Mariehamn\" label=\"Mariehamn\">Mariehamn</option>\n<option value=\"Europe/Minsk\" label=\"Minsk\">Minsk</option>\n<option value=\"Europe/Monaco\" label=\"Monaco\">Monaco</option>\n<option value=\"Europe/Moscow\" label=\"Moscow\">Moscow</option>\n<option value=\"Europe/Nicosia\" label=\"Nicosia\">Nicosia</option>\n<option value=\"Europe/Oslo\" label=\"Oslo\">Oslo</option>\n<option value=\"Europe/Paris\" label=\"Paris\">Paris</option>\n<option value=\"Europe/Podgorica\" label=\"Podgorica\">Podgorica</option>\n<option value=\"Europe/Prague\" label=\"Prague\">Prague</option>\n<option value=\"Europe/Riga\" label=\"Riga\">Riga</option>\n<option value=\"Europe/Rome\" label=\"Rome\">Rome</option>\n<option value=\"Europe/Samara\" label=\"Samara\">Samara</option>\n<option value=\"Europe/San_Marino\" label=\"San Marino\">San Marino</option>\n<option value=\"Europe/Sarajevo\" label=\"Sarajevo\">Sarajevo</option>\n<option value=\"Europe/Simferopol\" label=\"Simferopol\">Simferopol</option>\n<option value=\"Europe/Skopje\" label=\"Skopje\">Skopje</option>\n<option value=\"Europe/Sofia\" label=\"Sofia\">Sofia</option>\n<option value=\"Europe/Stockholm\" label=\"Stockholm\">Stockholm</option>\n<option value=\"Europe/Tallinn\" label=\"Tallinn\">Tallinn</option>\n<option value=\"Europe/Tirane\" label=\"Tirane\">Tirane</option>\n<option value=\"Europe/Tiraspol\" label=\"Tiraspol\">Tiraspol</option>\n<option value=\"Europe/Uzhgorod\" label=\"Uzhgorod\">Uzhgorod</option>\n<option value=\"Europe/Vaduz\" label=\"Vaduz\">Vaduz</option>\n<option value=\"Europe/Vatican\" label=\"Vatican\">Vatican</option>\n<option value=\"Europe/Vienna\" label=\"Vienna\">Vienna</option>\n<option value=\"Europe/Vilnius\" label=\"Vilnius\">Vilnius</option>\n<option value=\"Europe/Volgograd\" label=\"Volgograd\">Volgograd</option>\n<option value=\"Europe/Warsaw\" label=\"Warsaw\">Warsaw</option>\n<option value=\"Europe/Zagreb\" label=\"Zagreb\">Zagreb</option>\n<option value=\"Europe/Zaporozhye\" label=\"Zaporozhye\">Zaporozhye</option>\n<option value=\"Europe/Zurich\" label=\"Zurich\">Zurich</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Indian\">\n\t\t\t<option value=\"Indian/Antananarivo\" label=\"Antananarivo\">Antananarivo</option>\n<option value=\"Indian/Chagos\" label=\"Chagos\">Chagos</option>\n<option value=\"Indian/Christmas\" label=\"Christmas\">Christmas</option>\n<option value=\"Indian/Cocos\" label=\"Cocos\">Cocos</option>\n<option value=\"Indian/Comoro\" label=\"Comoro\">Comoro</option>\n<option value=\"Indian/Kerguelen\" label=\"Kerguelen\">Kerguelen</option>\n<option value=\"Indian/Mahe\" label=\"Mahe\">Mahe</option>\n<option value=\"Indian/Maldives\" label=\"Maldives\">Maldives</option>\n<option value=\"Indian/Mauritius\" label=\"Mauritius\">Mauritius</option>\n<option value=\"Indian/Mayotte\" label=\"Mayotte\">Mayotte</option>\n<option value=\"Indian/Reunion\" label=\"Reunion\">Reunion</option>\n\t\t</optgroup>\n\t\t\t\t<optgroup label=\"Pacific\">\n\t\t\t<option value=\"Pacific/Apia\" label=\"Apia\">Apia</option>\n<option value=\"Pacific/Auckland\" label=\"Auckland\">Auckland</option>\n<option value=\"Pacific/Chatham\" label=\"Chatham\">Chatham</option>\n<option value=\"Pacific/Easter\" label=\"Easter\">Easter</option>\n<option value=\"Pacific/Efate\" label=\"Efate\">Efate</option>\n<option value=\"Pacific/Enderbury\" label=\"Enderbury\">Enderbury</option>\n<option value=\"Pacific/Fakaofo\" label=\"Fakaofo\">Fakaofo</option>\n<option value=\"Pacific/Fiji\" label=\"Fiji\">Fiji</option>\n<option value=\"Pacific/Funafuti\" label=\"Funafuti\">Funafuti</option>\n<option value=\"Pacific/Galapagos\" label=\"Galapagos\">Galapagos</option>\n<option value=\"Pacific/Gambier\" label=\"Gambier\">Gambier</option>\n<option value=\"Pacific/Guadalcanal\" label=\"Guadalcanal\">Guadalcanal</option>\n<option value=\"Pacific/Guam\" label=\"Guam\">Guam</option>\n<option value=\"Pacific/Honolulu\" label=\"Honolulu\">Honolulu</option>\n<option value=\"Pacific/Johnston\" label=\"Johnston\">Johnston</option>\n<option value=\"Pacific/Kiritimati\" label=\"Kiritimati\">Kiritimati</option>\n<option value=\"Pacific/Kosrae\" label=\"Kosrae\">Kosrae</option>\n<option value=\"Pacific/Kwajalein\" label=\"Kwajalein\">Kwajalein</option>\n<option value=\"Pacific/Majuro\" label=\"Majuro\">Majuro</option>\n<option value=\"Pacific/Marquesas\" label=\"Marquesas\">Marquesas</option>\n<option value=\"Pacific/Midway\" label=\"Midway\">Midway</option>\n<option value=\"Pacific/Nauru\" label=\"Nauru\">Nauru</option>\n<option value=\"Pacific/Niue\" label=\"Niue\">Niue</option>\n<option value=\"Pacific/Norfolk\" label=\"Norfolk\">Norfolk</option>\n<option value=\"Pacific/Noumea\" label=\"Noumea\">Noumea</option>\n<option value=\"Pacific/Pago_Pago\" label=\"Pago Pago\">Pago Pago</option>\n<option value=\"Pacific/Palau\" label=\"Palau\">Palau</option>\n<option value=\"Pacific/Pitcairn\" label=\"Pitcairn\">Pitcairn</option>\n<option value=\"Pacific/Ponape\" label=\"Ponape\">Ponape</option>\n<option value=\"Pacific/Port_Moresby\" label=\"Port Moresby\">Port Moresby</option>\n<option value=\"Pacific/Rarotonga\" label=\"Rarotonga\">Rarotonga</option>\n<option value=\"Pacific/Saipan\" label=\"Saipan\">Saipan</option>\n<option value=\"Pacific/Samoa\" label=\"Samoa\">Samoa</option>\n<option value=\"Pacific/Tahiti\" label=\"Tahiti\">Tahiti</option>\n<option value=\"Pacific/Tarawa\" label=\"Tarawa\">Tarawa</option>\n<option value=\"Pacific/Tongatapu\" label=\"Tongatapu\">Tongatapu</option>\n<option value=\"Pacific/Truk\" label=\"Truk\">Truk</option>\n<option value=\"Pacific/Wake\" label=\"Wake\">Wake</option>\n<option value=\"Pacific/Wallis\" label=\"Wallis\">Wallis</option>\n<option value=\"Pacific/Yap\" label=\"Yap\">Yap</option>\n\t\t</optgroup>\n\t\t\t</select><br><br>\n      Facebook <span style=\"font-size: 10px\">(Optional)</span><br>\n      <input #facebook><br><br>\n      Twitter <span style=\"font-size: 10px\">(Optional)</span><br>\n      <input #twitter><br><br>\n      Google+ <span style=\"font-size: 10px\">(Optional)</span><br>\n      <input #google><br><br>\n      <br><br>\n    </div>\n  </div>\n  <br>\n  <div class=\"register\" (click)=\"register(managername.value,phone.value,email.value,password.value,logo.value,clubname.value,description.value,website.value,map.value,add1.value,add2.value,city.value,state.value,postcode.value,country.value,timezone.value,facebook.value,twitter.value,google.value)\">\n\n    REGISTER\n  </div>\n  <br><br>\n</div>\n<img *ngIf=\"Clicked\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<img *ngIf=\"error\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div id=\"error\" *ngIf=\"error\" class=\"error\">\n<div class=\"errormsg\">\n  <h3>{{popupmsg}}</h3>\n  <p class=\"headings\">{{errormsg}}</p><br>\n</div>\n<button (click)=\"ok()\" class=\"ok\">OK</button>\n</div>\n<img *ngIf=\"Clicked\" src=\"/assets/pics/ajax-loader.gif\" class=\"load\">\n</html>\n"

/***/ }),

/***/ "./src/app/clubreg/clubreg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clubreg/clubreg.component.ts ***!
  \**********************************************/
/*! exports provided: ClubregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubregComponent", function() { return ClubregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clubreg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clubreg.service */ "./src/app/clubreg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClubregComponent = /** @class */ (function () {
    function ClubregComponent(clubregService, cdRef) {
        this.clubregService = clubregService;
        this.cdRef = cdRef;
        this.Clicked = false;
        this.error = false;
        this.re = /\S+@\S+\.\S+/;
        this.v = 0;
        this.popupmsg = 'ERROR!';
    }
    ClubregComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        this.change();
        this.change2();
        localStorage.setItem('sessionKey', 'clubreg');
    };
    ClubregComponent.prototype.change = function () {
        if (this.screenWidth > ((1300 / 730) * this.screenHeight)) {
            var img2 = document.getElementById('bi');
            img2.className = 'back2';
        }
        else {
            var img2 = document.getElementById('bi');
            img2.className = 'back1';
        }
    };
    ClubregComponent.prototype.change2 = function () {
        if (this.screenWidth < 600) {
            var overall = document.getElementById('overall');
            overall.className = 'overall2';
            var error = document.getElementById('error');
            if (error != null)
                error.className = 'error2';
        }
        else {
            var overall = document.getElementById('overall');
            overall.className = 'overall';
            var error = document.getElementById('error');
            if (error != null)
                error.className = 'error';
        }
    };
    ClubregComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
        this.change2();
    };
    ClubregComponent.prototype.register = function (managername, phone, email, password, logo, clubname, description, website, map, add1, add2, city, state, postcode, country, timezone, facebook, twitter, google) {
        this.popupmsg = 'Error!';
        this.errormsg = "Club registration hasn't been activated yet. Coach registration is active.";
        this.error = true;
        /*
        let compulsory = [managername, phone,email,password,logo,clubname,description,add1,city,state,postcode,country,timezone]
        let names = ["Manager Name","Phone","Email","Password","Logo","Club Name","Description","Address Line 1","City","State","Postcode","Country","Timezone"];
        let flag=0;
        for(let i=0;i<compulsory.length;i++)
        {
          if(compulsory[i]=='')
          {
            this.errormsg=names[i] + " field needs to be filled";
            this.error=true;
            flag=1;
            break;
          }
        }
        if(!this.re.test(email) && email!='')
        {
            this.errormsg="Email Invalid";
            flag=1;
        }
        if(flag==0)
        {
            this.Clicked=true;
            //Register to Database
            this.info='/register/clubreg/{"managername":"'+managername+'","phone":"'+phone+'","email":"'+email+
            '","password":"'+password+'","clubname":"'+clubname+'","description":"'+description+'","website":"'+website+
            '","add1":"'+add1+'","add2":"'+add2+'","city":"'+city+'","state":"'+state+'","postcode":"'+postcode+'","country":"'+country+'","facebook":"'+facebook+'","twitter":"'+twitter+
            '","google":"'+google+'"}';
            console.log(this.info);
            this.clubregService.register(this.info).subscribe(info=>{
              console.log(info);
              this.Clicked=false;
              if(info==true){
                this.popupmsg='CONGRATS!'
                this.errormsg="You have been registered.";
                this.error=true;
                this.v=1;
              }
              else{
                this.errormsg="Email has already been registered. Please use another email";
                this.error=true;
                flag=1;
              }
  
            });
        }*/
        this.cdRef.detectChanges();
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        console.log(this.screenWidth);
        this.change2();
    };
    ClubregComponent.prototype.ok = function () {
        this.error = false;
    };
    ClubregComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clubreg',
            template: __webpack_require__(/*! ./clubreg.component.html */ "./src/app/clubreg/clubreg.component.html"),
            styles: [__webpack_require__(/*! ./clubreg.component.css */ "./src/app/clubreg/clubreg.component.css")]
        }),
        __metadata("design:paramtypes", [_clubreg_service__WEBPACK_IMPORTED_MODULE_1__["ClubregService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ClubregComponent);
    return ClubregComponent;
}());



/***/ }),

/***/ "./src/app/coachreg.service.ts":
/*!*************************************!*\
  !*** ./src/app/coachreg.service.ts ***!
  \*************************************/
/*! exports provided: CoachregService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachregService", function() { return CoachregService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoachregService = /** @class */ (function () {
    function CoachregService(http) {
        this.http = http;
    }
    CoachregService.prototype.register = function (info) {
        return this.http.get(info);
    };
    CoachregService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CoachregService);
    return CoachregService;
}());



/***/ }),

/***/ "./src/app/coachreg/coachreg.component.css":
/*!*************************************************!*\
  !*** ./src/app/coachreg/coachreg.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back1{\n  position: fixed;\n  height: 101%;\n  top: -1%;\n  left: -1%;\n}\n\n.back2{\n  position: fixed;\n  width: 101%;\n  top: -1%;\n  left: -1%;\n}\n\n.watermark{\n  position: fixed;\n  height: 50%;\n  bottom: 2%;\n  left: 0%;\n}\n\n.form{\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 1px 1px 2px 2px lightgrey;\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  overflow-x: hidden;\n}\n\n.logo{\n  position: absolute;\n  width: 100px;\n  top: 0%;\n  left: 4%;\n}\n\n.headings{\n  font-size: 14px;\n  color: #7F7F7F;\n}\n\ninput{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n}\n\n.input{\n  font-size: 13px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n  resize: none;\n}\n\n.input2{\n  position: relative;\n  left: 50%;\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 50%;\n}\n\n.input3{\n  position: absolute;\n  right: 3%;\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 45%;\n}\n\n.inputdropdown{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  background-color: white;\n  width: 100%;\n  left: 5%;\n}\n\n.inputdropdown2{\n  position: absolute;\n  right: 3%;\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  background-color: white;\n  width: 47%;\n}\n\n.overall{\n  position: absolute;\n  top: 10%;\n  left: 55%;\n  width: 35%;\n}\n\n.overall2{\n  position: absolute;\n  top: 10%;\n  left: 3%;\n  width: 77%;\n}\n\n::-webkit-input-placeholder{\n  color: lightgrey\n}\n\n:-ms-input-placeholder{\n  color: lightgrey\n}\n\n::-ms-input-placeholder{\n  color: lightgrey\n}\n\n::placeholder{\n  color: lightgrey\n}\n\n.register{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  overflow-x: hidden;\n}\n\n.register:hover{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: black;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n  overflow-x: hidden;\n}\n\n.black{\n  position: fixed;\n  height: 102%;\n  width: 102%;\n  bottom: -1%;\n  right: -1%;\n  left: -1%;\n  opacity: 0.5;\n}\n\n.load{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.close{\n  font-size: 15px;\n  color: #70CBC4;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.add{\n  cursor: pointer;\n  color: #70CBC4;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.user{\n  position: absolute;\n  width: 135px;\n  height: 135px;\n  border: 3px solid #FE9953;\n  border-radius: 50%;\n  left: 20px;\n  top: 60px;\n}\n\n.user:hover{\n  position: absolute;\n  width: 135px;\n  height: 135px;\n  border: 3px solid #FE9953;\n  border-radius: 50%;\n  left: 20px;\n  top: 60px;\n  cursor: pointer;\n}\n\n.userphoto{\n  position: relative;\n  width: 135px;\n  height: 135px;\n  border: 3px solid #FE9953;\n  border-radius: 50%;\n  left: 0px;\n}\n\n.name1{\n  position: relative;\n  width: 100%;\n}\n\n.name2{\n  position: absolute;\n  left: 45%;\n  width: 50%;\n  top: 100px;\n}\n\n.error{\n  position: fixed;\n  width: 40%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.error2{\n  position: fixed;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.errormsg{\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n}\n\n.ok{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/coachreg/coachreg.component.html":
/*!**************************************************!*\
  !*** ./src/app/coachreg/coachreg.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\">\n  <img id=\"bi\" src=\"/assets/pics/BG_registration_coach_hover.png\" class=\"back1\">\n  <img src=\"/assets/pics/coachregister.png\" class=\"watermark\">\n  <div id=\"overall\" class=\"overall\">\n    <img src=\"/assets/pics/clubcoachlogo.png\" class=\"logo\"><br><br><br>\n    <div class=\"form\">\n      <p>Login Details</p>\n      <br>\n      <div class=\"headings\">\n        User Email <span style=\"color: red\">* </span><span style=\"font-size: 10px\">(login ID)</span><br>\n        <input #email type=\"email\"><br><br>\n        Password <span style=\"color: red\">* </span><span style=\"font-size: 10px\">(alphanumeric, min 8 characters)</span><br>\n        <input #password type=\"password\"><br><br>\n        Confirm Password <span style=\"color: red\">* </span><br>\n        <input #cpassword type=\"password\"><br><br><br><br>\n      </div>\n    </div>\n  <br><br>\n  <div class=\"form\">\n    <p>Personal Details</p>\n    <br>\n    <div class=\"headings\">\n      <img #photo id=\"user\" src=\"/assets/pics/dummy_user.png\" class=\"userphoto\">\n      <input #image id=\"user\" type=\"file\" class=\"user\" style=\"opacity:0\"><br><br>\n      <div id=\"name\">\n        <span> First Name <span style=\"color: red\">* </span></span><br>\n        <input #fname><br><br>\n        <span> Last Name <span style=\"color: red\">* </span></span><br>\n        <input #lname><br><br><br>\n      </div>\n      Gender <span style=\"color: red\">* </span><br><br>\n      <form #gender>\n        <input #male style=\"position: absolute\" type=\"radio\" name=\"gender\" value=\"male\" checked><span style=\"position: absolute; left: 50px\">Male</span>\n        <input #female style=\"position: absolute; left:100px;\" type=\"radio\" name=\"gender\" value=\"female\"><span style=\"position: absolute; left: 130px\">Female</span>\n      </form> <br><br><br>\n      Date of Birth <span style=\"color: red\">* </span><br>\n      <input #dob type=\"date\"><br><br>\n      Contact <span style=\"color: red\">* </span><br>\n      <input #contact type=\"number\"><br><br>\n      Address Line 1 <span style=\"color: red\">* </span><br>\n      <input #add1><br><br>\n      Address Line 2 <br>\n      <input #add2><br><br>\n      City <span style=\"color: red\">* </span><br>\n      <input #city><br><br>\n      State <span style=\"color: red\">* </span><br>\n      <input #state><br><br>\n      Postcode <span style=\"color: red\">* </span><br>\n      <input #postcode type=\"number\" ><br><br>\n      Country <span style=\"color: red\">* </span><br><br>\n      <select #country class=\"inputdropdown\">\n\t<option value=\"AF\">Afghanistan</option>\n\t<option value=\"AX\">Åland Islands</option>\n\t<option value=\"AL\">Albania</option>\n\t<option value=\"DZ\">Algeria</option>\n\t<option value=\"AS\">American Samoa</option>\n\t<option value=\"AD\">Andorra</option>\n\t<option value=\"AO\">Angola</option>\n\t<option value=\"AI\">Anguilla</option>\n\t<option value=\"AQ\">Antarctica</option>\n\t<option value=\"AG\">Antigua and Barbuda</option>\n\t<option value=\"AR\">Argentina</option>\n\t<option value=\"AM\">Armenia</option>\n\t<option value=\"AW\">Aruba</option>\n\t<option value=\"AU\">Australia</option>\n\t<option value=\"AT\">Austria</option>\n\t<option value=\"AZ\">Azerbaijan</option>\n\t<option value=\"BS\">Bahamas</option>\n\t<option value=\"BH\">Bahrain</option>\n\t<option value=\"BD\">Bangladesh</option>\n\t<option value=\"BB\">Barbados</option>\n\t<option value=\"BY\">Belarus</option>\n\t<option value=\"BE\">Belgium</option>\n\t<option value=\"BZ\">Belize</option>\n\t<option value=\"BJ\">Benin</option>\n\t<option value=\"BM\">Bermuda</option>\n\t<option value=\"BT\">Bhutan</option>\n\t<option value=\"BO\">Bolivia, Plurinational State of</option>\n\t<option value=\"BQ\">Bonaire, Sint Eustatius and Saba</option>\n\t<option value=\"BA\">Bosnia and Herzegovina</option>\n\t<option value=\"BW\">Botswana</option>\n\t<option value=\"BV\">Bouvet Island</option>\n\t<option value=\"BR\">Brazil</option>\n\t<option value=\"IO\">British Indian Ocean Territory</option>\n\t<option value=\"BN\">Brunei Darussalam</option>\n\t<option value=\"BG\">Bulgaria</option>\n\t<option value=\"BF\">Burkina Faso</option>\n\t<option value=\"BI\">Burundi</option>\n\t<option value=\"KH\">Cambodia</option>\n\t<option value=\"CM\">Cameroon</option>\n\t<option value=\"CA\">Canada</option>\n\t<option value=\"CV\">Cape Verde</option>\n\t<option value=\"KY\">Cayman Islands</option>\n\t<option value=\"CF\">Central African Republic</option>\n\t<option value=\"TD\">Chad</option>\n\t<option value=\"CL\">Chile</option>\n\t<option value=\"CN\">China</option>\n\t<option value=\"CX\">Christmas Island</option>\n\t<option value=\"CC\">Cocos (Keeling) Islands</option>\n\t<option value=\"CO\">Colombia</option>\n\t<option value=\"KM\">Comoros</option>\n\t<option value=\"CG\">Congo</option>\n\t<option value=\"CD\">Congo, the Democratic Republic of the</option>\n\t<option value=\"CK\">Cook Islands</option>\n\t<option value=\"CR\">Costa Rica</option>\n\t<option value=\"CI\">Côte d'Ivoire</option>\n\t<option value=\"HR\">Croatia</option>\n\t<option value=\"CU\">Cuba</option>\n\t<option value=\"CW\">Curaçao</option>\n\t<option value=\"CY\">Cyprus</option>\n\t<option value=\"CZ\">Czech Republic</option>\n\t<option value=\"DK\">Denmark</option>\n\t<option value=\"DJ\">Djibouti</option>\n\t<option value=\"DM\">Dominica</option>\n\t<option value=\"DO\">Dominican Republic</option>\n\t<option value=\"EC\">Ecuador</option>\n\t<option value=\"EG\">Egypt</option>\n\t<option value=\"SV\">El Salvador</option>\n\t<option value=\"GQ\">Equatorial Guinea</option>\n\t<option value=\"ER\">Eritrea</option>\n\t<option value=\"EE\">Estonia</option>\n\t<option value=\"ET\">Ethiopia</option>\n\t<option value=\"FK\">Falkland Islands (Malvinas)</option>\n\t<option value=\"FO\">Faroe Islands</option>\n\t<option value=\"FJ\">Fiji</option>\n\t<option value=\"FI\">Finland</option>\n\t<option value=\"FR\">France</option>\n\t<option value=\"GF\">French Guiana</option>\n\t<option value=\"PF\">French Polynesia</option>\n\t<option value=\"TF\">French Southern Territories</option>\n\t<option value=\"GA\">Gabon</option>\n\t<option value=\"GM\">Gambia</option>\n\t<option value=\"GE\">Georgia</option>\n\t<option value=\"DE\">Germany</option>\n\t<option value=\"GH\">Ghana</option>\n\t<option value=\"GI\">Gibraltar</option>\n\t<option value=\"GR\">Greece</option>\n\t<option value=\"GL\">Greenland</option>\n\t<option value=\"GD\">Grenada</option>\n\t<option value=\"GP\">Guadeloupe</option>\n\t<option value=\"GU\">Guam</option>\n\t<option value=\"GT\">Guatemala</option>\n\t<option value=\"GG\">Guernsey</option>\n\t<option value=\"GN\">Guinea</option>\n\t<option value=\"GW\">Guinea-Bissau</option>\n\t<option value=\"GY\">Guyana</option>\n\t<option value=\"HT\">Haiti</option>\n\t<option value=\"HM\">Heard Island and McDonald Islands</option>\n\t<option value=\"VA\">Holy See (Vatican City State)</option>\n\t<option value=\"HN\">Honduras</option>\n\t<option value=\"HK\">Hong Kong</option>\n\t<option value=\"HU\">Hungary</option>\n\t<option value=\"IS\">Iceland</option>\n\t<option value=\"IN\">India</option>\n\t<option value=\"ID\">Indonesia</option>\n\t<option value=\"IR\">Iran, Islamic Republic of</option>\n\t<option value=\"IQ\">Iraq</option>\n\t<option value=\"IE\">Ireland</option>\n\t<option value=\"IM\">Isle of Man</option>\n\t<option value=\"IL\">Israel</option>\n\t<option value=\"IT\">Italy</option>\n\t<option value=\"JM\">Jamaica</option>\n\t<option value=\"JP\">Japan</option>\n\t<option value=\"JE\">Jersey</option>\n\t<option value=\"JO\">Jordan</option>\n\t<option value=\"KZ\">Kazakhstan</option>\n\t<option value=\"KE\">Kenya</option>\n\t<option value=\"KI\">Kiribati</option>\n\t<option value=\"KP\">Korea, Democratic People's Republic of</option>\n\t<option value=\"KR\">Korea, Republic of</option>\n\t<option value=\"KW\">Kuwait</option>\n\t<option value=\"KG\">Kyrgyzstan</option>\n\t<option value=\"LA\">Lao People's Democratic Republic</option>\n\t<option value=\"LV\">Latvia</option>\n\t<option value=\"LB\">Lebanon</option>\n\t<option value=\"LS\">Lesotho</option>\n\t<option value=\"LR\">Liberia</option>\n\t<option value=\"LY\">Libya</option>\n\t<option value=\"LI\">Liechtenstein</option>\n\t<option value=\"LT\">Lithuania</option>\n\t<option value=\"LU\">Luxembourg</option>\n\t<option value=\"MO\">Macao</option>\n\t<option value=\"MK\">Macedonia, the former Yugoslav Republic of</option>\n\t<option value=\"MG\">Madagascar</option>\n\t<option value=\"MW\">Malawi</option>\n\t<option value=\"MY\">Malaysia</option>\n\t<option value=\"MV\">Maldives</option>\n\t<option value=\"ML\">Mali</option>\n\t<option value=\"MT\">Malta</option>\n\t<option value=\"MH\">Marshall Islands</option>\n\t<option value=\"MQ\">Martinique</option>\n\t<option value=\"MR\">Mauritania</option>\n\t<option value=\"MU\">Mauritius</option>\n\t<option value=\"YT\">Mayotte</option>\n\t<option value=\"MX\">Mexico</option>\n\t<option value=\"FM\">Micronesia, Federated States of</option>\n\t<option value=\"MD\">Moldova, Republic of</option>\n\t<option value=\"MC\">Monaco</option>\n\t<option value=\"MN\">Mongolia</option>\n\t<option value=\"ME\">Montenegro</option>\n\t<option value=\"MS\">Montserrat</option>\n\t<option value=\"MA\">Morocco</option>\n\t<option value=\"MZ\">Mozambique</option>\n\t<option value=\"MM\">Myanmar</option>\n\t<option value=\"NA\">Namibia</option>\n\t<option value=\"NR\">Nauru</option>\n\t<option value=\"NP\">Nepal</option>\n\t<option value=\"NL\">Netherlands</option>\n\t<option value=\"NC\">New Caledonia</option>\n\t<option value=\"NZ\">New Zealand</option>\n\t<option value=\"NI\">Nicaragua</option>\n\t<option value=\"NE\">Niger</option>\n\t<option value=\"NG\">Nigeria</option>\n\t<option value=\"NU\">Niue</option>\n\t<option value=\"NF\">Norfolk Island</option>\n\t<option value=\"MP\">Northern Mariana Islands</option>\n\t<option value=\"NO\">Norway</option>\n\t<option value=\"OM\">Oman</option>\n\t<option value=\"PK\">Pakistan</option>\n\t<option value=\"PW\">Palau</option>\n\t<option value=\"PS\">Palestinian Territory, Occupied</option>\n\t<option value=\"PA\">Panama</option>\n\t<option value=\"PG\">Papua New Guinea</option>\n\t<option value=\"PY\">Paraguay</option>\n\t<option value=\"PE\">Peru</option>\n\t<option value=\"PH\">Philippines</option>\n\t<option value=\"PN\">Pitcairn</option>\n\t<option value=\"PL\">Poland</option>\n\t<option value=\"PT\">Portugal</option>\n\t<option value=\"PR\">Puerto Rico</option>\n\t<option value=\"QA\">Qatar</option>\n\t<option value=\"RE\">Réunion</option>\n\t<option value=\"RO\">Romania</option>\n\t<option value=\"RU\">Russian Federation</option>\n\t<option value=\"RW\">Rwanda</option>\n\t<option value=\"BL\">Saint Barthélemy</option>\n\t<option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</option>\n\t<option value=\"KN\">Saint Kitts and Nevis</option>\n\t<option value=\"LC\">Saint Lucia</option>\n\t<option value=\"MF\">Saint Martin (French part)</option>\n\t<option value=\"PM\">Saint Pierre and Miquelon</option>\n\t<option value=\"VC\">Saint Vincent and the Grenadines</option>\n\t<option value=\"WS\">Samoa</option>\n\t<option value=\"SM\">San Marino</option>\n\t<option value=\"ST\">Sao Tome and Principe</option>\n\t<option value=\"SA\">Saudi Arabia</option>\n\t<option value=\"SN\">Senegal</option>\n\t<option value=\"RS\">Serbia</option>\n\t<option value=\"SC\">Seychelles</option>\n\t<option value=\"SL\">Sierra Leone</option>\n\t<option value=\"SG\">Singapore</option>\n\t<option value=\"SX\">Sint Maarten (Dutch part)</option>\n\t<option value=\"SK\">Slovakia</option>\n\t<option value=\"SI\">Slovenia</option>\n\t<option value=\"SB\">Solomon Islands</option>\n\t<option value=\"SO\">Somalia</option>\n\t<option value=\"ZA\">South Africa</option>\n\t<option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n\t<option value=\"SS\">South Sudan</option>\n\t<option value=\"ES\">Spain</option>\n\t<option value=\"LK\">Sri Lanka</option>\n\t<option value=\"SD\">Sudan</option>\n\t<option value=\"SR\">Suriname</option>\n\t<option value=\"SJ\">Svalbard and Jan Mayen</option>\n\t<option value=\"SZ\">Swaziland</option>\n\t<option value=\"SE\">Sweden</option>\n\t<option value=\"CH\">Switzerland</option>\n\t<option value=\"SY\">Syrian Arab Republic</option>\n\t<option value=\"TW\">Taiwan, Province of China</option>\n\t<option value=\"TJ\">Tajikistan</option>\n\t<option value=\"TZ\">Tanzania, United Republic of</option>\n\t<option value=\"TH\">Thailand</option>\n\t<option value=\"TL\">Timor-Leste</option>\n\t<option value=\"TG\">Togo</option>\n\t<option value=\"TK\">Tokelau</option>\n\t<option value=\"TO\">Tonga</option>\n\t<option value=\"TT\">Trinidad and Tobago</option>\n\t<option value=\"TN\">Tunisia</option>\n\t<option value=\"TR\">Turkey</option>\n\t<option value=\"TM\">Turkmenistan</option>\n\t<option value=\"TC\">Turks and Caicos Islands</option>\n\t<option value=\"TV\">Tuvalu</option>\n\t<option value=\"UG\">Uganda</option>\n\t<option value=\"UA\">Ukraine</option>\n\t<option value=\"AE\">United Arab Emirates</option>\n\t<option value=\"GB\">United Kingdom</option>\n\t<option value=\"US\">United States</option>\n\t<option value=\"UM\">United States Minor Outlying Islands</option>\n\t<option value=\"UY\">Uruguay</option>\n\t<option value=\"UZ\">Uzbekistan</option>\n\t<option value=\"VU\">Vanuatu</option>\n\t<option value=\"VE\">Venezuela, Bolivarian Republic of</option>\n\t<option value=\"VN\">Viet Nam</option>\n\t<option value=\"VG\">Virgin Islands, British</option>\n\t<option value=\"VI\">Virgin Islands, U.S.</option>\n\t<option value=\"WF\">Wallis and Futuna</option>\n\t<option value=\"EH\">Western Sahara</option>\n\t<option value=\"YE\">Yemen</option>\n\t<option value=\"ZM\">Zambia</option>\n\t<option value=\"ZW\">Zimbabwe</option>\n  </select><br><br>\n  Bio <span style=\"color: red\">* </span><span style=\"font-size: 10px\">(max 500 characters)</span><br><br>\n  <textarea #bio class=\"input\" rows=\"4\"></textarea><br><br>\n  </div>\n  <p>Coaching Experience <span style=\"font-size: 10px; color: grey\">(Optional)</span></p>\n  <br>\n  <div class=\"headings\">\n      Years of Experience<br><br>\n      <div *ngFor=\"let x of length1\" style=\"padding-bottom: 10px;\">\n        <a class=\"close\" (click)=\"close1()\"> X </a>\n        <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n          <option value=\"0\">From</option>\n        </select>\n        <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n          <option value=\"0\">To</option>\n        </select>\n        <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n          <option value=\"0\">Certication</option>\n          <option value=\"ptr\">PTR</option>\n          <option value=\"ustpa\">USTPA</option>\n          <option value=\"itpa\">ITPA</option>\n          <option value=\"gptca\">GPTCA</option>\n        </select>\n        <br>\n      </div>\n      <br>\n      <a class=\"add\" (click)=\"add1()\">ADD YEARS OF EXPERIENCE +</a><br><br>\n      Certifications<br>\n      <span style=\"color: black; font-size:12px;\">Do you have any industry certifications?</span><br><br>\n      <div *ngFor=\"let y of length2\" style=\"padding-bottom: 10px;\">\n        <a class=\"close\" (click)=\"close2()\"> X </a>\n        <select class=\"inputdropdown\" style=\"width: 75%; position: relative;\">\n          <option value=\"0\">Select a certication</option>\n          <option value=\"ptr\">PTR</option>\n          <option value=\"ustpa\">USTPA</option>\n          <option value=\"itpa\">ITPA</option>\n          <option value=\"gptca\">GPTCA</option>\n        </select>\n        <br>\n      </div>\n      <br>\n      <a class=\"add\" (click)=\"add2()\">ADD MORE CERTIFICATIONS +</a><br><br>\n      Coaching Experience<br>\n      <span style=\"color: black; font-size:12px;\">Where have you worked as a coach or trainer?</span><br><br>\n      <div *ngFor=\"let z of length3\">\n        <a class=\"close\" (click)=\"close3()\"> X </a>\n        <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n          <option value=\"0\">From</option>\n        </select>\n        <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n          <option value=\"0\">To</option>\n        </select>\n        <input style=\"width: 25%; position: relative;left: 6%\" placeholder=\"Location\">\n        <br>\n      </div>\n      <br>\n      <a class=\"add\" (click)=\"add3()\">ADD COACHING EXPERIENCE +</a><br><br>\n      Achievement<br>\n      <span style=\"color: black; font-size:12px;\">Athletic Highlights</span><br><br>\n      <textarea #atheletich class=\"input\" rows=\"3\"></textarea><br><br>\n      Remarks <span style=\"font-size: 10px\">(max 500 characters)</span><br><br>\n      <textarea #remarks class=\"input\" rows=\"3\"></textarea><br><br>\n  </div>\n  <p>Preferred Coaching Requirements</p>\n  <br>\n  <div class=\"headings\">\n      Coaching Age Group<br>\n      <input #minage type=\"number\" style=\"width: 45%\" placeholder=\"Min Age Group\"><input #maxage type=\"number\" class=\"input3\" placeholder=\"Max Age Group\"><br><br>\n      Max. Class Length (hours)<br>\n      <input #maxclass><br><br>\n      Max. No. of Players per Class<br><br>\n      <select #minnoofplayers class=\"inputdropdown\" style=\"width: 47%\">\n          <option value=\"0\">Select min no. of players</option>\n\t        <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n      </select>\n      <select #maxnoofplayers class=\"inputdropdown2\">\n          <option value=\"0\">Select max no. of players</option>\n\t        <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n      </select>\n      <br><br>\n  </div>\n  </div>\n\n\n  <br>\n  <div id=\"register\" class=\"register\" (click)=\"register(email.value,password.value,cpassword.value,image.value,fname.value,lname.value,male.checked,female.checked,dob.value,contact.value,add1.value,add2.value,city.value,state.value,postcode.value,country.value,bio.value,atheletich.value,remarks.value,minage.value,maxage.value,maxclass.value,minnoofplayers.value,maxnoofplayers.value)\">\n    REGISTER\n  </div>\n  <br><br>\n</div>\n<img *ngIf=\"Clicked\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<img *ngIf=\"error\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div id=\"error\" *ngIf=\"error\" class=\"error\">\n<div class=\"errormsg\">\n  <h3>{{popupmsg}}</h3>\n  <p class=\"headings\">{{errormsg}}</p><br>\n</div>\n<button (click)=\"ok()\" class=\"ok\">OK</button>\n</div>\n<img *ngIf=\"Clicked\" src=\"/assets/pics/ajax-loader.gif\" class=\"load\">\n</html>\n"

/***/ }),

/***/ "./src/app/coachreg/coachreg.component.ts":
/*!************************************************!*\
  !*** ./src/app/coachreg/coachreg.component.ts ***!
  \************************************************/
/*! exports provided: CoachregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachregComponent", function() { return CoachregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coachreg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coachreg.service */ "./src/app/coachreg.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoachregComponent = /** @class */ (function () {
    function CoachregComponent(router, route, coachregService, cdRef) {
        this.router = router;
        this.route = route;
        this.coachregService = coachregService;
        this.cdRef = cdRef;
        this.Clicked = false;
        this.x1 = 1;
        this.length1 = [1];
        this.x2 = 1;
        this.length2 = [1];
        this.x3 = 1;
        this.length3 = [1];
        this.error = false;
        this.re = /\S+@\S+\.\S+/;
        this.v = 0;
        this.popupmsg = 'ERROR!';
    }
    CoachregComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        console.log(this.screenWidth);
        this.change();
        this.change2();
        this.change3();
        localStorage.setItem('sessionKey', 'coachreg');
    };
    CoachregComponent.prototype.change = function () {
        if (this.screenWidth > ((1300 / 730) * this.screenHeight)) {
            var img2 = document.getElementById('bi');
            img2.className = 'back2';
        }
        else {
            var img2 = document.getElementById('bi');
            img2.className = 'back1';
        }
    };
    CoachregComponent.prototype.change3 = function () {
        if (this.screenWidth < 1000) {
            document.getElementById('name').className = "name1";
            document.getElementById('user').style["left"] = "50%";
            document.getElementById('user').style["transform"] = "translate(-50%)";
        }
        else {
            document.getElementById('name').className = "name2";
            document.getElementById('user').style["left"] = "0%";
            document.getElementById('user').style["transform"] = "translate(0%)";
        }
    };
    CoachregComponent.prototype.change2 = function () {
        if (this.screenWidth < 600) {
            var overall = document.getElementById('overall');
            overall.className = 'overall2';
            var error = document.getElementById('error');
            if (error != null)
                error.className = 'error2';
        }
        else {
            var overall = document.getElementById('overall');
            overall.className = 'overall';
            var error = document.getElementById('error');
            if (error != null)
                error.className = 'error';
        }
    };
    CoachregComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
        this.change2();
        this.change3();
    };
    CoachregComponent.prototype.register = function (email, password, cpassword, image, fname, lname, male, female, dob, contact, add1, add2, city, state, postcode, country, bio, atheletich, remarks, minage, maxage, maxclass, minnoofplayers, maxnoofplayers) {
        var _this = this;
        var compulsory = [email, password, cpassword, fname, lname, dob, contact, add1, city, state, postcode, country, bio];
        var names = ["Email", "Password", "Confirm Password", "First Name", "Last Name", "Date Of Birth", "Contact", "Address Line 1", "City", "State", "Postcode", "Country", "Bio"];
        var flag = 0;
        for (var i = 0; i < compulsory.length; i++) {
            if (compulsory[i] == '') {
                this.errormsg = names[i] + " field needs to be filled";
                this.error = true;
                flag = 1;
                break;
            }
        }
        if (!this.re.test(email) && email != '') {
            this.errormsg = "Email Invalid";
            this.error = true;
            flag = 1;
        }
        if (flag == 0) {
            if (password != cpassword) {
                this.errormsg = "Passwords don't match";
                this.error = true;
                flag = 1;
            }
            if (flag == 0) {
                var gender = void 0;
                if (male == true)
                    gender = "male";
                else if (female == true)
                    gender = "female";
                this.Clicked = true;
                //Register to Database
                this.info = '/register/coachreg/{ "username":"' + email + '","password":"' + password + '","fname":"' + fname + '","lname":"' + lname + '","gender":"' + gender + '","dob":"' + dob + '","contact":"' + contact + '","address1":"' + add1 + '","address2":"' + add2 + '","city":"' + city + '","state":"' + state + '","postcode":"' + postcode + '","country":"' + country + '","bio":"' + bio +
                    '","atheletich":"' + atheletich + '","remarks":"' + remarks + '","minage":"' + minage + '","maxage":"' + maxage + '","maxclass":"' + maxclass + '","minnoofplayers":"' + minnoofplayers + '","maxnoofplayers":"' + maxnoofplayers + '","status":"inactive","vfcode":""}';
                console.log(this.info);
                this.coachregService.register(this.info).subscribe(function (info) {
                    console.log(info);
                    _this.Clicked = false;
                    if (info == true) {
                        _this.popupmsg = 'CONGRATS!';
                        _this.errormsg = "You have been registered. An email has been sent to you with instructions to verify your email.";
                        _this.error = true;
                        _this.v = 1;
                        _this.cdRef.detectChanges();
                        _this.screenHeight = window.outerHeight;
                        _this.screenWidth = window.outerWidth;
                        console.log(_this.screenWidth);
                        _this.change2();
                    }
                    else {
                        _this.errormsg = "Email has already been registered. Please use another email";
                        _this.error = true;
                        flag = 1;
                        _this.cdRef.detectChanges();
                        _this.screenHeight = window.outerHeight;
                        _this.screenWidth = window.outerWidth;
                        console.log(_this.screenWidth);
                        _this.change2();
                    }
                });
            }
        }
        this.cdRef.detectChanges();
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        console.log(this.screenWidth);
        this.change2();
    };
    CoachregComponent.prototype.add1 = function () {
        this.length1[this.x1] = this.x1 + 1;
        this.x1 += 1;
    };
    CoachregComponent.prototype.add2 = function () {
        this.length2[this.x2] = this.x2 + 1;
        this.x2 += 1;
    };
    CoachregComponent.prototype.add3 = function () {
        this.length3[this.x3] = this.x3 + 1;
        this.x3 += 1;
    };
    CoachregComponent.prototype.close1 = function () {
        this.x1 -= 1;
        this.length1.splice(this.x1);
    };
    CoachregComponent.prototype.close2 = function () {
        this.x2 -= 1;
        this.length2.splice(this.x2);
    };
    CoachregComponent.prototype.close3 = function () {
        this.x3 -= 1;
        this.length3.splice(this.x3);
    };
    CoachregComponent.prototype.ok = function () {
        this.error = false;
        if (this.v == 1) {
            this.router.navigate(['login']);
        }
    };
    CoachregComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coachreg',
            template: __webpack_require__(/*! ./coachreg.component.html */ "./src/app/coachreg/coachreg.component.html"),
            styles: [__webpack_require__(/*! ./coachreg.component.css */ "./src/app/coachreg/coachreg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _coachreg_service__WEBPACK_IMPORTED_MODULE_1__["CoachregService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CoachregComponent);
    return CoachregComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\n  position: fixed;\n  width:100%;\n  left:0%;\n  top: -5px;\n  height: 90px;\n  z-index:1;\n  background-image: url('/assets/pics/a.png');\n}\n\n.menuicon{\n  position: absolute;\n  left: 25px;\n  top: 35px;\n  width: 20px;\n}\n\n.menuicon:hover{\n  position: absolute;\n  left: 25px;\n  top: 35px;\n  cursor: pointer;\n}\n\n.tennisicon{\n  position: absolute;\n  right: 15px;\n  top: 28px;\n  background-color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border-color: black;\n}\n\n.notificationicon{\n  position: absolute;\n  right: 115px;\n  top: 28px;\n  background-color: white;\n  width: 28px;\n  height: 28px;\n  border-color: black;\n  border-radius: 100%;\n}\n\n.icon{\n  position: absolute;\n  right: 138px;\n  top: 33px;\n  background-color: #68D2C4;\n  width: 18px;\n  height: 18px;\n  border-color: black;\n  border-radius: 100%;\n}\n\n.ntimage{\n  position: absolute;\n  width: 20px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.sidemenu1{\n  position: fixed;\n  width: 330px;\n  left: -330px;\n  top: -1%;\n  height: 101%;\n  background-color: white;\n  transition: 0.4s;\n  z-index:3;\n}\n\n.sidemenu2{\n  position: fixed;\n  width: 330px;\n  height: 101%;\n  left: 0%;\n  top: -1%;\n  background-color: white;\n  transition: 0.4s;\n  z-index:3;\n}\n\n.sidemenu22{\n  position: fixed;\n  width: 100%;\n  height: 101%;\n  left: 0%;\n  top: -1%;\n  background-color: white;\n  transition: 0.4s;\n  z-index:3;\n}\n\n.black{\n  position: fixed;\n  width: 5000px;\n  height: 5000px;\n  bottom: -1%;\n  right: -1%;\n  opacity: 0.3;\n  z-index:3;\n}\n\n.cross{\n  position: absolute;\n  left: 25px;\n  top: 45px;\n  width: 15px;\n}\n\n.cross:hover{\n  position: absolute;\n  left: 25px;\n  top: 45px;\n  width: 15px;\n  cursor: pointer;\n}\n\n.logo{\n  position: absolute;\n  left: 60px;\n  top: 37.5px;\n  width: 100px;\n}\n\n.logo2{\n  position: absolute;\n  left: 70px;\n  top: 27.5px;\n  width: 80px;\n}\n\n.text{\n  position: absolute;\n  color: #7F7F7F;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  left: 25px;\n  top: 110px;\n  width: 85%;\n}\n\n.belowtext{\n  position: absolute;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 11px;\n  color: #7F7F7F;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  background-color: white;\n}\n\n.topics{\n  position: absolute;\n  top: 220px;\n  width: 100%;\n  left: -25px;\n}\n\nul li{\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  color: black;\n  padding: 15px;\n  list-style-type: none;\n  border-bottom: 1.5px solid lightgrey;\n  left: 5px;\n}\n\nul li:hover{\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  color: #68D2C4;\n  padding: 15px;\n  list-style-type: none;\n  border-bottom: 1.5px solid lightgrey;\n  left: 5px;\n  cursor: pointer;\n}\n\n.sport{\n  position: absolute;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  color: #7F7F7F;\n  right: 50px;\n  top: 23px;\n}\n\n.bottom\n{\n  background-image: url(\"/assets/pics/Login-bg3.png\");\n  position: fixed;\n  bottom:0%;\n  height: 50px;\n  width: 101%;\n  left: -1%;\n  z-index:3;\n}\n\n.searchButton{\n  height:100%;\n  background-color: black;\n  left:0%;\n  border: solid black;\n  width: 25%;\n  outline: none;\n  color: white;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  min-width: 160px;\n}\n\n.searchButton:hover{\n  height:100%;\n  background-color: black;\n  left:0%;\n  border: solid black;\n  width: 25%;\n  outline: none;\n  color: white;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  min-width: 160px;\n}\n\n.bsearch{\n  position: fixed;\n  background-color: white;\n  width: 21.1%;\n  left: 0%;\n  bottom: 50px;\n  height: 80%;\n  padding: 20px;\n  overflow-y: scroll;\n  z-index:3;\n  min-width: 161px;\n}\n\n.bsearch2{\n  position: fixed;\n  background-color: white;\n  width: 90%;\n  left: 0%;\n  top: 0px;\n  bottom: 50px;\n  height: 95%;\n  padding: 20px;\n  overflow-y: scroll;\n  z-index:3;\n  min-width: 161px;\n}\n\n.searching{\n    position: absolute;\n    width: 90%;\n    left: 5%;\n    font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    color: #7F7F7F;\n    font-size: 14px;\n    background-color: white;\n}\n\ninput{\n  border-bottom: 1px solid lightgrey;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  width: 100%;\n  outline: none;\n  font-size: 14px;\n  padding: 4px;\n}\n\n.s{\n  width: 100%;\n  padding: 5px;\n  font-size: 18px;\n  border: 1px solid black;\n  background-color: transparent;\n  outline: none;\n  height: 50px;\n  color: black;\n}\n\n.s:hover{\n  width: 100%;\n  padding: 5px;\n  font-size: 18px;\n  border: 1px solid black;\n  background-color: transparent;\n  outline: none;\n  height: 50px;\n  color: black;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.inputdropdown{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  width: 220%;\n  height: 30px;\n  background-color: white;\n}\n\n.blockdate{\n  position: fixed;\n  background-color: white;\n  width: 22%;\n  right: 0%;\n  bottom: 50px;\n  height: 80%;\n  padding: 20px;\n  overflow-y: scroll;\n  z-index:3;\n  min-width: 161px;\n}\n\n.blockdate2{\n  position: fixed;\n  background-color: white;\n  width: 90%;\n  top: 0px;\n  right: 0%;\n  height: 95%;\n  padding: 20px;\n  overflow-y: scroll;\n  z-index:3;\n  min-width: 161px;\n}\n\n.blockButton{\n  position: absolute;\n  height:100%;\n  background-color: black;\n  right:0%;\n  border: solid black;\n  width: 25%;\n  outline: none;\n  color: white;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  min-width: 160px;\n}\n\n.blockButton:hover{\n  position: absolute;\n  height:100%;\n  background-color: black;\n  right:0%;\n  border: solid black;\n  width: 25%;\n  outline: none;\n  color: white;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  min-width: 160px;\n}\n\n.input{\n  font-size: 13px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n  resize: none;\n}\n\n.top{\n  position: relative;\n  width: 102%;\n  height: 30px;\n  left: -1%;\n  top: 85px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  overflow-x: none;\n}\n\n.buttons{\n  position: absolute;\n  left: 6%;\n  bottom: -3%;\n  color: grey;\n}\n\n.headingButton2{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  outline: none;\n}\n\n.headingButton2:hover{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  cursor: pointer;\n  outline: none;\n}\n\n.hove{\n  cursor: pointer;\n  color: #7F7F7F;\n  -webkit-text-decoration: underline white;\n          text-decoration: underline white;\n}\n\n.hove:hover{\n  cursor: pointer;\n  color: #7F7F7F;\n}\n\n.policy{\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 85%;\n  top: 112px;\n  background-color: white;\n  box-shadow: 0.5px 0.5px 2px 2px lightgrey;\n  padding: 25px;\n  color: \t#252525;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 25px;\n  font-size: 13px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\">\n<img src=\"/assets/pics/a.png\" style=\"width: 10000px; height: 10000px; left: -1000px; top: -1000px; position: fixed\">\n<div class=\"back\">\n<img (click)=\"click()\" src=\"/assets/pics/menu.png\" class=\"menuicon\">\n<img src=\"/assets/pics/lodo-logo.png\" class=\"logo2\" >\n<div class=\"tennisicon\">\n  <img src=\"/assets/pics/tennis-icon.png\" class=\"ntimage\">\n</div>\n<p class=\"sport\">{{sport}}</p>\n<div class=\"notificationicon\">\n  <img src=\"/assets/pics/notification-icon.png\" class=\"ntimage\">\n</div>\n<div class=\"icon\">\n  <span style=\"position: absolute; top: 50%;left: 50%;transform: translate(-50%,-50%); color:white; font-size: 12px\">{{number}}</span>\n</div>\n</div>\n<div *ngIf=\"Option[0]\">\n  <app-mastercalendar></app-mastercalendar>\n</div>\n<div *ngIf=\"Option[1]\">\n  <app-myclasses></app-myclasses>\n</div>\n<div *ngIf=\"Option[2]\">\n  <app-myprofile></app-myprofile>\n</div>\n<div *ngIf=\"Option[3]\">\n  <app-chat></app-chat>\n</div>\n\n<div style=\"overflow-x: none\" *ngIf=\"Option[5]\">\n  <div class=\"top\">\n    <div class=\"buttons\">\n      <button id=\"1\" class=\"headingButton2\">Privacy Policy</button>\n    </div>\n  </div><br>\n  <div class=\"policy\">\n    This Privacy Policy explains how information about you is collected, used and disclosed by BOUNX, which is owned by Disputer Pro. (\"BOUNX,\" \"we,\" \"us\" or \"our\") when you access or use our website, mobile application and other online products and services (collectively, our \"Services\") or when you otherwise interact with us.\n\nWe may change this Privacy Policy from time to time. If we make changes, we will revise the \"Last Updated\" date above and attempt to provide additional notice by sending an email to the address associated with your account or through our Services. We encourage you to review this Privacy Policy whenever you access or use our Services or otherwise interact with us to stay informed about our information practices and the ways you can help protect your privacy.\n\n<br><b><br>COLLECTION OF INFORMATION<br></b>\nInformation You Provide to UsInformation You Provide to Us\n\nWe collect information you provide directly to us. The types of information we may collect include:\n\n<br><b><br>Account Information,<br></b>\nsuch as your name, email address, password, age, gender, postal address, phone number, photos, bio and any other information you choose to provide;\n<br><b><br>Training Information,<br></b>\nsuch as the sports and positions you play or coach, time and duration of training and training location;\n<br><b><br>Transaction Information,<br></b>\nsuch as the coaching services you purchase or offer for sale through our Services. We may also collect and store limited payment information from you, such as payment card type and expiration date and the last four digits of your payment card number; however, we do not collect or store full payment card numbers and all transactions are processed by our third party payment processor. If you offer services for sale through our Services, we will also collect your bank account information;\n<br><b><br>Information About Others,<br></b>\nsuch as photos of users receiving coaching services and the names, email addresses and other information about individuals you invite to use our Services, register to receiving coaching services or authorize to receive notifications; and\n<br><b><br>Other Information You Choose to Provide,<br></b>\nsuch as when you participate in a survey, contest, promotion, quiz or interactive area of the Services, request technical or customer support, communicate with us via third-party social media services or otherwise communicate with us.\nIf you are an affiliated Club, we collect information about your business that is submitted to the service under your account. When you sign up for our Software Service, we ask for your company name, address, phone number, email, credit card information, tax identification number, and other information about your business, as well as names and email addresses of authorized individuals on your account. We also collect Personal Information about your customers that they provide to the Service when they initiate a transaction with you, such as an appointment or purchase.\nWe may collect other Personal Information through the Service under the direction of our affiliated Clubs.\nInformation We Collect Automatically When You Use the Services\nWhen you access or use our Services, we automatically collect information about you, including:\n\n<br><b><br>Log Information:<br></b>\nWe collect log information about your access to and use of our Services, including the type of browser you use, access times, pages viewed, your IP address and the page you visited before navigating to our Services.\n<br><b><br>Device Information:<br></b>\nWe collect information about the computer or mobile device you use to access our Services, including the hardware model, operating system and version, unique device identifiers and mobile network information.\n<br><b><br>Location Information:<br></b>\nWith your consent (e.g. if you permit your mobile device to send us your latitude and longitude), we will collect location information when you access or use our Services and, if permitted by your device settings, in the \"background\" (i.e. at times when you are not directly using our Services). For more details, please see \"Your Choices\" below.\n<br><b><br>Information Collected by Cookies and Other Tracking Technologies:<br></b>\nWe and our service providers use various technologies to collect information, including cookies, web beacons, web storage and device identifiers. For more information about cookies, and how to disable them, please see \"Your Choices\" below.\n<br><b><br>Information We Collect from Other Sources<br></b>\nWe may also obtain information from other sources and combine that with information we collect through our Services. For example, we may collect information about you from third parties, including from other users, identity verification services, mailing list providers and publicly available sources. If you create or log into your account through a social media site, we will have access to certain information from that site, such as your name, account information and email address, in accordance with the authorization procedures determined by such social media site.\n<br><b><br>USE OF INFORMATION<br></b>\nWe may use information about you for various purposes, including to:\n\nProvide, maintain and improve our Services\nProvide and deliver the products and services you request, process payments and other transactions and send you related information;\nManage your account and send you related information, including confirmations, updates, technical notices, security alerts and support and administrative messages;\nRespond to your comments, questions and requests and provide customer service;\nCommunicate with you about products, services, offers, promotions, rewards, and events offered by BOUNX and others, and provide news and information we think will be of interest to you;\nMonitor and analyze data, trends, usage and activities in connection with our Services;\nMeasure the effectiveness of advertising, content, features and activities, and perform other data analytics;\nDetect, investigate and prevent fraudulent transactions and other illegal activities and protect the rights and property of BOUNX and others;\nPersonalize and improve our Services and provide advertisements, content and features that match user profiles or interests;\nFacilitate contests, sweepstakes and promotions and process and deliver entries and rewards;\nLink or combine with information we get from others to help understand your needs and provide you with a better experience; and\nCarry out any other purpose for which the information was collected.\nWe may disclose personal information to our affiliated Clubs if you are a BOUNX user and using our Service to interact with that affiliated Club. Please contact the affiliated Club you interact with directly for more information on that affiliated Club’s privacy practices.\nSHARING OF INFORMATION\nWe may share information about you as follows or as otherwise described in this Privacy Policy:\n\nWith vendors, consultants and other service providers who need access to such information to carry out work or perform services on our behalf;\nWhen you create a profile, participate in the interactive areas of our Services or interact with us on third-party social media sites, certain information that you provide may be displayed publicly, such as your name, profile photo and other information you choose to provide;\nIn response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, rule, regulation or legal process;\nIf we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property or safety of BOUNX or others;\nIn connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company;\nBetween and among BOUNX and any current or future parent, subsidiary and/or affiliated company; and\nWith your consent or at your direction.\nWe may also share aggregated or de-identified information, which cannot reasonably be used to identify you.\n\n<br><b><br>SOCIAL SHARING FEATURES<br></b>\nThe Services may offer social sharing features and other integrated tools (such as the Facebook \"Like\" button), which let you share actions you take on our Services with other media. Your use of such features enables the sharing of information with your friends or the public, depending on the settings you establish with the entity that provides the social sharing feature. For more information about the purpose and scope of data collection and processing in connection with social sharing features, please visit the privacy policies of the entities that provide these features.\nADVERTISING AND ANALYTICS SERVICES PROVIDED BY OTHERS\nWe may allow others to serve advertisements on our behalf and provide analytics services. These entities may use cookies, web beacons, device identifiers and other technologies to collect information about your use of our Services and other applications and websites, including your IP address, web browser, device type, pages viewed, time spent on pages, links clicked and conversion information. This information may be used by us and others to, among other things, analyze and track data, determine the popularity of certain content, deliver advertising and content targeted to your interests on our Services and other applications and websites and better understand your online activity. For more information about interest-based ads, or to opt out of having your web browsing information used for behavioral advertising purposes, please visit www.aboutads.info/choices. Your device may also include a feature (\"Limit Ad Tracking\" on iOS and \"Opt out of Interest-Based Ads\" on Android) that allows you to opt out of having certain information collected through apps used for behavioral-advertising purposes.\n<br><b><br>YOUR CHOICES<br></b>\n<br><b><br>Account Information<br></b>\nYou may access, update, correct or delete information about you at any time by accessing your account dashboard. If you wish to deactivate your account, please visit our contact page and submit a message letting us know you would like to deactivate your account, but note that we may retain certain information as required by law or for legitimate business purposes. We may also retain cached or archived copies of information about you for a certain period of time.\n<br><b><br>Location Information<br></b>\nWhen you first launch any of our mobile applications that collect location information, you will be asked to consent to the application's collection of this information. If you initially consent to our collection of location information, you can subsequently stop the collection of this information at any time by changing the preferences on your mobile device. You may also stop our collection of location information by following the standard uninstall process to remove all of our mobile applications from your device.\n<br><b><br>Cookies and Web Storage<br></b>\nMost web browsers are set to accept cookies and web storage by default. If you prefer, you can usually choose to set your browser to remove or reject cookies and web storage. Please note that if you choose to remove or reject cookies or web storage, this could affect the availability and functionality of our Services.\n<br><b><br>Promotional Communications<br></b>\nYou may opt out of receiving promotional emails and text messages from BOUNX by following the instructions in those emails or messages. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.\n<br><b><br>Push Notifications<br></b>\nWith your consent, we may send promotional and non-promotional push notifications or alerts to your mobile device. You can deactivate these messages at any time by changing the notification settings on your mobile device or within our mobile applications.\n<br><b><br>Referral Contact Information<br></b>\nIf you choose to use our referral service to tell a friend about the BOUNX App via SMS or email, we will ask for your friend’s email address or telephone number. We will automatically send your friend a one-time email or SMS message inviting them to visit the mobile application. BOUNX stores this information for the sole purpose of sending this one-time message and tracking the success of the referral program. Your friend may contact us at engage@bounxsport.com to request that we remove this information from our database.\nWhen using this feature we will access the contact list of your device for the sole purpose of assisting you in finding individuals to whom you wish to send these communications. If you submit any Personal Information relating to other people to us or to our service providers in connection with the Service, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy. Please also note that when using the SMS feature charges from your carrier may apply.\nYour provider's standard data and messaging rates apply to all SMS correspondence. All charges are billed by and payable to your mobile service provider. You represent that you are 18 years of age and the owner or authorized user of the wireless device on which messages will be received, and that you are authorized to approve the applicable charges. Data obtained from you in connection with this SMS Service may include your name, address, cell phone number, your provider's name, and the date, time, and content of your messages. The use of this information will be in accordance with this Policy. If fees are charged to your wireless account invoice, we may provide your carrier with your applicable information in connection therewith. Your wireless carrier and other service providers may also collect data about your wireless device usage, and their practices are governed by their own policies. You acknowledge and agree that the SMS Service is provided via wireless systems which use radios (and other means) to transmit communications over complex networks. We will not be liable for any delays in the receipt of any SMS messages, as delivery is subject to effective transmission from your network operator. SMS message services are provided on an AS IS basis. We do not guarantee that your use of the SMS Service will be private or secure, and we are not liable to you for any lack of privacy or security you may experience. You are fully responsible for taking precautions and providing security measures best suited for your situation and intended use of the SMS Service. You may opt out of the SMS Service at any time by replying \"STOP\", \"END\", or \"QUIT\" to the SMS text message you have received. This process impacts only the future delivery of the particular SMS message offering, so you must send that message for each offering.\n<br><b><br>Testimonials, Ratings and Reviews<br></b>\nIf you submit testimonials, ratings or reviews to the Service, any Personal Information you include will be displayed in the Service. If you want your testimonial removed, please contact us at engage@bounxsport.com We also partner with third-party service providers to collect and display ratings and review content on our web site. If the content collected by a third party for display includes Personal Information, it will not be posted unless consent is provided by the individual.\n<br><b><br>Changes to this privacy policy<br></b>\nBOUNX reserves the right to change this Privacy Policy. Please take a look at the “Last Updated” legend at the top of this page to see when this Privacy Policy was last revised. Any changes to this Privacy Policy will become effective when we post the revised Privacy Policy on the Service. Your use of the Service following these changes means that you accept the revised Privacy Policy.\n<br><b><br>CONTACT US<br></b>\nIf you have any questions about this Privacy Policy, please contact us at: engage@bounxsport.com\n  </div>\n  <br><br><br><br><br><br><br>\n</div>\n\n<div *ngIf=\"Option[4]\">\n  <div class=\"top\">\n    <div class=\"buttons\">\n      <button id=\"1\" class=\"headingButton2\">Terms And Conditions</button>\n    </div>\n  </div><br>\n  <div class=\"policy\">\n    <br>\n    Welcome to BOUNX! These Terms of Use (“Terms”) apply to your access to and use of the website, mobile application and other online products and services (collectively, our “Services”) provided by BOUNX, which is owned by Disrupter Pro. (“BOUNX,” “we,” “us” or “our”). By accessing or using our Services, you agree to these Terms. If you do not agree to these Terms, including the mandatory arbitration provision and class action waiver in Section 19, do not access or use our Services.\n<br>\nBy signing up or otherwise using the BOUNX service and websites, or accessing any content or material that is made available by BOUNX, you are entering into a binding contract with BOUNX.\n<br>\nThese Terms do not alter in any way the terms or conditions of any other agreement you may have with BOUNX for products, services or otherwise. If you are accessing or using our Services on behalf of another person or entity, you represent and warrant that you are authorized to accept these Terms on such person or entity's behalf, and that such person or entity will be responsible to BOUNX if you violate these Terms.\n<br>\nWe may, at any time, and at our sole discretion, modify these Terms of Service, including our Privacy Policy and Manage Kids Policy, with or without notice to the User. Any such modification will be effective immediately upon public posting. Your continued use of our Service and this Site following any such modification constitutes your acceptance of these modified Terms.\n<br>\nIf you have any questions regarding the use of our Services, please contact us at engage@bounxsport.com\n<br><br><b>\nEligibility, Registration and Account<br></b>\nBy using our Services, you represent and warrant that you (a) are 18 years of age or older, (b) have not been previously suspended or removed from our Services, or engaged in any activity that could result in suspension or removal from our Services, (c) will not offer coaching services from more than one BOUNX account without our express permission, and (d) have full power and authority to enter into these Terms and in so doing will not violate any other agreement to which you are a party.\nIn order to access or use certain areas and features of our Services, you may need to register for an account. By registering for an account, you agree to (i) provide accurate, truthful, current and complete account information; (ii) maintain and promptly update your account information to maintain its accuracy and completeness; (iii) maintain the security of your account by not sharing your password with others and restricting access to your account, computer and device; (iv) promptly notify BOUNX if you discover or otherwise suspect any security breaches related to our Services or your account; and (v) take responsibility for all activities that occur under your account and accept all risks of unauthorized access.\n<br><br><b>Communications Preferences<br></b>\nBy creating a BOUNX account, you consent to receive electronic communications from BOUNX (e.g., via email or by posting notices on our Services). These communications may include notices about your account (e.g., payment authorizations, password changes and other transactional information) and are part of your relationship with us. You agree that any notices, agreements, disclosures or other communications that we send to you electronically will satisfy any legal communication requirements, including, but not limited to, that such communications be in writing. You should maintain copies of electronic communications from us by printing a paper copy or saving an electronic copy. We may also send you promotional communications via email, including, but not limited to, newsletters, special offers, surveys and other news and information we think will be of interest to you. You may opt out of receiving these promotional emails at any time by following the unsubscribe instructions provided in these communications\n<br><br><b>Our Services Offer a Venue<br></b>\nOur Services offers tools, resources and a venue to connect those seeking athletic training with those seeking to provide coaching services. BOUNX: (a) does not employ, recommend or endorse any users and has no control over the acts or omissions of any users; (b) is not responsible or liable in any manner for the performance or conduct of any users or other third parties online or offline; (c) makes no representations or warranties about the quality of the services provided by any user or about your interactions or dealings with other users except as expressly stated on our Services; and (d) does not screen users or conduct any kind of identity or background checks except as otherwise expressly stated in these Terms or on or in our Services. Regardless of whether BOUNX screens users or performs a background check, you should exercise caution and perform your own screening before connecting or meeting with any other user through our Services, entering into a contract or agreement with any other user or obtaining any services. BOUNX hereby expressly disclaims, and you hereby expressly release BOUNX from, any and all liability whatsoever for any controversies, claims, suits, injuries, loss, harm or damages arising from or related to our Services or your interactions or dealings with other users, including any acts or omissions of users online or offline. All use of our Services is at your sole and exclusive risk.\n<br><b>User Transactions; Release<br></b>\nOur Services may be used to help obtain or offer coaching services provided by users and to facilitate payment for such services. However, users transact solely between themselves and BOUNX is not a party to any transactions between users. BOUNX hereby expressly disclaims, and you hereby expressly release BOUNX from, any and all liability whatsoever for any controversies, claims, suits, injuries, loss, harm or damages arising from or related to disputes, dealings, or interactions between you and any other users or third parties.<br>\nIf you offer coaching services, the first and all future bookings with BOUNX users must be booked via our Services. Failure to abide by this policy may result in suspension from our Services.\n<br><br><b>Payment Terms<br></b>\nCoaching Sessions; Expiration<br>\nYou may use our Services to schedule and purchase one or more coaching sessions. Any coaching sessions purchased through our Services must be scheduled and completed within one year of the purchase date. Any coaching sessions not scheduled and completed within one year of purchase are forfeit and you will not be issued a refund.\n<br><br><b>Booking Session at Clubs; Expiration<br></b>\nYou may also use our Service to book and schedule classes and sessions at our affiliated Clubs. Any session purchased with an affiliated Club through our Services must be scheduled and completed within one year of the purchase date. Any sessions at our affiliated Clubs not scheduled and completed within one year of purchase are forfeit and you will not be issued a refund.\n<br><br><b>Payment and Billing Information<br></b>\nBy providing a credit card or other payment method that we accept, you represent and warrant that you are authorized to use the designated payment method and that you authorize us (or our third-party payment processor) to charge your payment method for the total amount of your purchase (including any applicable taxes and other charges) (collectively, as applicable, an “Order”). If the payment method cannot be verified, is invalid or is otherwise not acceptable, your Order may be suspended or cancelled. You must resolve any problem we encounter in order to proceed with your Order. In the event you want to change or update payment information associated with your BOUNX account, you can do so at any time by logging into your account and editing your payment information.\nYou acknowledge that the amount billed may vary due to promotional offers, changes to your coaching sessions or changes in applicable taxes or other charges, and you authorize us (or our third-party payment processor) to charge your payment method for the corresponding amount.\n<br><br><b>Pricing and Availability<br></b>\nAll prices are shown based on the currency and country that BOUNX is listed in and applicable taxes and other charges, if any, are additional. Prices may be adjusted at any time and for any reason (or no reason) and without providing you prior notice.\nCoaching sessions are subject to availability, and we reserve the right to cancel all or part of a coaching session and to discontinue making certain coaching services available through our Services without prior notice.\nClub booking sessions are also subject to availability, and the affiliated Clubs and BOUNX reserve the right to cancel all or part of a booked session available through our Services without prior notice.\n<br><br><b>Returns and Refunds<br></b>\nIf you are dissatisfied with a coach, coaching session or club for any reason, please contact us at engage@bounxsport.com within two (2) days of the date you completed your first coaching session or booking and we will provide you a full refund of the purchase price for that coaching session or booking (unless otherwise specified during a promotion or special offer). If you do not comply with the terms of this section, you will be ineligible to receive a refund. Any training sessions left incomplete after 90 days from purchase date will be eligible for a merchant credit but ineligible for a refund.\n<br><br><b>Copyright and Limited License<br></b>\nUnless otherwise indicated in writing by us, our Services and all content and other materials on our Services, including the BOUNX logo and all designs, text, graphics, pictures, information, data, software, sound files, other files and the selection and arrangement thereof (collectively, the “Service Materials”) are the proprietary property of BOUNX or our licensors or users, as applicable, and are protected by the international copyright laws.\nSubject to these Terms, you are granted a limited, nonexclusive, nontransferable, nonsublicensable license to access and use our Services and Service Materials. However, such license is revocable at any time and does not include any right to: (a) sell or resell our Services or the Service Materials; (b) collect and use any service listings, pictures or descriptions; (c) distribute, publicly perform or publicly display any of the Service Materials; (d) modify or otherwise make any derivative uses of our Services or the Service Materials, or any portion thereof; (e) use any data mining, robots or similar data gathering or extraction methods; (f) download (other than the page caching) any portion of our Services, the Service Materials or any information contained therein, except as expressly permitted by BOUNX in writing; or (g) use our Services or the Service Materials in violation of these Terms or for any purposes other than their intended purposes. Your right to use our Services and the Service Materials is conditioned upon your use of our Services and the Service Materials in accordance with these Terms. Accordingly, any use of the Services or the Service Materials other than as specifically authorized in these Terms, without the prior written permission of BOUNX, will automatically terminate the license granted above. Such unauthorized use may also violate applicable laws, including, without limitation, copyright and trademark laws and applicable communications regulations and statutes. Except for the license granted above, no additional rights are granted and nothing in these Terms will be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise.\nNotwithstanding anything to the contrary in these Terms, our Services and the Service Materials may include software components provided by BOUNX or a third party that are subject to separate license terms, in which case those license terms will govern such software components.\n<br><br><b>Copyright Complaints<br></b>\nWe have a policy of limiting access to our Services and terminating the accounts of users who infringe the intellectual property rights of others. If you believe that anything on our Services infringes any copyright that you own or control, you may notify BOUNX Designated Agent as set forth below.\nengage@bounxsport.com\nYou should note that if you knowingly misrepresent in your notification that the material or activity is infringing, you may be liable for any damages, including costs and attorneys’ fees, incurred by BOUNX or the alleged infringer as the result of BOUNX relying upon such misrepresentation in removing or disabling access to the material or activity claimed to be infringing.\n<br><br><b>Trademarks<br></b>\n“BOUNX Sport,” the BOUNX logos and any other product or service name or slogan contained on our Services are trademarks of BOUNX and its suppliers or licensors and may not be copied, imitated or used, in whole or in part, without the prior written permission of BOUNX or the applicable trademark holder.\nYou may not use any metatags or any other hidden text utilizing “BOUNX” or any other name, trademark or product or service name of BOUNX without BOUNX’s prior written permission. In addition, the look and feel of our Services, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of BOUNX and may not be copied, imitated or used, in whole or in part, without BOUNX’s prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned on our Services are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by BOUNX.\n<br><br><b>Third-Party Content<br></b>\nOur Services may include links to websites or content owned or operated by third parties as well as other third-party content, including advertisements, promotional offers, and social “widgets” (collectively, “Third-Party Content”). BOUNX does not own, control or endorse any Third-Party Content and makes no representation or warranties of any kind regarding the Third-Party Content, including, without limitation, regarding its accuracy or completeness. You acknowledge and agree that BOUNX is not responsible or liable in any manner for any Third-Party Content and undertakes no responsibility to update or review any Third-Party Content. You access and use such Third-Party Content at your own risk. The inclusion of Third-Party Content on our Services does not imply affiliation, endorsement or adoption by BOUNX of any information contained therein. In addition, your business dealings or correspondence with, or participation in the promotional offers of, any third party responsible for Third-Party Content, and any terms, conditions, warranties or representations associated with such dealings or promotional offers, are solely between you and such third party. BOUNX is not responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or promotions or as the result of the presence of such Third-Party Content on our Services. When you navigate away from or otherwise leave our Services, you should understand that BOUNX’s terms and policies no longer govern and that the terms and policies of those third-party sites will now apply. You should review the applicable terms and policies, including privacy and data gathering practices, of any site or services to which you navigate to from our Services.\n<br><br><b>User Content and Interactive Areas<br></b>\nOur Services include interactive areas and features (“Interactive Areas”) that allow you or other users to create, post, share or store text, photos, videos and other materials (collectively, “User Content\"). In the event you decide to share your User Content with others through our Services or third-party platforms, you understand that this User Content will be viewable by others. You are solely responsible for your User Content and for your use of any Interactive Areas. You will not post, upload to, transmit, distribute, store, create or otherwise publish or send through our Services any of the following:\nUser Content that is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing, threatening, invasive of privacy or publicity rights, abusive, inflammatory, fraudulent, false, misleading or otherwise objectionable;\nUser Content that would constitute, encourage or provide instructions for a criminal offense, violate the rights of any party or otherwise create liability or violate any local, state, national or international law;\nUser Content that may infringe any patent, trademark, trade secret, copyright or other proprietary right of any party;\nUser Content that contains or depicts any statements, remarks or claims that do not reflect your honest views and experiences;\nUser Content that contains personal information about any person, including, without limitation, names, addresses, email address or credit card information without that person’s permission;\nUser Content that impersonates or misrepresents your affiliation with any person or entity;\nUnsolicited promotions, political campaigning, advertising or solicitations;\nViruses, corrupted data or other harmful, disruptive or destructive files or content;or\nUser Content that, in the sole judgment of BOUNX, is objectionable or which restricts or inhibits any other person from using or enjoying the Interactive Areas or our Services, or which may expose BOUNX or its users to any harm or liability of any type.\nBOUNX does not control, take responsibility for or assume liability for any User Content posted, stored or uploaded by you or any third party, or for any loss or damage to such User Content. When you participate in Interactive Areas, you understand that certain User Content you choose to post may be displayed publicly or to select users. You are solely responsible for your use of our Services and the Interactive Areas and use them at your own risk.\n\n<br><br><b>Rights to User Content<br></b>\nBOUNX claims no ownership or control over any User Content, except as otherwise expressly provided in these Terms or a separate agreement between you and BOUNX. However, if you submit or post User Content to our Services, unless BOUNX indicates otherwise, you grant BOUNX a worldwide, nonexclusive, perpetual, irrevocable, royalty-free, fully-paid up, and sub-licensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform and display your User Content in any media format and channel now known or later developed without compensation to you, including in connection with BOUNX’s marketing and promotional activities. You further grant BOUNX and BOUNX’s sublicensees the right to use the name that you submit in connection with User Content, if they choose.\nBy submitting or posting User Content to our Services, you represent and warrant that: (a) such User Content is non-confidential; (b) you own and control all of the rights to the User Content that you post or you otherwise have all necessary rights to post such User Content on our Services; (c) the User Content is accurate and not misleading or harmful in any manner; and (d) the User Content, and your use and posting thereof in connection with our Services, does not and will not violate these Terms or any applicable law, rule, regulation or third-party right.\n<br><br><b>Acceptable Use of Our Services<br></b>\nYour use of our Services will not violate any law, contract, intellectual property or other third-party right or constitute a tort, and you are solely responsible for your conduct while on our Services. You will not:\nUse our Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying our Services, or that could damage, disable, overburden or impair the functioning of our Services in any manner;\nEngage in any discriminatory, defamatory, hateful, harassing, abusive, obscene, threatening, physically dangerous, or otherwise objectionable conduct;\nAttempt to indicate in any manner that you have a relationship with BOUNX or that BOUNX has endorsed you or any services for any purpose unless BOUNX has provided written permission to do so;\nSend any unsolicited or unauthorized advertising, solicitations, promotional materials, spam, junk mail, chain letters or pyramid schemes, or harvest or collect the email addresses or other contact information of other users for the purpose of sending spam or other commercial messages;\nAttempt to reverse engineer any aspect of our Services or do anything that might discover source code or bypass or circumvent measures employed to prevent or limit access to any area, content or code of our Services (except as otherwise expressly permitted by law);\nAccess, use or attempt to access or use another's account without authorization from such user and BOUNX;\nDevelop any third-party application that interacts with User Content or our Services without BOUNX’s prior written consent;\nUse any robot, iframe, spider, crawler, scraper or other automated means or interface not provided or authorized by BOUNX to access out Services, including, without limitation, for the purpose of copying, extracting, aggregating, displaying, publishing or distributing any content or data made available via our Services;\nBypass or ignore instructions contained in the robots.txt file, accessible at BOUNX website, that controls all automated access to our Services; or\nUse our Services for any illegal or unauthorized purpose, or engage in, encourage or promote any activity that violates these Terms.\n<br><br><b>Feedback<br></b>\nSeparate and apart from User Content, you can submit questions, comments, feedback, suggestions, ideas, plans, notes, drawings, original or creative materials or other information, regarding our Services or BOUNX (collectively, “Feedback”). Feedback is non-confidential and will become the sole property of BOUNX. BOUNX will own, and you hereby assign to BOUNX, all right, title, and interest, including all intellectual property rights, in and to such Feedback, and BOUNX will be entitled to the unrestricted use and dissemination of Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you. You agree to execute any documentation required by BOUNX to confirm such assignment to BOUNX.\n<br><br><b>Indemnification<br></b>\nYou will defend, indemnify and hold harmless BOUNX, its independent contractors, service providers and consultants, and their respective directors, officers, employees and agents (collectively, “BOUNX Parties”), from and against any claims, damages, costs, liabilities and expenses (including, but not limited to, reasonable attorneys' fees) arising out of or related to (a) your access to or use of our Services; (b) any User Content or Feedback you provide; (c) your violation of these Terms; (d) your violation, misappropriation or infringement of any rights of another (including intellectual property rights or privacy rights); or (e) your conduct in connection with our Services.\n<br><br><b>Disclaimers<br></b>\nWe do not control, endorse or take responsibility for any third-party content available on or linked to by our Services, including User Content.\nYour use of our Services is at your sole risk. Our Services are provided “as is” and “as available” without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In addition, BOUNX does not represent or warrant that our Services are accurate, complete, reliable, current or error-free. While BOUNX attempts to make your access to and use of our Services safe, we cannot and do not represent or warrant that our Services or servers are free of viruses or other harmful components. You assume the entire risk as to the quality and performance of the Services.\n<br><br><b>Limitation of Liability<br></b>\nBOUNX and the other BOUNX Parties will not be liable to you under any theory of liability—whether based in contract, tort, negligence, strict liability, warranty, or otherwise—for any indirect, consequential, exemplary, incidental, special or punitive damages or lost profits, to the fullest extent permitted by the applicable law, even if BOUNX or the other BOUNX Parties have been advised of the possibility of such damages. The limitations of liability set for in this section will apply even if the remedies otherwise provided under these Terms, at law or in equity, fail of their essential purpose.\nThe total liability of BOUNX and the other BOUNX Parties, for any claim arising out of or relating to these Terms or our Services, regardless of the form of the action, is limited to the greater of (a) the amount paid, if any, by you to access or use our Services or (b) $100.\nThe limitations set forth in this section will not limit or exclude liability for the gross negligence, fraud or intentional misconduct of BOUNX or the other BOUNX Parties.\n<br><br><b>Assumption of Risk<br></b>\nYou assume all risks when using our Services, including all of the risks associated with interactions with other users. You agree to take all necessary precautions when interacting with other users.\n<br><br><b>Modifications to Our Services<br></b>\nBOUNX reserves the right to modify or discontinue, temporarily or permanently, our Services, or any features or portions thereof, without prior notice. You agree that BOUNX will not be liable for any modification, suspension or discontinuance of our Services, or any part thereof.\n<br><br><b>Dispute Resolution; Arbitration<br></b>\nPLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES AND CLAIMS WITH BOUNX AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US.\n<br><br><b>Binding Arbitration<br></b>\nExcept for any disputes, claims, suits, actions, causes of action, demands or proceedings (collectively, “Disputes”) arising out of or related to a violation of Sections 10 or 12 or Disputes in which either party seeks to bring an individual action in small claims court or seeks injunctive or other equitable relief for the alleged unlawful use of intellectual property, including, without limitation, copyrights, trademarks, trade names, logos, trade secrets or patents, you and BOUNX agree (a) to waive your and BOUNX’s respective rights to have any and all Disputes arising from or related to these Terms, our Services or the products and services available on our Services, resolved in a court, and (b) to waive your and BOUNX’s respective rights to a jury trial. Instead, you and BOUNX agree to arbitrate Disputes through binding arbitration (which is the referral of a Dispute to one or more persons charged with reviewing the Dispute and making a final and binding determination to resolve it instead of having the Dispute decided by a judge or jury in court).\nNo Class Arbitrations, Class Actions or Representative Actions\nYou and BOUNX agree that any Dispute arising out of or related to these Terms, our Services or the products and services available on our Services is personal to you and BOUNX and that such Dispute will be resolved solely through individual arbitration and will not be brought as a class arbitration, class action or any other type of representative proceeding. You and BOUNX agree that there will be no class arbitration or arbitration in which an individual attempts to resolve a Dispute as a representative of another individual or group of individuals. Further, you and BOUNX agree that a Dispute cannot be brought as a class or other type of representative action, whether within or outside of arbitration, or on behalf of any other individual or group of individuals.\n<br><br><b>Notice; Informal Dispute Resolution<br></b>\nYou and BOUNX agree that each party will notify the other party in writing of any arbitrable or small claims Dispute within thirty (30) days of the date it arises, so that the parties can attempt in good faith to resolve the Dispute informally. Notice to BOUNX will be sent by certified mail or courier to [address]. Your notice must include (a) your name, postal address, telephone number, the email address you use or used for your BOUNX account and, if different, an email address at which you can be contacted, (b) a description in reasonable detail of the nature or basis of the Dispute, and (c) the specific relief that you are seeking. Our notice to you will be sent electronically and will include (x) our name, postal address, telephone number and an email address at which we can be contacted with respect to the Dispute, (y) a description in reasonable detail of the nature or basis of the Dispute, and (z) the specific relief that we are seeking. If you and BOUNX cannot agree how to resolve the Dispute within thirty (30) days after the date notice is received by the applicable party, then either you or BOUNX may, as appropriate and in accordance with this Section 19, commence an arbitration proceeding or, to the extent specifically provided for in Section 19.1, file a claim in court.\n<br><br><b>Process<br></b>\nExcept for Disputes arising out of or related to a violation of Sections 10 or 12 or Disputes in which either party seeks to bring an individual action in small claims court or seeks injunctive or other equitable relief for the alleged unlawful use of intellectual property, including, without limitation, copyrights, trademarks, trade names, logos, trade secrets or patents, you and BOUNX agree that any Dispute must be commenced or filed by you or BOUNX within one (1) year of the date the Dispute arose, otherwise the underlying claim is permanently barred (which means that you and BOUNX will no longer have the right to assert such claim regarding the Dispute). You and BOUNX agree that (a) any arbitration will occur subject to the laws of the state or country of dispute, (b) arbitration will be conducted confidentially by a single arbitrator in accordance with the rules based on the country of dispute. You may also litigate a Dispute in the small claims court located in the county of your billing address if the Dispute meets the requirements to be heard in small claims court.\n<br><br><b>Authority of Arbitrator<br></b>\nAs limited by the FAA and these Terms, the arbitrator will have (a) the exclusive authority and jurisdiction to make all procedural and substantive decisions regarding a Dispute, including the determination of whether a Dispute is arbitrable, and (b) the authority to grant any remedy that would otherwise be available in court; provided, however, that the arbitrator does not have the authority to conduct a class arbitration or a representative action, which is prohibited by these Terms. The arbitrator may only conduct an individual arbitration and may not consolidate more than one individual’s claims, preside over any type of class or representative proceeding or preside over any proceeding involving more than one individual.\n<br><br><b>Severability<br></b>\nIf any term, clause or provision of this Section 19 is held invalid or unenforceable, it will be so held to the minimum extent required by law, and all other terms, clauses and provisions of this Section 19 will remain valid and enforceable. Further, the waivers set forth in Section 19.2 are severable from the other provisions of these Terms and will remain valid and enforceable, except as prohibited by applicable law.\n<br><br><b>Opt-Out Right<br></b>\nYou have the right to opt out of binding arbitration within thirty (30) days of the date you first accepted the terms of this Section 19 by writing to: engage@bounxsport.com. In order to be effective, the opt out notice must include your full name and clearly indicate your intent to opt out of binding arbitration. By opting out of binding arbitration, you are agreeing to resolve Disputes in accordance with Section 20.\n<br><br><b>Applicable Law and Venue<br></b>\nThese Terms and your use of our Services will be governed by and construed in accordance with the laws of the country the dispute is based in, without resort to its conflict of law provisions. To the extent the arbitration provision in Section 19 does not apply, you agree that any action at law or in equity arising out of or relating to these Terms will be filed only in the state and federal courts located in the country of dispute and you hereby irrevocably and unconditionally consent and submit to the exclusive jurisdiction of such courts over any suit, action or proceeding arising out of these Terms.\n<br><br><b>Termination<br></b>\nBOUNX reserves the right, without notice and in its sole discretion, to terminate your license to access and use our Services and to block or prevent your future access to and use of our Services.\n<br><br><b>Changes to These Terms<br></b>\nWe may make changes to these Terms from time to time. If we make changes, we will post the amended Terms to our Services and update the “Last Updated” date above. We may also attempt to notify you by sending an email notification to the address associated with your account or providing notice through our Services. Unless we say otherwise in our notice, the amended Terms will be effective immediately and your continued access to and use of our Services after we provide notice will confirm your acceptance of the changes. If you do not agree to the amended Terms, you must stop accessing and using our Services.\n<br><br><b>Severability<br></b>\nIf any provision of these Terms will be deemed unlawful, void or unenforceable, then that provision will be deemed severable from these Terms and will not affect the validity and enforceability of any remaining provisions.\n<br><br><b>Your Responsibilities as an Affiliated Club<br></b>\nYou are responsible for making sure that your Affiliates and Users comply with the terms of this agreement and applicable laws.\n<br><br><b>Liability for Affiliates and End Users.<br></b>\nYou are responsible for all activity occurring under your account. You will ensure that your Affiliates and End Users comply with all of the provisions of this Agreement and any applicable local, state, national and foreign laws, including those related to data privacy and transmission of personal data, at all times while using the Services. Any reference in this Agreement to your “access” or “use” of Services (or similar phrase) is deemed to include access or use by Affiliates and End Users, and any act or omission of an Affiliate or End User that does not comply with this Agreement will be deemed a breach of this Agreement by you. These are things you promise to do in connection with using the Services.\n<br><br><b>Data; Unauthorized Access; Maintaining Networks.<br></b>\nYou will: (a) have sole responsibility for the accuracy and quality of Your Data and for ensuring that your collection and use of Your Data complies with applicable laws, including those related to data privacy and transmission of personal data; (b) prevent unauthorized access to, or use of, the Services, and notify BOUNX promptly of any unauthorized access or use; and (c) have sole responsibility for obtaining, maintaining and paying for any hardware, telecommunications, Internet and other services needed to use the Services.\nThese are things you promise not to do in connection with using the Services.\n<br><br><b>Restrictions on Use.<br></b>\nYou and your Affiliates will not: (i) submit any infringing, obscene, defamatory, threatening, or otherwise unlawful or tortious material to the Services, including material that violates privacy rights; (ii) interfere with or disrupt the integrity or performance of the Services or the data contained therein; (iii) attempt to gain access to the Services or related systems or networks in a manner not permitted by this Agreement; (iv) post, transmit or otherwise make available through or in connection with the Services any virus, worm, Trojan horse, Easter egg, time bomb, spyware or other harmful computer code, files, scripts agents or programs; (v) restrict or inhibit any other person or entity from using the Services; (vi) remove any copyright, trademark or other proprietary rights notice from the Services; (vii) frame or mirror any portion of the Services, or otherwise incorporate any portion of the Services into any product or service; (viii) systematically download and store Services content; or (ix) use any robot, spider, site search/retrieval application or other manual or automatic device to retrieve, index, “scrape,” “data mine” or otherwise gather Services content, or reproduce or circumvent the navigational structure or presentation of the Services. Notwithstanding subsection (ix) above, and subject to compliance with any instructions posted in the robots.txt file located in the root directory of any Website, BOUNX grants to the operators of public search engines permission to use spiders to copy materials from the Website for the sole purpose of (and solely to the extent necessary for) creating publicly available, searchable indices of such materials, but not caches or archives of such materials. BOUNX reserves the right to revoke these permissions at any time and without notice\nYou are liable if any Cardholder Data is mishandled under your account.\n<br><br><b>Cardholder Data.<br></b>\nYou are solely responsible for any liability resulting from your or any Affiliate’s handling of Cardholder Data. You agree that you and Affiliates will comply with PCI DSS anytime the Services are used to process credit cards.\nYou will ensure all user names and passwords are kept confidential.\n<br><br><b>User Names and Passwords.<br></b>\nBOUNX may reject or require that you change any user name or password under your account. User names and passwords are for internal business use only and may not be shared with any third party, including any competitor of BOUNX. You, and not BOUNX, are responsible for any use or misuse of user names or passwords associated with your account.\n<br><br><b>Data Ownership and Use for Affiliated Clubs<br></b>\nYou own all data you provide to us, but you also grant us a license to use it for certain purposes, for example, to improve our products or to provide you with complementary products of our partners.\n<br><br><b>Your Data.<br></b>\nAs between you and BOUNX, you own all right, title and interest in Your Data. You hereby grant to BOUNX a nonexclusive, worldwide, assignable, sublicensable, fully paid-up and royalty-free license and right to copy, distribute, display and perform, publish, prepare derivative works of and otherwise use Your Data for the purposes of providing, improving and developing BOUNX products and services and/or complementary products and services of our partners. You represent and warrant to BOUNX that you have all rights necessary to grant the licenses in this Section 6.1, and that your provision of Your Data through and in connection with the Services does not violate any applicable laws or rights of any third party.\nThis describes our rights in data that we collect through independent sources, like the BOUNX App.\n<br><br><b>BOUNX Data.<br></b>\nNotwithstanding Section 6.1, all right, title and interest in any data or information collected by BOUNX independently and without access to, reference to or use of any of Your Data, including, without limitation, any data or information BOUNX obtains about End Users through the BOUNX App (whether the same as Your Data or otherwise), will be solely owned by BOUNX (collectively, “BOUNX Data”).\nWe will own all Aggregated Data.\n<br><br><b>Aggregated Data.<br></b>\nBOUNX will own all Aggregated Data. You agree that nothing in this Agreement will prohibit BOUNX from utilizing Aggregated Data for any purpose, provided such Aggregated Data does not reveal any personally identifying information about you or any End Users.\nOur Privacy Policy covers how we collect and use personal information.\n<br><br><b>Personal Information.<br></b>\n<br><br><b>Personal Information. <br></b>Our Privacy Policy governs how we collect and use personal information that is submitted through the Services. By accessing or using the Services, you agree to that you have read and accept our Privacy Policy.\n<br><br><b>Protection and Security.<br></b>\nDuring the Subscription Term, BOUNX will maintain administrative, physical and technical safeguards designed for the protection and integrity of Your Data. BOUNX will maintain PCI DSS compliance for the portions of the Services that store and process Cardholder Data. We will notify one another if either of us becomes aware that Your Data has been compromised\n<br><br><b>Unauthorized Disclosure.<br></b>\nIf either Party believes that there has been a disclosure of Your Data in a manner not authorized under this Agreement, such Party will promptly notify the other Party. Additionally, each Party will reasonably assist the other Party in remediating or mitigating any potential damage, including any notification which should be sent to individuals impacted or potentially impacted by such unauthorized disclosure.\nWe are not responsible for resolving or intervening in any dispute over Your Data.\n<br><br><b>Data-Related Disputes.<br></b>\nYou are solely responsible for resolving disputes regarding ownership or access to Your Data, including those involving any current or former owners, co-owners, employees or contractors of your business. You acknowledge and agree that BOUNX has no obligation whatsoever to resolve or intervene in such disputes.\n<br><br><b>Term, Termination and Suspension<br></b>\nWe can each end this Agreement anytime by providing 30 days’ advance notice.\n\n<br><br><b>Term.<br></b>\nUnless otherwise specified in an Order Form, the term of this Agreement will be month to month (“Subscription Term”). The Subscription Term commences on the Effective Date and will automatically renew on a monthly basis until either Party terminates in accordance with this Agreement. Either Party may terminate the Agreement at any time, for any reason or no reason, by providing notice to the other Party at least thirty (30) days before the end of the relevant Subscription Term. Unless otherwise specified in an Order Form, Subscription Fees during any automatic renewal term will revert to the current pricing in effect at the time such renewal term commences.\nWe have the right to end the Agreement immediately if you breach it.\n<br><br><b>Termination for Cause.<br></b>\nBOUNX may terminate this Agreement, effective immediately upon notice to you, if you or an Affiliate are in material breach of this Agreement. In the event of a termination pursuant to this Section 8.2, in addition to other amounts you may owe BOUNX, you must immediately pay any unpaid Subscription Fees associated with the remainder of the Subscription Term. In no event will any termination relieve you of your obligation to pay any fees payable to BOUNX for the period prior to the effective date of termination.\nThis describes what will occur and the rights that apply when the Agreement is terminated.\n<br><br><b>Rights on Termination or Expiration.<br></b>\nUpon termination or expiration of this Agreement (a) all Order Forms will automatically terminate and be of no force or effect; (b) you will have no rights to continue use of the Services and will cease accessing and/or using the Services; and (c) except as specified in the following paragraph, BOUNX will have no obligation to maintain your Services account or to retain or forward any data to you or any third party, except as required by applicable law.\nUpon request by you within thirty (30) days following termination of this Agreement, and provided that you have paid BOUNX all amounts owed under this Agreement, BOUNX will make Your Data available to you through BOUNX’s standard web services for a period of up to thirty (30) days after receipt of such notice. After such thirty (30) day period, BOUNX will have no obligation to retain or provide Your Data, except as required by applicable law. If at any time during the Subscription Term you require BOUNX’s assistance in retrieving Your Data, additional fees may apply.\nThe following will survive any expiration or termination of this Agreement: the Introduction and Sections 1, 2.3, 2.6, 3, 4 (other than Section 4.1), 5, 6, 7, 8.2, 8.3, 9.1, 9.3, 10, 11, 12, 13, 14 and 15. We have the right to suspend or terminate the Services at any time if we detect harmful or illegal activity under your account.\n<br><br><b>Right to Terminate or Suspend Services.<br></b>\nWe may suspend or terminate the Services (or any portion thereof) at any time without notice if we believe (a) that any activity or use of Services in connection with your account violates this Agreement, the intellectual property rights of a third party or applicable laws, or is otherwise disruptive or harmful to BOUNX or any third party, or (b) that we are required to do so by law.\n<br><br><b>Miscellaneous<br></b>\nThese Terms constitute the entire agreement between you and BOUNX relating to your access to and use of our Services and your order, receipt and use of products or services made available through our Services. These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you without the prior written consent of BOUNX. No waiver of any provision of these Terms will constitute a waiver of such provision in any prior, concurrent or subsequent circumstance, and BOUNX’s failure to assert any right or provision under these Terms will not constitute a waiver of such right or provision. Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third party beneficiary rights upon any other person or entity.\nQuestions & Contact Information\nQuestions or comments about our Services may be directed to our contact page.\n  </div>\n  <br><br><br><br><br><br><br>\n</div>\n\n<img *ngIf=\"s\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div id=\"bsearch\" *ngIf=\"s\" class=\"bsearch2\">\n  <div class=\"searching\">\n    <br>\n    <span style=\"color: black; font-size: 18px;\">Search A Booking</span><br><br><br>\n    Booking ID<br><br>\n    <input><br><br>\n    Booker Name<br><br>\n    <input><br><br>\n    Contact No.<br><br>\n    <input type=\"number\"><br><br>\n    Email<br><br>\n    <input type=\"email\"><br><br>\n    Date<br><br>\n    <input type=\"date\"><br><br><br>\n    <button class=\"s\" (click)=\"sbooking()\">Search</button><br><br>\n    <br><br><br><br>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n<img *ngIf=\"b\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div id=\"blockdate\" *ngIf=\"b\" class=\"blockdate\">\n  <div class=\"searching\">\n    <br>\n    <span style=\"color: black; font-size: 18px;\">Block Date</span><br><br><br>\n    Date<br><br>\n    <input type=\"date\"><br><br>\n    Start Time<br><br>\n    <select style=\"width: 50%;\"class=\"inputdropdown\">\n      <option value=\"0\">Hour</option>\n    </select>\n    <select style=\"position: relative; width: 50%;right: -2%;\" class=\"inputdropdown\">\n      <option value=\"0\">Minute</option>\n    </select><br><br>\n    End Time<br><br>\n    <select style=\"width: 50%;\" class=\"inputdropdown\">\n      <option value=\"0\">Hour</option>\n    </select>\n    <select style=\"position: relative; width: 50%;right: -2%;\" class=\"inputdropdown\">\n      <option value=\"0\">Minute</option>\n    </select><br><br>\n    Reason<br><br>\n    <textarea #bio class=\"input\" rows=\"4\"></textarea><br><br>\n    <button class=\"s\" (click)=\"blockdate()\">Block Date</button><br><br>\n  </div>\n</div>\n<div *ngIf=\"bottom\">\n<div class=\"bottom\">\n  <button (click)=\"search()\" class=\"searchButton\">SEARCH BOOKING</button>\n  <button *ngIf=\"Option[0]\" (click)=\"block()\" class=\"blockButton\">BLOCK DATE +</button>\n</div>\n</div>\n\n<img *ngIf=\"Clicked\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div id=\"sidemenu\" class=\"sidemenu1\">\n  <div style=\"position: absolute; width: 100%; height: 90%; overflow-y:scroll;\">\n  <img src=\"/assets/pics/Login-bg3.png\" style=\"position: absolute; right:0%; top:0%; width:200%; height: 190px\">\n  <img (click)=\"click2()\" src=\"/assets/pics/cross.png\" class=\"cross\">\n  <img src=\"/assets/pics/lodo-logo.png\" class=\"logo\">\n\n  <div class=\"text\">\n    Hi, {{name}}\n    <br><br><br><br>\n    <select class=\"inputdropdown\" style=\"width: 100%;\">\n      <option value=\"0\">No Club Yet</option>\n    </select>\n  </div>\n\n  <div class=\"topics\">\n    <ul>\n    <li (click)=\"options(0)\"> Master Calendar </li>\n    <li (click)=\"options(1)\"> My Classes </li>\n    <li (click)=\"options(2)\"> My Profile </li>\n    <li (click)=\"options(3)\"> Chat </li>\n    <li (click)=\"logout()\" style=\"color: #7F7F7F; border-bottom:none\"> Logout </li><br>\n  </ul>\n  </div>\n</div>\n  <div class=\"belowtext\">\n    <div style=\"position: relative; left:10px;\">\n    <br><span style=\"font-weight: bold\">© 2017-2018 BOUNX Sport</span><br><br>\n    <span class=\"hove\" (click)=\"options(4)\">Terms & Conditions</span> - <span class=\"hove\" (click)=\"options(5)\">Privacy Policy</span> - <a href=\"mailto:internshiplakshay@gmail.com\"><span class=\"hove\">Contact Us</span></a><br><br>\n  </div>\n  </div>\n  <br>\n\n</div>\n</html>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, route, loginService, cdRef) {
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.cdRef = cdRef;
        this.Clicked = false;
        this.Option = [true, false, false, false, false, false];
        this.number = 0;
        this.sport = "BasketBall";
        this.s = false;
        this.b = false;
        this.bottom = true;
        this.data = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem('data'));
        this.name = this.data[0].fname + ' ' + this.data[0].lname;
        this.screenWidth = window.outerWidth;
    };
    DashboardComponent.prototype.options = function (value) {
        var i;
        console.log(value);
        for (i = 0; i < 6; i++) {
            if (i == value) {
                this.Option[i] = true;
            }
            else {
                this.Option[i] = false;
            }
            console.log(this.Option[i]);
        }
        if (value == 4 || value == 5 || value == 2)
            this.bottom = false;
        else {
            this.bottom = true;
        }
        this.click2();
    };
    DashboardComponent.prototype.click = function () {
        this.Clicked = !this.Clicked;
        this.screenWidth = window.outerWidth;
        this.screenHeight = window.outerHeight;
        if (this.screenWidth < 500) {
            document.getElementById('sidemenu').className = 'sidemenu22';
        }
        else {
            document.getElementById('sidemenu').className = 'sidemenu2';
        }
    };
    DashboardComponent.prototype.click2 = function () {
        this.Clicked = !this.Clicked;
        document.getElementById('sidemenu').className = 'sidemenu1';
    };
    DashboardComponent.prototype.search = function () {
        this.s = !this.s;
        this.b = false;
        this.cdRef.detectChanges();
        this.screenWidth = window.outerWidth;
        this.screenHeight = window.outerHeight;
        this.change();
    };
    DashboardComponent.prototype.block = function () {
        this.b = !this.b;
        this.s = false;
        this.cdRef.detectChanges();
        this.screenWidth = window.outerWidth;
        this.screenHeight = window.outerHeight;
        this.change();
    };
    DashboardComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['./login']);
    };
    DashboardComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
    };
    DashboardComponent.prototype.change = function () {
        if (this.screenWidth < 500) {
            var y = document.getElementById('bsearch');
            if (y != null)
                y.className = 'bsearch2';
            y = document.getElementById('blockdate');
            if (y != null)
                y.className = 'blockdate2';
            var x = document.getElementsByClassName('sidemenu2');
            if (x.length != 0)
                x[0].className = 'sidemenu22';
        }
        else {
            var y = document.getElementById('bsearch');
            if (y != null)
                y.className = 'bsearch';
            y = document.getElementById('blockdate');
            if (y != null)
                y.className = 'blockdate';
            var x = document.getElementsByClassName('sidemenu22');
            if (x.length != 0)
                x[0].className = 'sidemenu2';
        }
    };
    DashboardComponent.prototype.sbooking = function () {
        this.s = false;
    };
    DashboardComponent.prototype.blockdate = function () {
        this.b = false;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.x = [];
        this.data = [];
    }
    LoginService.prototype.update = function (data) {
        console.log(data);
        return this.http.get("/dashboard/" + data);
    };
    LoginService.prototype.send = function (data) {
        this.data = data;
    };
    LoginService.prototype.receive = function () {
        return this.data;
    };
    LoginService.prototype.login = function (username, password) {
        console.log(username, password);
        return this.http.get('/login/' + '{ "username":"' + username + '","password":"' + password + '"}');
    };
    LoginService.prototype.forgotPassword = function (email) {
        return this.http.get('/login/fw/' + '{"username":"' + email + '","vfcode":"","status":"reset"}');
    };
    LoginService.prototype.resetPassword = function (code) {
        console.log('reset');
        console.log('/login/reset/{"vfcode":"' + code + '"}');
        return this.http.get('/login/reset/{"vfcode":"' + code + '"}');
    };
    LoginService.prototype.changePassword = function (username, password) {
        return this.http.get('/reset/{"username":"' + username + '","password":"' + password + '","status":"active"}');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back1{\n  position: fixed;\n  height: 101%;\n  bottom: -1%;\n  right: -1%;\n}\n\n.back2{\n  position: fixed;\n  width: 101%;\n  bottom: -1%;\n  right: -1%;\n}\n\n.black{\n  position: fixed;\n  height: 102%;\n  bottom: -1%;\n  right: -1%;\n  opacity: 0.5;\n}\n\n.load{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.logo{\n  position: absolute;\n  right: 15%;\n  width: 25%;\n  top: 15%;\n  min-width: 200px;\n}\n\n.logo2{\n  position: absolute;\n  left: 15%;\n  width: 70%;\n  top: 10%;\n  min-width: 200px;\n}\n\n::-webkit-input-placeholder{\n  color: lightgrey\n}\n\n:-ms-input-placeholder{\n  color: lightgrey\n}\n\n::-ms-input-placeholder{\n  color: lightgrey\n}\n\n::placeholder{\n  color: lightgrey\n}\n\ninput{\n  placeholder: none;\n  position: relative;\n  height: 50px;\n  width: 100%;\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1.5px solid lightgrey;\n  font-size: 16px;\n  color: white;\n  padding: 2px 2px 1px 2px;\n}\n\ninput:focus{\n  placeholder.color: #68D2C4;\n  outline:none;\n  position: relative;\n  height: 50px;\n  width: 100%;\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1.5px solid #68D2C4;\n  font-size: 16px;\n  color: white;\n  padding: 2px 2px 1px 2px;\n}\n\n.loginbutton{\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  outline:none;\n  padding: 12px 45px 12px 45px;\n  font-size: 20px;\n  background-color: #68D2C4;\n  border: 1px solid transparent;\n  font-weight: bold;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.loginbutton:hover{\n  cursor: pointer;\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  border: 2px 2px 2px 2px;\n  border-color: #68D2C4;\n  padding: 12px 45px 12px 45px;\n  font-size: 20px;\n  background-color: transparent;\n  font-weight: bold;\n  border: 1px solid #68D2C4;\n  color: #68D2C4;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.registerButton{\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  outline:none;\n  padding: 12px 35px 12px 35px;\n  font-size: 16px;\n  background-color: white;\n  border: none;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.registerButton:hover{\n  cursor: pointer;\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  outline:none;\n  padding: 12px 35px 12px 35px;\n  font-size: 16px;\n  background-color: grey;\n  border: none;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.forgotPassword{\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  color: white;\n  font-size: 15px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.forgotPassword:hover{\n  cursor: pointer;\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  color: #68D2C4;\n  font-size: 15px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.vmsg{\n  padding: 1px 5px 1px 15px;\n  position: static;\n  background-color: #F1585A;\n  color: white;\n  max-width: 400px;\n}\n\n.cross{\n  position: relative;\n  left: 94%;\n  top: 30px;\n  height: 15px;\n  width: 15px;\n  cursor: pointer;\n}\n\n.paragraph{\n  max-width: 300px;\n  word-wrap: break-word;\n  font-size: 12px;\n}\n\n.submitbutton{\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  outline:none;\n  padding: 12px 45px 12px 45px;\n  font-size: 20px;\n  background-color: #212121;\n  border: 1px solid transparent;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: white;\n  font-weight: bold;\n}\n\n.submitbutton:hover{\n  cursor: pointer;\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  border: 2px 2px 2px 2px;\n  border-color: #68D2C4;\n  padding: 12px 45px 12px 45px;\n  font-size: 20px;\n  background-color: transparent;\n  font-weight: bold;\n  border: 1px solid #68D2C4;\n  color: #68D2C4;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.loginButton2{\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  outline:none;\n  padding: 12px 35px 12px 35px;\n  font-size: 16px;\n  background-color: #68D2C4;\n  border: none;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.loginButton2:hover{\n  cursor: pointer;\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.25s;\n  outline:none;\n  padding: 12px 35px 12px 35px;\n  font-size: 16px;\n  background-color: #40847b;\n  border: none;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.error{\n  position: fixed;\n  width: 40%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.error2{\n  position: fixed;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.errormsg{\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n}\n\n.ok{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n  outline: none;\n}\n\n.headings{\n  font-size: 14px;\n  color: #7F7F7F;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\">\n<img id=\"bi\" src={{img}} class=\"back1\">\n<div id='container' class=\"logo\">\n  <img src=\"/assets/pics/lodo-logo.png\">\n  <br><br><br>\n  <div *ngIf=\"log\">\n    <input #username placeholder=\"Username\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Username'\" name=\"Username\"><br><br>\n    <input #password placeholder=\"Password\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Password'\" name=\"Password\" type=\"password\"><br>\n    <div *ngIf=\"isnothidden\">\n      <img src='/assets/pics/cross.png' class=\"cross\" (click)=\"hide()\">\n      <div class=\"vmsg\">\n        <p class='paragraph'>{{data}}</p>\n      </div>\n    </div>\n    <br>\n    <button class=\"loginbutton\" (click)=\"login(username.value,password.value)\">LOGIN</button>\n    <br><br><br><br>\n    <button (click)=\"registerHere()\" class=\"registerButton\">Register Here</button><br><br>\n    <a class=\"forgotPassword\" (click)=\"forgetpw()\">Forgot Password? Click Here</a>\n  </div>\n  <div *ngIf=\"fw\">\n    <br>\n    <a class=\"forgotPassword\" style=\"color: lightgrey\">Forgot Your Password? Just enter your registered email address to receive instructions for resetting your password.</a><br><br>\n    <input #email placeholder=\"Email\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Email'\" name=\"Email\"><br>\n    <div *ngIf=\"isnothiddenfw\">\n      <img src='/assets/pics/cross.png' class=\"cross\" (click)=\"hide()\" style=\"left: 90%\">\n      <div id=\"forget\" class=\"vmsg\" style=\"background-color: #F1585A\">\n        <p id=\"forgett\" class='paragraph' style=\"color: white\">{{forgetdata}}</p>\n      </div>\n    </div>\n    <br>\n    <button class=\"submitbutton\" (click)=\"submit(email.value)\">SUBMIT</button><br><br><br><br><br>\n    <button class=\"loginButton2\" (click)=\"loginn()\">Login Here</button><br><br>\n    <a class=\"forgotPassword\" (click)=\"registerHere()\">Don't have an account? Register here</a>\n  </div>\n  <div *ngIf=\"reset\">\n    <br>\n    <a class=\"forgotPassword\" style=\"color: lightgrey\">A verification code has been sent to your email. Enter the verification code to reset your password.</a><br><br>\n    <input #code placeholder=\"Verification Code\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Verification Code'\" name=\"Code\"><br>\n    <div *ngIf=\"wrongcode\">\n      <img src='/assets/pics/cross.png' class=\"cross\" (click)=\"hide()\" style=\"left: 90%\">\n      <div id=\"forget\" class=\"vmsg\" style=\"background-color: #F1585A\">\n        <p id=\"forgett\" class='paragraph' style=\"color: white\">Verification Code is Invalid</p>\n      </div>\n    </div>\n    <br>\n    <button class=\"submitbutton\" (click)=\"submitreset(code.value)\">SUBMIT</button><br><br><br><br><br>\n    <button class=\"loginButton2\" (click)=\"loginn()\">Login Here</button><br><br>\n    <a class=\"forgotPassword\" (click)=\"registerHere()\">Don't have an account? Register here</a>\n  </div>\n</div>\n<img *ngIf=\"Clicked\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<img *ngIf=\"Clicked\" src=\"/assets/pics/ajax-loader.gif\" class=\"load\">\n<img *ngIf=\"error\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div id=\"error\" *ngIf=\"error\" class=\"error\">\n<div class=\"errormsg\">\n  <h3>{{popupmsg}}</h3>\n  <p class=\"headings\">{{errormsg}}</p><br>\n</div>\n<button (click)=\"ok()\" class=\"ok\">OK</button>\n</div>\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, loginService, cdRef) {
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.cdRef = cdRef;
        this.isnothidden = false;
        this.isnothiddenfw = false;
        this.max = 3;
        this.Clicked = false;
        this.data = 'Login Not Enabled at the moment';
        this.log = true;
        this.re = /\S+@\S+\.\S+/;
        this.x = [];
        this.forgetdata = "Your password reset link has been sent to your email. Please follow the instructions to create a new password.";
        this.fw = false;
        this.reset = false;
        this.wrongcode = false;
    }
    LoginComponent.prototype.change = function () {
        if (this.screenWidth > ((1280 / 725) * this.screenHeight)) {
            var img2 = document.getElementById('bi');
            img2.className = 'back2';
        }
        else {
            var img2 = document.getElementById('bi');
            img2.className = 'back1';
        }
    };
    LoginComponent.prototype.change2 = function () {
        if (this.screenWidth < 600) {
            document.getElementById('container').className = "logo2";
            var error = document.getElementById('error');
            console.log(error);
            if (error != null)
                error.className = 'error2';
        }
        else {
            document.getElementById('container').className = "logo";
            var error = document.getElementById('error');
            if (error != null)
                error.className = 'error';
        }
    };
    LoginComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
        this.change2();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var x = Math.floor(Math.random() * Math.floor(this.max));
        this.id = x + 1;
        this.img = "/assets/pics/BG_login_0" + this.id + '.jpg';
        this.screenWidth = window.outerWidth;
        this.screenHeight = window.outerHeight;
        this.change();
        this.change2();
        localStorage.clear();
        localStorage.setItem('sessionKey', 'login');
    };
    LoginComponent.prototype.registerHere = function () {
        this.Clicked = true;
        this.router.navigate(['../register'], { relativeTo: this.route });
    };
    LoginComponent.prototype.hide = function () {
        this.isnothidden = !this.isnothidden;
        this.isnothiddenfw = !this.isnothiddenfw;
        this.wrongcode = !this.wrongcode;
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (username == '') {
            this.data = "Email address is required!";
            this.isnothidden = true;
        }
        else if (!this.re.test(username)) {
            this.isnothidden = true;
            this.data = "Email Invalid";
        }
        else if (password == '') {
            this.isnothidden = true;
            this.data = "Password is required!";
        }
        else {
            this.loginService.login(username, password).subscribe(function (data) {
                console.log(data);
                if (!data) {
                    _this.data = "To login successfully, please ensure that you have entered your email address and password correctly";
                    _this.isnothidden = true;
                }
                else if (data[0].status == 'inactive') {
                    _this.popupmsg = "Error!";
                    _this.errormsg = "Please verify your email to login";
                    _this.error = true;
                    _this.cdRef.detectChanges();
                    _this.screenHeight = window.outerHeight;
                    _this.screenWidth = window.outerWidth;
                    console.log(_this.screenWidth);
                    _this.change2();
                }
                else {
                    _this.Clicked = true;
                    localStorage.setItem('sessionKey', 'loggedin');
                    localStorage.setItem('data', JSON.stringify(data));
                    _this.loginService.send(data);
                    _this.router.navigate(['../dashboard'], { relativeTo: _this.route });
                }
            });
        }
    };
    LoginComponent.prototype.forgetpw = function () {
        this.fw = true;
        this.log = false;
        this.reset = false;
    };
    LoginComponent.prototype.loginn = function () {
        this.fw = false;
        this.log = true;
        this.reset = false;
    };
    LoginComponent.prototype.resetpage = function () {
        this.fw = false;
        this.log = false;
        this.reset = true;
    };
    LoginComponent.prototype.submit = function (email) {
        var _this = this;
        this.loginService.forgotPassword(email).subscribe(function (data) {
            if (data == true) {
                _this.reset = true;
                _this.fw = false;
                _this.log = false;
            }
            else {
                _this.forgetdata = "Email is not registered";
                _this.isnothiddenfw = true;
            }
        });
    };
    LoginComponent.prototype.submitreset = function (code) {
        var _this = this;
        this.loginService.resetPassword(code).subscribe(function (data) {
            if (!data) {
                _this.wrongcode = true;
            }
            else {
                _this.router.navigate(['reset'], { queryParams: data });
            }
        });
    };
    LoginComponent.prototype.ok = function () {
        this.error = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mastercalendar/mastercalendar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/mastercalendar/mastercalendar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/mastercalendar/mastercalendar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/mastercalendar/mastercalendar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html style=\"position: fixed; top: 85px; left: 10px; width: 97%; height: 75%\" (window:resize)=\"onResize($event)\">\n  <script src=\"//dashboard.time.ly/js/embed.js\" data-src=\"https://events.time.ly/n35443t\" data-max-height=\"500\" id=\"timely_script\" class=\"timely-script\"></script>\n  <iframe id=\"iframe\" style=\"position: absolute; width: 100%; height: 120%; background-color: #F4F4F4; border: none; outline: none; overflow: hidden\" src=\"https://tockify.com/bounx/monthly\"></iframe>\n  <!--<div data-tockify-component=\"calendar\" data-tockify-calendar=\"spirited\" data-tockify-height=\"600px\"></div>\n  <script data-cfasync=\"false\" data-tockify-script=\"embed\" src=\"https://public.tockify.com/browser/embed.js\"></script>\n\n  aksdfnkjasdnfkjsandkjfnksandkfsjn-->\n</html>\n"

/***/ }),

/***/ "./src/app/mastercalendar/mastercalendar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mastercalendar/mastercalendar.component.ts ***!
  \************************************************************/
/*! exports provided: MastercalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastercalendarComponent", function() { return MastercalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MastercalendarComponent = /** @class */ (function () {
    function MastercalendarComponent(loginService) {
        this.loginService = loginService;
        this.data = [];
    }
    MastercalendarComponent.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem('data'));
        console.log(this.data);
        this.screenWidth = window.outerWidth;
        this.screenHeight = window.outerHeight;
        this.change();
    };
    MastercalendarComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
    };
    MastercalendarComponent.prototype.change = function () {
        if (this.screenWidth < 500) {
            var x = document.getElementsByTagName('iframe');
            x[0].src = "https://tockify.com/bounx/upcoming";
            x[0].style.height = "105%";
        }
        else {
            var x = document.getElementsByTagName('iframe');
            x[0].src = "https://tockify.com/bounx/monthly";
            x[0].style.height = "120%";
        }
    };
    MastercalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mastercalendar',
            template: __webpack_require__(/*! ./mastercalendar.component.html */ "./src/app/mastercalendar/mastercalendar.component.html"),
            styles: [__webpack_require__(/*! ./mastercalendar.component.css */ "./src/app/mastercalendar/mastercalendar.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], MastercalendarComponent);
    return MastercalendarComponent;
}());



/***/ }),

/***/ "./src/app/myclasses/myclasses.component.css":
/*!***************************************************!*\
  !*** ./src/app/myclasses/myclasses.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\n  position: relative;\n  width: 102%;\n  height: 30px;\n  left: -1%;\n  top: 85px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  overflow-y: none;\n}\n\n.buttons{\n  position: absolute;\n  left: 6%;\n  bottom: -3%;\n  color: grey;\n}\n\n.headingButton{\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 17px;\n  padding-bottom: 6px;\n  color: grey;\n}\n\n.headingButton2{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  bottom: -1px;\n  outline: none;\n}\n\n.headingButton:hover{\n  background: transparent;\n  border: none;\n  font-size: 17px;\n  color: grey;\n  cursor: pointer;\n  padding-bottom: 6px;\n  outline: none;\n}\n\n.headingButton2:hover{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  cursor: pointer;\n  outline: none;\n}\n\n.inside{\n  position: relative;\n  top: 93px;\n  left: 48%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 85%;\n  top: 112px;\n  padding: 25px;\n  color: \t#252525;\n  overflow-y: none;\n}\n\n.names{\n  width: 100%;\n  position: absolute;\n  left: 1%;\n  font-size: 13px;\n  color: grey;\n  word-spacing: 300px;\n}\n\n.classes{\n  position: relative;\n  width: 100%;\n  background-color: white;\n  padding: 10px;\n\n}\n"

/***/ }),

/***/ "./src/app/myclasses/myclasses.component.html":
/*!****************************************************!*\
  !*** ./src/app/myclasses/myclasses.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<div class=\"top\">\n  <div class=\"buttons\">\n    <button id=\"1\" class=\"headingButton2\" (click)=\"buttonClick(1)\">My Classes</button> -\n    <button id=\"2\" class=\"headingButton\" (click)=\"buttonClick(2)\">Past Classes</button>\n  </div>\n</div>\n<div class=\"inside\">\n  <div style=\"position: relative; width: 100%; left: 0%;\">\n  <div class=\"names\">\n    Class-Name\n  </div>\n  <div class=\"names\" style=\"left: 41%\">\n    Play-Date\n  </div>\n  <div class=\"names\" style=\"left: 81%\">\n    Attendance\n  </div>\n</div>\n  <br>\n  <div class=\"classes\">\n    You don't have any class scheduled yet! Join a club and get your first class booked today.\n  </div>\n  <br>\n  <div style=\"position: relative;background-color: grey;width:100%;height: 5px; padding: 0px 10px 0px 10px; top: -20px;\">\n  </div>\n  <br>\n  <div style=\"position: relative;background-color: darkgrey;width:100%;height: 10px; padding: 0px 10px 0px 10px; top: -40px;\">\n  </div>\n  <br>\n  <div style=\"position: relative; top: -40px; font-size: 20px; word-spacing: 20px;\">\n    <img src=\"/assets/pics/left-arrow.png\" style=\"width: 10px;\">     /\n    <img src=\"/assets/pics/right-arrow.png\" style=\"width: 10px;\">\n  </div>\n</div>\n</html>\n"

/***/ }),

/***/ "./src/app/myclasses/myclasses.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myclasses/myclasses.component.ts ***!
  \**************************************************/
/*! exports provided: MyclassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyclassesComponent", function() { return MyclassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyclassesComponent = /** @class */ (function () {
    function MyclassesComponent(loginService) {
        this.loginService = loginService;
        this.data = [];
    }
    MyclassesComponent.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem('data'));
        console.log(this.data);
    };
    MyclassesComponent.prototype.buttonClick = function (value) {
        if (value == 1) {
            document.getElementById('1').className = "headingButton2";
            document.getElementById('2').className = "headingButton";
        }
        else if (value == 2) {
            document.getElementById('1').className = "headingButton";
            document.getElementById('2').className = "headingButton2";
        }
    };
    MyclassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myclasses',
            template: __webpack_require__(/*! ./myclasses.component.html */ "./src/app/myclasses/myclasses.component.html"),
            styles: [__webpack_require__(/*! ./myclasses.component.css */ "./src/app/myclasses/myclasses.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], MyclassesComponent);
    return MyclassesComponent;
}());



/***/ }),

/***/ "./src/app/myprofile/myprofile.component.css":
/*!***************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\n  position: relative;\n  width: 102%;\n  height: 30px;\n  left: -1%;\n  top: 85px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  overflow-y: none;\n}\n\n.buttons{\n  position: absolute;\n  left: 6%;\n  bottom: -3%;\n  color: grey;\n}\n\n.headingButton{\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 17px;\n  padding-bottom: 6px;\n  color: grey;\n}\n\n.headingButton2{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  bottom: -1px;\n  outline: none;\n}\n\n.headingButton:hover{\n  background: transparent;\n  border: none;\n  font-size: 17px;\n  color: grey;\n  cursor: pointer;\n  padding-bottom: 6px;\n  outline: none;\n}\n\n.headingButton2:hover{\n  background: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid black;\n  font-size: 17px;\n  color: black;\n  padding-bottom: 6px;\n  cursor: pointer;\n  outline: none;\n}\n\n.inside{\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 85%;\n  top: 85px;\n  padding: 25px;\n  color: \t#252525;\n  overflow-y: none;\n}\n\n.profile1{\n  position: absolute;\n  width: 40%;\n  left: 0%;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 25px;\n  font-size: 15px;\n}\n\n.profile2{\n  position: absolute;\n  width: 55%;\n  right: 0%;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 25px;\n  font-size: 15px;\n  padding: 10px 20px 8px 20px;\n  overflow-y: scroll;\n  overflow-x: none;\n}\n\n.profile1change{\n  position: relative;\n  width: 100%;\n  left: 0%;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 25px;\n  font-size: 15px;\n}\n\n.profile2change{\n  position: relative;\n  width: 100%;\n  left: -20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 25px;\n  font-size: 15px;\n  padding: 10px 20px 8px 20px;\n  overflow-y: scroll;\n  overflow-x: none;\n}\n\n.button1{\n  position: relative;\n    font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 1px solid lightgrey;\n    background: transparent;\n    width: 90%;\n    text-align: left;\n}\n\n.headings{\n  font-size: 14px;\n  color: #7F7F7F;\n}\n\ninput{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n}\n\n.register{\n  position: relative;\n  width: 80%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: #212121;\n  padding: 5% 10% 5% 10%;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: white;\n  text-align: center;\n}\n\n.register:hover{\n  position: relative;\n  width: 80%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: black;\n  padding: 5% 10% 5% 10%;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: white;\n  text-align: center;\n  cursor: pointer;\n}\n\n.inputdropdown{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  background-color: white;\n  width: 100%;\n  left: 5%;\n}\n\n.inputdropdown2{\n  position: absolute;\n  right: 3%;\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  background-color: white;\n  width: 47%;\n}\n\n.input{\n  font-size: 13px;\n  outline: none;\n  border-right: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n  resize: none;\n}\n\n.user{\n  position: relative;\n  width: 135px;\n  height: 135px;\n  border: 3px solid #FE9953;\n  border-radius: 50%;\n  left: 0%;\n}\n\n.input2{\n  position: relative;\n  left: 50%;\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 50%;\n}\n\n.input3{\n  position: absolute;\n  right: 3%;\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 45%;\n}\n\n.add{\n  cursor: pointer;\n  color: #70CBC4;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.close{\n  font-size: 15px;\n  color: #70CBC4;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.black{\n  position: fixed;\n  height: 102%;\n  width: 102%;\n  bottom: -1%;\n  right: -1%;\n  left: -1%;\n  opacity: 0.5;\n  z-index: 5;\n}\n\n.error{\n  position: fixed;\n  width: 40%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  z-index: 6;\n}\n\n.errormsg{\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n  z-index: 6;\n}\n\n.ok{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n  outline: none;\n}\n\n.form{\n  position: relative;\n  width: 85%;\n  top: 0%;\n  left: 0%;\n  box-shadow: 1px 1px 2px 2px lightgrey;\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/myprofile/myprofile.component.html":
/*!****************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\">\n<div class=\"top\">\n  <div class=\"buttons\">\n    <button class=\"headingButton2\">My Profile</button>\n  </div>\n</div><br>\n\n<div class=\"inside\">\n  <div id=\"profile1\" class=\"profile1\">\n    <div class=\"button1\">\n      <button id='1' (click)=\"buttonClick(1)\" style=\"font-size: 15px\" class=\"headingButton2\">Login Details</button><br>\n    </div><br>\n    <div class=\"button1\">\n      <button id='2' (click)=\"buttonClick(2)\" style=\"font-size: 15px\" class=\"headingButton\">Personal Details</button><br>\n    </div><br>\n    <div class=\"button1\">\n      <button id='3' (click)=\"buttonClick(3)\" style=\"font-size: 15px\" class=\"headingButton\">Ranking/Rating</button><br>\n    </div><br>\n    <div class=\"button1\">\n      <button id='4' (click)=\"buttonClick(4)\" style=\"font-size: 15px\" class=\"headingButton\">CV</button><br>\n    </div><br>\n  </div>\n  <div id=\"profile2\" class=\"profile2\">\n    <div *ngIf=\"details[0]\" class=\"form\">\n      <p>Login Details</p>\n      <br>\n      <div class=\"headings\">\n        User Email <span style=\"font-size: 10px\">(login ID)</span><br>\n        <input #email type=\"email\" value={{data[0].username}} disabled><br><br>\n        Password <span style=\"font-size: 10px\">(alphanumeric, min 8 characters)</span><br>\n        <input #password type=\"password\"><br><br>\n        Confirm Password <br>\n        <input #cpassword type=\"password\"><br><br>\n        <div (click)=\"update1(email.value,password.value,cpassword.value)\" id=\"register\" class=\"register\">\n          SAVE CHANGES\n        </div><br>\n      </div>\n    </div>\n    <div *ngIf=\"details[1]\" class=\"form\">\n      <p>Personal Details</p>\n      <br>\n      <input #image id=\"user\" type=\"image\" src=\"/assets/pics/dummy_user.png\" class=\"user\"><br><br>\n      <div class=\"headings\">\n        <div id=\"name\">\n          <span> First Name </span><br>\n          <input #fname value={{data[0].fname}}><br><br>\n          <span> Last Name </span><br>\n          <input #lname value={{data[0].lname}}><br><br>\n        </div>\n        Gender <br><br>\n        <form #gender style=\"position: relative; width: 50%\">\n          <input #male id=\"male\" style=\"position: absolute\" type=\"radio\" name=\"gender\" value=\"male\" checked><span style=\"position: absolute; left: 30px\">Male</span>\n          <input #female id=\"female\" style=\"position: absolute; left:100px;\" type=\"radio\" name=\"gender\" value=\"female\"><span style=\"position: absolute; left: 130px\">Female</span>\n        </form> <br><br>\n        Date of Birth <br>\n        <input #dob type=\"date\" value={{date}}><br><br>\n        Contact <br>\n        <input #contact type=\"number\" value={{data[0].contact}}><br><br>\n        Address Line 1 <br>\n        <input #add1 value={{data[0].address1}}><br><br>\n        Address Line 2 <br>\n        <input #add2 value={{data[0].address2}}><br><br>\n        City <br>\n        <input #city value={{data[0].city}}><br><br>\n        State <br>\n        <input #state value={{data[0].state}}><br><br>\n        Postcode <br>\n        <input #postcode type=\"number\" value={{data[0].postcode}}><br><br>\n        Country <br><br>\n        <select #country class=\"inputdropdown\" value={{data[0].country}}>\n  \t<option value=\"AF\">Afghanistan</option>\n  \t<option value=\"AX\">Åland Islands</option>\n  \t<option value=\"AL\">Albania</option>\n  \t<option value=\"DZ\">Algeria</option>\n  \t<option value=\"AS\">American Samoa</option>\n  \t<option value=\"AD\">Andorra</option>\n  \t<option value=\"AO\">Angola</option>\n  \t<option value=\"AI\">Anguilla</option>\n  \t<option value=\"AQ\">Antarctica</option>\n  \t<option value=\"AG\">Antigua and Barbuda</option>\n  \t<option value=\"AR\">Argentina</option>\n  \t<option value=\"AM\">Armenia</option>\n  \t<option value=\"AW\">Aruba</option>\n  \t<option value=\"AU\">Australia</option>\n  \t<option value=\"AT\">Austria</option>\n  \t<option value=\"AZ\">Azerbaijan</option>\n  \t<option value=\"BS\">Bahamas</option>\n  \t<option value=\"BH\">Bahrain</option>\n  \t<option value=\"BD\">Bangladesh</option>\n  \t<option value=\"BB\">Barbados</option>\n  \t<option value=\"BY\">Belarus</option>\n  \t<option value=\"BE\">Belgium</option>\n  \t<option value=\"BZ\">Belize</option>\n  \t<option value=\"BJ\">Benin</option>\n  \t<option value=\"BM\">Bermuda</option>\n  \t<option value=\"BT\">Bhutan</option>\n  \t<option value=\"BO\">Bolivia, Plurinational State of</option>\n  \t<option value=\"BQ\">Bonaire, Sint Eustatius and Saba</option>\n  \t<option value=\"BA\">Bosnia and Herzegovina</option>\n  \t<option value=\"BW\">Botswana</option>\n  \t<option value=\"BV\">Bouvet Island</option>\n  \t<option value=\"BR\">Brazil</option>\n  \t<option value=\"IO\">British Indian Ocean Territory</option>\n  \t<option value=\"BN\">Brunei Darussalam</option>\n  \t<option value=\"BG\">Bulgaria</option>\n  \t<option value=\"BF\">Burkina Faso</option>\n  \t<option value=\"BI\">Burundi</option>\n  \t<option value=\"KH\">Cambodia</option>\n  \t<option value=\"CM\">Cameroon</option>\n  \t<option value=\"CA\">Canada</option>\n  \t<option value=\"CV\">Cape Verde</option>\n  \t<option value=\"KY\">Cayman Islands</option>\n  \t<option value=\"CF\">Central African Republic</option>\n  \t<option value=\"TD\">Chad</option>\n  \t<option value=\"CL\">Chile</option>\n  \t<option value=\"CN\">China</option>\n  \t<option value=\"CX\">Christmas Island</option>\n  \t<option value=\"CC\">Cocos (Keeling) Islands</option>\n  \t<option value=\"CO\">Colombia</option>\n  \t<option value=\"KM\">Comoros</option>\n  \t<option value=\"CG\">Congo</option>\n  \t<option value=\"CD\">Congo, the Democratic Republic of the</option>\n  \t<option value=\"CK\">Cook Islands</option>\n  \t<option value=\"CR\">Costa Rica</option>\n  \t<option value=\"CI\">Côte d'Ivoire</option>\n  \t<option value=\"HR\">Croatia</option>\n  \t<option value=\"CU\">Cuba</option>\n  \t<option value=\"CW\">Curaçao</option>\n  \t<option value=\"CY\">Cyprus</option>\n  \t<option value=\"CZ\">Czech Republic</option>\n  \t<option value=\"DK\">Denmark</option>\n  \t<option value=\"DJ\">Djibouti</option>\n  \t<option value=\"DM\">Dominica</option>\n  \t<option value=\"DO\">Dominican Republic</option>\n  \t<option value=\"EC\">Ecuador</option>\n  \t<option value=\"EG\">Egypt</option>\n  \t<option value=\"SV\">El Salvador</option>\n  \t<option value=\"GQ\">Equatorial Guinea</option>\n  \t<option value=\"ER\">Eritrea</option>\n  \t<option value=\"EE\">Estonia</option>\n  \t<option value=\"ET\">Ethiopia</option>\n  \t<option value=\"FK\">Falkland Islands (Malvinas)</option>\n  \t<option value=\"FO\">Faroe Islands</option>\n  \t<option value=\"FJ\">Fiji</option>\n  \t<option value=\"FI\">Finland</option>\n  \t<option value=\"FR\">France</option>\n  \t<option value=\"GF\">French Guiana</option>\n  \t<option value=\"PF\">French Polynesia</option>\n  \t<option value=\"TF\">French Southern Territories</option>\n  \t<option value=\"GA\">Gabon</option>\n  \t<option value=\"GM\">Gambia</option>\n  \t<option value=\"GE\">Georgia</option>\n  \t<option value=\"DE\">Germany</option>\n  \t<option value=\"GH\">Ghana</option>\n  \t<option value=\"GI\">Gibraltar</option>\n  \t<option value=\"GR\">Greece</option>\n  \t<option value=\"GL\">Greenland</option>\n  \t<option value=\"GD\">Grenada</option>\n  \t<option value=\"GP\">Guadeloupe</option>\n  \t<option value=\"GU\">Guam</option>\n  \t<option value=\"GT\">Guatemala</option>\n  \t<option value=\"GG\">Guernsey</option>\n  \t<option value=\"GN\">Guinea</option>\n  \t<option value=\"GW\">Guinea-Bissau</option>\n  \t<option value=\"GY\">Guyana</option>\n  \t<option value=\"HT\">Haiti</option>\n  \t<option value=\"HM\">Heard Island and McDonald Islands</option>\n  \t<option value=\"VA\">Holy See (Vatican City State)</option>\n  \t<option value=\"HN\">Honduras</option>\n  \t<option value=\"HK\">Hong Kong</option>\n  \t<option value=\"HU\">Hungary</option>\n  \t<option value=\"IS\">Iceland</option>\n  \t<option value=\"IN\">India</option>\n  \t<option value=\"ID\">Indonesia</option>\n  \t<option value=\"IR\">Iran, Islamic Republic of</option>\n  \t<option value=\"IQ\">Iraq</option>\n  \t<option value=\"IE\">Ireland</option>\n  \t<option value=\"IM\">Isle of Man</option>\n  \t<option value=\"IL\">Israel</option>\n  \t<option value=\"IT\">Italy</option>\n  \t<option value=\"JM\">Jamaica</option>\n  \t<option value=\"JP\">Japan</option>\n  \t<option value=\"JE\">Jersey</option>\n  \t<option value=\"JO\">Jordan</option>\n  \t<option value=\"KZ\">Kazakhstan</option>\n  \t<option value=\"KE\">Kenya</option>\n  \t<option value=\"KI\">Kiribati</option>\n  \t<option value=\"KP\">Korea, Democratic People's Republic of</option>\n  \t<option value=\"KR\">Korea, Republic of</option>\n  \t<option value=\"KW\">Kuwait</option>\n  \t<option value=\"KG\">Kyrgyzstan</option>\n  \t<option value=\"LA\">Lao People's Democratic Republic</option>\n  \t<option value=\"LV\">Latvia</option>\n  \t<option value=\"LB\">Lebanon</option>\n  \t<option value=\"LS\">Lesotho</option>\n  \t<option value=\"LR\">Liberia</option>\n  \t<option value=\"LY\">Libya</option>\n  \t<option value=\"LI\">Liechtenstein</option>\n  \t<option value=\"LT\">Lithuania</option>\n  \t<option value=\"LU\">Luxembourg</option>\n  \t<option value=\"MO\">Macao</option>\n  \t<option value=\"MK\">Macedonia, the former Yugoslav Republic of</option>\n  \t<option value=\"MG\">Madagascar</option>\n  \t<option value=\"MW\">Malawi</option>\n  \t<option value=\"MY\">Malaysia</option>\n  \t<option value=\"MV\">Maldives</option>\n  \t<option value=\"ML\">Mali</option>\n  \t<option value=\"MT\">Malta</option>\n  \t<option value=\"MH\">Marshall Islands</option>\n  \t<option value=\"MQ\">Martinique</option>\n  \t<option value=\"MR\">Mauritania</option>\n  \t<option value=\"MU\">Mauritius</option>\n  \t<option value=\"YT\">Mayotte</option>\n  \t<option value=\"MX\">Mexico</option>\n  \t<option value=\"FM\">Micronesia, Federated States of</option>\n  \t<option value=\"MD\">Moldova, Republic of</option>\n  \t<option value=\"MC\">Monaco</option>\n  \t<option value=\"MN\">Mongolia</option>\n  \t<option value=\"ME\">Montenegro</option>\n  \t<option value=\"MS\">Montserrat</option>\n  \t<option value=\"MA\">Morocco</option>\n  \t<option value=\"MZ\">Mozambique</option>\n  \t<option value=\"MM\">Myanmar</option>\n  \t<option value=\"NA\">Namibia</option>\n  \t<option value=\"NR\">Nauru</option>\n  \t<option value=\"NP\">Nepal</option>\n  \t<option value=\"NL\">Netherlands</option>\n  \t<option value=\"NC\">New Caledonia</option>\n  \t<option value=\"NZ\">New Zealand</option>\n  \t<option value=\"NI\">Nicaragua</option>\n  \t<option value=\"NE\">Niger</option>\n  \t<option value=\"NG\">Nigeria</option>\n  \t<option value=\"NU\">Niue</option>\n  \t<option value=\"NF\">Norfolk Island</option>\n  \t<option value=\"MP\">Northern Mariana Islands</option>\n  \t<option value=\"NO\">Norway</option>\n  \t<option value=\"OM\">Oman</option>\n  \t<option value=\"PK\">Pakistan</option>\n  \t<option value=\"PW\">Palau</option>\n  \t<option value=\"PS\">Palestinian Territory, Occupied</option>\n  \t<option value=\"PA\">Panama</option>\n  \t<option value=\"PG\">Papua New Guinea</option>\n  \t<option value=\"PY\">Paraguay</option>\n  \t<option value=\"PE\">Peru</option>\n  \t<option value=\"PH\">Philippines</option>\n  \t<option value=\"PN\">Pitcairn</option>\n  \t<option value=\"PL\">Poland</option>\n  \t<option value=\"PT\">Portugal</option>\n  \t<option value=\"PR\">Puerto Rico</option>\n  \t<option value=\"QA\">Qatar</option>\n  \t<option value=\"RE\">Réunion</option>\n  \t<option value=\"RO\">Romania</option>\n  \t<option value=\"RU\">Russian Federation</option>\n  \t<option value=\"RW\">Rwanda</option>\n  \t<option value=\"BL\">Saint Barthélemy</option>\n  \t<option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</option>\n  \t<option value=\"KN\">Saint Kitts and Nevis</option>\n  \t<option value=\"LC\">Saint Lucia</option>\n  \t<option value=\"MF\">Saint Martin (French part)</option>\n  \t<option value=\"PM\">Saint Pierre and Miquelon</option>\n  \t<option value=\"VC\">Saint Vincent and the Grenadines</option>\n  \t<option value=\"WS\">Samoa</option>\n  \t<option value=\"SM\">San Marino</option>\n  \t<option value=\"ST\">Sao Tome and Principe</option>\n  \t<option value=\"SA\">Saudi Arabia</option>\n  \t<option value=\"SN\">Senegal</option>\n  \t<option value=\"RS\">Serbia</option>\n  \t<option value=\"SC\">Seychelles</option>\n  \t<option value=\"SL\">Sierra Leone</option>\n  \t<option value=\"SG\">Singapore</option>\n  \t<option value=\"SX\">Sint Maarten (Dutch part)</option>\n  \t<option value=\"SK\">Slovakia</option>\n  \t<option value=\"SI\">Slovenia</option>\n  \t<option value=\"SB\">Solomon Islands</option>\n  \t<option value=\"SO\">Somalia</option>\n  \t<option value=\"ZA\">South Africa</option>\n  \t<option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n  \t<option value=\"SS\">South Sudan</option>\n  \t<option value=\"ES\">Spain</option>\n  \t<option value=\"LK\">Sri Lanka</option>\n  \t<option value=\"SD\">Sudan</option>\n  \t<option value=\"SR\">Suriname</option>\n  \t<option value=\"SJ\">Svalbard and Jan Mayen</option>\n  \t<option value=\"SZ\">Swaziland</option>\n  \t<option value=\"SE\">Sweden</option>\n  \t<option value=\"CH\">Switzerland</option>\n  \t<option value=\"SY\">Syrian Arab Republic</option>\n  \t<option value=\"TW\">Taiwan, Province of China</option>\n  \t<option value=\"TJ\">Tajikistan</option>\n  \t<option value=\"TZ\">Tanzania, United Republic of</option>\n  \t<option value=\"TH\">Thailand</option>\n  \t<option value=\"TL\">Timor-Leste</option>\n  \t<option value=\"TG\">Togo</option>\n  \t<option value=\"TK\">Tokelau</option>\n  \t<option value=\"TO\">Tonga</option>\n  \t<option value=\"TT\">Trinidad and Tobago</option>\n  \t<option value=\"TN\">Tunisia</option>\n  \t<option value=\"TR\">Turkey</option>\n  \t<option value=\"TM\">Turkmenistan</option>\n  \t<option value=\"TC\">Turks and Caicos Islands</option>\n  \t<option value=\"TV\">Tuvalu</option>\n  \t<option value=\"UG\">Uganda</option>\n  \t<option value=\"UA\">Ukraine</option>\n  \t<option value=\"AE\">United Arab Emirates</option>\n  \t<option value=\"GB\">United Kingdom</option>\n  \t<option value=\"US\">United States</option>\n  \t<option value=\"UM\">United States Minor Outlying Islands</option>\n  \t<option value=\"UY\">Uruguay</option>\n  \t<option value=\"UZ\">Uzbekistan</option>\n  \t<option value=\"VU\">Vanuatu</option>\n  \t<option value=\"VE\">Venezuela, Bolivarian Republic of</option>\n  \t<option value=\"VN\">Viet Nam</option>\n  \t<option value=\"VG\">Virgin Islands, British</option>\n  \t<option value=\"VI\">Virgin Islands, U.S.</option>\n  \t<option value=\"WF\">Wallis and Futuna</option>\n  \t<option value=\"EH\">Western Sahara</option>\n  \t<option value=\"YE\">Yemen</option>\n  \t<option value=\"ZM\">Zambia</option>\n  \t<option value=\"ZW\">Zimbabwe</option>\n    </select><br><br>\n    Bio <span style=\"font-size: 10px\">(max 500 characters)</span><br><br>\n    <textarea #bio class=\"input\" rows=\"4\" value={{data[0].bio}}></textarea><br><br>\n    </div>\n    Achievement<br>\n    <span style=\"color: black; font-size:12px;\">Athletic Highlights</span><br><br>\n    <textarea #atheletich class=\"input\" rows=\"3\" value={{data[0].atheletich}}></textarea><br><br>\n    Coaching Age Group<br>\n    <input #minage type=\"number\" style=\"width: 45%\" placeholder=\"Min Age Group\" value={{data[0].minage}}><input #maxage type=\"number\" class=\"input3\" placeholder=\"Max Age Group\" value={{data[0].maxage}}><br><br>\n    Max. Class Length (hours)<br>\n    <input #maxclass value={{data[0].maxclass}}><br><br>\n    Max. No. of Players per Class<br><br>\n    <select #minnoofplayers class=\"inputdropdown\" style=\"width: 47%\" value={{data[0].minnoofplayers}}>\n        <option value=\"0\">Select min no. of players</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n    </select>\n    <select #maxnoofplayers class=\"inputdropdown2\" value={{data[0].maxnoofplayers}}>\n        <option value=\"0\">Select max no. of players</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n    </select>\n    <br><br>\n    <div (click)=\"update2(fname.value,lname.value,male.checked,female.checked,dob.value,contact.value,add1.value,add2.value,city.value,state.value,postcode.value,country.value,bio.value,atheletich.value,minage.value,maxage.value,maxclass.value,minnoofplayers.value,maxnoofplayers.value)\" id=\"register\" class=\"register\">\n      SAVE CHANGES\n    </div><br>\n    </div>\n    <div *ngIf=\"details[2]\" class=\"form\">\n      <p>Rating/Ranking</p>\n      <br>\n      <div class=\"headings\">\n        Rating <br>\n        <input #rating placeholder=\"00\" value={{data[0].rating}}><br><br>\n        NTRP Rating <br>\n        <input #ntrp placeholder=\"0\" value={{data[0].ntrp}}><br><br>\n        ATP Rating <br>\n        <input #atp placeholder=\"0000\" value={{data[0].atp}}><br><br>\n        ITF Rating <br>\n        <input #itf placeholder=\"0000\" value={{data[0].itf}}><br><br>\n        <div (click)=\"update3(rating.value, ntrp.value, atp.value, itf.value)\" id=\"register\" class=\"register\">\n          SAVE CHANGES\n        </div><br>\n      </div>\n    </div>\n    <div *ngIf=\"details[3]\" class=\"form\">\n      <p>CV</p>\n      <div class=\"headings\">\n          Years of Experience<br><br>\n          <div *ngFor=\"let x of length1\" style=\"padding-bottom: 10px;\">\n            <a class=\"close\" (click)=\"close1()\"> X </a>\n            <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n              <option value=\"0\">From</option>\n            </select>\n            <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n              <option value=\"0\">To</option>\n            </select>\n            <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n              <option value=\"0\">Certication</option>\n              <option value=\"ptr\">PTR</option>\n              <option value=\"ustpa\">USTPA</option>\n              <option value=\"itpa\">ITPA</option>\n              <option value=\"gptca\">GPTCA</option>\n            </select>\n            <br>\n          </div>\n          <br>\n          <a class=\"add\" (click)=\"add1()\">ADD YEARS OF EXPERIENCE +</a><br><br>\n          Certifications<br>\n          <span style=\"color: black; font-size:12px;\">Do you have any industry certifications?</span><br><br>\n          <div *ngFor=\"let y of length2\" style=\"padding-bottom: 10px;\">\n            <a class=\"close\" (click)=\"close2()\"> X </a>\n            <select class=\"inputdropdown\" style=\"width: 75%; position: relative;\">\n              <option value=\"0\">Select a certication</option>\n              <option value=\"ptr\">PTR</option>\n              <option value=\"ustpa\">USTPA</option>\n              <option value=\"itpa\">ITPA</option>\n              <option value=\"gptca\">GPTCA</option>\n            </select>\n            <br>\n          </div>\n          <br>\n          <a class=\"add\" (click)=\"add2()\">ADD MORE CERTIFICATIONS +</a><br><br>\n          Coaching Experience<br>\n          <span style=\"color: black; font-size:12px;\">Where have you worked as a coach or trainer?</span><br><br>\n          <div *ngFor=\"let z of length3\">\n            <a class=\"close\" (click)=\"close3()\"> X </a>\n            <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n              <option value=\"0\">From</option>\n            </select>\n            <select class=\"inputdropdown\" style=\"width: 25%; position: relative;\">\n              <option value=\"0\">To</option>\n            </select>\n            <input style=\"width: 25%; position: relative;left: 6%\" placeholder=\"Location\">\n            <br>\n          </div>\n          <br>\n          <a class=\"add\" (click)=\"add3()\">ADD COACHING EXPERIENCE +</a><br><br>\n          Remarks <span style=\"font-size: 10px\">(max 500 characters)</span><br><br>\n          <textarea #remarks class=\"input\" rows=\"3\" value={{data[0].remarks}}></textarea><br><br>\n          <div (click)=\"update4()\" id=\"register\" class=\"register\">\n            SAVE CHANGES\n          </div><br>\n      </div>\n    </div>\n    <br>\n</div>\n<br><br>\n</div>\n<img *ngIf=\"error\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div *ngIf=\"error\" class=\"error\">\n<div class=\"errormsg\">\n  <h3>{{popupmsg}}</h3>\n  <p class=\"headings\">{{errormsg}}</p><br>\n</div>\n<button (click)=\"ok()\" class=\"ok\">OK</button>\n</div>\n<br><br>\n</html>\n"

/***/ }),

/***/ "./src/app/myprofile/myprofile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.ts ***!
  \**************************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyprofileComponent = /** @class */ (function () {
    function MyprofileComponent(loginService) {
        this.loginService = loginService;
        this.x = 4;
        this.details = [true, false, false, false];
        this.x1 = 1;
        this.length1 = [1];
        this.x2 = 1;
        this.length2 = [1];
        this.x3 = 1;
        this.length3 = [1];
        this.email = "lakshayarora1@gmail.com";
        this.fname = "Lakshay";
        this.lname = "Arora";
        this.data = [];
        this.error = false;
        this.popupmsg = "Success";
    }
    MyprofileComponent.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem('data'));
        console.log(this.data);
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        this.change();
        var date = this.data[0].dob;
        this.date = date.substring(0, 10);
        console.log(this.date);
    };
    MyprofileComponent.prototype.update1 = function (username, password, cpassword) {
        var _this = this;
        if (password == '') {
            console.log('No password typed');
            this.popupmsg = "Error!";
            this.errormsg = "No password typed";
        }
        else if (password != cpassword) {
            console.log("Passwords don't match");
            this.popupmsg = "Error!";
            this.errormsg = "Passwords don't match";
        }
        else {
            this.info = '{"username": "' + username + '","password": "' + password + '"}';
            console.log(this.info);
            this.loginService.update(this.info).subscribe(function (data) {
                _this.data = data;
                console.log(_this.data);
                _this.loginService.send(data);
                localStorage.setItem('data', JSON.stringify(data));
            });
            this.popupmsg = "Success";
            this.errormsg = "Changes have been saved";
        }
        this.error = true;
    };
    MyprofileComponent.prototype.update2 = function (fname, lname, male, female, dob, contact, add1, add2, city, state, postcode, country, bio, atheletich, minage, maxage, maxclass, minnoofplayers, maxnoofplayers) {
        var _this = this;
        var gender;
        console.log(male, female);
        if (male == true)
            gender = "male";
        else if (female == true)
            gender = "female";
        this.info = '{"username": "' + this.data[0].username + '","fname": "' + fname + '","lname": "' + lname + '","gender": "' + gender + '","dob": "' + dob + '","contact": "' + contact + '","address1": "' + add1 + '","address2": "' + add2 + '","city": "' + city + '","state": "' + state + '","postcode": "' + postcode + '","country": "' + country + '","bio": "' + bio + '","atheletich":"' + atheletich + '","minage":"'
            + minage + '","maxage":"' + maxage + '","maxclass":"' + maxclass + '","minnoofplayers":"' + minnoofplayers + '","maxnoofplayers":"' + maxnoofplayers + '"}';
        console.log(this.info);
        var flag = 0, flag2 = 0;
        var nc = ["atheletich", 'minage', 'maxage', 'maxclass', 'minnoofplayers', 'maxnoofplayers'];
        for (var key in JSON.parse(this.info)) {
            for (var x in nc) {
                if (key == nc[x]) {
                    flag2 = 1;
                }
            }
            if (flag2 == 1)
                break;
            console.log(key);
            console.log(JSON.parse(this.info)[key]);
            if (JSON.parse(this.info)[key] == '') {
                this.popupmsg = "Error";
                this.errormsg = key + " field is empty";
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            this.loginService.update(this.info).subscribe(function (data) {
                _this.data = data;
                console.log(_this.data);
                _this.loginService.send(data);
                localStorage.setItem('data', JSON.stringify(data));
            });
            this.popupmsg = "Success";
            this.errormsg = "Changes have been saved";
        }
        this.error = true;
    };
    MyprofileComponent.prototype.update3 = function (rating, ntrp, atp, itf) {
        var _this = this;
        this.info = '{"username": "' + this.data[0].username + '","rating": "' + rating + '","ntrp": "' + ntrp + '","atp": "' + atp + '","itf": "' + itf + '"}';
        console.log(this.info);
        this.loginService.update(this.info).subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
            _this.loginService.send(data);
            localStorage.setItem('data', JSON.stringify(data));
        });
        this.popupmsg = "Success";
        this.errormsg = "Changes have been saved";
        this.error = true;
    };
    MyprofileComponent.prototype.update4 = function () {
        this.error = true;
        this.popupmsg = "Success";
        this.errormsg = "Changes have been saved";
    };
    MyprofileComponent.prototype.ok = function () {
        this.error = false;
    };
    MyprofileComponent.prototype.buttonClick = function (value) {
        document.getElementById(value).className = "headingButton2";
        this.details[value - 1] = true;
        for (var i = 1; i <= this.x; i++) {
            if (i != value) {
                document.getElementById(i.toString()).className = "headingButton";
                this.details[i - 1] = false;
            }
        }
    };
    MyprofileComponent.prototype.add1 = function () {
        this.length1[this.x1] = this.x1 + 1;
        this.x1 += 1;
    };
    MyprofileComponent.prototype.add2 = function () {
        this.length2[this.x2] = this.x2 + 1;
        this.x2 += 1;
    };
    MyprofileComponent.prototype.add3 = function () {
        this.length3[this.x3] = this.x3 + 1;
        this.x3 += 1;
    };
    MyprofileComponent.prototype.close1 = function () {
        this.x1 -= 1;
        this.length1.splice(this.x1);
    };
    MyprofileComponent.prototype.close2 = function () {
        this.x2 -= 1;
        this.length2.splice(this.x2);
    };
    MyprofileComponent.prototype.close3 = function () {
        this.x3 -= 1;
        this.length3.splice(this.x3);
    };
    MyprofileComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
    };
    MyprofileComponent.prototype.change = function () {
        if (this.screenWidth < 500) {
            document.getElementById('profile1').className = 'profile1change';
            document.getElementById('profile2').className = 'profile2change';
        }
        else {
            document.getElementById('profile1').className = 'profile1';
            document.getElementById('profile2').className = 'profile2';
        }
    };
    MyprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/myprofile/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./myprofile.component.css */ "./src/app/myprofile/myprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1{\n  position: fixed;\n  width: 50%;\n  height: 101%;\n  left: 0%;\n  top: -1%;\n  transition: 0.7s;\n  overflow-x: hidden;\n}\n\n.container1change{\n  position: absolute;\n  width: 100%;\n  height: 91%;\n  left: 0%;\n  top: -1%;\n  transition: 0.7s;\n  overflow-x: hidden;\n}\n\n.container2{\n  position: fixed;\n  height: 101%;\n  width: 50%;\n  left: 50%;\n  top: 0%;\n  transition: 0.7s;\n  overflow-x: hidden;\n}\n\n.container2change{\n  position: absolute;\n  height: 90%;\n  width: 100%;\n  right:0%;\n  top: 90%;\n  transition: 0.7s;\n  overflow-x: hidden;\n}\n\n.club1{\n  position: absolute;\n  height: 101%;\n  top: -1%;\n  right: 0%;\n}\n\n.club1change{\n  position: absolute;\n  width: 100%;\n  top: -1%;\n  right: 0%;\n}\n\n.club2{\n  position: absolute;\n  height: 101%;\n  top: -1%;\n  right: 0%;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.club2change{\n  position: absolute;\n  width: 100%;\n  top: -1%;\n  right: 0%;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.coach1{\n  position: absolute;\n  height: 101%;\n  top: -1%;\n}\n\n.coach1change{\n  position: absolute;\n  width: 100%;\n  top: -1%;\n}\n\n.coach2{\n  position: absolute;\n  height: 101%;\n  top: -1%;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.coach2change{\n  position: absolute;\n  width: 100%;\n  top: -1%;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.clubreg{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-size: 40px;\n  color: white;\n  font-weight: bold;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.coachreg{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-size: 40px;\n  color: white;\n  font-weight: bold;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.clubclick{\n  background-color: #68D2C4;\n  border: none;\n  font-size: 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 20px 35px 20px 35px;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  transition: 1.5s;\n}\n\n.coachclick{\n    background-color: #FE9953;\n    border: none;\n    font-size: 20px;\n    font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    padding: 20px 35px 20px 35px;\n    color: white;\n    outline: none;\n    cursor: pointer;\n    transition: 1.5s;\n}\n\n.clickhover{\n  background-color: black;\n  border: none;\n  font-size: 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 20px 35px 20px 35px;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  transition: 1.5s;\n}\n\n.black{\n  position: fixed;\n  height: 102%;\n  bottom: -1%;\n  right: -1%;\n  opacity: 0.5;\n}\n\n.load{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\" style=\"overflow-x: none\">\n<div id=\"club\" class=\"container1\"\nonmouseover=\"document.getElementById('clubid2').style.opacity = 1;\n            document.getElementById('buttonClub').className='clickhover';\"\nonmouseout=\"document.getElementById('clubid2').style.opacity = 0;\n            document.getElementById('buttonClub').className='clubclick';\"\n>\n  <img  id=\"clubid\" src=\"/assets/pics/BG_registration_club.png\" class=\"club1\">\n  <img  id=\"clubid2\" src=\"/assets/pics/BG_registration_club_hover.png\" class=\"club2\">\n  <div class=\"clubreg\">\n    CLUB<br>REGISTRATION<br><br>\n    <button id=\"buttonClub\" (click)=\"clubclick()\" class=\"clubclick\">CLICK HERE</button>\n  </div>\n</div>\n\n<div id=\"coach\" class=\"container2\"\nonmouseover=\"document.getElementById('coachid2').style.opacity = 1;\n            document.getElementById('buttonCoach').className='clickhover';\"\nonmouseout=\"document.getElementById('coachid2').style.opacity = 0;\n            document.getElementById('buttonCoach').className='coachclick';\"\n>\n  <img id=\"coachid\" src=\"/assets/pics/BG_registration_coach.png\" class=\"coach1\">\n  <img id=\"coachid2\" src=\"/assets/pics/BG_registration_coach_hover.png\" class=\"coach2\">\n  <div class=\"coachreg\">\n    COACH<br>REGISTRATION<br><br>\n    <button id=\"buttonCoach\" (click)=\"coachclick()\" class=\"coachclick\">CLICK HERE</button>\n  </div>\n</div>\n<img *ngIf=\"Clicked\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<img *ngIf=\"Clicked\" src=\"/assets/pics/ajax-loader.gif\" class=\"load\">\n</html>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, route) {
        this.router = router;
        this.route = route;
        this.Clicked = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        this.change();
        localStorage.setItem('sessionKey', 'register');
    };
    RegisterComponent.prototype.clubclick = function () {
        this.Clicked = true;
        localStorage.setItem('sessionKey', 'clubreg');
        this.router.navigate(['clubreg'], { relativeTo: this.route });
    };
    RegisterComponent.prototype.coachclick = function () {
        this.Clicked = true;
        localStorage.setItem('sessionKey', 'coachreg');
        this.router.navigate(['coachreg'], { relativeTo: this.route });
    };
    RegisterComponent.prototype.change = function () {
        if (this.screenWidth < 650) {
            document.getElementById('club').className = 'container1change';
            document.getElementById('coach').className = 'container2change';
            this.change2();
        }
        else {
            document.getElementById('club').className = 'container1';
            document.getElementById('coach').className = 'container2';
            document.getElementById('clubid').className = 'club1';
            document.getElementById('clubid2').className = 'club2';
            document.getElementById('coachid').className = 'coach1';
            document.getElementById('coachid2').className = 'coach2';
            this.change3();
        }
    };
    RegisterComponent.prototype.change2 = function () {
        if (this.screenWidth > ((592 / 327) * this.screenHeight)) {
            document.getElementById('clubid').className = 'club1change';
            document.getElementById('clubid2').className = 'club2change';
            document.getElementById('coachid').className = 'coach1change';
            document.getElementById('coachid2').className = 'coach2change';
        }
        else {
            document.getElementById('clubid').className = 'club1';
            document.getElementById('clubid2').className = 'club2';
            document.getElementById('coachid').className = 'coach1';
            document.getElementById('coachid2').className = 'coach2';
        }
    };
    RegisterComponent.prototype.change3 = function () {
        if (this.screenWidth > ((1180 / 327) * this.screenHeight)) {
            document.getElementById('clubid').className = 'club1change';
            document.getElementById('clubid2').className = 'club2change';
            document.getElementById('coachid').className = 'coach1change';
            document.getElementById('coachid2').className = 'coach2change';
        }
        else {
            document.getElementById('clubid').className = 'club1';
            document.getElementById('clubid2').className = 'club2';
            document.getElementById('coachid').className = 'coach1';
            document.getElementById('coachid2').className = 'coach2';
        }
    };
    RegisterComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/resetpw/resetpw.component.css":
/*!***********************************************!*\
  !*** ./src/app/resetpw/resetpw.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back1{\n  position: fixed;\n  height: 101%;\n  bottom: -1%;\n  right: -1%;\n}\n\n.back2{\n  position: fixed;\n  width: 101%;\n  bottom: -1%;\n  right: -1%;\n}\n\n.form{\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 1px 1px 2px 2px lightgrey;\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.headings{\n  font-size: 13px;\n  color: #7F7F7F;\n}\n\n.overall{\n  position: absolute;\n  top: 20%;\n  left: 54%;\n  width: 35%;\n}\n\n.overall2{\n  position: absolute;\n  top: 10%;\n  left: 3%;\n  right: 3%;\n  width: 79%;\n}\n\n.logo{\n  position: absolute;\n  width: 100px;\n  top: 0%;\n  left: 4%;\n}\n\ninput{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 97%;\n}\n\n.register{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.register:hover{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: black;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n}\n\n.error{\n  position: fixed;\n  width: 40%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.errormsg{\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n}\n\n.black{\n  position: fixed;\n  height: 102%;\n  bottom: -1%;\n  right: -1%;\n  opacity: 0.5;\n}\n\n.ok{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/resetpw/resetpw.component.html":
/*!************************************************!*\
  !*** ./src/app/resetpw/resetpw.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\">\n<img id=\"bi\" src=\"/assets/pics/Login-bg3.png\" class=\"back1\">\n<div id=\"overall\" class=\"overall\">\n<img src=\"/assets/pics/clubcoachlogo.png\" class=\"logo\"><br><br><br>\n<div class=\"form\">\n  <p>Reset Password</p>\n  <br>\n  <div class=\"headings\">\n    Password <span style=\"color: red\" size=\"50\">* </span><span style=\"font-size: 10px\">(alphanumeric, min 8 characters, max 16 characters)</span><br>\n    <input #password type=\"password\"><br><br>\n    Confirm Password <span style=\"color: red\">* </span><br>\n    <input #cpassword type=\"password\"><br><br><br><br>\n  </div>\n</div><br>\n<div class=\"register\" (click)=\"reset(password.value,cpassword.value)\">\n  RESET\n</div>\n</div>\n<img *ngIf=\"error\" src=\"/assets/pics/black.jpg\" class=\"black\">\n<div *ngIf=\"error\" class=\"error\">\n<div class=\"errormsg\">\n  <h3>{{popupmsg}}</h3>\n  <p class=\"headings\">{{errormsg}}</p><br>\n</div>\n<button (click)=\"ok()\" class=\"ok\">OK</button>\n</div>\n</html>\n"

/***/ }),

/***/ "./src/app/resetpw/resetpw.component.ts":
/*!**********************************************!*\
  !*** ./src/app/resetpw/resetpw.component.ts ***!
  \**********************************************/
/*! exports provided: ResetpwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwComponent", function() { return ResetpwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetpwComponent = /** @class */ (function () {
    function ResetpwComponent(router, route, loginService) {
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.error = false;
        this.pwchanged = false;
    }
    ResetpwComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            _this.username = data.username;
            console.log(_this.username);
        });
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        this.change();
        this.change2();
    };
    ResetpwComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
        this.change2();
    };
    ResetpwComponent.prototype.change = function () {
        if (this.screenWidth > ((1280 / 725) * this.screenHeight)) {
            var img2 = document.getElementById('bi');
            img2.className = 'back2';
        }
        else {
            var img2 = document.getElementById('bi');
            img2.className = 'back1';
        }
    };
    ResetpwComponent.prototype.change2 = function () {
        if (this.screenWidth < 600) {
            var overall = document.getElementById('overall');
            overall.className = 'overall2';
        }
        else {
            var overall = document.getElementById('overall');
            overall.className = 'overall';
        }
    };
    ResetpwComponent.prototype.ok = function () {
        this.error = false;
        if (this.pwchanged == true)
            this.router.navigate(['login']);
    };
    ResetpwComponent.prototype.reset = function (password, cpassword) {
        var _this = this;
        if (password != cpassword) {
            console.log('password not same');
            this.error = true;
            this.popupmsg = "Error!";
            this.errormsg = "Passwords don't match!";
        }
        else {
            this.loginService.changePassword(this.username, password).subscribe(function (data) {
                if (data == false) {
                    console.log('Session Expired');
                    _this.error = true;
                    _this.popupmsg = "Error!";
                    _this.errormsg = "Session has expired! Please try again!";
                    _this.pwchanged = true;
                }
                else {
                    console.log('Password Changed');
                    _this.error = true;
                    _this.popupmsg = "Success!";
                    _this.errormsg = "Password has been changed successfully!";
                    _this.pwchanged = true;
                }
            });
        }
    };
    ResetpwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpw',
            template: __webpack_require__(/*! ./resetpw.component.html */ "./src/app/resetpw/resetpw.component.html"),
            styles: [__webpack_require__(/*! ./resetpw.component.css */ "./src/app/resetpw/resetpw.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], ResetpwComponent);
    return ResetpwComponent;
}());



/***/ }),

/***/ "./src/app/verify/verify.component.css":
/*!*********************************************!*\
  !*** ./src/app/verify/verify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back1{\n  position: fixed;\n  height: 101%;\n  bottom: -1%;\n  right: -1%;\n}\n\n.back2{\n  position: fixed;\n  width: 101%;\n  bottom: -1%;\n  right: -1%;\n}\n\n.form{\n  position: relative;\n  width: 100%;\n  top: 30%;\n  left: 4%;\n  box-shadow: 1px 1px 2px 2px lightgrey;\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.error{\n  position: fixed;\n  width: 40%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.headings{\n  font-size: 15px;\n  color: #7F7F7F;\n}\n\n.overall{\n  position: absolute;\n  top: 27%;\n  left: 54%;\n  width: 35%;\n}\n\n.overall2{\n  position: absolute;\n  top: 10%;\n  left: 3%;\n  right: 3%;\n  width: 79%;\n}\n\n.logo{\n  position: absolute;\n  width: 100px;\n  top: 0%;\n  left: 4%;\n}\n\ninput{\n  font-size: 13px;\n  padding: 17px 3px 8px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid lightgrey;\n  width: 97%;\n}\n\n.register{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.register:hover{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  top: 20%;\n  left: 4%;\n  box-shadow: 0px 0px 1px 1px darkgrey;\n  background-color: black;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n}\n\n.error{\n  position: fixed;\n  width: 40%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.errormsg{\n  background-color: white;\n  padding: 10px 20px 8px 20px;\n}\n\n.black{\n  position: fixed;\n  height: 102%;\n  bottom: -1%;\n  right: -1%;\n  opacity: 0.5;\n}\n\n.ok{\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: #212121;\n  padding: 20px 20px 20px 20px;\n  font-family:  \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  cursor: pointer;\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/verify/verify.component.html":
/*!**********************************************!*\
  !*** ./src/app/verify/verify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html (window:resize)=\"onResize($event)\">\n<img id=\"bi\" src=\"/assets/pics/Login-bg3.png\" class=\"back1\">\n<div id=\"overall\" class=\"overall\">\n<img src=\"/assets/pics/clubcoachlogo.png\" class=\"logo\"><br><br><br>\n<div class=\"form\">\n  <h3>Congrats!</h3>\n  <br>\n  <div class=\"headings\">\n    Your email has been successfully verified!\n  </div><br><br>\n</div><br>\n<div class=\"register\" (click)=\"gotoLogin()\">\n  Go to Login Page\n</div>\n</div>\n</html>\n"

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/*!********************************************!*\
  !*** ./src/app/verify/verify.component.ts ***!
  \********************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(router, route) {
        this.router = router;
        this.route = route;
        this.error = false;
        this.pwchanged = false;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            _this.username = data.username;
            console.log(_this.username);
        });
        this.screenHeight = window.outerHeight;
        this.screenWidth = window.outerWidth;
        this.change();
        this.change2();
    };
    VerifyComponent.prototype.onResize = function (event) {
        this.screenHeight = event.target.innerHeight;
        this.screenWidth = event.target.innerWidth;
        this.change();
        this.change2();
    };
    VerifyComponent.prototype.change = function () {
        if (this.screenWidth > ((1280 / 725) * this.screenHeight)) {
            var img2 = document.getElementById('bi');
            img2.className = 'back2';
        }
        else {
            var img2 = document.getElementById('bi');
            img2.className = 'back1';
        }
    };
    VerifyComponent.prototype.change2 = function () {
        if (this.screenWidth < 600) {
            var overall = document.getElementById('overall');
            overall.className = 'overall2';
        }
        else {
            var overall = document.getElementById('overall');
            overall.className = 'overall';
        }
    };
    VerifyComponent.prototype.gotoLogin = function () {
        this.router.navigate(['login']);
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lakshay/Documents/Lakshay/Git/bounx/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map