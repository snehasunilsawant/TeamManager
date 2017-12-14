webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_playerlist_playerlist_component__ = __webpack_require__("../../../../../src/app/player/playerlist/playerlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_playerstatus_playerstatus_component__ = __webpack_require__("../../../../../src/app/player/playerstatus/playerstatus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_addplayer_addplayer_component__ = __webpack_require__("../../../../../src/app/player/addplayer/addplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'players/list',
        component: __WEBPACK_IMPORTED_MODULE_0__player_playerlist_playerlist_component__["a" /* PlayerlistComponent */],
    },
    {
        path: 'players/status',
        component: __WEBPACK_IMPORTED_MODULE_1__player_playerstatus_playerstatus_component__["a" /* PlayerstatusComponent */],
    },
    {
        path: 'players/addplayer',
        component: __WEBPACK_IMPORTED_MODULE_2__player_addplayer_addplayer_component__["a" /* AddplayerComponent */],
    },
    {
        path: 'players/status/1',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_1__player_playerstatus_playerstatus_component__["a" /* PlayerstatusComponent */],
    },
    {
        path: 'players/status/2',
        component: __WEBPACK_IMPORTED_MODULE_1__player_playerstatus_playerstatus_component__["a" /* PlayerstatusComponent */],
    },
    {
        path: 'players/status/3',
        component: __WEBPACK_IMPORTED_MODULE_1__player_playerstatus_playerstatus_component__["a" /* PlayerstatusComponent */],
    },
    {
        path: '**',
        redirectTo: '/players/list'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details{\r\n    border : 2px solid black;\r\n    margin: 10px;\r\n    padding:  20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Team Manager</h1>\n\n<a [routerLink]=\"['players','list']\">Manage Players</a> |\n<a [routerLink]=\"['players','status']\">Manage Player Status</a>\n\n<div class=\"details\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player_service__ = __webpack_require__("../../../../../src/app/player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_player_component__ = __webpack_require__("../../../../../src/app/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__player_playerlist_playerlist_component__ = __webpack_require__("../../../../../src/app/player/playerlist/playerlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__player_playerstatus_playerstatus_component__ = __webpack_require__("../../../../../src/app/player/playerstatus/playerstatus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__player_addplayer_addplayer_component__ = __webpack_require__("../../../../../src/app/player/addplayer/addplayer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__player_playerlist_playerlist_component__["a" /* PlayerlistComponent */],
            __WEBPACK_IMPORTED_MODULE_9__player_playerstatus_playerstatus_component__["a" /* PlayerstatusComponent */],
            __WEBPACK_IMPORTED_MODULE_10__player_addplayer_addplayer_component__["a" /* AddplayerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__player_player_service__["a" /* PlayerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/player/addplayer/addplayer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/addplayer/addplayer.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <div>\n     <a [routerLink]=\"['players','list']\">List</a> | \n      <a [routerLink]=\"['/players','addplayer']\">Add Player</a>\n  </div>\n  <br>\n  <div>\n  <h2>Add Player </h2>\n  <form (submit)=\"addPlayer()\" #playerForm='ngForm' >\n    \n        <p>Name : \n          <input type='text' name='name' required \n          minlength=\"2\"\n          [(ngModel)]='player.name'\n          #name=\"ngModel\">\n        </p>\n          <span *ngIf='name.errors'>Error : </span>\n          <span *ngIf='name.errors?.required'>Name is required</span>\n          <span *ngIf='name.errors?.minlength'>Minimum length is {{name.errors.minlength.requiredLength}}</span> \n    \n          <p>Preffered Position : <input type='text' name ='position'\n            required \n            [(ngModel)]='player.position'\n            #position=\"ngModel\"></p>\n            <span *ngIf='position.errors'>Error : </span>\n            <span *ngIf='position.errors?.required'>position is required</span>\n               \n        <p><input type='submit' value='Add Player' [disabled]='!playerForm.valid'></p>\n      </form>\t\n      {{ player | json}}\n    </div>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/player/addplayer/addplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddplayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__("../../../../../src/app/player/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__("../../../../../src/app/player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddplayerComponent = (function () {
    function AddplayerComponent(_playerService, _router) {
        this._playerService = _playerService;
        this._router = _router;
    }
    AddplayerComponent.prototype.ngOnInit = function () {
        this.player = new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* Player */];
    };
    AddplayerComponent.prototype.addPlayer = function () {
        var _this = this;
        this._playerService.addPlayer(this.player)
            .then(function () { _this._router.navigate(['/players/list']); })
            .catch(function (err) { return console.log('Client all get users ', err); });
    };
    return AddplayerComponent;
}());
AddplayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addplayer',
        template: __webpack_require__("../../../../../src/app/player/addplayer/addplayer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player/addplayer/addplayer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AddplayerComponent);

var _a, _b;
//# sourceMappingURL=addplayer.component.js.map

/***/ }),

/***/ "../../../../../src/app/player/player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  player works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__("../../../../../src/app/player/player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player/player.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PlayerComponent);

