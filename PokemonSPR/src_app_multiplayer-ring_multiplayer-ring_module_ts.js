"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_multiplayer-ring_multiplayer-ring_module_ts"],{

/***/ 1601:
/*!*********************************************************************!*\
  !*** ./src/app/multiplayer-ring/multiplayer-ring-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiplayerRingPageRoutingModule": () => (/* binding */ MultiplayerRingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _multiplayer_ring_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiplayer-ring.page */ 8312);




const routes = [
    {
        path: '',
        component: _multiplayer_ring_page__WEBPACK_IMPORTED_MODULE_0__.MultiplayerRingPage
    }
];
let MultiplayerRingPageRoutingModule = class MultiplayerRingPageRoutingModule {
};
MultiplayerRingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MultiplayerRingPageRoutingModule);



/***/ }),

/***/ 2511:
/*!*************************************************************!*\
  !*** ./src/app/multiplayer-ring/multiplayer-ring.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiplayerRingPageModule": () => (/* binding */ MultiplayerRingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _multiplayer_ring_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiplayer-ring-routing.module */ 1601);
/* harmony import */ var _multiplayer_ring_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiplayer-ring.page */ 8312);
/* harmony import */ var _components_pokeball_pokeball_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pokeball/pokeball.component */ 3878);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _components_pokeball_pokeball_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pokeball/pokeball.module */ 9170);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-countdown */ 1314);











let MultiplayerRingPageModule = class MultiplayerRingPageModule {
};
MultiplayerRingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _multiplayer_ring_routing_module__WEBPACK_IMPORTED_MODULE_0__.MultiplayerRingPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule, _components_pokeball_pokeball_module__WEBPACK_IMPORTED_MODULE_3__.PokeballModule, ngx_countdown__WEBPACK_IMPORTED_MODULE_10__.CountdownModule
        ],
        declarations: [_multiplayer_ring_page__WEBPACK_IMPORTED_MODULE_1__.MultiplayerRingPage, _components_pokeball_pokeball_component__WEBPACK_IMPORTED_MODULE_2__.PokeballComponent]
    })
], MultiplayerRingPageModule);



/***/ }),

/***/ 8312:
/*!***********************************************************!*\
  !*** ./src/app/multiplayer-ring/multiplayer-ring.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiplayerRingPage": () => (/* binding */ MultiplayerRingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _multiplayer_ring_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiplayer-ring.page.html?ngResource */ 4124);
/* harmony import */ var _multiplayer_ring_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiplayer-ring.page.scss?ngResource */ 5021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _services_sounds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sounds.service */ 5447);
/* harmony import */ var _game_ring_game_ring_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-ring/game-ring.service */ 6404);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ 4769);









let MultiplayerRingPage = class MultiplayerRingPage {
    constructor(soundsService, gameRingService, router) {
        this.soundsService = soundsService;
        this.gameRingService = gameRingService;
        this.router = router;
        this.puntaje = 0;
        this.tipoSeleccionado$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.pokemonRival = this.gameRingService.pokemonShareInit;
        this.pokemonJugador = this.gameRingService.pokemonShareInit;
        this.enemyName = 'Enemigo';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.delay = (ms) => new Promise((res) => setTimeout(res, ms));
    }
    emitPokemon(pokemonRequested) {
        this.pokemonJugador = pokemonRequested;
        //only emmits when pokemon has values, sometimes is is just empty to reset values
        if (pokemonRequested.type) {
            this.socket.emit('playerSelects', this.pokemonJugador);
        }
    }
    ngOnInit() {
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__["default"])('https://pokemonsocket.onrender.com');
        this.socket.on('showEnemy', pokemonEnemy => {
            this.iniciarCiclo(pokemonEnemy);
        });
        this.socket.on('enemyDown', () => {
            this.reloadWindow();
        });
    }
    ngAfterViewInit() {
        this.soundsService.playMusicBackground('musica');
        this.soundsService.playPikachuSound();
        // espera a que las dos pokeballs sean traidas
        // toma un evento de las dos pokeballs
        this.subscriptions.add(this.gameRingService.ciclo.subscribe({
            next: (showedPokemons) => {
                const comparadorHTML = document.querySelector('.comparador');
                // valida que el contador de pokemons volteados sea 2
                if (showedPokemons !== 2) {
                    console.log('Llega');
                    return false;
                }
                this.delay(1000).then(() => {
                    const ganadorRes = this.gameRingService.compareWinner(this.tipoSeleccionado, this.pokemonRival.type);
                    comparadorHTML.textContent = ganadorRes.emoji;
                    this.soundsService.playSound(ganadorRes.mensaje);
                    this.delay(1000).then(() => {
                        this.puntaje += ganadorRes.punto;
                        this.esperarParaIniciar();
                    });
                });
            }
        }));
    }
    ngOnDestroy() {
        this.socket.disconnect();
        this.soundsService.toggleMusic();
        this.subscriptions.unsubscribe();
        this.gameRingService.restartCount();
    }
    iniciarCiclo(tipo) {
        this.delay(2000).then(() => {
            this.voltearEnemigo(tipo);
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.router.navigate(['multijugdor']);
            event.target.complete();
        }, 100);
    }
    tipoSelected(tipoClicado) {
        this.toggleOpciones(false);
        this.tipoSeleccionado$.next(tipoClicado);
        this.tipoSeleccionado = tipoClicado;
    }
    voltearEnemigo(pokemonReceived) {
        this.pokemonRival = pokemonReceived;
    }
    toggleOpciones(orden) {
        const lista = document.querySelector('#footerEleccion');
        if (orden) {
            return lista.classList.remove('no-click');
        }
        return lista.classList.add('no-click');
    }
    esperarParaIniciar() {
        this.delay(1200).then(() => {
            this.toggleOpciones(true);
            this.gameRingService.setPokebalState(true);
            document.querySelector('.comparador').textContent = 'VS';
            this.socket.emit('approveSelections');
        });
    }
    toggleMusic() {
        this.soundsService.toggleMusic();
    }
    reloadWindow() {
        location.reload();
    }
};
MultiplayerRingPage.ctorParameters = () => [
    { type: _services_sounds_service__WEBPACK_IMPORTED_MODULE_2__.SoundsService },
    { type: _game_ring_game_ring_service__WEBPACK_IMPORTED_MODULE_3__.GameRingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
MultiplayerRingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-multiplayer-ring',
        template: _multiplayer_ring_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_multiplayer_ring_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MultiplayerRingPage);



/***/ }),

