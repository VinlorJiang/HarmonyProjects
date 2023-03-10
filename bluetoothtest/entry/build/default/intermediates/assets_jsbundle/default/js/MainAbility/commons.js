(globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"] = globalThis["webpackChunk_78b3af9a3d4590e7047044e12e71f107"] || []).push([["commons"],{

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/autoContentTable.ets":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/autoContentTable.ets ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoContentTable = void 0;
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
 *  Auto Test ContentTable Component Page Of Bluetooth test
 */
__webpack_require__(/*! ../MainAbility/model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
__webpack_require__(/*! @ohos.events.emitter */ "../../api/@ohos.events.emitter.d.ts");
__webpack_require__(/*! @system.prompt */ "../../api/@system.prompt.d.ts");
class AutoContentTable extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.autoItemsx = undefined;
        this.testItem = undefined;
        this.__currentAutoItem = new ObservedPropertyObject({}, this, "currentAutoItem");
        this.__autoItems = new ObservedPropertyObject([], this, "autoItems");
        this.__changeIndex = new SynchedPropertySimpleOneWay(params.changeIndex, this, "changeIndex");
        this.__localName = new ObservedPropertySimple('dayu'
        //  @State currentIndex: number = 1
        //  @State textResult:string ="None"
        //  @StorageLink('pairedMac') pairedMac: string = "";
        , this, "localName");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.autoItemsx !== undefined) {
            this.autoItemsx = params.autoItemsx;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.currentAutoItem !== undefined) {
            this.currentAutoItem = params.currentAutoItem;
        }
        if (params.autoItems !== undefined) {
            this.autoItems = params.autoItems;
        }
        this.changeIndex = params.changeIndex;
        if (params.localName !== undefined) {
            this.localName = params.localName;
        }
    }
    aboutToBeDeleted() {
        this.__currentAutoItem.aboutToBeDeleted();
        this.__autoItems.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        this.__localName.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get currentAutoItem() {
        return this.__currentAutoItem.get();
    }
    set currentAutoItem(newValue) {
        this.__currentAutoItem.set(newValue);
    }
    get autoItems() {
        return this.__autoItems.get();
    }
    set autoItems(newValue) {
        this.__autoItems.set(newValue);
    }
    get changeIndex() {
        return this.__changeIndex.get();
    }
    set changeIndex(newValue) {
        this.__changeIndex.set(newValue);
    }
    get localName() {
        return this.__localName.get();
    }
    set localName(newValue) {
        this.__localName.set(newValue);
    }
    //  @State currentIndex: number = 1
    //  @State textResult:string ="None"
    //  @StorageLink('pairedMac') pairedMac: string = "";
    IngredientItem(autoItem, index) {
        Stack.create();
        Stack.height(40);
        Stack.borderRadius(10);
        Stack.margin({ top: 3, bottom: 3 });
        Stack.backgroundColor({ "id": 16777321, "type": 10001, params: [] });
        Flex.create();
        Flex.create({ alignItems: ItemAlign.Center });
        Flex.height(30);
        Flex.width("10%");
        Flex.padding({ left: 10 });
        Image.create({ "id": 16777560, "type": 20000, params: [] });
        Image.objectFit(ImageFit.Contain);
        Image.autoResize(false);
        Image.height(26);
        Image.width(25);
        Flex.pop();
        Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Start });
        Flex.height(30);
        Flex.layoutWeight(6);
        Row.create();
        Row.height(30);
        Row.width("70%");
        Text.create(autoItem.method);
        Text.fontSize("17vp");
        Text.margin({ top: "3vp", bottom: "3vp", left: "10vp" });
        Text.textAlign(TextAlign.Start);
        Text.height(40);
        Text.width(200);
        Text.pop();
        Row.pop();
        Flex.pop();
        Flex.create({ alignItems: ItemAlign.Center });
        Flex.layoutWeight(3);
        Flex.padding({ left: 10 });
        Text.create(this.changeIndex >= 0 ? this.getCurrentState(index) : autoItem.result);
        Text.margin({ left: "10vp" });
        Text.fontSize("17vp");
        Text.flexGrow(1);
        Text.pop();
        Flex.pop();
        Flex.pop();
        Stack.pop();
    }
    getCurrentState(index) {
        //    return this.autoItems[index].result
        if (index <= this.changeIndex)
            this.autoItemsx[index].result = 'pass';
        return this.autoItemsx[index].result;
    }
    aboutToAppear() {
        console.log("auto??????????????????");
        //    emitter.on({ eventId: 1 }, (eventData) => {
        //      console.log(JSON.stringify(eventData.data) );
        //    });
        //?????????????????????
        this.autoItemsx = this.autoItems;
    }
    //  onIndexChange(){
    //    this.autoItemsx[this.changeIndex].result = this.testState?"Pass":"Fail"
    //    console.log("????????????")
    //  }
    render() {
        Column.create();
        Column.height("80%");
        Column.padding({ top: 5, right: 10, left: 10 });
        Scroll.create();
        Scroll.scrollBarWidth(20);
        Flex.create({
            direction: FlexDirection.Column,
            justifyContent: FlexAlign.SpaceBetween,
            alignItems: ItemAlign.Start
        });
        ForEach.create("1", this, ObservedObject.GetRawObject(this.autoItems), (item, index) => {
            this.IngredientItem(item, index);
        });
        ForEach.pop();
        Flex.pop();
        Scroll.pop();
        Column.pop();
    }
}
exports.AutoContentTable = AutoContentTable;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/contentTable.ets":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/contentTable.ets ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentTable = exports.InputDialog = exports.SetScanModeDialog = exports.GetProfileConnSateDialog = void 0;
/*
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
 *  ContentTable Component Page Of Bluetooth test
 */
__webpack_require__(/*! ../MainAbility/model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
class GetProfileConnSateDialog extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.hitText = undefined;
        this.getProfileList = [
            { value: 'A2DP_SOURCE' },
            { value: 'HANDS_FREE_AUDIO_GATEWAY' },
            { value: 'HID_HOST' }
        ];
        this.__currentClick = new ObservedPropertySimple(1, this, "currentClick");
        this.__textValue = new SynchedPropertySimpleTwoWay(params.textValue, this, "textValue");
        this.__inputValue = new SynchedPropertySimpleTwoWay(params.inputValue, this, "inputValue");
        this.__apiItem = new SynchedPropertyObjectTwoWay(params.apiItem, this, "apiItem");
        this.__currentIndex = new SynchedPropertySimpleTwoWay(params.currentIndex, this, "currentIndex");
        this.__changeIndex = new SynchedPropertySimpleTwoWay(params.changeIndex, this, "changeIndex");
        this.controller = undefined;
        this.cancel = undefined;
        this.confirm = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.hitText !== undefined) {
            this.hitText = params.hitText;
        }
        if (params.getProfileList !== undefined) {
            this.getProfileList = params.getProfileList;
        }
        if (params.currentClick !== undefined) {
            this.currentClick = params.currentClick;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.cancel !== undefined) {
            this.cancel = params.cancel;
        }
        if (params.confirm !== undefined) {
            this.confirm = params.confirm;
        }
    }
    aboutToBeDeleted() {
        this.__currentClick.aboutToBeDeleted();
        this.__textValue.aboutToBeDeleted();
        this.__inputValue.aboutToBeDeleted();
        this.__apiItem.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get currentClick() {
        return this.__currentClick.get();
    }
    set currentClick(newValue) {
        this.__currentClick.set(newValue);
    }
    get textValue() {
        return this.__textValue.get();
    }
    set textValue(newValue) {
        this.__textValue.set(newValue);
    }
    get inputValue() {
        return this.__inputValue.get();
    }
    set inputValue(newValue) {
        this.__inputValue.set(newValue);
    }
    get apiItem() {
        return this.__apiItem.get();
    }
    set apiItem(newValue) {
        this.__apiItem.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get changeIndex() {
        return this.__changeIndex.get();
    }
    set changeIndex(newValue) {
        this.__changeIndex.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    render() {
        Column.create();
        Text.create(this.hitText);
        Text.fontSize(20);
        Text.margin({ top: 10, bottom: 10 });
        Text.pop();
        Select.create(this.getProfileList);
        Select.selected(this.currentClick);
        Select.value(this.getProfileList[this.currentClick].value);
        Select.font({ size: 20 });
        Select.selectedOptionFont({ size: 20 });
        Select.optionFont({ size: 17 });
        Select.height(80);
        Select.width("90%");
        Select.onSelect((index) => {
            console.info("Select:" + index);
            this.currentClick = index;
        });
        Select.pop();
        Flex.create({ justifyContent: FlexAlign.SpaceAround });
        Flex.margin({ bottom: 10 });
        Button.createWithLabel('??????');
        Button.onClick(() => {
            this.controller.close();
            this.cancel();
        });
        Button.backgroundColor(0xffffff);
        Button.fontColor(Color.Black);
        Button.pop();
        Button.createWithLabel('??????');
        Button.onClick(() => {
            this.inputValue = this.currentClick;
            this.changeIndex = this.currentIndex;
            //TODO: ??????????????????????????????
            if (true) {
                let message = "";
                message = this.apiItem.api(this.currentClick, this.pairedMac);
                this.apiItem.result = this.getProfileList[this.currentClick].value + "??????:" + message;
                console.info("this.apiItem.result:" + this.apiItem.result);
            }
            else {}
            this.controller.close();
            this.confirm(this.inputValue);
        });
        Button.backgroundColor(0xffffff);
        Button.fontColor(Color.Red);
        Button.pop();
        Flex.pop();
        Column.pop();
    }
}
exports.GetProfileConnSateDialog = GetProfileConnSateDialog;
class SetScanModeDialog extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.hitText = undefined;
        this.scanModeList = [
            { value: 'SCAN_MODE_NONE' },
            { value: 'CONNECTABLE' },
            { value: 'GENERAL_DISCOVERABLE' },
            { value: 'LIMITED_DISCOVERABLE' },
            { value: 'CONNECTABLE_GENERAL_DISCOVERABLE' },
            { value: 'CONNECTABLE_LIMITED_DISCOVERABLE' }
        ];
        this.__currentClick = new ObservedPropertySimple(4, this, "currentClick");
        this.__textValue = new SynchedPropertySimpleTwoWay(params.textValue, this, "textValue");
        this.__inputValue = new SynchedPropertySimpleTwoWay(params.inputValue, this, "inputValue");
        this.__apiItem = new SynchedPropertyObjectTwoWay(params.apiItem, this, "apiItem");
        this.__currentIndex = new SynchedPropertySimpleTwoWay(params.currentIndex, this, "currentIndex");
        this.__changeIndex = new SynchedPropertySimpleTwoWay(params.changeIndex, this, "changeIndex");
        this.__duration = new ObservedPropertySimple(0, this, "duration");
        this.controller = undefined;
        this.cancel = undefined;
        this.confirm = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.hitText !== undefined) {
            this.hitText = params.hitText;
        }
        if (params.scanModeList !== undefined) {
            this.scanModeList = params.scanModeList;
        }
        if (params.currentClick !== undefined) {
            this.currentClick = params.currentClick;
        }
        if (params.duration !== undefined) {
            this.duration = params.duration;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.cancel !== undefined) {
            this.cancel = params.cancel;
        }
        if (params.confirm !== undefined) {
            this.confirm = params.confirm;
        }
    }
    aboutToBeDeleted() {
        this.__currentClick.aboutToBeDeleted();
        this.__textValue.aboutToBeDeleted();
        this.__inputValue.aboutToBeDeleted();
        this.__apiItem.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        this.__duration.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get currentClick() {
        return this.__currentClick.get();
    }
    set currentClick(newValue) {
        this.__currentClick.set(newValue);
    }
    get textValue() {
        return this.__textValue.get();
    }
    set textValue(newValue) {
        this.__textValue.set(newValue);
    }
    get inputValue() {
        return this.__inputValue.get();
    }
    set inputValue(newValue) {
        this.__inputValue.set(newValue);
    }
    get apiItem() {
        return this.__apiItem.get();
    }
    set apiItem(newValue) {
        this.__apiItem.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get changeIndex() {
        return this.__changeIndex.get();
    }
    set changeIndex(newValue) {
        this.__changeIndex.set(newValue);
    }
    get duration() {
        return this.__duration.get();
    }
    set duration(newValue) {
        this.__duration.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    render() {
        Column.create();
        Text.create(this.hitText);
        Text.fontSize(20);
        Text.margin({ top: 10, bottom: 10 });
        Text.pop();
        Select.create(this.scanModeList);
        Select.selected(this.currentClick);
        Select.value(this.scanModeList[this.currentClick].value);
        Select.font({ size: 12 });
        Select.selectedOptionFont({ size: 12 });
        Select.optionFont({ size: 12 });
        Select.height(60);
        Select.width("90%");
        Select.onSelect((index) => {
            console.info("Select:" + index);
            this.currentClick = index;
        });
        Select.pop();
        TextInput.create({
            placeholder: '?????????????????????',
            text: this.duration.toString(),
            type: InputType.Number,
        });
        TextInput.height(60);
        TextInput.width('90%');
        TextInput.onChange((value) => {
            if (value == "") {
                this.duration = 0;
            }
            else {
                this.duration = parseInt(value) == nil ? 0 : parseInt(value);
            }
        });
        Flex.create({ justifyContent: FlexAlign.SpaceAround });
        Flex.margin({ bottom: 10 });
        Button.createWithLabel('??????');
        Button.onClick(() => {
            this.controller.close();
            this.cancel();
        });
        Button.backgroundColor(0xffffff);
        Button.fontColor(Color.Black);
        Button.pop();
        Button.createWithLabel('??????');
        Button.onClick(() => {
            this.inputValue = this.currentClick;
            this.changeIndex = this.currentIndex;
            //TODO: ??????????????????????????????
            if (true) {
                let message = {};
                message = this.apiItem.api(this.currentClick, this.duration);
                //              this.apiItem.result = message.mod.toString() + message.duration.toString()
                this.apiItem.result = "??????:" + this.scanModeList[message.mod].value + "??????:" + message.duration.toString();
                console.info("this.apiItem.result:" + this.apiItem.result);
            }
            else {}
            this.controller.close();
            this.confirm(this.inputValue);
        });
        Button.backgroundColor(0xffffff);
        Button.fontColor(Color.Red);
        Button.pop();
        Flex.pop();
        Column.pop();
    }
}
exports.SetScanModeDialog = SetScanModeDialog;
class InputDialog extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.hitText = undefined;
        this.__textValue = new SynchedPropertySimpleTwoWay(params.textValue, this, "textValue");
        this.__inputValue = new SynchedPropertySimpleTwoWay(params.inputValue, this, "inputValue");
        this.__apiItem = new SynchedPropertyObjectTwoWay(params.apiItem, this, "apiItem");
        this.__currentIndex = new SynchedPropertySimpleTwoWay(params.currentIndex, this, "currentIndex");
        this.__changeIndex = new SynchedPropertySimpleTwoWay(params.changeIndex, this, "changeIndex");
        this.controller = undefined;
        this.cancel = undefined;
        this.confirm = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.hitText !== undefined) {
            this.hitText = params.hitText;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.cancel !== undefined) {
            this.cancel = params.cancel;
        }
        if (params.confirm !== undefined) {
            this.confirm = params.confirm;
        }
    }
    aboutToBeDeleted() {
        this.__textValue.aboutToBeDeleted();
        this.__inputValue.aboutToBeDeleted();
        this.__apiItem.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get textValue() {
        return this.__textValue.get();
    }
    set textValue(newValue) {
        this.__textValue.set(newValue);
    }
    get inputValue() {
        return this.__inputValue.get();
    }
    set inputValue(newValue) {
        this.__inputValue.set(newValue);
    }
    get apiItem() {
        return this.__apiItem.get();
    }
    set apiItem(newValue) {
        this.__apiItem.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get changeIndex() {
        return this.__changeIndex.get();
    }
    set changeIndex(newValue) {
        this.__changeIndex.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    render() {
        Column.create();
        Text.create(this.hitText);
        Text.fontSize(20);
        Text.margin({ top: 10, bottom: 10 });
        Text.pop();
        TextInput.create({ placeholder: '', text: this.textValue });
        TextInput.height(60);
        TextInput.width('90%');
        TextInput.onChange((value) => {
            this.textValue = value;
        });
        Flex.create({ justifyContent: FlexAlign.SpaceAround });
        Flex.margin({ bottom: 10 });
        Button.createWithLabel('??????');
        Button.onClick(() => {
            this.controller.close();
            this.cancel();
        });
        Button.backgroundColor(0xffffff);
        Button.fontColor(Color.Black);
        Button.pop();
        Button.createWithLabel('??????');
        Button.onClick(() => {
            this.inputValue = this.textValue;
            this.changeIndex = this.currentIndex;
            //TODO: ??????????????????????????????
            let message = "";
            if (true) {
                message = this.apiItem.api(this.textValue);
                this.apiItem.result = message;
            }
            else {}
            this.controller.close();
            this.confirm(this.inputValue);
        });
        Button.backgroundColor(0xffffff);
        Button.fontColor(Color.Red);
        Button.pop();
        Flex.pop();
        Column.pop();
    }
}
exports.InputDialog = InputDialog;
class ContentTable extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.testItem = undefined;
        this.__currentApiItem = new ObservedPropertyObject({}, this, "currentApiItem");
        this.__apiItems = new ObservedPropertyObject([], this, "apiItems");
        this.__changeIndex = new ObservedPropertySimple(-1, this, "changeIndex");
        this.__localName = new ObservedPropertySimple('dayu1', this, "localName");
        this.__currentIndex = new ObservedPropertySimple(1, this, "currentIndex");
        this.__pairedMac = AppStorage.GetOrCreate().setAndLink("pairedMac", "", this);
        this.getProfileConnSateDialog = new CustomDialogController({
            builder: () => {
                let jsDialog = new GetProfileConnSateDialog("2", this, {
                    hitText: "??????????????????",
                    cancel: this.onCancel,
                    confirm: this.onAccept,
                    textValue: this.__localName,
                    inputValue: this.__localName,
                    currentIndex: this.__currentIndex,
                    apiItem: this.__currentApiItem,
                    changeIndex: this.__changeIndex,
                });
                jsDialog.setController(this.getProfileConnSateDialog);
                View.create(jsDialog);
            },
            cancel: this.onCancel(),
            autoCancel: true
        }, this);
        this.setScanModelDialog = new CustomDialogController({
            builder: () => {
                let jsDialog = new SetScanModeDialog("3", this, {
                    hitText: "??????????????????",
                    cancel: this.onCancel,
                    confirm: this.onAccept,
                    textValue: this.__localName,
                    inputValue: this.__localName,
                    currentIndex: this.__currentIndex,
                    apiItem: this.__currentApiItem,
                    changeIndex: this.__changeIndex,
                });
                jsDialog.setController(this.setScanModelDialog);
                View.create(jsDialog);
            },
            cancel: this.onCancel(),
            autoCancel: true
        }, this);
        this.inputDialog = new CustomDialogController({
            builder: () => {
                let jsDialog = new InputDialog("4", this, {
                    hitText: "?????????????????????",
                    cancel: this.onCancel,
                    confirm: this.onAccept,
                    textValue: this.__localName,
                    inputValue: this.__localName,
                    currentIndex: this.__currentIndex,
                    apiItem: this.__currentApiItem,
                    changeIndex: this.__changeIndex,
                });
                jsDialog.setController(this.inputDialog);
                View.create(jsDialog);
            },
            cancel: this.onCancel(),
            autoCancel: true
        }, this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.currentApiItem !== undefined) {
            this.currentApiItem = params.currentApiItem;
        }
        if (params.apiItems !== undefined) {
            this.apiItems = params.apiItems;
        }
        if (params.changeIndex !== undefined) {
            this.changeIndex = params.changeIndex;
        }
        if (params.localName !== undefined) {
            this.localName = params.localName;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.getProfileConnSateDialog !== undefined) {
            this.getProfileConnSateDialog = params.getProfileConnSateDialog;
        }
        if (params.setScanModelDialog !== undefined) {
            this.setScanModelDialog = params.setScanModelDialog;
        }
        if (params.inputDialog !== undefined) {
            this.inputDialog = params.inputDialog;
        }
    }
    aboutToBeDeleted() {
        this.__currentApiItem.aboutToBeDeleted();
        this.__apiItems.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        this.__localName.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__pairedMac.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get currentApiItem() {
        return this.__currentApiItem.get();
    }
    set currentApiItem(newValue) {
        this.__currentApiItem.set(newValue);
    }
    get apiItems() {
        return this.__apiItems.get();
    }
    set apiItems(newValue) {
        this.__apiItems.set(newValue);
    }
    get changeIndex() {
        return this.__changeIndex.get();
    }
    set changeIndex(newValue) {
        this.__changeIndex.set(newValue);
    }
    get localName() {
        return this.__localName.get();
    }
    set localName(newValue) {
        this.__localName.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get pairedMac() {
        return this.__pairedMac.get();
    }
    set pairedMac(newValue) {
        this.__pairedMac.set(newValue);
    }
    onCancel() {
        console.info('??????');
    }
    onAccept(text) {
        console.info('input text:', text);
    }
    IngredientItem(apiItem, index) {
        Stack.create();
        Stack.height(80);
        Stack.borderRadius(10);
        Stack.margin({ top: 5, bottom: 5 });
        Stack.backgroundColor({ "id": 16777321, "type": 10001, params: [] });
        Stack.onClick(() => {
            switch (apiItem.method) {
                case "setLocalName":
                    {
                        this.currentApiItem = apiItem;
                        this.currentIndex += 1;
                        this.inputDialog.open();
                    }
                    break;
                case "setBluetoothScanMode":
                    {
                        this.currentApiItem = apiItem;
                        this.currentIndex += 1;
                        this.setScanModelDialog.open();
                    }
                    break;
                case "pairDevice":
                    {
                        let message = apiItem.api(this.pairedMac);
                        apiItem.result = message;
                        this.currentIndex += 1;
                        this.changeIndex = this.currentIndex;
                        _system_prompt_1.showToast({ message: message });
                    }
                    break;
                case "unpairDevice":
                    {
                        let message = apiItem.api(this.pairedMac);
                        apiItem.result = message;
                        this.currentIndex += 1;
                        this.changeIndex = this.currentIndex;
                        _system_prompt_1.showToast({ message: message });
                    }
                    break;
                case "getDeviceName":
                    {
                        let message = apiItem.api(this.pairedMac);
                        apiItem.result = message;
                        this.currentIndex += 1;
                        this.changeIndex = this.currentIndex;
                        _system_prompt_1.showToast({ message: message });
                    }
                    break;
                case "getDeviceType":
                    {
                        let message = apiItem.api(this.pairedMac);
                        apiItem.result = message;
                        this.currentIndex += 1;
                        this.changeIndex = this.currentIndex;
                        _system_prompt_1.showToast({ message: message });
                    }
                    break;
                case "getProfileConnState":
                    {
                        this.currentApiItem = apiItem;
                        this.currentIndex += 1;
                        this.getProfileConnSateDialog.open();
                    }
                    break;
                case "getDeviceState":
                    {
                        this.currentApiItem = apiItem;
                        this.currentIndex += 1;
                        this.getProfileConnSateDialog.open();
                    }
                    break;
                default:
                    {
                        let message = apiItem.api();
                        apiItem.result = message;
                        this.currentIndex += 1;
                        this.changeIndex = this.currentIndex;
                        _system_prompt_1.showToast({ message: message });
                    }
                    break;
            }
        });
        Flex.create();
        Flex.create({ alignItems: ItemAlign.Center });
        Flex.layoutWeight(1);
        Flex.padding({ left: 10 });
        Image.create({ "id": 16777557, "type": 20000, params: [] });
        Image.objectFit(ImageFit.Contain);
        Image.autoResize(false);
        Image.height(30);
        Image.width(30);
        Flex.pop();
        Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Start });
        Flex.layoutWeight(6);
        Flex.width("80%");
        Text.create(apiItem.name);
        Text.fontSize(17.4);
        Text.fontWeight(FontWeight.Bold);
        Text.layoutWeight(1);
        Text.padding({ left: 10, top: 15 });
        Text.pop();
        Text.create(apiItem.method);
        Text.fontSize(17.4);
        Text.fontWeight(FontWeight.Bold);
        Text.layoutWeight(1);
        Text.padding({ left: 10, top: 5 });
        Text.pop();
        Flex.pop();
        Flex.create({ alignItems: ItemAlign.Center });
        Flex.layoutWeight(3);
        Flex.padding({ left: 25 });
        Text.create(this.changeIndex >= 0 ? this.getCurrentState(index) : apiItem.result);
        Text.fontSize(17.4);
        Text.flexGrow(1);
        Text.pop();
        Flex.pop();
        Flex.pop();
        Stack.pop();
    }
    getCurrentState(index) {
        return this.apiItems[index].result;
    }
    render() {
        Column.create();
        Column.height("66%");
        Column.padding({ top: 5, right: 10, left: 10 });
        Scroll.create();
        Scroll.scrollBarWidth(20);
        Flex.create({
            direction: FlexDirection.Column,
            justifyContent: FlexAlign.SpaceBetween,
            alignItems: ItemAlign.Start
        });
        ForEach.create("1", this, ObservedObject.GetRawObject(this.apiItems), (item, index) => {
            this.IngredientItem(item, index);
        });
        ForEach.pop();
        Flex.pop();
        Scroll.pop();
        Column.pop();
    }
}
exports.ContentTable = ContentTable;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/controller/BaseSettingsController.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/controller/BaseSettingsController.ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./ISettingsController */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/controller/ISettingsController.ts");
class BaseSettingsController {
    /**
      * Bind component.
      */
    bindComponent(component) {
        this.getComponent = () => component;
        // set default property values by component
        for (var key in this) {
            if (key in component) {
                this[key] = component[key];
            }
        }
        return this;
    }
    /**
     * Bind component's properties, note that only basic types can be transported.
     * Type like Resource may meet unexpected error.
     * If you want to transport resource string or color, ets. AppStorage is suggested @StorageLink.
     */
    bindProperties(componentProperties, controllerProperties) {
        for (let i = 0; i < componentProperties.length; i++) {
            this.defineBoundProperty(componentProperties[i], controllerProperties ? controllerProperties[i] : componentProperties[i]);
        }
        return this;
    }
    /**
      * Initialize data.
      */
    initData() {
        return this;
    }
    ;
    /**
      * Subscribe listeners.
      */
    subscribe() {
        return this;
    }
    ;
    /**
      * Unsubscribe listeners.
      */
    unsubscribe() {
        return this;
    }
    ;
    /**
      * Define bound properties.
      */
    defineBoundProperty(componentProperty, controllerProperty) {
        let __v = this[controllerProperty];
        Object.defineProperty(this, controllerProperty, {
            get: function () {
                return __v;
            },
            set: function (value) {
                __v = value;
                this.getComponent()[componentProperty] = value;
            }
        });
    }
}
exports["default"] = BaseSettingsController;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/controller/ISettingsController.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/controller/ISettingsController.ts ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets":
/*!***************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/pageTitle.ets ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageTitle = void 0;
/*
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
__webpack_require__(/*! ../MainAbility/model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
var _system_router_1  = globalThis.requireNativeModule('system.router');
class PageTitle extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.testItem = null;
        this.detail = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.detail !== undefined) {
            this.detail = params.detail;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Flex.create({ alignItems: ItemAlign.Start });
        Flex.height(61);
        Flex.backgroundColor('#FFedf2f5');
        Flex.padding({ top: 23, bottom: 15, left: 18 });
        Flex.borderColor({ "id": 16777296, "type": 10001, params: [] });
        Flex.backgroundColor({ "id": 16777297, "type": 10001, params: [] });
        Flex.onClick(() => {
            _system_router_1.back();
        });
        Image.create({ "id": 16777543, "type": 20000, params: [] });
        Image.width("10%");
        Image.height("100%");
        Text.create(this.testItem != null ? this.testItem.detail : this.detail);
        Text.fontSize(21.8);
        Text.margin({ left: 17.4 });
        Text.pop();
        Flex.pop();
    }
}
exports.PageTitle = PageTitle;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/scenarioContentTable.ets":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/scenarioContentTable.ets ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScenarioContentTable = void 0;
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
 *  Scenario Test ContentTable Component Page Of Bluetooth test
 */
__webpack_require__(/*! ../MainAbility/model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
__webpack_require__(/*! @system.prompt */ "../../api/@system.prompt.d.ts");
class ScenarioContentTable extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__scenarioItems = new ObservedPropertyObject([], this, "scenarioItems");
        this.scenarioItemsx = undefined;
        this.__changeIndex = new ObservedPropertySimple(-1, this, "changeIndex");
        this.__localName = new ObservedPropertySimple('dayu', this, "localName");
        this.__currentIndex = new ObservedPropertySimple(1, this, "currentIndex");
        this.__textResult = new ObservedPropertySimple("None", this, "textResult");
        this.__pairedMac = AppStorage.GetOrCreate().setAndLink("pairedMac", "", this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.scenarioItems !== undefined) {
            this.scenarioItems = params.scenarioItems;
        }
        if (params.scenarioItemsx !== undefined) {
            this.scenarioItemsx = params.scenarioItemsx;
        }
        if (params.changeIndex !== undefined) {
            this.changeIndex = params.changeIndex;
        }
        if (params.localName !== undefined) {
            this.localName = params.localName;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.textResult !== undefined) {
            this.textResult = params.textResult;
        }
    }
    aboutToBeDeleted() {
        this.__scenarioItems.aboutToBeDeleted();
        this.__changeIndex.aboutToBeDeleted();
        this.__localName.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__textResult.aboutToBeDeleted();
        this.__pairedMac.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get scenarioItems() {
        return this.__scenarioItems.get();
    }
    set scenarioItems(newValue) {
        this.__scenarioItems.set(newValue);
    }
    get changeIndex() {
        return this.__changeIndex.get();
    }
    set changeIndex(newValue) {
        this.__changeIndex.set(newValue);
    }
    get localName() {
        return this.__localName.get();
    }
    set localName(newValue) {
        this.__localName.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get textResult() {
        return this.__textResult.get();
    }
    set textResult(newValue) {
        this.__textResult.set(newValue);
    }
    get pairedMac() {
        return this.__pairedMac.get();
    }
    set pairedMac(newValue) {
        this.__pairedMac.set(newValue);
    }
    IngredientItem(scenarioItem, index) {
        Stack.create();
        Stack.height(40);
        Stack.borderRadius(10);
        Stack.margin({ top: 3, bottom: 3 });
        Stack.backgroundColor({ "id": 16777321, "type": 10001, params: [] });
        Flex.create();
        Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Start });
        Flex.height(30);
        Flex.layoutWeight(6);
        Row.create();
        Row.height(30);
        Row.width("70%");
        Text.create(scenarioItem.detail);
        Text.fontSize("17vp");
        Text.margin({ top: "3vp", bottom: "3vp", left: "10vp" });
        Text.textAlign(TextAlign.Start);
        Text.height(40);
        Text.width(30);
        Text.pop();
        Text.create(scenarioItem.method);
        Text.fontSize("17vp");
        Text.margin({ top: "3vp", bottom: "3vp", left: "10vp" });
        Text.textAlign(TextAlign.Start);
        Text.height(40);
        Text.width(240);
        Text.pop();
        Row.pop();
        Flex.pop();
        Flex.create({ alignItems: ItemAlign.Center });
        Flex.layoutWeight(3);
        Flex.padding({ left: 10 });
        Flex.margin({ left: 10 });
        Text.create(this.changeIndex >= 0 ? this.getCurrentState(index) : scenarioItem.result);
        Text.margin({ left: "10vp" });
        Text.fontSize("17vp");
        Text.flexGrow(1);
        Text.pop();
        Flex.pop();
        Flex.pop();
        Stack.pop();
    }
    getCurrentState(index) {
        if (index <= this.changeIndex)
            this.scenarioItemsx[index].result = 'pass';
        return this.scenarioItemsx[index].result;
    }
    aboutToAppear() {
        console.log("scenario??????????????????");
        //    emitter.on({ eventId: 1 }, (eventData) => {
        //      console.log(JSON.stringify(eventData.data) );
        //    });
        //?????????????????????
        this.scenarioItemsx = this.scenarioItems;
    }
    render() {
        Column.create();
        Column.height("80%");
        Column.padding({ top: 5, right: 10, left: 10 });
        Scroll.create();
        Scroll.scrollBarWidth(20);
        Flex.create({
            direction: FlexDirection.Column,
            justifyContent: FlexAlign.SpaceBetween,
            alignItems: ItemAlign.Start
        });
        ForEach.create("1", this, ObservedObject.GetRawObject(this.scenarioItems), (item, index) => {
            this.IngredientItem(item, index);
        });
        ForEach.pop();
        Flex.pop();
        Scroll.pop();
        Column.pop();
    }
}
exports.ScenarioContentTable = ScenarioContentTable;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testImageDisplay.ets ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestImageDisplay = void 0;
/*
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
__webpack_require__(/*! ../MainAbility/model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
class TestImageDisplay extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.testItem = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Stack.create({ alignContent: Alignment.BottomStart });
        Stack.backgroundColor('#FFedf2f5');
        Stack.height(160);
        Flex.create({ alignItems: ItemAlign.Start });
        Stack.create();
        Stack.width("20%");
        Image.create(this.testItem.image);
        Image.height(80);
        Image.width(80);
        Image.margin({ left: 10, bottom: 10 });
        Stack.pop();
        Column.create();
        Column.width("80%");
        Column.padding({ left: 20 });
        Text.create(this.testItem.name);
        Text.fontSize(26);
        Text.fontWeight(500);
        Text.margin({ left: 26, top: 10 });
        Text.width("90%");
        Text.pop();
        Text.create(this.testItem.detail);
        Text.fontSize(17);
        Text.fontWeight(500);
        Text.margin({ top: 8 });
        Text.width("80%");
        Text.pop();
        Column.pop();
        Flex.pop();
        Stack.pop();
    }
}
exports.TestImageDisplay = TestImageDisplay;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testListItems.ets":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/testListItems.ets ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestListItem = void 0;
/*
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
 * Test-ListItem
 */
