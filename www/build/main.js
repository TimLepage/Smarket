webpackJsonp([0],{

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 238:
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
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FluxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FluxPage = /** @class */ (function () {
    function FluxPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FluxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flux',template:/*ion-inline-start:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/flux/flux.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Flux</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div cards>\n\n    <div class="grid-full">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <p>Contenu sponsorisé</p>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <p>Mon compte</p>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <p>Promotions</p>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <p>Contenu sponsorisé</p>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <p>Contenu sponsorisé</p>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <p>Bons d\'achat</p>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/flux/flux.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FluxPage);
    return FluxPage;
}());

//# sourceMappingURL=flux.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_item_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListePage = /** @class */ (function () {
    function ListePage(navCtrl, alertCtrl, itemsService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.itemsService = itemsService;
        this.currentTab = 'List';
    }
    ListePage.prototype.ngOnInit = function () {
        var _this = this;
        this.itemSubscription = this.itemsService.itemsSubject.subscribe(function (items) { return _this.items = items; });
        this.totalPriceSubscription = this.itemsService.totalPriceSubject.subscribe(function (price) { return _this.totalPrice = price; });
        // In order to actually "get" values, via emissions
        this.itemsService.emitWholeItemSubject();
    };
    ListePage.prototype.getListToDisplay = function () {
        // console.log(this.currentTab);
        switch (this.currentTab) {
            case 'List':
                console.log(this.items.filter(function (item) { return item.isInList(); }));
                return this.items.filter(function (item) { return item.isInList(); });
            case 'Cart':
                console.log(this.items.filter(function (item) { return item.isInCart(); }));
                return this.items.filter(function (item) { return item.isInCart(); });
        }
    };
    /**
     * Fired when an item from the list is added to cart
     */
    ListePage.prototype.onAddToCart = function (item) {
        this.itemsService.moveItemFromListToCart(item);
    };
    /**
     * Fired when an item from the list is removed from list
     */
    ListePage.prototype.onRemove = function (item) {
        console.log(this.currentTab);
        switch (this.currentTab) {
            case "List":
                this.itemsService.removeItemFromList(item);
            case "Cart":
                this.itemsService.moveItemFromCartToList(item);
        }
    };
    ListePage.prototype.doPrompt = function () {
        var _this = this;
        var al = this.alertCtrl.create({
            title: 'Ajouter un élément à votre liste',
            message: 'Entrez un élément à ajouter à la liste',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'item'
                },
                {
                    name: 'price',
                    placeholder: 'price'
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () {
                    }
                },
                {
                    text: 'Ajouter',
                    handler: function (data) {
                        _this.itemsService.addItem(data.name.trim(), parseFloat(data.price.trim()), new __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.latLng());
                    }
                }
            ]
        });
        al.present();
    };
    ListePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-liste',template:/*ion-inline-start:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/liste/liste.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="currentTab == \'List\'">Liste</ion-title>\n    <ion-title *ngIf="currentTab == \'Cart\'">Panier</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="currentTab">\n      <ion-segment-button value="List">\n        <ion-icon name="list" item-start color="primary"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="Cart">\n        <ion-icon name="cart" item-start color="primary"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-fab center top>\n         <ion-badge color="primary">${{totalPrice.toFixed(2)}}</ion-badge>\n  </ion-fab>\n\n  <ion-fab center bottom *ngIf="currentTab == \'List\'">\n    <button ion-fab (click)="doPrompt()">\n      <ion-icon name="add" item-start color="white"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item *ngFor="let item of getListToDisplay()">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9>\n            <button class=\'button\'>\n              <ion-icon style="float:left; padding:10px" name="pin" color="primary"></ion-icon>\n              <label style="float:left; padding:10px">{{ item.name }}</label>\n              <label *ngIf="currentTab == \'Cart\'" style="float:right; padding:10px">${{ item.price }}</label>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button *ngIf="currentTab == \'List\'" (click)="onAddToCart(item)" style="float:right; padding:10px">\n              <ion-icon name="cart" color="primary"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button (click)="onRemove(item)" style="float:right; padding:10px">\n              <ion-icon name="trash" color="primary"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/liste/liste.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__app_services_item_service__["a" /* ItemService */]])
    ], ListePage);
    return ListePage;
}());