/***/ 5021:
/*!************************************************************************!*\
  !*** ./src/app/multiplayer-ring/multiplayer-ring.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".pokeballsGroup {\n  text-align: center;\n  height: 10vh;\n}\n\n.pokeballTarjeta {\n  height: 20vh;\n}\n\n.tipoEmoji {\n  font-size: 2.4rem;\n}\n\n@media only screen and (max-width: 450px) {\n  #footerEleccion {\n    background-color: red;\n  }\n  .arena {\n    --background: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fffe330-0a41-49ed-9885-6e3aba462e70/ddxkac6-ebe2ffce-8080-4ebf-b301-598019f384b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZmZlMzMwLTBhNDEtNDllZC05ODg1LTZlM2FiYTQ2MmU3MFwvZGR4a2FjNi1lYmUyZmZjZS04MDgwLTRlYmYtYjMwMS01OTgwMTlmMzg0YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.axxzTibMfkRu03fwZBSQTnycdkMOj-U14iKZzrsMUhI) 0 0/100% 100%;\n  }\n}\n\n#footerEleccion {\n  background-color: blue;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  max-width: 620px;\n  max-height: 300px;\n}\n\n.arena {\n  --background: url(https://c4.wallpaperflare.com/wallpaper/503/189/157/pokemon-video-games-pixel-art-pixels-wallpaper-preview.jpg) 0 0/100% 100% no-repeat;\n}\n\n.contenedorArena {\n  display: flex;\n  flex-direction: column;\n  height: 83vh;\n}\n\n.centroArena {\n  flex: 1; /* this is the key; consumes all available height */\n  background-image: url(https://i.redd.it/3hqfdsb9uvg11.png);\n}\n\n.spriteCentro {\n  overflow: hidden;\n  max-width: 410px;\n  min-width: 100px;\n  margin: auto;\n}\n\n.comparador {\n  margin: auto;\n  font-size: 3em;\n  font-weight: bolder;\n}\n\n.enemigoPokeball {\n  height: 27vh;\n}\n\n.jugadorPokeball {\n  height: 27vh;\n}\n\n.titulos {\n  color: #ffb1cd;\n  font: bold;\n  background-image: url(https://wallpaperaccess.com/full/8045537.jpg);\n}\n\n.no-click {\n  pointer-events: none;\n}\n\n#contenidoArena {\n  margin: auto;\n  max-width: 620px;\n}\n\n#cronometro {\n  margin: auto;\n  position: absolute;\n}\n\n.puntaje {\n  background-color: rgba(27, 27, 27, 0.5);\n  background-blend-mode: screen;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  text-align: center;\n  max-width: 40px;\n  margin: auto;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpcGxheWVyLXJpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDSSxxQkFBQTtFQUFKO0VBRUE7SUFDSSxtbEJBQUE7RUFBSjtBQUNGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSx5SkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsT0FBQSxFQUFBLG1EQUFBO0VBQ0EsMERBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUVBQUE7QUFERjs7QUFJQTtFQUNBLG9CQUFBO0FBREE7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEQSIsImZpbGUiOiJtdWx0aXBsYXllci1yaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2tlYmFsbHNHcm91cHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwdmg7XG59XG5cbi5wb2tlYmFsbFRhcmpldGF7XG4gIGhlaWdodDogMjB2aDtcbn1cblxuLnRpcG9FbW9qaXtcbiAgZm9udC1zaXplOiAyLjRyZW07XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAjZm9vdGVyRWxlY2Npb257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgLmFyZW5he1xuICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mLzNmZmZlMzMwLTBhNDEtNDllZC05ODg1LTZlM2FiYTQ2MmU3MC9kZHhrYWM2LWViZTJmZmNlLTgwODAtNGViZi1iMzAxLTU5ODAxOWYzODRiMC5wbmc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2pkbE1HUXhPRGc1T0RJeU5qUXpOek5oTldZd1pEUXhOV1ZoTUdReU5tVXdJaXdpYVhOeklqb2lkWEp1T21Gd2NEbzNaVEJrTVRnNE9UZ3lNalkwTXpjellUVm1NR1EwTVRWbFlUQmtNalpsTUNJc0ltOWlhaUk2VzF0N0luQmhkR2dpT2lKY0wyWmNMek5tWm1abE16TXdMVEJoTkRFdE5EbGxaQzA1T0RnMUxUWmxNMkZpWVRRMk1tVTNNRnd2WkdSNGEyRmpOaTFsWW1VeVptWmpaUzA0TURnd0xUUmxZbVl0WWpNd01TMDFPVGd3TVRsbU16ZzBZakF1Y0c1bkluMWRYU3dpWVhWa0lqcGJJblZ5YmpwelpYSjJhV05sT21acGJHVXVaRzkzYm14dllXUWlYWDAuYXh4elRpYk1ma1J1MDNmd1pCU1FUbnljZGtNT2otVTE0aUtaenJzTVVoSSkgMCAwLzEwMCUgMTAwJTtcbiAgfVxufVxuXG4jZm9vdGVyRWxlY2Npb257XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MjBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5hcmVuYXtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jNC53YWxscGFwZXJmbGFyZS5jb20vd2FsbHBhcGVyLzUwMy8xODkvMTU3L3Bva2Vtb24tdmlkZW8tZ2FtZXMtcGl4ZWwtYXJ0LXBpeGVscy13YWxscGFwZXItcHJldmlldy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uY29udGVuZWRvckFyZW5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA4M3ZoO1xufVxuXG4uY2VudHJvQXJlbmEge1xuICBmbGV4OiAxOyAgICAgLyogdGhpcyBpcyB0aGUga2V5OyBjb25zdW1lcyBhbGwgYXZhaWxhYmxlIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLnJlZGQuaXQvM2hxZmRzYjl1dmcxMS5wbmcpO1xufVxuXG4uc3ByaXRlQ2VudHJve1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDQxMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jb21wYXJhZG9ye1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uZW5lbWlnb1Bva2ViYWxse1xuICBoZWlnaHQ6IDI3dmg7XG59XG5cbi5qdWdhZG9yUG9rZWJhbGwge1xuICBoZWlnaHQ6IDI3dmg7XG59XG5cbi50aXR1bG9ze1xuICBjb2xvcjogI2ZmYjFjZDtcbiAgZm9udDogYm9sZCA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dhbGxwYXBlcmFjY2Vzcy5jb20vZnVsbC84MDQ1NTM3LmpwZyk7XG59XG5cbi5uby1jbGljayB7XG5wb2ludGVyLWV2ZW50czpub25lOyAvL1RoaXMgbWFrZXMgaXQgbm90IGNsaWNrYWJsZVxufVxuXG4jY29udGVuaWRvQXJlbmF7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA2MjBweDtcbn1cblxuI2Nyb25vbWV0cm97XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHVudGFqZXtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC41KTtcbmJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuO1xuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xudGV4dC1hbGlnbjogY2VudGVyO1xubWF4LXdpZHRoOiA0MHB4O1xubWFyZ2luOiBhdXRvO1xuYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIl19 */";

/***/ }),

