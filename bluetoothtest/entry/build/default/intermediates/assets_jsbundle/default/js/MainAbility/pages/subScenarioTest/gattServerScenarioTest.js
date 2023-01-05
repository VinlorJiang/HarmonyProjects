var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/gattServerScenarioTest.ets?entry":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/gattServerScenarioTest.ets?entry ***!
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
 * GattServer Scenario Test Page Of Bluetooth test
 */
var _system_router_1  = globalThis.requireNativeModule('system.router');
const pageTitle_1 = __webpack_require__(/*! ../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
const testImageDisplay_1 = __webpack_require__(/*! ../../../Component/testImageDisplay */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets");
__webpack_require__(/*! ../../model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
const scenarioContentTable_1 = __webpack_require__(/*! ../../../Component/scenarioContentTable */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/scenarioContentTable.ets");
const scenarioTestDataModel_1 = __webpack_require__(/*! ../../model/scenarioTestDataModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/scenarioTestDataModel.ets");
const GattServerInterface = __importStar(__webpack_require__(/*! ../../model/gattServerInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattServerInterface.ets"));
__webpack_require__(/*! ../../model/bleInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets");
const BrInterface = __importStar(__webpack_require__(/*! ../../model/brInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets"));
class GattServerScenarioTest extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('GattServerScenarioTest', this, "message");
        this.testItem = _system_router_1.getParams().testId;
        this.__changeIndex = new ObservedPropertySimple(-1, this, "changeIndex");
        this.__gattServerScenarioMessage = AppStorage.GetOrCreate().setAndLink("gattServerScenarioMessage", "", this);
        this.__characteristicReadMsg = AppStorage.GetOrCreate().setAndLink("characteristicReadMsg", "00002BE0-0000-1000-8000-00805F9B34FB", this);
        this.__characteristicWriteMsg = AppStorage.GetOrCreate().setAndLink("characteristicWriteMsg", "initial", this);
        this.__descriptorReadMsg = AppStorage.GetOrCreate().setAndLink("descriptorReadMsg", "00002902-0000-1000-8000-00805F9B34FB", this);
        this.__descriptorWriteMsg = AppStorage.GetOrCreate().setAndLink("descriptorWriteMsg", "initial", this);
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
        this.__gattServerScenarioMessage.aboutToBeDeleted();
        this.__characteristicReadMsg.aboutToBeDeleted();
        this.__characteristicWriteMsg.aboutToBeDeleted();
        this.__descriptorReadMsg.aboutToBeDeleted();
        this.__descriptorWriteMsg.aboutToBeDeleted();
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
    get gattServerScenarioMessage() {
        return this.__gattServerScenarioMessage.get();
    }
    set gattServerScenarioMessage(newValue) {
        this.__gattServerScenarioMessage.set(newValue);
    }
    get characteristicReadMsg() {
        return this.__characteristicReadMsg.get();
    }
    set characteristicReadMsg(newValue) {
        this.__characteristicReadMsg.set(newValue);
    }
    get characteristicWriteMsg() {
        return this.__characteristicWriteMsg.get();
    }
    set characteristicWriteMsg(newValue) {
        this.__characteristicWriteMsg.set(newValue);
    }
    get descriptorReadMsg() {
        return this.__descriptorReadMsg.get();
    }
    set descriptorReadMsg(newValue) {
        this.__descriptorReadMsg.set(newValue);
    }
    get descriptorWriteMsg() {
        return this.__descriptorWriteMsg.get();
    }
    set descriptorWriteMsg(newValue) {
        this.__descriptorWriteMsg.set(newValue);
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
        AppStorage.SetOrCreate('curServiceUUID', '00001877-0000-1000-8000-00805F9B34FB');
        AppStorage.SetOrCreate('curCharacteristicUUID', '00002BE0-0000-1000-8000-00805F9B34FB');
        AppStorage.SetOrCreate('curDescriptorUUID', '00002902-0000-1000-8000-00805F9B34FB');
        AppStorage.SetOrCreate('curDescriptorValue', 'Descriptor');
        AppStorage.SetOrCreate('curCharacteristicValue', 'DAYU2');
        AppStorage.SetOrCreate('isPrimary', true);
        AppStorage.SetOrCreate('advSettings_interval', "1600");
        AppStorage.SetOrCreate('advSettings_txPower', "-7");
        AppStorage.SetOrCreate('advSettings_connectable', true);
        AppStorage.SetOrCreate('advDataServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
        AppStorage.SetOrCreate('advDataManufactureData_manufactureId', "7456");
        AppStorage.SetOrCreate('advDataManufactureData_manufactureValue', "CHN");
        AppStorage.SetOrCreate('advDataServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
        AppStorage.SetOrCreate('advDataServiceData_serviceValue', "AdvValue");
        AppStorage.SetOrCreate('advResponseServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
        AppStorage.SetOrCreate('advResponseManufactureData_manufactureId', "6547");
        AppStorage.SetOrCreate('advResponseManufactureData_manufactureValue', "CHN");
        AppStorage.SetOrCreate('advResponseServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
        AppStorage.SetOrCreate('advResponseServiceData_serviceValue', "AdvValue");
        AppStorage.SetOrCreate('cbxAdvSettings', true);
        AppStorage.SetOrCreate('cbxInterval', true);
        AppStorage.SetOrCreate('cbxTxPower', true);
        AppStorage.SetOrCreate('cbxAdvResponse', true);
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
                scenarioItems: scenarioTestDataModel_1.initGattServerScenarioData(),
                //            testMessage: this.testMessage,  优化时修改
                changeIndex: this.changeIndex
            }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                testItem: this.testItem,
                scenarioItems: scenarioTestDataModel_1.initGattServerScenarioData(),
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
        Text.create(this.gattServerScenarioMessage);
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
        Button.margin({ top: "15vp", left: "10vp", right: "10vp" });
        Button.align(Alignment.Start);
        Button.onClick((event) => {
            //            AlertDialog.show({ message: '开始GattServer场景测试' })
            let self = this;
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            let gattServerScenarioMessage = "";
            // 注册状态变化
            gattServerScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOnStateChange success");
            self.changeIndex = arr[0];
            // 开蓝牙
            gattServerScenarioMessage += BrInterface.testEnableBluetooth() + "\n";
            console.log("testEnableBluetooth success");
            self.changeIndex = arr[1];
            AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage);
            AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
            AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
            AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('txtScanOptions_interval', "0");
            AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
            AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
            AppStorage.SetOrCreate('cbxBleScanFilter', true);
            AppStorage.SetOrCreate('cbxBleScanOptions', true);
            AppStorage.SetOrCreate('curServiceUUID', '00001877-0000-1000-8000-00805F9B34FB');
            AppStorage.SetOrCreate('curCharacteristicUUID', '00002BE0-0000-1000-8000-00805F9B34FB');
            AppStorage.SetOrCreate('curDescriptorUUID', '00002902-0000-1000-8000-00805F9B34FB');
            AppStorage.SetOrCreate('curDescriptorValue', 'Descriptor');
            AppStorage.SetOrCreate('curCharacteristicValue', 'DAYU2');
            AppStorage.SetOrCreate('isPrimary', true);
            AppStorage.SetOrCreate('advSettings_interval', "1600");
            AppStorage.SetOrCreate('advSettings_txPower', "-7");
            AppStorage.SetOrCreate('advSettings_connectable', true);
            AppStorage.SetOrCreate('advDataServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advDataManufactureData_manufactureId', "7456");
            AppStorage.SetOrCreate('advDataManufactureData_manufactureValue', "CHN");
            AppStorage.SetOrCreate('advDataServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advDataServiceData_serviceValue', "AdvValue");
            AppStorage.SetOrCreate('advResponseServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advResponseManufactureData_manufactureId', "6547");
            AppStorage.SetOrCreate('advResponseManufactureData_manufactureValue', "CHN");
            AppStorage.SetOrCreate('advResponseServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advResponseServiceData_serviceValue', "AdvValue");
            AppStorage.SetOrCreate('cbxAdvSettings', true);
            AppStorage.SetOrCreate('cbxInterval', true);
            AppStorage.SetOrCreate('cbxTxPower', true);
            AppStorage.SetOrCreate('cbxAdvResponse', true);
            sleep(2).then(() => {
                // 获取状态
                gattServerScenarioMessage += BrInterface.testGetState() + "\n";
                console.log("testGetState success");
                self.changeIndex = arr[2];
                //创建Gatt服务器
                gattServerScenarioMessage += GattServerInterface.testCreateGattServer() + "\n";
                console.log("testCreateGattServer success");
                self.changeIndex = arr[3];
                // 添加服务
                gattServerScenarioMessage += GattServerInterface.testAddService() + "\n";
                console.log("testAddService success");
                self.changeIndex = arr[4];
                // 开启连接状态变化
                gattServerScenarioMessage += GattServerInterface.testOnConnectStateChange() + "\n";
                console.log("testOnConnectStateChange success");
                self.changeIndex = arr[5];
                // 开始广播
                gattServerScenarioMessage += GattServerInterface.testStartAdvertising() + "\n";
                console.log("testStartAdvertising success");
                self.changeIndex = arr[6];
                AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage);
                sleep(10).then(() => {
                    // 读取特征值
                    gattServerScenarioMessage += GattServerInterface.testOnCharacteristicRead() + "\n";
                    console.log("testOnCharacteristicRead success");
                    self.changeIndex = arr[7];
                    gattServerScenarioMessage += this.characteristicReadMsg + "\n";
                    gattServerScenarioMessage += this.characteristicWriteMsg + "\n";
                    sleep(3).then(() => {
                        // 读取描述符值
                        gattServerScenarioMessage += GattServerInterface.testOnDescriptorRead() + "\n";
                        console.log("testOnDescriptorRead success");
                        self.changeIndex = arr[8];
                        gattServerScenarioMessage += this.descriptorReadMsg + "\n";
                        gattServerScenarioMessage += this.descriptorWriteMsg + "\n";
                        AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage);
                    });
                });
            });
        });
        Row.create();
        Row.alignItems(VerticalAlign.Center);
        Text.create('场景测试开始');
        Text.fontSize("24vp");
        Text.fontColor(0xffffff);
        Text.margin({ left: 5, right: 5 });
        Text.pop();
        Row.pop();
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
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            let gattServerScenarioMessage = "";
            // 停止广播
            gattServerScenarioMessage += GattServerInterface.testStopAdvertising() + "\n";
            console.log("testStopAdvertising success");
            self.changeIndex = arr[9];
            // 关闭连接状态变化
            gattServerScenarioMessage += GattServerInterface.testOnConnectStateChange() + "\n";
            console.log("testOffConnectStateChange success");
            // 删除服务
            gattServerScenarioMessage += GattServerInterface.testRemoveService() + "\n";
            console.log("testRemoveService success");
            self.changeIndex = arr[10];
            // 关闭服务端
            gattServerScenarioMessage += GattServerInterface.testGattServerClose() + "\n";
            console.log("testGattServerClose success");
            self.changeIndex = arr[11];
            // 关闭注册状态变化
            gattServerScenarioMessage += BrInterface.testOnStateChange() + "\n";
            console.log("testOffStateChange success");
            // 关蓝牙
            gattServerScenarioMessage += BrInterface.testDisableBluetooth() + "\n";
            console.log("testDisableBluetooth success");
            self.changeIndex = arr[12];
            AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage);
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
            let gattServerScenarioMessage = "";
            AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage);
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
//export function sleep (time) {
//  return new Promise((resolve) => setTimeout(resolve, time));
//}
function string2ArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}
exports.string2ArrayBuffer = string2ArrayBuffer;
loadDocument(new GattServerScenarioTest("1", undefined, {}));


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
/******/ 			"./pages/subScenarioTest/gattServerScenarioTest": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subScenarioTest/gattServerScenarioTest.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=gattServerScenarioTest.js.map