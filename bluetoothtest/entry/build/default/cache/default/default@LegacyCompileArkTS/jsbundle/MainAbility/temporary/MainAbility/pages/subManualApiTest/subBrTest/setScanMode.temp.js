var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subBrTest/setScanMode.ets?entry":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subBrTest/setScanMode.ets?entry ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../../../Utils/ConfigData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts"));
const BluetoothModel_1 = __importDefault(__webpack_require__(/*! ../../../model/BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
var _system_router_1  = globalThis.requireNativeModule('system.router');
const titleComponent_1 = __webpack_require__(/*! ../../../../Component/titleComponent */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/titleComponent.ets");
var _ohos_inputmethod_1  = globalThis.requireNapi('inputmethod') || (isSystemplugin('inputmethod', 'ohos') ? globalThis.ohosplugin.inputmethod : isSystemplugin('inputmethod', 'system') ? globalThis.systemplugin.inputmethod : undefined);
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
const pageTitle_1 = __webpack_require__(/*! ../../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
class setScanMode extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple("???????????????SCAN MODE", this, "message");
        this.duration = '0';
        this.deviceInfo = '';
        this.aboutDeviceList = [];
        this.scanMode = 0;
        this.__currentClick = new ObservedPropertySimple(-1, this, "currentClick");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.duration !== undefined) {
            this.duration = params.duration;
        }
        if (params.deviceInfo !== undefined) {
            this.deviceInfo = params.deviceInfo;
        }
        if (params.aboutDeviceList !== undefined) {
            this.aboutDeviceList = params.aboutDeviceList;
        }
        if (params.scanMode !== undefined) {
            this.scanMode = params.scanMode;
        }
        if (params.currentClick !== undefined) {
            this.currentClick = params.currentClick;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__currentClick.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get currentClick() {
        return this.__currentClick.get();
    }
    set currentClick(newValue) {
        this.__currentClick.set(newValue);
    }
    onPageShow() {
        this.currentClick = _ohos_bluetooth_1.getBluetoothScanMode();
    }
    render() {
        Column.create();
        Column.padding({ left: { "id": 16777381, "type": 10002, params: [] }, right: { "id": 16777381, "type": 10002, params: [] } });
        Column.width("100%");
        Column.height(ConfigData_1.default.WH_100_100);
        Column.backgroundColor({ "id": 16777311, "type": 10001, params: [] });
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new pageTitle_1.PageTitle("2", this, { detail: '??????????????????' }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                detail: '??????????????????'
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        Scroll.create();
        Scroll.height('50%');
        Scroll.scrollable(ScrollDirection.Vertical);
        Scroll.scrollBar(BarState.On);
        Scroll.scrollBarColor(Color.Gray);
        Scroll.scrollBarWidth(30);
        Column.create();
        List.create();
        ListItem.create();
        ListItem.height(80);
        ListItem.borderRadius(10);
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new titleComponent_1.TitleComponent("3", this, {
                title: "SCAN_MODE_SELECT",
                bgColor: { "id": 16777313, "type": 10001, params: [] },
                fontSize: '17vp',
            }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                title: "SCAN_MODE_SELECT",
                bgColor: { "id": 16777313, "type": 10001, params: [] },
                fontSize: '17vp'
            });
            View.create(earlierCreatedChild_3);
        }
        ListItem.pop();
        ListItem.create();
        ListItem.padding({ top: 10 });
        ListItem.height(80);
        ListItem.borderRadius(10);
        ListItem.onClick(() => {
            this.currentClick = 0;
        });
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new titleComponent_1.TitleComponent("4", this, {
                title: "SCAN_MODE_NONE",
                fontSize: '15vp',
                bgColor: this.currentClick === 0 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                title: "SCAN_MODE_NONE",
                fontSize: '15vp',
                bgColor: this.currentClick === 0 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            });
            View.create(earlierCreatedChild_4);
        }
        ListItem.pop();
        ListItem.create();
        ListItem.padding({ top: 10 });
        ListItem.height(80);
        ListItem.borderRadius(10);
        ListItem.onClick(() => {
            this.currentClick = 1;
        });
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new titleComponent_1.TitleComponent("5", this, {
                title: "CONNECTABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 1 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                title: "CONNECTABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 1 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            });
            View.create(earlierCreatedChild_5);
        }
        ListItem.pop();
        ListItem.create();
        ListItem.padding({ top: 10 });
        ListItem.height(80);
        ListItem.borderRadius(10);
        ListItem.onClick(() => {
            this.currentClick = 2;
        });
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new titleComponent_1.TitleComponent("6", this, {
                title: "GENERAL_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 2 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                title: "GENERAL_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 2 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            });
            View.create(earlierCreatedChild_6);
        }
        ListItem.pop();
        ListItem.create();
        ListItem.padding({ top: 10 });
        ListItem.height(80);
        ListItem.borderRadius(10);
        ListItem.onClick(() => {
            this.currentClick = 3;
        });
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new titleComponent_1.TitleComponent("7", this, {
                title: "LIMITED_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 3 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                title: "LIMITED_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 3 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            });
            View.create(earlierCreatedChild_7);
        }
        ListItem.pop();
        ListItem.create();
        ListItem.padding({ top: 10 });
        ListItem.height(80);
        ListItem.borderRadius(10);
        ListItem.onClick(() => {
            this.currentClick = 4;
        });
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new titleComponent_1.TitleComponent("8", this, {
                title: "CONNECTABLE_GENERAL_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 4 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                title: "CONNECTABLE_GENERAL_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 4 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            });
            View.create(earlierCreatedChild_8);
        }
        ListItem.pop();
        ListItem.create();
        ListItem.padding({ top: 10 });
        ListItem.height(80);
        ListItem.borderRadius(10);
        ListItem.onClick(() => {
            this.currentClick = 5;
        });
        let earlierCreatedChild_9 = this.findChildById("9");
        if (earlierCreatedChild_9 == undefined) {
            View.create(new titleComponent_1.TitleComponent("9", this, {
                title: "CONNECTABLE_LIMITED_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 5 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            }));
        }
        else {
            earlierCreatedChild_9.updateWithValueParams({
                title: "CONNECTABLE_LIMITED_DISCOVERABLE",
                fontSize: '15vp',
                bgColor: this.currentClick === 5 ? { "id": 16777307, "type": 10001, params: [] } : { "id": 16777322, "type": 10001, params: [] }
            });
            View.create(earlierCreatedChild_9);
        }
        ListItem.pop();
        List.pop();
        Blank.create();
        Blank.pop();
        Column.pop();
        Scroll.pop();
        Row.create();
        Row.padding({ "id": 16777371, "type": 10002, params: [] });
        Row.width('100%');
        Text.create('duration');
        Text.textAlign(TextAlign.Center);
        Text.fontSize('20fp');
        Text.fontColor({ "id": 16777308, "type": 10001, params: [] });
        Text.fontWeight(FontWeight.Medium);
        Text.pop();
        TextInput.create({ text: this.duration });
        TextInput.placeholderFont({
            size: { "id": 16777399, "type": 10002, params: [] },
            weight: FontWeight.Normal,
            style: FontStyle.Normal
        });
        TextInput.type(InputType.Normal);
        TextInput.enterKeyType(EnterKeyType.Done);
        TextInput.caretColor(Color.Blue);
        TextInput.height({ "id": 16777517, "type": 10002, params: [] });
        TextInput.borderRadius(0);
        TextInput.backgroundColor({ "id": 16777299, "type": 10001, params: [] });
        TextInput.onChange((value) => {
            console.info(ConfigData_1.default.TAG + 'device name changed to: ' + JSON.stringify(value));
            this.duration = value;
        });
        TextInput.onSubmit((enterKey) => {
            _ohos_inputmethod_1.getInputMethodController().stopInput().then((ret) => {
                console.info(`${ConfigData_1.default.TAG}, enterType: ${enterKey}, stopInput: ${ret}`);
            });
        });
        Row.pop();
        Text.create(this.message);
        Text.textAlign(TextAlign.Center);
        Text.fontSize('17fp');
        Text.height(50);
        Text.width("100%");
        Text.fontWeight(FontWeight.Medium);
        Text.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Text.pop();
        Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
        Row.create();
        Row.width({ "id": 16777364, "type": 10002, params: [] });
        Row.margin({ right: { "id": 16777368, "type": 10002, params: [] } });
        let earlierCreatedChild_10 = this.findChildById("10");
        if (earlierCreatedChild_10 == undefined) {
            View.create(new ButtonComponent("10", this, { text: { "id": 16777260, "type": 10003, params: [] }, isOnClick: () => {
                    _system_router_1.back();
                } }));
        }
        else {
            earlierCreatedChild_10.updateWithValueParams({
                text: { "id": 16777260, "type": 10003, params: [] },
                isOnClick: () => {
                    _system_router_1.back();
                }
            });
            View.create(earlierCreatedChild_10);
        }
        Row.pop();
        Row.create();
        Row.width({ "id": 16777364, "type": 10002, params: [] });
        let earlierCreatedChild_11 = this.findChildById("11");
        if (earlierCreatedChild_11 == undefined) {
            View.create(new ButtonComponent("11", this, { text: { "id": 16777263, "type": 10003, params: [] }, isOnClick: () => {
                    if (this.currentClick === -1) {
                        this.message = '???????????????SCAN MODE';
                        return;
                    }
                    this.message = '';
                    let dur = parseInt(this.duration);
                    let parseRet = isNaN(dur);
                    let ret = BluetoothModel_1.default.setBluetoothScanMode(this.currentClick, !parseRet ? dur : 0);
                    AppStorage.SetOrCreate('setScanModeRet', ret);
                    _system_router_1.back();
                } }));
        }
        else {
            earlierCreatedChild_11.updateWithValueParams({
                text: { "id": 16777263, "type": 10003, params: [] },
                isOnClick: () => {
                    if (this.currentClick === -1) {
                        this.message = '???????????????SCAN MODE';
                        return;
                    }
                    this.message = '';
                    let dur = parseInt(this.duration);
                    let parseRet = isNaN(dur);
                    let ret = BluetoothModel_1.default.setBluetoothScanMode(this.currentClick, !parseRet ? dur : 0);
                    AppStorage.SetOrCreate('setScanModeRet', ret);
                    _system_router_1.back();
                }
            });
            View.create(earlierCreatedChild_11);
        }
        Row.pop();
        Flex.pop();
        Column.pop();
    }
}
class ButtonComponent extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__isTouched = new ObservedPropertySimple(false, this, "isTouched");
        this.text = undefined;
        this.isOnClick = () => { };
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.isTouched !== undefined) {
            this.isTouched = params.isTouched;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.isOnClick !== undefined) {
            this.isOnClick = params.isOnClick;
        }
    }
    aboutToBeDeleted() {
        this.__isTouched.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get isTouched() {
        return this.__isTouched.get();
    }
    set isTouched(newValue) {
        this.__isTouched.set(newValue);
    }
    render() {
        Column.create();
        Column.width(ConfigData_1.default.WH_100_100);
        Column.align(Alignment.Center);
        Text.create(this.text);
        Text.fontSize({ "id": 16777398, "type": 10002, params: [] });
        Text.fontWeight(FontWeight.Medium);
        Text.lineHeight({ "id": 16777496, "type": 10002, params: [] });
        Text.fontColor({ "id": 16777307, "type": 10001, params: [] });
        Text.textAlign(TextAlign.Center);
        Text.width({ "id": 16777364, "type": 10002, params: [] });
        Text.height({ "id": 16777517, "type": 10002, params: [] });
        Text.borderRadius({ "id": 16777436, "type": 10002, params: [] });
        Text.backgroundColor(!this.isTouched ? { "id": 16777305, "type": 10001, params: [] } : { "id": 125829123, "type": 10001, params: [] });
        Text.onTouch((event) => {
            if (event.type === TouchType.Down) {
                this.isTouched = true;
            }
            if (event.type === TouchType.Up) {
                this.isTouched = false;
            }
        });
        Text.onClick(() => {
            this.isOnClick();
        });
        Text.pop();
        Column.pop();
    }
}
loadDocument(new setScanMode("1", undefined, {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		var commonCachedModule = globalThis["__common_module_cache___78b3af9a3d4590e7047044e12e71f107"] ? globalThis["__common_module_cache___78b3af9a3d4590e7047044e12e71f107"][moduleId]: null;
/******/ 		if (commonCachedModule) { return commonCachedModule.exports; }
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		function isCommonModue(moduleId) {
/******/ 		                if (globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"]) {
/******/ 		                  const length = globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"].length;
/******/ 		                  switch (length) {
/******/ 		                    case 1:
/******/ 		                      return globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"][0][1][moduleId];
/******/ 		                    case 2:
/******/ 		                      return globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"][0][1][moduleId] ||
/******/ 		                      globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"][1][1][moduleId];
/******/ 		                  }
/******/ 		                }
/******/ 		                return undefined;
/******/ 		              }
/******/ 		if (globalThis["__common_module_cache___78b3af9a3d4590e7047044e12e71f107"] && String(moduleId).indexOf("?name=") < 0 && isCommonModue(moduleId)) {
/******/ 		  globalThis["__common_module_cache___78b3af9a3d4590e7047044e12e71f107"][moduleId] = module;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./pages/subManualApiTest/subBrTest/setScanMode": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"] = globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subBrTest/setScanMode.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=setScanMode.js.map