__webpack_require__(/*! ../MainAbility/model/testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
class TestListItem extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.testItem = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Navigator.create({ target: this.testItem.url });
        Navigator.params({ testId: this.testItem });
        Navigator.margin({ right: 10, left: 10, top: 10 });
        Navigator.padding({ left: 15, right: 15 });
        Navigator.borderRadius(10);
        Navigator.backgroundColor({ "id": 16777321, "type": 10001, params: [] });
        Flex.create({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center });
        Flex.height(85);
        Row.create();
        Row.backgroundColor({ "id": 16777321, "type": 10001, params: [] });
        Row.width("30%");
        Image.create(this.testItem.image);
        Image.objectFit(ImageFit.Contain);
        Image.autoResize(false);
        Image.height(60);
        Image.width(60);
        Row.pop();
        Text.create(this.testItem.name);
        Text.fontSize(20);
        Text.flexGrow(1);
        Text.margin({ left: 12 });
        Text.width("45%");
        Text.pop();
        Text.create(this.testItem.detail);
        Text.fontSize(17);
        Text.margin({ left: 10, right: 5 });
        Text.width("45%");
        Text.pop();
        Flex.pop();
        Navigator.pop();
    }
}
exports.TestListItem = TestListItem;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/titleComponent.ets":
/*!********************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/titleComponent.ets ***!
  \********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TitleComponent = void 0;
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
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../Utils/ConfigData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts"));
class TitleComponent extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.title = undefined;
        this.fontSize = '30vp';
        this.stateChangeFlag = false;
        this.pinRequiredFlag = false;
        this.bondStateChangeFlag = false;
        this.__bgColor = new ObservedPropertyObject({ "id": 16777307, "type": 10001, params: [] }, this, "bgColor");
        this.__isTouched = new ObservedPropertySimple(false, this, "isTouched");
        this.__state = AppStorage.GetOrCreate().setAndLink("on_stateChange", 'on:stateChange', this);
        this.__pin = AppStorage.GetOrCreate().setAndLink("on_pinRequired", 'on:pinRequired', this);
        this.__bondState = AppStorage.GetOrCreate().setAndLink("on_bondStateChange", 'on:bondStateChange', this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.fontSize !== undefined) {
            this.fontSize = params.fontSize;
        }
        if (params.stateChangeFlag !== undefined) {
            this.stateChangeFlag = params.stateChangeFlag;
        }
        if (params.pinRequiredFlag !== undefined) {
            this.pinRequiredFlag = params.pinRequiredFlag;
        }
        if (params.bondStateChangeFlag !== undefined) {
            this.bondStateChangeFlag = params.bondStateChangeFlag;
        }
        if (params.bgColor !== undefined) {
            this.bgColor = params.bgColor;
        }
        if (params.isTouched !== undefined) {
            this.isTouched = params.isTouched;
        }
    }
    aboutToBeDeleted() {
        this.__bgColor.aboutToBeDeleted();
        this.__isTouched.aboutToBeDeleted();
        this.__state.aboutToBeDeleted();
        this.__pin.aboutToBeDeleted();
        this.__bondState.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get bgColor() {
        return this.__bgColor.get();
    }
    set bgColor(newValue) {
        this.__bgColor.set(newValue);
    }
    get isTouched() {
        return this.__isTouched.get();
    }
    set isTouched(newValue) {
        this.__isTouched.set(newValue);
    }
    get state() {
        return this.__state.get();
    }
    set state(newValue) {
        this.__state.set(newValue);
    }
    get pin() {
        return this.__pin.get();
    }
    set pin(newValue) {
        this.__pin.set(newValue);
    }
    get bondState() {
        return this.__bondState.get();
    }
    set bondState(newValue) {
        this.__bondState.set(newValue);
    }
    render() {
        Column.create();
        Column.padding({ "id": 16777386, "type": 10002, params: [] });
        Column.height("100vp");
        Column.borderRadius({ "id": 16777435, "type": 10002, params: [] });
        Column.backgroundColor({ "id": 125829123, "type": 10001, params: [] });
        Flex.create({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
        Flex.height(80);
        Flex.width(ConfigData_1.default.WH_100_100);
        Flex.backgroundColor(ObservedObject.GetRawObject(this.bgColor));
        Flex.linearGradient(this.isTouched ? {
            angle: 90,
            direction: GradientDirection.Right,
            colors: [[{ "id": 16777293, "type": 10001, params: [] }, 0.0], [{ "id": 16777294, "type": 10001, params: [] }, 1.0]]
        } : {
            angle: 90,
            direction: GradientDirection.Right,
            colors: [[{ "id": 125829123, "type": 10001, params: [] }, 1], [{ "id": 125829123, "type": 10001, params: [] }, 1]]
        });
        Flex.onTouch((event) => {
            if (event.type === TouchType.Down) {
                this.isTouched = true;
            }
            if (event.type === TouchType.Up) {
                this.isTouched = false;
            }
        });
        Text.create(this.stateChangeFlag ? this.state : (this.pinRequiredFlag ? this.pin : (this.bondStateChangeFlag ? this.bondState : this.title)));
        Text.textAlign(TextAlign.Center);
        Text.width("100%");
        Text.height(70);
        Text.fontSize(this.fontSize);
        Text.fontColor({ "id": 16777308, "type": 10001, params: [] });
        Text.fontWeight(FontWeight.Medium);
        Text.pop();
        Flex.pop();
        Column.pop();
    }
}
exports.TitleComponent = TitleComponent;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/controller/BluetoothDeviceController.ts":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/controller/BluetoothDeviceController.ts ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const BluetoothModel_1 = __importStar(__webpack_require__(/*! ../model/BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../Utils/ConfigData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts"));
const LogUtil_1 = __importDefault(__webpack_require__(/*! ../../Utils/LogUtil */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/LogUtil.ts"));
const BluetoothDevice_1 = __importDefault(__webpack_require__(/*! ../model/BluetoothDevice */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothDevice.ts"));
const BaseSettingsController_1 = __importDefault(__webpack_require__(/*! ../../Component/controller/BaseSettingsController */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/controller/BaseSettingsController.ts"));
__webpack_require__(/*! ../../Component/controller/ISettingsController */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Component/controller/ISettingsController.ts");
const DISCOVERY_DURING_TIME = 30000; // 30'
const DISCOVERY_INTERVAL_TIME = 3000; // 3'
class BluetoothDeviceController extends BaseSettingsController_1.default {
    constructor() {
        super(...arguments);
        this.TAG = ConfigData_1.default.TAG + 'BluetoothDeviceController ';
        //state
        this.isOn = false;
        this.enabled = false;
        // paired devices
        this.pairedDevices = [];
        // available devices
        this.isDeviceDiscovering = false;
        this.availableDevices = [];
        this.pairPinCode = '';
    }
    initData() {
        super.initData();
        let isOn = BluetoothModel_1.default.isStateOn();
        LogUtil_1.default.log(this.TAG + 'initData bluetooth state isOn ' + isOn + ', typeof isOn = ' + typeof (isOn));
        if (isOn) {
            this.refreshPairedDevices();
        }
        LogUtil_1.default.log(this.TAG + 'initData save value to app storage. ');
        this.isOn = new Boolean(isOn).valueOf();
        this.enabled = true;
        AppStorage.SetOrCreate('bluetoothIsOn', this.isOn);
        AppStorage.SetOrCreate('bluetoothToggleEnabled', this.enabled);
        AppStorage.SetOrCreate('bluetoothAvailableDevices', this.availableDevices);
        return this;
    }
    subscribe() {
        LogUtil_1.default.log(this.TAG + 'subscribe bluetooth state isOn ' + this.isOn);
        this.subscribeStateChange();
        this.subscribeBluetoothDeviceFind();
        this.subscribeBondStateChange();
        this.subscribeDeviceConnectStateChange();
        if (this.isOn) {
            this.startBluetoothDiscovery();
        }
        return this;
    }
    unsubscribe() {
        this.stopBluetoothDiscovery();
        if (this.discoveryStartTimeoutId) {
            clearTimeout(this.discoveryStartTimeoutId);
        }
        if (this.discoveryStopTimeoutId) {
            clearTimeout(this.discoveryStopTimeoutId);
        }
        BluetoothModel_1.default.unsubscribeStateChange();
        BluetoothModel_1.default.unsubscribeBluetoothDeviceFind();
        BluetoothModel_1.default.unsubscribeBondStateChange();
        BluetoothModel_1.default.unsubscribeDeviceStateChange();
        return this;
    }
    subscribePinRequired(success) {
        // start listening pinCode
        BluetoothModel_1.default.subscribePinRequired((pinRequiredParam) => {
            LogUtil_1.default.log(this.TAG + 'bluetooth subscribePinRequired callback. pinRequiredParam = ' + JSON.stringify(pinRequiredParam));
            this.pairPinCode = pinRequiredParam.pinCode;
            if (success) {
                success(pinRequiredParam.deviceId, pinRequiredParam.pinCode);
            }
        });
    }
    /**
     * Set toggle value
     */
    toggleValue(isOn) {
        this.enabled = false;
        AppStorage.SetOrCreate('bluetoothToggleEnabled', this.enabled);
        LogUtil_1.default.log(this.TAG + 'afterCurrentValueChanged bluetooth state isOn = ' + this.isOn);
        if (isOn) {
            BluetoothModel_1.default.enableBluetooth();
        }
        else {
            BluetoothModel_1.default.disableBluetooth();
        }
    }
    /**
     * Get Local Name
     */
    getLocalName() {
        AppStorage.SetOrCreate('bluetoothLocalName', BluetoothModel_1.default.getLocalName());
    }
    /**
     * Pair device.
     *
     * @param deviceId device id
     * @param success success callback
     * @param error error callback
     */
    pair(deviceId, success, error) {
        const device = this.getAvailableDevice(deviceId);
        if (device && device.connectionState === BluetoothModel_1.DeviceState.STATE_PAIRING) {
            LogUtil_1.default.log(this.TAG + `bluetooth no Aavailable device or device(${deviceId}) is already pairing.`);
            return;
        }
        // start pairing
        const result = BluetoothModel_1.default.pairDevice(deviceId);
        LogUtil_1.default.log(this.TAG + 'bluetooth pairDevice result = ' + result);
        if (!result) {
            AppStorage.SetOrCreate('pairedDeviceId', '');
            BluetoothModel_1.default.unsubscribePinRequired(() => LogUtil_1.default.log(this.TAG + 'available pinRequired unsubscribed.'));
            if (error) {
                error();
            }
        }
    }
    /**
     * Confirm pairing.
     *
     * @param deviceId device id
     * @param accept accept or not
     * @param success success callback
     * @param error error callback
     */
    confirmPairing(deviceId, accept) {
        if (accept) {
            this.getAvailableDevice(deviceId).connectionState = BluetoothModel_1.DeviceState.STATE_PAIRING;
            this.forceRefresh(this.availableDevices);
            AppStorage.SetOrCreate('bluetoothAvailableDevices', this.availableDevices);
        }
        // set paring confirmation
        BluetoothModel_1.default.setDevicePairingConfirmation(deviceId, accept);
    }
    /**
     * Connect device.
     * @param deviceId device id
     */
    connect(deviceId) {
        return BluetoothModel_1.default.connectDevice(deviceId);
    }
    /**
     * disconnect device.
     * @param deviceId device id
     */
    disconnect(deviceId) {
        return BluetoothModel_1.default.disconnectDevice(deviceId);
    }
    /**
     * Unpair device.
     * @param deviceId device id
     */
    unpair(deviceId) {
        const result = BluetoothModel_1.default.unpairDevice(deviceId);
        LogUtil_1.default.log(this.TAG + 'bluetooth paired device unpair. result = ' + result);
        this.refreshPairedDevices();
        return result;
    }
    /**
     * Refresh paired devices.
     */
    refreshPairedDevices() {
        let deviceIds = BluetoothModel_1.default.getPairedDeviceIds();
        let list = [];
        deviceIds.forEach(deviceId => {
            list.push(this.getDevice(deviceId));
        });
        this.pairedDevices = list;
        AppStorage.SetOrCreate('bluetoothPairedDevices', this.pairedDevices);
        LogUtil_1.default.log(this.TAG + 'bluetooth paired devices. list = ' + JSON.stringify(list));
    }
    //---------------------- subscribe ----------------------
    /**
     * Subscribe bluetooth state change
     */
    subscribeStateChange() {
        console.info("subscribeStateChange");
        BluetoothModel_1.default.subscribeStateChange((isOn) => {
            LogUtil_1.default.log(this.TAG + 'bluetooth state changed. isOn = ' + isOn);
            this.isOn = new Boolean(isOn).valueOf();
            this.enabled = true;
            LogUtil_1.default.log(this.TAG + 'bluetooth state changed. save value.');
            this.getLocalName();
            AppStorage.SetOrCreate('bluetoothIsOn', this.isOn);
            AppStorage.SetOrCreate('bluetoothToggleEnabled', this.enabled);
            if (isOn) {
                LogUtil_1.default.log(this.TAG + 'bluetooth state changed. unsubscribe');
                this.startBluetoothDiscovery();
            }
            else {
                LogUtil_1.default.log(this.TAG + 'bluetooth state changed. subscribe');
                this.stopBluetoothDiscovery();
            }
        });
    }
    /**
     * Subscribe device find
     */
    subscribeBluetoothDeviceFind() {
        console.info("subscribeBluetoothDeviceFind");
        BluetoothModel_1.default.subscribeBluetoothDeviceFind((deviceIds) => {
            LogUtil_1.default.log(ConfigData_1.default.TAG + 'available bluetooth devices changed.');
            deviceIds === null || deviceIds === void 0 ? void 0 : deviceIds.forEach(deviceId => {
                let device = this.availableDevices.find((availableDevice) => {
                    return availableDevice.deviceId === deviceId;
                });
                LogUtil_1.default.log(this.TAG + 'available bluetooth find [' + deviceId + '] = ' + JSON.stringify(device));
                if (!device) {
                    let newDevice = this.getDevice(deviceId);
                    LogUtil_1.default.log(this.TAG + 'available bluetooth new device : ' + JSON.stringify(newDevice));
                    this.availableDevices.push(newDevice);
                    LogUtil_1.default.log(this.TAG + 'available bluetooth new device pushed. availableDevices length = ' + this.availableDevices.length);
                }
            });
            AppStorage.SetOrCreate('bluetoothAvailableDevices', this.availableDevices);
        });
    }
    /**
     * Subscribe bond state change
     */
    subscribeBondStateChange() {
        console.info("subscribeBondStateChange");
        BluetoothModel_1.default.subscribeBondStateChange((data) => {
            LogUtil_1.default.log(this.TAG + 'bluetooth subscribeBondStateChange callback.');
            //paired devices
            if (data.bondState !== BluetoothModel_1.BondState.BOND_STATE_BONDING) {
                this.refreshPairedDevices();
            }
            //available devices
            if (data.bondState == BluetoothModel_1.BondState.BOND_STATE_BONDING) {
                // case bonding
                // do nothing and still listening
                LogUtil_1.default.log(this.TAG + 'bluetooth continue listening bondStateChange.');
            }
            else if (data.bondState == BluetoothModel_1.BondState.BOND_STATE_INVALID) {
                // case failed
                this.getAvailableDevice(data.deviceId).connectionState = BluetoothModel_1.DeviceState.STATE_DISCONNECTED;
                this.forceRefresh(this.availableDevices);
                AppStorage.SetOrCreate('bluetoothAvailableDevices', this.availableDevices);
                this.showConnectFailedDialog();
            }
            else if (data.bondState == BluetoothModel_1.BondState.BOND_STATE_BONDED) {
                // case success
                LogUtil_1.default.log(this.TAG + 'bluetooth bonded : remove device.');
                this.removeAvailableDevice(data.deviceId);
                BluetoothModel_1.default.connectDevice(data.deviceId);
            }
        });
    }
    /**
     * Subscribe device connect state change
     */
    subscribeDeviceConnectStateChange() {
        console.info("subscribeDeviceConnectStateChange");
        BluetoothModel_1.default.subscribeDeviceStateChange((data) => {
            LogUtil_1.default.log(this.TAG + 'device connection state changed. data = ' + JSON.stringify(data));
            for (let device of this.pairedDevices) {
                if (device.deviceId === data.deviceId) {
                    device.setProfile(data);
                    this.forceRefresh(this.pairedDevices);
                    AppStorage.SetOrCreate('bluetoothPairedDevices', this.pairedDevices);
                    break;
                }
            }
            ;
            LogUtil_1.default.log(this.TAG + 'device connection state changed. pairedDevices = ' + JSON.stringify(this.pairedDevices));
            LogUtil_1.default.log(this.TAG + 'device connection state changed. availableDevices = ' + JSON.stringify(this.availableDevices));
            this.removeAvailableDevice(data.deviceId);
        });
    }
    //---------------------- private ----------------------
    /**
     * Get device by device id.
     * @param deviceId device id
     */
    getDevice(deviceId) {
        let device = new BluetoothDevice_1.default();
        device.deviceId = deviceId;
        device.deviceName = BluetoothModel_1.default.getDeviceName(deviceId);
        device.deviceType = BluetoothModel_1.default.getDeviceType(deviceId);
        device.setProfiles(BluetoothModel_1.default.getDeviceState(deviceId));
        console.info("getDevice");
        return device;
    }
    /**
       * Force refresh array.
       * Note: the purpose of this function is just trying to fix page (ets) level's bug below,
       *   and should be useless if fixed by the future sdk.
       * Bug Details:
       *   @State is not supported well for Array<CustomClass> type.
       *   In the case that the array item's field value changed, while not its length,
       *   the build method on page will not be triggered!
       */
    forceRefresh(arr) {
        arr.push(new BluetoothDevice_1.default());
        arr.pop();
    }
    /**
     * Start bluetooth discovery.
     */
    startBluetoothDiscovery() {
        this.isDeviceDiscovering = true;
        BluetoothModel_1.default.startBluetoothDiscovery();
        console.info("startBluetoothDiscovery");
        this.discoveryStopTimeoutId = setTimeout(() => {
            this.stopBluetoothDiscovery();
        }, DISCOVERY_DURING_TIME);
    }
    /**
     * Stop bluetooth discovery.
     */
    stopBluetoothDiscovery() {
        console.info("stopBluetoothDiscovery");
        this.isDeviceDiscovering = false;
        BluetoothModel_1.default.stopBluetoothDiscovery();
        this.discoveryStartTimeoutId = setTimeout(() => {
            this.startBluetoothDiscovery();
        }, DISCOVERY_INTERVAL_TIME);
    }
    /**
     * Get available device.
     *
     * @param deviceId device id
     */
    getAvailableDevice(deviceId) {
        console.info("getAvailableDevice:", this.availableDevices.length);
        for (let i = 0; i < this.availableDevices.length; i++) {
            if (this.availableDevices[i].deviceId === deviceId) {
                return this.availableDevices[i];
            }
        }
        return null;
        //    this.availableDevices.forEach(device => {
        //      console.info("device.deviceId: "+device.deviceId)
        //      console.info("input.deviceId:  "+deviceId)
        //      console.info("input.localeCompare:  " + device.deviceId.localeCompare(deviceId).toString())
        //      if (device.deviceId.localeCompare(deviceId) == 0) {
        //        return device;
        //      }
        //    })
    }
    /**
     * Remove available device.
     *
     * @param deviceId device id
     */
    removeAvailableDevice(deviceId) {
        console.info("removeAvailableDevice");
        LogUtil_1.default.log(this.TAG + 'removeAvailableDevice : before : availableDevices length = ' + this.availableDevices.length);
        this.availableDevices = this.availableDevices.filter((device) => device.deviceId !== deviceId);
        AppStorage.SetOrCreate('bluetoothAvailableDevices', this.availableDevices);
        LogUtil_1.default.log(this.TAG + 'removeAvailableDevice : after : availableDevices length = ' + this.availableDevices.length);
    }
    /**
     * Connect Failed Dialog
     */
    showConnectFailedDialog() {
        AlertDialog.show({
            title: { "id": 16777238, "type": 10003, params: [] },
            message: { "id": 16777239, "type": 10003, params: [] },
            confirm: {
                value: { "id": 16777243, "type": 10003, params: [] },
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
}
exports["default"] = BluetoothDeviceController;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothDevice.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothDevice.ts ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Profile = void 0;
/*
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
 * BT Device Page Of Bluetooth test
 */
const BluetoothModel_1 = __webpack_require__(/*! ./BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts");
class Profile {
    constructor() {
        this.profileId = -1;
        this.profileConnectionState = -1;
    }
}
exports.Profile = Profile;
/**
 * Bluetooth device class
 */
class BluetoothDevice {
    constructor() {
        this.deviceId = '';
        this.deviceName = '';
        this.deviceType = '';
        this.connectionState = 0;
        this.profiles = new Map();
    }
    setProfiles(data) {
        data.forEach((item) => {
            this.setProfile({
                profileId: item.profileId,
                deviceId: this.deviceId,
                profileConnectionState: item.profileConnectionState
            });
        });
    }
    setProfile(data) {
        if (this.deviceId !== data.deviceId) {
            return;
        }
        this.profiles.set(data.profileId, data);
        let countStateDisconnect = 0;
        let countStateConnecting = 0;
        let countStateConnected = 0;
        let countStateDisconnecting = 0;
        this.profiles.forEach((profile, key) => {
            if (profile.profileConnectionState == 0) {
                // 0:the current profile is disconnected
                countStateDisconnect++;
            }
            else if (profile.profileConnectionState == 1) {
                // 1:the current profile is being connected
                countStateConnecting++;
            }
            else if (profile.profileConnectionState == 2) {
                // 2:the current profile is connected
                countStateConnected++;
            }
            else if (profile.profileConnectionState == 3) {
                // 3:the current profile is being disconnected
                countStateDisconnecting++;
            }
        });
        if (countStateConnected > 0 || countStateDisconnecting > 0) {
            this.connectionState = BluetoothModel_1.DeviceState.STATE_CONNECTED;
        }
        else if (countStateConnecting > 0) {
            this.connectionState = BluetoothModel_1.DeviceState.STATE_CONNECTING;
        }
        else {
            this.connectionState = BluetoothModel_1.DeviceState.STATE_DISCONNECTED;
        }
    }
}
exports["default"] = BluetoothDevice;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BluetoothModel = exports.BluetoothErrorCode = exports.DeviceState = exports.DeviceType = exports.BondState = exports.ProfileCode = void 0;
/*
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
 * BT MODEL Page Of Bluetooth test
 */
const LogUtil_1 = __importDefault(__webpack_require__(/*! ../../Utils/LogUtil */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/LogUtil.ts"));
const BaseModel_1 = __importDefault(__webpack_require__(/*! ../../Utils/BaseModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/BaseModel.ts"));
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
var ProfileCode;
(function (ProfileCode) {
    ProfileCode[ProfileCode["CODE_BT_PROFILE_A2DP_SINK"] = 0] = "CODE_BT_PROFILE_A2DP_SINK";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_A2DP_SOURCE"] = 1] = "CODE_BT_PROFILE_A2DP_SOURCE";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_AVRCP_CT"] = 2] = "CODE_BT_PROFILE_AVRCP_CT";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_AVRCP_TG"] = 3] = "CODE_BT_PROFILE_AVRCP_TG";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_HANDS_FREE_AUDIO_GATEWAY"] = 4] = "CODE_BT_PROFILE_HANDS_FREE_AUDIO_GATEWAY";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_HANDS_FREE_UNIT"] = 5] = "CODE_BT_PROFILE_HANDS_FREE_UNIT";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_HID_HOST"] = 6] = "CODE_BT_PROFILE_HID_HOST";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_PAN_NETWORK"] = 7] = "CODE_BT_PROFILE_PAN_NETWORK";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_PBAP_CLIENT"] = 8] = "CODE_BT_PROFILE_PBAP_CLIENT";
    ProfileCode[ProfileCode["CODE_BT_PROFILE_PBAP_SERVER"] = 9] = "CODE_BT_PROFILE_PBAP_SERVER";
})(ProfileCode = exports.ProfileCode || (exports.ProfileCode = {}));
;
var BondState;
(function (BondState) {
    /** Indicate the bond state is invalid */
    BondState[BondState["BOND_STATE_INVALID"] = 0] = "BOND_STATE_INVALID";
    /** Indicate the bond state is bonding */
    BondState[BondState["BOND_STATE_BONDING"] = 1] = "BOND_STATE_BONDING";
    /** Indicate the bond state is bonded*/
    BondState[BondState["BOND_STATE_BONDED"] = 2] = "BOND_STATE_BONDED";
})(BondState = exports.BondState || (exports.BondState = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["BLUETOOTH"] = "1";
    DeviceType["HEADPHONE"] = "2";
    DeviceType["PHONE"] = "3";
    DeviceType["COMPUTER"] = "4";
    DeviceType["WATCH"] = "5";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var DeviceState;
(function (DeviceState) {
    /** the device is disconnected */
    DeviceState[DeviceState["STATE_DISCONNECTED"] = 0] = "STATE_DISCONNECTED";
    /** the device is being connected */
    DeviceState[DeviceState["STATE_CONNECTING"] = 1] = "STATE_CONNECTING";
    /** the device is connected */
    DeviceState[DeviceState["STATE_CONNECTED"] = 2] = "STATE_CONNECTED";
    /** the device is being disconnected */
    DeviceState[DeviceState["STATE_DISCONNECTING"] = 3] = "STATE_DISCONNECTING";
    /** the device is available */
    DeviceState[DeviceState["STATE_AVAILABLE"] = 100] = "STATE_AVAILABLE";
    /** the device is pairing */
    DeviceState[DeviceState["STATE_PAIRING"] = 101] = "STATE_PAIRING";
    /** the device is paired */
    DeviceState[DeviceState["STATE_PAIRED"] = 102] = "STATE_PAIRED";
})(DeviceState = exports.DeviceState || (exports.DeviceState = {}));
var BluetoothErrorCode;
(function (BluetoothErrorCode) {
    BluetoothErrorCode[BluetoothErrorCode["SUCCESS"] = -1] = "SUCCESS";
    BluetoothErrorCode[BluetoothErrorCode["HOLD_PAIRING_MODE"] = 1] = "HOLD_PAIRING_MODE";
    BluetoothErrorCode[BluetoothErrorCode["APP_PAIR"] = 2] = "APP_PAIR";
    BluetoothErrorCode[BluetoothErrorCode["PAIR_FAILED"] = 3] = "PAIR_FAILED";
    BluetoothErrorCode[BluetoothErrorCode["DEVICE_ILLEGAL"] = 4] = "DEVICE_ILLEGAL";
    BluetoothErrorCode[BluetoothErrorCode["CONNECT_FAILED"] = 5] = "CONNECT_FAILED";
})(BluetoothErrorCode = exports.BluetoothErrorCode || (exports.BluetoothErrorCode = {}));
var BluetoothState;
(function (BluetoothState) {
    /** Indicates the local Bluetooth is off */
    BluetoothState[BluetoothState["STATE_OFF"] = 0] = "STATE_OFF";
    /** Indicates the local Bluetooth is turning on */
    BluetoothState[BluetoothState["STATE_TURNING_ON"] = 1] = "STATE_TURNING_ON";
    /** Indicates the local Bluetooth is on, and ready for use */
    BluetoothState[BluetoothState["STATE_ON"] = 2] = "STATE_ON";
    /** Indicates the local Bluetooth is turning off */
    BluetoothState[BluetoothState["STATE_TURNING_OFF"] = 3] = "STATE_TURNING_OFF";
    /** Indicates the local Bluetooth is turning LE mode on */
    BluetoothState[BluetoothState["STATE_BLE_TURNING_ON"] = 4] = "STATE_BLE_TURNING_ON";
    /** Indicates the local Bluetooth is in LE only mode */
    BluetoothState[BluetoothState["STATE_BLE_ON"] = 5] = "STATE_BLE_ON";
    /** Indicates the local Bluetooth is turning off LE only mode */
    BluetoothState[BluetoothState["STATE_BLE_TURNING_OFF"] = 6] = "STATE_BLE_TURNING_OFF";
})(BluetoothState || (BluetoothState = {}));
var ScanMode;
(function (ScanMode) {
    /** Indicates the scan mode is none */
    ScanMode[ScanMode["SCAN_MODE_NONE"] = 0] = "SCAN_MODE_NONE";
    /** Indicates the scan mode is connectable */
    ScanMode[ScanMode["SCAN_MODE_CONNECTABLE"] = 1] = "SCAN_MODE_CONNECTABLE";
    /** Indicates the scan mode is general discoverable */
    ScanMode[ScanMode["SCAN_MODE_GENERAL_DISCOVERABLE"] = 2] = "SCAN_MODE_GENERAL_DISCOVERABLE";
    /** Indicates the scan mode is limited discoverable */
    ScanMode[ScanMode["SCAN_MODE_LIMITED_DISCOVERABLE"] = 3] = "SCAN_MODE_LIMITED_DISCOVERABLE";
    /** Indicates the scan mode is connectable and general discoverable */
    ScanMode[ScanMode["SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE"] = 4] = "SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE";
    /** Indicates the scan mode is connectable and limited discoverable */
    ScanMode[ScanMode["SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE"] = 5] = "SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE";
})(ScanMode || (ScanMode = {}));
var ProfileId;
(function (ProfileId) {
    ProfileId[ProfileId["PROFILE_A2DP_SOURCE"] = 1] = "PROFILE_A2DP_SOURCE";
    ProfileId[ProfileId["PROFILE_HANDS_FREE_AUDIO_GATEWAY"] = 4] = "PROFILE_HANDS_FREE_AUDIO_GATEWAY";
})(ProfileId || (ProfileId = {}));
var ProfileConnectionState;
(function (ProfileConnectionState) {
    /** the current profile is disconnected */
    ProfileConnectionState[ProfileConnectionState["STATE_DISCONNECTED"] = 0] = "STATE_DISCONNECTED";
    /** the current profile is being connected */
    ProfileConnectionState[ProfileConnectionState["STATE_CONNECTING"] = 1] = "STATE_CONNECTING";
    /** the current profile is connected */
    ProfileConnectionState[ProfileConnectionState["STATE_CONNECTED"] = 2] = "STATE_CONNECTED";
    /** the current profile is being disconnected */
    ProfileConnectionState[ProfileConnectionState["STATE_DISCONNECTING"] = 3] = "STATE_DISCONNECTING";
})(ProfileConnectionState || (ProfileConnectionState = {}));
class BluetoothModel extends BaseModel_1.default {
    /**
     * constructor
     */
    constructor() {
        super();
        this.TAG = 'BluetoothModel ';
        this.profiles = new Array(10);
        this.canUse = false;
        try {
            LogUtil_1.default.info('bluetooth.getProfile start');
            this.profiles[1] = _ohos_bluetooth_1.getProfile(1);
            this.profiles[4] = _ohos_bluetooth_1.getProfile(4);
            LogUtil_1.default.info('bluetooth.getProfile end');
            this.canUse = true;
        }
        catch (error) {
            LogUtil_1.default.info('bluetooth.getProfile error');
            this.canUse = false;
            LogUtil_1.default.info(`BluetoothModel error: ${JSON.stringify(error)}.`);
        }
    }
    getProfileConnState(profileId) {
        let state = _ohos_bluetooth_1.getProfileConnState(profileId);
        switch (state) {
            case 0:
                return 'STATE_DISCONNECTED';
                break;
            case 1:
                return 'STATE_CONNECTING';
                break;
            case 2:
                return 'STATE_CONNECTED';
                break;
            case 3:
                return 'STATE_DISCONNECTING';
                break;
            default:
                return '????????????';
                break;
        }
    }
    getBtConnectionState() {
        let connectionState = _ohos_bluetooth_1.getBtConnectionState();
        switch (connectionState) {
            case 0:
                return 'STATE_DISCONNECTED';
                break;
            case 1:
                return 'STATE_CONNECTING';
                break;
            case 2:
                return 'STATE_CONNECTED';
                break;
            case 3:
                return 'STATE_DISCONNECTING';
                break;
            default:
                return '????????????';
                break;
        }
    }
    /**
      * Get Bluetooth status
      * @return value of bluetooth.BluetoothState type
      */
    getState() {
        let bluetoothState = _ohos_bluetooth_1.getState();
        LogUtil_1.default.info(`${this.TAG} getState: bluetoothState = ${bluetoothState}`);
        return bluetoothState;
    }
    setBluetoothScanMode(mode, duration) {
        return _ohos_bluetooth_1.setBluetoothScanMode(mode, duration);
    }
    getBluetoothScanMode() {
        let scanMode = _ohos_bluetooth_1.getBluetoothScanMode();
        LogUtil_1.default.info(`${this.TAG} getBluetoothScanMode: scanMode = ${scanMode}`);
        switch (scanMode) {
            case 0:
                return 'SCAN_MODE_NONE';
                break;
            case 1:
                return 'SCAN_MODE_CONNECTABLE';
                break;
            case 2:
                return 'SCAN_MODE_GENERAL_DISCOVERABLE';
                break;
            case 3:
                return 'SCAN_MODE_LIMITED_DISCOVERABLE';
                break;
            case 4:
                return 'SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE';
                break;
            case 5:
                return 'SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE';
                break;
            default:
                return '';
                break;
        }
    }
    /**
      * Get Bluetooth switch status
      */
    isStateOn() {
        let result = false;
        let state = _ohos_bluetooth_1.getState();
        LogUtil_1.default.info(`${this.TAG} isStateOn: state = ${state}`);
        switch (state) {
            case BluetoothState.STATE_ON:
                result = true;
                break;
            default:
                break;
        }
        LogUtil_1.default.info(`${this.TAG} isStateOn: bluetoothState = ${result}`);
        return result;
    }
    /**
      * Subscribe Bluetooth switch status Change
      */
    subscribeStateChange(callback) {
        _ohos_bluetooth_1.on('stateChange', (data) => {
            LogUtil_1.default.info(`${this.TAG} subscribeStateChange->stateChange data:${data}`);
            if (callback) {
                switch (data) {
                    case BluetoothState.STATE_ON:
                        _ohos_bluetooth_1.setBluetoothScanMode(4, 0);
                        LogUtil_1.default.info(`${this.TAG} subscribeStateChange->stateChange return: true`);
                        callback(true);
                        break;
                    case BluetoothState.STATE_OFF:
                        LogUtil_1.default.info(`${this.TAG} subscribeStateChange->stateChange return: false`);
                        callback(false);
                        break;
                    default:
                        break;
                }
            }
        });
    }
    /**
      * unsubscribe Bluetooth switch status Change
      */
    unsubscribeStateChange(callback) {
        _ohos_bluetooth_1.off('stateChange', (data) => {
            LogUtil_1.default.info(`${this.TAG} unsubscribeStateChange->stateChange data:${data}`);
            if (callback) {
                let result = false;
                switch (data) {
                    case BluetoothState.STATE_ON:
                        LogUtil_1.default.info(`${this.TAG} unsubscribeStateChange->stateChange return : true`);
                        callback(true);
                        break;
                    case BluetoothState.STATE_OFF:
                        LogUtil_1.default.info(`${this.TAG} unsubscribeStateChange->stateChange return : false`);
                        callback(false);
                        break;
                    default:
                        break;
                }
            }
        });
    }
    /**
      * Turn on Bluetooth
      */
    enableBluetooth() {
        return _ohos_bluetooth_1.enableBluetooth();
    }
    /**
      * Turn off Bluetooth
      */
    disableBluetooth() {
        return _ohos_bluetooth_1.disableBluetooth();
    }
    /**
      * Get local name
      */
    getLocalName() {
        return _ohos_bluetooth_1.getLocalName();
    }
    /**
      * Set local name
      */
    setLocalName(name) {
        return _ohos_bluetooth_1.setLocalName(name);
    }
    /**
      * Get paired device ids
      */
    getPairedDeviceIds() {
        return _ohos_bluetooth_1.getPairedDevices();
    }
    /**
      * Start Bluetooth discovery
      */
    startBluetoothDiscovery() {
        return _ohos_bluetooth_1.startBluetoothDiscovery();
    }
    /**
      * Stop Bluetooth discovery
      */
    stopBluetoothDiscovery() {
        let ret = _ohos_bluetooth_1.stopBluetoothDiscovery();
        this.unsubscribeStateChange();
        this.unsubscribeBluetoothDeviceFind();
        this.unsubscribeBondStateChange();
        this.unsubscribeDeviceStateChange();
        return ret;
    }
    /**
      * Subscribe Bluetooth status Change
      */
    subscribeBluetoothDeviceFind(callback) {
        _ohos_bluetooth_1.on('bluetoothDeviceFind', (data) => {
            LogUtil_1.default.info(`${this.TAG} subscribeBluetoothDeviceFind->deviceFind return:${JSON.stringify(data)}`);
            if (callback) {
                callback(data);
            }
        });
    }
    /**
      * unsubscribe Bluetooth status Change
      */
    unsubscribeBluetoothDeviceFind(callback) {
        _ohos_bluetooth_1.off('bluetoothDeviceFind', (data) => {
            LogUtil_1.default.info(`${this.TAG} unsubscribeBluetoothDeviceFind->deviceFind return:${JSON.stringify(data)}`);
            if (callback) {
                callback(data);
            }
        });
    }
    /**
      * Pair device
      */
    pairDevice(deviceId) {
        return _ohos_bluetooth_1.pairDevice(deviceId);
    }
    /**
      * Subscribe PinRequired
      */
    subscribePinRequired(callback) {
        _ohos_bluetooth_1.on('pinRequired', (data) => {
            LogUtil_1.default.info(`${this.TAG} subscribePinRequired->pinRequired return:${JSON.stringify(data)}`);
            if (callback) {
                callback(data);
            }
        });
    }
    /**
      * Unsubscribe PinRequired
      */
    unsubscribePinRequired(callback) {
        _ohos_bluetooth_1.off('pinRequired', (data) => {
            LogUtil_1.default.info(`${this.TAG} unsubscribePinRequired->pinRequired return: ${JSON.stringify(data)}`);
            if (callback) {
                callback(data);
            }
        });
    }
    /**
      * Set device PairingConfirmation
      */
    setDevicePairingConfirmation(deviceId, accept) {
        return _ohos_bluetooth_1.setDevicePairingConfirmation(deviceId, accept);
    }
    /**
      * Subscribe bondStateChange
      */
    subscribeBondStateChange(callback) {
        _ohos_bluetooth_1.on('bondStateChange', (data) => {
            LogUtil_1.default.info(`${this.TAG} subscribeBondStateChange->bondStateChange data:${JSON.stringify(data)}`);
            if (callback) {
                let result = {
                    deviceId: data.deviceId,
                    bondState: data.state
                };
                LogUtil_1.default.info(`${this.TAG} subscribeBondStateChange->bondStateChange return:${JSON.stringify(result)}`);
                callback(result);
            }
        });
    }
    /**
      * Unsubscribe bondStateChange
      */
    unsubscribeBondStateChange(callback) {
        _ohos_bluetooth_1.off('bondStateChange', (data) => {
            LogUtil_1.default.info(`${this.TAG} unsubscribeBondStateChange->bondStateChange data:${JSON.stringify(data)}`);
            if (callback) {
                let result = {
                    deviceId: data.deviceId,
                    bondState: data.state
                };
                LogUtil_1.default.info(`${this.TAG} unsubscribeBondStateChange->bondStateChange return:${JSON.stringify(result)}`);
                callback(result);
            }
        });
    }
    /**
      * Get device name
      */
    getDeviceName(deviceId) {
        return _ohos_bluetooth_1.getRemoteDeviceName(deviceId);
    }
    /**
      * Get device type
      */
    getDeviceType(deviceId) {
        let deviceType = '';
        let deviceClass = _ohos_bluetooth_1.getRemoteDeviceClass(deviceId);
        deviceType = "Major:" + deviceClass.majorClass.toString();
        return deviceType;
    }
    /**
      * Get device state
      */
    getDeviceState(deviceId) {
        let result = [];
        for (let i = 0; i < this.profiles.length; i++) {
            if (this.profiles[i]) {
                let state = this.profiles[i].getDeviceState(deviceId);
                result.push({
                    profileId: i,
                    profileConnectionState: state
                });
            }
        }
        return result;
    }
    /**
      * Unpair device
      */
    unpairDevice(deviceId) {
        //  return bluetooth.cancelPairedDevice(deviceId);
        return true;
    }
    /**
      * Connect device
      */
    connectDevice(deviceId) {
        let result = [];
        for (let i = 0; i < this.profiles.length; i++) {
            if (this.profiles[i]) {
                let profile = this.profiles[i];
                let connectRet = profile.connect(deviceId);
                result.push({
                    profileId: i,
                    connectRet: connectRet
                });
            }
        }
        return result;
    }
    /**
      * Disconnect device
      */
    disconnectDevice(deviceId) {
        let result = [];
        for (let i = 0; i < this.profiles.length; i++) {
            let profile = this.profiles[i];
            if (this.profiles[i]) {
                let profileConnectionState = profile.getDeviceState(deviceId);
                let disconnectRet = true;
                LogUtil_1.default.info(`${this.TAG} disconnectDevice deviceId = ${deviceId}, connectionState = ${profileConnectionState}`);
                if (profileConnectionState === 2) {
                    disconnectRet = profile.disconnect(deviceId);
                    LogUtil_1.default.info(`${this.TAG} disconnectDevice call disconnect over. api return =  ${disconnectRet}, deviceId = ${deviceId}`);
                }
                result.push({
                    profileId: i,
                    disconnectRet: disconnectRet
                });
            }
        }
        return result;
    }
    /**
      * Subscribe device connection state Change
      */
    subscribeDeviceStateChange(callback) {
        for (let i = 0; i < this.profiles.length; i++) {
            if (this.profiles[i]) {
                let profile = this.profiles[i];
                profile.on('connectionStateChange', (data) => {
                    LogUtil_1.default.info(`${this.TAG} subscribeDeviceStateChange->connectionStateChange data:${JSON.stringify(data)}`);
                    if (callback) {
                        let result = {
                            profileId: i,
                            deviceId: data.deviceId,
                            profileConnectionState: data.state
                        };
                        LogUtil_1.default.info(`${this.TAG} subscribeDeviceStateChange->connectionStateChange return:${JSON.stringify(result)}`);
                        callback(result);
                    }
                });
            }
        }
    }
    /**
      * unsubscribe device connection state Change
      */
    unsubscribeDeviceStateChange(callback) {
        for (let i = 0; i < this.profiles.length; i++) {
            if (this.profiles[i]) {
                let profile = this.profiles[i];
                profile.off('connectionStateChange', (data) => {
                    LogUtil_1.default.info(`${this.TAG} unsubscribeDeviceStateChange->connectionStateChange data:${JSON.stringify(data)}`);
                    if (callback) {
                        let result = {
                            profileId: i,
                            deviceId: data.deviceId,
                            profileConnectionState: data.state
                        };
                        LogUtil_1.default.info(`${this.TAG} unsubscribeDeviceStateChange->connectionStateChange return:${JSON.stringify(result)}`);
                        callback(result);
                    }
                });
            }
        }
    }
    // BLE public
    createGattServer() {
        return _ohos_bluetooth_1.BLE.createGattServer();
    }
    createGattClient(deviceId) {
        return _ohos_bluetooth_1.BLE.createGattClientDevice(deviceId);
    }
    getConnectedBLEDevices() {
        return _ohos_bluetooth_1.BLE.getConnectedBLEDevices();
    }
    // start BLE scanning
    startBLEScan(filters, options) {
        switch (arguments.length) {
            case 1:
                LogUtil_1.default.info(`${this.TAG} startBLEScan with filters(or null) only `);
                _ohos_bluetooth_1.BLE.startBLEScan(filters);
                break;
            case 2:
                LogUtil_1.default.info(`${this.TAG} startBLEScan with filters and options`);
                _ohos_bluetooth_1.BLE.startBLEScan(filters, options);
                break;
            default:
                LogUtil_1.default.error(`${this.TAG} startBLEScan with unexpected input parameter!`);
        }
    }
    /**
      * Stops BLE scanning.
      */
    stopBLEScan() {
        _ohos_bluetooth_1.BLE.stopBLEScan();
    }
    /**
      * Subscribe BLEDeviceFind
      */
    subscribeBLEDeviceFind(callback) {
        _ohos_bluetooth_1.BLE.on("BLEDeviceFind", (bleDeviceFindData) => {
            LogUtil_1.default.info(`${this.TAG} subscribeBLEDeviceFind->deviceFind return:${JSON.stringify(bleDeviceFindData)}`);
            if (callback) {
                callback(bleDeviceFindData);
            }
        });
    }
    /**
      * unsubscribe BLEDeviceFind
      */
    unsubscribeBLEDeviceFind(callback) {
        _ohos_bluetooth_1.BLE.off('BLEDeviceFind', (bleDeviceFindData) => {
            LogUtil_1.default.info(`${this.TAG} unsubscribeBLEDeviceFind->deviceFind return:${JSON.stringify(bleDeviceFindData)}`);
            if (callback) {
                callback(bleDeviceFindData);
            }
        });
    }
}
exports.BluetoothModel = BluetoothModel;
let bluetoothModel = new BluetoothModel();
exports["default"] = bluetoothModel;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/a2dpSinkProfileInterface.ets":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/a2dpSinkProfileInterface.ets ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testProfileGetDeviceState = exports.testProfileGetConnectionDevices = exports.testProfileGetPlayingState = exports.testProfileDisConnect = exports.testProfileConnect = void 0;
/*
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
 * Profile A2DP Test Page Of Bluetooth test
 */
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
const btProfileModel_1 = __importDefault(__webpack_require__(/*! ./btProfileModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/btProfileModel.ets"));
function testProfileConnect() {
    let message = "ProfileConnect test";
    let textMessage = "";
    let btConnectionState = AppStorage.Get("btConnectionState");
    let deviceId = AppStorage.Get("deviceId");
    let profileType = AppStorage.Get("profileType");
    if (btConnectionState == 1 || btConnectionState == 2) {
        _system_prompt_1.showToast({ message: btConnectionState == 1 ? "????????????????????????" : "??????????????????" });
        return message;
    }
    let ret = btProfileModel_1.default.getProfile(profileType).connect(deviceId);
    if (ret) {
        btConnectionState = 1;
    }
    textMessage = "connect ret???" + ret;
    message = "connect ret???" + ret;
    AppStorage.SetOrCreate("textMessage", textMessage);
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testProfileConnect = testProfileConnect;
function testProfileDisConnect() {
    let message = "profileDisConnect test";
    let textMessage = "";
    let btConnectionState = AppStorage.Get("btConnectionState");
    let deviceId = AppStorage.Get("deviceId");
    let profileType = AppStorage.Get("profileType");
    if (btConnectionState == 0 || btConnectionState == 3) {
        _system_prompt_1.showToast({ message: btConnectionState == 0 ? "??????????????????" : "???????????????????????????" });
        return message;
    }
    let ret = btProfileModel_1.default.getProfile(profileType).disconnect(deviceId);
    if (ret) {
        btConnectionState = 3;
    }
    textMessage = "disconnect ret???" + ret;
    AppStorage.SetOrCreate("textMessage", textMessage);
    message = "disconnect ret???" + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testProfileDisConnect = testProfileDisConnect;
function testProfileGetPlayingState() {
    let message = "profileGetPlayingState test";
    let textMessage = "";
    let deviceId = AppStorage.Get("deviceId");
    let profileType = AppStorage.Get("profileType");
    _system_prompt_1.showToast({ message: profileType });
    console.info("profileType:" + profileType);
    let profile = btProfileModel_1.default.getProfile(parseInt(profileType));
    let ret = -1;
    if (profile) {
        ret = profile.getPlayingState(deviceId);
    }
    textMessage = "getPlayingState ret: " + ret;
    message = "getPlayingState ret: " + ret;
    AppStorage.SetOrCreate("textMessage", textMessage);
    _system_prompt_1.showToast({ message: message });
    return message;
    //visibility(this.pageType == 0 ? Visibility.Visible : Visibility.None)
}
exports.testProfileGetPlayingState = testProfileGetPlayingState;
function testProfileGetConnectionDevices() {
    let message = "profileGetConnectionDevices test";
    let textMessage = "";
    let profileType = AppStorage.Get("profileType");
    let ret = btProfileModel_1.default.getProfile(profileType).getConnectionDevices();
    textMessage = "getConnectionDevices ret: " + ret;
    message = "getConnectionDevices ret: " + ret;
    AppStorage.SetOrCreate("textMessage", textMessage);
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testProfileGetConnectionDevices = testProfileGetConnectionDevices;
function testProfileGetDeviceState() {
    let message = "ProfileGetDeviceState test";
    let textMessage = "";
    let deviceId = AppStorage.Get("deviceId");
    let profileType = AppStorage.Get("profileType");
    let ret = btProfileModel_1.default.getProfile(profileType).getDeviceState(deviceId);
    textMessage = "getDeviceState ret: " + ret;
    message = "getDeviceState ret: " + ret;
    AppStorage.SetOrCreate("textMessage", textMessage);
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testProfileGetDeviceState = testProfileGetDeviceState;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/autoTestDataModels.ets":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/autoTestDataModels.ets ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initPanNetworkProfileAutoData = exports.initHitHostProfileAutoData = exports.initHandsFreeAudioGatewayProfileAutoData = exports.initA2dpSourceProfileAutoData = exports.initSppServerAutoData = exports.initSppClientAutoData = exports.initGattServerAutoData = exports.initGattClientAutoData = exports.initBleAutoData = exports.initBrAutoData = exports.PanNetworkProfileAutoTestCase = exports.HitHostProfileAutoTestCase = exports.HandsFreeAudioGatewayProfileAutoTestCase = exports.A2dpSourceProfileAutoTestCase = exports.SppServerAutoTestCase = exports.SppClientAutoTestCase = exports.GattServerAutoTestCase = exports.GattClientAutoTestCase = exports.BleAutoTestCase = exports.BrAutoTestCase = void 0;
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
const testData_1 = __webpack_require__(/*! ./testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
const brInterface_1 = __webpack_require__(/*! ./brInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets");
const bleInterface_1 = __webpack_require__(/*! ./bleInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets");
__webpack_require__(/*! ./profileInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/profileInterface.ets");
const gattClientInterface_1 = __webpack_require__(/*! ./gattClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattClientInterface.ets");
const gattServerInterface_1 = __webpack_require__(/*! ./gattServerInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattServerInterface.ets");
const sppClientInterface_1 = __webpack_require__(/*! ./sppClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppClientInterface.ets");
const sppServerInterface_1 = __webpack_require__(/*! ./sppServerInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppServerInterface.ets");
const a2dpSinkProfileInterface_1 = __webpack_require__(/*! ./a2dpSinkProfileInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/a2dpSinkProfileInterface.ets");
exports.BrAutoTestCase = [
    { 'name': '??????????????????', 'detail': '??????????????????', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '??????pin?????????', 'detail': '??????pin?????????', 'method': 'on.pinRequired', 'api': brInterface_1.testOnPinRequired, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '????????????????????????', 'detail': '????????????????????????', 'method': 'on.bondStateChange', 'api': brInterface_1.testOnBondStateChange, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '????????????????????????', 'detail': '??????????????????????????????', 'method': 'getBtConnectionState', 'api': brInterface_1.testGetBtConnectionState, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    //  { 'name': '??????????????????', 'detail': '???????????????????????????', 'method': 'startBluetoothDiscovery', 'api': testStartBluetoothDiscovery, 'result': 'None', 'category': AutoCategory.BrAuto },
    { 'name': '??????????????????', 'detail': '????????????', 'method': 'stopBluetoothDiscovery', 'api': brInterface_1.testStopBluetoothDiscovery, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '????????????', 'detail': '????????????????????????', 'method': 'pairDevice', 'api': brInterface_1.testPairDevice, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '????????????????????????', 'detail': '?????????????????????????????????', 'method': 'getDeviceName', 'api': brInterface_1.testGetRemoteDeviceName, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '????????????????????????', 'detail': '?????????????????????????????????', 'method': 'getDeviceType', 'api': brInterface_1.testGetRemoteDeviceClass, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '??????????????????', 'detail': '?????????????????????????????????', 'method': 'getPairedDeviceIds', 'api': brInterface_1.testGetPairedDevices, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'unpairDevice', 'api': brInterface_1.testUnPairedDevice, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
    //  { 'name': '??????????????????????????????1', 'detail': '?????????????????????????????????', 'method': 'getProfileConnState', 'api':testGetProfileConnState1,'result': 'None', 'category': AutoCategory.BrAuto },
    //  { 'name': '??????????????????????????????2', 'detail': '?????????????????????????????????', 'method': 'getDeviceState','api':testGetProfileConnState2, 'result': 'None', 'category': AutoCategory.BrAuto },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.BrAuto },
];
exports.BleAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    //  { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattServer', 'api':testCreateGattServerDevice, 'result': 'None', 'category': AutoCategory.BleAuto },
    //  { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattClient', 'api':testCreateGattClientDevice, 'result': 'None', 'category': AutoCategory.BleAuto },
    { 'name': '???????????????Ble??????', 'detail': '???????????????Ble????????????', 'method': 'getConnectedBleDevices', 'api': bleInterface_1.testGetConnectedBLEDevices, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '??????Ble??????????????????', 'detail': '??????Ble????????????????????????', 'method': 'on.BleDeviceFind', 'api': bleInterface_1.testOnBLEDeviceFind, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '??????Ble??????', 'detail': '????????????Ble??????', 'method': 'startBleScan', 'api': bleInterface_1.testStartBLEScan, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '??????Ble??????', 'detail': '????????????', 'method': 'stopBleScan', 'api': bleInterface_1.testStopBLEScan, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.BleAuto },
];
exports.GattClientAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattClient', 'api': gattClientInterface_1.testCreateGattClient, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': 'Ble????????????', 'detail': '??????Ble????????????', 'method': 'on.BleConnectionStateChange', 'api': gattClientInterface_1.testOnBLEConnectionStateChange, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????', 'detail': 'Gatt??????', 'method': 'connect', 'api': gattClientInterface_1.testConnect, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '????????????callback', 'detail': '????????????callback', 'method': 'getServices(Callback)', 'api': gattClientInterface_1.testGetServicesCallback, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '????????????promise', 'detail': '????????????promise', 'method': 'getServices(promise)', 'api': gattClientInterface_1.testGetServicesPromise, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '???????????????callback', 'detail': '???????????????callback', 'method': 'readCharacteristicValue(callback)', 'api': gattClientInterface_1.testReadCharacteristicValueCallback, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '???????????????promise', 'detail': '???????????????promise', 'method': 'readCharacteristicValue(promise)', 'api': gattClientInterface_1.testReadCharacteristicValuePromise, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????callback', 'detail': '??????????????????callback', 'method': 'readDescriptorValue(callback)', 'api': gattClientInterface_1.testReadDescriptorValueCallback, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????promise', 'detail': '??????????????????promise', 'method': 'readDescriptorValue(promise)', 'api': gattClientInterface_1.testReadDescriptorValuePromise, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'writeCharacteristicValue', 'api': gattClientInterface_1.testWriteCharacteristicValue, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????', 'detail': '??????????????????', 'method': 'writeDescriptorValue', 'api': gattClientInterface_1.testWriteDescriptorValue, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': 'Ble???????????????', 'detail': '??????Ble???????????????', 'method': 'on.BleCharacteristicChange', 'api': gattClientInterface_1.testOnBLECharacteristicChange, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????BleMtu??????', 'detail': '??????BleMtu??????', 'method': 'setBleMtuSize', 'api': gattClientInterface_1.testSetBLEMtuSize, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '????????????????????????', 'detail': '????????????????????????', 'method': 'setNotifyCharacteristicChanged', 'api': gattClientInterface_1.testSetNotifyCharacteristicChanged, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????callback', 'detail': '??????????????????callback', 'method': 'getDeviceName()callback', 'api': gattClientInterface_1.testGetDeviceNameCallback, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????????????????promise', 'detail': '??????????????????promise', 'method': 'getDeviceName()Promise', 'api': gattClientInterface_1.testGetDeviceNamePromise, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????Rssi???callback', 'detail': '??????Rssi???callback', 'method': 'getRssiValue()Callback', 'api': gattClientInterface_1.testGetRssiValueCallback, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????Rssi???promise', 'detail': '??????Rssi???promise', 'method': 'getRssiValue()Promise', 'api': gattClientInterface_1.testGetRssiValuePromise, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '????????????', 'detail': '??????Gatt??????', 'method': 'disconnect', 'api': gattClientInterface_1.testDisconnect, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '??????', 'detail': '??????Gatt?????????', 'method': 'close', 'api': gattClientInterface_1.testGattClientClose, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.GattClientAuto },
];
exports.GattServerAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattServer', 'api': gattServerInterface_1.testCreateGattServer, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '????????????', 'detail': '??????Gatt??????', 'method': 'addService', 'api': gattServerInterface_1.testAddService, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'startAdvertising', 'api': gattServerInterface_1.testStartAdvertising, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '????????????', 'detail': '??????Gatt????????????', 'method': 'on.connectStateChange', 'api': gattServerInterface_1.testOnConnectStateChange, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.characteristicRead', 'api': gattServerInterface_1.testOnCharacteristicRead, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.characteristicWrite', 'api': gattServerInterface_1.testOnCharacteristicWrite, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.descriptorRead', 'api': gattServerInterface_1.testOnDescriptorRead, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.descriptorWrite', 'api': gattServerInterface_1.testOnDescriptorWrite, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'stopAdvertising', 'api': gattServerInterface_1.testStopAdvertising, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '????????????', 'detail': '??????Gatt??????', 'method': 'removeService', 'api': gattServerInterface_1.testRemoveService, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '??????', 'detail': '??????Gatt?????????', 'method': 'close', 'api': gattServerInterface_1.testGattServerClose, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.GattServerAuto },
];
exports.SppClientAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': '??????SPP????????????', 'detail': '??????SPP????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': 'Spp???????????????(????????????)', 'detail': 'Spp?????????(????????????)??????', 'method': 'sppConnect', 'api': sppClientInterface_1.testSppClientConnectSafe, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': 'Spp???????????????(???????????????)', 'detail': 'Spp?????????(???????????????)??????', 'method': 'sppConnect', 'api': sppClientInterface_1.testSppClientConnectUnSafe, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': '????????????', 'detail': '????????????????????????', 'method': 'pairDevice', 'api': brInterface_1.testPairDevice, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppWrite', 'api': sppClientInterface_1.testSppClientWrite, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'on.sppRead', 'api': sppClientInterface_1.testSppClientReadOn, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'off.sppRead', 'api': sppClientInterface_1.testSppClientReadOff, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppCloseClientSocket', 'api': sppClientInterface_1.testSppClientClose, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.SppClientAuto },
];
exports.SppServerAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': '??????SPP????????????', 'detail': '??????SPP????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': '??????pin?????????', 'detail': '??????pin?????????', 'method': 'on.pinRequired', 'api': brInterface_1.testOnPinRequired, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp???????????????(????????????)', 'detail': 'Spp?????????(????????????)??????', 'method': 'sppListen', 'api': sppServerInterface_1.testSppServerCreateSafe, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp???????????????(???????????????)', 'detail': 'Spp?????????(???????????????)??????', 'method': 'sppListen', 'api': sppServerInterface_1.testSppServerCreateUnSafe, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppWrite', 'api': sppServerInterface_1.testSppServerWrite, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppAccept', 'api': sppServerInterface_1.testSppServerAccept, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'on.sppRead', 'api': sppServerInterface_1.testSppServerReadOn, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'off.sppRead', 'api': sppServerInterface_1.testSppServerReadOff, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppCloseServerSocket', 'api': sppServerInterface_1.testSppServerClose, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppCloseClientSocket', 'api': sppServerInterface_1.testSppCloseClientSocket, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.SppServerAuto },
];
exports.A2dpSourceProfileAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????', 'detail': 'Profile??????', 'method': 'connect', 'api': a2dpSinkProfileInterface_1.testProfileConnect, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getPlayingState', 'api': a2dpSinkProfileInterface_1.testProfileGetPlayingState, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.AutoCategory.A2dpSourceAuto },
];
exports.HandsFreeAudioGatewayProfileAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
    { 'name': '??????', 'detail': 'Profile??????', 'method': 'connect', 'api': a2dpSinkProfileInterface_1.testProfileConnect, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto, },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto, },
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.AutoCategory.HandsFreeAudioGatewayAuto },
];
exports.HitHostProfileAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '??????', 'detail': 'Profile??????', 'method': 'connect', 'api': a2dpSinkProfileInterface_1.testProfileConnect, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.AutoCategory.HitHostAuto },
];
exports.PanNetworkProfileAutoTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.AutoCategory.PanNetworkAuto },
];
function initBrAutoData() {
    let TestAutoArray = [];
    exports.BrAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initBrAutoData = initBrAutoData;
function initBleAutoData() {
    let TestAutoArray = [];
    exports.BleAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initBleAutoData = initBleAutoData;
function initGattClientAutoData() {
    let TestAutoArray = [];
    exports.GattClientAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initGattClientAutoData = initGattClientAutoData;
function initGattServerAutoData() {
    let TestAutoArray = [];
    exports.GattServerAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initGattServerAutoData = initGattServerAutoData;
function initSppClientAutoData() {
    let TestAutoArray = [];
    exports.SppClientAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initSppClientAutoData = initSppClientAutoData;
function initSppServerAutoData() {
    let TestAutoArray = [];
    exports.SppServerAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initSppServerAutoData = initSppServerAutoData;
function initA2dpSourceProfileAutoData() {
    let TestAutoArray = [];
    exports.A2dpSourceProfileAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initA2dpSourceProfileAutoData = initA2dpSourceProfileAutoData;
function initHandsFreeAudioGatewayProfileAutoData() {
    let TestAutoArray = [];
    exports.HandsFreeAudioGatewayProfileAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initHandsFreeAudioGatewayProfileAutoData = initHandsFreeAudioGatewayProfileAutoData;
function initHitHostProfileAutoData() {
    let TestAutoArray = [];
    exports.HitHostProfileAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initHitHostProfileAutoData = initHitHostProfileAutoData;
function initPanNetworkProfileAutoData() {
    let TestAutoArray = [];
    exports.PanNetworkProfileAutoTestCase.forEach(item => {
        TestAutoArray.push(new testData_1.TestAuto(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestAutoArray;
}
exports.initPanNetworkProfileAutoData = initPanNetworkProfileAutoData;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testOnBLEDeviceFind = exports.testStopBLEScan = exports.testStartBLEScan = exports.testGetConnectedBLEDevices = exports.testCreateGattClientDevice = exports.testCreateGattServerDevice = void 0;
/*
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
 * BLE Test Page Of Bluetooth test
 */
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
const BluetoothModel_1 = __importDefault(__webpack_require__(/*! ./BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
let gattServerInstance = null;
function testCreateGattServerDevice() {
    let message = "createGattServerDevice test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        message = "createGattServer starts";
        if (!gattServerInstance) {
            gattServerInstance = BluetoothModel_1.default.createGattServer();
            message = "createGattServer: succeeds.";
        }
        else {
            message = "GattServer existed!";
        }
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testCreateGattServerDevice = testCreateGattServerDevice;
let gattClientDeviceInstance = null;
function testCreateGattClientDevice() {
    let message = "test createGattClientDevice";
    let btState = _ohos_bluetooth_1.getState();
    let peripheralDeviceId = AppStorage.Get('peripheralDeviceId');
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        message = "createGattClient start";
        if (!gattClientDeviceInstance) {
            gattClientDeviceInstance = BluetoothModel_1.default.createGattClient(peripheralDeviceId);
            message = "createGattClient:succeeds.";
        }
        else {
            message = "gattClient existed!";
        }
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testCreateGattClientDevice = testCreateGattClientDevice;
function testGetConnectedBLEDevices() {
    let connectedBleDevices = BluetoothModel_1.default.getConnectedBLEDevices();
    let message = "getConnectedBLEDevices" + JSON.stringify(connectedBleDevices);
    console.log("getConnectedBLEDevices" + JSON.stringify(connectedBleDevices));
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetConnectedBLEDevices = testGetConnectedBLEDevices;
function testStartBLEScan() {
    let btState = _ohos_bluetooth_1.getState();
    let message = "test startBLEScan";
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        return message;
    }
    let txtScanFilter_deviceId = AppStorage.Get('txtScanFilterDeviceId');
    let txtScanFilter_name = AppStorage.Get('txtScanFilterName');
    let txtScanFilter_serviceUuid = AppStorage.Get('txtScanFilterServiceUuid');
    let txtScanOptions_interval = AppStorage.Get('txtScanOptions_interval');
    let txtScanOptions_dutyMode = AppStorage.Get('txtScanOptionsDutyMode');
    let txtScanOptions_matchMode = AppStorage.Get('txtScanOptionsMatchMode');
    let cbxBleScanFilter = AppStorage.Get('cbxBleScanFilter');
    let cbxBleScanOptions = AppStorage.Get('cbxBleScanOptions');
    let curScanFilters = [];
    let bleScanFilter = {
        deviceId: txtScanFilter_deviceId,
        name: txtScanFilter_name,
        serviceUuid: txtScanFilter_serviceUuid
    };
    let curScanOptions = {
        interval: parseInt(txtScanOptions_interval),
        dutyMode: parseInt(txtScanOptions_dutyMode),
        matchMode: parseInt(txtScanOptions_matchMode)
    };
    if (cbxBleScanFilter) {
        curScanFilters.push(bleScanFilter);
    }
    if (!cbxBleScanOptions) {
        if (cbxBleScanFilter) {
            BluetoothModel_1.default.startBLEScan(curScanFilters);
            message = "startBLEScan Filters:" + JSON.stringify(curScanFilters);
        }
        else {
            BluetoothModel_1.default.startBLEScan(null);
            message = "startBLEScan(null)";
        }
    }
    else {
        BluetoothModel_1.default.startBLEScan(curScanFilters, curScanOptions);
        message = "startBLEScan Filters:" + JSON.stringify(curScanFilters) + "\n" + "Options:" + JSON.stringify(curScanOptions);
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testStartBLEScan = testStartBLEScan;
function testStopBLEScan() {
    BluetoothModel_1.default.stopBLEScan();
    let message = "stopBLEScan OK!";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testStopBLEScan = testStopBLEScan;
let bleDeviceFind = false;
function testOnBLEDeviceFind() {
    let message = "onBLEDeviceFind test";
    if (bleDeviceFind) {
        BluetoothModel_1.default.unsubscribeBLEDeviceFind();
        message = '??????BLE??????????????????';
        _system_prompt_1.showToast({ message: message });
    }
    else {
        BluetoothModel_1.default.subscribeBLEDeviceFind((deviceItems) => {
            LogUtil.log("BLE Test:" + 'available ble devices changed.');
            let message = "";
            let availBleDeviceIds = [];
            deviceItems === null || deviceItems === void 0 ? void 0 : deviceItems.forEach(deviceItem => {
                let newDevice = deviceItem.deviceId;
                message += "mac:" + newDevice;
                LogUtil.log("BLE Test:" + 'available bluetooth new device : ' + newDevice);
                availBleDeviceIds.push(newDevice);
            });
            AppStorage.SetOrCreate('bluetoothAvailableDevices', availBleDeviceIds);
            _system_prompt_1.showToast({ message: message });
        });
        message = "??????BLE??????????????????";
        _system_prompt_1.showToast({ message: message });
    }
    bleDeviceFind = !bleDeviceFind;
    return message;
}
exports.testOnBLEDeviceFind = testOnBLEDeviceFind;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testOnBondStateChange = exports.testOnPinRequired = exports.testOnStateChange = exports.testGetProfileConnState2 = exports.testGetProfileConnState1 = exports.testGetPairedDevices = exports.testGetRemoteDeviceClass = exports.testGetRemoteDeviceName = exports.testUnPairedDevice = exports.testPairDevice = exports.testStopBluetoothDiscovery = exports.testStartBluetoothDiscovery = exports.testGetBluetoothScanMode = exports.testSetBluetoothScanMode = exports.testGetLocalName = exports.testSetLocalName = exports.testGetBtConnectionState = exports.testGetState = exports.testDisableBluetooth = exports.testEnableBluetooth = exports.testInputBluetooth = void 0;
/*
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
/**
 *BR Test Page Of Bluetooth test
 */
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
const BluetoothModel_1 = __importDefault(__webpack_require__(/*! ./BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
var _system_router_1  = globalThis.requireNativeModule('system.router');
const BluetoothDeviceController_1 = __importDefault(__webpack_require__(/*! ../controller/BluetoothDeviceController */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/controller/BluetoothDeviceController.ts"));
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
var _ohos_bluetooth_2  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
const PAGE_URI_DEVICE_FOUND_MODE = 'pages/subManualApiTest/subBrTest/deviceFound';
function testInputBluetooth() {
    //  let ret = btApi.enableBluetooth();
    //  let btEnable = ret;
    //  AppStorage.SetOrCreate('bluetoothIsOn', btEnable);
    //  let message = "???????????????????????????" + ret;
    let message = "testInputBluetooth";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testInputBluetooth = testInputBluetooth;
let btEnable = false;
function testEnableBluetooth() {
    let message = "enableBluetooth test";
    if (btEnable) {
        message = '??????????????????';
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let ret = BluetoothModel_1.default.enableBluetooth();
    btEnable = true;
    AppStorage.SetOrCreate('bluetoothIsOn', btEnable);
    message = "???????????????????????????" + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testEnableBluetooth = testEnableBluetooth;
function testDisableBluetooth() {
    let message = "disableBluetooth test";
    //  if (!btEnable) {
    //    message = '??????????????????';
    //    prompt.showToast({message: message})
    //    return message
    //  }
    let ret = BluetoothModel_1.default.disableBluetooth();
    btEnable = false;
    AppStorage.SetOrCreate('bluetoothIsOn', btEnable);
    message = "??????????????????????????????" + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testDisableBluetooth = testDisableBluetooth;
function testGetState() {
    let ret = BluetoothModel_1.default.getState();
    let stateBT = "getState test";
    switch (ret) {
        case 0:
            stateBT = 'STATE_OFF';
            break;
        case 1:
            stateBT = 'STATE_TURNING_ON';
            break;
        case 2:
            stateBT = 'STATE_ON';
            break;
        case 3:
            stateBT = 'STATE_TURNING_OFF';
            break;
        case 4:
            stateBT = 'STATE_BLE_TURNING_ON';
            break;
        case 5:
            stateBT = 'STATE_BLE_ON';
            break;
        case 6:
            stateBT = 'STATE_BLE_TURNING_OFF';
            break;
        default:
            stateBT = '????????????';
            break;
    }
    let message = "???????????????????????????" + stateBT;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetState = testGetState;
function testGetBtConnectionState() {
    let ret = BluetoothModel_1.default.getBtConnectionState();
    let message = "????????????????????????" + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetBtConnectionState = testGetBtConnectionState;
function testSetLocalName(name) {
    let ret = BluetoothModel_1.default.setLocalName(name);
    let message = "?????????" + ret + "??????????????????" + name;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSetLocalName = testSetLocalName;
function testGetLocalName() {
    let ret = BluetoothModel_1.default.getLocalName();
    let message = "?????????????????????" + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetLocalName = testGetLocalName;
function testSetBluetoothScanMode(mode, dur) {
    let retObj = { mod: 0, duration: -1 };
    let ret = BluetoothModel_1.default.setBluetoothScanMode(mode, dur);
    //  let ret = true   ????????????
    if (ret) {
        AppStorage.SetOrCreate('setScanModeRet', ret);
        retObj.mod = mode;
        retObj.duration = dur;
    }
    else {
        console.info("BluetoothModel.setBluetoothScanMode failed!");
    }
    console.info("BluetoothModel.setBluetoothScanMode success!", retObj);
    let message = "setBluetoothScanMode??????" + ret ? "??????" : 0;
    _system_prompt_1.showToast({ message: message });
    return retObj;
}
exports.testSetBluetoothScanMode = testSetBluetoothScanMode;
function testGetBluetoothScanMode() {
    let ret = BluetoothModel_1.default.getBluetoothScanMode();
    let message = "??????: " + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetBluetoothScanMode = testGetBluetoothScanMode;
function testStartBluetoothDiscovery() {
    let message = "startBluetoothDiscovery test";
    let btEnable = AppStorage.Get('bluetoothIsOn');
    if (!btEnable) {
        message = '??????????????????';
        return message;
    }
    else {
        _system_router_1.push({ uri: PAGE_URI_DEVICE_FOUND_MODE });
        message = "??????????????????";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testStartBluetoothDiscovery = testStartBluetoothDiscovery;
function testStopBluetoothDiscovery() {
    let ret = BluetoothModel_1.default.stopBluetoothDiscovery();
    let message = "stopBluetoothDiscovery ?????????" + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testStopBluetoothDiscovery = testStopBluetoothDiscovery;
function testPairDevice(deviceId) {
    let controller = new BluetoothDeviceController_1.default;
    let ret = _ohos_bluetooth_1.pairDevice(deviceId);
    let message = "";
    controller.pair(deviceId, (pinCode) => {
        _system_prompt_1.showToast({ message: pinCode });
        AppStorage.SetOrCreate('pairedMac', deviceId);
    }, () => {
        _system_prompt_1.showToast({ message: "testPairDevice Failed" });
    });
    message = "?????????" + deviceId + ret ? "??????" : 0;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testPairDevice = testPairDevice;
function testUnPairedDevice(deviceId) {
    //  let deviceId = "123123"
    let ret = BluetoothModel_1.default.unpairDevice(deviceId);
    let message = " ?????? " + deviceId + " ?????????" + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testUnPairedDevice = testUnPairedDevice;
function testGetRemoteDeviceName(deviceId) {
    let ret = BluetoothModel_1.default.getDeviceName(deviceId);
    let message = '???????????????:' + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetRemoteDeviceName = testGetRemoteDeviceName;
function testGetRemoteDeviceClass(deviceId) {
    //  let deviceId= "12312fsdf";
    let ret = BluetoothModel_1.default.getDeviceType(deviceId);
    let message = '??????class???:' + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetRemoteDeviceClass = testGetRemoteDeviceClass;
function testGetPairedDevices() {
    let ret = BluetoothModel_1.default.getPairedDeviceIds();
    let message = "getPairedDevices test";
    console.log("BluetoothModel.getPairedDeviceIds:" + ret);
    if (ret.length == 0) {
        message = '??????????????????????????????';
    }
    else {
        message = "????????????" + ret[0];
        AppStorage.SetOrCreate('pairedMac', ret[0]);
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetPairedDevices = testGetPairedDevices;
function testGetProfileConnState1(profileId) {
    let ret = BluetoothModel_1.default.getProfileConnState(profileId);
    let message = ret;
    _system_prompt_1.showToast({ message: message });
    console.log("br.testGetProfileConnState1:" + ret);
    return message;
}
exports.testGetProfileConnState1 = testGetProfileConnState1;
function testGetProfileConnState2(profileId, deviceId) {
    let ret = _ohos_bluetooth_2.getProfile(profileId).getDeviceState(deviceId);
    let stateProfile = "";
    console.log('testGetProfileConnState2 state is ' + ret);
    switch (ret) {
        case 0:
            stateProfile = 'STATE_DISCONNECTED';
            break;
        case 1:
            stateProfile = 'STATE_CONNECTING';
            break;
        case 2:
            stateProfile = 'STATE_CONNECTED';
            break;
        case 3:
            stateProfile = 'STATE_DISCONNECTING';
            break;
        default:
            stateProfile = '??????';
            break;
    }
    let message = stateProfile;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetProfileConnState2 = testGetProfileConnState2;
let stateChange = false;
function testOnStateChange() {
    let message = "onStateChange test";
    console.log('testOnStateChange test');
    if (stateChange) {
        _ohos_bluetooth_1.off('stateChange', () => {
            _system_prompt_1.showToast({ message: "on.stateChange???????????????" });
        });
        message = "????????????????????????";
        console.log('testOffStateChange test');
    }
    else {
        _ohos_bluetooth_1.on('stateChange', (data) => {
            let btStateMessage = "";
            switch (data) {
                case 0:
                    btStateMessage += 'STATE_OFF';
                    break;
                case 1:
                    btStateMessage += 'STATE_TURNING_ON';
                    break;
                case 2:
                    btStateMessage += 'STATE_ON';
                    break;
                case 3:
                    btStateMessage += 'STATE_TURNING_OFF';
                    break;
                case 4:
                    btStateMessage += 'STATE_BLE_TURNING_ON';
                    break;
                case 5:
                    btStateMessage += 'STATE_BLE_ON';
                    break;
                case 6:
                    btStateMessage += 'STATE_BLE_TURNING_OFF';
                    break;
                default:
                    btStateMessage += '????????????';
                    break;
            }
            _system_prompt_1.showToast({ message: "??????:" + btStateMessage });
        });
        message = "????????????????????????";
    }
    stateChange = !stateChange;
    return message;
}
exports.testOnStateChange = testOnStateChange;
let pinRequired = false;
function testOnPinRequired() {
    let message = "onPinRequired test";
    console.log('testOnPinRequired test');
    if (pinRequired) {
        _ohos_bluetooth_1.off('pinRequired', () => {
            _system_prompt_1.showToast({ message: "on.pinRequired???????????????" });
        });
        message = "????????????pin?????????";
    }
    else {
        _ohos_bluetooth_1.on('pinRequired', (data) => {
            _system_prompt_1.showToast({ message: "mac:" + data.deviceId + "pin:" + data.pinCode });
        });
        message = "????????????pin?????????";
    }
    pinRequired = !pinRequired;
    return message;
}
exports.testOnPinRequired = testOnPinRequired;
let bondStateFlag = false;
function testOnBondStateChange() {
    let message = "onBondStateChange test";
    console.log('testOnBondStateChange test');
    if (bondStateFlag) {
        _ohos_bluetooth_1.off('bondStateChange', () => {
            _system_prompt_1.showToast({ message: "on.bondStateChange???????????????" });
        });
        message = "??????????????????????????????";
    }
    else {
        _ohos_bluetooth_1.on('bondStateChange', (data) => {
            _system_prompt_1.showToast({ message: "mac:" + data.deviceId + "state:" + data.state });
        });
        message = "??????????????????????????????";
    }
    bondStateFlag = !bondStateFlag;
    return message;
}
exports.testOnBondStateChange = testOnBondStateChange;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/btProfileModel.ets":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/btProfileModel.ets ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BTProfileModel = void 0;
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
 * BT ProfileModel Test Page Of Bluetooth test
 */
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../Utils/ConfigData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts"));
const BaseModel_1 = __importDefault(__webpack_require__(/*! ../../Utils/BaseModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/BaseModel.ts"));
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
class BTProfileModel extends BaseModel_1.default {
    constructor() {
        super();
        this.TAG = ConfigData_1.default.TAG + 'BTProfileModel';
        this.profiles = new Array();
        this.PROFILE_A2DP_SOURCE = 1;
        this.PROFILE_HANDS_FREE_AUDIO_GATEWAY = 4;
        this.PROFILE_HID_HOST = 6;
        this.PROFILE_PAN_NETWORK = 7;
        this.BLUETOOTH_STATE_OFF = 0;
    }
    initProfile() {
        console.log('bt_test BTProfileModel start');
        this.profiles[this.PROFILE_A2DP_SOURCE] = _ohos_bluetooth_1.getProfile(this.PROFILE_A2DP_SOURCE);
        this.profiles[this.PROFILE_HANDS_FREE_AUDIO_GATEWAY] = _ohos_bluetooth_1.getProfile(this.PROFILE_HANDS_FREE_AUDIO_GATEWAY);
        this.profiles[this.PROFILE_HID_HOST] = _ohos_bluetooth_1.getProfile(this.PROFILE_HID_HOST);
        this.profiles[this.PROFILE_PAN_NETWORK] = _ohos_bluetooth_1.getProfile(this.PROFILE_PAN_NETWORK);
        console.log('bt_test BTProfileModel end');
    }
    hasProfile(type) {
        if (!this.profiles[type]) {
            return false;
        }
        return true;
    }
    getA2DPSourceProfile() {
        if (this.profiles[this.PROFILE_A2DP_SOURCE] != null) {
            return this.profiles[this.PROFILE_A2DP_SOURCE];
        }
        return null;
    }
    getHandsFreeAudioGatewayProfile() {
        if (this.profiles[this.PROFILE_HANDS_FREE_AUDIO_GATEWAY] != null) {
            return this.profiles[this.PROFILE_HANDS_FREE_AUDIO_GATEWAY];
        }
        return null;
    }
    getHidHostProfile() {
        if (this.profiles[this.PROFILE_HID_HOST] != null) {
            return this.profiles[this.PROFILE_HID_HOST];
        }
        return null;
    }
    getPanNetworkProfile() {
        if (this.profiles[this.PROFILE_PAN_NETWORK] != null) {
            return this.profiles[this.PROFILE_PAN_NETWORK];
        }
        return null;
    }
    getProfile(type) {
        if (this.profiles[type] != null) {
            return this.profiles[type];
        }
        return null;
    }
    getBluetoothState() {
        return _ohos_bluetooth_1.getState();
    }
}
exports.BTProfileModel = BTProfileModel;
let btProfileModel = new BTProfileModel();
exports["default"] = btProfileModel;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattClientInterface.ets":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattClientInterface.ets ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testGetRssiValuePromise = exports.testGetRssiValueCallback = exports.testGetDeviceNamePromise = exports.testGetDeviceNameCallback = exports.testSetNotifyCharacteristicChanged = exports.testSetBLEMtuSize = exports.testOnBLECharacteristicChange = exports.testWriteDescriptorValue = exports.string2ArrayBuffer = exports.testWriteCharacteristicValue = exports.testReadDescriptorValuePromise = exports.testReadDescriptorValueCallback = exports.testReadCharacteristicValuePromise = exports.testReadCharacteristicValueCallback = exports.testGetServicesPromise = exports.testGetServicesCallback = exports.testGattClientClose = exports.testOnBLEConnectionStateChange = exports.testDisconnect = exports.testConnect = exports.testCreateGattClient = void 0;
/*
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
 * GattClient Test Of Bluetooth test
 */
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
const BluetoothModel_1 = __importDefault(__webpack_require__(/*! ./BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
let gattClientInstance = null;
function testCreateGattClient() {
    let message = "createGattClient test ";
    let peripheralDeviceId = AppStorage.Get('peripheralDeviceId');
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (gattClientInstance) {
            message = "GattClient exists!";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        //????????????
        _ohos_bluetooth_1.BLE.on("BLEDeviceFind", (scanResult) => {
            scanResult.forEach(device => {
                var devId = device.deviceId; //00:1A:7D:DA:71:15
                var rssi = device.rssi;
                var data = device.data;
                _system_prompt_1.showToast({ message: "findDevice:" + devId });
                if (devId == peripheralDeviceId) {
                    _ohos_bluetooth_1.BLE.stopBLEScan();
                    // create ble client instance
                    if (!gattClientInstance) {
                        gattClientInstance = BluetoothModel_1.default.createGattClient(devId);
                        message = "createGattClient succeeds ";
                    }
                }
            });
        });
        if (peripheralDeviceId && peripheralDeviceId.length > 15) {
            gattClientInstance = BluetoothModel_1.default.createGattClient(peripheralDeviceId.toUpperCase());
            if (gattClientInstance) {
                message = "createGattClient: " + peripheralDeviceId;
            }
            else {
                message = "createGattClient:fail ";
            }
        }
        else {
            message = "peripheralDeviceId invalid! ";
        }
        _system_prompt_1.showToast({ message: message });
    }
    else if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
    }
    else {
        message = "switching,please wait";
        _system_prompt_1.showToast({ message: message });
    }
    return message;
}
exports.testCreateGattClient = testCreateGattClient;
let bleConnectionState = 0;
function testConnect() {
    let message = "connect test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (gattClientInstance) {
            if (bleConnectionState == 0) {
                let ret = gattClientInstance.connect();
                message = "GattClient.connect: " + ret;
                bleConnectionState = 2;
            }
            else {
                message = "this device is not disconnected!";
            }
        }
        else {
            message = "NO_GATT_CLIENT_OBJECT";
        }
    }
    else if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testConnect = testConnect;
function testDisconnect() {
    let message = "test disconnect";
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (!gattClientInstance) {
            message = "NO_GATT_CLIENT_OBJECT";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        if (bleConnectionState == 2) {
            let ret = gattClientInstance.disconnect();
            message = "GattClient.disconnect: " + ret;
        }
        else {
            message = " BLE is not connected and no need to disconnect it ";
        }
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testDisconnect = testDisconnect;
let BLEConnectionStateChange = false;
function testOnBLEConnectionStateChange() {
    let message = "onBLEConnectionStateChange test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    message = " HAVE_GATT_CLIENT_OBJECT ";
    if (BLEConnectionStateChange) {
        gattClientInstance.off('BLEConnectionStateChange', () => {
            _system_prompt_1.showToast({ message: "off:BLEConnectionStateChange" });
        });
        message = "??????BLE??????????????????";
    }
    else {
        gattClientInstance.on('BLEConnectionStateChange', (bleConnectionState) => {
            switch (bleConnectionState) {
                case _ohos_bluetooth_1.ProfileConnectionState.STATE_DISCONNECTED:
                    bleConnectionStateInfo = "DISCONNECTED";
                    break;
                case _ohos_bluetooth_1.ProfileConnectionState.STATE_CONNECTING:
                    bleConnectionStateInfo = "CONNECTING";
                    break;
                case _ohos_bluetooth_1.ProfileConnectionState.STATE_CONNECTED:
                    bleConnectionStateInfo = "STATE_CONNECTED";
                    break;
                case _ohos_bluetooth_1.ProfileConnectionState.STATE_DISCONNECTING:
                    bleConnectionStateInfo = "STATE_DISCONNECTING";
                    break;
                default:
                    bleConnectionStateInfo = "UNDEFINED";
                    break;
            }
            AppStorage.SetOrCreate('bleConnectionStateInfo', bleConnectionStateInfo);
            _system_prompt_1.showToast({ message: "??????:" + bleConnectionStateInfo });
        });
        message = "??????BLE??????????????????";
    }
    BLEConnectionStateChange = !BLEConnectionStateChange;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testOnBLEConnectionStateChange = testOnBLEConnectionStateChange;
function testGattClientClose() {
    let message = "gattClientClose test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (!gattClientInstance) {
            message = "NO_GATT_CLIENT_OBJECT";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        let ret = gattClientInstance.close();
        if (ret) {
            gattClientInstance = null;
        }
        message = "GattClient.close:" + ret;
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGattClientClose = testGattClientClose;
function testGetServicesCallback() {
    let message = "getServicesCallback test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (!gattClientInstance) {
            message = "NO_GATT_CLIENT_OBJECT";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        gattClientInstance.getServices((code, gattServices) => {
            if (code.code != 0) {
                message = "getServices(call back) error code:" + code.code;
                _system_prompt_1.showToast({ message: message });
                return message;
            }
            else {
                message += "getServices(Callback):invoke succeeds! \n ";
                message += "bluetooth services size is " + gattServices.length + '\n';
                for (let i = 0; i < gattServices.length; i++) {
                    message += 'bluetooth serviceUuid is ' + gattServices[i].serviceUuid + '\n';
                }
                _system_prompt_1.showToast({ message: message });
                AppStorage.SetOrCreate("getServices", message);
                console.info("getServices(Callback)", message);
            }
        });
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetServicesCallback = testGetServicesCallback;
function testGetServicesPromise() {
    let message = "getServicesPromise test";
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    message = "getServices promise:starts";
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        gattClientInstance.getServices().then(gattServices => {
            message = "getServicesPromise successfully:\n";
            message = "bluetooth services size is " + gattServices.length;
            for (let i = 0; i < gattServices.length; i++) {
                message += 'bluetooth serviceUuid is ' + gattServices[i].serviceUuid + '\n';
            }
            _system_prompt_1.showToast({ message: message });
        });
        message = "getServices(promise):invoke succeeds!";
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetServicesPromise = testGetServicesPromise;
function testReadCharacteristicValueCallback() {
    let serviceUUID = AppStorage.Get('serviceUUID');
    let characteristicUUID = AppStorage.Get('characteristicUUID');
    let message = "readCharacteristicValueCallback test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let bleCharacteristicDataIn = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID
    };
    gattClientInstance.readCharacteristicValue(bleCharacteristicDataIn, (err, bleCharacteristicDataOut) => {
        if (err.code != 0) {
            message = "readCharacteristicValue error code:" + err.code + ",id:" + serviceUUID;
            console.info(message);
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        message = "readCharacteristicValue callback:";
        message += 'bluetooth characteristic uuid:' + bleCharacteristicDataOut.characteristicUuid + "\n";
        let value = new Uint8Array(bleCharacteristicDataOut.characteristicValue);
        for (let i = 0; i < bleCharacteristicDataOut.characteristicValue.byteLength; i++) {
            message += 'bluetooth characteristic value: ' + value[i];
        }
        AppStorage.SetOrCreate("read_CharacteristicValue", message);
        _system_prompt_1.showToast({ message: message });
    });
    message = 'readCharacteristicValue(callback):invoke succeeds!';
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testReadCharacteristicValueCallback = testReadCharacteristicValueCallback;
function testReadCharacteristicValuePromise() {
    let serviceUUID = AppStorage.Get('serviceUUID');
    let characteristicUUID = AppStorage.Get('characteristicUUID');
    let message = "readCharacteristicValuePromise test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let bleCharacteristicDataIn = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID
    };
    gattClientInstance.readCharacteristicValue(bleCharacteristicDataIn).then((bleCharacteristicDataOut) => {
        message = "readCharacteristicValue promise:\n";
        message += 'bluetooth characteristic uuid:' + bleCharacteristicDataOut.characteristicUuid + "\n";
        let value = new Uint8Array(bleCharacteristicDataOut.characteristicValue);
        for (let i = 0; i < bleCharacteristicDataOut.characteristicValue.byteLength; i++) {
            message += 'bluetooth characteristic value: ' + value[i];
        }
        _system_prompt_1.showToast({ message: message });
    });
    message = 'readCharacteristicValue(promise):invoke succeeds!';
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testReadCharacteristicValuePromise = testReadCharacteristicValuePromise;
function testReadDescriptorValueCallback() {
    let serviceUUID = AppStorage.Get('serviceUUID');
    let characteristicUUID = AppStorage.Get('characteristicUUID');
    let descriptorUUID = AppStorage.Get('descriptorUUID');
    let message = "readDescriptorValueCallback test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let bufferDesc = new ArrayBuffer(8);
    let descV = new Uint8Array(bufferDesc);
    descV[0] = 88;
    let descriptorIn = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID,
        descriptorUuid: descriptorUUID,
        descriptorValue: bufferDesc
    };
    gattClientInstance.readDescriptorValue(descriptorIn, (err, descriptorOut) => {
        let message = "";
        if (err.code != 0) {
            message = "readDescriptorValue error:" + err.code.toString();
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        message = 'readDescriptorValue(callback):descriptor uuid=' + descriptorOut.descriptorUuid + "\n";
        let value = new Uint8Array(descriptorOut.descriptorValue);
        for (let i = 0; i < descriptorOut.descriptorValue.byteLength; i++) {
            message += 'descriptor value: ' + value[i] + "\n";
        }
        _system_prompt_1.showToast({ message: message });
    });
    message = 'readDescriptorValue(callback):invoke succeeds!';
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testReadDescriptorValueCallback = testReadDescriptorValueCallback;
function testReadDescriptorValuePromise() {
    let serviceUUID = AppStorage.Get('serviceUUID');
    let characteristicUUID = AppStorage.Get('characteristicUUID');
    let descriptorUUID = AppStorage.Get('descriptorUUID');
    let message = "readDescriptorValuePromise test ";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let bufferDesc = new ArrayBuffer(8);
    let descV = new Uint8Array(bufferDesc);
    descV[0] = 99;
    let descriptorIn = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID,
        descriptorUuid: descriptorUUID,
        descriptorValue: bufferDesc
    };
    gattClientInstance.readDescriptorValue(descriptorIn).then((descriptorOut) => {
        message = 'readDescriptorValue(promise):descriptor uuid=' + descriptorOut.descriptorUuid + "\n";
        let value = new Uint8Array(descriptorOut.descriptorValue);
        for (let i = 0; i < descriptorOut.descriptorValue.byteLength; i++) {
            message += 'descriptor value: ' + value[i] + "\n";
        }
        _system_prompt_1.showToast({ message: message });
    });
    message = 'readDescriptorValue(promise):invoke succeeds!';
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testReadDescriptorValuePromise = testReadDescriptorValuePromise;
function testWriteCharacteristicValue() {
    let serviceUUID = AppStorage.Get('serviceUUID');
    let characteristicUUID = AppStorage.Get('characteristicUUID');
    let characteristicValue = AppStorage.Get('characteristicValue');
    let message = "writeCharacteristicValue test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let bufferCCC = string2ArrayBuffer(characteristicValue);
    let characteristic = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID,
        characteristicValue: bufferCCC
    };
    if (gattClientInstance.writeCharacteristicValue(characteristic)) {
        message = 'writeCharacteristicValue succeeds.';
    }
    else {
        message = 'writeCharacteristicValue failed!';
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testWriteCharacteristicValue = testWriteCharacteristicValue;
function string2ArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}
exports.string2ArrayBuffer = string2ArrayBuffer;
function testWriteDescriptorValue() {
    let serviceUUID = AppStorage.Get('serviceUUID');
    let characteristicUUID = AppStorage.Get('characteristicUUID');
    let descriptorUUID = AppStorage.Get('descriptorUUID');
    let descriptorValue = AppStorage.Get('descriptorValue');
    let message = "writeDescriptorValue test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let bufferDesc = string2ArrayBuffer(descriptorValue);
    let descriptor = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID,
        descriptorUuid: descriptorUUID,
        descriptorValue: bufferDesc
    };
    if (gattClientInstance.writeDescriptorValue(descriptor)) {
        message = 'writeDescriptorValue succeeds.';
    }
    else {
        message = 'writeDescriptorValue,failed!';
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testWriteDescriptorValue = testWriteDescriptorValue;
//????????????
let BLECharacteristicChange = false;
function testOnBLECharacteristicChange() {
    let message = "onBLECharacteristicChange test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (BLECharacteristicChange) {
        gattClientInstance.off('BLECharacteristicChange', () => {
            message = "off BLECharacteristicChange";
            _system_prompt_1.showToast({ message: message });
        });
    }
    else {
        gattClientInstance.on('BLECharacteristicChange', (data) => {
            let serviceUuid = data.serviceUuid;
            let characteristicUuid = data.characteristicUuid;
            bleCharacteristicChangeInfo += "serviceUuid:" + serviceUuid + "\n";
            bleCharacteristicChangeInfo += "characteristicUuid:" + characteristicUuid + "\n";
            let value = new Uint8Array(data.characteristicValue);
            for (let i = 0; i < data.characteristicValue.byteLength; i++) {
                bleCharacteristicChangeInfo += "\n" + 'value:' + value[i];
            }
            AppStorage.SetOrCreate("bleCharacteristicChangeInfo", bleCharacteristicChangeInfo);
            _system_prompt_1.showToast({ message: "on:BLECharacteristicChange" });
        });
        message = "On BLECharacteristicChange";
    }
    BLECharacteristicChange = !BLECharacteristicChange;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testOnBLECharacteristicChange = testOnBLECharacteristicChange;
function testSetBLEMtuSize() {
    let message = "setBLEMtuSize test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    message = 'setBLEMtuSize: \n';
    let mtuSize = 256;
    let ret = gattClientInstance.setBLEMtuSize(mtuSize);
    message += "result : " + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSetBLEMtuSize = testSetBLEMtuSize;
function testSetNotifyCharacteristicChanged() {
    let serviceUUID = AppStorage.Get('serviceUUID');
    let characteristicUUID = AppStorage.Get('characteristicUUID');
    let descriptorUUID = AppStorage.Get('descriptorUUID');
    let descriptorValue = AppStorage.Get('descriptorValue');
    let message = "setNotifyCharacteristicChanged test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    let descriptors = [];
    let bufferCCC = new ArrayBuffer(8);
    let cccV = new Uint8Array(bufferCCC);
    cccV[0] = 66;
    let descriptor = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID,
        descriptorUuid: descriptorUUID,
        descriptorValue: string2ArrayBuffer(descriptorValue)
    };
    descriptors.push(descriptor);
    let characteristicIn = {
        serviceUuid: serviceUUID,
        characteristicUuid: characteristicUUID,
        characteristicValue: bufferCCC,
        descriptors: descriptors
    };
    if (gattClientInstance.setNotifyCharacteristicChanged(characteristicIn, true)) {
        message = "setNotifyCharacteristicChanged(true):succeeds.";
    }
    else {
        message = "setNotifyCharacteristicChanged(true):failed!";
        if (gattClientInstance.setNotifyCharacteristicChanged(characteristicIn, false)) {
            message = "setNotifyCharacteristicChanged(false):true!";
        }
        else {
            message = "setNotifyCharacteristicChanged(false):false!";
        }
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSetNotifyCharacteristicChanged = testSetNotifyCharacteristicChanged;
function testGetDeviceNameCallback() {
    let deviceName = "";
    let message = "getDeviceNameCallback test";
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    //currentClick = 15;
    gattClientInstance.getDeviceName((err, asyncRemoteDeviceName) => {
        message = "return code:";
        message += JSON.stringify(err);
        message += ",and DeviceName is: ";
        message += JSON.stringify(asyncRemoteDeviceName);
        deviceName = JSON.stringify(asyncRemoteDeviceName);
        AppStorage.SetOrCreate("deviceName", deviceName);
        _system_prompt_1.showToast({ message: message });
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetDeviceNameCallback = testGetDeviceNameCallback;
function testGetDeviceNamePromise() {
    let deviceName = "";
    let message = "getDeviceNamePromise test";
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    gattClientInstance.getDeviceName().then((peripheralDeviceName) => {
        message = "getDeviceName()Promise:" + peripheralDeviceName;
        deviceName = peripheralDeviceName;
        AppStorage.SetOrCreate("deviceName", deviceName);
        _system_prompt_1.showToast({ message: message });
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetDeviceNamePromise = testGetDeviceNamePromise;
function testGetRssiValueCallback() {
    let Rssi = "";
    let message = "getRssiValueCallback test";
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    message = "getRssiValue callback";
    gattClientInstance.getRssiValue((err, cbRssi) => {
        message = "return code:";
        message += JSON.stringify(err);
        message += ",and RSSI=";
        message += JSON.stringify(cbRssi);
        Rssi = JSON.stringify(cbRssi);
        AppStorage.SetOrCreate("Rssi", Rssi);
        _system_prompt_1.showToast({ message: message });
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetRssiValueCallback = testGetRssiValueCallback;
function testGetRssiValuePromise() {
    let Rssi = "";
    let message = "getRssiValuePromise test";
    if (!gattClientInstance) {
        message = "NO_GATT_CLIENT_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    message = "getRssiValue promise:";
    gattClientInstance.getRssiValue().then((rssiValue) => {
        message += 'rssi' + JSON.stringify(rssiValue);
        Rssi = JSON.stringify(rssiValue);
        AppStorage.SetOrCreate("Rssi", Rssi);
        _system_prompt_1.showToast({ message: message });
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGetRssiValuePromise = testGetRssiValuePromise;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattInterface.ets":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattInterface.ets ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testGattServer = exports.testGattClient = void 0;
/*
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
 * Gatt Page Of Bluetooth test
 */
var _system_router_1  = globalThis.requireNativeModule('system.router');
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
const PAGE_URI_GET_GATT_CLIENT = 'pages/subManualApiTest/subGattTest/gattClient';
const PAGE_URI_GET_GATT_SERVER = 'pages/subManualApiTest/subGattTest/gattServer';
function testGattClient() {
    _system_router_1.push({ uri: PAGE_URI_GET_GATT_CLIENT });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGattClient = testGattClient;
function testGattServer() {
    _system_router_1.push({ uri: PAGE_URI_GET_GATT_SERVER });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGattServer = testGattServer;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattServerInterface.ets":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattServerInterface.ets ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.string2ArrayBuffer = exports.testOnDescriptorWrite = exports.testOnDescriptorRead = exports.testOnCharacteristicWrite = exports.testOnCharacteristicRead = exports.testOnConnectStateChange = exports.testGattServerClose = exports.testStopAdvertising = exports.testStartAdvertising = exports.testRemoveService = exports.testAddService = exports.testCreateGattServer = void 0;
/*
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
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
const BluetoothModel_1 = __importDefault(__webpack_require__(/*! ./BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts"));
let gattServerInstance = null;
function testCreateGattServer() {
    let btState = _ohos_bluetooth_1.getState();
    let message = "createGattServer test";
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (gattServerInstance) {
            message = "GattServer exists!";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        gattServerInstance = BluetoothModel_1.default.createGattServer();
        message = "CreateGattServer:succeeds!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    else if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testCreateGattServer = testCreateGattServer;
function testAddService() {
    let message = "addService test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (!gattServerInstance) {
        message = "NO_GATT_Server_OBJECT";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    // build service
    // ????????????????????? buildGattService();
    let curServiceUUID = AppStorage.Get("curServiceUUID");
    let curCharacteristicUUID = AppStorage.Get("curCharacteristicUUID");
    let curDescriptorUUID = AppStorage.Get("curDescriptorUUID");
    let curDescriptorValue = AppStorage.Get("curDescriptorValue");
    let curCharacteristicValue = AppStorage.Get("curCharacteristicValue");
    let isPrimary = AppStorage.Get("isPrimary");
    let descriptors = [];
    let descriptor = {
        serviceUuid: curServiceUUID,
        characteristicUuid: curCharacteristicUUID,
        descriptorUuid: curDescriptorUUID,
        descriptorValue: string2ArrayBuffer(curDescriptorValue)
    };
    descriptors.push(descriptor);
    // build characteristics
    let characteristics = [];
    let characteristic = {
        serviceUuid: curServiceUUID,
        characteristicUuid: curCharacteristicUUID,
        characteristicValue: string2ArrayBuffer(curCharacteristicValue),
        descriptors: descriptors
    };
    characteristics.push(characteristic);
    let curGattService = {
        serviceUuid: curServiceUUID,
        characteristics: characteristics,
        isPrimary: isPrimary,
        includeServices: []
    };
    let ret = gattServerInstance.addService(curGattService);
    message = "result: addService," + ret;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testAddService = testAddService;
function testRemoveService() {
    let message = "removeService test";
    let curServiceUUID = AppStorage.Get("curServiceUUID");
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (!gattServerInstance) {
            message = "NO_GATT_Server_OBJECT";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        message = "result: removeService ";
        if (gattServerInstance.removeService(curServiceUUID)) {
            message += 'true';
        }
        else {
            message += 'false';
        }
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testRemoveService = testRemoveService;
let curAdvData = {
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
let curAdvResponse = {
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
function testStartAdvertising() {
    let message = "startAdvertising test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState === _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (!gattServerInstance) {
            message = "NO_GATT_Server_OBJECT";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        message = "startAdvertising:build input parameter In!";
        // ?????????????????????
        // buildAdvSettings();
        let cbxAdvSettings = AppStorage.Get("cbxAdvSettings");
        let cbxInterval = AppStorage.Get("cbxInterval");
        let cbxTxPower = AppStorage.Get("cbxTxPower");
        let curAdvSettings = {
            interval: 800,
            txPower: -7,
            connectable: true
        };
        if (cbxAdvSettings) {
            if (cbxInterval) {
                let advSettings_interval = AppStorage.Get("advSettings_interval");
                curAdvSettings.interval = parseInt(advSettings_interval);
            }
            if (cbxTxPower) {
                let advSettings_txPower = AppStorage.Get("advSettings_txPower");
                curAdvSettings.txPower = parseInt(advSettings_txPower);
            }
            let advSettings_connectable = AppStorage.Get("advSettings_connectable");
            curAdvSettings.connectable = advSettings_connectable;
        }
        //    buildAdvData();
        let advDataServiceUuids_serviceUuid = AppStorage.Get("advDataServiceUuids_serviceUuid");
        let advDataManufactureData_manufactureId = AppStorage.Get("advDataManufactureData_manufactureId");
        let advDataManufactureData_manufactureValue = AppStorage.Get("advDataManufactureData_manufactureValue");
        let advDataServiceData_serviceUuid = AppStorage.Get("advDataServiceData_serviceUuid");
        let advDataServiceData_serviceValue = AppStorage.Get("advDataServiceData_serviceValue");
        let advDataServiceUuidList = [];
        let advDataManufactureDataList = [];
        let advDataServiceDataList = [];
        let advDataManufactureDataInstance = {
            advDataManufactureId: parseInt(advDataManufactureData_manufactureId),
            advDataManufactureValue: string2ArrayBuffer(advDataManufactureData_manufactureValue)
        };
        let advDataServiceDataInstance = {
            advDataServiceUuid: advDataServiceData_serviceUuid,
            advDataServiceValue: string2ArrayBuffer(advDataServiceData_serviceValue)
        };
        let advDataServiceUuidListLength = advDataServiceUuidList.push(advDataServiceUuids_serviceUuid);
        let advDataManufactureDataListLength = advDataManufactureDataList.push(advDataManufactureDataInstance);
        let advDataServiceDataListLength = advDataServiceDataList.push(advDataServiceDataInstance);
        let curAdvData = {
            serviceUuids: advDataServiceUuidList,
            manufactureData: advDataManufactureDataList,
            serviceData: advDataServiceDataList
        };
        //    buildAdvResponse();
        let advResponseServiceUuids_serviceUuid = AppStorage.Get("advResponseServiceUuids_serviceUuid");
        let advResponseManufactureData_manufactureId = AppStorage.Get("advResponseManufactureData_manufactureId");
        let advResponseManufactureData_manufactureValue = AppStorage.Get("advResponseManufactureData_manufactureValue");
        let advResponseServiceData_serviceUuid = AppStorage.Get("advResponseServiceData_serviceUuid");
        let advResponseServiceData_serviceValue = AppStorage.Get("advResponseServiceData_serviceValue");
        let advResponseServiceUuidList = [];
        let advResponseManufactureDataList = [];
        let advResponseServiceDataList = [];
        let advResponseManufactureDataInstance = {
            manufactureId: parseInt(advResponseManufactureData_manufactureId),
            manufactureValue: string2ArrayBuffer(advResponseManufactureData_manufactureValue)
        };
        let advResponseServiceDataInstance = {
            serviceUuid: advResponseServiceData_serviceUuid,
            serviceValue: string2ArrayBuffer(advResponseServiceData_serviceValue)
        };
        let advResponseServiceUuidListLength = advResponseServiceUuidList.push(advResponseServiceUuids_serviceUuid);
        let advResponseManufactureDataListLength = advResponseManufactureDataList.push(advResponseManufactureDataInstance);
        let advResponseServiceDataListLength = advResponseServiceDataList.push(advResponseServiceDataInstance);
        let curAdvResponse = {
            serviceUuids: advResponseServiceUuidList,
            manufactureData: advResponseManufactureDataList,
            serviceData: advResponseServiceDataList
        };
        let setting = curAdvSettings;
        let advData = curAdvData;
        let advResponse = curAdvResponse;
        let cbxAdvResponse = AppStorage.Get("cbxAdvResponse");
        message = "startAdvertising:build input parameter Out!";
        if (!cbxAdvResponse) {
            console.log("advData.serviceUuids:" + advData.serviceUuids + "\n");
            console.log("advData.manufactureData:" + advData.manufactureData + "\n");
            console.log("advData.serviceData:" + advData.serviceData + "\n");
            gattServerInstance.startAdvertising(setting, advData);
        }
        else {
            console.log("advResponse.serviceUuids:" + advResponse.serviceUuids + "\n");
            console.log("advResponse.manufactureData:" + advResponse.manufactureData + "\n");
            console.log("advResponse.serviceData:" + advResponse.serviceData + "\n");
            gattServerInstance.startAdvertising(setting, advData, advResponse);
        }
        console.log("cbxAdvSettings:" + cbxAdvSettings + "\n");
        console.log("cbxAdvResponse:" + cbxAdvResponse + "\n");
        message = "startAdvertising succeeds!" + cbxAdvSettings + "," + cbxAdvResponse;
    }
    else if (btState === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testStartAdvertising = testStartAdvertising;
function testStopAdvertising() {
    let message = "stopAdvertising test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (!gattServerInstance) {
            message = "NO_GATT_Server_OBJECT";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        gattServerInstance.stopAdvertising();
        message = "stopAdvertising succeeds.";
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testStopAdvertising = testStopAdvertising;
function testGattServerClose() {
    let message = "gattServerClose test";
    let btState = _ohos_bluetooth_1.getState();
    if (btState == _ohos_bluetooth_1.BluetoothState.STATE_ON) {
        if (!gattServerInstance) {
            message = "NO_GATT_Server_OBJECT";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        gattServerInstance.close();
        message = "GattServer closed: succeeds";
    }
    else if (btState == _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
    }
    else {
        message = "switching,please wait!";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testGattServerClose = testGattServerClose;
//????????????
let connectStateChange = false;
function testOnConnectStateChange() {
    let message = "onConnectStateChange test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (connectStateChange) {
        gattServerInstance.off("connectStateChange", () => {
        });
        message = "???????????????????????? ";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    else {
        gattServerInstance.on('connectStateChange', (data) => {
            connectStateMsg = "deviceId:" + data.deviceId + ",connectState:" + data.state;
            AppStorage.SetOrCreate("connect_StateMsg", data.state);
            _system_prompt_1.showToast({ message: connectStateMsg });
        });
        message = '????????????????????????';
    }
    connectStateChange = !connectStateChange;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testOnConnectStateChange = testOnConnectStateChange;
//????????????
let characteristicRead = false;
function testOnCharacteristicRead() {
    let message = "onCharacteristicRead test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (characteristicRead) {
        gattServerInstance.off("characteristicRead", () => {
        });
        message = "??????????????? ??????";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    else {
        gattServerInstance.on('characteristicRead', (characteristicReadReq) => {
            let characteristicReadMsg = 'characteristicRead received!';
            // client address
            let clientDeviceId = characteristicReadReq.deviceId;
            // transId
            let transId = characteristicReadReq.transId;
            // the byte offset of the start position for reading characteristic value
            let offset = characteristicReadReq.offset;
            // service/characteristic Uuid
            let characteristicUuid = characteristicReadReq.characteristicUuid;
            let serviceUuid = characteristicReadReq.serviceUuid;
            characteristicReadMsg += 'characteristicRead input parameters: deviceId = ' + clientDeviceId + '\n';
            characteristicReadMsg += 'transId = ' + transId + '\n';
            characteristicReadMsg += "characteristicUuid = " + characteristicUuid + '\n';
            characteristicReadMsg += "serviceUuid = " + serviceUuid + '\n';
            AppStorage.SetOrCreate("characteristicReadMsg", characteristicReadMsg); // build data for response
            let arrayBufferCCC = string2ArrayBuffer('dayu');
            let serverResponse = {
                deviceId: clientDeviceId,
                transId: transId,
                status: 0,
                offset: offset,
                value: arrayBufferCCC
            };
            let ret = gattServerInstance.sendResponse(serverResponse);
            message = 'characteristicRead sendResponse:' + ret;
            _system_prompt_1.showToast({ message: message });
        });
        message = '??????????????? ??????';
    }
    characteristicRead = !characteristicRead;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testOnCharacteristicRead = testOnCharacteristicRead;
//????????????
let characteristicWrite = false;
function testOnCharacteristicWrite() {
    let message = "onCharacteristicWrite test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (characteristicWrite) {
        gattServerInstance.off("characteristicWrite", () => { });
        message = "??????????????? ??????";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    else {
        gattServerInstance.on('characteristicWrite', (characteristicWriteReq) => {
            btOnCharacteristicWrite = 'on characteristicWrite';
            characteristicWriteMsg = '';
            let arrayBufferCCC = string2ArrayBuffer("characteristicWriteForResponse");
            // client address
            let deviceId = characteristicWriteReq.deviceId;
            let transId = characteristicWriteReq.transId;
            let offset = characteristicWriteReq.offset;
            /** Whether this request should be pending for later operation */
            let isPrep = characteristicWriteReq.isPrep;
            /** Whether the remote client need a response */
            let needRsp = characteristicWriteReq.needRsp;
            /** Indicates the value to be written */
            let value = new Uint8Array(characteristicWriteReq.value);
            let characteristicUuid = characteristicWriteReq.characteristicUuid;
            let serviceUuid = characteristicWriteReq.serviceUuid;
            characteristicWriteMsg += "The characteristicWriteReq input parameters: deviceId =" + deviceId;
            characteristicWriteMsg += "transId =" + transId;
            characteristicWriteMsg += "offset =" + offset;
            characteristicWriteMsg += "isPrep =" + isPrep;
            characteristicWriteMsg += "needRsp =" + needRsp;
            characteristicWriteMsg += "value =" + JSON.stringify(value);
            characteristicWriteMsg += "characteristicUuid =" + characteristicUuid;
            characteristicWriteMsg += "serviceUuid =" + serviceUuid;
            AppStorage.SetOrCreate("characteristicWriteMsg", characteristicWriteMsg);
            let serverResponse = {
                deviceId: deviceId,
                transId: transId,
                status: 0,
                offset: offset,
                value: arrayBufferCCC
            };
            // sendResponse
            if (needRsp) {
                let ret = gattServerInstance.sendResponse(serverResponse);
                message = 'characteristicWrite sendResponse:' + ret;
                _system_prompt_1.showToast({ message: message });
            }
            notifyCharacteristic_notifyCharacteristic = {
                serviceUuid: serviceUuid,
                characteristicUuid: characteristicUuid,
                characteristicValue: string2ArrayBuffer("Value4notifyCharacteristic"),
                confirm: true //notification:true; indication:false;
            };
            let notifyCharacteristic = notifyCharacteristic_notifyCharacteristic;
            if (gattServerInstance.notifyCharacteristicChanged(deviceId, notifyCharacteristic)) {
                message = "notifyCharacteristicChanged successfully!";
            }
            else {
                message = "notifyCharacteristicChanged failed!";
            }
        });
        message = '??????????????? ??????';
    }
    characteristicWrite = !characteristicWrite;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testOnCharacteristicWrite = testOnCharacteristicWrite;
//????????????
let descriptorRead = false;
function testOnDescriptorRead() {
    let message = "onDescriptorRead test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        return message;
    }
    if (descriptorRead) {
        gattServerInstance.off("descriptorRead", () => { });
        message = '??????????????? ??????';
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    else {
        gattServerInstance.on('descriptorRead', (descriptorReadReq) => {
            btOnDescriptorRead = 'on:descriptorRead';
            descriptorReadMsg = "descriptorReadIn!!";
            let deviceId = descriptorReadReq.deviceId;
            let transId = descriptorReadReq.transId;
            /** Indicates the byte offset of the start position for reading characteristic value */
            let offset = descriptorReadReq.offset;
            let descriptorUuid = descriptorReadReq.descriptorUuid;
            let characteristicUuid = descriptorReadReq.characteristicUuid;
            let serviceUuid = descriptorReadReq.serviceUuid;
            let arrayBufferDesc = string2ArrayBuffer("Response4descriptorRead");
            let serverResponse = {
                deviceId: deviceId,
                transId: transId,
                status: 0,
                offset: offset,
                value: arrayBufferDesc
            };
            let ret = gattServerInstance.sendResponse(serverResponse);
            message = 'descriptorRead sendResponse:' + ret;
            descriptorReadMsg += message;
            AppStorage.SetOrCreate("descriptorReadMsg", descriptorReadMsg);
            _system_prompt_1.showToast({ message: message });
        });
        message = '??????????????? ??????';
    }
    descriptorRead = !descriptorRead;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testOnDescriptorRead = testOnDescriptorRead;
//????????????
let descriptorWrite = false;
function testOnDescriptorWrite() {
    let message = "onDescriptorWrite test";
    let btStatus = _ohos_bluetooth_1.getState();
    if (btStatus === _ohos_bluetooth_1.BluetoothState.STATE_OFF) {
        message = "BT is not enabled!";
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    if (descriptorWrite) {
        gattServerInstance.off("descriptorWrite", () => { });
        message = '??????????????? ??????';
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    else {
        gattServerInstance.on('descriptorWrite', (descriptorWriteReq) => {
            btOnDescriptorWrite = 'on:descriptorWrite';
            descriptorWriteMsg = "descriptorWriteIn";
            descriptorWriteMsg += "The descriptorWriteReq client address: deviceId is " + descriptorWriteReq.deviceId;
            let deviceId = descriptorWriteReq.deviceId;
            let transId = descriptorWriteReq.transId;
            /** Indicates the byte offset of the start position for writing descriptor value */
            let offset = descriptorWriteReq.offset;
            /** Whether this request should be pending for later operation */
            let isPrep = descriptorWriteReq.isPrep;
            /** Whether the remote client need a response */
            let needRsp = descriptorWriteReq.needRsp;
            /** Indicates the value to be written */
            let value = new Uint8Array(descriptorWriteReq.value);
            let descriptorUuid = descriptorWriteReq.descriptorUuid;
            let characteristicUuid = descriptorWriteReq.characteristicUuid;
            let serviceUuid = descriptorWriteReq.serviceUuid;
            let arrayBufferDesc = new ArrayBuffer(8);
            let descValue = new Uint8Array(arrayBufferDesc);
            descValue[0] = value[0];
            let serverResponse = {
                deviceId: deviceId,
                transId: transId,
                status: 0,
                offset: offset,
                value: arrayBufferDesc
            };
            if (needRsp) {
                let ret = gattServerInstance.sendResponse(serverResponse);
                message = 'descriptorWrite sendResponse:' + ret;
                _system_prompt_1.showToast({ message: message });
            }
            descriptorWriteMsg += 'descriptorWrite Callback finished!';
        });
        message = '??????????????? ??????';
    }
    descriptorWrite = !descriptorWrite;
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testOnDescriptorWrite = testOnDescriptorWrite;
function string2ArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}
exports.string2ArrayBuffer = string2ArrayBuffer;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/profileInterface.ets":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/profileInterface.ets ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testPanNetworkProfile = exports.testHidHostProfile = exports.testHandsFreeAudioGatewayProfile = exports.testA2dpSourceProfile = void 0;
/*
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
var _system_router_1  = globalThis.requireNativeModule('system.router');
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
const PAGE_URI_GET_A2DP_SOURCE_PROFILE = 'pages/subManualApiTest/subProfileTest/a2dpSourceProfileTest';
const PAGE_URI_GET_HANDS_FREE_AUDIO_GATEWAY_PROFILE = 'pages/subManualApiTest/subProfileTest/handsFreeAudioGatewayProfileTest';
const PAGE_URI_GET_HID_HOST_PROFILE = 'pages/subManualApiTest/subProfileTest/hidHostProfileTest';
const PAGE_URI_GET_Pan_NETWORK_PROFILE = 'pages/subManualApiTest/subProfileTest/panNetworkProfileTest';
function testA2dpSourceProfile() {
    _system_router_1.push({ uri: PAGE_URI_GET_A2DP_SOURCE_PROFILE });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testA2dpSourceProfile = testA2dpSourceProfile;
function testHandsFreeAudioGatewayProfile() {
    _system_router_1.push({ uri: PAGE_URI_GET_HANDS_FREE_AUDIO_GATEWAY_PROFILE });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testHandsFreeAudioGatewayProfile = testHandsFreeAudioGatewayProfile;
function testHidHostProfile() {
    _system_router_1.push({ uri: PAGE_URI_GET_HID_HOST_PROFILE });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testHidHostProfile = testHidHostProfile;
function testPanNetworkProfile() {
    _system_router_1.push({ uri: PAGE_URI_GET_Pan_NETWORK_PROFILE });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testPanNetworkProfile = testPanNetworkProfile;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/scenarioTestDataModel.ets":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/scenarioTestDataModel.ets ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initSppServerScenarioData = exports.initSppClientScenarioData = exports.initGattServerScenarioData = exports.initGattClientScenarioData = exports.initBleFoundScenarioData = exports.initBRFoundScenarioData = void 0;
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
const testData_1 = __webpack_require__(/*! ./testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
const brInterface_1 = __webpack_require__(/*! ./brInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets");
const bleInterface_1 = __webpack_require__(/*! ./bleInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets");
const gattClientInterface_1 = __webpack_require__(/*! ./gattClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattClientInterface.ets");
const gattServerInterface_1 = __webpack_require__(/*! ./gattServerInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattServerInterface.ets");
const sppClientInterface_1 = __webpack_require__(/*! ./sppClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppClientInterface.ets");
const sppServerInterface_1 = __webpack_require__(/*! ./sppServerInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppServerInterface.ets");
const BrFoundScenarioTest = [
    { 'name': '??????????????????', 'detail': '1', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '?????????', 'detail': '2', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '????????????', 'detail': '3', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '??????????????????', 'detail': '4', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '??????????????????', 'detail': '5', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '??????????????????', 'detail': '6', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '??????????????????', 'detail': '7', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '??????????????????', 'detail': '8', 'method': 'startBluetoothDiscovery', 'api': brInterface_1.testStartBluetoothDiscovery, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '??????????????????', 'detail': '9', 'method': 'stopBluetoothDiscovery', 'api': brInterface_1.testStopBluetoothDiscovery, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario },
    { 'name': '?????????', 'detail': '10', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.BrFoundScenario }
];
const BleFoundScenarioTest = [
    { 'name': '??????????????????', 'detail': '1', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario },
    { 'name': '?????????', 'detail': '2', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario },
    { 'name': '????????????', 'detail': '3', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario },
    { 'name': '??????Ble??????????????????', 'detail': '4', 'method': 'on.BleDeviceFind', 'api': bleInterface_1.testOnBLEDeviceFind, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario },
    { 'name': '??????Ble??????', 'detail': '5', 'method': 'startBleScan', 'api': bleInterface_1.testStartBLEScan, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario },
    { 'name': '???????????????Ble??????', 'detail': '6', 'method': 'getConnectedBleDevices', 'api': bleInterface_1.testGetConnectedBLEDevices, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario },
    { 'name': '??????Ble??????', 'detail': '7', 'method': 'stopBleScan', 'api': bleInterface_1.testStopBLEScan, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario },
    { 'name': '?????????', 'detail': '8', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.BleFoundScenario }
];
const GattClientScenarioTest = [
    { 'name': '??????????????????', 'detail': '1', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': '?????????', 'detail': '2', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': '????????????', 'detail': '3', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    //  { 'name': '??????Ble??????????????????', 'detail': '4', 'method': 'on.BleDeviceFind',  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    //  { 'name': '??????Ble??????', 'detail': '5', 'method': 'startBleScan',  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    //  { 'name': '???????????????Ble??????', 'detail': '6', 'method': 'getConnectedBleDevices', 'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    { 'name': '??????Gatt?????????', 'detail': '4', 'method': 'createGattClient', 'api': gattClientInterface_1.testCreateGattClient, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': 'Ble????????????', 'detail': '5', 'method': 'on.BleConnectionStateChange', 'api': gattClientInterface_1.testOnBLEConnectionStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': '??????', 'detail': '6', 'method': 'connect', 'api': gattClientInterface_1.testConnect, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': '????????????????????????', 'detail': '7', 'method': 'setNotifyCharacteristicChanged', 'api': gattClientInterface_1.testSetNotifyCharacteristicChanged, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': 'Ble???????????????', 'detail': '8', 'method': 'on.BleCharacteristicChange', 'api': gattClientInterface_1.testOnBLECharacteristicChange, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': '????????????callback', 'detail': '9', 'method': 'getServices(Callback)', 'api': gattClientInterface_1.testGetServicesCallback, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    //{ 'name': '????????????promise', 'detail': '11', 'method': 'getServices(promise)',  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    { 'name': '???????????????callback', 'detail': '10', 'method': 'readCharacteristicValue(callback)', 'api': gattClientInterface_1.testReadCharacteristicValueCallback, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    //{ 'name': '???????????????promise', 'detail': '13', 'method': 'readCharacteristicValue(promise)',  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    { 'name': '??????????????????callback', 'detail': '11', 'method': 'readDescriptorValue(callback)', 'api': gattClientInterface_1.testReadDescriptorValueCallback, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    //{ 'name': '??????????????????promise', 'detail': '15', 'method': 'readDescriptorValue(promise)',  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    //{ 'name': '???????????????', 'detail': '11', 'method': 'writeCharacteristicValue', 'api': testWriteCharacteristicValue,  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    //{ 'name': '??????????????????', 'detail': '12', 'method': 'writeDescriptorValue', 'api': testWriteDescriptorValue, 'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    { 'name': '??????????????????callback', 'detail': '12', 'method': 'getDeviceName()callback', 'api': gattClientInterface_1.testGetDeviceNameCallback, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    //{ 'name': '??????????????????promise', 'detail': '21', 'method': 'getDeviceName()Promise', 'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    { 'name': '??????Rssi???callback', 'detail': '13', 'method': 'getRssiValue()Callback', 'api': gattClientInterface_1.testGetRssiValueCallback, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    //{ 'name': '??????Rssi???promise', 'detail': '23', 'method': 'getRssiValue()Promise',  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    { 'name': '????????????', 'detail': '14', 'method': 'disconnect', 'api': gattClientInterface_1.testDisconnect, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    { 'name': '??????', 'detail': '15', 'method': 'close', 'api': gattClientInterface_1.testGattClientClose, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario },
    //  { 'name': '??????Ble??????', 'detail': '18', 'method': 'stopBleScan',  'result': 'None', 'category': ScenarioCategory.GattClientScenario },
    { 'name': '?????????', 'detail': '16', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.GattClientScenario }
];
const GattServerScenarioTest = [
    { 'name': '??????????????????', 'detail': '1', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '?????????', 'detail': '2', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '????????????', 'detail': '3', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    //  { 'name': '??????Ble??????????????????', 'detail': '4', 'method': 'on.BleDeviceFind',  'result': 'None', 'category': ScenarioCategory.GattServerScenario },
    //  { 'name': '??????Ble??????', 'detail': '5', 'method': 'startBleScan',  'result': 'None', 'category': ScenarioCategory.GattServerScenario },
    //  { 'name': '???????????????Ble??????', 'detail': '6', 'method': 'getConnectedBleDevices', 'result': 'None', 'category': ScenarioCategory.GattServerScenario },
    { 'name': '??????Gatt?????????', 'detail': '4', 'method': 'createGattServer', 'api': gattServerInterface_1.testCreateGattServer, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '????????????', 'detail': '5', 'method': 'addService', 'api': gattServerInterface_1.testAddService, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '????????????', 'detail': '6', 'method': 'on.connectStateChange', 'api': gattServerInterface_1.testOnConnectStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '????????????', 'detail': '7', 'method': 'startAdvertising', 'api': gattServerInterface_1.testStartAdvertising, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '???????????????', 'detail': '8', 'method': 'on.characteristicRead', 'api': gattServerInterface_1.testOnCharacteristicRead, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    //  { 'name': '???????????????', 'detail': '9', 'method': 'on.characteristicWrite',  'api': testOnCharacteristicWrite, 'result': 'None', 'category': ScenarioCategory.GattServerScenario },
    { 'name': '???????????????', 'detail': '9', 'method': 'on.descriptorRead', 'api': gattServerInterface_1.testOnDescriptorRead, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    //  { 'name': '???????????????', 'detail': '11', 'method': 'on.descriptorWrite',  'api': testOnDescriptorWrite, 'result': 'None', 'category': ScenarioCategory.GattServerScenario },
    { 'name': '????????????', 'detail': '10', 'method': 'stopAdvertising', 'api': gattServerInterface_1.testStopAdvertising, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '????????????', 'detail': '11', 'method': 'removeService', 'api': gattServerInterface_1.testRemoveService, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    { 'name': '??????', 'detail': '12', 'method': 'close', 'api': gattServerInterface_1.testGattServerClose, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario },
    //  { 'name': '??????Ble??????', 'detail': '15', 'method': 'stopBleScan',  'result': 'None', 'category': ScenarioCategory.GattServerScenario },
    { 'name': '?????????', 'detail': '13', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.GattServerScenario }
];
const SppClientScenarioTest = [
    { 'name': '??????????????????', 'detail': '1', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': '?????????', 'detail': '2', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': '????????????', 'detail': '3', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    //  { 'name': '??????Ble??????????????????', 'detail': '4', 'method': 'on.BleDeviceFind',  'result': 'None', 'category': ScenarioCategory.SppClientScenario },
    //  { 'name': '??????Ble??????', 'detail': '5', 'method': 'startBleScan',  'result': 'None', 'category': ScenarioCategory.SppClientScenario },
    { 'name': '??????SPP????????????', 'detail': '4', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': '??????????????????', 'detail': '5', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': 'Spp???????????????(????????????)', 'detail': '6', 'method': 'sppConnect', 'api': sppClientInterface_1.testSppClientConnectSafe, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': '????????????????????????', 'detail': '7', 'method': 'getBtConnectionState', 'api': brInterface_1.testGetBtConnectionState, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    //  { 'name': 'Spp???????????????(???????????????)', 'detail': '8', 'method': 'sppConnect','result': 'None', 'category': ScenarioCategory.SppClientScenario },
    //  { 'name': '????????????', 'detail': '8', 'method': 'pairDevice', 'api': testPairDevice, 'result': 'None', 'category': ScenarioCategory.SppClientScenario },
    { 'name': 'Spp???????????????', 'detail': '8', 'method': 'sppWrite', 'api': sppClientInterface_1.testSppClientWrite, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': 'Spp?????????????????????', 'detail': '9', 'method': 'on.sppRead', 'api': sppClientInterface_1.testSppClientReadOn, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': 'Spp?????????????????????', 'detail': '10', 'method': 'off.sppRead', 'api': sppClientInterface_1.testSppClientReadOff, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    { 'name': 'Spp???????????????', 'detail': '11', 'method': 'sppCloseClientSocket', 'api': sppClientInterface_1.testSppClientClose, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
    //  { 'name': '??????Ble??????', 'detail': '14', 'method': 'stopBleScan',  'result': 'None', 'category': ScenarioCategory.SppClientScenario },
    { 'name': '?????????', 'detail': '12', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.SppClientScenario },
];
const SppServerScenarioTest = [
    { 'name': '??????????????????', 'detail': '1', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': '?????????', 'detail': '2', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': '????????????', 'detail': '3', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    //  { 'name': '??????Ble??????????????????', 'detail': '4', 'method': 'on.BleDeviceFind',  'result': 'None', 'category': ScenarioCategory.SppServerScenario },
    //  { 'name': '??????Ble??????', 'detail': '5', 'method': 'startBleScan',  'result': 'None', 'category': ScenarioCategory.SppServerScenario },
    { 'name': '??????SPP????????????', 'detail': '4', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': '??????????????????', 'detail': '5', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': '??????pin?????????', 'detail': '6', 'method': 'on.pinRequired', 'api': brInterface_1.testOnPinRequired, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': 'Spp???????????????(????????????)', 'detail': '7', 'method': 'sppListen', 'api': sppServerInterface_1.testSppServerCreateSafe, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': '????????????????????????', 'detail': '8', 'method': 'getBtConnectionState', 'api': brInterface_1.testGetBtConnectionState, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    //{ 'name': 'Spp???????????????(???????????????)', 'detail': '8', 'method': 'sppListen',  'result': 'None', 'category': ScenarioCategory.SppServerScenario },
    { 'name': 'Spp???????????????', 'detail': '9', 'method': 'sppWrite', 'api': sppServerInterface_1.testSppServerWrite, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': 'Spp???????????????', 'detail': '10', 'method': 'sppAccept', 'api': sppServerInterface_1.testSppServerAccept, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': 'Spp?????????????????????', 'detail': '11', 'method': 'on.sppRead', 'api': sppServerInterface_1.testSppServerReadOn, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': 'Spp?????????????????????', 'detail': '12', 'method': 'off.sppRead', 'api': sppServerInterface_1.testSppServerReadOff, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': 'Spp???????????????', 'detail': '13', 'method': 'sppCloseServerSocket', 'api': sppServerInterface_1.testSppServerClose, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    { 'name': 'Spp???????????????', 'detail': '14', 'method': 'sppCloseClientSocket', 'api': sppServerInterface_1.testSppCloseClientSocket, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
    //  { 'name': '??????Ble??????', 'detail': '17', 'method': 'stopBleScan',  'result': 'None', 'category': ScenarioCategory.SppServerScenario },
    { 'name': '?????????', 'detail': '15', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.ScenarioCategory.SppServerScenario },
];
function initBRFoundScenarioData() {
    let TestScenarioArray = [];
    BrFoundScenarioTest.forEach(item => {
        TestScenarioArray.push(new testData_1.TestScenario(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestScenarioArray;
}
exports.initBRFoundScenarioData = initBRFoundScenarioData;
function initBleFoundScenarioData() {
    let TestScenarioArray = [];
    BleFoundScenarioTest.forEach(item => {
        TestScenarioArray.push(new testData_1.TestScenario(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestScenarioArray;
}
exports.initBleFoundScenarioData = initBleFoundScenarioData;
function initGattClientScenarioData() {
    let TestScenarioArray = [];
    GattClientScenarioTest.forEach(item => {
        TestScenarioArray.push(new testData_1.TestScenario(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestScenarioArray;
}
exports.initGattClientScenarioData = initGattClientScenarioData;
function initGattServerScenarioData() {
    let TestScenarioArray = [];
    GattServerScenarioTest.forEach(item => {
        TestScenarioArray.push(new testData_1.TestScenario(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestScenarioArray;
}
exports.initGattServerScenarioData = initGattServerScenarioData;
function initSppClientScenarioData() {
    let TestScenarioArray = [];
    SppClientScenarioTest.forEach(item => {
        TestScenarioArray.push(new testData_1.TestScenario(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestScenarioArray;
}
exports.initSppClientScenarioData = initSppClientScenarioData;
function initSppServerScenarioData() {
    let TestScenarioArray = [];
    SppServerScenarioTest.forEach(item => {
        TestScenarioArray.push(new testData_1.TestScenario(item.name, item.detail, item.method, item.api, item.result, item.Category));
    });
    return TestScenarioArray;
}
exports.initSppServerScenarioData = initSppServerScenarioData;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppClientInterface.ets":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppClientInterface.ets ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dataRead = exports.strToArrayBuffer = exports.sppClientClose = exports.acceptClientSocket = exports.testSppClientClose = exports.testSppClientReadOff = exports.testSppClientReadOn = exports.testSppClientWrite = exports.testSppClientConnectUnSafe = exports.testSppClientConnectSafe = void 0;
/*
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
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
__webpack_require__(/*! ./BluetoothModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/BluetoothModel.ts");
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
//export function testSetSppBluetoothScanMode(mode: number, dur: number):String{
//  let message = "??????????????????"
////  let btEnable = AppStorage.get('bluetoothIsOn')
////  if (!btEnable) {
////    message = '??????????????????';
////    return;
////  }.
//  let ret = BluetoothModel.setBluetoothScanMode(4, 0);
//  if (ret) {
//    message = "????????????"
//  } else {
//    message = "????????????"
//  }
//  prompt.showToast({message: message})
//  return message
//}
let clientNumber = -1;
function testSppClientConnectSafe() {
    let message = "sppClientConnectSafe test";
    console.info('testSppClientConnectSafe create! ');
    let uuid = AppStorage.Get('inputUuid');
    let deviceId = AppStorage.Get('inputDeviceId');
    console.info('bluetoothModel sppConnect: ' + deviceId);
    _ohos_bluetooth_1.sppConnect(deviceId, {
        uuid: uuid,
        secure: true,
        type: 0
    }, (code, socketID) => {
        console.log("spp client code:" + code.code);
        if (code.code != 0) {
            message = "?????????????????????!";
            console.info('bluetoothModel sppConnect callback socketNumber(safe mode): ' + code.code);
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        acceptClientSocket(socketID);
        console.info('bluetoothModel sppConnect callback socketNumber(safe mode): ' + socketID);
        message = "?????????????????????!";
        _system_prompt_1.showToast({ message: message });
        return message;
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppClientConnectSafe = testSppClientConnectSafe;
function testSppClientConnectUnSafe() {
    let message = "sppClientConnectUnSafe test";
    let uuid = AppStorage.Get('inputUuid');
    let deviceId = AppStorage.Get('inputDeviceId');
    _ohos_bluetooth_1.sppConnect(deviceId, {
        uuid: uuid,
        secure: false,
        type: 0
    }, (code, socketID) => {
        if (code.code != 0) {
            message = "?????????????????????!";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
        acceptClientSocket(socketID);
        console.info('bluetoothModel sppConnect callback socketNumber(non-safe mode): ' + socketID);
        message = "?????????????????????!";
        _system_prompt_1.showToast({ message: message });
        return message;
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppClientConnectUnSafe = testSppClientConnectUnSafe;
function testSppClientWrite() {
    let message = "sppClientWrite test";
    console.info('bluetoothModel sppWrite clientNumber: ' + JSON.stringify(clientNumber));
    let writeData = AppStorage.Get("writeData");
    let writeArrayBuffer = strToArrayBuffer(writeData);
    const sppWriteSuccess = _ohos_bluetooth_1.sppWrite(clientNumber, writeArrayBuffer);
    if (sppWriteSuccess) {
        console.info('sppWrite successfully');
        message = "???????????? ";
    }
    else {
        console.info('sppWrite failed');
        message = "????????????";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppClientWrite = testSppClientWrite;
function testSppClientReadOn() {
    let message = "sppClientReadOn test";
    _ohos_bluetooth_1.on('sppRead', clientNumber, (dataBuffer) => {
        const data = new Uint8Array(dataBuffer);
        console.info('spp bluetooth read is: ' + data);
        if (data != null) {
            message = "????????????" + JSON.stringify(data);
        }
        else {
            message = "????????????";
        }
        AppStorage.SetOrCreate("dataReadMessage", message);
        _system_prompt_1.showToast({ message: message });
        return message;
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppClientReadOn = testSppClientReadOn;
function testSppClientReadOff() {
    let message = "sppClientReadOff test";
    _ohos_bluetooth_1.off('sppRead', clientNumber, (dataBuffer) => {
        const data = new Uint8Array(dataBuffer);
        console.info('spp bluetooth read is: ' + data);
        if (data != null) {
            message = "????????????" + JSON.stringify(data);
        }
        else {
            message = "????????????";
        }
        AppStorage.SetOrCreate("dataReadMessage", message);
        _system_prompt_1.showToast({ message: message });
        return message;
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppClientReadOff = testSppClientReadOff;
function testSppClientClose() {
    let message = "sppClientClose test";
    sppClientClose();
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppClientClose = testSppClientClose;
function acceptClientSocket(number) {
    console.info('spp clientSocket socketID: ' + number);
    // ?????????clientNumber????????????????????????/?????????socket???id???
    clientNumber = number;
}
exports.acceptClientSocket = acceptClientSocket;
function sppClientClose() {
    console.info('bluetoothModel sppCloseClientSocket clientNumber: ' + JSON.stringify(clientNumber));
    _ohos_bluetooth_1.sppCloseClientSocket(clientNumber);
    let message = '???????????? clientNumber' + clientNumber;
    _system_prompt_1.showToast({ message: message });
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
function dataRead(dataBuffer) {
    const data = new Uint8Array(dataBuffer);
    console.log('spp bluetooth read is: ' + data);
    if (data != null) {
        this.dataReadMessage = "????????????" + JSON.stringify(data);
    }
    else {
        this.dataReadMessage = "????????????";
    }
}
exports.dataRead = dataRead;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppInterface.ets":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppInterface.ets ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testSppServer = exports.testSppClient = void 0;
/*
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
var _system_router_1  = globalThis.requireNativeModule('system.router');
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
const PAGE_URI_GET_SPP_CLIENT_TEST = 'pages/subManualApiTest/subSppTest/sppClientTest';
const PAGE_URI_GET_SPP_SERVER_TEST = 'pages/subManualApiTest/subSppTest/sppServerTest';
function testSppClient() {
    _system_router_1.push({ uri: PAGE_URI_GET_SPP_CLIENT_TEST });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppClient = testSppClient;
function testSppServer() {
    _system_router_1.push({ uri: PAGE_URI_GET_SPP_SERVER_TEST });
    let message = "????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServer = testSppServer;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppServerInterface.ets":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppServerInterface.ets ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testSppCloseClientSocket = exports.testSppServerClose = exports.testSppServerReadOff = exports.testSppServerReadOn = exports.testSppServerWrite = exports.testSppServerAccept = exports.testSppServerCreateUnSafe = exports.testSppServerCreateSafe = void 0;
/*
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
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
__webpack_require__(/*! @ohos.bluetooth */ "../../api/@ohos.bluetooth.d.ts");
function testSppServerCreateSafe() {
    let message = "sppServerCreateSafe test";
    console.info('spp server socketId(safe mode) create! ');
    let uuid = AppStorage.Get('inputUuid');
    if (uuid == '') {
        message = 'uuid??????';
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    // ????????????????????????????????????, ???????????????ID
    _ohos_bluetooth_1.sppListen('BluetoothDevice', { uuid: uuid, secure: true, type: 0 }, (code, serverSocketID) => {
        console.info('bluetooth error code: ' + code.code);
        if (code.code == 0) {
            console.info('spp server: serverSocketID(safe mode) - ' + serverSocketID);
            serverNumber = serverSocketID;
            message = "??????server??????";
            _system_prompt_1.showToast({ message: message });
            return message;
        }
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServerCreateSafe = testSppServerCreateSafe;
let serverNumber = -1;
function testSppServerCreateUnSafe() {
    let message = "sppServerCreateUnSafe test";
    let uuid = AppStorage.Get('inputUuid');
    console.info('spp server socketId(non-safe mode) create! ');
    if (uuid == '') {
        message = 'uuid??????';
        _system_prompt_1.showToast({ message: message });
        return message;
    }
    // ????????????????????????????????????, ???????????????ID
    _ohos_bluetooth_1.sppListen('BluetoothDevice', { uuid: uuid, secure: false, type: 0 }, (code, serverSocketID) => {
        console.info('bluetooth error code: ' + code.code);
        if (code.code == 0) {
            console.info('spp server: serverSocketID(non-safe mode) ' + serverSocketID);
            serverNumber = serverSocketID;
            message = "??????server??????";
        }
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServerCreateUnSafe = testSppServerCreateUnSafe;
let clientNumber = -1;
function testSppServerAccept() {
    let message = "testSppServerAccept test";
    _ohos_bluetooth_1.sppAccept(serverNumber, (code, clientSocketID) => {
        if (code.code == 0) {
            console.info('spp server: clientSocketID - ' + clientSocketID);
            clientNumber = clientSocketID;
            message = "?????????????????????";
            _ohos_bluetooth_1.on('sppRead', clientNumber, (dataBuffer) => {
                const data = new Uint8Array(dataBuffer);
                console.info('spp bluetooth read is: ' + data);
                if (data != null) {
                    message = "????????????" + JSON.stringify(data);
                }
                else {
                    message = "????????????";
                }
                AppStorage.SetOrCreate("dataReadMessage", message);
            });
        }
        _system_prompt_1.showToast({ message: message });
        return message;
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServerAccept = testSppServerAccept;
function testSppServerWrite() {
    let message = "sppServerWrite test";
    console.info(MODEL + 'sppWrite clientNumber: ' + JSON.stringify(clientNumber));
    let writeData = AppStorage.Get("writeData");
    let writeArrayBuffer = strToArrayBuffer(writeData);
    const sppWriteSuccess = _ohos_bluetooth_1.sppWrite(clientNumber, writeArrayBuffer);
    if (sppWriteSuccess) {
        console.info('sppWrite successfully');
        message = "???????????? ";
    }
    else {
        console.info('sppWrite failed');
        message = "????????????";
    }
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServerWrite = testSppServerWrite;
function testSppServerReadOn() {
    let message = "sppServerReadOn test";
    _ohos_bluetooth_1.on('sppRead', clientNumber, (dataBuffer) => {
        const data = new Uint8Array(dataBuffer);
        console.info('spp bluetooth read is: ' + data);
        if (data != null) {
            message = "????????????" + JSON.stringify(data);
        }
        else {
            message = "????????????";
        }
        AppStorage.SetOrCreate("dataReadMessage", message);
        _system_prompt_1.showToast({ message: message });
        return message;
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServerReadOn = testSppServerReadOn;
function testSppServerReadOff() {
    let message = "sppServerReadOff test";
    _ohos_bluetooth_1.off('sppRead', clientNumber, (dataBuffer) => {
        const data = new Uint8Array(dataBuffer);
        console.info('spp bluetooth read is: ' + data);
        if (data != null) {
            message = "????????????" + JSON.stringify(data);
        }
        else {
            message = "????????????";
        }
        AppStorage.SetOrCreate("dataReadMessage", message);
        _system_prompt_1.showToast({ message: message });
        return message;
    });
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServerReadOff = testSppServerReadOff;
//???????????????serverSocket
let MODEL = "bluetoothModel:";
function testSppServerClose() {
    let message = "sppServerClose test";
    console.info(MODEL + 'sppCloseServerSocket serverNumber: ' + serverNumber);
    _ohos_bluetooth_1.sppCloseServerSocket(serverNumber);
    message = "???????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppServerClose = testSppServerClose;
//???????????????accept?????????clientSocket
function testSppCloseClientSocket() {
    let message = "sppCloseClientSocket test";
    console.info(MODEL + 'sppCloseClientSocket serverNumber: ' + clientNumber);
    _ohos_bluetooth_1.sppCloseClientSocket(clientNumber);
    message = "???????????????";
    _system_prompt_1.showToast({ message: message });
    return message;
}
exports.testSppCloseClientSocket = testSppCloseClientSocket;
function strToArrayBuffer(str) {
    let array = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestScenario = exports.ScenarioCategory = exports.TestAuto = exports.AutoCategory = exports.TestApi = exports.CaseCategory = exports.TestData = exports.Category = void 0;
/*
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
var Category;
(function (Category) {
    Category[Category["All"] = 0] = "All";
    Category[Category["API"] = 1] = "API";
    Category[Category["Scenario"] = 2] = "Scenario";
    Category[Category["AutoTest"] = 3] = "AutoTest";
    Category[Category["GattAutoTest"] = 4] = "GattAutoTest";
    Category[Category["SppAutoTest"] = 5] = "SppAutoTest";
    Category[Category["ProfileAutoTest"] = 6] = "ProfileAutoTest";
    Category[Category["Profile"] = 7] = "Profile";
    Category[Category["BenchMark"] = 8] = "BenchMark";
})(Category = exports.Category || (exports.Category = {}));
let NextId = 0;
class TestData {
    constructor(name, detail, url, image, category) {
        this.id = `${NextId++}`;
        this.name = name;
        this.url = url;
        this.detail = detail;
        this.image = image;
        this.category = category;
    }
}
exports.TestData = TestData;
var CaseCategory;
(function (CaseCategory) {
    CaseCategory[CaseCategory["BR"] = 0] = "BR";
    CaseCategory[CaseCategory["BLE"] = 1] = "BLE";
    CaseCategory[CaseCategory["Gatt"] = 2] = "Gatt";
    CaseCategory[CaseCategory["SPP"] = 3] = "SPP";
    CaseCategory[CaseCategory["Profile"] = 4] = "Profile";
    CaseCategory[CaseCategory["GattClient"] = 5] = "GattClient";
    CaseCategory[CaseCategory["GattServer"] = 6] = "GattServer";
    CaseCategory[CaseCategory["SPPClient"] = 7] = "SPPClient";
    CaseCategory[CaseCategory["SPPServer"] = 8] = "SPPServer";
    CaseCategory[CaseCategory["ProfileA2dpSource"] = 9] = "ProfileA2dpSource";
    CaseCategory[CaseCategory["ProfileHandsFreeAudioGateway"] = 10] = "ProfileHandsFreeAudioGateway";
    CaseCategory[CaseCategory["ProfileHitHost"] = 11] = "ProfileHitHost";
    CaseCategory[CaseCategory["ProfilePanNetwork"] = 12] = "ProfilePanNetwork";
    CaseCategory[CaseCategory["GattAutoTest"] = 13] = "GattAutoTest";
    CaseCategory[CaseCategory["SppAutoTest"] = 14] = "SppAutoTest";
})(CaseCategory = exports.CaseCategory || (exports.CaseCategory = {}));
class TestApi {
    constructor(name, detail, method, api, result, category) {
        this.id = `${NextId++}`;
        this.name = name;
        this.detail = detail;
        this.method = method;
        this.api = api;
        this.result = result;
        this.category = category;
    }
}
exports.TestApi = TestApi;
var AutoCategory;
(function (AutoCategory) {
    AutoCategory[AutoCategory["BrAuto"] = 0] = "BrAuto";
    AutoCategory[AutoCategory["BleAuto"] = 1] = "BleAuto";
    AutoCategory[AutoCategory["GattClientAuto"] = 2] = "GattClientAuto";
    AutoCategory[AutoCategory["GattServerAuto"] = 3] = "GattServerAuto";
    AutoCategory[AutoCategory["SppClientAuto"] = 4] = "SppClientAuto";
    AutoCategory[AutoCategory["SppServerAuto"] = 5] = "SppServerAuto";
    AutoCategory[AutoCategory["A2dpSourceAuto"] = 6] = "A2dpSourceAuto";
    AutoCategory[AutoCategory["HandsFreeAudioGatewayAuto"] = 7] = "HandsFreeAudioGatewayAuto";
    AutoCategory[AutoCategory["HitHostAuto"] = 8] = "HitHostAuto";
    AutoCategory[AutoCategory["PanNetworkAuto"] = 9] = "PanNetworkAuto";
})(AutoCategory = exports.AutoCategory || (exports.AutoCategory = {}));
class TestAuto {
    constructor(name, detail, method, api, result, category) {
        this.id = `${NextId++}`;
        this.name = name;
        this.detail = detail;
        this.method = method;
        this.api = api;
        this.result = result;
        this.category = category;
    }
}
exports.TestAuto = TestAuto;
var ScenarioCategory;
(function (ScenarioCategory) {
    ScenarioCategory[ScenarioCategory["BrFoundScenario"] = 0] = "BrFoundScenario";
    ScenarioCategory[ScenarioCategory["BleFoundScenario"] = 1] = "BleFoundScenario";
    ScenarioCategory[ScenarioCategory["GattClientScenario"] = 2] = "GattClientScenario";
    ScenarioCategory[ScenarioCategory["GattServerScenario"] = 3] = "GattServerScenario";
    ScenarioCategory[ScenarioCategory["SppClientScenario"] = 4] = "SppClientScenario";
    ScenarioCategory[ScenarioCategory["SppServerScenario"] = 5] = "SppServerScenario";
    //  A2dpSourceScenario,
    //  HandsFreeAudioGatewayAuto,
    //  HitHostAuto,
    //  PanNetworkAuto,
})(ScenarioCategory = exports.ScenarioCategory || (exports.ScenarioCategory = {}));
class TestScenario {
    constructor(name, detail, method, api, result, category) {
        this.id = `${NextId++}`;
        this.name = name;
        this.detail = detail;
        this.method = method;
        this.api = api;
        this.result = result;
        this.category = category;
    }
}
exports.TestScenario = TestScenario;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testDataModels.ets":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testDataModels.ets ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initProfileAutoTestData = exports.initSppAutoTestData = exports.initGattAutoTestData = exports.initPanNetworkProfileApiData = exports.initHitHostProfileApiData = exports.initHandsFreeAudioGatewayProfileApiData = exports.initA2dpSourceProfileApiData = exports.initSppServerApiData = exports.initSppClientApiData = exports.initGattServerApiData = exports.initGattClientApiData = exports.initSppApiTestData = exports.initGattApiTestData = exports.initBleApiData = exports.initBRApiData = exports.initTestData = void 0;
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
const testData_1 = __webpack_require__(/*! ./testData */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/testData.ets");
const brInterface_1 = __webpack_require__(/*! ./brInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/brInterface.ets");
const bleInterface_1 = __webpack_require__(/*! ./bleInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/bleInterface.ets");
__webpack_require__(/*! ./gattInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattInterface.ets");
__webpack_require__(/*! ./sppInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppInterface.ets");
__webpack_require__(/*! ./profileInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/profileInterface.ets");
const gattClientInterface_1 = __webpack_require__(/*! ./gattClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattClientInterface.ets");
const gattServerInterface_1 = __webpack_require__(/*! ./gattServerInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/gattServerInterface.ets");
const sppClientInterface_1 = __webpack_require__(/*! ./sppClientInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppClientInterface.ets");
const sppServerInterface_1 = __webpack_require__(/*! ./sppServerInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/sppServerInterface.ets");
const a2dpSinkProfileInterface_1 = __webpack_require__(/*! ./a2dpSinkProfileInterface */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/model/a2dpSinkProfileInterface.ets");
__webpack_require__(/*! @ohos.bluetooth */ "../../api/@ohos.bluetooth.d.ts");
const BRTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '????????????????????????', 'detail': '??????????????????????????????', 'method': 'getBtConnectionState', 'api': brInterface_1.testGetBtConnectionState, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setLocalName', 'api': brInterface_1.testSetLocalName, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getLocalName', 'api': brInterface_1.testGetLocalName, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '???????????????????????????', 'method': 'startBluetoothDiscovery', 'api': brInterface_1.testStartBluetoothDiscovery, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '????????????', 'method': 'stopBluetoothDiscovery', 'api': brInterface_1.testStopBluetoothDiscovery, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '????????????', 'detail': '????????????????????????', 'method': 'pairDevice', 'api': brInterface_1.testPairDevice, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'unpairDevice', 'api': brInterface_1.testUnPairedDevice, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '????????????????????????', 'detail': '?????????????????????????????????', 'method': 'getDeviceName', 'api': brInterface_1.testGetRemoteDeviceName, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '????????????????????????', 'detail': '?????????????????????????????????', 'method': 'getDeviceType', 'api': brInterface_1.testGetRemoteDeviceClass, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '?????????????????????????????????', 'method': 'getPairedDeviceIds', 'api': brInterface_1.testGetPairedDevices, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????????????????1', 'detail': '?????????????????????????????????', 'method': 'getProfileConnState', 'api': brInterface_1.testGetProfileConnState1, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????????????????2', 'detail': '?????????????????????????????????', 'method': 'getDeviceState', 'api': brInterface_1.testGetProfileConnState2, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????????????????', 'detail': '??????????????????', 'method': 'on.stateChange', 'api': brInterface_1.testOnStateChange, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '??????pin?????????', 'detail': '??????pin?????????', 'method': 'on.pinRequired', 'api': brInterface_1.testOnPinRequired, 'result': 'None', 'category': testData_1.CaseCategory.BR },
    { 'name': '????????????????????????', 'detail': '????????????????????????', 'method': 'on.bondStateChange', 'api': brInterface_1.testOnBondStateChange, 'result': 'None', 'category': testData_1.CaseCategory.BR }
];
const BleTestCase = [
    { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattServer', 'api': bleInterface_1.testCreateGattServerDevice, 'result': 'None', 'category': testData_1.CaseCategory.BLE },
    { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattClient', 'api': bleInterface_1.testCreateGattClientDevice, 'result': 'None', 'category': testData_1.CaseCategory.BLE },
    { 'name': '???????????????BLE??????', 'detail': '???????????????BLE????????????', 'method': 'getConnectedBLEDevices', 'api': bleInterface_1.testGetConnectedBLEDevices, 'result': 'None', 'category': testData_1.CaseCategory.BLE },
    { 'name': '??????BLE??????', 'detail': '????????????BLE??????', 'method': 'startBLEScan', 'api': bleInterface_1.testStartBLEScan, 'result': 'None', 'category': testData_1.CaseCategory.BLE },
    { 'name': '??????BLE??????', 'detail': '????????????', 'method': 'stopBLEScan', 'api': bleInterface_1.testStopBLEScan, 'result': 'None', 'category': testData_1.CaseCategory.BLE },
    { 'name': '??????BLE??????????????????', 'detail': '??????BLE????????????????????????', 'method': 'on.BLEDeviceFind', 'api': bleInterface_1.testOnBLEDeviceFind, 'result': 'None', 'category': testData_1.CaseCategory.BLE }
];
const GattTestComposition = [
    { 'name': 'GattClient', 'detail': 'Gatt???????????????', 'url': 'pages/subManualApiTest/subGattTest/gattClient', 'image': { "id": 16777549, "type": 20000, params: [] }, 'category': testData_1.CaseCategory.Gatt },
    { 'name': 'GattServer', 'detail': 'Gatt???????????????', 'url': 'pages/subManualApiTest/subGattTest/gattServer', 'image': { "id": 16777549, "type": 20000, params: [] }, 'category': testData_1.CaseCategory.Gatt },
];
const SppTestComposition = [
    { 'name': 'SppClient', 'detail': 'Spp???????????????', 'url': 'pages/subManualApiTest/subSppTest/sppClientTest', 'image': { "id": 16777567, "type": 20000, params: [] }, 'category': testData_1.CaseCategory.SPP },
    { 'name': 'SppServer', 'detail': 'Spp???????????????', 'url': 'pages/subManualApiTest/subSppTest/sppServerTest', 'image': { "id": 16777567, "type": 20000, params: [] }, 'category': testData_1.CaseCategory.SPP },
];
//const ProfileTestCase: any[]  = [
//  { 'name': 'A2dpSource??????', 'detail': 'A2dpSource????????????', 'method': 'A2dpSourceProfile', 'api': testA2dpSourceProfile, 'result': 'None', 'category': CaseCategory.Profile },
//  { 'name': 'HandsFreeAudioGateway??????', 'detail': 'HandsFreeAudioGateway????????????', 'method': 'HandsFreeAudioGatewayProfile', 'api': testHandsFreeAudioGatewayProfile, 'result': 'None', 'category': CaseCategory.Profile },
//  { 'name': 'HidHost??????', 'detail': 'HidHost????????????', 'method': 'HidHostProfile', 'api': testHidHostProfile, 'result': 'None', 'category': CaseCategory.Profile },
//  { 'name': 'PanNetwork??????', 'detail': 'PanNetwork????????????', 'method': 'PanNetworkProfile', 'api': testPanNetworkProfile, 'result': 'None', 'category': CaseCategory.Profile },
//]
const GattClientTestCase = [
    { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattClient', 'api': gattClientInterface_1.testCreateGattClient, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????', 'detail': 'Gatt??????', 'method': 'connect', 'api': gattClientInterface_1.testConnect, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '????????????', 'detail': '??????Gatt??????', 'method': 'disconnect', 'api': gattClientInterface_1.testDisconnect, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': 'BLE????????????', 'detail': '??????BLE????????????', 'method': 'on.BLEConnectionStateChange', 'api': gattClientInterface_1.testOnBLEConnectionStateChange, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????', 'detail': '??????Gatt?????????', 'method': 'close', 'api': gattClientInterface_1.testGattClientClose, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '????????????callback', 'detail': '????????????callback', 'method': 'getServices(Callback)', 'api': gattClientInterface_1.testGetServicesCallback, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '????????????promise', 'detail': '????????????promise', 'method': 'getServices(promise)', 'api': gattClientInterface_1.testGetServicesPromise, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '???????????????callback', 'detail': '???????????????callback', 'method': 'readCharacteristicValue(callback)', 'api': gattClientInterface_1.testReadCharacteristicValueCallback, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '???????????????promise', 'detail': '???????????????promise', 'method': 'readCharacteristicValue(promise)', 'api': gattClientInterface_1.testReadCharacteristicValuePromise, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????????????????callback', 'detail': '??????????????????callback', 'method': 'readDescriptorValue(callback)', 'api': gattClientInterface_1.testReadDescriptorValueCallback, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????????????????promise', 'detail': '??????????????????promise', 'method': 'readDescriptorValue(promise)', 'api': gattClientInterface_1.testReadDescriptorValuePromise, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'writeCharacteristicValue', 'api': gattClientInterface_1.testWriteCharacteristicValue, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????????????????', 'detail': '??????????????????', 'method': 'writeDescriptorValue', 'api': gattClientInterface_1.testWriteDescriptorValue, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': 'BLE???????????????', 'detail': '??????BLE???????????????', 'method': 'on.BLECharacteristicChange', 'api': gattClientInterface_1.testOnBLECharacteristicChange, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????BLEMtu??????', 'detail': '??????BLEMtu??????', 'method': 'setBLEMtuSize', 'api': gattClientInterface_1.testSetBLEMtuSize, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '????????????????????????', 'detail': '????????????????????????', 'method': 'setNotifyCharacteristicChanged', 'api': gattClientInterface_1.testSetNotifyCharacteristicChanged, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????????????????callback', 'detail': '??????????????????callback', 'method': 'getDeviceName()callback', 'api': gattClientInterface_1.testGetDeviceNameCallback, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????????????????promise', 'detail': '??????????????????promise', 'method': 'getDeviceName()Promise', 'api': gattClientInterface_1.testGetDeviceNamePromise, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????Rssi???callback', 'detail': '??????Rssi???callback', 'method': 'getRssiValue()Callback', 'api': gattClientInterface_1.testGetRssiValueCallback, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
    { 'name': '??????Rssi???promise', 'detail': '??????Rssi???promise', 'method': 'getRssiValue()Promise', 'api': gattClientInterface_1.testGetRssiValuePromise, 'result': 'None', 'category': testData_1.CaseCategory.GattClient },
];
const GattServerTestCase = [
    { 'name': '??????Gatt?????????', 'detail': '??????Gatt?????????', 'method': 'createGattServer', 'api': gattServerInterface_1.testCreateGattServer, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '????????????', 'detail': '??????Gatt??????', 'method': 'addService', 'api': gattServerInterface_1.testAddService, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '????????????', 'detail': '??????Gatt??????', 'method': 'removeService', 'api': gattServerInterface_1.testRemoveService, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'startAdvertising', 'api': gattServerInterface_1.testStartAdvertising, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'stopAdvertising', 'api': gattServerInterface_1.testStopAdvertising, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '??????', 'detail': '??????Gatt?????????', 'method': 'close', 'api': gattServerInterface_1.testGattServerClose, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '????????????', 'detail': '??????Gatt????????????', 'method': 'on.connectStateChange', 'api': gattServerInterface_1.testOnConnectStateChange, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.characteristicRead', 'api': gattServerInterface_1.testOnCharacteristicRead, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.characteristicWrite', 'api': gattServerInterface_1.testOnCharacteristicWrite, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.descriptorRead', 'api': gattServerInterface_1.testOnDescriptorRead, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
    { 'name': '???????????????', 'detail': '???????????????', 'method': 'on.descriptorWrite', 'api': gattServerInterface_1.testOnDescriptorWrite, 'result': 'None', 'category': testData_1.CaseCategory.GattServer },
];
const SppClientTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': '??????SPP????????????', 'detail': '??????SPP????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': '????????????????????????', 'detail': '??????????????????????????????', 'method': 'getBtConnectionState', 'api': brInterface_1.testGetBtConnectionState, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': 'Spp???????????????(????????????)', 'detail': 'Spp?????????(????????????)??????', 'method': 'sppConnect', 'api': sppClientInterface_1.testSppClientConnectSafe, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': 'Spp???????????????(???????????????)', 'detail': 'Spp?????????(???????????????)??????', 'method': 'sppConnect', 'api': sppClientInterface_1.testSppClientConnectUnSafe, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': '????????????', 'detail': '????????????????????????', 'method': 'pairDevice', 'api': brInterface_1.testPairDevice, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppWrite', 'api': sppClientInterface_1.testSppClientWrite, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'on.sppRead', 'api': sppClientInterface_1.testSppClientReadOn, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'off.sppRead', 'api': sppClientInterface_1.testSppClientReadOff, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppCloseClientSocket', 'api': sppClientInterface_1.testSppClientClose, 'result': 'None', 'category': testData_1.CaseCategory.SPPClient },
];
const SppServerTestCase = [
    { 'name': '?????????', 'detail': '????????????', 'method': 'enableBluetooth', 'api': brInterface_1.testEnableBluetooth, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': '?????????', 'detail': '???????????????', 'method': 'disableBluetooth', 'api': brInterface_1.testDisableBluetooth, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': '??????SPP????????????', 'detail': '??????SPP????????????', 'method': 'setBluetoothScanMode', 'api': brInterface_1.testSetBluetoothScanMode, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': '????????????', 'detail': '??????????????????', 'method': 'getState', 'api': brInterface_1.testGetState, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': '??????????????????', 'detail': '????????????????????????', 'method': 'getBluetoothScanMode', 'api': brInterface_1.testGetBluetoothScanMode, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': '????????????????????????', 'detail': '??????????????????????????????', 'method': 'getBtConnectionState', 'api': brInterface_1.testGetBtConnectionState, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': 'Spp???????????????(????????????)', 'detail': 'Spp?????????(????????????)??????', 'method': 'sppListen', 'api': sppServerInterface_1.testSppServerCreateSafe, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': 'Spp???????????????(???????????????)', 'detail': 'Spp?????????(???????????????)??????', 'method': 'sppListen', 'api': sppServerInterface_1.testSppServerCreateUnSafe, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': '??????pin?????????', 'detail': '??????pin?????????', 'method': 'on.pinRequired', 'api': brInterface_1.testOnPinRequired, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    //  { 'name': 'SPP???????????????', 'detail': '????????????', 'method': 'spp_Client_Write', 'api': testSppClientWrite, 'result': 'None', 'category': CaseCategory.SPPServer },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppWrite', 'api': sppServerInterface_1.testSppServerWrite, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppAccept', 'api': sppServerInterface_1.testSppServerAccept, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'on.sppRead', 'api': sppServerInterface_1.testSppServerReadOn, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': 'Spp?????????????????????', 'detail': 'Spp?????????????????????', 'method': 'off.sppRead', 'api': sppServerInterface_1.testSppServerReadOff, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppCloseServerSocket', 'api': sppServerInterface_1.testSppServerClose, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
    { 'name': 'Spp???????????????', 'detail': 'Spp???????????????', 'method': 'sppCloseClientSocket', 'api': sppServerInterface_1.testSppCloseClientSocket, 'result': 'None', 'category': testData_1.CaseCategory.SPPServer },
];
const A2dpSourceProfileTestCase = [
    { 'name': '??????', 'detail': 'Profile??????', 'method': 'connect', 'api': a2dpSinkProfileInterface_1.testProfileConnect, 'result': 'None', 'category': testData_1.CaseCategory.ProfileA2dpSource },
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.CaseCategory.ProfileA2dpSource },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getPlayingState', 'api': a2dpSinkProfileInterface_1.testProfileGetPlayingState, 'result': 'None', 'category': testData_1.CaseCategory.ProfileA2dpSource },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.CaseCategory.ProfileA2dpSource },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.CaseCategory.ProfileA2dpSource },
];
const HandsFreeAudioGatewayProfileTestCase = [
    { 'name': '??????', 'detail': 'Profile??????', 'method': 'connect', 'api': a2dpSinkProfileInterface_1.testProfileConnect, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHandsFreeAudioGateway },
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHandsFreeAudioGateway },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHandsFreeAudioGateway, },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHandsFreeAudioGateway, },
];
const HitHostProfileTestCase = [
    { 'name': '??????', 'detail': 'Profile??????', 'method': 'connect', 'api': a2dpSinkProfileInterface_1.testProfileConnect, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHitHost },
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHitHost },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHitHost },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.CaseCategory.ProfileHitHost },
];
const PanNetworkProfileTestCase = [
    { 'name': '????????????', 'detail': '??????Profile??????', 'method': 'disconnect', 'api': a2dpSinkProfileInterface_1.testProfileDisConnect, 'result': 'None', 'category': testData_1.CaseCategory.ProfilePanNetwork },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getConnectionDevices', 'api': a2dpSinkProfileInterface_1.testProfileGetConnectionDevices, 'result': 'None', 'category': testData_1.CaseCategory.ProfilePanNetwork },
    { 'name': '??????????????????', 'detail': '??????Profile????????????', 'method': 'getDeviceState', 'api': a2dpSinkProfileInterface_1.testProfileGetDeviceState, 'result': 'None', 'category': testData_1.CaseCategory.ProfilePanNetwork },
];
const TestComposition = [
    { 'name': 'Classic', 'detail': '??????????????????', 'url': 'pages/subManualApiTest/BrInterfaceTest', 'image': { "id": 16777548, "type": 20000, params: [] }, 'category': testData_1.Category.API },
    { 'name': 'BLE', 'detail': '?????????????????????', 'url': 'pages/subManualApiTest/bleTest', 'image': { "id": 16777556, "type": 20000, params: [] }, 'category': testData_1.Category.API },
    { 'name': 'Gatt', 'detail': 'GATT??????', 'url': 'pages/subManualApiTest/gattTest', 'image': { "id": 16777549, "type": 20000, params: [] }, 'category': testData_1.Category.API },
    { 'name': 'SPP', 'detail': 'SPP??????', 'url': 'pages/subManualApiTest/sppTest', 'image': { "id": 16777567, "type": 20000, params: [] }, 'category': testData_1.Category.API },
    //  { 'name': 'Scenario', 'detail': '????????????', 'image': $r('app.media.ScenarioTest'), 'category': Category.Scenario},
    { 'name': 'BrAutoTest', 'detail': 'Br????????????', 'url': 'pages/subAutoTest/brAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.AutoTest },
    { 'name': 'BleAutoTest', 'detail': 'Ble????????????', 'url': 'pages/subAutoTest/bleAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.AutoTest },
    { 'name': 'GattAutoTest', 'detail': 'Gatt????????????', 'url': 'pages/subAutoTest/gattAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.AutoTest },
    { 'name': 'SppAutoTest', 'detail': 'Spp????????????', 'url': 'pages/subAutoTest/sppAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.AutoTest },
    { 'name': 'BrFoundScenarioTest', 'detail': '??????????????????????????????', 'url': 'pages/subScenarioTest/brFoundScenarioTest', 'image': { "id": 16777551, "type": 20000, params: [] }, 'category': testData_1.Category.Scenario },
    { 'name': 'BleFoundScenarioTest', 'detail': 'Ble????????????????????????', 'url': 'pages/subScenarioTest/bleFoundScenarioTest', 'image': { "id": 16777551, "type": 20000, params: [] }, 'category': testData_1.Category.Scenario },
    { 'name': 'GattClientScenarioTest', 'detail': 'GattClient????????????', 'url': 'pages/subScenarioTest/gattClientScenarioTest', 'image': { "id": 16777551, "type": 20000, params: [] }, 'category': testData_1.Category.Scenario },
    { 'name': 'GattServerScenarioTest', 'detail': 'GattServer????????????', 'url': 'pages/subScenarioTest/gattServerScenarioTest', 'image': { "id": 16777551, "type": 20000, params: [] }, 'category': testData_1.Category.Scenario },
    { 'name': 'SppClientScenarioTest', 'detail': 'SppClient????????????', 'url': 'pages/subScenarioTest/sppClientScenarioTest', 'image': { "id": 16777551, "type": 20000, params: [] }, 'category': testData_1.Category.Scenario },
    { 'name': 'SppServerScenarioTest', 'detail': 'SppServer????????????', 'url': 'pages/subScenarioTest/sppServerScenarioTest', 'image': { "id": 16777551, "type": 20000, params: [] }, 'category': testData_1.Category.Scenario },
    { 'name': 'ProfileAutoTest', 'detail': 'Profile????????????', 'url': 'pages/subAutoTest/profileAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.AutoTest },
    //  { 'name': 'Profile', 'detail': 'Profile??????', 'url': 'pages/subManualApiTest/profileTest', 'image': $r('app.media.profile'), 'category': Category.Profile},
    { 'name': 'A2dpSource', 'detail': 'A2dpSource????????????', 'url': 'pages/subProfileTest/a2dpSourceProfileTest', 'image': { "id": 16777566, "type": 20000, params: [] }, 'category': testData_1.Category.Profile },
    { 'name': 'HFAudioGateway', 'detail': 'HFAudioGateway????????????', 'url': 'pages/subProfileTest/handsFreeAudioGatewayProfileTest', 'image': { "id": 16777566, "type": 20000, params: [] }, 'category': testData_1.Category.Profile },
    { 'name': 'HidHost', 'detail': 'HidHost????????????', 'url': 'pages/subProfileTest/hidHostProfileTest', 'image': { "id": 16777566, "type": 20000, params: [] }, 'category': testData_1.Category.Profile },
    { 'name': 'PanNetwork', 'detail': 'PanNetwork????????????', 'url': 'pages/subProfileTest/panNetworkProfileTest', 'image': { "id": 16777566, "type": 20000, params: [] }, 'category': testData_1.Category.Profile },
];
const GattAutoTestComposition = [
    { 'name': 'GattClientAutoTest', 'detail': 'GattClient????????????', 'url': 'pages/subAutoTest/subGattAutoTest/gattClientAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.GattAutoTest },
    { 'name': 'GattServerAutoTest', 'detail': 'GattServer????????????', 'url': 'pages/subAutoTest/subGattAutoTest/gattServerAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.GattAutoTest },
];
const SppAutoTestComposition = [
    { 'name': 'SppClientAutoTest', 'detail': 'SppClient????????????', 'url': 'pages/subAutoTest/subSppAutoTest/sppClientAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.SppAutoTest },
    { 'name': 'SppServerAutoTest', 'detail': 'SppServer????????????', 'url': 'pages/subAutoTest/subSppAutoTest/sppServerAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.SppAutoTest },
];
const ProfileAutoTestComposition = [
    { 'name': 'A2dpSourceAutoTest', 'detail': 'A2dpSource????????????', 'url': 'pages/subAutoTest/subProfileAutoTest/a2dpSourceAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.ProfileAutoTest },
    { 'name': 'HandsFreeAudioGatewayAutoTest', 'detail': 'HandsFreeAudioGateway????????????', 'url': 'pages/subAutoTest/subProfileAutoTest/handsFreeAudioGatewayAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.ProfileAutoTest },
    { 'name': 'HitHostAutoTest', 'detail': 'HitHost????????????', 'url': 'pages/subAutoTest/subProfileAutoTest/hitHostAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.ProfileAutoTest },
    { 'name': 'PanNetworkAutoTest', 'detail': 'PanNetwork????????????', 'url': 'pages/subAutoTest/subProfileAutoTest/panNetworkAutoTest', 'image': { "id": 16777541, "type": 20000, params: [] }, 'category': testData_1.Category.ProfileAutoTest },
];
function initTestData() {
    let TestDataArray = [];
    TestComposition.forEach(item => {
        TestDataArray.push(new testData_1.TestData(item.name, item.detail, item.url, item.image, item.category));
    });
    return TestDataArray;
}
exports.initTestData = initTestData;
function initBRApiData() {
    let TestApiArray = [];
    BRTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initBRApiData = initBRApiData;
function initBleApiData() {
    let TestApiArray = [];
    BleTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initBleApiData = initBleApiData;
//export function initGattApiData(): Array<TestApi> {
//  let TestApiArray: Array<TestApi> = []
//  GattTestCase.forEach(item => {
//    TestApiArray.push(new TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
//  })
//  return TestApiArray;
//}
function initGattApiTestData() {
    let TestDataArray = [];
    GattTestComposition.forEach(item => {
        TestDataArray.push(new testData_1.TestData(item.name, item.detail, item.url, item.image, item.category));
    });
    return TestDataArray;
}
exports.initGattApiTestData = initGattApiTestData;
function initSppApiTestData() {
    let TestDataArray = [];
    SppTestComposition.forEach(item => {
        TestDataArray.push(new testData_1.TestData(item.name, item.detail, item.url, item.image, item.category));
    });
    return TestDataArray;
}
exports.initSppApiTestData = initSppApiTestData;
//export function initProfileApiTestData(): Array<TestApi> {
//  let TestApiArray: Array<TestApi> = []
//  ProfileTestCase.forEach(item => {
//    TestApiArray.push(new TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
//  })
//  return TestApiArray;
//}
function initGattClientApiData() {
    let TestApiArray = [];
    GattClientTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initGattClientApiData = initGattClientApiData;
function initGattServerApiData() {
    let TestApiArray = [];
    GattServerTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initGattServerApiData = initGattServerApiData;
function initSppClientApiData() {
    let TestApiArray = [];
    SppClientTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initSppClientApiData = initSppClientApiData;
function initSppServerApiData() {
    let TestApiArray = [];
    SppServerTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initSppServerApiData = initSppServerApiData;
function initA2dpSourceProfileApiData() {
    let TestApiArray = [];
    A2dpSourceProfileTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initA2dpSourceProfileApiData = initA2dpSourceProfileApiData;
function initHandsFreeAudioGatewayProfileApiData() {
    let TestApiArray = [];
    HandsFreeAudioGatewayProfileTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initHandsFreeAudioGatewayProfileApiData = initHandsFreeAudioGatewayProfileApiData;
function initHitHostProfileApiData() {
    let TestApiArray = [];
    HitHostProfileTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initHitHostProfileApiData = initHitHostProfileApiData;
function initPanNetworkProfileApiData() {
    let TestApiArray = [];
    PanNetworkProfileTestCase.forEach(item => {
        TestApiArray.push(new testData_1.TestApi(item.name, item.detail, item.method, item.api, item.result, item.category));
    });
    return TestApiArray;
}
exports.initPanNetworkProfileApiData = initPanNetworkProfileApiData;
function initGattAutoTestData() {
    let TestDataArray = [];
    GattAutoTestComposition.forEach(item => {
        TestDataArray.push(new testData_1.TestData(item.name, item.detail, item.url, item.image, item.category));
    });
    return TestDataArray;
}
exports.initGattAutoTestData = initGattAutoTestData;
function initSppAutoTestData() {
    let TestDataArray = [];
    SppAutoTestComposition.forEach(item => {
        TestDataArray.push(new testData_1.TestData(item.name, item.detail, item.url, item.image, item.category));
    });
    return TestDataArray;
}
exports.initSppAutoTestData = initSppAutoTestData;
function initProfileAutoTestData() {
    let TestDataArray = [];
    ProfileAutoTestComposition.forEach(item => {
        TestDataArray.push(new testData_1.TestData(item.name, item.detail, item.url, item.image, item.category));
    });
    return TestDataArray;
}
exports.initProfileAutoTestData = initProfileAutoTestData;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/BaseModel.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/BaseModel.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
class BaseModel {
    constructor() {
    }
}
exports["default"] = BaseModel;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/ConfigData.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigData = void 0;
class ConfigData {
    constructor() {
        this.TAG = 'Bluetooth_Test ';
        this.WH_100_100 = '100%';
        this.WH_25_100 = '25%';
        this.WH_30_100 = '30%';
        this.WH_33_100 = '33%';
        this.WH_35_100 = '35%';
        this.WH_40_100 = '40%';
        this.WH_45_100 = '45%';
        this.WH_50_100 = '50%';
        this.WH_55_100 = '55%';
        this.WH_83_100 = '83%';
        this.WH_90_100 = '90%';
        this.value_20 = 20;
        this.font_20 = 20;
        this.MAX_LINES_1 = 1;
        this.MAX_LINES_2 = 2;
        this.MAX_LINES_3 = 3;
        this.DURATION_TIME = 200;
        this.FUNCTION_TYPE_HDC = 4;
    }
}
exports.ConfigData = ConfigData;
let configData = new ConfigData();
exports["default"] = configData;


/***/ }),

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/LogUtil.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/LogUtil.ts ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogUtil = void 0;
const BaseModel_1 = __importDefault(__webpack_require__(/*! ./BaseModel */ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/Utils/BaseModel.ts"));
let LogLevel = {
    /**
       * debug
       */
    DEBUG: 3,
    /**
       * info
       */
    INFO: 4,
    /**
       * warn
       */
    WARN: 5,
    /**
       * error
       */
    ERROR: 6,
    /**
       * fatal
       */
    FATAL: 7,
};
const LOG_LEVEL = LogLevel.INFO;
/**
 *  log package tool class
 */
class LogUtil extends BaseModel_1.default {
    debug(msg) {
        console.info(msg);
        if (LogLevel.DEBUG >= LOG_LEVEL) {
            console.info(msg);
        }
    }
    log(msg) {
        console.info(msg);
        if (LogLevel.INFO >= LOG_LEVEL) {
            console.info(msg);
        }
    }
    info(msg) {
        console.info(msg);
        if (LogLevel.INFO >= LOG_LEVEL) {
            console.info(msg);
        }
    }
    warn(msg) {
        console.info(msg);
        if (LogLevel.WARN >= LOG_LEVEL) {
            console.warn(msg);
        }
    }
    error(msg) {
        if (LogLevel.ERROR >= LOG_LEVEL) {
            console.error(msg);
        }
    }
}
exports.LogUtil = LogUtil;
let mLogUtil = new LogUtil();
exports["default"] = mLogUtil;


/***/ }),

/***/ "../../api/@ohos.bluetooth.d.ts":
/*!**************************************!*\
  !*** ../../api/@ohos.bluetooth.d.ts ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "../../api/@ohos.events.emitter.d.ts":
/*!*******************************************!*\
  !*** ../../api/@ohos.events.emitter.d.ts ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "../../api/@system.prompt.d.ts":
/*!*************************************!*\
  !*** ../../api/@system.prompt.d.ts ***!
  \*************************************/
/***/ (() => {



/***/ })

}]);
          globalThis["__common_module_cache___78b3af9a3d4590e7047044e12e71f107"] = globalThis["__common_module_cache___78b3af9a3d4590e7047044e12e71f107"] || {};
//# sourceMappingURL=commons.js.map