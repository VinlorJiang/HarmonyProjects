var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/brFoundScenarioTest.ets?entry":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/brFoundScenarioTest.ets?entry ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
// @ts-nocheck
/**
 * Classic Bluetooth Found Scenario Test Page Of Bluetooth test
 */
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
var _system_router_1  = globalThis.requireNativeModule('system.router');
const pageTitle_1 = __webpack_require__(/*! ../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
const testImageDisplay_1 = __webpack_require__(/*! ../../../Component/testImageDisplay */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets");
__webpack_require__(/*! ../../model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
const scenarioContentTable_1 = __webpack_require__(/*! ../../../Component/scenarioContentTable */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/scenarioContentTable.ets");
const scenarioTestDataModel_1 = __webpack_require__(/*! ../../model/scenarioTestDataModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/scenarioTestDataModel.ets");
const BrInterface = __importStar(__webpack_require__(/*! ../../model/brInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets"));
const BluetoothModel_1 = __importDefault(__webpack_require__(/*! ../../model/BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
__webpack_require__(/*! ../../model/BluetoothDevice */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothDevice.ts");
class BrFoundScenarioTest extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('BrFoundScenarioTest', this, "message");
        this.testItem = _system_router_1.getParams().testId;
        this.__changeIndex = new ObservedPropertySimple(-1, this, "changeIndex");
        this.__brFoundScenarioMessage = AppStorage.GetOrCreate().setAndLink("brFoundScenarioMessage", "", this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.changeIndex !== undefined) {
            this.changeIndex = params.changeIndex;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        this.__brFoundScenarioMessage.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get changeIndex() {
        return this.__changeIndex.get();
    }
    set changeIndex(newValue) {
        this.__changeIndex.set(newValue);
    }
    get brFoundScenarioMessage() {
        return this.__brFoundScenarioMessage.get();
    }
    set brFoundScenarioMessage(newValue) {
        this.__brFoundScenarioMessage.set(newValue);
    }
    aboutToAppear() {
        //    this.subscribeBluetoothDeviceFind()
    }
    render() {
        Column.create();
        Stack.create({ alignContent: Alignment.TopStart });
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new testImageDisplay_1.TestImageDisplay("2", this, { testItem: this.testItem }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                testItem: this.testItem
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new pageTitle_1.PageTitle("3", this, { testItem: this.testItem }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                testItem: this.testItem
            });
            if (!earlierCreatedChild_3.needsUpdate()) {
                earlierCreatedChild_3.markStatic();
            }
            View.create(earlierCreatedChild_3);
        }
        Stack.pop();
        Stack.create();
        Stack.height("1vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Column.create();
        Column.height(500);
        Column.width("100%");
        Column.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        Scroll.create();
        Scroll.scrollBarWidth(10);
        Scroll.scrollBar(BarState.Auto);
        Column.create();
        Column.width("100%");
        Column.height(280);
        Text.create("场景流程验证:");
        Text.fontSize("17vp");
        Text.margin({ top: "10vp", bottom: "10vp", left: "20vp" });
        Text.textAlign(TextAlign.Start);
        Text.width("100%");
        Text.pop();
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new scenarioContentTable_1.ScenarioContentTable("4", this, {
                testItem: this.testItem,
                scenarioItems: scenarioTestDataModel_1.initBRFoundScenarioData(),
                //            testMessage: this.testMessage,  优化时修改
                changeIndex: this.changeIndex
            }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                testItem: this.testItem,
                scenarioItems: scenarioTestDataModel_1.initBRFoundScenarioData(),
                //            testMessage: this.testMessage,  优化时修改
                changeIndex: this.changeIndex
            });
            View.create(earlierCreatedChild_4);
        }
        Column.pop();
        Scroll.pop();
        Stack.create();
        Stack.height("1vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Scroll.create();
        Scroll.scrollBarWidth(10);
        Scroll.scrollBar(BarState.On);
        Column.create();
        Column.width("100%");
        Column.height(260);
        Text.create("流程日志:");
        Text.fontSize("17vp");
        Text.margin({ top: "8vp", bottom: "8vp", left: "20vp" });
        Text.textAlign(TextAlign.Start);
        Text.width("100%");
        Text.pop();
        List.create();
        List.height("80%");
        List.width("90%");
        List.backgroundColor({ "id": 125829123, "type": 10001, params: [] });
        ListItem.create();
        Text.create(this.brFoundScenarioMessage);
        Text.fontSize("17vp");
        Text.margin({ top: "5vp", left: "30vp", right: "10vp" });
        Text.textAlign(TextAlign.Start);
        Text.width("90%");
        Text.pop();
        ListItem.pop();
        List.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
        Stack.create();
        Stack.height("1vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Column.create();
        Column.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        Column.width("100%");
        Column.height("100%");
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween });
        Flex.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        Flex.width("100%");
        Button.createWithChild({ type: ButtonType.Normal, stateEffect: true });
        Button.borderRadius(8);
        Button.backgroundColor({ "id": 16777297, "type": 10001, params: [] });
        Button.width(100);
        Button.height(66);
        Button.margin({ top: "15vp", left: "20vp" });
        Button.align(Alignment.Start);
        Button.onClick((event) => {
            //          AlertDialog.show({ message: '开始Br蓝牙发现场景测试' })
            let self = this;
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            //            async function main() {
            //              for (let i = 0; i < arr.length; i++) {
            //                await sleep(1)
            //                self.changeIndex=arr[i]
            //              }
            //            }
            //            main()
            let brFoundScenarioMessage = "";
            // 开启注册状态变化
            brFoundScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOnStateChange success");
            self.changeIndex = arr[0];
            // 开蓝牙
            brFoundScenarioMessage += BrInterface.testEnableBluetooth() + "\n";
            console.log("testEnableBluetooth success");
            self.changeIndex = arr[1];
            AppStorage.SetOrCreate("brFoundScenarioMessage", brFoundScenarioMessage);
            sleep(2).then(() => {
                // 获取状态
                brFoundScenarioMessage += BrInterface.testGetState() + "\n";
                console.log("testGetState success");
                self.changeIndex = arr[2];
                // 设置本地名称
                BrInterface.testSetLocalName("dayu2") + "\n";
                console.log("testSetLocalName success");
                self.changeIndex = arr[3];
                // 获取本地名称
                brFoundScenarioMessage += BrInterface.testGetLocalName() + "\n";
                console.log("testGetLocalName success");
                self.changeIndex = arr[4];
                // 设置扫描模式
                BrInterface.testSetBluetoothScanMode(4, 0);
                console.log("testSetBluetoothScanMode success");
                self.changeIndex = arr[5];
                // 获取扫描模式
                brFoundScenarioMessage += BrInterface.testGetBluetoothScanMode() + "\n";
                console.log("testGetBluetoothScanMode success");
                self.changeIndex = arr[6];
                // 蓝牙发现监听
                brFoundScenarioMessage += this.subscribeBluetoothDeviceFind() + "\n";
                console.log("subscribeBluetoothDeviceFind success");
                // 开始蓝牙发现
                brFoundScenarioMessage += "startBluetoothDiscovery 执行：" + BluetoothModel_1.default.startBluetoothDiscovery() + "\n";
                console.log("startBluetoothDiscovery success");
                self.changeIndex = arr[7];
                let scribeMessage = AppStorage.Get("scribeMessage");
                brFoundScenarioMessage += scribeMessage;
                AppStorage.SetOrCreate("brFoundScenarioMessage", brFoundScenarioMessage);
            });
        });
        Text.create('场景测试开始');
        Text.fontSize("24vp");
        Text.fontColor(0xffffff);
        Text.margin({ left: 5, right: 5 });
        Text.pop();
        Button.pop();
        Button.createWithChild({ type: ButtonType.Normal, stateEffect: true });
        Button.borderRadius(8);
        Button.backgroundColor({ "id": 16777297, "type": 10001, params: [] });
        Button.width(100);
        Button.height(66);
        Button.margin({ top: "15vp", left: "10vp", right: "10vp" });
        Button.align(Alignment.Start);
        Button.onClick((event) => {
            let self = this;
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let brFoundScenarioMessage = "";
            // 停止蓝牙发现
            brFoundScenarioMessage += BrInterface.testStopBluetoothDiscovery() + "\n";
            console.log("testStopBluetoothDiscovery success");
            self.changeIndex = arr[8];
            //关闭注册状态变化
            brFoundScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOffStateChange success");
            //关蓝牙
            brFoundScenarioMessage += BrInterface.testDisableBluetooth() + "\n";
            console.log("testDisableBluetooth success");
            self.changeIndex = arr[9];
            AppStorage.SetOrCreate("brFoundScenarioMessage", brFoundScenarioMessage);
        });
        Row.create();
        Row.alignItems(VerticalAlign.Center);
        Text.create('场景测试结束');
        Text.fontSize("24vp");
        Text.fontColor(0xffffff);
        Text.margin({ left: 5, right: 5 });
        Text.pop();
        Row.pop();
        Button.pop();
        Button.createWithChild({ type: ButtonType.Normal, stateEffect: true });
        Button.borderRadius(8);
        Button.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Button.width(80);
        Button.height(66);
        Button.margin({ top: "15vp", right: "20vp" });
        Button.align(Alignment.Start);
        Button.onClick((event) => {
            let brFoundScenarioMessage = "";
            AppStorage.SetOrCreate("brFoundScenarioMessage", brFoundScenarioMessage);
        });
        Row.create();
        Row.alignItems(VerticalAlign.Center);
        Text.create('清空日志');
        Text.fontSize("24vp");
        Text.fontColor(0xffffff);
        Text.margin({ left: 5, right: 5 });
        Text.pop();
        Row.pop();
        Button.pop();
        Flex.pop();
        Column.pop();
        Column.pop();
    }
    subscribeBluetoothDeviceFind() {
        let brFoundDevices = [];
        let message = "subscribeBluetoothDeviceFind test";
        console.info("subscribeBluetoothDeviceFind");
        BluetoothModel_1.default.subscribeBluetoothDeviceFind((deviceIds) => {
            console.log('available bluetooth devices changed.');
            deviceIds === null || deviceIds === void 0 ? void 0 : deviceIds.forEach(deviceId => {
                let device = brFoundDevices.find((availableDevice) => {
                    return availableDevice.deviceId === deviceId;
                });
                //      console.log('available bluetooth find [' + deviceId + '] ' );
                //        console.log('available bluetooth find [' + deviceId + '] = ' + JSON.stringify(device));
                console.log('available bluetooth find [' + deviceId + '] ');
                let message = ('available bluetooth find [' + deviceId + ']  ');
                _system_prompt_1.showToast({ message: message });
                AppStorage.SetOrCreate('bluetoothAvailableDevices', deviceIds);
            });
        });
        _system_prompt_1.showToast({ message: message });
        return message;
    }
}
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time * 1000);
    });
}
loadDocument(new BrFoundScenarioTest("1", undefined, {}));


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
/******/ 			"./pages/subScenarioTest/brFoundScenarioTest": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/brFoundScenarioTest.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=brFoundScenarioTest.js.map