//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/player/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerService = (function () {
    function PlayerService(_http) {
        this._http = _http;
    }
    PlayerService.prototype.get_all_players = function () {
        return this._http.get('/get_all_players').map(function (data) { return data.json(); }).toPromise();
    };
    PlayerService.prototype.deletePlayer = function (id) {
        return this._http.post('/deletePlayer', { id: id }).map(function (data) { return data.json(); }).toPromise();
    };
    PlayerService.prototype.addPlayer = function (player) {
        return this._http.post('/addPlayer', player).map(function (data) { return data.json(); }).toPromise();
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PlayerService);

var _a;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/app/player/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player() {
        this.name = '';
        this.position = '';
        this.game1Status = '';
        this.game2Status = '';
        this.game3Status = '';
    }
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ "../../../../../src/app/player/playerlist/playerlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details{\r\n    border : 2px solid black;\r\n    margin: 10px;\r\n    padding:  20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/playerlist/playerlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <div>\n      <a [routerLink]=\"['players','list']\">List</a> | \n      <a [routerLink]=\"['/players','addplayer']\">Add Player</a>\n  </div>\n  <br>\n \n  <div>\n      <table >\n        <tr style='border : 2px solid blue'>\n          <th>Player Id</th>\n          <th>Player name</th>\n          <th>Preferred Position</th>\n          <th>Actions</th>\n        </tr>\n        <tr *ngFor='let player of playerlist; let idx = index'>\n          <td>{{player._id}}</td>\n          <td>{{player.name}}</td>\n          <td>{{player.position}}</td>\n          <td><button style='background-color : red' (click)='deletePlayer(player._id)'>Delete</button></td>\n          <td>{{player.game1Status}} {{player.game2Status}} {{player.game3Status}}</td>\n        </tr>\n      </table>\n    </div>  \n    <!-- {{ playerlist | json}} -->\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/player/playerlist/playerlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerlistComponent = (function () {
    function PlayerlistComponent(_playerService, _router) {
        this._playerService = _playerService;
        this._router = _router;
        this.playerlist = [];
    }
    PlayerlistComponent.prototype.ngOnInit = function () {
        this.get_all_players();
    };
    PlayerlistComponent.prototype.get_all_players = function () {
        var _this = this;
        this._playerService.get_all_players()
            .then(function (playerlist) { return _this.playerlist = playerlist; })
            .catch(function (err) { return console.log('Client all get users ', err); });
    };
    PlayerlistComponent.prototype.deletePlayer = function (id) {
        var _this = this;
        console.log(id);
        this._playerService.deletePlayer(id)
            .then(function () { console.log('i am back in component'); _this.ngOnInit(); })
            .catch(function (err) { return console.log('Client all get users ', err); });
    };
    return PlayerlistComponent;
}());
PlayerlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playerlist',
        template: __webpack_require__("../../../../../src/app/player/playerlist/playerlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player/playerlist/playerlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PlayerlistComponent);

var _a, _b;
// this._router.navigate(['/']); 
//# sourceMappingURL=playerlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/player/playerstatus/playerstatus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".green{\r\n    background-color: green;\r\n}\r\n.red{\r\n    background-color: red;\r\n}\r\n.yellow{\r\n    background-color: yellow;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/playerstatus/playerstatus.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  \n  <div>\n      <h2>Player Status - Game 1</h2>\n      <a [routerLink]=\"['/players','status','1']\">Game1</a> | \n      <a [routerLink]=\"['/players','status','2']\">Game2</a> | \n      <a [routerLink]=\"['/players','status','3']\">Game3</a>\n  </div>\n  <p>You reached game</p>\n  <div>\n      <table>\n        <tr style='border : 2px solid blue'>\n          <th>Player name</th>\n          <th>Actions</th>\n        </tr>\n        <tr *ngFor='let player of playerlist; let idx = index'>\n          <td>{{player.name}}</td>\n          <td>\n            <button (click)=\"changeColor(1,player)\" [ngClass]=\"{green: player.action === 'Playing'}\" >Playing</button>\n            <button (click)='changeColor(2,player)' [ngClass]=\"{red: player.action === 'NotPlaying'}\">NotPlaying</button>\n            <button (click)='changeColor(3,player)' [ngClass]=\"{yellow: player.action === 'Undecided'}\">Undecided</button>\n          </td>\n        </tr>\n      </table>\n    </div>  \n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/player/playerstatus/playerstatus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerstatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/player/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerstatusComponent = (function () {
    function PlayerstatusComponent(_playerService) {
        this._playerService = _playerService;
        this.playerlist = [];
    }
    PlayerstatusComponent.prototype.ngOnInit = function () {
        this.get_all_players();
    };
    PlayerstatusComponent.prototype.get_all_players = function () {
        var _this = this;
        this._playerService.get_all_players()
            .then(function (playerlist) { return _this.playerlist = playerlist; })
            .catch(function (err) { return console.log('Client all get users ', err); });
    };
    PlayerstatusComponent.prototype.changeColor = function (str, player) {
        console.log(str);
        if (str === 1) {
            player.action = 'Playing';
        }
        if (str === 2) {
            player.action = 'NotPlaying';
        }
        if (str === 3) {
            player.action = 'Undecided';
        }
    };
    return PlayerstatusComponent;
}());
PlayerstatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playerstatus',
        template: __webpack_require__("../../../../../src/app/player/playerstatus/playerstatus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player/playerstatus/playerstatus.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], PlayerstatusComponent);

var _a;
//# sourceMappingURL=playerstatus.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map