var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subGattTest/gattClient.ets?entry":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subGattTest/gattClient.ets?entry ***!
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
 * Gatt Client Test Page Of Bluetooth test
 */
const testImageDisplay_1 = __webpack_require__(/*! ../../../../Component/testImageDisplay */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets");
var _system_router_1  = globalThis.requireNativeModule('system.router');
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../../../Utils/ConfigData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts"));
const testDataModels_1 = __webpack_require__(/*! ../../../model/testDataModels */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testDataModels.ets");
const pageTitle_1 = __webpack_require__(/*! ../../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
const contentTable_1 = __webpack_require__(/*! ../../../../Component/contentTable */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/contentTable.ets");
const NO_GATT_CLIENT_OBJECT = "No GattClient object, please CreateGattClient firstly!";
const G_MAC = '08:FB:EA:19:48:0F';
class GattClientSetting extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.gattClientInstance = null;
        this.peripheralDeviceId = G_MAC;
        this.gattClientExist = false;
        this.__isOnBLECharacteristicChangeClick = new ObservedPropertySimple(false, this, "isOnBLECharacteristicChangeClick");
        this.__bleCharacteristicChangeInfo = new ObservedPropertySimple('', this, "bleCharacteristicChangeInfo");
        this.__serviceUUID = new ObservedPropertySimple('00001801-0000-1000-8000-00805f9b34fb', this, "serviceUUID");
        this.__characteristicUUID = new ObservedPropertySimple('00002b29-0000-1000-8000-00805f9b34fb', this, "characteristicUUID");
        this.__characteristicValue = new ObservedPropertySimple('CccValue', this, "characteristicValue");
        this.__descriptorUUID = new ObservedPropertySimple('00002902-0000-1000-8000-00805f9b34fb', this, "descriptorUUID");
        this.__descriptorValue = new ObservedPropertySimple('DesValue', this, "descriptorValue");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.gattClientInstance !== undefined) {
            this.gattClientInstance = params.gattClientInstance;
        }
        if (params.peripheralDeviceId !== undefined) {
            this.peripheralDeviceId = params.peripheralDeviceId;
        }
        if (params.gattClientExist !== undefined) {
            this.gattClientExist = params.gattClientExist;
        }
        if (params.isOnBLECharacteristicChangeClick !== undefined) {
            this.isOnBLECharacteristicChangeClick = params.isOnBLECharacteristicChangeClick;
        }
        if (params.bleCharacteristicChangeInfo !== undefined) {
            this.bleCharacteristicChangeInfo = params.bleCharacteristicChangeInfo;
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
        this.__isOnBLECharacteristicChangeClick.aboutToBeDeleted();
        this.__bleCharacteristicChangeInfo.aboutToBeDeleted();
        this.__serviceUUID.aboutToBeDeleted();
        this.__characteristicUUID.aboutToBeDeleted();
        this.__characteristicValue.aboutToBeDeleted();
        this.__descriptorUUID.aboutToBeDeleted();
        this.__descriptorValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get isOnBLECharacteristicChangeClick() {
        return this.__isOnBLECharacteristicChangeClick.get();
    }
    set isOnBLECharacteristicChangeClick(newValue) {
        this.__isOnBLECharacteristicChangeClick.set(newValue);
    }
    get bleCharacteristicChangeInfo() {
        return this.__bleCharacteristicChangeInfo.get();
    }
    set bleCharacteristicChangeInfo(newValue) {
        this.__bleCharacteristicChangeInfo.set(newValue);
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
        Row.create();
        Row.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("????????????MAC:");
        Text.fontSize(16);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.peripheralDeviceId, placeholder: "input peripheral deviceId." });
        TextInput.fontSize("15vp");
        TextInput.onChange((strInput) => {
            this.peripheralDeviceId = strInput;
            //???????????????
            if (strInput.length >= 17) {
                AppStorage.SetOrCreate('peripheralDeviceId', strInput);
            }
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        //        .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Column.create();
        Stack.create();
        Stack.height("0.25vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Column.create();
        Row.create();
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Row.backgroundColor({ "id": 16777318, "type": 10001, params: [] });
        Text.create("??????UUID:");
        Text.fontSize(15);
        Text.width(60);
        Text.pop();
        TextInput.create({ text: this.serviceUUID, placeholder: "input Service UUID" });
        TextInput.fontSize("15vp");
        TextInput.onChange((strInput) => {
            this.serviceUUID = strInput;
            if (strInput.length >= 36) {
                AppStorage.SetOrCreate('serviceUUID', strInput);
            }
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.create();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.backgroundColor({ "id": 16777318, "type": 10001, params: [] });
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.padding(5);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.justifyContent(FlexAlign.Start);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.alignItems(VerticalAlign.Center);
        Text.create("?????????UUID:");
        Text.fontSize(15);
        Text.width(60);
        Text.pop();
        TextInput.create({ text: this.characteristicUUID, placeholder: "input Characteristic UUID" });
        TextInput.fontSize("15vp");
        TextInput.onChange((strInput) => {
            this.characteristicUUID = strInput;
            if (strInput.length >= 36) {
                AppStorage.SetOrCreate('characteristicUUID', strInput);
            }
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.pop();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.create();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.backgroundColor({ "id": 16777318, "type": 10001, params: [] });
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.padding(5);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.justifyContent(FlexAlign.Start);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.alignItems(VerticalAlign.Center);
        Text.create("?????????Value:");
        Text.fontSize(15);
        Text.width(60);
        Text.pop();
        TextInput.create({ text: this.characteristicUUID, placeholder: "Characteristic Value" });
        TextInput.fontSize("15vp");
        TextInput.onChange((strInput) => {
            this.characteristicValue = strInput;
            if (strInput.length >= 1) {
                AppStorage.SetOrCreate('characteristicValue', strInput);
            }
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.pop();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.create();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.backgroundColor({ "id": 16777318, "type": 10001, params: [] });
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.padding(5);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.justifyContent(FlexAlign.Start);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.alignItems(VerticalAlign.Center);
        Text.create("?????????UUID:");
        Text.fontSize(15);
        Text.width(60);
        Text.pop();
        TextInput.create({ text: this.descriptorUUID, placeholder: "input descriptor UUID" });
        TextInput.fontSize("15vp");
        TextInput.onChange((strInput) => {
            this.descriptorUUID = strInput;
            if (strInput.length >= 36) {
                AppStorage.SetOrCreate('descriptorUUID', strInput);
            }
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.pop();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.create();
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.backgroundColor({ "id": 16777318, "type": 10001, params: [] });
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.padding(5);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.justifyContent(FlexAlign.Start);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.alignItems(VerticalAlign.Center);
        Text.create("?????????Value:");
        Text.fontSize(15);
        Text.width(60);
        Text.pop();
        TextInput.create({ text: this.descriptorUUID, placeholder: "descriptor Value" });
        TextInput.fontSize("15vp");
        TextInput.onChange((strInput) => {
            this.descriptorValue = strInput;
            if (strInput.length >= 1) {
                AppStorage.SetOrCreate('descriptorValue', strInput);
            }
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        //      .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Row.pop();
        Column.pop();
        Stack.create();
        Stack.height("0.25vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        //        .margin( { top: "1vp", left: "20vp", right: "20vp" } )
        Column.pop();
        Column.pop();
    }
}
class GattClient extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('GattClient', this, "message");
        this.__currentClick = new ObservedPropertySimple(-1, this, "currentClick");
        this.__showList = new ObservedPropertySimple(false, this, "showList");
        this.__btOnBLEConnectionStateChange = new ObservedPropertySimple('on:BLEConnectionStateChange', this, "btOnBLEConnectionStateChange");
        this.__isOnBLEConnectionStateChangeClick = new ObservedPropertySimple(false, this, "isOnBLEConnectionStateChangeClick");
        this.__bleConnectionStateInfo = AppStorage.GetOrCreate().setAndLink("bleConnectionStateInfo", 'Disconnected', this);
        this.__bleCharacteristicChangeInfo = AppStorage.GetOrCreate().setAndLink("bleCharacteristicChangeInfo", 'bleCharacteristicChangeInfo', this);
        this.__bleConnectionState = new ObservedPropertySimple(0, this, "bleConnectionState");
        this.__btOnBLECharacteristicChange = new ObservedPropertySimple('on:BLECharacteristicChange', this, "btOnBLECharacteristicChange");
        this.__isOnBLECharacteristicChangeClick = new ObservedPropertySimple(false, this, "isOnBLECharacteristicChangeClick");
        this.__serviceUUID = new ObservedPropertySimple('00001801-0000-1000-8000-00805f9b34fb', this, "serviceUUID");
        this.__characteristicUUID = new ObservedPropertySimple('00002b29-0000-1000-8000-00805f9b34fb', this, "characteristicUUID");
        this.__characteristicValue = new ObservedPropertySimple('CccValue', this, "characteristicValue");
        this.__descriptorUUID = new ObservedPropertySimple('00002902-0000-1000-8000-00805f9b34fb', this, "descriptorUUID");
        this.__descriptorValue = new ObservedPropertySimple('DesValue', this, "descriptorValue");
        this.__getServices = AppStorage.GetOrCreate().setAndLink("getServices", "", this);
        this.__deviceName = AppStorage.GetOrCreate().setAndLink("deviceName", "", this);
        this.__Rssi = AppStorage.GetOrCreate().setAndLink("Rssi", "", this);
        this.__read_CharacteristicValue = AppStorage.GetOrCreate().setAndLink("read_CharacteristicValue", "", this);
        this.__mtuSize = new ObservedPropertySimple(128, this, "mtuSize");
        this.gattClientInstance = null;
        this.peripheralDeviceId = G_MAC;
        this.gattClientExist = false;
        this.testItem = _system_router_1.getParams().testId;
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
        if (params.btOnBLEConnectionStateChange !== undefined) {
            this.btOnBLEConnectionStateChange = params.btOnBLEConnectionStateChange;
        }
        if (params.isOnBLEConnectionStateChangeClick !== undefined) {
            this.isOnBLEConnectionStateChangeClick = params.isOnBLEConnectionStateChangeClick;
        }
        if (params.bleConnectionState !== undefined) {
            this.bleConnectionState = params.bleConnectionState;
        }
        if (params.btOnBLECharacteristicChange !== undefined) {
            this.btOnBLECharacteristicChange = params.btOnBLECharacteristicChange;
        }
        if (params.isOnBLECharacteristicChangeClick !== undefined) {
            this.isOnBLECharacteristicChangeClick = params.isOnBLECharacteristicChangeClick;
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
        if (params.mtuSize !== undefined) {
            this.mtuSize = params.mtuSize;
        }
        if (params.gattClientInstance !== undefined) {
            this.gattClientInstance = params.gattClientInstance;
        }
        if (params.peripheralDeviceId !== undefined) {
            this.peripheralDeviceId = params.peripheralDeviceId;
        }
        if (params.gattClientExist !== undefined) {
            this.gattClientExist = params.gattClientExist;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__currentClick.aboutToBeDeleted();
        this.__showList.aboutToBeDeleted();
        this.__btOnBLEConnectionStateChange.aboutToBeDeleted();
        this.__isOnBLEConnectionStateChangeClick.aboutToBeDeleted();
        this.__bleConnectionStateInfo.aboutToBeDeleted();
        this.__bleCharacteristicChangeInfo.aboutToBeDeleted();
        this.__bleConnectionState.aboutToBeDeleted();
        this.__btOnBLECharacteristicChange.aboutToBeDeleted();
        this.__isOnBLECharacteristicChangeClick.aboutToBeDeleted();
        this.__serviceUUID.aboutToBeDeleted();
        this.__characteristicUUID.aboutToBeDeleted();
        this.__characteristicValue.aboutToBeDeleted();
        this.__descriptorUUID.aboutToBeDeleted();
        this.__descriptorValue.aboutToBeDeleted();
        this.__getServices.aboutToBeDeleted();
        this.__deviceName.aboutToBeDeleted();
        this.__Rssi.aboutToBeDeleted();
        this.__read_CharacteristicValue.aboutToBeDeleted();
        this.__mtuSize.aboutToBeDeleted();
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
    get btOnBLEConnectionStateChange() {
        return this.__btOnBLEConnectionStateChange.get();
    }
    set btOnBLEConnectionStateChange(newValue) {
        this.__btOnBLEConnectionStateChange.set(newValue);
    }
    get isOnBLEConnectionStateChangeClick() {
        return this.__isOnBLEConnectionStateChangeClick.get();
    }
    set isOnBLEConnectionStateChangeClick(newValue) {
        this.__isOnBLEConnectionStateChangeClick.set(newValue);
    }
    get bleConnectionStateInfo() {
        return this.__bleConnectionStateInfo.get();
    }
    set bleConnectionStateInfo(newValue) {
        this.__bleConnectionStateInfo.set(newValue);
    }
    get bleCharacteristicChangeInfo() {
        return this.__bleCharacteristicChangeInfo.get();
    }
    set bleCharacteristicChangeInfo(newValue) {
        this.__bleCharacteristicChangeInfo.set(newValue);
    }
    get bleConnectionState() {
        return this.__bleConnectionState.get();
    }
    set bleConnectionState(newValue) {
        this.__bleConnectionState.set(newValue);
    }
    get btOnBLECharacteristicChange() {
        return this.__btOnBLECharacteristicChange.get();
    }
    set btOnBLECharacteristicChange(newValue) {
        this.__btOnBLECharacteristicChange.set(newValue);
    }
    get isOnBLECharacteristicChangeClick() {
        return this.__isOnBLECharacteristicChangeClick.get();
    }
    set isOnBLECharacteristicChangeClick(newValue) {
        this.__isOnBLECharacteristicChangeClick.set(newValue);
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
    get mtuSize() {
        return this.__mtuSize.get();
    }
    set mtuSize(newValue) {
        this.__mtuSize.set(newValue);
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
        Column.backgroundColor({ "id": 16777311, "type": 10001, params: [] });
        Column.height('100%');
        //      PageTitle({detail: 'Gatt_Client??????'})
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
        //      PageTitle({detail: 'Gatt_Client??????'})
        Stack.pop();
        Stack.create();
        Stack.height("0.5vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Row.create();
        Row.width("100%");
        Text.create("GattClientSetting");
        Text.fontSize("20vp");
        Text.height(60);
        Text.width("80%");
        Text.padding({ left: "15vp" });
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
                View.create(new GattClientSetting("4", this, {}));
            }
            else {
                earlierCreatedChild_4.updateWithValueParams({});
                View.create(earlierCreatedChild_4);
            }
        }
        else {
            If.branchId(1);
            Column.create();
            Column.height(110);
            Column.width("95%");
            Column.backgroundColor({ "id": 125829123, "type": 10001, params: [] });
            Scroll.create();
            Scroll.scrollBarWidth(10);
            Scroll.scrollBar(BarState.Auto);
            Column.create();
            Column.width("100%");
            Text.create("????????????:");
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "10vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("100%");
            Text.pop();
            Text.create("????????????:" + this.message);
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "15vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("BLE????????????:" + this.bleConnectionStateInfo);
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "15vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("BLE????????????:" + this.bleCharacteristicChangeInfo);
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "15vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("getService:" + this.getServices);
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "15vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("deviceName:" + this.deviceName);
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "15vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("Rssi:" + this.Rssi);
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "15vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Text.create("readCharacteristicValue:" + this.read_CharacteristicValue);
            Text.fontSize("17vp");
            Text.margin({ top: "5vp", left: "15vp" });
            Text.textAlign(TextAlign.Start);
            Text.width("90%");
            Text.pop();
            Column.pop();
            Scroll.pop();
            Column.pop();
            //          Stack().height("0.5vp").backgroundColor("#000000");
            Column.create();
            //          Stack().height("0.5vp").backgroundColor("#000000");
            Column.height("80%");
            Text.create("????????????:");
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
            Scroll.height("100%");
            let earlierCreatedChild_5 = this.findChildById("5");
            if (earlierCreatedChild_5 == undefined) {
                View.create(new contentTable_1.ContentTable("5", this, { apiItems: testDataModels_1.initGattClientApiData() }));
            }
            else {
                earlierCreatedChild_5.updateWithValueParams({
                    apiItems: testDataModels_1.initGattClientApiData()
                });
                View.create(earlierCreatedChild_5);
            }
            Scroll.pop();
            //          Stack().height("0.5vp").backgroundColor("#000000");
            Column.pop();
        }
        If.pop();
        Column.pop();
        Column.pop();
    }
}
/**
* string to ArrayBuffer
* @param {*} str, the string object to
* @return:  ArrayBuffer
*/
function string2ArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}
// example: sleep(500).then(()=>{/*TODO after sleeping*/});
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
loadDocument(new GattClient("1", undefined, {}));


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
/******/ 			"./pages/subManualApiTest/subGattTest/gattClient": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subGattTest/gattClient.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=gattClient.js.map