/***/ 4124:
/*!************************************************************************!*\
  !*** ./src/app/multiplayer-ring/multiplayer-ring.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Multiplayer</ion-title>\n    <ion-button\n      slot=\"end\"\n      fill=\"clear\"\n      (click)=\"toggleMusic()\"\n      style=\"font-size: 1.3em\"\n      >🔊</ion-button\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scroll-y=\"false\" style=\"position: relative\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div id=\"contenidoArena\">\n    <div class=\"contenedorArena\">\n      <ion-card class=\"arena enemigoPokeball\">\n        <ion-card-header>\n          <ion-card-title *ngIf=\"pokemonRival\" class=\"ion-text-center titulos\"\n            >{{enemyName}} {{ pokemonRival.name}}\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"pokeballTarjeta\">\n          <ion-grid>\n            <ion-row class=\"pokeballsGroup\">\n              <ion-col no-lines class=\"pokeballColumn\">\n                <br />\n                <app-pokeball\n                  [pokemonReceived]=\"pokemonRival\"\n                  (pokemonDatos)=\"pokemonRival = $event\"\n                ></app-pokeball>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class=\"centroArena\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center titulos\"> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"pokeballTarjeta\">\n          <ion-grid>\n            <ion-row style=\"display: none\"> </ion-row>\n            <ion-row class=\"pokeballsGroup\" style=\"display: none\">\n              <ion-col no-lines class=\"pokeballColumn\"> </ion-col>\n            </ion-row>\n            <ion-row class=\"pokeballsGroup\">\n              <ion-col class=\"pokeballColumn\">\n                <img\n                  *ngIf=\"pokemonJugador.sprite\"\n                  src=\"{{pokemonJugador.sprite}}\"\n                  alt=\"imagen\"\n                  class=\"spriteCentro\"\n                />\n              </ion-col>\n              <ion-col class=\"pokeballColumn\">\n                <ion-text class=\"comparador\"> VS </ion-text>\n              </ion-col>\n\n              <ion-col class=\"pokeballColumn\">\n                <img\n                  *ngIf=\"pokemonRival.sprite\"\n                  src=\"{{pokemonRival.sprite}}\"\n                  alt=\"imagen\"\n                  class=\"spriteCentro\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-text>\n                  <div>\n                    <h1 class=\"puntaje\">{{puntaje}}</h1>\n                  </div>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class=\"arena jugadorPokeball\">\n        <ion-card-header>\n          <ion-card-title *ngIf=\"pokemonJugador\" class=\"ion-text-center titulos\"\n            >Jugador {{ pokemonJugador.name }}\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"pokeballTarjeta\">\n          <ion-grid>\n            <ion-row class=\"pokeballsGroup\">\n              <ion-col no-lines class=\"pokeballColumn\">\n                <br />\n                <app-pokeball\n                  [typeSelected$]=\"tipoSeleccionado$\"\n                  (pokemonDatos)=\"emitPokemon($event)\"\n                ></app-pokeball>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ion-footer id=\"footerEleccion\">\n      <ion-toolbar>\n        <ion-row class=\"pokeballsGroup\">\n          <ion-col>\n            <div\n              class=\"ion-activatable ripple-parent\"\n              (click)=\"tipoSelected('water')\"\n            >\n              <h3 class=\"tipoEmoji\">🌊</h3>\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <div\n                class=\"ion-activatable ripple-parent\"\n                (click)=\"tipoSelected('fire')\"\n              >\n                <h3 class=\"tipoEmoji\">🔥</h3>\n                <ion-ripple-effect></ion-ripple-effect>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <div\n                class=\"ion-activatable ripple-parent\"\n                (click)=\"tipoSelected('grass')\"\n              >\n                <h3 class=\"tipoEmoji\">🌿</h3>\n                <ion-ripple-effect></ion-ripple-effect>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n    </ion-footer>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 1746:
/*!*************************************************************!*\
  !*** ./node_modules/@socket.io/component-emitter/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emitter": () => (/* binding */ Emitter)
