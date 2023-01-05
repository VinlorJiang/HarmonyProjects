var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subGattTest/gattServer.ets?entry":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subGattTest/gattServer.ets?entry ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
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
 * Gatt Server Test Page Of Bluetooth test
 */
const testImageDisplay_1 = __webpack_require__(/*! ../../../../Component/testImageDisplay */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets");
var _system_router_1  = globalThis.requireNativeModule('system.router');
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../../../Utils/ConfigData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts"));
__webpack_require__(/*! @ohos.bluetooth */ "../../api/@ohos.bluetooth.d.ts");
const contentTable_1 = __webpack_require__(/*! ../../../../Component/contentTable */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/contentTable.ets");
const pageTitle_1 = __webpack_require__(/*! ../../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
const testDataModels_1 = __webpack_require__(/*! ../../../model/testDataModels */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testDataModels.ets");
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
class GattServerSetting extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.curServiceUUID = '00001877-0000-1000-8000-00805F9B34FB';
        this.curServiceIsPrimary = true;
        this.curCharacteristicUUID = '00002BE0-0000-1000-8000-00805F9B34FB';
        this.curCharacteristicValue = 'DAYU';
        this.curDescriptorUUID = '00002902-0000-1000-8000-00805F9B34FB';
        this.curDescriptorValue = 'Descriptor';
        this.cbxAdvSettings = true;
        this.cbxAdvResponse = false;
        this.cbxInterval = false;
        this.advSettings_interval = "1600";
        this.cbxTxPower = false;
        this.advSettings_txPower = "-7";
        this.cbxConnectable = true;
        this.advSettings_connectable = true;
        this.advDataServiceUuids_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advDataManufactureData_manufactureId = "7456";
        this.advDataManufactureData_manufactureValue = "CHN";
        this.advDataServiceData_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advDataServiceData_serviceValue = "AdvValue";
        this.advResponseServiceUuids_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advResponseManufactureData_manufactureId = "6547";
        this.advResponseManufactureData_manufactureValue = "CHN";
        this.advResponseServiceData_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advResponseServiceData_serviceValue = "AdvValue";
        this.testItem = _system_router_1.getParams().testId;
        this.curAdvSettings = {
            interval: 800,
            txPower: -7,
            connectable: true
        };
        this.curAdvData = {
            serviceUuids: ["00003344-0000-1000-8000-00805f9b34fb", "00008899-0000-1000-8000-00805f9b34fb"],
            manufactureData: [{
                    manufactureId: 7456,
                    manufactureValue: string2ArrayBuffer("OHOS CHN")
                }],
            serviceData: [{
                    serviceUuid: "000054F6-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("OhosBle!")
                }, {
                    serviceUuid: "00009999-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("dudu_tiger")
                }]
        };
        this.curAdvResponse = {
            serviceUuids: [
                "00009999-0000-1000-8000-00805f9b34fb"
            ],
            manufactureData: [{
                    manufactureId: 6547,
                    manufactureValue: string2ArrayBuffer("OHOS CHN")
                }],
            serviceData: [{
                    serviceUuid: "000054F6-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("OhosBle!")
                }, {
                    serviceUuid: "00007456-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("OhosBle")
                }]
        };
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.curServiceUUID !== undefined) {
            this.curServiceUUID = params.curServiceUUID;
        }
        if (params.curServiceIsPrimary !== undefined) {
            this.curServiceIsPrimary = params.curServiceIsPrimary;
        }
        if (params.curCharacteristicUUID !== undefined) {
            this.curCharacteristicUUID = params.curCharacteristicUUID;
        }
        if (params.curCharacteristicValue !== undefined) {
            this.curCharacteristicValue = params.curCharacteristicValue;
        }
        if (params.curDescriptorUUID !== undefined) {
            this.curDescriptorUUID = params.curDescriptorUUID;
        }
        if (params.curDescriptorValue !== undefined) {
            this.curDescriptorValue = params.curDescriptorValue;
        }
        if (params.cbxAdvSettings !== undefined) {
            this.cbxAdvSettings = params.cbxAdvSettings;
        }
        if (params.cbxAdvResponse !== undefined) {
            this.cbxAdvResponse = params.cbxAdvResponse;
        }
        if (params.cbxInterval !== undefined) {
            this.cbxInterval = params.cbxInterval;
        }
        if (params.advSettings_interval !== undefined) {
            this.advSettings_interval = params.advSettings_interval;
        }
        if (params.cbxTxPower !== undefined) {
            this.cbxTxPower = params.cbxTxPower;
        }
        if (params.advSettings_txPower !== undefined) {
            this.advSettings_txPower = params.advSettings_txPower;
        }
        if (params.cbxConnectable !== undefined) {
            this.cbxConnectable = params.cbxConnectable;
        }
        if (params.advSettings_connectable !== undefined) {
            this.advSettings_connectable = params.advSettings_connectable;
        }
        if (params.advDataServiceUuids_serviceUuid !== undefined) {
            this.advDataServiceUuids_serviceUuid = params.advDataServiceUuids_serviceUuid;
        }
        if (params.advDataManufactureData_manufactureId !== undefined) {
            this.advDataManufactureData_manufactureId = params.advDataManufactureData_manufactureId;
        }
        if (params.advDataManufactureData_manufactureValue !== undefined) {
            this.advDataManufactureData_manufactureValue = params.advDataManufactureData_manufactureValue;
        }
        if (params.advDataServiceData_serviceUuid !== undefined) {
            this.advDataServiceData_serviceUuid = params.advDataServiceData_serviceUuid;
        }
        if (params.advDataServiceData_serviceValue !== undefined) {
            this.advDataServiceData_serviceValue = params.advDataServiceData_serviceValue;
        }
        if (params.advResponseServiceUuids_serviceUuid !== undefined) {
            this.advResponseServiceUuids_serviceUuid = params.advResponseServiceUuids_serviceUuid;
        }
        if (params.advResponseManufactureData_manufactureId !== undefined) {
            this.advResponseManufactureData_manufactureId = params.advResponseManufactureData_manufactureId;
        }
        if (params.advResponseManufactureData_manufactureValue !== undefined) {
            this.advResponseManufactureData_manufactureValue = params.advResponseManufactureData_manufactureValue;
        }
        if (params.advResponseServiceData_serviceUuid !== undefined) {
            this.advResponseServiceData_serviceUuid = params.advResponseServiceData_serviceUuid;
        }
        if (params.advResponseServiceData_serviceValue !== undefined) {
            this.advResponseServiceData_serviceValue = params.advResponseServiceData_serviceValue;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.curAdvSettings !== undefined) {
            this.curAdvSettings = params.curAdvSettings;
        }
        if (params.curAdvData !== undefined) {
            this.curAdvData = params.curAdvData;
        }
        if (params.curAdvResponse !== undefined) {
            this.curAdvResponse = params.curAdvResponse;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        Column.create();
        Column.backgroundColor({ "id": 16777311, "type": 10001, params: [] });
        Text.create("Gatt服务配置:");
        Text.margin({ top: "1vp" });
        Text.padding("1vp");
        Text.fontSize(17);
        Text.fontColor("#4444444");
        Text.height("30vp");
        Text.width("94%");
        Text.textAlign(TextAlign.Start);
        Text.pop();
        Scroll.create();
        Scroll.height("22%");
        Column.create();
        Row.create();
        Row.height(60);
        Row.width('100%');
        Row.padding(5);
        Row.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Text.create("服务UUID:");
        Text.fontSize(15);
        Text.width(70);
        Text.padding({ left: 10 });
        Text.pop();
        TextInput.create({ text: this.curServiceUUID, placeholder: "input service UUID" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.curServiceUUID = strInput;
            AppStorage.SetOrCreate('curServiceUUID', strInput);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Column.create();
        Column.height(100);
        Column.width('100%');
        Column.padding(5);
        Column.backgroundColor({ "id": 16777318, "type": 10001, params: [] });
        Row.create();
        Row.width('100%');
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("CCC UUID:");
        Text.fontSize(15);
        Text.width(70);
        Text.padding({ left: 10 });
        Text.pop();
        TextInput.create({ text: this.curCharacteristicUUID, placeholder: "input characteristic UUID" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.curCharacteristicUUID = strInput;
            AppStorage.SetOrCreate('curCharacteristicUUID', strInput);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.width('100%');
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("CCC Value:");
        Text.fontSize(15);
        Text.width(70);
        Text.padding({ left: 10 });
        Text.pop();
        TextInput.create({ text: this.curCharacteristicValue, placeholder: "input characteristic Value" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.curCharacteristicValue = strInput;
            AppStorage.SetOrCreate('curCharacteristicValue', strInput);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Column.pop();
        Flex.create({ direction: FlexDirection.Column });
        Flex.height(100);
        Flex.width('100%');
        Flex.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Row.create();
        Row.width('100%');
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("Descriptor UUID:");
        Text.fontSize(15);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.curDescriptorUUID, placeholder: "input descriptor UUID" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.curDescriptorUUID = strInput;
            AppStorage.SetOrCreate('curDescriptorUUID', strInput);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.width('100%');
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("Descriptor Value:");
        Text.fontSize(15);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.curDescriptorValue, placeholder: "input descriptor Value" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.curDescriptorValue = strInput;
            AppStorage.SetOrCreate('curDescriptorValue', strInput);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Flex.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
        Column.create();
        Column.backgroundColor({ "id": 16777311, "type": 10001, params: [] });
        Row.create();
        Row.height(40);
        Text.create("广播配置:");
        Text.margin({ top: "1vp" });
        Text.padding("5vp");
        Text.fontSize(17);
        Text.fontColor("#4444444");
        Text.height("30vp");
        Text.width("70%");
        Text.textAlign(TextAlign.Start);
        Text.pop();
        Checkbox.create({ name: 'AdvSettings', group: 'checkboxGroup1' });
        Checkbox.select(this.cbxAdvSettings);
        Checkbox.selectedColor(0x39a2db);
        Checkbox.onChange((value) => {
            if (value) {
                this.cbxAdvSettings = true;
            }
            else {
                this.cbxAdvSettings = false;
            }
            AppStorage.SetOrCreate('cbxAdvSettings', value);
            _system_prompt_1.showToast({ message: value });
        });
        Checkbox.width(30);
        Checkbox.margin({ left: "1vp" });
        Checkbox.pop();
        Text.create("设置");
        Text.fontSize(14);
        Text.fontColor("#4444444");
        Text.pop();
        Row.pop();
        Scroll.create();
        Scroll.height("50%");
        Column.create();
        Column.create();
        Column.height(120);
        Column.width('100%');
        Column.padding(5);
        Column.backgroundColor(0xAFEEEE);
        Row.create();
        Row.height(40);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Checkbox.create({ name: 'interval', group: 'checkboxGroup1' });
        Checkbox.select(this.cbxInterval);
        Checkbox.selectedColor(0x39a2db);
        Checkbox.width(30);
        Checkbox.onChange((value) => {
            if (value) {
                this.cbxInterval = true;
            }
            else {
                this.cbxInterval = false;
            }
            AppStorage.SetOrCreate('cbxInterval', value);
        });
        Checkbox.pop();
        Text.create("interval");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.advSettings_interval, placeholder: "32~1600" });
        TextInput.fontSize(18);
        TextInput.onChange((strInput) => {
            this.advSettings_interval = strInput;
            AppStorage.SetOrCreate('advSettings_interval', strInput);
        });
        TextInput.width("60%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.height(40);
        Row.padding({ top: 5 });
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Checkbox.create({ name: 'txPower', group: 'checkboxGroup' });
        Checkbox.select(this.cbxTxPower);
        Checkbox.selectedColor(0x39a2db);
        Checkbox.width(30);
        Checkbox.onChange((value) => {
            if (value) {
                this.cbxTxPower = true;
            }
            else {
                this.cbxTxPower = false;
            }
            AppStorage.SetOrCreate('cbxTxPower', value);
        });
        Checkbox.pop();
        Text.create("txPower");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.advSettings_txPower.toString(), placeholder: "input txPower" });
        TextInput.fontSize(18);
        TextInput.onChange((strInput) => {
            this.advSettings_txPower = strInput;
            AppStorage.SetOrCreate('advSettings_txPower', strInput);
        });
        TextInput.width("60%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.height(40);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Checkbox.create({ name: 'connectable', group: 'checkboxGroup' });
        Checkbox.select(this.cbxConnectable);
        Checkbox.selectedColor(0x39a2db);
        Checkbox.onChange((value) => {
            if (value) {
                this.cbxConnectable = true;
            }
            else {
                this.cbxConnectable = false;
            }
            this.advSettings_connectable = this.cbxConnectable;
            AppStorage.SetOrCreate('advSettings_connectable', value);
        });
        Checkbox.width(30);
        Checkbox.margin({ left: "1vp" });
        Checkbox.pop();
        Text.create("connectable");
        Text.fontSize(17);
        Text.width("80%");
        Text.pop();
        Row.pop();
        Column.pop();
        //            Text("Adv Data:")
        //              .margin({top: "5vp",left: "5vp"})
        //              .padding("5vp")
        //              .fontSize("15vp")
        //              .fontColor("#4444444");
        Column.create();
        //            Text("Adv Data:")
        //              .margin({top: "5vp",left: "5vp"})
        //              .padding("5vp")
        //              .fontSize("15vp")
        //              .fontColor("#4444444");
        Column.width('100%');
        //            Text("Adv Data:")
        //              .margin({top: "5vp",left: "5vp"})
        //              .padding("5vp")
        //              .fontSize("15vp")
        //              .fontColor("#4444444");
        Column.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Row.create();
        Row.width("100%");
        Text.create("服务Uuid");
        Text.fontSize(17);
        Text.width(60);
        Text.padding({ left: 10 });
        Text.pop();
        TextInput.create({ text: this.advDataServiceUuids_serviceUuid, placeholder: "input serviceUuid" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advDataServiceUuids_serviceUuid = strInput;
            AppStorage.SetOrCreate('advDataServiceUuids_serviceUuid', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Column.create();
        Column.borderWidth(1);
        Column.borderColor({ "id": 16777311, "type": 10001, params: [] });
        Text.create("manufactureData");
        Text.fontSize(17);
        Text.width("100%");
        Text.pop();
        Row.create();
        Row.width("90%");
        Text.create("Id");
        Text.fontSize(17);
        Text.width(30);
        Text.pop();
        TextInput.create({ text: this.advDataManufactureData_manufactureId, placeholder: "input manufactureId(less than 8 digi)" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advDataManufactureData_manufactureId = strInput;
            AppStorage.SetOrCreate('advDataManufactureData_manufactureId', strInput);
        });
        TextInput.width("100vp");
        Text.create("Value");
        Text.fontSize(17);
        Text.width(70);
        Text.padding({ left: 10 });
        Text.pop();
        TextInput.create({ text: this.advDataManufactureData_manufactureValue, placeholder: "input manufactureValue(less than 8 char)" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advDataManufactureData_manufactureValue = strInput;
            AppStorage.SetOrCreate('advDataManufactureData_manufactureValue', strInput);
        });
        TextInput.width("100vp");
        Row.pop();
        Column.pop();
        Column.create();
        Column.borderWidth(1);
        Column.borderColor({ "id": 16777311, "type": 10001, params: [] });
        Text.create("serviceData");
        Text.fontSize(17);
        Text.width("100%");
        Text.pop();
        Column.create();
        Row.create();
        Text.create("serviceUuid");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: '' + this.advDataServiceData_serviceUuid, placeholder: "input serviceUuid" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advDataServiceData_serviceUuid = strInput;
            AppStorage.SetOrCreate('advDataServiceData_serviceUuid', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Row.create();
        Row.padding({ top: 10 });
        Text.create("serviceValue");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.advDataServiceData_serviceValue, placeholder: "input manufactureValue(less than 8 char)" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advDataServiceData_serviceValue = strInput;
            AppStorage.SetOrCreate('advDataServiceData_serviceValue', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Column.pop();
        Column.pop();
        //            Text("Adv Data:")
        //              .margin({top: "5vp",left: "5vp"})
        //              .padding("5vp")
        //              .fontSize("15vp")
        //              .fontColor("#4444444");
        Column.pop();
        Row.create();
        Row.height(40);
        Row.width('100%');
        Row.padding(5);
        Checkbox.create({ name: 'AdvResponse', group: 'checkboxGroup1' });
        Checkbox.select(this.cbxAdvResponse);
        Checkbox.selectedColor(0x39a2db);
        Checkbox.onChange((value) => {
            if (value) {
                this.cbxAdvResponse = true;
            }
            else {
                this.cbxAdvResponse = false;
            }
            AppStorage.SetOrCreate('cbxAdvResponse', value);
            _system_prompt_1.showToast({ message: value });
        });
        Checkbox.width(30);
        Checkbox.margin({ left: "1vp" });
        Checkbox.pop();
        Text.create("Response:");
        Text.margin({ top: "5vp", left: "5vp" });
        Text.fontSize(17);
        Text.fontColor("#4444444");
        Text.pop();
        Row.pop();
        Column.create();
        Column.height("85%");
        Column.width('100%');
        Column.padding(5);
        Column.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Row.create();
        Text.create("serviceUuid"); //.width("40vp")
        Text.fontSize(17);
        Text.width(70);
        Text.pop(); //.width("40vp")
        TextInput.create({ text: this.advResponseServiceUuids_serviceUuid, placeholder: "input serviceUuid" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advResponseServiceUuids_serviceUuid = strInput;
            AppStorage.SetOrCreate('advResponseServiceUuids_serviceUuid', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Column.create();
        Column.borderWidth(1);
        Column.borderColor({ "id": 16777311, "type": 10001, params: [] });
        Text.create("manufactureData");
        Text.fontSize(17);
        Text.width("100%");
        Text.backgroundColor({ "id": 16777311, "type": 10001, params: [] });
        Text.pop();
        Column.create();
        Row.create();
        Text.create("Id");
        Text.fontSize(17);
        Text.width(50);
        Text.pop();
        TextInput.create({ text: this.advResponseManufactureData_manufactureId,
            placeholder: "input manufactureId(less than 8 char)" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advResponseManufactureData_manufactureId = strInput;
            AppStorage.SetOrCreate('advResponseManufactureData_manufactureId', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Row.create();
        Row.padding({ top: 5 });
        Text.create("Value");
        Text.fontSize(17);
        Text.width(50);
        Text.pop();
        TextInput.create({ text: this.advResponseManufactureData_manufactureValue,
            placeholder: "input manufactureValue(less than 8 char)" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advResponseManufactureData_manufactureValue = strInput;
            AppStorage.SetOrCreate('advResponseManufactureData_manufactureValue', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Column.pop();
        Column.pop();
        Column.create();
        Column.borderWidth(1);
        Column.borderColor({ "id": 16777311, "type": 10001, params: [] });
        Text.create("serviceData");
        Text.fontSize(17);
        Text.width("100%");
        Text.backgroundColor({ "id": 16777311, "type": 10001, params: [] });
        Text.pop();
        Column.create();
        Row.create();
        Text.create("serviceUuid");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: '' + this.advResponseServiceData_serviceUuid, placeholder: "input serviceUuid" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advResponseServiceData_serviceUuid = strInput;
            AppStorage.SetOrCreate('advResponseServiceData_serviceUuid', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Row.create();
        Row.padding({ top: 5 });
        Text.create("serviceValue");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.advResponseServiceData_serviceValue, placeholder: "input manufactureValue(less than 8 char)" });
        TextInput.fontSize(17);
        TextInput.onChange((strInput) => {
            this.advResponseServiceData_serviceValue = strInput;
            AppStorage.SetOrCreate('advResponseServiceData_serviceValue', strInput);
        });
        TextInput.width("80%");
        Row.pop();
        Column.pop();
        Column.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
        Column.pop();
    }
}
class GattServer extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('GattServer', this, "message");
        this.__currentClick = new ObservedPropertySimple(-1, this, "currentClick");
        this.__showList = new ObservedPropertySimple(false, this, "showList");
        this.__connectStateMsg = AppStorage.GetOrCreate().setAndLink("connect_StateMsg", "initial", this);
        this.__characteristicReadMsg = AppStorage.GetOrCreate().setAndLink("characteristicReadMsg", "initial", this);
        this.__characteristicWriteMsg = AppStorage.GetOrCreate().setAndLink("characteristicWriteMsg", "initial", this);
        this.__descriptorReadMsg = AppStorage.GetOrCreate().setAndLink("descriptorReadMsg", "initial", this);
        this.__descriptorWriteMsg = AppStorage.GetOrCreate().setAndLink("descriptorWriteMsg", "initial", this);
        this.testItem = _system_router_1.getParams().testId;
        this.btOnConnectState = 'on:connectStateChange';
        this.isConnectStateChangeClick = false;
        this.characteristicReadMsg = 'initial';
        this.btOnCharacteristicRead = 'on:characteristicRead';
        this.isCharacteristicReadClick = false;
        this.characteristicWriteMsg = 'initial';
        this.btOnCharacteristicWrite = 'on:characteristicWrite';
        this.isCharacteristicWriteClick = false;
        this.descriptorReadMsg = 'initial';
        this.btOnDescriptorRead = 'on:descriptorRead';
        this.isDescriptorReadClick = false;
        this.descriptorWriteMsg = 'initial';
        this.btOnDescriptorWrite = 'on:descriptorWrite';
        this.isDescriptorWriteClick = false;
        this.curServiceUUID = '00001877-0000-1000-8000-00805F9B34FB';
        this.curServiceIsPrimary = true;
        this.curCharacteristicUUID = '00002BE0-0000-1000-8000-00805F9B34FB';
        this.curCharacteristicValue = 'DAYU ';
        this.curDescriptorUUID = '00002902-0000-1000-8000-00805F9B34FB';
        this.curDescriptorValue = 'Descriptor';
        this.curGattService = {
            serviceUuid: '',
            isPrimary: true,
            characteristics: [],
            includeServices: []
        };
        this.notifyCharacteristic_serviceUuid = '00001810-0000-1000-8000-00805F9B34FB';
        this.notifyCharacteristic_characteristicUuid = '00001821-0000-1000-8000-00805F9B34FB';
        this.notifyCharacteristic_characteristicValue = 'test';
        this.notifyCharacteristic_confirm = false;
        this.notifyCharacteristicDeviceId = '88:36:CF:09:C1:90';
        this.notifyCharacteristic_notifyCharacteristic = {
            serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
            characteristicUuid: '00001821-0000-1000-8000-00805F9B34FB',
            characteristicValue: string2ArrayBuffer("999"),
            confirm: false
        };
        this.serverResponse_deviceId = '88:36:CF:09:C1:90';
        this.serverResponse_transId = '1';
        this.serverResponse_status = '0';
        this.serverResponse_offset = '0';
        this.serverResponse_value = 'respond value';
        this.serverResponse = {
            deviceId: '88:36:CF:09:C1:90',
            transId: 1,
            status: 0,
            offset: 0,
            value: string2ArrayBuffer("respond value")
        };
        this.cbxAdvSettings = true;
        this.cbxAdvResponse = false;
        this.cbxInterval = false;
        this.advSettings_interval = "1600";
        this.cbxTxPower = false;
        this.advSettings_txPower = "-7";
        this.cbxConnectable = true;
        this.advSettings_connectable = true;
        this.advDataServiceUuids_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advDataManufactureData_manufactureId = "7456";
        this.advDataManufactureData_manufactureValue = "CHN";
        this.advDataServiceData_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advDataServiceData_serviceValue = "AdvValue";
        this.advResponseServiceUuids_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advResponseManufactureData_manufactureId = "6547";
        this.advResponseManufactureData_manufactureValue = "CHN";
        this.advResponseServiceData_serviceUuid = "000054F6-0000-1000-8000-00805f9b34fb";
        this.advResponseServiceData_serviceValue = "AdvValue";
        this.curAdvSettings = {
            interval: 800,
            txPower: -7,
            connectable: true
        };
        this.curAdvData = {
            serviceUuids: ["00003344-0000-1000-8000-00805f9b34fb", "00008899-0000-1000-8000-00805f9b34fb"],
            manufactureData: [{
                    manufactureId: 7456,
                    manufactureValue: string2ArrayBuffer("OHOS CHN")
                }],
            serviceData: [{
                    serviceUuid: "000054F6-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("OhosBle!")
                }, {
                    serviceUuid: "00009999-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("dudu_tiger")
                }]
        };
        this.curAdvResponse = {
            serviceUuids: [
                "00009999-0000-1000-8000-00805f9b34fb"
            ],
            manufactureData: [{
                    manufactureId: 6547,
                    manufactureValue: string2ArrayBuffer("OHOS CHN")
                }],
            serviceData: [{
                    serviceUuid: "000054F6-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("OhosBle!")
                }, {
                    serviceUuid: "00007456-0000-1000-8000-00805f9b34fb",
                    serviceValue: string2ArrayBuffer("OhosBle")
                }]
        };
        this.gattServerInstance = null;
        this.gattServerExist = false;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.currentClick !== undefined) {
            this.currentClick = params.currentClick;
        }
        if (params.showList !== undefined) {
            this.showList = params.showList;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.btOnConnectState !== undefined) {
            this.btOnConnectState = params.btOnConnectState;
        }
        if (params.isConnectStateChangeClick !== undefined) {
            this.isConnectStateChangeClick = params.isConnectStateChangeClick;
        }
        if (params.characteristicReadMsg !== undefined) {
            this.characteristicReadMsg = params.characteristicReadMsg;
        }
        if (params.btOnCharacteristicRead !== undefined) {
            this.btOnCharacteristicRead = params.btOnCharacteristicRead;
        }
        if (params.isCharacteristicReadClick !== undefined) {
            this.isCharacteristicReadClick = params.isCharacteristicReadClick;
        }
        if (params.characteristicWriteMsg !== undefined) {
            this.characteristicWriteMsg = params.characteristicWriteMsg;
        }
        if (params.btOnCharacteristicWrite !== undefined) {
            this.btOnCharacteristicWrite = params.btOnCharacteristicWrite;
        }
        if (params.isCharacteristicWriteClick !== undefined) {
            this.isCharacteristicWriteClick = params.isCharacteristicWriteClick;
        }
        if (params.descriptorReadMsg !== undefined) {
            this.descriptorReadMsg = params.descriptorReadMsg;
        }
        if (params.btOnDescriptorRead !== undefined) {
            this.btOnDescriptorRead = params.btOnDescriptorRead;
        }
        if (params.isDescriptorReadClick !== undefined) {
            this.isDescriptorReadClick = params.isDescriptorReadClick;
        }
        if (params.descriptorWriteMsg !== undefined) {
            this.descriptorWriteMsg = params.descriptorWriteMsg;
        }
        if (params.btOnDescriptorWrite !== undefined) {
            this.btOnDescriptorWrite = params.btOnDescriptorWrite;
        }
        if (params.isDescriptorWriteClick !== undefined) {
            this.isDescriptorWriteClick = params.isDescriptorWriteClick;
        }
        if (params.curServiceUUID !== undefined) {
            this.curServiceUUID = params.curServiceUUID;
        }
        if (params.curServiceIsPrimary !== undefined) {
            this.curServiceIsPrimary = params.curServiceIsPrimary;
        }
        if (params.curCharacteristicUUID !== undefined) {
            this.curCharacteristicUUID = params.curCharacteristicUUID;
        }
        if (params.curCharacteristicValue !== undefined) {
            this.curCharacteristicValue = params.curCharacteristicValue;
        }
        if (params.curDescriptorUUID !== undefined) {
            this.curDescriptorUUID = params.curDescriptorUUID;
        }
        if (params.curDescriptorValue !== undefined) {
            this.curDescriptorValue = params.curDescriptorValue;
        }
        if (params.curGattService !== undefined) {
            this.curGattService = params.curGattService;
        }
        if (params.notifyCharacteristic_serviceUuid !== undefined) {
            this.notifyCharacteristic_serviceUuid = params.notifyCharacteristic_serviceUuid;
        }
        if (params.notifyCharacteristic_characteristicUuid !== undefined) {
            this.notifyCharacteristic_characteristicUuid = params.notifyCharacteristic_characteristicUuid;
        }
        if (params.notifyCharacteristic_characteristicValue !== undefined) {
            this.notifyCharacteristic_characteristicValue = params.notifyCharacteristic_characteristicValue;
        }
        if (params.notifyCharacteristic_confirm !== undefined) {
            this.notifyCharacteristic_confirm = params.notifyCharacteristic_confirm;
        }
        if (params.notifyCharacteristicDeviceId !== undefined) {
            this.notifyCharacteristicDeviceId = params.notifyCharacteristicDeviceId;
        }
        if (params.notifyCharacteristic_notifyCharacteristic !== undefined) {
            this.notifyCharacteristic_notifyCharacteristic = params.notifyCharacteristic_notifyCharacteristic;
        }
        if (params.serverResponse_deviceId !== undefined) {
            this.serverResponse_deviceId = params.serverResponse_deviceId;
        }
        if (params.serverResponse_transId !== undefined) {
            this.serverResponse_transId = params.serverResponse_transId;
        }
        if (params.serverResponse_status !== undefined) {
            this.serverResponse_status = params.serverResponse_status;
        }
        if (params.serverResponse_offset !== undefined) {
            this.serverResponse_offset = params.serverResponse_offset;
        }
        if (params.serverResponse_value !== undefined) {
            this.serverResponse_value = params.serverResponse_value;
        }
        if (params.serverResponse !== undefined) {
            this.serverResponse = params.serverResponse;
        }
        if (params.cbxAdvSettings !== undefined) {
            this.cbxAdvSettings = params.cbxAdvSettings;
        }
        if (params.cbxAdvResponse !== undefined) {
            this.cbxAdvResponse = params.cbxAdvResponse;
        }
        if (params.cbxInterval !== undefined) {
            this.cbxInterval = params.cbxInterval;
        }
        if (params.advSettings_interval !== undefined) {
            this.advSettings_interval = params.advSettings_interval;
        }
        if (params.cbxTxPower !== undefined) {
            this.cbxTxPower = params.cbxTxPower;
        }
        if (params.advSettings_txPower !== undefined) {
            this.advSettings_txPower = params.advSettings_txPower;
        }
        if (params.cbxConnectable !== undefined) {
            this.cbxConnectable = params.cbxConnectable;
        }
        if (params.advSettings_connectable !== undefined) {
            this.advSettings_connectable = params.advSettings_connectable;
        }
        if (params.advDataServiceUuids_serviceUuid !== undefined) {
            this.advDataServiceUuids_serviceUuid = params.advDataServiceUuids_serviceUuid;
        }
        if (params.advDataManufactureData_manufactureId !== undefined) {
            this.advDataManufactureData_manufactureId = params.advDataManufactureData_manufactureId;
        }
        if (params.advDataManufactureData_manufactureValue !== undefined) {
            this.advDataManufactureData_manufactureValue = params.advDataManufactureData_manufactureValue;
        }
        if (params.advDataServiceData_serviceUuid !== undefined) {
            this.advDataServiceData_serviceUuid = params.advDataServiceData_serviceUuid;
        }
        if (params.advDataServiceData_serviceValue !== undefined) {
            this.advDataServiceData_serviceValue = params.advDataServiceData_serviceValue;
        }
        if (params.advResponseServiceUuids_serviceUuid !== undefined) {
            this.advResponseServiceUuids_serviceUuid = params.advResponseServiceUuids_serviceUuid;
        }
        if (params.advResponseManufactureData_manufactureId !== undefined) {
            this.advResponseManufactureData_manufactureId = params.advResponseManufactureData_manufactureId;
        }
        if (params.advResponseManufactureData_manufactureValue !== undefined) {
            this.advResponseManufactureData_manufactureValue = params.advResponseManufactureData_manufactureValue;
        }
        if (params.advResponseServiceData_serviceUuid !== undefined) {
            this.advResponseServiceData_serviceUuid = params.advResponseServiceData_serviceUuid;
        }
        if (params.advResponseServiceData_serviceValue !== undefined) {
            this.advResponseServiceData_serviceValue = params.advResponseServiceData_serviceValue;
        }
        if (params.curAdvSettings !== undefined) {
            this.curAdvSettings = params.curAdvSettings;
        }
        if (params.curAdvData !== undefined) {
            this.curAdvData = params.curAdvData;
        }
        if (params.curAdvResponse !== undefined) {
            this.curAdvResponse = params.curAdvResponse;
        }
        if (params.gattServerInstance !== undefined) {
            this.gattServerInstance = params.gattServerInstance;
        }
        if (params.gattServerExist !== undefined) {
            this.gattServerExist = params.gattServerExist;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__currentClick.aboutToBeDeleted();
        this.__showList.aboutToBeDeleted();
        this.__connectStateMsg.aboutToBeDeleted();
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
    get currentClick() {
        return this.__currentClick.get();
    }
    set currentClick(newValue) {
        this.__currentClick.set(newValue);
    }
    get showList() {
        return this.__showList.get();
    }
    set showList(newValue) {
        this.__showList.set(newValue);
    }
    get connectStateMsg() {
        return this.__connectStateMsg.get();
    }
    set connectStateMsg(newValue) {
        this.__connectStateMsg.set(newValue);
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
        AppStorage.SetOrCreate('curServiceUUID', this.curServiceUUID);
        AppStorage.SetOrCreate('curCharacteristicUUID', this.curCharacteristicUUID);
        AppStorage.SetOrCreate('curDescriptorUUID', this.curDescriptorUUID);
        AppStorage.SetOrCreate('curDescriptorValue', this.curDescriptorValue);
        AppStorage.SetOrCreate('curCharacteristicValue', this.curCharacteristicValue);
        AppStorage.SetOrCreate('isPrimary', this.curServiceIsPrimary);
        AppStorage.SetOrCreate('advSettings_interval', this.advSettings_interval);
        AppStorage.SetOrCreate('advSettings_txPower', this.advSettings_txPower);
        AppStorage.SetOrCreate('advSettings_connectable', this.advSettings_connectable);
        AppStorage.SetOrCreate('advDataServiceUuids_serviceUuid', this.advDataServiceUuids_serviceUuid);
        AppStorage.SetOrCreate('advDataManufactureData_manufactureId', this.advDataManufactureData_manufactureId);
        AppStorage.SetOrCreate('advDataManufactureData_manufactureValue', this.advDataManufactureData_manufactureValue);
        AppStorage.SetOrCreate('advDataServiceData_serviceUuid', this.advDataServiceData_serviceUuid);
        AppStorage.SetOrCreate('advDataServiceData_serviceValue', this.advDataServiceData_serviceValue);
        AppStorage.SetOrCreate('advResponseServiceUuids_serviceUuid', this.advResponseServiceUuids_serviceUuid);
        AppStorage.SetOrCreate('advResponseManufactureData_manufactureId', this.advResponseManufactureData_manufactureId);
        AppStorage.SetOrCreate('advResponseManufactureData_manufactureValue', this.advResponseManufactureData_manufactureValue);
        AppStorage.SetOrCreate('advResponseServiceData_serviceUuid', this.advResponseServiceData_serviceUuid);
        AppStorage.SetOrCreate('advResponseServiceData_serviceValue', this.advResponseServiceData_serviceValue);
        AppStorage.SetOrCreate('cbxAdvSettings', this.cbxAdvSettings);
        AppStorage.SetOrCreate('cbxInterval', this.cbxInterval);
        AppStorage.SetOrCreate('cbxTxPower', this.cbxTxPower);
        AppStorage.SetOrCreate('cbxAdvResponse', this.cbxAdvResponse);
    }
    //@StorageLink('on_BLEConnectionStateChange')
    render() {
        Column.create();
        Column.width('100%');
        Column.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        //      PageTitle({detail: 'Gatt_Server测试'})
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
        //      PageTitle({detail: 'Gatt_Server测试'})
        Stack.pop();
        Stack.create();
        Stack.height("0.5vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Row.create();
        Row.width("100%");
        Text.create("GattServerSetting");
        Text.fontSize("20vp");
        Text.height(60);
        Text.width("80%");
        Text.padding({ left: 10 });
        Text.pop();
        Image.create({ "id": 16777554, "type": 20000, params: [] });
        Image.height(40);
        Image.width(40);
        Image.padding({ top: 10, bottom: 10, left: 10 });
        Image.onClick(() => {
            this.showList = !this.showList;
        });
        Row.pop();
        Column.create();
        Column.visibility(Visibility.Visible);
        If.create();
        if (this.showList) {
            If.branchId(0);
            let earlierCreatedChild_4 = this.findChildById("4");
            if (earlierCreatedChild_4 == undefined) {
                View.create(new GattServerSetting("4", this, {}));
            }
            else {
                earlierCreatedChild_4.updateWithValueParams({});
                if (!earlierCreatedChild_4.needsUpdate()) {
                    earlierCreatedChild_4.markStatic();
                }
                View.create(earlierCreatedChild_4);
            }
        }
        else {
            If.branchId(1);
            Column.create();
            Column.create();
            Column.width("95%");
            Column.height(160);
            Column.backgroundColor({ "id": 125829123, "type": 10001, params: [] });
            Text.create("结果显示:");
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("100%");
            Text.pop();
            Text.create("Result:" + this.message);
            Text.fontSize("17vp");
            Text.margin({ top: "1vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("ConnectionStateChange:" + this.connectStateMsg);
            Text.fontSize("17vp");
            Text.margin({ top: "1vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("characteristicRead:" + this.characteristicReadMsg);
            Text.fontSize("17vp");
            Text.margin({ top: "1vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("characteristicWrite:" + this.characteristicWriteMsg);
            Text.fontSize("17vp");
            Text.margin({ top: "1vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("descriptorRead:" + this.descriptorReadMsg);
            Text.fontSize("17vp");
            Text.margin({ top: "1vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("descriptorWrite:" + this.descriptorWriteMsg);
            Text.fontSize("17vp");
            Text.margin({ top: "1vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Column.pop();
            Stack.create();
            Stack.height("0.25vp");
            Stack.backgroundColor("#000000");
            Stack.pop();
            Column.create();
            Column.height("75%");
            Text.create("功能测试:");
            Text.margin({ top: "5vp", left: "10vp" });
            Text.padding("5vp");
            Text.fontSize("18vp");
            Text.width("100%");
            Text.pop();
            Scroll.create();
            Scroll.width(ConfigData_1.default.WH_100_100);
            Scroll.align(Alignment.TopStart);
            Scroll.layoutWeight(1);
            Scroll.margin({ top: { "id": 125829737, "type": 10002, params: [] } });
            let earlierCreatedChild_5 = this.findChildById("5");
            if (earlierCreatedChild_5 == undefined) {
                View.create(new contentTable_1.ContentTable("5", this, { apiItems: testDataModels_1.initGattServerApiData() })); //子层调用
            }
            else {
                earlierCreatedChild_5.updateWithValueParams({
                    apiItems: testDataModels_1.initGattServerApiData()
                });
                View.create(earlierCreatedChild_5);
            }
            Scroll.pop();
            Column.pop();
            Column.pop();
        }
        If.pop();
        Column.pop();
        Column.pop();
    }
    buildAdvSettings() {
        if (this.cbxAdvSettings) {
            if (this.cbxInterval) {
                this.curAdvSettings.interval = parseInt(this.advSettings_interval);
            }
            if (this.cbxTxPower) {
                this.curAdvSettings.txPower = parseInt(this.advSettings_txPower);
            }
            if (this.cbxConnectable) {
                this.curAdvSettings.connectable = this.advSettings_connectable;
            }
        }
    }
    buildAdvData() {
        let serviceUuidInstance = this.advDataServiceUuids_serviceUuid;
        this.curAdvData.serviceUuids.length = 0;
        this.curAdvData.serviceUuids.push(serviceUuidInstance);
        let manufactureIdTmp = parseInt(this.advDataManufactureData_manufactureId);
        let manufactureValueTmp = this.advDataManufactureData_manufactureValue;
        let manufactureDataInstance = {
            manufactureId: manufactureIdTmp,
            manufactureValue: string2ArrayBuffer(manufactureValueTmp)
        };
        this.curAdvData.manufactureData.length = 0;
        this.curAdvData.manufactureData.push(manufactureDataInstance);
        let serviceUuid4Service = this.advDataServiceData_serviceUuid;
        let serviceValue4Service = this.advDataServiceData_serviceValue;
        let serviceDataInstance = {
            serviceUuid: serviceUuid4Service,
            serviceValue: string2ArrayBuffer(serviceValue4Service)
        };
        this.curAdvData.serviceData.length = 0;
        this.curAdvData.serviceData.push(serviceDataInstance);
    }
    buildAdvResponse() {
        if (!this.cbxAdvResponse) {
            return;
        }
        let serviceUuidInstance = this.advResponseServiceUuids_serviceUuid;
        this.curAdvResponse.serviceUuids.length = 0;
        this.curAdvResponse.serviceUuids.push(serviceUuidInstance);
        let manufactureIdTmp = parseInt(this.advResponseManufactureData_manufactureId);
        let manufactureValueTmp = this.advResponseManufactureData_manufactureValue;
        let manufactureDataInstance = {
            manufactureId: manufactureIdTmp,
            manufactureValue: string2ArrayBuffer(manufactureValueTmp)
        };
        this.curAdvResponse.manufactureData.length = 0;
        this.curAdvResponse.manufactureData.push(manufactureDataInstance);
        let serviceUuid4Service = this.advResponseServiceData_serviceUuid;
        let serviceValue4Service = this.advResponseServiceData_serviceValue;
        let serviceDataInstance = {
            serviceUuid: serviceUuid4Service,
            serviceValue: string2ArrayBuffer(serviceValue4Service)
        };
        this.curAdvResponse.serviceData.length = 0;
        this.curAdvResponse.serviceData.push(serviceDataInstance);
    }
    buildGattService() {
        // build descriptors
        let descriptors = [];
        let descriptor = {
            serviceUuid: this.curServiceUUID,
            characteristicUuid: this.curCharacteristicUUID,
            descriptorUuid: this.curDescriptorUUID,
            descriptorValue: string2ArrayBuffer(this.curDescriptorValue)
        };
        descriptors.push(descriptor);
        // build characteristics
        let characteristics = [];
        let cccValue = this.curCharacteristicValue;
        let characteristic = {
            serviceUuid: this.curServiceUUID,
            characteristicUuid: this.curCharacteristicUUID,
            characteristicValue: string2ArrayBuffer(cccValue),
            descriptors: descriptors
        };
        characteristics.push(characteristic);
        this.curGattService.serviceUuid = this.curServiceUUID;
        this.curGattService.characteristics = characteristics;
        this.curGattService.isPrimary = this.curServiceIsPrimary;
        this.curGattService.includeServices = [];
    }
    buildNotifyCharacteristic() {
        this.notifyCharacteristic_notifyCharacteristic = {
            serviceUuid: this.notifyCharacteristic_serviceUuid,
            characteristicUuid: this.notifyCharacteristic_characteristicUuid,
            characteristicValue: string2ArrayBuffer(this.notifyCharacteristic_characteristicValue),
            confirm: this.notifyCharacteristic_confirm
        };
    }
    buildServerResponse() {
        this.serverResponse = {
            deviceId: this.serverResponse_deviceId,
            transId: parseInt(this.serverResponse_transId),
            status: parseInt(this.serverResponse_status),
            offset: parseInt(this.serverResponse_offset),
            value: string2ArrayBuffer(this.serverResponse_value)
        };
    }
}
/**
* string to ArrayBuffer
* @param {*} str: the string to covert
* @return: ArrayBuffer
*/
function string2ArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}
loadDocument(new GattServer("1", undefined, {}));


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
/******/ 			"./pages/subManualApiTest/subGattTest/gattServer": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subGattTest/gattServer.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=gattServer.js.map