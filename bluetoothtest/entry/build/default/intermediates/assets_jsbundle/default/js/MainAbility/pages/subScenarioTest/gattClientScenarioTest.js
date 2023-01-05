var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/gattClientScenarioTest.ets?entry":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/gattClientScenarioTest.ets?entry ***!
  \**********************************************************************************************************************************************************************************************************/
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
exports.string2ArrayBuffer = void 0;
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
 * GattClient Scenario Test Page Of Bluetooth test
 */
var _system_router_1  = globalThis.requireNativeModule('system.router');
const pageTitle_1 = __webpack_require__(/*! ../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
const testImageDisplay_1 = __webpack_require__(/*! ../../../Component/testImageDisplay */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets");
__webpack_require__(/*! ../../model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
const scenarioContentTable_1 = __webpack_require__(/*! ../../../Component/scenarioContentTable */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/scenarioContentTable.ets");
const scenarioTestDataModel_1 = __webpack_require__(/*! ../../model/scenarioTestDataModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/scenarioTestDataModel.ets");
const GattClientInterface = __importStar(__webpack_require__(/*! ../../model/gattClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattClientInterface.ets"));
__webpack_require__(/*! ../../model/bleInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets");
const BrInterface = __importStar(__webpack_require__(/*! ../../model/brInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets"));
class GattClientScenarioTest extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('GattClientScenarioTest', this, "message");
        this.testItem = _system_router_1.getParams().testId;
        this.__changeIndex = new ObservedPropertySimple(-1, this, "changeIndex");
        this.__gattClientScenarioMessage = AppStorage.GetOrCreate().setAndLink("gattClientScenarioMessage", "", this);
        this.__getServices = AppStorage.GetOrCreate().setAndLink("getServices", "", this);
        this.__deviceName = AppStorage.GetOrCreate().setAndLink("deviceName", "", this);
        this.__Rssi = AppStorage.GetOrCreate().setAndLink("Rssi", "", this);
        this.__read_CharacteristicValue = AppStorage.GetOrCreate().setAndLink("read_CharacteristicValue", "", this);
        this.peripheralDeviceId = '08:FB:EA:19:48:0F';
        this.__serviceUUID = new ObservedPropertySimple('00001801-0000-1000-8000-00805f9b34fb', this, "serviceUUID");
        this.__characteristicUUID = new ObservedPropertySimple('00002b29-0000-1000-8000-00805f9b34fb', this, "characteristicUUID");
        this.__characteristicValue = new ObservedPropertySimple('CccValue', this, "characteristicValue");
        this.__descriptorUUID = new ObservedPropertySimple('00002902-0000-1000-8000-00805f9b34fb', this, "descriptorUUID");
        this.__descriptorValue = new ObservedPropertySimple('DesValue', this, "descriptorValue");
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
        if (params.peripheralDeviceId !== undefined) {
            this.peripheralDeviceId = params.peripheralDeviceId;
        }
        if (params.serviceUUID !== undefined) {
            this.serviceUUID = params.serviceUUID;
        }
        if (params.characteristicUUID !== undefined) {
            this.characteristicUUID = params.characteristicUUID;
        }
        if (params.characteristicValue !== undefined) {
            this.characteristicValue = params.characteristicValue;
        }
        if (params.descriptorUUID !== undefined) {
            this.descriptorUUID = params.descriptorUUID;
        }
        if (params.descriptorValue !== undefined) {
            this.descriptorValue = params.descriptorValue;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        this.__gattClientScenarioMessage.aboutToBeDeleted();
        this.__getServices.aboutToBeDeleted();
        this.__deviceName.aboutToBeDeleted();
        this.__Rssi.aboutToBeDeleted();
        this.__read_CharacteristicValue.aboutToBeDeleted();
        this.__serviceUUID.aboutToBeDeleted();
        this.__characteristicUUID.aboutToBeDeleted();
        this.__characteristicValue.aboutToBeDeleted();
        this.__descriptorUUID.aboutToBeDeleted();
        this.__descriptorValue.aboutToBeDeleted();
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
    get gattClientScenarioMessage() {
        return this.__gattClientScenarioMessage.get();
    }
    set gattClientScenarioMessage(newValue) {
        this.__gattClientScenarioMessage.set(newValue);
    }
    get getServices() {
        return this.__getServices.get();
    }
    set getServices(newValue) {
        this.__getServices.set(newValue);
    }
    get deviceName() {
        return this.__deviceName.get();
    }
    set deviceName(newValue) {
        this.__deviceName.set(newValue);
    }
    get Rssi() {
        return this.__Rssi.get();
    }
    set Rssi(newValue) {
        this.__Rssi.set(newValue);
    }
    get read_CharacteristicValue() {
        return this.__read_CharacteristicValue.get();
    }
    set read_CharacteristicValue(newValue) {
        this.__read_CharacteristicValue.set(newValue);
    }
    get serviceUUID() {
        return this.__serviceUUID.get();
    }
    set serviceUUID(newValue) {
        this.__serviceUUID.set(newValue);
    }
    get characteristicUUID() {
        return this.__characteristicUUID.get();
    }
    set characteristicUUID(newValue) {
        this.__characteristicUUID.set(newValue);
    }
    get characteristicValue() {
        return this.__characteristicValue.get();
    }
    set characteristicValue(newValue) {
        this.__characteristicValue.set(newValue);
    }
    get descriptorUUID() {
        return this.__descriptorUUID.get();
    }
    set descriptorUUID(newValue) {
        this.__descriptorUUID.set(newValue);
    }
    get descriptorValue() {
        return this.__descriptorValue.get();
    }
    set descriptorValue(newValue) {
        this.__descriptorValue.set(newValue);
    }
    aboutToAppear() {
        AppStorage.SetOrCreate('peripheralDeviceId', this.peripheralDeviceId);
        AppStorage.SetOrCreate('serviceUUID', this.serviceUUID);
        AppStorage.SetOrCreate('characteristicUUID', this.characteristicUUID);
        AppStorage.SetOrCreate('characteristicValue', this.characteristicValue);
        AppStorage.SetOrCreate('descriptorUUID', this.descriptorUUID);
        AppStorage.SetOrCreate('descriptorValue', this.descriptorValue);
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
                scenarioItems: scenarioTestDataModel_1.initGattClientScenarioData(),
                //            testMessage: this.testMessage,  优化时修改
                changeIndex: this.changeIndex
            }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                testItem: this.testItem,
                scenarioItems: scenarioTestDataModel_1.initGattClientScenarioData(),
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
        Text.create(this.gattClientScenarioMessage);
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
        Button.createWithChild({ type: ButtonType.Normal, stateEffect: true });
        Button.borderRadius(8);
        Button.backgroundColor({ "id": 16777297, "type": 10001, params: [] });
        Button.width(100);
        Button.height(66);
        Button.margin({ top: "15vp", left: "20vp" });
        Button.align(Alignment.Start);
        Button.onClick((event) => {
            let self = this;
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            //            AlertDialog.show({ message: '开始GattClient场景测试' })
            let gattClientScenarioMessage = "";
            // 开启注册状态变化
            gattClientScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOnStateChange success");
            self.changeIndex = arr[0];
            // 开蓝牙
            gattClientScenarioMessage += BrInterface.testEnableBluetooth() + "\n";
            console.log("testEnableBluetooth success");
            self.changeIndex = arr[1];
            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage);
            AppStorage.SetOrCreate('peripheralDeviceId', this.peripheralDeviceId);
            AppStorage.SetOrCreate('serviceUUID', this.serviceUUID);
            AppStorage.SetOrCreate('characteristicUUID', this.characteristicUUID);
            AppStorage.SetOrCreate('characteristicValue', this.characteristicValue);
            AppStorage.SetOrCreate('descriptorUUID', this.descriptorUUID);
            AppStorage.SetOrCreate('descriptorValue', this.descriptorValue);
            sleep(2).then(() => {
                // 获取状态
                gattClientScenarioMessage += BrInterface.testGetState() + "\n";
                console.log("testGetState success");
                self.changeIndex = arr[2];
                //              // 开启注册BLE查找状态变化
                //              gattClientScenarioMessage += BLEInterface.testOnBLEDeviceFind() + "\n"
                //              console.log("testOnBLEDeviceFind success")
                //              // 开始BLE扫描
                //              gattClientScenarioMessage += BLEInterface.testStartBLEScan() + "\n"
                //              console.log("testStartBLEScan success")
                // 创建Gatt客户端
                gattClientScenarioMessage += GattClientInterface.testCreateGattClient() + "\n";
                console.log("testCreateGattClient success");
                self.changeIndex = arr[3];
                //开启Ble连接状态变化
                gattClientScenarioMessage += GattClientInterface.testOnBLEConnectionStateChange() + "\n";
                console.log("testOnBLEConnectionStateChange success");
                self.changeIndex = arr[4];
                // 连接
                gattClientScenarioMessage += GattClientInterface.testConnect() + "\n";
                console.log("testConnect success");
                self.changeIndex = arr[5];
                AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage);
                sleep(5).then(() => {
                    // 设置通知特性更改
                    gattClientScenarioMessage += GattClientInterface.testSetNotifyCharacteristicChanged() + "\n";
                    console.log("testSetNotifyCharacteristicChanged success");
                    self.changeIndex = arr[6];
                    sleep(1).then(() => {
                        // 开启BLE特征值变化
                        gattClientScenarioMessage += GattClientInterface.testOnBLECharacteristicChange() + "\n";
                        console.log("testOnBLECharacteristicChange success");
                        self.changeIndex = arr[7];
                        sleep(1).then(() => {
                            // 获取服务callback
                            gattClientScenarioMessage += GattClientInterface.testGetServicesCallback() + "\n";
                            console.log("testGetServicesCallback success");
                            self.changeIndex = arr[8];
                            gattClientScenarioMessage += this.getServices + "\n";
                            sleep(1).then(() => {
                                // 读取特征值callback
                                gattClientScenarioMessage += GattClientInterface.testReadCharacteristicValueCallback() + "\n";
                                console.log("testReadCharacteristicValueCallback success");
                                self.changeIndex = arr[9];
                                gattClientScenarioMessage += this.read_CharacteristicValue + "\n";
                                sleep(1).then(() => {
                                    // 读取描述符值callback
                                    gattClientScenarioMessage += GattClientInterface.testReadDescriptorValueCallback() + "\n";
                                    console.log("testReadDescriptorValueCallback success");
                                    self.changeIndex = arr[10];
                                    sleep(1).then(() => {
                                        // 获取设备名称callback
                                        gattClientScenarioMessage += GattClientInterface.testGetDeviceNameCallback() + "\n";
                                        console.log("testGetDeviceNameCallback success");
                                        self.changeIndex = arr[11];
                                        gattClientScenarioMessage += this.deviceName + "\n";
                                        sleep(1).then(() => {
                                            // 获取Rssi值callback
                                            gattClientScenarioMessage += GattClientInterface.testGetRssiValueCallback() + "\n";
                                            console.log("testGetRssiValueCallback success");
                                            self.changeIndex = arr[12];
                                            gattClientScenarioMessage += this.Rssi + "\n";
                                            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage);
                                        });
                                    });
                                });
                            });
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
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            let gattClientScenarioMessage = "";
            // 关闭BLE特征值变化
            gattClientScenarioMessage += GattClientInterface.testOnBLECharacteristicChange() + "\n";
            console.log("testOffBLECharacteristicChange success");
            // 取消连接
            gattClientScenarioMessage += GattClientInterface.testDisconnect() + "\n";
            console.log("testDisconnect success");
            self.changeIndex = arr[13];
            //关闭Ble连接状态变化
            gattClientScenarioMessage += GattClientInterface.testOnBLEConnectionStateChange() + "\n";
            console.log("testOffBLEConnectionStateChange success");
            //关闭客户端
            gattClientScenarioMessage += GattClientInterface.testGattClientClose() + "\n";
            console.log("testGattClientClose success");
            self.changeIndex = arr[14];
            //            // 停止BLE扫描
            //            gattClientScenarioMessage += BLEInterface.testStopBLEScan() + "\n"
            //            console.log("testStopBLEScan success")
            //            // 关闭注册BLE查找状态变化
            //            gattClientScenarioMessage += BLEInterface.testOnBLEDeviceFind() + "\n"
            //            console.log("testOffBLEDeviceFind success")
            // 关闭注册状态变化
            gattClientScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOffStateChange success");
            //关蓝牙
            gattClientScenarioMessage += BrInterface.testDisableBluetooth() + "\n";
            console.log("testDisableBluetooth success");
            self.changeIndex = arr[15];
            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage);
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
            let gattClientScenarioMessage = "";
            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage);
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
}
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time * 1000);
    });
}
function string2ArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}
exports.string2ArrayBuffer = string2ArrayBuffer;
loadDocument(new GattClientScenarioTest("1", undefined, {}));


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
/******/ 			"./pages/subScenarioTest/gattClientScenarioTest": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/gattClientScenarioTest.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=gattClientScenarioTest.js.map