/* harmony export */ });
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */
function Emitter(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
}; // alias used for reserved events (protected method)


Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ 1714:
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/has-cors.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasCORS": () => (/* binding */ hasCORS)
/* harmony export */ });
// imported from https://github.com/component/has-cors
let value = false;

try {
  value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {// if XMLHttp support is disabled in IE then it will throw
  // when trying to create
}

const hasCORS = value;

/***/ }),

/***/ 1323:
/*!********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/parseqs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode)
/* harmony export */ });
// imported from https://github.com/galkn/querystring

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
  let str = '';

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

function decode(qs) {
  let qry = {};
  let pairs = qs.split('&');

  for (let i = 0, l = pairs.length; i < l; i++) {
    let pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
}

/***/ }),

/***/ 4726:
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/parseuri.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
// imported from https://github.com/galkn/parseuri

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
function parse(str) {
  const src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  let m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
}

function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

  if (path.slice(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }

  if (path.slice(-1) == '/') {
    names.splice(names.length - 1, 1);
  }

  return names;
}

function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

/***/ }),

/***/ 1644:
/*!******************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/yeast.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "yeast": () => (/* binding */ yeast)
/* harmony export */ });
// imported from https://github.com/unshiftio/yeast


const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
      length = 64,
      map = {};
let seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  let encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */

function decode(str) {
  let decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */

function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//

for (; i < length; i++) map[alphabet[i]] = i;

/***/ }),

/***/ 3851:
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/globalThis.browser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalThisShim": () => (/* binding */ globalThisShim)
/* harmony export */ });
const globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

/***/ }),

/***/ 273:
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Socket": () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket),
/* harmony export */   "Transport": () => (/* reexport safe */ _transport_js__WEBPACK_IMPORTED_MODULE_1__.Transport),
/* harmony export */   "installTimerFunctions": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.installTimerFunctions),
/* harmony export */   "nextTick": () => (/* reexport safe */ _transports_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_5__.nextTick),
/* harmony export */   "parse": () => (/* reexport safe */ _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__.parse),
/* harmony export */   "protocol": () => (/* binding */ protocol),
/* harmony export */   "transports": () => (/* reexport safe */ _transports_index_js__WEBPACK_IMPORTED_MODULE_2__.transports)
/* harmony export */ });
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */ 6878);
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport.js */ 1657);
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports/index.js */ 3011);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ 2960);
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/parseuri.js */ 4726);
/* harmony import */ var _transports_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports/websocket-constructor.js */ 9293);


const protocol = _socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket.protocol;






/***/ }),

/***/ 6878:
/*!***********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/socket.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Socket": () => (/* binding */ Socket)
/* harmony export */ });
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transports/index.js */ 3011);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ 2960);
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contrib/parseqs.js */ 1323);
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/parseuri.js */ 4726);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @socket.io/component-emitter */ 1746);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine.io-parser */ 2124);






class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__.Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} opts - options
   * @api public
   */
  constructor(uri, opts = {}) {
    super();

    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(opts.host).host;
    }

    (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.installTimerFunctions)(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? "443" : "80";
    }

    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";

    if (typeof this.opts.query === "string") {
      this.opts.query = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__.decode)(this.opts.query);
    } // set on handshake


    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null; // set on heartbeat

    this.pingTimeoutTimer = null;

    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
        // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
        // closed/reloaded)
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            // silently close the transport
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };

        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }

      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };

        addEventListener("offline", this.offlineEventListener, false);
      }
    }

    this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */


  createTransport(name) {
    const query = Object.assign({}, this.opts.query); // append engine.io protocol identifier

    query.EIO = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol; // transport name

    query.transport = name; // session id if we already have one

    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new _transports_index_js__WEBPACK_IMPORTED_MODULE_0__.transports[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */


  open() {
    let transport;

    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      // Emit error on next tick so it can be listened to
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }

    this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }

    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */


  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    } // set up transport


    this.transport = transport; // set up transport listeners

    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */


  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;

    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;

        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error"); // @ts-ignore

          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };

    function freezeTransport() {
      if (failed) return; // Any callback called by transport should be ignored since now

      failed = true;
      cleanup();
      transport.close();
      transport = null;
    } // Handle any error that happens while probing


    const onerror = err => {
      const error = new Error("probe error: " + err); // @ts-ignore

      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };

    function onTransportClose() {
      onerror("transport closed");
    } // When the socket is closed while we're probing


    function onclose() {
      onerror("socket closed");
    } // When the socket is upgraded while we're probing


    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    } // Remove all listeners on the transport and on self


    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };

    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @api private
   */


  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush(); // we check for `readyState` in case an `open`
    // listener already closed the socket

    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
      let i = 0;
      const l = this.upgrades.length;

      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }
  /**
   * Handles a packet.
   *
   * @api private
   */


  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet); // Socket is live - any packet counts

      this.emitReserved("heartbeat");

      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;

        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;

        case "error":
          const err = new Error("server error"); // @ts-ignore

          err.code = packet.data;
          this.onError(err);
          break;

        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @api private
   */


  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen(); // In case open handler closes socket

    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */


  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);

    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @api private
   */


  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
    // for example, when upgrading, upgrade packet is sent over,
    // and a nonzero prevBufferLen could cause problems on `drain`

    this.prevBufferLen = 0;

    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @api private
   */


  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets); // keep track of current length of writeBuffer
      // splice writeBuffer and callbackBuffer on `drain`

      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */


  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;

    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }

    let payloadSize = 1; // first packet type

    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;

      if (data) {
        payloadSize += (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.byteLength)(data);
      }

      if (i > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i);
      }

      payloadSize += 2; // separator + packet type
    }

    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */


  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */


  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = undefined;
    }

    if ("function" === typeof options) {
      fn = options;
      options = null;
    }

    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }

    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type: type,
      data: data,
      options: options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   *
   * @api public
   */


  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };

    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };

    const waitForUpgrade = () => {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };

    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";

      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }

    return this;
  }
  /**
   * Called upon transport error
   *
   * @api private
   */


  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @api private
   */


  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      // clear timers
      this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport

      this.transport.removeAllListeners("close"); // ensure transport won't stay open

      this.transport.close(); // ignore further transport communication

      this.transport.removeAllListeners();

      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      } // set ready state


      this.readyState = "closed"; // clear session id

      this.id = null; // emit close event

      this.emitReserved("close", reason, description); // clean buffers after, so users can still
      // grab the buffers on `close` event

      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */


  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;

    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }

    return filteredUpgrades;
  }

}
Socket.protocol = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol;