//# sourceMappingURL=liste.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_item_service__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    function MapPage(itemsService) {
        this.itemsService = itemsService;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //set map center
        this.center = [45.184604, 5.752280]; //Polytech
        this.itemSubscription = this.itemsService.itemsSubject.subscribe(function (items) {
            _this.items = items;
        });
        // In order to actually "get" items, via an emission
        this.itemsService.emitWholeItemSubject();
        this.initMap();
    };
    /**
     * Initialise map : create it, configure it and center it on received location
     */
    MapPage.prototype.initMap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.map('map', {
            center: this.center,
            zoom: 13
        });
        __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attributionControl: false
        }).addTo(this.map);
        this.map.removeControl(this.map.attributionControl);
        this.map.locate({ setView: true, maxZoom: 17 });
        this.map.on('locationerror', this.onLocationError);
        this.map.on('locationfound', function (e) {
            var radius = e.accuracy / 2;
            __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map);
            var _loop_1 = function (item) {
                var itemPosition = new __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.latLng(e.latlng.lat + 0.0002 * item.getId(), e.latlng.lng + 0.0002 * item.getId());
                _this.itemsService.setItemPosition(item, itemPosition);
                var currentMarker = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.marker(item.getPosition()).addTo(_this.map)
                    .bindPopup(item.getName() + " " + item.getPrice() + "€").openPopup()
                    .on('contextmenu', function (e) {
                    _this.itemsService.moveItemFromListToCart(item);
                    _this.map.removeLayer(currentMarker);
                });
            };
            for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
        });
    };
    MapPage.prototype.onLocationError = function (e) {
        alert(e.message);
    };
    MapPage.prototype.ionViewWillUnload = function () {
        this.itemSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map-page',template:/*ion-inline-start:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/map/map.html"*/'<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css">\n<ion-header>\n  <ion-navbar>\n    <ion-title center>\n      Map\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/map/map.html"*/
        })
        /**
         * Map page class.
         *
         * @class      MapPage (name)
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_item_service__["a" /* ItemService */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liste_liste__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan_scan__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flux_flux__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__flux_flux__["a" /* FluxPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__liste_liste__["a" /* ListePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__scan_scan__["a" /* ScanPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Flux" tabIcon="bulb"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Liste" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Scan" tabIcon="qr-scanner"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Map" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_request_promise_native__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_request_promise_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_request_promise_native__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_item_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_localisation_service__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, itemsService, alertCtrl, barcodeScanner, localisationService) {
        this.navCtrl = navCtrl;
        this.itemsService = itemsService;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.localisationService = localisationService;
    }
    ScanPage.prototype.ionViewDidEnter = function () {
        this.scan();
    };
    ScanPage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (data) {
            if (!data.cancelled) {
                _this.request(data.text);
            }
        });
    };
    ScanPage.prototype.askAddItemPrompt = function (product_name) {
        var _this = this;
        var price = parseFloat((Math.random() * 10).toFixed(2));
        var alert = this.alertCtrl.create({
            title: 'Article hors liste',
            message: 'Voulez vous ajouter cet article : ' + product_name + ' (' + price + ')' + ' à votre panier ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ajouter',
                    handler: function () {
                        _this.itemsService.addNewItemtoCart(product_name, price, _this.localisationService.getUserPosition());
                    }
                }
            ]
        });
        alert.present();
    };
    ScanPage.prototype.request = function (barcode) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, queryString, endUrl, option, result, article, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!barcode) {
                            return [2 /*return*/];
                        }
                        document.getElementById('loadingGif').style.display = 'block';
                        baseUrl = 'https://fr.openfoodfacts.org/api/v0/produit/';
                        queryString = barcode;
                        endUrl = '.json';
                        option = {
                            uri: baseUrl.concat(queryString, endUrl),
                        };
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_request_promise_native__["get"](option)];
                    case 1:
                        result = _a.sent();
                        article = JSON.parse(result);
                        console.log(article.product.product_name);
                        item = this.itemsService.getItemFromName(article.product.product_name.toLowerCase());
                        if (item) {
                            this.itemsService.moveItemFromListToCart(item);
                        }
                        else {
                            this.askAddItemPrompt(article.product.product_name);
                        }
                        document.getElementById('loadingGif').style.display = 'none';
                        return [2 /*return*/];
                }
            });
        });
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/scan/scan.html"*/'<ion-content>\n    <ion-card id="loadingGif" style="display:none">\n          <h1 id="waitingScreen"> Merci de patienter pendant la recherche de l\'article </h1>\n          <img src="../../assets/imgs/loading.gif">\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/scan/scan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_localisation_service__["a" /* LocalisationService */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalisationService; });
var LocalisationService = /** @class */ (function () {
    function LocalisationService() {
    }
    LocalisationService.prototype.getUserPosition = function () {
    };
    return LocalisationService;
}());

