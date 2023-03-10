var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subSppTest/sppClientTest.ets?entry":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subSppTest/sppClientTest.ets?entry ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * SPPClient Test Page Of Bluetooth test
 */
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../../../Utils/ConfigData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts"));
const LogUtil_1 = __importDefault(__webpack_require__(/*! ../../../../Utils/LogUtil */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/LogUtil.ts"));
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
const BluetoothModel_1 = __importDefault(__webpack_require__(/*! ../../../model/BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
const BluetoothDevice_1 = __importDefault(__webpack_require__(/*! ../../../model/BluetoothDevice */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothDevice.ts"));
const BluetoothDeviceController_1 = __importDefault(__webpack_require__(/*! ../../../controller/BluetoothDeviceController */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/controller/BluetoothDeviceController.ts"));
const pageTitle_1 = __webpack_require__(/*! ../../../../Component/pageTitle */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets");
const contentTable_1 = __webpack_require__(/*! ../../../../Component/contentTable */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/contentTable.ets");
const testDataModels_1 = __webpack_require__(/*! ../../../model/testDataModels */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testDataModels.ets");
const testImageDisplay_1 = __webpack_require__(/*! ../../../../Component/testImageDisplay */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets");
var _system_router_1  = globalThis.requireNativeModule('system.router');
let MODEL = "bluetoothModel:";
class SppClient extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple("", this, "message");
        this.__isConnection = new ObservedPropertySimple(false, this, "isConnection");
        this.__dataReadMessage = AppStorage.GetOrCreate().setAndLink("dataReadMessage", "", this);
        this.__btConnectionState = new ObservedPropertySimple(0, this, "btConnectionState");
        this.__profileType = new ObservedPropertySimple(0, this, "profileType");
        this.__connectionStateInfo = new ObservedPropertySimple("", this, "connectionStateInfo");
        this.stateBT = "";
        this.sppOption = {};
        this.uuid = "00001101-0000-1000-8000-00805f9b34fb";
        this.serverNumber = -1;
        this.clientNumber = -1;
        this.sppWriteText = '';
        this.__deviceId = new ObservedPropertySimple("08:FB:EA:19:48:0F", this, "deviceId");
        this.__writeData = new ObservedPropertySimple('11', this, "writeData");
        this.TAG_PAGE = ConfigData_1.default.TAG + 'Paired_Device ';
        this.__btEnable = AppStorage.GetOrCreate().setAndLink("bluetoothIsOn", false, this);
        this.__currentClick = new ObservedPropertySimple(-1, this, "currentClick");
        this.__pairingDevice = AppStorage.GetOrCreate().setAndLink("pairedDeviceInfo", new BluetoothDevice_1.default, this);
        this.__controller = AppStorage.GetOrCreate().setAndLink("btDeviceController", new BluetoothDeviceController_1.default, this);
        this.__pairPinCode = new ObservedPropertySimple('', this, "pairPinCode");
        this.testItem = _system_router_1.getParams().testId;
        this.pairDialog = new CustomDialogController({
            builder: () => {
                let jsDialog = new PairDialog("5", this, {
                    deviceName: this.pairingDevice.deviceName,
                    pinCode: this.pairPinCode,
                    action: (accept) => {
                        this.confirmPairing(accept);
                    }
                });
                jsDialog.setController(this.pairDialog);
                View.create(jsDialog);
            },
            alignment: DialogAlignment.Bottom,
            autoCancel: true
        }, this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.isConnection !== undefined) {
            this.isConnection = params.isConnection;
        }
        if (params.btConnectionState !== undefined) {
            this.btConnectionState = params.btConnectionState;
        }
        if (params.profileType !== undefined) {
            this.profileType = params.profileType;
        }
        if (params.connectionStateInfo !== undefined) {
            this.connectionStateInfo = params.connectionStateInfo;
        }
        if (params.stateBT !== undefined) {
            this.stateBT = params.stateBT;
        }
        if (params.sppOption !== undefined) {
            this.sppOption = params.sppOption;
        }
        if (params.uuid !== undefined) {
            this.uuid = params.uuid;
        }
        if (params.serverNumber !== undefined) {
            this.serverNumber = params.serverNumber;
        }
        if (params.clientNumber !== undefined) {
            this.clientNumber = params.clientNumber;
        }
        if (params.sppWriteText !== undefined) {
            this.sppWriteText = params.sppWriteText;
        }
        if (params.deviceId !== undefined) {
            this.deviceId = params.deviceId;
        }
        if (params.writeData !== undefined) {
            this.writeData = params.writeData;
        }
        if (params.TAG_PAGE !== undefined) {
            this.TAG_PAGE = params.TAG_PAGE;
        }
        if (params.currentClick !== undefined) {
            this.currentClick = params.currentClick;
        }
        if (params.pairPinCode !== undefined) {
            this.pairPinCode = params.pairPinCode;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.pairDialog !== undefined) {
            this.pairDialog = params.pairDialog;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__isConnection.aboutToBeDeleted();
        this.__dataReadMessage.aboutToBeDeleted();
        this.__btConnectionState.aboutToBeDeleted();
        this.__profileType.aboutToBeDeleted();
        this.__connectionStateInfo.aboutToBeDeleted();
        this.__deviceId.aboutToBeDeleted();
        this.__writeData.aboutToBeDeleted();
        this.__btEnable.aboutToBeDeleted();
        this.__currentClick.aboutToBeDeleted();
        this.__pairingDevice.aboutToBeDeleted();
        this.__controller.aboutToBeDeleted();
        this.__pairPinCode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get isConnection() {
        return this.__isConnection.get();
    }
    set isConnection(newValue) {
        this.__isConnection.set(newValue);
    }
    get dataReadMessage() {
        return this.__dataReadMessage.get();
    }
    set dataReadMessage(newValue) {
        this.__dataReadMessage.set(newValue);
    }
    get btConnectionState() {
        return this.__btConnectionState.get();
    }
    set btConnectionState(newValue) {
        this.__btConnectionState.set(newValue);
    }
    get profileType() {
        return this.__profileType.get();
    }
    set profileType(newValue) {
        this.__profileType.set(newValue);
    }
    get connectionStateInfo() {
        return this.__connectionStateInfo.get();
    }
    set connectionStateInfo(newValue) {
        this.__connectionStateInfo.set(newValue);
    }
    get deviceId() {
        return this.__deviceId.get();
    }
    set deviceId(newValue) {
        this.__deviceId.set(newValue);
    }
    get writeData() {
        return this.__writeData.get();
    }
    set writeData(newValue) {
        this.__writeData.set(newValue);
    }
    get btEnable() {
        return this.__btEnable.get();
    }
    set btEnable(newValue) {
        this.__btEnable.set(newValue);
    }
    get currentClick() {
        return this.__currentClick.get();
    }
    set currentClick(newValue) {
        this.__currentClick.set(newValue);
    }
    get pairingDevice() {
        return this.__pairingDevice.get();
    }
    set pairingDevice(newValue) {
        this.__pairingDevice.set(newValue);
    }
    get controller() {
        return this.__controller.get();
    }
    set controller(newValue) {
        this.__controller.set(newValue);
    }
    get pairPinCode() {
        return this.__pairPinCode.get();
    }
    set pairPinCode(newValue) {
        this.__pairPinCode.set(newValue);
    }
    aboutToAppear() {
        this.btEnable = BluetoothModel_1.default.isStateOn();
        AppStorage.SetOrCreate('bluetoothIsOn', this.btEnable);
        AppStorage.SetOrCreate('inputDeviceId', this.deviceId);
        AppStorage.SetOrCreate('inputUuid', this.uuid);
        AppStorage.SetOrCreate('writeData', this.writeData);
    }
    render() {
        Row.create();
        Row.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        Row.height('100%');
        Row.alignItems(VerticalAlign.Top);
        Column.create();
        Column.width('100%');
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
        Stack.height("0.5vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Row.create();
        Row.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("????????????MAC???");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.deviceId, placeholder: "?????????mac??????" });
        TextInput.fontSize("15vp");
        TextInput.onChange((str) => {
            this.deviceId = str;
            AppStorage.SetOrCreate('inputDeviceId', str);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.backgroundColor({ "id": 16777318, "type": 10001, params: [] });
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("????????????UUID???");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.uuid, placeholder: "?????????uuid" });
        TextInput.fontSize("15vp");
        TextInput.onChange((str) => {
            this.uuid = str;
            AppStorage.SetOrCreate('inputUuid', str);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("???????????????????????????");
        Text.fontSize(17);
        Text.width(95);
        Text.pop();
        TextInput.create({ text: this.writeData, placeholder: "????????????????????????" });
        TextInput.fontSize("15vp");
        TextInput.onChange((str) => {
            this.writeData = str;
            AppStorage.SetOrCreate('writeData', str);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("?????????????????????");
        Text.fontSize("17vp");
        Text.pop();
        Text.create(this.dataReadMessage);
        Text.fontSize("15vp");
        Text.width("80%");
        Text.borderRadius(1);
        Text.pop();
        Row.pop();
        Column.create();
        Column.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Column.visibility(Visibility.Visible);
        Text.create("????????????????????? " + this.message);
        Text.fontSize("17vp");
        Text.padding(10);
        Text.textAlign(TextAlign.Center);
        Text.pop();
        Column.pop();
        Column.create();
        Column.height("75%");
        Scroll.create();
        Scroll.width(ConfigData_1.default.WH_100_100);
        Scroll.align(Alignment.TopStart);
        Scroll.layoutWeight(1);
        Scroll.margin({ top: { "id": 125829737, "type": 10002, params: [] } });
        Scroll.height("100%");
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new contentTable_1.ContentTable("4", this, { apiItems: testDataModels_1.initSppClientApiData() })); //????????????
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                apiItems: testDataModels_1.initSppClientApiData()
            });
            View.create(earlierCreatedChild_4);
        }
        Scroll.pop();
        Column.pop();
        Column.pop();
        Column.pop();
        Row.pop();
    }
    sppClientClose() {
        LogUtil_1.default.info(MODEL + 'sppCloseClientSocket clientNumber: ' + JSON.stringify(this.clientNumber));
        _ohos_bluetooth_1.sppCloseClientSocket(this.clientNumber);
        this.message = '???????????? clientNumber' + this.clientNumber;
    }
    /**
     * ?????????clientNumber????????????????????????/?????????socket???id
     * @param number
     */
    acceptClientSocket(number) {
        console.log('spp clientSocket socketID: ' + number);
        // ?????????clientNumber????????????????????????/?????????socket???id???
        this.clientNumber = number;
    }
    dataRead(dataBuffer) {
        const data = new Uint8Array(dataBuffer);
        console.log('spp bluetooth read is: ' + data);
        if (data != null) {
            this.dataReadMessage = "????????????" + JSON.stringify(data);
        }
        else {
            this.dataReadMessage = "????????????";
        }
    }
    /**
    * ????????????arrayBuffer
    * @param {*} str ????????????????????????
    * @returns ?????? arrayBuffer
    */
    strToArrayBuffer(str) {
        let array = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) {
            array[i] = str.charCodeAt(i);
        }
        return array.buffer;
    }
    /**
    * Pair device
    * @param device
    */
    pairDevice(deviceId) {
        this.controller.pair(this.deviceId, (pinCode) => {
            LogUtil_1.default.info(this.TAG_PAGE + 'pairDevice success callback : pinCode = ' + pinCode);
            // show pair pin dialog
            this.pairPinCode = pinCode;
            this.pairingDevice.deviceId = this.deviceId;
            this.pairingDevice.deviceName = this.deviceId;
            this.pairDialog.open();
        }, () => {
            LogUtil_1.default.info(this.TAG_PAGE + 'pairDevice error callback');
            this.showPairFailedDialog();
        });
    }
    /**
     * Confirm pairing
     */
    confirmPairing(accept) {
        LogUtil_1.default.info(this.TAG_PAGE + 'confirmPairing : pairingDevice + ' + JSON.stringify(this.pairingDevice));
        this.controller.confirmPairing(this.pairingDevice.deviceId, accept);
    }
    /**
     * Show pair failed dialog
     */
    showPairFailedDialog() {
        this.showPairingFailedDialog();
    }
    /**
     * Show device illegal prompt dialog
     */
    showDeviceIllegalPromptDialog(action) {
        AlertDialog.show({
            message: { "id": 16777236, "type": 10003, params: [] },
            primaryButton: {
                value: { "id": 16777260, "type": 10003, params: [] },
                action: () => {
                    LogUtil_1.default.info(this.TAG_PAGE + 'Closed callbacks');
                }
            },
            secondaryButton: {
                value: { "id": 16777244, "type": 10003, params: [] },
                action: () => {
                    action();
                    LogUtil_1.default.info(this.TAG_PAGE + `AlertDialog success:`);
                }
            },
            alignment: DialogAlignment.Bottom
        });
    }
    /**
     * Show connect Failed Dialog
     */
    showConnectFailedDialog() {
        showDialog({ "id": 16777238, "type": 10003, params: [] }, { "id": 16777239, "type": 10003, params: [] }, { "id": 16777243, "type": 10003, params: [] });
    }
    /**
     * Show pairing failed title Dialog
     */
    showPairingFailedDialog() {
        showDialog({ "id": 16777278, "type": 10003, params: [] }, { "id": 16777277, "type": 10003, params: [] }, { "id": 16777243, "type": 10003, params: [] });
    }
}
class PairDialog extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.dialogController = undefined;
        this.action = undefined;
        this.deviceName = undefined;
        this.pinCode = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
        if (params.action !== undefined) {
            this.action = params.action;
        }
        if (params.deviceName !== undefined) {
            this.deviceName = params.deviceName;
        }
        if (params.pinCode !== undefined) {
            this.pinCode = params.pinCode;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    setController(ctr) {
        this.dialogController = ctr;
    }
    aboutToAppear() {
        LogUtil_1.default.log(ConfigData_1.default.TAG + `bluetooth PairDialog aboutToAppear pinCode = ${this.pinCode}`);
    }
    render() {
        Column.create();
        Column.padding({
            left: { "id": 16777381, "type": 10002, params: [] },
            right: { "id": 16777381, "type": 10002, params: [] }
        });
        Column.width(ConfigData_1.default.WH_100_100);
        Text.create({ "id": 16777248, "type": 10003, params: [] });
        Text.fontSize({ "id": 16777402, "type": 10002, params: [] });
        Text.height({ "id": 16777527, "type": 10002, params: [] });
        Text.width(ConfigData_1.default.WH_100_100);
        Text.padding({
            left: { "id": 16777381, "type": 10002, params: [] },
            top: { "id": 16777370, "type": 10002, params: [] },
            bottom: { "id": 16777370, "type": 10002, params: [] }
        });
        Text.pop();
        Column.create();
        Column.width(ConfigData_1.default.WH_100_100);
        Column.padding({
            left: { "id": 16777381, "type": 10002, params: [] },
            right: { "id": 16777381, "type": 10002, params: [] }
        });
        If.create();
        if (this.pinCode) {
            If.branchId(0);
            Text.create({ "id": 16777246, "type": 10003, params: [this.deviceName, this.deviceName] });
            Text.fontSize({ "id": 16777398, "type": 10002, params: [] });
            Text.width(ConfigData_1.default.WH_100_100);
            Text.margin({
                top: { "id": 16777370, "type": 10002, params: [] },
                bottom: { "id": 16777370, "type": 10002, params: [] }
            });
            Text.pop();
            Text.create(`${this.pinCode}`);
            Text.fontSize({ "id": 16777432, "type": 10002, params: [] });
            Text.fontWeight(FontWeight.Bolder);
            Text.width(ConfigData_1.default.WH_100_100);
            Text.textAlign(TextAlign.Center);
            Text.margin({
                top: { "id": 16777409, "type": 10002, params: [] },
                bottom: { "id": 16777409, "type": 10002, params: [] }
            });
            Text.pop();
        }
        else {
            If.branchId(1);
            Text.create({ "id": 16777247, "type": 10003, params: [] });
            Text.fontSize({ "id": 16777398, "type": 10002, params: [] });
            Text.width(ConfigData_1.default.WH_100_100);
            Text.margin({
                bottom: { "id": 16777464, "type": 10002, params: [] }
            });
            Text.pop();
            Text.create(this.deviceName);
            Text.fontSize({ "id": 16777398, "type": 10002, params: [] });
            Text.width(ConfigData_1.default.WH_100_100);
            Text.fontWeight(FontWeight.Bold);
            Text.pop();
        }
        If.pop();
        // button
        Flex.create({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
        // button
        Flex.width(ConfigData_1.default.WH_100_100);
        // button
        Flex.height({ "id": 16777527, "type": 10002, params: [] });
        Button.createWithChild();
        Button.backgroundColor({ "id": 16777322, "type": 10001, params: [] });
        Button.width({ "id": 16777487, "type": 10002, params: [] });
        Button.height({ "id": 16777517, "type": 10002, params: [] });
        Button.flexGrow(1);
        Button.onClick(() => {
            this.dialogController.close();
            this.action(false);
        });
        Text.create({ "id": 16777260, "type": 10003, params: [] });
        Text.fontSize({ "id": 16777398, "type": 10002, params: [] });
        Text.fontColor(Color.Blue);
        Text.pop();
        Button.pop();
        Divider.create();
        Divider.height({ "id": 16777498, "type": 10002, params: [] });
        Divider.strokeWidth(0.5);
        Divider.vertical(true);
        Divider.color(({ "id": 16777304, "type": 10001, params: [] }));
        Button.createWithChild();
        Button.backgroundColor({ "id": 16777322, "type": 10001, params: [] });
        Button.width({ "id": 16777487, "type": 10002, params: [] });
        Button.height({ "id": 16777517, "type": 10002, params: [] });
        Button.flexGrow(1);
        Button.onClick(() => {
            this.dialogController.close();
            this.action(true);
        });
        Text.create({ "id": 16777244, "type": 10003, params: [] });
        Text.fontSize({ "id": 16777398, "type": 10002, params: [] });
        Text.fontColor(Color.Blue);
        Text.pop();
        Button.pop();
        // button
        Flex.pop();
        Column.pop();
        Column.pop();
    }
}
/**
 * Pair mode prompt
 * @param dialogTitle Dialog title
 * @param dialogMessage Dialog message
 * @param buttonValue Dialog buttonValue
 */
function showDialog(dialogTitle, dialogMessage, buttonValue) {
    AlertDialog.show({
        title: dialogTitle,
        message: dialogMessage,
        confirm: {
            value: buttonValue,
            action: () => {
                LogUtil_1.default.info('Button-clicking callback');
            }
        },
        cancel: () => {
            LogUtil_1.default.info('Closed callbacks');
        },
        alignment: DialogAlignment.Bottom
    });
}
loadDocument(new SppClient("1", undefined, {}));


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
/******/ 			"./pages/subManualApiTest/subSppTest/sppClientTest": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/subManualApiTest/subSppTest/sppClientTest.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=sppClientTest.js.map