/***/ }),

/***/ 1657:
/*!**************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transport.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transport": () => (/* binding */ Transport)
/* harmony export */ });
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-parser */ 2124);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/component-emitter */ 1746);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ 2960);




class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }

}

class Transport extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  constructor(opts) {
    super();
    this.writable = false;
    (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.installTimerFunctions)(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @api protected
   */


  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   *
   * @api public
   */


  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }

    return this;
  }
  /**
   * Closes the transport.
   *
   * @api public
   */


  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }

    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api public
   */


  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {// this might happen if the transport was silently closed in the beforeunload event handler
    }
  }
  /**
   * Called upon open
   *
   * @api protected
   */


  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @api protected
   */


  onData(data) {
    const packet = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_0__.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @api protected
   */


  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @api protected
   */


  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }

}

/***/ }),

/***/ 3011:
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transports": () => (/* binding */ transports)
/* harmony export */ });
/* harmony import */ var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling.js */ 5162);
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.js */ 6856);


const transports = {
  websocket: _websocket_js__WEBPACK_IMPORTED_MODULE_1__.WS,
  polling: _polling_js__WEBPACK_IMPORTED_MODULE_0__.Polling
};

/***/ }),

/***/ 5162:
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/polling.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Polling": () => (/* binding */ Polling),
/* harmony export */   "Request": () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ 1657);
/* harmony import */ var _contrib_yeast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contrib/yeast.js */ 1644);
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contrib/parseqs.js */ 1323);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine.io-parser */ 2124);
/* harmony import */ var _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xmlhttprequest.js */ 9222);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @socket.io/component-emitter */ 1746);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util.js */ 2960);
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globalThis.js */ 3851);









function empty() {}

const hasXHR2 = function () {
  const xhr = new _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_4__.XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();

class Polling extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.polling = false;

    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port; // some user agents have empty `location.port`

      if (!port) {
        port = isSSL ? "443" : "80";
      }

      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    /**
     * XHR supports binary
     */


    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  /**
   * Transport name.
   */


  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */


  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */


  pause(onPause) {
    this.readyState = "pausing";

    const pause = () => {
      this.readyState = "paused";
      onPause();
    };

    if (this.polling || !this.writable) {
      let total = 0;

      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }

      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @api public
   */


  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */


  onData(data) {
    const callback = packet => {
      // if its the first message we consider the transport open
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      } // if its a close packet, we close the ongoing requests


      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      } // otherwise bypass onData and handle the message


      this.onPacket(packet);
    }; // decode payload


    (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_3__.decodePayload)(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

    if ("closed" !== this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emitReserved("pollComplete");

      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @api private
   */


  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };

    if ("open" === this.readyState) {
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */


  write(packets) {
    this.writable = false;
    (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_3__.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */


  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = ""; // cache busting is forced

    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0,_contrib_yeast_js__WEBPACK_IMPORTED_MODULE_1__.yeast)();
    }

    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    } // avoid port if default for schema


    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }

    const encodedQuery = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__.encode)(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */


  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */


  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data: data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @api private
   */


  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }

}
class Request extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__.Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts) {
    super();
    (0,_util_js__WEBPACK_IMPORTED_MODULE_6__.installTimerFunctions)(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = undefined !== opts.data ? opts.data : null;
    this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */


  create() {
    const opts = (0,_util_js__WEBPACK_IMPORTED_MODULE_6__.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_4__.XHR(opts);

    try {
      xhr.open(this.method, this.uri, this.async);

      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}

      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }

      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {} // ie6 check


      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }

      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }

      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };

      xhr.send(this.data);
    } catch (e) {
      // Need to defer since .create() is called directly from the constructor
      // and thus the 'error' event can only be only bound *after* this exception
      // occurs.  Therefore, also, we cannot throw here at all.
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }

    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @api private
   */


  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @api private
   */


  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }

    this.xhr.onreadystatechange = empty;

    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }

    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }

    this.xhr = null;
  }
  /**
   * Called upon load.
   *
   * @api private
   */


  onLoad() {
    const data = this.xhr.responseText;

    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @api public
   */


  abort() {
    this.cleanup();
  }

}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (typeof document !== "undefined") {
  // @ts-ignore
  if (typeof attachEvent === "function") {
    // @ts-ignore
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in _globalThis_js__WEBPACK_IMPORTED_MODULE_7__.globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),

/***/ 9293:
/*!*********************************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocket": () => (/* binding */ WebSocket),
/* harmony export */   "defaultBinaryType": () => (/* binding */ defaultBinaryType),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "usingBrowserWebSocket": () => (/* binding */ usingBrowserWebSocket)
/* harmony export */ });
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalThis.js */ 3851);

const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";

  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
const WebSocket = _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.WebSocket || _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";

/***/ }),

/***/ 6856:
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/websocket.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WS": () => (/* binding */ WS)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ 1657);
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contrib/parseqs.js */ 1323);
/* harmony import */ var _contrib_yeast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contrib/yeast.js */ 1644);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.js */ 2960);
/* harmony import */ var _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websocket-constructor.js */ 9293);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine.io-parser */ 2124);





 // detect ReactNative environment