//# sourceMappingURL=localisation.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_flux_flux__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_liste_liste__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_scan_scan__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_item_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_localisation_service__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_liste_liste__["a" /* ListePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_scan_scan__["a" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_flux_flux__["a" /* FluxPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_liste_liste__["a" /* ListePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_scan_scan__["a" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_flux_flux__["a" /* FluxPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_14__services_localisation_service__["a" /* LocalisationService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(id /* Starts at 1*/, name, price, position) {
        this.name = name;
        this.price = price;
        this.position = position;
        if (id <= 0) {
            throw new Error('id should be strictly positive');
        }
        else {
            this.id = id;
        }
        this.inCart = false;
        this.inList = true;
    }
    Item.prototype.addToCart = function () {
        this.inCart = true;
    };
    Item.prototype.removeFromCart = function () {
        this.inCart = false;
    };
    Item.prototype.addToList = function () {
        this.inList = true;
    };
    Item.prototype.removeFromList = function () {
        this.inList = false;
    };
    Item.prototype.isInList = function () {
        return this.inList;
    };
    Item.prototype.isInCart = function () {
        return this.inCart;
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getPosition = function () {
        return this.position;
    };
    Item.prototype.setPosition = function (position) {
        this.position = position;
    };
    return Item;
}());

//# sourceMappingURL=Item.model.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/utilisateur/Bureau/S9/MM/SmarketAPK/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Item_model__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);



var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = [
            new __WEBPACK_IMPORTED_MODULE_0__models_Item_model__["a" /* Item */](1, 'Poitrine fumée', 2.31, new __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.latLng()),
            new __WEBPACK_IMPORTED_MODULE_0__models_Item_model__["a" /* Item */](2, 'Oeufs', 1.88, new __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.latLng()),
            new __WEBPACK_IMPORTED_MODULE_0__models_Item_model__["a" /* Item */](3, 'Pain de mie', 0.93, new __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.latLng()),
        ];
        this.itemsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.totalPriceSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    /**
     * 'Updates' items subject with new version of items list
     * To be called after every significant update of items list
     */
    ItemService.prototype.emitWholeItemSubject = function () {
        this.itemsSubject.next(this.items.slice());
        this.totalPriceSubject.next(this.getSumInCart());
    };
    ItemService.prototype.addItem = function (name, price, position) {
        this.numberItems = this.items.push(new __WEBPACK_IMPORTED_MODULE_0__models_Item_model__["a" /* Item */](this.items.length + 1, name, price, position));
        this.emitWholeItemSubject();
    };
    ItemService.prototype.addItemFromItem = function (item) {
        this.numberItems = this.items.push(item);
        this.emitWholeItemSubject();
    };
    ItemService.prototype.setItemPosition = function (item, position) {
        item.setPosition(position);
        this.emitWholeItemSubject();
    };
    ItemService.prototype.moveItemFromListToCart = function (item) {
        item.removeFromList();
        item.addToCart();
        this.emitWholeItemSubject();
    };
    ItemService.prototype.moveItemFromCartToList = function (item) {
        item.removeFromCart();
        item.addToList();
        this.emitWholeItemSubject();
    };
    ItemService.prototype.addItemToCart = function (item) {
        item.addToCart();
        this.emitWholeItemSubject();
    };
    ItemService.prototype.removeItemFromList = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1)
            this.items.splice(index, 1);
        item.removeFromList();
        this.emitWholeItemSubject();
    };
    ItemService.prototype.removeItemFromCart = function (item) {
        item.removeFromCart();
        this.emitWholeItemSubject();
    };
    ItemService.prototype.addNewItemtoCart = function (name, price, position) {
        var item = new __WEBPACK_IMPORTED_MODULE_0__models_Item_model__["a" /* Item */](this.items.length + 1, name, price, position);
        this.addItemFromItem(item);
        this.moveItemFromListToCart(item);
        this.emitWholeItemSubject();
    };
    ItemService.prototype.getSumInCart = function () {
        // return reduction on + of list composed of in-cart items' prices
        return this.items.filter(function (item) { return item.isInCart(); }).map(function (item) { return item.getPrice(); }).reduce(function (a, b) { return a + b; }, 0);
    };
    ItemService.prototype.getItemFromName = function (name) {
        return this.items.filter(function (item) { return item.getName().toLowerCase() === name; })[0];
    };
    return ItemService;
}());

//# sourceMappingURL=item.service.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map