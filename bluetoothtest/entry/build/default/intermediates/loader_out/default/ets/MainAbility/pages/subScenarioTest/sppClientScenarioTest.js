var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/sppClientScenarioTest.ets?entry":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/sppClientScenarioTest.ets?entry ***!
  \*********************************************************************************************************************************************************************************************************/
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
exports.strToArrayBuffer = exports.sppClientClose = exports.acceptClientSocket = void 0;
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
 * SppClient Scenario Test Page Of Bluetooth test
 */
var _system_router_1  = globalThis.requireNativeModule('system.router');
const pageTitle_1 = __webpack_require__(/*! ../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
const testImageDisplay_1 = __webpack_require__(/*! ../../../Component/testImageDisplay */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets");
__webpack_require__(/*! ../../model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
const scenarioContentTable_1 = __webpack_require__(/*! ../../../Component/scenarioContentTable */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/scenarioContentTable.ets");
const scenarioTestDataModel_1 = __webpack_require__(/*! ../../model/scenarioTestDataModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/scenarioTestDataModel.ets");
__webpack_require__(/*! ../../model/bleInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets");
const BrInterface = __importStar(__webpack_require__(/*! ../../model/brInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets"));
const SPPClientInterface = __importStar(__webpack_require__(/*! ../../model/sppClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppClientInterface.ets"));
class SppClientScenarioTest extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('SppClientScenarioTest', this, "message");
        this.__changeIndex = new ObservedPropertySimple(-1, this, "changeIndex");
        this.__writeData = new ObservedPropertySimple('11', this, "writeData");
        this.uuid = "00001101-0000-1000-8000-00805f9b34fb";
        this.__deviceId = new ObservedPropertySimple("08:FB:EA:19:48:0F", this, "deviceId");
        this.testItem = _system_router_1.getParams().testId;
        this.__sppClientScenarioMessage = AppStorage.GetOrCreate().setAndLink("sppClientScenarioMessage", "", this);
        this.__dataReadMessage = AppStorage.GetOrCreate().setAndLink("dataReadMessage", "", this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.changeIndex !== undefined) {
            this.changeIndex = params.changeIndex;
        }
        if (params.writeData !== undefined) {
            this.writeData = params.writeData;
        }
        if (params.uuid !== undefined) {
            this.uuid = params.uuid;
        }
        if (params.deviceId !== undefined) {
            this.deviceId = params.deviceId;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        this.__writeData.aboutToBeDeleted();
        this.__deviceId.aboutToBeDeleted();
        this.__sppClientScenarioMessage.aboutToBeDeleted();
        this.__dataReadMessage.aboutToBeDeleted();
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
    get writeData() {
        return this.__writeData.get();
    }
    set writeData(newValue) {
        this.__writeData.set(newValue);
    }
    get deviceId() {
        return this.__deviceId.get();
    }
    set deviceId(newValue) {
        this.__deviceId.set(newValue);
    }
    get sppClientScenarioMessage() {
        return this.__sppClientScenarioMessage.get();
    }
    set sppClientScenarioMessage(newValue) {
        this.__sppClientScenarioMessage.set(newValue);
    }
    get dataReadMessage() {
        return this.__dataReadMessage.get();
    }
    set dataReadMessage(newValue) {
        this.__dataReadMessage.set(newValue);
    }
    aboutToAppear() {
        AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
        AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
        AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
        AppStorage.SetOrCreate('txtScanOptions_interval', "0");
        AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
        AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
        AppStorage.SetOrCreate('cbxBleScanFilter', true);
        AppStorage.SetOrCreate('cbxBleScanOptions', true);
        AppStorage.SetOrCreate('inputDeviceId', this.deviceId);
        AppStorage.SetOrCreate('inputUuid', this.uuid);
        AppStorage.SetOrCreate('writeData', this.writeData);
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
                scenarioItems: scenarioTestDataModel_1.initSppClientScenarioData(),
                //            testMessage: this.testMessage,  优化时修改
                changeIndex: this.changeIndex
            }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                testItem: this.testItem,
                scenarioItems: scenarioTestDataModel_1.initSppClientScenarioData(),
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
        Text.create(this.sppClientScenarioMessage);
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
            //  AlertDialog.show({ message: '开始SppClient场景测试' })
            let self = this;
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            let sppClientScenarioMessage = "";
            // 注册状态变化
            sppClientScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOnStateChange success");
            self.changeIndex = arr[0];
            // 开蓝牙
            sppClientScenarioMessage += BrInterface.testEnableBluetooth() + "\n";
            console.log("testEnableBluetooth success");
            self.changeIndex = arr[1];
            AppStorage.SetOrCreate("sppClientScenarioMessage", sppClientScenarioMessage);
            AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
            AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
            AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('txtScanOptions_interval', "0");
            AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
            AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
            AppStorage.SetOrCreate('cbxBleScanFilter', true);
            AppStorage.SetOrCreate('cbxBleScanOptions', true);
            AppStorage.SetOrCreate('inputDeviceId', "08:FB:EA:19:48:0F");
            AppStorage.SetOrCreate('inputUuid', "00001101-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('writeData', '11');
            sleep(3).then(() => {
                // 获取状态
                sppClientScenarioMessage += BrInterface.testGetState() + "\n";
                console.log("testGetState success");
                self.changeIndex = arr[2];
                // 设置扫描模式
                sppClientScenarioMessage += BrInterface.testSetBluetoothScanMode(4, 0) + "\n";
                console.log("testSetBluetoothScanMode success");
                self.changeIndex = arr[3];
                // 获取扫描模式
                sppClientScenarioMessage += BrInterface.testGetBluetoothScanMode() + "\n";
                console.log("testGetBluetoothScanMode success");
                self.changeIndex = arr[4];
                // Spp客户端连接
                sppClientScenarioMessage += SPPClientInterface.testSppClientConnectSafe() + "\n";
                console.log("testSppClientConnectSafe success");
                self.changeIndex = arr[5];
                AppStorage.SetOrCreate("sppClientScenarioMessage", sppClientScenarioMessage);
                sleep(10).then(() => {
                    //获取当前连接状态
                    sppClientScenarioMessage += BrInterface.testGetBtConnectionState() + "\n";
                    console.log("testGetBtConnectionState success");
                    self.changeIndex = arr[6];
                    sleep(1).then(() => {
                        // SPP客户端写入
                        let clientNumber = -1;
                        sppClientScenarioMessage += SPPClientInterface.testSppClientWrite() + "\n";
                        console.log("testSppClientWrite success");
                        self.changeIndex = arr[7];
                        sleep(1).then(() => {
                            //spp客户端读取打开
                            sppClientScenarioMessage += SPPClientInterface.testSppClientReadOn() + "\n";
                            console.log("testSppClientReadOn success");
                            self.changeIndex = arr[8];
                            sppClientScenarioMessage += this.dataReadMessage + "\n";
                            AppStorage.SetOrCreate("sppClientScenarioMessage", sppClientScenarioMessage);
                        });
                    });
                });
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
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            let sppClientScenarioMessage = "";
            // spp客户端读取关闭
            sppClientScenarioMessage += SPPClientInterface.testSppClientReadOff() + "\n";
            console.log("testSppClientReadOff success");
            self.changeIndex = arr[9];
            // spp客户端关闭
            sppClientScenarioMessage += SPPClientInterface.testSppClientClose() + "\n";
            console.log("testSppClientClose success");
            self.changeIndex = arr[10];
            //关闭注册状态变化
            sppClientScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOffStateChange success");
            //关蓝牙
            sppClientScenarioMessage += BrInterface.testDisableBluetooth() + "\n";
            console.log("testDisableBluetooth success");
            self.changeIndex = arr[11];
            AppStorage.SetOrCreate("sppClientScenarioMessage", sppClientScenarioMessage);
        });
        Row.create();
        Row.alignItems(VerticalAlign.Start);
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
            let sppClientScenarioMessage = "";
            AppStorage.SetOrCreate("sppClientScenarioMessage", sppClientScenarioMessage);
        });
        Row.create();
        Row.alignItems(VerticalAlign.Start);
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
    dataRead(dataBuffer) {
        const data = new Uint8Array(dataBuffer);
        console.log('spp bluetooth read is: ' + data);
        if (data != null) {
            this.dataReadMessage = "读取成功" + JSON.stringify(data);
        }
        else {
            this.dataReadMessage = "读取失败";
        }
    }
}
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time * 1000);
    });
}
//async function sleep(ms: number) {
//  return new Promise((r) => {
//    let timer = setInterval(() => {
//      console.log("timeout");
//      this.count += 1;
//      this.message = this.count.toString();
//      if (this.count == 50) {
//        clearInterval(timer);
//      }
//    }, 1000)
//  })
//}
let clientNumber = -1;
function acceptClientSocket(number) {
    console.info('spp clientSocket socketID: ' + number);
    // 获取的clientNumber用作服务端后续读/写操作socket的id。
    clientNumber = number;
}
exports.acceptClientSocket = acceptClientSocket;
function sppClientClose() {
    console.info("bluetoothModel:" + 'sppCloseClientSocket clientNumber: ' + JSON.stringify(clientNumber));
    bluetooth.sppCloseClientSocket(clientNumber);
    let message = '关闭成功 clientNumber' + clientNumber;
    prompt.showToast({ message: message });
    return message;
}
exports.sppClientClose = sppClientClose;
function strToArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}
exports.strToArrayBuffer = strToArrayBuffer;
loadDocument(new SppClientScenarioTest("1", undefined, {}));


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
/******/ 			"./pages/subScenarioTest/sppClientScenarioTest": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/sppClientScenarioTest.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=sppClientScenarioTest.js.map