const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Transport name.
   *
   * @api public
   */


  get name() {
    return "websocket";
  }
  /**
   * Opens socket.
   *
   * @api private
   */


  doOpen() {
    if (!this.check()) {
      // let probe timeout
      return;
    }

    const uri = this.uri();
    const protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

    const opts = isReactNative ? {} : (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }

    try {
      this.ws = _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.usingBrowserWebSocket && !isReactNative ? protocols ? new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.WebSocket(uri, protocols) : new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.WebSocket(uri) : new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }

    this.ws.binaryType = this.socket.binaryType || _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.defaultBinaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @api private
   */


  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }

      this.onOpen();
    };

    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });

    this.ws.onmessage = ev => this.onData(ev.data);

    this.ws.onerror = e => this.onError("websocket error", e);
  }
  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */


  write(packets) {
    this.writable = false; // encodePacket efficient as it uses WS framing
    // no need for encodePayload

    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.encodePacket)(packet, this.supportsBinary, data => {
        // always create a new object (GH-437)
        const opts = {};

        if (!_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (this.opts.perMessageDeflate) {
            const len = // @ts-ignore
            "string" === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}

        if (lastPacket) {
          // fake drain
          // defer to next tick to allow Socket to clear writeBuffer
          (0,_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.nextTick)(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  /**
   * Closes socket.
   *
   * @api private
   */


  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */


  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = ""; // avoid port if default for schema

    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    } // append timestamp to URI


    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0,_contrib_yeast_js__WEBPACK_IMPORTED_MODULE_2__.yeast)();
    } // communicate binary support capabilities


    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    const encodedQuery = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_1__.encode)(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */


  check() {
    return !!_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__.WebSocket;
  }

}

/***/ }),

/***/ 9222:
/*!**************************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XHR": () => (/* binding */ XHR)
/* harmony export */ });
/* harmony import */ var _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contrib/has-cors.js */ 1714);
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalThis.js */ 3851);
// browser shim for xmlhttprequest module


function XHR(opts) {
  const xdomain = opts.xdomain; // XMLHttpRequest can be disabled on IE

  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_0__.hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new _globalThis_js__WEBPACK_IMPORTED_MODULE_1__.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

/***/ }),

/***/ 2960:
/*!*********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/util.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "byteLength": () => (/* binding */ byteLength),
/* harmony export */   "installTimerFunctions": () => (/* binding */ installTimerFunctions),
/* harmony export */   "pick": () => (/* binding */ pick)
/* harmony export */ });
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalThis.js */ 3851);

function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }

    return acc;
  }, {});
} // Keep a reference to the real timeout functions so they can be used when overridden

const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
  } else {
    obj.setTimeoutFn = setTimeout.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
    obj.clearTimeoutFn = clearTimeout.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
  }
} // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)

const BASE64_OVERHEAD = 1.33; // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9

function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  } // arraybuffer or blob


  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}

function utf8Length(str) {
  let c = 0,
      length = 0;

  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);

    if (c < 0x80) {
      length += 1;
    } else if (c < 0x800) {
      length += 2;
    } else if (c < 0xd800 || c >= 0xe000) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }

  return length;
}

/***/ }),

/***/ 8320:
/*!************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/commons.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_PACKET": () => (/* binding */ ERROR_PACKET),
/* harmony export */   "PACKET_TYPES": () => (/* binding */ PACKET_TYPES),
/* harmony export */   "PACKET_TYPES_REVERSE": () => (/* binding */ PACKET_TYPES_REVERSE)
/* harmony export */ });
const PACKET_TYPES = Object.create(null); // no Map = no polyfill

PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
  type: "error",
  data: "parser error"
};


/***/ }),

/***/ 1467:
/*!*******************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode)
/* harmony export */ });
// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}

const encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
      i,
      len = bytes.length,
      base64 = '';

  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }

  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }

  return base64;
};
const decode = base64 => {
  let bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;

  if (base64[base64.length - 1] === '=') {
    bufferLength--;

    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }

  const arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }

  return arraybuffer;
};

/***/ }),

/***/ 811:
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/decodePacket.browser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ 8320);
/* harmony import */ var _contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrib/base64-arraybuffer.js */ 1467);


const withNativeArrayBuffer = typeof ArrayBuffer === "function";

const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }

  const type = encodedPacket.charAt(0);

  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }

  const packetType = _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type];

  if (!packetType) {
    return _commons_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_PACKET;
  }

  return encodedPacket.length > 1 ? {
    type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type]
  };
};

const decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer) {
    const decoded = (0,_contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__.decode)(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    }; // fallback for old browsers
  }
};

const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;

    case "arraybuffer":
    default:
      return data;
    // assuming the data is already an ArrayBuffer
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decodePacket);

/***/ }),

/***/ 2636:
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/encodePacket.browser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ 8320);

const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

const isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

const encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  } // plain string


  return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES[type] + (data || ""));
};

const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();

  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };

  return fileReader.readAsDataURL(data);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (encodePacket);

/***/ }),

/***/ 2124:
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodePacket": () => (/* reexport safe */ _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "decodePayload": () => (/* binding */ decodePayload),
/* harmony export */   "encodePacket": () => (/* reexport safe */ _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "encodePayload": () => (/* binding */ encodePayload),
/* harmony export */   "protocol": () => (/* binding */ protocol)
/* harmony export */ });
/* harmony import */ var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encodePacket.js */ 2636);
/* harmony import */ var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decodePacket.js */ 811);


const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

const encodePayload = (packets, callback) => {
  // some packets may be added to the array while encoding, so the initial length must be saved
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    // force base64 encoding for binary packets
    (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__["default"])(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;

      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];

  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = (0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__["default"])(encodedPackets[i], binaryType);
    packets.push(decodedPacket);

    if (decodedPacket.type === "error") {
      break;
    }
  }

  return packets;
};

