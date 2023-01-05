var _77984ee49c32b821f7625000344478cc;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility2/pages/index.ets?entry ***!
  \**************************************************************************************************************************************************************************/

class Index extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('Hello World Test Fa 2', this, "message");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    render() {
        Row.create();
        Row.height('100%');
        Column.create();
        Column.width('100%');
        Text.create(this.message);
        Text.fontSize(50);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Column.pop();
        Row.pop();
    }
}
loadDocument(new Index("1", undefined, {}));

_77984ee49c32b821f7625000344478cc = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map