const protocol = 4;


/***/ }),

/***/ 9172:
/*!*******************************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/contrib/backo2.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Backoff": () => (/* binding */ Backoff)
/* harmony export */ });
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ 4769:
/*!**********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": () => (/* reexport safe */ _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager),
/* harmony export */   "Socket": () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket),
/* harmony export */   "connect": () => (/* binding */ lookup),
/* harmony export */   "default": () => (/* binding */ lookup),
/* harmony export */   "io": () => (/* binding */ lookup),
/* harmony export */   "protocol": () => (/* reexport safe */ socket_io_parser__WEBPACK_IMPORTED_MODULE_3__.protocol)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ 2151);
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.js */ 8417);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ 2777);
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-parser */ 7199);



/**
 * Managers cache.
 */

const cache = {};

function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  const parsed = (0,_url_js__WEBPACK_IMPORTED_MODULE_0__.url)(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;

  if (newConnection) {
    io = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }

  return io.socket(parsed.path, opts);
} // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility


Object.assign(lookup, {
  Manager: _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager,
  Socket: _socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket,
  io: lookup,
  connect: lookup
});
/**
 * Protocol version.
 *
 * @public
 */


/**
 * Expose constructors for standalone build.
 *
 * @public
 */



/***/ }),

/***/ 8417:
/*!************************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/manager.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": () => (/* binding */ Manager)
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */ 273);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ 2777);
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-parser */ 7199);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on.js */ 7087);
/* harmony import */ var _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/backo2.js */ 9172);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @socket.io/component-emitter */ 1746);






class Manager extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__.Emitter {
  constructor(uri, opts) {
    var _a;

    super();
    this.nsps = {};
    this.subs = [];

    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1000);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__.Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 20000 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;

    const _parser = opts.parser || socket_io_parser__WEBPACK_IMPORTED_MODULE_2__;

    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }

  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }

  reconnectionAttempts(v) {
    if (v === undefined) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }

  reconnectionDelay(v) {
    var _a;

    if (v === undefined) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }

  randomizationFactor(v) {
    var _a;

    if (v === undefined) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }

  reconnectionDelayMax(v) {
    var _a;

    if (v === undefined) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }

  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */


  maybeReconnectOnOpen() {
    // Only try to reconnect if it's the first time we're connecting
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      // keeps reconnection from firing twice for the same reconnection loop
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */


  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new engine_io_client__WEBPACK_IMPORTED_MODULE_0__.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false; // emit `open`

    const openSubDestroy = (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "open", function () {
      self.onopen();
      fn && fn();
    }); // emit `error`

    const errorSub = (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);

      if (fn) {
        fn(err);
      } else {
        // Only do this if there is no fn to handle the error
        self.maybeReconnectOnOpen();
      }
    });

    if (false !== this._timeout) {
      const timeout = this._timeout;

      if (timeout === 0) {
        openSubDestroy(); // prevents a race condition with the 'open' event
      } // set timer


      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close(); // @ts-ignore

        socket.emit("error", new Error("timeout"));
      }, timeout);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }

    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */


  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */


  onopen() {
    // clear old subs
    this.cleanup(); // mark as open

    this._readyState = "open";
    this.emitReserved("open"); // add new subs

    const socket = this.engine;
    this.subs.push((0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "ping", this.onping.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "data", this.ondata.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", this.onerror.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "close", this.onclose.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */


  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */


  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */


  ondecoded(packet) {
    // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
    (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */


  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */


  socket(nsp, opts) {
    let socket = this.nsps[nsp];

    if (!socket) {
      socket = new _socket_js__WEBPACK_IMPORTED_MODULE_1__.Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    }

    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */


  _destroy(socket) {
    const nsps = Object.keys(this.nsps);

    for (const nsp of nsps) {
      const socket = this.nsps[nsp];

      if (socket.active) {
        return;
      }
    }

    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */


  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);

    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */


  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */


  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */


  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */


  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);

    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */


  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;

    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events

        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */


  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }

}

/***/ }),

/***/ 7087:
/*!*******************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

/***/ }),

/***/ 2777:
/*!***********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/socket.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Socket": () => (/* binding */ Socket)
/* harmony export */ });
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-parser */ 7199);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on.js */ 7087);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @socket.io/component-emitter */ 1746);



/**
 * Internal events.
 * These events can't be emitted by the user.
 */

const RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */

class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__.Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    /**
     * Whether the socket is currently connected to the server.
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.connected); // true
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.connected); // false
     * });
     */

    this.connected = false;
    /**
     * Buffer for packets received before the CONNECT packet
     */

    this.receiveBuffer = [];
    /**
     * Buffer for packets that will be sent once the socket is connected
     */

    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;

    if (opts && opts.auth) {
      this.auth = opts.auth;
    }

    if (this.io._autoConnect) this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */


  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */


  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [(0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "open", this.onopen.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "packet", this.onpacket.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "error", this.onerror.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "close", this.onclose.bind(this))];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */


  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */


  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open(); // ensure open

    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */


  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */


  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */


  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }

    args.unshift(ev);
    const packet = {
      type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false; // event ack callback

    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();

      this._registerAckCallback(id, ack);

      packet.id = id;
    }

    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }

    this.flags = {};
    return this;
  }
  /**
   * @private
   */


  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;

    if (timeout === undefined) {
      this.acks[id] = ack;
      return;
    } // @ts-ignore


    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];

      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }

      ack.call(this, new Error("operation has timed out"));
    }, timeout);

    this.acks[id] = (...args) => {
      // @ts-ignore
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */


  packet(packet) {
    packet.nsp = this.nsp;

    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */


  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this.packet({
          type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT,
          data
        });
      });
    } else {
      this.packet({
        type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT,
        data: this.auth
      });
    }
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */


  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */


  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */


  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;

    switch (packet.type) {
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }

        break;

      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT:
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;

      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK:
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_ACK:
        this.onack(packet);
        break;

      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT:
        this.ondisconnect();
        break;

      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message); // @ts-ignore

        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */


  onevent(packet) {
    const args = packet.data || [];

    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }

    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }

  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }

    super.emit.apply(this, args);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */


  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      // prevent double callbacks
      if (sent) return;
      sent = true;
      self.packet({
        type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK,
        id: id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */


  onack(packet) {
    const ack = this.acks[packet.id];

    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  /**
   * Called upon server connect.
   *
   * @private
   */


  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */


  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */


  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */


  destroy() {
    if (this.subs) {
      // clean subscriptions to avoid reconnections
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = undefined;
    }

    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */


  disconnect() {
    if (this.connected) {
      this.packet({
        type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT
      });
    } // remove socket from pool


    this.destroy();

    if (this.connected) {
      // fire events
      this.onclose("io client disconnect");
    }

    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */


  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */


  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */


  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */


  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */


  onAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.push(listener);

    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */


  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.unshift(listener);

    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */


  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }

    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */


  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */


  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.push(listener);

    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */


  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.unshift(listener);

    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */


  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyOutgoingListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }

    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */


  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */


  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }

}

/***/ }),

/***/ 2151:
/*!********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/url.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */ 273);

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */

function url(uri, path = "", loc) {
  let obj = uri; // default to window.location

  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    } // parse


    obj = (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.parse)(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }

  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

  obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href

  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

/***/ }),

/***/ 6695:
/*!***********************************************************!*\
  !*** ./node_modules/socket.io-parser/build/esm/binary.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deconstructPacket": () => (/* binding */ deconstructPacket),
/* harmony export */   "reconstructPacket": () => (/* binding */ reconstructPacket)
/* harmony export */ });
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-binary.js */ 7706);

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */

function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
}

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_0__.isBinary)(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);

    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */


function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments; // no longer useful

  return packet;
}

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;

    if (isIndexValid) {
      return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }

  return data;
}

/***/ }),

/***/ 7199:
/*!**********************************************************!*\
  !*** ./node_modules/socket.io-parser/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Decoder": () => (/* binding */ Decoder),
/* harmony export */   "Encoder": () => (/* binding */ Encoder),
/* harmony export */   "PacketType": () => (/* binding */ PacketType),
/* harmony export */   "protocol": () => (/* binding */ protocol)
/* harmony export */ });
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @socket.io/component-emitter */ 1746);
/* harmony import */ var _binary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary.js */ 6695);
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-binary.js */ 7706);



/**
 * Protocol version.
 *
 * @public
 */

const protocol = 5;
var PacketType;

(function (PacketType) {
  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType[PacketType["EVENT"] = 2] = "EVENT";
  PacketType[PacketType["ACK"] = 3] = "ACK";
  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */


class Encoder {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */


  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__.hasBinary)(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }

    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */


  encodeAsString(obj) {
    // first is type
    let str = "" + obj.type; // attachments if we have them

    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    } // if we have a namespace other than `/`
    // we append it followed by a comma `,`


    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    } // immediately followed by the id


    if (null != obj.id) {
      str += obj.id;
    } // json data


    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }

    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */


  encodeAsBinary(obj) {
    const deconstruction = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__.deconstructPacket)(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list

    return buffers; // write all the buffers
  }

}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */

class Decoder extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */


  add(obj) {
    let packet;

    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }

      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;

      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK; // binary packet's json

        this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        // non-binary full packet
        super.emitReserved("decoded", packet);
      }
    } else if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__.isBinary)(obj) || obj.base64) {
      // raw binary data
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);

        if (packet) {
          // received final buffer
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */


  decodeString(str) {
    let i = 0; // look up type

    const p = {
      type: Number(str.charAt(0))
    };

    if (PacketType[p.type] === undefined) {
      throw new Error("unknown packet type " + p.type);
    } // look up attachments if type binary


    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;

      while (str.charAt(++i) !== "-" && i != str.length) {}

      const buf = str.substring(start, i);

      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }

      p.attachments = Number(buf);
    } // look up namespace (if any)


    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;

      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }

      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    } // look up id


    const next = str.charAt(i + 1);

    if ("" !== next && Number(next) == next) {
      const start = i + 1;

      while (++i) {
        const c = str.charAt(i);

        if (null == c || Number(c) != c) {
          --i;
          break;
        }

        if (i === str.length) break;
      }

      p.id = Number(str.substring(start, i + 1));
    } // look up json data


    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));

      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }

    return p;
  }

  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }

  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";

      case PacketType.DISCONNECT:
        return payload === undefined;

      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";

      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;

      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */


  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }

}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */

class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */


  takeBinaryData(binData) {
    this.buffers.push(binData);

    if (this.buffers.length === this.reconPack.attachments) {
      // done with buffer list
      const packet = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__.reconstructPacket)(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }

    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */


  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }

}

/***/ }),

/***/ 7706:
/*!**************************************************************!*\
  !*** ./node_modules/socket.io-parser/build/esm/is-binary.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasBinary": () => (/* binding */ hasBinary),
/* harmony export */   "isBinary": () => (/* binding */ isBinary)
/* harmony export */ });
const withNativeArrayBuffer = typeof ArrayBuffer === "function";

const isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};

const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */

function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }

  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (isBinary(obj)) {
    return true;
  }

  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/***/ })

}]);
//# sourceMappingURL=src_app_multiplayer-ring_multiplayer-ring_module_ts.js.map